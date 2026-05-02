import { GoogleGenerativeAI } from '@google/generative-ai';
import { Puzzle } from '@/types';
import { getDailyPuzzles, getDailyPuzzleNumber, getTodayString } from '@/lib/puzzleUtils';

// ── KV helpers (Vercel KV in prod, in-memory fallback for local dev) ──────────

const memCache = new Map<string, Puzzle[]>();

async function kvGet(key: string): Promise<Puzzle[] | null> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import('@vercel/kv');
    return kv.get<Puzzle[]>(key);
  }
  return memCache.get(key) ?? null;
}

async function kvSet(key: string, value: Puzzle[], exSeconds: number): Promise<void> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import('@vercel/kv');
    await kv.set(key, value, { ex: exSeconds });
    return;
  }
  memCache.set(key, value);
}

// ── Validation ────────────────────────────────────────────────────────────────

function isValidPuzzle(p: unknown): p is Puzzle {
  if (typeof p !== 'object' || p === null) return false;
  const obj = p as Record<string, unknown>;
  if (typeof obj.id !== 'string') return false;
  if (!['easy', 'medium', 'hard'].includes(obj.difficulty as string)) return false;
  if (typeof obj.category !== 'string' || obj.category.length === 0) return false;
  if (!Array.isArray(obj.statements) || obj.statements.length < 2) return false;
  if (obj.statements.some((s) => typeof s !== 'string')) return false;
  if (typeof obj.isConsistent !== 'boolean') return false;
  if (obj.isConsistent && obj.answerIndex !== null) return false;
  if (!obj.isConsistent && typeof obj.answerIndex !== 'number') return false;
  if (typeof obj.explanation !== 'string' || obj.explanation.length < 10) return false;
  return true;
}

// ── Gemini generation ─────────────────────────────────────────────────────────

const MODEL = 'gemini-2.5-pro';

function buildPrompt(dateStr: string): string {
  return `Generate exactly 5 LSAT-style logic puzzles for a daily puzzle game called "Syllogle."
Date: ${dateStr}.

GAME RULES:
- Show 3–5 short statements.
- Players decide: can ALL statements be true at the same time?
- If inconsistent, exactly ONE statement is the clearest to remove to make the rest consistent.

Generate exactly 5 puzzles: 2 medium difficulty, 3 hard difficulty.
Use a mix of syllogism, conditional, and quantifier reasoning types.

LSAT STYLE — formal logical structures only:
- Universal: "All A are B", "No A is B", "Every A is B"
- Particular: "Some A are B", "At least one A is B", "Not all A are B"
- Conditional: "If A, then B", "A only if B", "Unless A, B"
- Chain reasoning: A→B and B→C therefore A→C

Medium: contradiction requires 2 logical steps — combine two statements before the conflict with a third becomes visible.
Hard: contradiction requires chaining 3+ logical steps — each statement sounds independently reasonable.

STRICT RULES:
1. Never make two statements simple direct negations of each other — that creates two valid answers
2. For inconsistent puzzles: removing ONLY the answerIndex statement resolves inconsistency — removing any other single statement must NOT resolve it
3. Statements must be precise — no vague qualifiers like "usually" or "often"
4. NO DOUBLE NEGATIVES — never write "not all X are not Y", "no X cannot", etc.
5. Explanations reference statements by display number (1-based): "Statement 1", "Statement 2", etc.
6. answerIndex is 0-based in the JSON (null if consistent)
7. Mix consistent and inconsistent puzzles across the 5 (roughly half each)

Each puzzle id: "gemini-${dateStr}-N" where N is 1–5.

Respond with ONLY a valid JSON array, no markdown:
[
  {
    "id": "gemini-${dateStr}-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": ["...", "...", "..."],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "2–3 sentences tracing the exact logical chain."
  },
  ...
]`;
}

async function generateDailySet(dateStr: string): Promise<Puzzle[] | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL });
    const result = await model.generateContent(buildPrompt(dateStr));
    const text = result.response.text().trim();
    const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
    const parsed = JSON.parse(cleaned);

    if (!Array.isArray(parsed)) return null;

    const valid = parsed.filter(isValidPuzzle);
    if (valid.length < 5) {
      console.error(`[daily-set] Only ${valid.length}/5 puzzles passed validation`);
      return valid.length > 0 ? valid : null;
    }
    return valid.slice(0, 5);
  } catch (err) {
    console.error('[daily-set] Gemini generation failed:', err);
    return null;
  }
}

// ── Main export ───────────────────────────────────────────────────────────────

export async function getDailyPuzzleSet(): Promise<{ puzzles: Puzzle[]; puzzleNumber: number }> {
  const today = getTodayString();
  const puzzleNumber = getDailyPuzzleNumber();
  const cacheKey = `daily-set:${today}`;

  // 1. Check KV cache (covers both static and Gemini-generated sets)
  const cached = await kvGet(cacheKey);
  if (cached && cached.length >= 5) {
    return { puzzles: cached.slice(0, 5), puzzleNumber };
  }

  // 2. Try static pool (free, deterministic, no API call)
  const staticPuzzles = getDailyPuzzles();
  if (staticPuzzles.length === 5) {
    return { puzzles: staticPuzzles, puzzleNumber };
  }

  // 3. Static pool exhausted — generate via Gemini and cache until tomorrow
  console.log(`[daily-set] Static pool exhausted for day ${puzzleNumber}, generating via Gemini…`);
  const generated = await generateDailySet(today);

  if (generated && generated.length >= 5) {
    const midnight = new Date(today);
    midnight.setDate(midnight.getDate() + 1);
    midnight.setHours(1, 0, 0, 0);
    const ttl = Math.floor((midnight.getTime() - Date.now()) / 1000);
    await kvSet(cacheKey, generated, ttl);
    return { puzzles: generated.slice(0, 5), puzzleNumber };
  }

  // 4. Gemini failed — return whatever static puzzles remain (could be 0–4)
  console.error('[daily-set] Gemini generation failed, falling back to partial static pool');
  return { puzzles: staticPuzzles, puzzleNumber };
}
