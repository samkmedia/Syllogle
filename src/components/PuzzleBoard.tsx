'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Puzzle } from '@/types';

interface PuzzleResult {
  correct: boolean;
  solveTimeSeconds: number;
  attempts: number;
}

interface PuzzleBoardProps {
  puzzle: Puzzle;
  mode: 'daily' | 'practice';
  puzzleNumber?: number;
  streak?: number;
  correctDailyCount?: number;
  dailySolved?: number;
  alreadyCompleted?: boolean;
  savedResult?: PuzzleResult | null;
  onComplete: (result: PuzzleResult) => void;
  onNext?: () => void;
}

type SelectionState =
  | { type: 'none' }
  | { type: 'consistent' }
  | { type: 'statement'; index: number };

function buildShareText(
  puzzleNumber: number,
  correct: boolean,
  isConsistent: boolean,
  solveTimeSeconds: number,
  streak: number,
  correctDailyCount: number,
  dailySolved: number
): string {
  const outcomeEmoji = correct ? '🟩' : '🟥';
  const outcomeText = correct ? 'Correct' : 'Missed it';

  const statsLine = `🔥 ${streak} streak · ✓ ${correctDailyCount}/${dailySolved} correct`;

  return [
    `Syllogle #${puzzleNumber}`,
    `${outcomeEmoji} ${outcomeText} · ${solveTimeSeconds}s`,
    statsLine,
  ].join('\n');
}

export default function PuzzleBoard({
  puzzle,
  mode,
  puzzleNumber = 0,
  streak = 0,
  correctDailyCount = 0,
  dailySolved = 0,
  alreadyCompleted = false,
  savedResult = null,
  onComplete,
  onNext,
}: PuzzleBoardProps) {
  const [selection, setSelection] = useState<SelectionState>({ type: 'none' });
  const [submitted, setSubmitted] = useState(alreadyCompleted);
  const [correct, setCorrect] = useState<boolean | null>(savedResult?.correct ?? null);
  const [attempts, setAttempts] = useState(0);
  const [startTime] = useState<number>(() => Date.now());
  const [solveTime, setSolveTime] = useState<number>(savedResult?.solveTimeSeconds ?? 0);
  const [elapsed, setElapsed] = useState(0);
  const [flashClass, setFlashClass] = useState('');
  const [copied, setCopied] = useState(false);
  const [autoAdvanceProgress, setAutoAdvanceProgress] = useState(false);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Live timer
  useEffect(() => {
    if (submitted) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [submitted, startTime]);

  // No auto-advance — user taps Next when ready
  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, []);

  const handleSubmit = useCallback(() => {
    if (selection.type === 'none' || submitted) return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const isCorrect =
      puzzle.isConsistent
        ? selection.type === 'consistent'
        : selection.type === 'statement' && selection.index === puzzle.answerIndex;

    const time = Math.floor((Date.now() - startTime) / 1000);
    setSolveTime(time);
    setCorrect(isCorrect);
    setSubmitted(true);
    setFlashClass(isCorrect ? 'animate-flash-correct' : 'animate-flash-incorrect');

    onComplete({ correct: isCorrect, solveTimeSeconds: time, attempts: newAttempts });
  }, [selection, submitted, puzzle, attempts, startTime, onComplete]);

  const handleCancelAutoAdvance = () => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setAutoAdvanceProgress(false);
  };

  const handleCopy = async () => {
    const text = buildShareText(puzzleNumber, correct ?? false, puzzle.isConsistent, solveTime, streak, correctDailyCount, dailySolved);
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

  const difficultyColor: Record<string, string> = {
    easy: 'text-emerald-600 bg-emerald-50',
    medium: 'text-amber-600 bg-amber-50',
    hard: 'text-rose-600 bg-rose-50',
  };

  return (
    <div className={`w-full max-w-lg mx-auto space-y-4 rounded-2xl transition-colors duration-300 ${flashClass}`}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${difficultyColor[puzzle.difficulty]}`}
        >
          {puzzle.difficulty}
        </span>
        <span className="text-sm text-gray-400 tabular-nums">
          {submitted ? formatTime(solveTime) : formatTime(elapsed)}
        </span>
      </div>

      {/* Prompt */}
      <p className="text-base font-semibold text-gray-500 leading-snug">
        Can all of these be true at the same time?
      </p>

      {/* Statements */}
      <div className="space-y-2.5">
        {puzzle.statements.map((stmt, i) => {
          const isSelected = selection.type === 'statement' && selection.index === i;
          const isCorrectAnswer = submitted && !puzzle.isConsistent && puzzle.answerIndex === i;
          const isWrongPick =
            submitted && selection.type === 'statement' && selection.index === i && puzzle.answerIndex !== i;

          let cls = 'border border-gray-200 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50';
          if (isCorrectAnswer) cls = 'border-2 border-emerald-500 bg-emerald-50 text-gray-900';
          else if (isWrongPick) cls = 'border-2 border-rose-400 bg-rose-50 text-gray-900';
          else if (isSelected && !submitted) cls = 'border-2 border-gray-800 bg-white text-gray-900';

          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => !submitted && setSelection({ type: 'statement', index: i })}
              className={`w-full text-left px-4 py-3.5 rounded-xl transition-all text-sm leading-relaxed active:scale-[0.98] ${cls} ${
                submitted ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <span className="text-gray-300 mr-2 text-xs">{i + 1}.</span>
              {stmt}
            </button>
          );
        })}
      </div>

      {/* Consistent button */}
      {(() => {
        const isSelected = selection.type === 'consistent';
        const isCorrectAnswer = submitted && puzzle.isConsistent;
        const isWrongPick = submitted && selection.type === 'consistent' && !puzzle.isConsistent;

        let cls = 'border border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50';
        if (isCorrectAnswer) cls = 'border-2 border-emerald-500 bg-emerald-50 text-emerald-800';
        else if (isWrongPick) cls = 'border-2 border-rose-400 bg-rose-50 text-rose-800';
        else if (isSelected && !submitted) cls = 'border-2 border-gray-800 bg-white text-gray-900';

        return (
          <button
            disabled={submitted}
            onClick={() => !submitted && setSelection({ type: 'consistent' })}
            className={`w-full px-4 py-3.5 rounded-xl transition-all text-sm font-medium active:scale-[0.98] ${cls} ${
              submitted ? 'cursor-default' : 'cursor-pointer'
            }`}
          >
            These are consistent — all can be true
          </button>
        );
      })()}

      {/* Submit */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selection.type === 'none'}
          className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${
            selection.type !== 'none'
              ? 'bg-gray-900 text-white hover:bg-gray-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      )}

      {/* Feedback */}
      {submitted && correct !== null && (
        <div
          className={`rounded-xl p-4 space-y-1.5 ${
            correct ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'
          }`}
        >
          <p className={`font-semibold text-sm ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>
            {correct ? 'Correct.' : 'Not quite.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{puzzle.explanation}</p>
        </div>
      )}

      {/* Bottom actions */}
      {submitted && (
        <div className="space-y-2 pt-1">
          {/* Practice: manual next */}
          {mode === 'practice' && onNext && (
            <button
              onClick={onNext}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-700 active:scale-[0.98] transition-all"
            >
              Next puzzle →
            </button>
          )}

          {/* Daily: share button */}
          {mode === 'daily' && (
            <button
              onClick={handleCopy}
              className={`w-full py-3 rounded-xl font-medium text-sm transition-all active:scale-[0.98] ${
                copied
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {copied ? '✓ Copied to clipboard' : 'Share result'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`;
}
