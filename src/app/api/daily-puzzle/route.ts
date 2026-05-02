import { NextResponse } from 'next/server';
import { getDailyPuzzleSet } from '@/lib/dailyPuzzleServer';

export async function GET() {
  const { puzzles, puzzleNumber } = await getDailyPuzzleSet();
  return NextResponse.json({ puzzles, puzzleNumber });
}
