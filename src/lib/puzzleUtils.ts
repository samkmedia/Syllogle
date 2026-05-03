import handcraftedPuzzles from '@/data/puzzles';
import generatedPuzzles from '@/data/generated-puzzles';
import { Puzzle } from '@/types';

// Combined pool: handcrafted + AI-generated
const allPuzzles: Puzzle[] = [...handcraftedPuzzles, ...generatedPuzzles];

// Daily pool: medium/hard only, never practiceOnly puzzles
const dailyPuzzles: Puzzle[] = allPuzzles.filter(
  (p) => p.difficulty !== 'easy' && !p.practiceOnly
);

/**
 * Seeded Fisher-Yates shuffle — deterministic for a given seed.
 */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = Math.abs(seed * 1664525 + 1013904223) & 0x7fffffff;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ── Pre-fix puzzle exclusion ───────────────────────────────────────────────
//
// Days 0–2 (Apr 28–30) used the old algorithm: seededShuffle(pool, dayIndex).
// Days 3–4 (May 1–2) used the first version of the new algorithm (master seed
// 8675309, positions 15–24). Both sets must be excluded from the fresh
// sequence so no puzzle ever repeats as a daily.

const OLD_ALGO_SEED = 8675309;

const excludedDailyIds: Set<string> = (() => {
  const ids = new Set<string>();
  // Old algorithm: days 0, 1, 2
  for (let i = 0; i < 3; i++) {
    seededShuffle(dailyPuzzles, i).slice(0, 5).forEach((p) => ids.add(p.id));
  }
  // New algorithm v1: days 3 and 4 were positions 15–24 of the old master shuffle
  seededShuffle(dailyPuzzles, OLD_ALGO_SEED)
    .slice(15, 25)
    .forEach((p) => ids.add(p.id));
  return ids;
})();

// Fresh pool and sequence — excludes every puzzle already used as a daily
const DAILY_FRESH_SEED = 3141592;
const FRESH_EPOCH = '2026-05-03'; // first day served by this sequence

const freshDailyPool: Puzzle[] = dailyPuzzles.filter((p) => !excludedDailyIds.has(p.id));
const dailySequence: Puzzle[] = seededShuffle(freshDailyPool, DAILY_FRESH_SEED);

// ── Date helpers ──────────────────────────────────────────────────────────────

/**
 * Returns today's date as a YYYY-MM-DD string.
 */
export function getTodayString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Days since the original launch date — used for puzzle numbering only. */
function dateToLaunchIndex(dateStr: string): number {
  const epoch = new Date('2026-04-28').getTime();
  const date = new Date(dateStr).getTime();
  return Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
}

/** Days since the fresh sequence epoch — used for puzzle selection. */
function dateToFreshIndex(dateStr: string): number {
  const epoch = new Date(FRESH_EPOCH).getTime();
  const date = new Date(dateStr).getTime();
  return Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Returns 5 puzzles from the fresh daily sequence for today.
 * Returns an empty array when exhausted — caller falls back to Gemini.
 * No puzzle ever repeats (all pre-fix puzzles are excluded from the pool).
 */
export function getDailyPuzzles(): Puzzle[] {
  const today = getTodayString();
  const dayIndex = dateToFreshIndex(today);
  if (dayIndex < 0) return [];
  const start = dayIndex * 5;
  if (start + 5 > dailySequence.length) return [];
  return dailySequence.slice(start, start + 5);
}

/**
 * Returns the daily puzzle number (1-indexed from launch date, never resets).
 */
export function getDailyPuzzleNumber(): number {
  return dateToLaunchIndex(getTodayString()) + 1;
}

/**
 * Returns the practice-eligible puzzle pool:
 * - puzzles marked practiceOnly
 * - puzzles that have already been used as a daily (pre-fix or retired from fresh sequence)
 * Future daily puzzles stay hidden so they remain fresh.
 */
export function getPracticePuzzles(): Puzzle[] {
  const today = getTodayString();
  const freshIndex = dateToFreshIndex(today);

  // All pre-fix daily puzzle IDs are available for practice
  const retiredIds = new Set(excludedDailyIds);

  // Add fresh-sequence puzzles already served (today's not included yet)
  const usedFromFresh = Math.min(Math.max(freshIndex, 0) * 5, dailySequence.length);
  dailySequence.slice(0, usedFromFresh).forEach((p) => retiredIds.add(p.id));

  return allPuzzles.filter((p) => p.practiceOnly || retiredIds.has(p.id));
}

/**
 * Returns a random puzzle from the given pool (defaults to all puzzles),
 * optionally excluding certain IDs.
 */
export function getRandomPuzzle(excludeIds: string[] = [], pool?: Puzzle[]): Puzzle {
  const source = pool ?? allPuzzles;
  const available = source.filter((p) => !excludeIds.includes(p.id));
  const draw = available.length > 0 ? available : source;
  return draw[Math.floor(Math.random() * draw.length)];
}

/**
 * Returns all puzzles.
 */
export function getAllPuzzles(): Puzzle[] {
  return allPuzzles;
}
