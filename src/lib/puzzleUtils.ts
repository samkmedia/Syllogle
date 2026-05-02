import handcraftedPuzzles from '@/data/puzzles';
import generatedPuzzles from '@/data/generated-puzzles';
import { Puzzle } from '@/types';

// Combined pool: handcrafted + AI-generated
const allPuzzles: Puzzle[] = [...handcraftedPuzzles, ...generatedPuzzles];

// Daily pool: medium/hard only, never practiceOnly puzzles
const dailyPuzzles: Puzzle[] = allPuzzles.filter(
  (p) => p.difficulty !== 'easy' && !p.practiceOnly
);

// Fixed seed so the master ordering never changes day-to-day
const DAILY_MASTER_SEED = 8675309;

// Shuffle the daily pool once. Day N takes positions [N*5, N*5+5), wrapping as needed.
// This guarantees no puzzle repeats until the entire pool has been used.
const dailySequence: Puzzle[] = seededShuffle(dailyPuzzles, DAILY_MASTER_SEED);

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

/**
 * Converts a YYYY-MM-DD date string into a numeric index (days since launch).
 */
function dateToIndex(dateStr: string): number {
  const epoch = new Date('2026-04-28').getTime();
  const date = new Date(dateStr).getTime();
  return Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
}

/**
 * Returns up to 5 puzzles from the static daily pool for today.
 * Returns an empty array when the static pool is exhausted — callers
 * should fall back to Gemini generation in that case.
 * No wrap-around: each puzzle is used at most once.
 */
export function getDailyPuzzles(): Puzzle[] {
  const today = getTodayString();
  const dayIndex = dateToIndex(today);
  const start = dayIndex * 5;
  if (start + 5 > dailySequence.length) return [];
  return dailySequence.slice(start, start + 5);
}

/**
 * Returns the practice-eligible puzzle pool:
 * - puzzles marked practiceOnly, and
 * - daily puzzles whose day has already passed (retired from daily rotation).
 * Future daily puzzles are excluded so they stay fresh for daily mode.
 */
export function getPracticePuzzles(): Puzzle[] {
  const today = getTodayString();
  const dayIndex = dateToIndex(today);
  const retiredCount = Math.min(dayIndex * 5, dailySequence.length);
  const retiredIds = new Set(dailySequence.slice(0, retiredCount).map((p) => p.id));
  return allPuzzles.filter((p) => p.practiceOnly || retiredIds.has(p.id));
}

/**
 * Returns the daily puzzle number (1-indexed, starting launch day).
 */
export function getDailyPuzzleNumber(): number {
  const today = getTodayString();
  return dateToIndex(today) + 1;
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
