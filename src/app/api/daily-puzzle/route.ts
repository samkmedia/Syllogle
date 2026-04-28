import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Puzzle } from '@/types';
import { getDailyPuzzle, getTodayString } from '@/lib/puzzleUtils';

// ── KV helpers (Vercel KV in prod, in-memory fallback for local dev) ────────

// In-memory cache for local development
const memCache = new Map<string, Puzzle>();

async function kvGet(key: string): Promise<Puzzle | null> {
  if (process.env.KV_REST_API_URL) {
    // Vercel KV is available — use it
    const { kv } = await import('@vercel/kv');
    return kv.get<Puzzle>(key);
  }
  return memCache.get(key) ?? null;
}

async function kvSet(key: string, value: Puzzle, exSeconds: number): Promise<void> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import('@vercel/kv');
    await kv.set(key, value, { ex: exSeconds });
    return;
  }
  memCache.set(key, value);
}

// ── Gemini generation ───────────────────────────────────────────────────────

const MODEL = 'gemini-2.5-pro'; // Pro for higher reasoning quality on daily puzzles

function buildPrompt(dateStr: string, puzzleNumber: number): string {
  const difficulty = ['medium', 'hard', 'medium', 'hard', 'hard'][puzzleNumber % 5];
  const type = ['syllogism', 'conditional', 'quantifier', 'syllogism', 'conditional'][puzzleNumber % 5];

  return `You are generating one LSAT-style logic puzzle for a daily puzzle game called "Syllogle."
Today's date: ${dateStr}. Puzzle number: ${puzzleNumber}.

GAME RULES:
- Show 3–5 short statements.
- Players decide: can ALL statements be true at the same time?
- If inconsistent, exactly ONE statement is the clearest to remove to make the rest consistent.

STYLE: ${type} reasoning — use formal logical relationships:
- Universal: "All A are B", "No A is B", "Every A is B"
- Particular: "Some A are B", "At least one A is B", "Not all A are B"
- Conditional: "If A, then B", "A only if B", "Unless A, B"
- Chain reasoning: if A→B and B→C, then A→C

Difficulty: ${difficulty}
${difficulty === 'hard' ? 'The contradiction requires chaining 3+ logical steps. Each statement sounds independently reasonable.' : ''}
${difficulty === 'medium' ? 'The contradiction requires combining two statements before a third creates the conflict.' : ''}

STRICT RULES:
- Never make two statements simple direct negations of each other (creates two valid answers)
- The contradiction must flow through the logical chain
- Removing ONLY answerIndex must resolve the inconsistency
- Use concrete nouns — no vague qualifiers like "usually" or "often"
- NO DOUBLE NEGATIVES — never write "not all X are not Y", "no X cannot", or any two-negation construction. Use positive forms.
- In the explanation, refer to statements by display number (Statement 1, Statement 2, etc.) — NOT Statement 0. answerIndex in JSON is still 0-based.

Verify before responding:
- isConsistent=false: statements truly cannot all be true simultaneously
- isConsistent=true: all statements genuinely can coexist
- answerIndex is the ONE statement whose removal makes the rest consistent (0-based, null if consistent)

Respond with ONLY a valid JSON object, no markdown:
{
  "id": "daily-${dateStr}",
  "difficulty": "${difficulty}",
  "category": "${type}",
  "statements": ["...", "...", "..."],
  "isConsistent": false,
  "answerIndex": 0,
  "explanation": "2–3 sentences tracing the exact logical chain that produces the contradiction."
}`;
}

function isValidPuzzle(p: unknown): p is Puzzle {
  if (typeof p !== 'object' || p === null) return false;
  const obj = p as Record<string, unknown>;
  if (typeof obj.id !== 'string') return false;
  if (!['easy', 'medium', 'hard'].includes(obj.difficulty as string)) return false;
  if (!['everyday', 'science', 'business', 'social', 'abstract'].includes(obj.category as string)) return false;
  if (!Array.isArray(obj.statements) || obj.statements.length < 2) return false;
  if (typeof obj.isConsistent !== 'boolean') return false;
  if (obj.isConsistent && obj.answerIndex !== null) return false;
  if (!obj.isConsistent && typeof obj.answerIndex !== 'number') return false;
  if (typeof obj.explanation !== 'string' || obj.explanation.length < 10) return false;
  return true;
}

async function generateDailyPuzzle(dateStr: string, puzzleNumber: number): Promise<Puzzle | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL });
    const result = await model.generateContent(buildPrompt(dateStr, puzzleNumber));
    const text = result.response.text().trim();
    const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
    const parsed = JSON.parse(cleaned);
    if (!isValidPuzzle(parsed)) return null;
    return parsed;
  } catch (err) {
    console.error('[daily-puzzle] Gemini generation failed:', err);
    return null;
  }
}

// ── Route handler ───────────────────────────────────────────────────────────

export async function GET() {
  const today = getTodayString();
  const cacheKey = `daily:${today}`;

  // 1. Check cache
  const cached = await kvGet(cacheKey);
  if (cached) {
    return NextResponse.json({ puzzle: cached, source: 'cache' });
  }

  // 2. Try AI generation
  // Puzzle number = days since epoch (for difficulty cycling)
  const epoch = new Date('2026-04-28').getTime();
  const puzzleNumber = Math.floor((new Date(today).getTime() - epoch) / 86400000) + 1;

  const generated = await generateDailyPuzzle(today, puzzleNumber);

  if (generated) {
    // Cache until midnight + 1 hour buffer
    const now = new Date();
    const midnight = new Date(today);
    midnight.setDate(midnight.getDate() + 1);
    midnight.setHours(1, 0, 0, 0);
    const ttl = Math.floor((midnight.getTime() - now.getTime()) / 1000);
    await kvSet(cacheKey, generated, ttl);
    return NextResponse.json({ puzzle: generated, source: 'generated' });
  }

  // 3. Fallback to deterministic local puzzle
  const fallback = getDailyPuzzle();
  return NextResponse.json({ puzzle: fallback, source: 'fallback' });
}
