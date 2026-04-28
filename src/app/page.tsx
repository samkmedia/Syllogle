'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStats } from '@/lib/storage';
import { UserStats } from '@/types';
import RulesModal from '@/components/RulesModal';
import StatsModal from '@/components/StatsModal';

export default function HomePage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [showRules, setShowRules] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const s = getStats();
    setStats(s);

    const seen = localStorage.getItem('syllogle_seen_rules');
    if (!seen) setShowRules(true);
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
      {showStats && stats && <StatsModal stats={stats} onClose={() => setShowStats(false)} />}

      <div className="w-full max-w-sm space-y-10">
        {/* Title */}
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Syllogle</h1>
          <p className="text-gray-400 text-sm">Can all of these statements be true at once?</p>
        </div>

        {/* Streak — only shows when active */}
        {stats && stats.currentStreak > 1 && (
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-900">🔥 {stats.currentStreak}</p>
            <p className="text-sm text-gray-400 mt-1">day streak</p>
          </div>
        )}

        {/* Nav */}
        <div className="space-y-3">
          <Link
            href="/daily"
            className="block w-full bg-gray-900 text-white text-center py-4 rounded-xl font-semibold text-base hover:bg-gray-700 active:scale-[0.98] transition-all"
          >
            Daily Puzzle
          </Link>
          <Link
            href="/practice"
            className="block w-full border border-gray-200 text-gray-800 text-center py-4 rounded-xl font-semibold text-base hover:bg-gray-100 active:scale-[0.98] transition-all"
          >
            Practice Mode
          </Link>
        </div>

        {/* Footer links */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setShowRules(true)}
            className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
          >
            How to play
          </button>
          {stats && stats.totalSolved > 0 && (
            <button
              onClick={() => setShowStats(true)}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              Statistics
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
