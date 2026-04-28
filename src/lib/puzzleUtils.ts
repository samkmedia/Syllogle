import handcraftedPuzzles from '@/data/puzzles';
import generatedPuzzles from '@/data/generated-puzzles';
import { Puzzle } from '@/types';

// Combined pool: handcrafted + AI-generated
const allPuzzles: Puzzle[] = [...handcraftedPuzzles, ...generatedPuzzles];

// Medium/hard only — for daily puzzles
const dailyPuzzles: Puzzle[] = allPuzzles.filter((p) => p.difficulty !== 'easy');

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
 * Returns 5 deterministic daily puzzles for today (medium/hard only).
 * Different set each day, consistent for all users on the same day.
 */
export function getDailyPuzzles(): Puzzle[] {
  const today = getTodayString();
  const seed = dateToIndex(today);
  const shuffled = seededShuffle(dailyPuzzles, seed);
  return shuffled.slice(0, 5);
}

/**
 * Returns the daily puzzle number (1-indexed, starting launch day).
 */
export function getDailyPuzzleNumber(): number {
  const today = getTodayString();
  return dateToIndex(today) + 1;
}

/**
 * Returns a random puzzle from the full pool, optionally excluding certain IDs.
 */
export function getRandomPuzzle(excludeIds: string[] = []): Puzzle {
  const available = allPuzzles.filter((p) => !excludeIds.includes(p.id));
  const pool = available.length > 0 ? available : allPuzzles;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Returns all puzzles.
 */
export function getAllPuzzles(): Puzzle[] {
  return allPuzzles;
}
