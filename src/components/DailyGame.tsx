'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getTodayString } from '@/lib/puzzleUtils';
import { hasDailyBeenCompleted, recordDailyResult, getStats } from '@/lib/storage';
import { Puzzle, UserStats, DailySetResult } from '@/types';
import PuzzleBoard from '@/components/PuzzleBoard';
import CountdownTimer from '@/components/CountdownTimer';

interface Props {
  puzzles: Puzzle[];
  puzzleNumber: number;
}

const TOTAL = 5;

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`;
}

function buildShareText(
  puzzleNumber: number,
  scores: boolean[],
  totalTime: number,
  streak: number
): string {
  const grid = scores.map((s) => (s ? '🟩' : '🟥')).join('');
  const correct = scores.filter(Boolean).length;
  return [
    `Syllogle #${puzzleNumber}`,
    grid,
    `${correct}/${scores.length} · ${formatTime(totalTime)}`,
    `🔥 ${streak} streak`,
  ].join('\n');
}

export default function DailyGame({ puzzles, puzzleNumber }: Props) {
  const todayStr = getTodayString();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [boardKey, setBoardKey] = useState(0);

  const answersRef = useRef<boolean[]>([]);
  const timesRef = useRef<number[]>([]);
  const [answers, setAnswers] = useState<boolean[]>([]);

  // null = still reading localStorage (server can't access it)
  const [alreadyDone, setAlreadyDone] = useState<boolean | null>(null);
  const [savedResult, setSavedResult] = useState<DailySetResult | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [phase, setPhase] = useState<'playing' | 'results'>('playing');
  const [copied, setCopied] = useState(false);

  // Read localStorage only after the component mounts in the browser
  useEffect(() => {
    const done = hasDailyBeenCompleted(todayStr);
    setAlreadyDone(done);
    if (done) {
      const savedStats = getStats();
      setSavedResult(savedStats.dailyResults[todayStr] ?? null);
      setStats(savedStats);
      setPhase('results');
    }
  }, [todayStr]);

  const handleAnswer = useCallback((correct: boolean, timeSeconds: number) => {
    answersRef.current = [...answersRef.current, correct];
    timesRef.current = [...timesRef.current, timeSeconds];
    setAnswers([...answersRef.current]);
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= TOTAL) {
      const totalTime = timesRef.current.reduce((a, b) => a + b, 0);
      const result: DailySetResult = {
        scores: answersRef.current,
        totalTimeSeconds: totalTime,
        date: todayStr,
      };
      const updated = recordDailyResult(result);
      setStats(updated);
      setPhase('results');
    } else {
      setCurrentIndex(nextIndex);
      setBoardKey((k) => k + 1);
    }
  }, [currentIndex, todayStr]);

  const handleCopy = async () => {
    const resultScores = alreadyDone ? (savedResult?.scores ?? []) : answersRef.current;
    const totalTime = alreadyDone
      ? (savedResult?.totalTimeSeconds ?? 0)
      : timesRef.current.reduce((a, b) => a + b, 0);
    const streak = stats?.currentStreak ?? 0;
    const text = buildShareText(puzzleNumber, resultScores, totalTime, streak);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Wait for localStorage check before rendering anything
  if (alreadyDone === null) return null;

  // Results screen
  if (phase === 'results') {
    const resultScores = alreadyDone ? (savedResult?.scores ?? []) : answersRef.current;
    const totalTime = alreadyDone
      ? (savedResult?.totalTimeSeconds ?? 0)
      : timesRef.current.reduce((a, b) => a + b, 0);
    const correct = resultScores.filter(Boolean).length;
    const streak = stats?.currentStreak ?? 0;

    return (
      <main className="flex-1 flex flex-col px-6 py-10 max-w-lg mx-auto w-full">
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

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-3xl tracking-widest">
              {resultScores.map((s, i) => (s ? '🟩' : '🟥')).join('')}
            </p>
            <p className="text-4xl font-bold text-gray-900">{correct}/{TOTAL}</p>
            <p className="text-sm text-gray-400">puzzles correct</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="border border-gray-200 rounded-xl p-3 text-center bg-white">
              <p className="text-xl font-bold text-gray-900 tabular-nums">
                {formatTime(totalTime)}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Total time</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-3 text-center bg-white">
              <p className="text-xl font-bold text-gray-900 tabular-nums">
                {streak > 0 ? `🔥 ${streak}` : '—'}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Day streak</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${
              copied
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            {copied ? '✓ Copied to clipboard' : 'Share result'}
          </button>

          <CountdownTimer />
        </div>
      </main>
    );
  }

  // Playing screen
  const puzzle = puzzles[currentIndex];

  return (
    <main className="flex-1 flex flex-col px-6 py-10 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back
        </Link>
        <div className="text-center">
          <p className="font-bold text-gray-900 text-sm">Daily Puzzle</p>
          <p className="text-xs text-gray-400">#{puzzleNumber}</p>
        </div>
        <div className="w-10" />
      </div>

      <div className="mb-6 space-y-1.5">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Puzzle {currentIndex + 1} of {TOTAL}</span>
          <span>{answers.filter(Boolean).length} correct so far</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 rounded-full transition-all duration-300"
            style={{ width: `${(currentIndex / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      <PuzzleBoard
        key={boardKey}
        puzzle={puzzle}
        onAnswer={handleAnswer}
        onNext={handleNext}
        nextLabel={currentIndex === TOTAL - 1 ? 'See results' : 'Next puzzle →'}
      />
    </main>
  );
}
