import { UserStats, PuzzleResult, DailySetResult } from '@/types';

const STATS_KEY = 'syllogle_stats';

const defaultStats: UserStats = {
  currentStreak: 0,
  bestStreak: 0,
  totalSolved: 0,
  dailySolved: 0,
  practiceSolved: 0,
  totalCorrect: 0,
  totalAttempts: 0,
  lastDailyDate: null,
  dailyResults: {},
  practiceResults: [],
};

export function getStats(): UserStats {
  if (typeof window === 'undefined') return defaultStats;
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return defaultStats;
    return { ...defaultStats, ...JSON.parse(raw) };
  } catch {
    return defaultStats;
  }
}

export function saveStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function recordDailyResult(result: DailySetResult): UserStats {
  const stats = getStats();
  const today = result.date;

  // Already recorded today — don't double-count
  if (stats.dailyResults[today]) return stats;

  const correctCount = result.scores.filter(Boolean).length;

  const updatedStats: UserStats = {
    ...stats,
    totalSolved: stats.totalSolved + 1,
    dailySolved: stats.dailySolved + 1,
    totalCorrect: stats.totalCorrect + correctCount,
    totalAttempts: stats.totalAttempts + result.scores.length,
    dailyResults: { ...stats.dailyResults, [today]: result },
  };

  // Streak: completing the daily set counts regardless of score
  const yesterday = getPreviousDay(today);
  const hadYesterday = !!stats.dailyResults[yesterday] || stats.lastDailyDate === yesterday;
  const newStreak = hadYesterday ? stats.currentStreak + 1 : 1;
  updatedStats.currentStreak = newStreak;
  updatedStats.bestStreak = Math.max(stats.bestStreak, newStreak);
  updatedStats.lastDailyDate = today;

  saveStats(updatedStats);
  return updatedStats;
}

export function recordPracticeResult(result: PuzzleResult): UserStats {
  const stats = getStats();
  const updatedStats: UserStats = {
    ...stats,
    practiceSolved: stats.practiceSolved + 1,
    practiceResults: [...stats.practiceResults, result],
  };
  saveStats(updatedStats);
  return updatedStats;
}

export function hasDailyBeenCompleted(dateStr: string): boolean {
  const stats = getStats();
  return !!stats.dailyResults[dateStr];
}

export function getAccuracyPercent(stats: UserStats): number {
  if (stats.totalAttempts === 0) return 0;
  return Math.round((stats.totalCorrect / stats.totalAttempts) * 100);
}

function getPreviousDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() - 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
