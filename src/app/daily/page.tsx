import { getDailyPuzzleSet } from '@/lib/dailyPuzzleServer';
import DailyGame from '@/components/DailyGame';

export const dynamic = 'force-dynamic';

export default async function DailyPage() {
  const { puzzles, puzzleNumber } = await getDailyPuzzleSet();
  return <DailyGame puzzles={puzzles} puzzleNumber={puzzleNumber} />;
}
