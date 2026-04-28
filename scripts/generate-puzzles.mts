/**
 * Batch puzzle generation script.
 * Run with: npx tsx scripts/generate-puzzles.mts
 *
 * Calls Gemini 2.5 Flash to generate puzzles and appends them to
 * src/data/generated-puzzles.ts. Existing handcrafted puzzles are untouched.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// ── Config ─────────────────────────────────────────────────────────────────

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Missing GEMINI_API_KEY in environment.');
  process.exit(1);
}

const MODEL = 'gemini-2.5-flash';
const PUZZLES_PER_BATCH = 10;
const BATCHES = 5; // 50 puzzles total per run — increase as needed
const OUT_FILE = path.join(process.cwd(), 'src/data/generated-puzzles.ts');

const DIFFICULTIES = ['easy', 'medium', 'medium', 'hard', 'hard'] as const;
const CATEGORIES = ['syllogism', 'conditional', 'quantifier', 'syllogism', 'conditional'] as const;

// ── Types ──────────────────────────────────────────────────────────────────

interface RawPuzzle {
  id: string;
  difficulty: string;
  category: string;
  statements: string[];
  isConsistent: boolean;
  answerIndex: number | null;
  explanation: string;
}

// ── Prompt ─────────────────────────────────────────────────────────────────

function buildPrompt(
  difficulty: string,
  category: string,
  batchIndex: number
): string {
  return `You are generating logic puzzles for a daily puzzle game called "Syllogle," modeled on LSAT Logical Reasoning questions and classical syllogism logic.

GAME RULES:
- Show 3–5 short statements.
- Players decide: can ALL of these statements be true at the same time?
- If inconsistent, exactly ONE statement is the clearest to remove to make the rest consistent.

PUZZLE TYPE FOR THIS BATCH: ${category}

LSAT SYLLOGISM STYLE — use these logical structures:
- Universal affirmative: "All A are B", "Every A is B"
- Universal negative: "No A is B", "No A are B"
- Particular affirmative: "Some A are B", "At least one A is B"
- Particular negative: "Some A are not B", "Not all A are B"
- Conditional: "If A, then B", "A only if B", "Unless A, B"
- Contrapositive chains: If A→B and B→C, then A→C
- Quantifier conflicts: "All", "None", "Some" in combination

EXAMPLES OF GOOD LSAT-STYLE PUZZLES:
Example 1 (inconsistent):
  "All members of the committee voted yes."
  "No one who voted yes supported the amendment."
  "At least one committee member supported the amendment."
  → Contradiction: All committee members voted yes → none supported amendment → but at least one did.

Example 2 (consistent):
  "All lawyers are college graduates."
  "Some college graduates are not lawyers."
  "Maria is a college graduate."
  → Consistent: Maria could be a non-lawyer graduate.

Example 3 (inconsistent):
  "If a student passes the exam, they receive a certificate."
  "No student who missed more than three classes received a certificate."
  "Every student in the program passed the exam."
  "Some students in the program missed more than three classes."
  → Chain: missed 3+ classes → no certificate → but passed exam → certificate. Contradiction.

DIFFICULTY: ${difficulty}
${difficulty === 'hard' ? 'Hard: the contradiction requires chaining 3+ logical steps. Each statement sounds independently reasonable. The inconsistency only appears when you trace the full logical chain.' : ''}
${difficulty === 'medium' ? 'Medium: the contradiction requires 2 logical steps. Players need to combine two statements before the conflict with a third becomes visible.' : ''}
${difficulty === 'easy' ? 'Easy: one direct logical inference reveals the contradiction. Still requires actual reasoning — not a surface-level contradiction.' : ''}

Generate exactly ${PUZZLES_PER_BATCH} puzzles. Mix consistent and inconsistent (roughly half each).

STRICT QUALITY RULES:
1. Never make two statements simple direct negations of each other — that creates two valid answers
2. The contradiction must flow THROUGH the logical chain, not be immediately visible
3. For inconsistent puzzles: removing ONLY the answerIndex statement makes the set consistent — removing any other single statement must NOT resolve it
4. Statements must be precise and unambiguous — no vague qualifiers like "usually" or "often"
5. Use concrete nouns (students, lawyers, birds, committee members) not abstract ones
6. ABSOLUTELY NO DOUBLE NEGATIVES — never write "not all X are not Y", "no X cannot", "none who did not", or any construction with two negations. Rewrite using a positive form instead.
7. Explanations refer to statements by their DISPLAY number (1-based): "Statement 1", "Statement 2", etc. — NOT "Statement 0". answerIndex in the JSON is still 0-based.
8. Explanations must trace the exact logical chain — 2–3 sentences, plain English.

Each puzzle id: "gen-${batchIndex}-N" where N is 1..${PUZZLES_PER_BATCH}
answerIndex is 0-based (null if consistent).

Respond with ONLY a valid JSON array, no markdown:
[
  {
    "id": "gen-${batchIndex}-1",
    "difficulty": "${difficulty}",
    "category": "${category}",
    "statements": ["...", "...", "..."],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "..."
  },
  ...
]`;
}

// ── Validation ─────────────────────────────────────────────────────────────

function isValidPuzzle(p: unknown): p is RawPuzzle {
  if (typeof p !== 'object' || p === null) return false;
  const obj = p as Record<string, unknown>;
  if (typeof obj.id !== 'string') return false;
  if (!['easy', 'medium', 'hard'].includes(obj.difficulty as string)) return false;
  // Accept any string category — we don't restrict to a fixed list
  if (typeof obj.category !== 'string' || obj.category.length === 0) return false;
  if (!Array.isArray(obj.statements) || obj.statements.length < 2) return false;
  if (obj.statements.some((s) => typeof s !== 'string')) return false;
  if (typeof obj.isConsistent !== 'boolean') return false;
  if (obj.isConsistent && obj.answerIndex !== null) return false;
  if (!obj.isConsistent && typeof obj.answerIndex !== 'number') return false;
  if (
    !obj.isConsistent &&
    typeof obj.answerIndex === 'number' &&
    (obj.answerIndex < 0 || obj.answerIndex >= (obj.statements as string[]).length)
  )
    return false;
  if (typeof obj.explanation !== 'string' || obj.explanation.length < 10) return false;
  return true;
}

// ── Main ───────────────────────────────────────────────────────────────────

async function generateBatch(
  genAI: GoogleGenerativeAI,
  difficulty: string,
  category: string,
  batchIndex: number
): Promise<RawPuzzle[]> {
  const model = genAI.getGenerativeModel({ model: MODEL });
  const prompt = buildPrompt(difficulty, category, batchIndex);

  console.log(`  Generating batch ${batchIndex} (${difficulty} / ${category})…`);

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  // Strip markdown code fences if present
  const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.error(`  ✗ Batch ${batchIndex} returned invalid JSON. Skipping.`);
    return [];
  }

  if (!Array.isArray(parsed)) {
    console.error(`  ✗ Batch ${batchIndex} response is not an array. Skipping.`);
    return [];
  }

  const valid = parsed.filter((p) => {
    if (!isValidPuzzle(p)) {
      console.warn(`  ⚠ Skipping malformed puzzle: ${JSON.stringify(p).slice(0, 80)}`);
      return false;
    }
    return true;
  }) as RawPuzzle[];

  console.log(`  ✓ Batch ${batchIndex}: ${valid.length}/${parsed.length} puzzles valid`);
  return valid;
}

async function main() {
  const genAI = new GoogleGenerativeAI(API_KEY!);
  const allPuzzles: RawPuzzle[] = [];

  for (let i = 0; i < BATCHES; i++) {
    const difficulty = DIFFICULTIES[i % DIFFICULTIES.length];
    const category = CATEGORIES[i % CATEGORIES.length];
    const puzzles = await generateBatch(genAI, difficulty, category, i + 1);
    allPuzzles.push(...puzzles);
    // Small delay between batches to be kind to rate limits
    if (i < BATCHES - 1) await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\nTotal valid puzzles generated: ${allPuzzles.length}`);

  const fileContent = `// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = ${JSON.stringify(allPuzzles, null, 2)};

export default generatedPuzzles;
`;

  fs.writeFileSync(OUT_FILE, fileContent, 'utf-8');
  console.log(`Saved to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
