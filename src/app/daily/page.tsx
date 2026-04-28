'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getDailyPuzzle, getDailyPuzzleNumber, getTodayString } from '@/lib/puzzleUtils';
import {
  hasDailyBeenCompleted,
  recordDailyResult,
  getStats,
} from '@/lib/storage';
import { Puzzle, UserStats } from '@/types';
import PuzzleBoard from '@/components/PuzzleBoard';
import CountdownTimer from '@/components/CountdownTimer';

interface LocalResult {
  correct: boolean;
  solveTimeSeconds: number;
  attempts: number;
}

export default function DailyPage() {
  const [puzzle, setPuzzle] = useState<Puzzle>(() => getDailyPuzzle());
  const [puzzleNumber] = useState(getDailyPuzzleNumber());
  const [alreadyDone, setAlreadyDone] = useState(() => hasDailyBeenCompleted(getTodayString()));
  const [stats, setStats] = useState<UserStats | null>(() => {
    const done = hasDailyBeenCompleted(getTodayString());
    return done ? getStats() : null;
  });
  const [savedResult, setSavedResult] = useState<LocalResult | null>(() => {
    const done = hasDailyBeenCompleted(getTodayString());
    if (!done) return null;
    const s = getStats();
    const r = s.dailyResults[getTodayString()] ?? null;
    return r ? { correct: r.correct, solveTimeSeconds: r.solveTimeSeconds, attempts: r.attempts } : null;
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Silently try to upgrade to AI-generated puzzle.
    // Only swap if the user hasn't submitted yet.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    fetch('/api/daily-puzzle', { signal: controller.signal })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data?.puzzle && !submitted && !alreadyDone) {
          setPuzzle(data.puzzle);
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleComplete = useCallback(
    (result: LocalResult) => {
      const today = getTodayString();
      setSubmitted(true);
      const updated = recordDailyResult({
        puzzleId: puzzle.id,
        correct: result.correct,
        solveTimeSeconds: result.solveTimeSeconds,
        attempts: result.attempts,
        date: today,
      });
      setSavedResult(result);
      setStats(updated);
      setAlreadyDone(true);
    },
    [puzzle]
  );

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`;
  }

  const currentStreak = stats?.currentStreak ?? 0;
  const todayTime = savedResult?.solveTimeSeconds ?? null;
  const correctDailyCount = stats
    ? Object.values(stats.dailyResults).filter((r) => r.correct).length
    : 0;

  return (
    <main className="flex-1 flex flex-col px-6 py-10 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back
        </Link>
        <div className="text-center">
          <p className="font-bold text-gray-900 text-sm">Daily Puzzle</p>
          <p className="text-xs text-gray-400">#{puzzleNumber}</p>
        </div>
        <div className="w-10" />
      </div>

      {alreadyDone && (
        <div className="mb-6 text-center">
          <p className="text-sm text-gray-500">You&apos;ve completed today&apos;s puzzle.</p>
        </div>
      )}

      <PuzzleBoard
        puzzle={puzzle}
        mode="daily"
        puzzleNumber={puzzleNumber}
        streak={currentStreak}
        correctDailyCount={correctDailyCount}
        dailySolved={stats?.dailySolved ?? 0}
        alreadyCompleted={alreadyDone}
        savedResult={savedResult}
        onComplete={handleComplete}
      />

      {alreadyDone && (
        <div className="mt-8 space-y-4">
          {stats && (
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-200 rounded-xl p-3 text-center bg-white">
                <p className="text-xl font-bold text-gray-900 tabular-nums">
                  {todayTime !== null ? formatTime(todayTime) : '—'}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Today&apos;s time</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-3 text-center bg-white">
                <p className="text-xl font-bold text-gray-900 tabular-nums">
                  {correctDailyCount}/{stats.dailySolved}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Days correct</p>
              </div>
            </div>
          )}

          <CountdownTimer />
        </div>
      )}
    </main>
  );
}
