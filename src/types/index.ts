export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category = string;

export interface Puzzle {
  id: string;
  difficulty: Difficulty;
  statements: string[];
  isConsistent: boolean;
  answerIndex: number | null; // null if consistent
  explanation: string;
  category: Category;
}

export interface PuzzleResult {
  puzzleId: string;
  correct: boolean;
  solveTimeSeconds: number;
  attempts: number;
  date: string; // ISO date string YYYY-MM-DD
}

export interface UserStats {
  currentStreak: number;
  bestStreak: number;
  totalSolved: number;
  dailySolved: number;
  practiceSolved: number;
  totalCorrect: number;
  totalAttempts: number;
  lastDailyDate: string | null; // YYYY-MM-DD
  dailyResults: Record<string, PuzzleResult>; // keyed by YYYY-MM-DD
  practiceResults: PuzzleResult[];
}
