import { getDailyPuzzleSet } from '@/lib/dailyPuzzleServer';
import DailyGame from '@/components/DailyGame';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DailyPage() {
  const { puzzles, puzzleNumber } = await getDailyPuzzleSet();

  if (puzzles.length < 5) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10 max-w-lg mx-auto w-full text-center space-y-4">
        <p className="text-4xl">🔧</p>
        <p className="text-lg font-semibold text-gray-900">Today&apos;s puzzle is loading</p>
        <p className="text-sm text-gray-500">We&apos;re putting the finishing touches on today&apos;s set. Try again in a minute.</p>
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back to home
        </Link>
      </main>
    );
  }

  return <DailyGame puzzles={puzzles} puzzleNumber={puzzleNumber} />;
}
