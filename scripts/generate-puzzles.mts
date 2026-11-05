/**
 * Batch puzzle generation script.
 * Run with: npx tsx scripts/generate-puzzles.mts
 * Override batch count for a one-off catch-up run: BATCH_COUNT=250 npx tsx scripts/generate-puzzles.mts
 *
 * Calls Gemini to generate puzzles and APPENDS them to the existing pool in
 * src/data/generated-puzzles.ts — existing puzzles (handcrafted or
 * previously generated) are read first and kept untouched, new puzzles are
 * added on top with run-unique ids so they never collide with past runs.
 * Progress is saved after every batch so an interrupted run doesn't lose
 * work already paid for.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { Puzzle } from '../src/types';

// ── Config ─────────────────────────────────────────────────────────────────

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Missing GEMINI_API_KEY in environment.');
  process.exit(1);
}

const MODELS = ['gemini-2.5-flash', 'gemini-2.5-pro'];
const PUZZLES_PER_BATCH = 10;
// 50 batches/run = +500 puzzles/month by default — far more than the ~150/month
// (5/day) consumed, so the pool grows a comfortable surplus every run. Override
// with BATCH_COUNT for a larger one-off catch-up run.
const BATCHES = Number(process.env.BATCH_COUNT) || 50;
const OUT_FILE = path.join(process.cwd(), 'src/data/generated-puzzles.ts');
// Unique per run so ids never collide with a previous run's puzzles — the old
// script reused "gen-1-1".."gen-50-10" every run, which combined with
// overwriting the file instead of appending, silently discarded all
// previously generated puzzles each month.
const RUN_ID = Date.now();

const DIFFICULTIES = ['medium', 'hard', 'medium', 'hard', 'hard'] as const;
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
  const prompt = buildPrompt(difficulty, category, batchIndex);
  console.log(`  Generating batch ${batchIndex} (${difficulty} / ${category})…`);

  for (const modelName of MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();
      const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

      let parsed: unknown;
      try {
        parsed = JSON.parse(cleaned);
      } catch {
        console.error(`  ✗ Batch ${batchIndex} (${modelName}) returned invalid JSON. Trying next model.`);
        continue;
      }

      if (!Array.isArray(parsed)) {
        console.error(`  ✗ Batch ${batchIndex} (${modelName}) response is not an array. Trying next model.`);
        continue;
      }

      const valid = parsed.filter((p) => {
        if (!isValidPuzzle(p)) {
          console.warn(`  ⚠ Skipping malformed puzzle: ${JSON.stringify(p).slice(0, 80)}`);
          return false;
        }
        return true;
      }) as RawPuzzle[];

      // Reassign ids ourselves — don't trust the model to follow the
      // requested format or to stay unique across batches/runs. RUN_ID makes
      // every id from this run distinct from every past and future run.
      valid.forEach((p, i) => {
        p.id = `gen-${RUN_ID}-${batchIndex}-${i + 1}`;
      });

      console.log(`  ✓ Batch ${batchIndex}: ${valid.length}/${parsed.length} puzzles valid`);
      return valid;
    } catch (err) {
      console.error(`  ✗ Batch ${batchIndex} (${modelName}) failed:`, err);
    }
  }

  console.error(`  ✗ Batch ${batchIndex}: all models failed. Skipping.`);
  return [];
}

/** Reads the existing pool straight out of the generated file's source text,
 * avoiding module-import interop (double-wrapped default exports under tsx
 * in this Next.js version) entirely. Returns [] if the file doesn't exist
 * yet or has no array to parse. */
function readExistingPuzzles(): Puzzle[] {
  if (!fs.existsSync(OUT_FILE)) return [];
  const source = fs.readFileSync(OUT_FILE, 'utf-8');
  const match = source.match(/const generatedPuzzles: Puzzle\[\] = (\[[\s\S]*\]);/);
  if (!match) return [];
  return JSON.parse(match[1]);
}

function writePuzzles(puzzles: Puzzle[]): void {
  const fileContent = `// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = ${JSON.stringify(puzzles, null, 2)};

export default generatedPuzzles;
`;
  fs.writeFileSync(OUT_FILE, fileContent, 'utf-8');
}

async function main() {
  const genAI = new GoogleGenerativeAI(API_KEY!);
  const existingPuzzles = readExistingPuzzles();
  console.log(`Existing pool: ${existingPuzzles.length} puzzles. Appending up to ${BATCHES * PUZZLES_PER_BATCH} more…`);

  const newPuzzles: RawPuzzle[] = [];

  for (let i = 0; i < BATCHES; i++) {
    const difficulty = DIFFICULTIES[i % DIFFICULTIES.length];
    const category = CATEGORIES[i % CATEGORIES.length];
    const puzzles = await generateBatch(genAI, difficulty, category, i + 1);
    newPuzzles.push(...puzzles);

    // Save after every batch — an interrupted run keeps whatever it already
    // generated instead of losing it (and the quota spent on it).
    writePuzzles([...existingPuzzles, ...newPuzzles] as Puzzle[]);

    // Small delay between batches to be kind to rate limits
    if (i < BATCHES - 1) await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\nNew valid puzzles generated: ${newPuzzles.length}`);
  console.log(`Total pool size: ${existingPuzzles.length + newPuzzles.length}`);
  console.log(`Saved to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
