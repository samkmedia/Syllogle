import { NextResponse } from 'next/server';
import { getDailyPuzzleSet } from '@/lib/dailyPuzzleServer';

// Worst case: two Gemini model attempts at 12s each + overhead. Capped
// explicitly so the platform never leaves a request hanging indefinitely.
export const maxDuration = 30;

export async function GET() {
  const { puzzles, puzzleNumber } = await getDailyPuzzleSet();
  return NextResponse.json({ puzzles, puzzleNumber });
}
