import { Puzzle } from '@/types';

const puzzles: Puzzle[] = [
  // ─── EASY (10) ───────────────────────────────────────────────────────────────

  {
    id: 'easy-001',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'All birds can fly.',
      'Penguins are birds.',
      'Penguins cannot fly.',
    ],
    isConsistent: false,
    answerIndex: 0,
    explanation:
      'Penguins are birds and cannot fly, so it cannot be true that all birds can fly. Removing the first statement leaves a consistent set.',
  },
  {
    id: 'easy-002',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'The store is open every day.',
      'Today is Tuesday.',
      'The store is closed today.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If the store is open every day, it must be open on Tuesday. The third statement directly contradicts the first.',
  },
  {
    id: 'easy-003',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'abstract',
    statements: [
      'All squares are rectangles.',
      'Shape A is a square.',
      'Shape A is a rectangle.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'Since all squares are rectangles, any square is automatically a rectangle. All three statements can be true at the same time.',
  },
  {
    id: 'easy-004',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'Sam is taller than Alex.',
      'Alex is taller than Jordan.',
      'Jordan is taller than Sam.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'Sam > Alex > Jordan in height means Jordan cannot be taller than Sam. The third statement creates an impossible cycle.',
  },
  {
    id: 'easy-005',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'The meeting starts at 3 PM.',
      'The meeting lasts two hours.',
      'The meeting ends at 5 PM.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'A meeting starting at 3 PM lasting two hours ends at exactly 5 PM. All three statements are consistent.',
  },
  {
    id: 'easy-006',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'abstract',
    statements: [
      'No cats are dogs.',
      'Whiskers is a cat.',
      'Whiskers is a dog.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If no cats are dogs and Whiskers is a cat, Whiskers cannot be a dog. The third statement contradicts the first two.',
  },
  {
    id: 'easy-007',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'Every team member attended the meeting.',
      'There are five team members.',
      'Four people attended the meeting.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If every team member attended and there are five members, then five people attended — not four. The third statement contradicts the first two.',
  },
  {
    id: 'easy-008',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'abstract',
    statements: [
      'All even numbers are divisible by 2.',
      '8 is an even number.',
      '8 is divisible by 2.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'These are all mathematically true and logically consistent. The third statement follows directly from the first two.',
  },
  {
    id: 'easy-009',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'The red team scored more than the blue team.',
      'The blue team scored more than the green team.',
      'The green team scored more than the red team.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'Red > Blue > Green means Green cannot outscore Red. The third statement creates an impossible cycle.',
  },
  {
    id: 'easy-010',
    difficulty: 'easy',
    practiceOnly: true,
    category: 'everyday',
    statements: [
      'Jake only eats vegetarian food.',
      'A pizza with only vegetables is vegetarian.',
      'Jake ate a vegetarian pizza.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'Jake eats only vegetarian food, the pizza is vegetarian, so Jake eating it is perfectly consistent. All three statements fit together.',
  },

  // ─── MEDIUM (10) ─────────────────────────────────────────────────────────────

  {
    id: 'medium-001',
    difficulty: 'medium',
    category: 'social',
    statements: [
      'Only those who passed the test received a certificate.',
      'Maria received a certificate.',
      'Maria did not pass the test.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If only those who passed received a certificate, then anyone with a certificate must have passed. The third statement claims Maria did not pass, which contradicts her having a certificate.',
  },
  {
    id: 'medium-002',
    difficulty: 'medium',
    category: 'business',
    statements: [
      'The project was completed on time.',
      'The project ran two weeks over the original schedule.',
      'The deadline was extended by two weeks before the project ended.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'The project exceeded the original schedule by two weeks, but the deadline was extended by the same amount, so it finished on time relative to the new deadline. All three statements can coexist.',
  },
  {
    id: 'medium-003',
    difficulty: 'medium',
    category: 'abstract',
    statements: [
      'If it rains, the ground gets wet.',
      'The ground is not wet.',
      'It is raining.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If rain causes the ground to get wet, and the ground is dry, then it cannot be raining. The third statement contradicts the first two.',
  },
  {
    id: 'medium-004',
    difficulty: 'medium',
    category: 'everyday',
    statements: [
      'The library is only open on weekdays.',
      'Sunday is not a weekday.',
      'The library was open last Sunday.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If the library is only open on weekdays and Sunday is not a weekday, the library cannot be open on Sunday. The third statement contradicts the first two.',
  },
  {
    id: 'medium-005',
    difficulty: 'medium',
    category: 'social',
    statements: [
      'No one under 18 is allowed in the venue.',
      'Everyone at the party was in the venue.',
      'Some people at the party were under 18.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If no one under 18 is allowed in the venue and everyone at the party was there, then no one at the party can be under 18. The third statement contradicts this.',
  },
  {
    id: 'medium-006',
    difficulty: 'medium',
    category: 'business',
    statements: [
      'Revenue increased every quarter this year.',
      'The company reported a loss in Q3.',
      'Expenses grew faster than revenue in Q3.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'Revenue can rise while expenses grow even faster, producing a net loss. All three statements are compatible — a revenue increase does not prevent an overall loss.',
  },
  {
    id: 'medium-007',
    difficulty: 'medium',
    category: 'abstract',
    statements: [
      'Exactly two of the three switches are on.',
      'Switch A is off.',
      'Switch B is off.',
      'Switch C is on.',
    ],
    isConsistent: false,
    answerIndex: 0,
    explanation:
      'With Switch A off, Switch B off, and Switch C on, only one switch is on — not exactly two. The first statement is the one that cannot hold given the other three.',
  },
  {
    id: 'medium-008',
    difficulty: 'medium',
    category: 'everyday',
    statements: [
      'The earlier-departing train always arrives first.',
      'Train A departs before Train B.',
      'Train B arrives before Train A.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If the earlier-departing train always arrives first, and Train A departs before Train B, then Train A must arrive first. Train B arriving first contradicts this.',
  },
  {
    id: 'medium-009',
    difficulty: 'medium',
    category: 'social',
    statements: [
      'All club members voted in the election.',
      'Only club members were eligible to vote.',
      'Some people who voted were not club members.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If only club members were eligible to vote, no non-member could have voted. The third statement directly contradicts the second.',
  },
  {
    id: 'medium-010',
    difficulty: 'medium',
    category: 'abstract',
    statements: [
      'Container A holds more than Container B.',
      'Container B holds more than Container C.',
      'Container A holds less than Container C.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'A > B > C in capacity means A holds more than C, not less. The third statement contradicts the chain established by the first two.',
  },

  // ─── HARD (10) ───────────────────────────────────────────────────────────────

  {
    id: 'hard-001',
    difficulty: 'hard',
    category: 'abstract',
    statements: [
      'If a shape is blue, it is also a circle.',
      'If a shape is a circle, it is also large.',
      'Shape X is blue.',
      'Shape X is small.',
    ],
    isConsistent: false,
    answerIndex: 3,
    explanation:
      'Shape X is blue → must be a circle → must be large. The fourth statement says Shape X is small, which breaks this required chain.',
  },
  {
    id: 'hard-002',
    difficulty: 'hard',
    category: 'business',
    statements: [
      'Every product in the sale costs less than $50.',
      'Bundled items are sold as a single product at their own price.',
      'The bundle contains three sale products.',
      'The bundle is priced at $120.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'Individual sale products are each under $50, but the bundle is a separate item with its own price. Nothing prevents the bundle from being priced at $120 as a single item.',
  },
  {
    id: 'hard-003',
    difficulty: 'hard',
    category: 'social',
    statements: [
      'Everyone who finishes the race receives a medal.',
      'No one who cheated finished the race.',
      'Alex cheated.',
      'Alex received a medal.',
    ],
    isConsistent: false,
    answerIndex: 3,
    explanation:
      'Alex cheated → Alex did not finish the race → Alex did not receive a medal. The fourth statement contradicts this chain.',
  },
  {
    id: 'hard-004',
    difficulty: 'hard',
    category: 'everyday',
    statements: [
      'The faster you drive, the sooner you arrive.',
      'Driving faster increases the risk of an accident.',
      'An accident always causes a delay.',
      'Driving faster always means you arrive sooner.',
    ],
    isConsistent: false,
    answerIndex: 3,
    explanation:
      'Statements 2 and 3 together mean that driving faster can cause delays via accidents. Statement 4 claims driving faster always means arriving sooner — which contradicts that possibility.',
  },
  {
    id: 'hard-005',
    difficulty: 'hard',
    category: 'business',
    statements: [
      'Each of the four salespersons closed at least three deals this quarter.',
      'The team closed exactly ten deals in total.',
    ],
    isConsistent: false,
    answerIndex: 1,
    explanation:
      'Four salespersons each closing at least three deals means a minimum of 12 deals total. Ten deals is impossible under that constraint.',
  },
  {
    id: 'hard-006',
    difficulty: 'hard',
    category: 'abstract',
    statements: [
      'Every rule has at least one exception.',
      'The statement "every rule has at least one exception" is itself a rule.',
      'That rule has no exceptions.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'If every rule has at least one exception, that applies to every rule — including the rule itself. The third statement claims the rule has no exceptions, which directly contradicts the first.',
  },
  {
    id: 'hard-007',
    difficulty: 'hard',
    category: 'business',
    statements: [
      'Orders are shipped within one business day of being placed.',
      'The order was placed on Friday at noon.',
      'The warehouse is closed on weekends.',
      'The order shipped the following Monday.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'Placed Friday noon, with the warehouse closed on weekends, the next business day is Monday. Shipping Monday is within one business day. All four statements are consistent.',
  },
  {
    id: 'hard-008',
    difficulty: 'hard',
    category: 'science',
    statements: [
      'The substance melts at 80°C and boils at 150°C.',
      'The sample was heated to exactly 100°C.',
      'The sample remained in liquid form after heating.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'At 100°C, the substance is above its melting point (80°C) but below its boiling point (150°C), so it would be liquid. All three statements are consistent.',
  },
  {
    id: 'hard-009',
    difficulty: 'hard',
    category: 'everyday',
    statements: [
      'The bus arrives every 15 minutes starting at 6:00 AM.',
      'Anna arrived at the bus stop at 7:10 AM.',
      'The next bus after Anna arrived came at 7:30 AM.',
    ],
    isConsistent: false,
    answerIndex: 2,
    explanation:
      'Buses run at 6:00, 6:15, 6:30 … 7:00, 7:15, 7:30 … If Anna arrives at 7:10, the next bus is at 7:15, not 7:30. The third statement is incorrect.',
  },
  {
    id: 'hard-010',
    difficulty: 'hard',
    category: 'social',
    statements: [
      'Everyone who was invited came to the party.',
      'Everyone who came to the party had a good time.',
      'Some people who had a good time were not invited.',
    ],
    isConsistent: true,
    answerIndex: null,
    explanation:
      'The first statement says all invited guests came — not that only invited guests came. Uninvited guests could also have attended and had a good time. All three statements can be simultaneously true.',
  },
];

export default puzzles;
