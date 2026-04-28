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
  const [key, setKey] = useState(0);

  const handleAnswer = useCallback(
    (correct: boolean, solveTimeSeconds: number) => {
      recordPracticeResult({
        puzzleId: puzzle.id,
        correct,
        solveTimeSeconds,
        attempts: 1,
        date: getTodayString(),
      });
    },
    [puzzle.id]
  );

  const handleNext = useCallback(() => {
    const newPlayed = [...playedIds, puzzle.id];
    setPlayedIds(newPlayed);
    setPuzzle(getRandomPuzzle(newPlayed));
    setKey((k) => k + 1);
  }, [playedIds, puzzle.id]);

  return (
    <main className="flex-1 flex flex-col px-6 py-10 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back
        </Link>
        <p className="font-bold text-gray-900 text-sm">Practice</p>
        <div className="w-10" />
      </div>

      <PuzzleBoard
        key={key}
        puzzle={puzzle}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </main>
  );
}
