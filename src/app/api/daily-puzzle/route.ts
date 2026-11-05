import { NextResponse } from 'next/server';
import { getDailyPuzzleSet } from '@/lib/dailyPuzzleServer';

// Worst case: ~10s waiting on another request's lock + two 12s Gemini model
// attempts + overhead. Capped explicitly so the platform never leaves a
// request hanging indefinitely.
export const maxDuration = 45;

export async function GET() {
  const { puzzles, puzzleNumber } = await getDailyPuzzleSet();
  return NextResponse.json({ puzzles, puzzleNumber });
}
