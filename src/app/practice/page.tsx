'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { getRandomPuzzle, getTodayString } from '@/lib/puzzleUtils';
import { recordPracticeResult } from '@/lib/storage';
import { Puzzle } from '@/types';
import PuzzleBoard from '@/components/PuzzleBoard';

export default function PracticePage() {
  const [puzzle, setPuzzle] = useState<Puzzle>(() => getRandomPuzzle());
  const [playedIds, setPlayedIds] = useState<string[]>([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [key, setKey] = useState(0);

  const handleComplete = useCallback(
    (result: { correct: boolean; solveTimeSeconds: number; attempts: number }) => {
      recordPracticeResult({
        puzzleId: puzzle.id,
        correct: result.correct,
        solveTimeSeconds: result.solveTimeSeconds,
        attempts: result.attempts,
        date: getTodayString(),
      });
      setScore((prev) => ({
        correct: prev.correct + (result.correct ? 1 : 0),
        total: prev.total + 1,
      }));
    },
    [puzzle.id]
  );

  const handleNext = useCallback(() => {
    const newPlayed = [...playedIds, puzzle.id];
    setPlayedIds(newPlayed);
    setPuzzle(getRandomPuzzle(newPlayed));
    setKey((k) => k + 1);
  }, [playedIds, puzzle.id]);

  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

  return (
    <main className="flex-1 flex flex-col px-6 py-10 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back
        </Link>
        <p className="font-bold text-gray-900 text-sm">Practice</p>
        <div className="text-right">
          {score.total > 0 ? (
            <p className="text-sm text-gray-500 tabular-nums">
              {score.correct}/{score.total}
              {accuracy !== null && (
                <span className="text-gray-400 text-xs ml-1">({accuracy}%)</span>
              )}
            </p>
          ) : (
            <p className="text-xs text-gray-300">—</p>
          )}
        </div>
      </div>

      <PuzzleBoard
        key={key}
        puzzle={puzzle}
        mode="practice"
        onComplete={handleComplete}
        onNext={handleNext}
      />
    </main>
  );
}
