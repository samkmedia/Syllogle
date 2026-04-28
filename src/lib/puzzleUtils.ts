import handcraftedPuzzles from '@/data/puzzles';
import generatedPuzzles from '@/data/generated-puzzles';
import { Puzzle } from '@/types';

// Combined pool: handcrafted + AI-generated
const allPuzzles: Puzzle[] = [...handcraftedPuzzles, ...generatedPuzzles];

/**
 * Returns a deterministic daily puzzle (fallback when API is unavailable).
 * Cycles through all puzzles so every day has a unique one.
 */
export function getDailyPuzzle(): Puzzle {
  const today = getTodayString();
  const index = dateToIndex(today);
  return allPuzzles[index % allPuzzles.length];
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
 * Converts a YYYY-MM-DD date string into a numeric index.
 */
function dateToIndex(dateStr: string): number {
  const epoch = new Date('2025-01-01').getTime();
  const date = new Date(dateStr).getTime();
  return Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
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
 * Returns the daily puzzle number (1-indexed, starting Jan 1 2025).
 */
export function getDailyPuzzleNumber(): number {
  const today = getTodayString();
  return dateToIndex(today) + 1;
}

/**
 * Returns all puzzles.
 */
export function getAllPuzzles(): Puzzle[] {
  return allPuzzles;
}
