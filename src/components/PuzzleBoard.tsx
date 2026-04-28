'use client';

import { useState, useEffect } from 'react';
import { Puzzle } from '@/types';

interface PuzzleBoardProps {
  puzzle: Puzzle;
  onAnswer: (correct: boolean, timeSeconds: number) => void;
  onNext: () => void;
  nextLabel?: string;
}

export default function PuzzleBoard({
  puzzle,
  onAnswer,
  onNext,
  nextLabel = 'Next puzzle →',
}: PuzzleBoardProps) {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [solveTime, setSolveTime] = useState(0);
  const [flashClass, setFlashClass] = useState('');
  const [startTime] = useState(() => Date.now());

  // Live timer — stops when answered
  useEffect(() => {
    if (answered) return;
    const id = setInterval(
      () => setElapsed(Math.floor((Date.now() - startTime) / 1000)),
      1000
    );
    return () => clearInterval(id);
  }, [answered, startTime]);

  const handleAnswer = (userSaysConsistent: boolean) => {
    if (answered) return;
    const time = Math.floor((Date.now() - startTime) / 1000);
    const isCorrect = userSaysConsistent === puzzle.isConsistent;
    setSolveTime(time);
    setCorrect(isCorrect);
    setAnswered(true);
    setFlashClass(isCorrect ? 'animate-flash-correct' : 'animate-flash-incorrect');
    onAnswer(isCorrect, time);
  };

  const difficultyColor: Record<string, string> = {
    easy: 'text-emerald-600 bg-emerald-50',
    medium: 'text-amber-600 bg-amber-50',
    hard: 'text-rose-600 bg-rose-50',
  };

  return (
    <div className={`w-full max-w-lg mx-auto space-y-4 rounded-2xl transition-colors duration-300 ${flashClass}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${difficultyColor[puzzle.difficulty]}`}
        >
          {puzzle.difficulty}
        </span>
        <span className="text-sm text-gray-400 tabular-nums">
          {formatTime(answered ? solveTime : elapsed)}
        </span>
      </div>

      {/* Prompt */}
      <p className="text-base font-semibold text-gray-500 leading-snug">
        Can all of these be true at the same time?
      </p>

      {/* Statements — read only */}
      <div className="space-y-2.5">
        {puzzle.statements.map((stmt, i) => (
          <div
            key={i}
            className="border border-gray-200 bg-white text-gray-800 px-4 py-3.5 rounded-xl text-sm leading-relaxed"
          >
            <span className="text-gray-300 mr-2 text-xs">{i + 1}.</span>
            {stmt}
          </div>
        ))}
      </div>

      {/* Answer buttons */}
      {!answered && (
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => handleAnswer(true)}
            className="py-4 rounded-xl font-semibold text-sm bg-white border border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98] transition-all"
          >
            Consistent
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="py-4 rounded-xl font-semibold text-sm bg-gray-900 text-white hover:bg-gray-700 active:scale-[0.98] transition-all"
          >
            Inconsistent
          </button>
        </div>
      )}

      {/* Feedback + explanation */}
      {answered && correct !== null && (
        <div
          className={`rounded-xl p-4 space-y-1.5 ${
            correct
              ? 'bg-emerald-50 border border-emerald-200'
              : 'bg-rose-50 border border-rose-200'
          }`}
        >
          <p className={`font-semibold text-sm ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>
            {correct ? 'Correct.' : 'Not quite.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{puzzle.explanation}</p>
        </div>
      )}

      {/* Next */}
      {answered && (
        <button
          onClick={onNext}
          className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-700 active:scale-[0.98] transition-all"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`;
}
