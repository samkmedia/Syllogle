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
  practiceOnly?: boolean;
}

export interface DailySetResult {
  scores: boolean[];          // one per puzzle (true = correct)
  totalTimeSeconds: number;
  date: string;               // YYYY-MM-DD
}

export interface PuzzleResult {
  puzzleId: string;
  correct: boolean;
  solveTimeSeconds: number;
  attempts: number;
  date: string; // YYYY-MM-DD
}

export interface UserStats {
  currentStreak: number;
  bestStreak: number;
  totalSolved: number;        // daily sets completed
  dailySolved: number;        // same as totalSolved
  practiceSolved: number;     // individual practice puzzles
  totalCorrect: number;       // total correct across all daily puzzles
  totalAttempts: number;      // total daily puzzles attempted (sets × 5)
  lastDailyDate: string | null;
  dailyResults: Record<string, DailySetResult>; // keyed by YYYY-MM-DD
  practiceResults: PuzzleResult[];
}
