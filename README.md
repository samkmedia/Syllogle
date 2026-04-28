# Consistency

A daily logic puzzle game. Can all of these statements be true at once?

## How to run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── page.tsx          # Home — title, stats, nav
│   ├── daily/page.tsx    # Daily puzzle (one per day, locked after completion)
│   ├── practice/page.tsx # Unlimited practice mode
│   └── globals.css
├── components/
│   ├── PuzzleBoard.tsx   # Core game UI — statements, selection, feedback, timer
│   ├── RulesModal.tsx    # How-to-play overlay
│   └── ShareButton.tsx   # Copy-to-clipboard share result
├── data/
│   └── puzzles.ts        # 30 handcrafted puzzles (10 easy / 10 medium / 10 hard)
├── lib/
│   ├── puzzleUtils.ts    # Daily puzzle selection, random puzzle, puzzle number
│   └── storage.ts        # localStorage helpers — stats, streaks, results
└── types/
    └── index.ts          # Shared TypeScript types
```

## Game mechanics

- Show 3–5 statements and ask: "Can all of these be true at the same time?"
- User either taps **Consistent** or selects the one statement to remove
- One submission per puzzle — instant feedback with explanation
- Daily mode: deterministic puzzle from date, locked after completion, shareable result
- Practice mode: random puzzles, running score, unlimited

## Stats tracked (localStorage)

Current streak · Best streak · Total solved · Daily solved · Practice solved · Accuracy %

## Puzzle format

```ts
{
  id: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: 'everyday' | 'science' | 'business' | 'social' | 'abstract'
  statements: string[]
  isConsistent: boolean
  answerIndex: number | null   // null if consistent
  explanation: string
}
```
