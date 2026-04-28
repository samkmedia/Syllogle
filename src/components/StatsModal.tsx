'use client';

import { UserStats } from '@/types';
import { getAccuracyPercent } from '@/lib/storage';

interface StatsModalProps {
  stats: UserStats;
  onClose: () => void;
}

export default function StatsModal({ stats, onClose }: StatsModalProps) {
  const accuracy = getAccuracyPercent(stats);

  const rows = [
    { label: 'Current Streak', value: stats.currentStreak, unit: 'days', icon: '🔥' },
    { label: 'Best Streak', value: stats.bestStreak, unit: 'days', icon: '🏆' },
    { label: 'Total Solved', value: stats.totalSolved, unit: '', icon: '' },
    { label: 'Accuracy', value: `${accuracy}%`, unit: '', icon: '' },
    { label: 'Daily Solved', value: stats.dailySolved, unit: '', icon: '' },
    { label: 'Practice Solved', value: stats.practiceSolved, unit: '', icon: '' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40">
      <div className="animate-modal-in bg-white rounded-2xl max-w-sm w-full p-7 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Stats</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-gray-500 transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {stats.totalSolved === 0 ? (
          <p className="text-gray-400 text-sm text-center py-6">
            No puzzles completed yet. Play your first daily puzzle to start tracking stats.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {rows.map((row) => (
              <div key={row.label} className="border border-gray-100 rounded-xl p-3.5 bg-gray-50">
                <p className="text-2xl font-bold text-gray-900 tabular-nums">
                  {row.icon && <span className="mr-1 text-xl">{row.icon}</span>}
                  {row.value}
                  {row.unit && (
                    <span className="text-xs font-normal text-gray-400 ml-1">{row.unit}</span>
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{row.label}</p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium text-sm hover:bg-gray-50 active:scale-[0.98] transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}
