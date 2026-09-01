// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls hunt at night.",
      "No animal that hunts at night is a bird of prey.",
      "Some birds of prey hunt during the day."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies all owls are night-hunters. Statement 2 implies no night-hunter is a bird of prey, so no owl is a bird of prey. Statement 3 introduces some birds of prey that hunt during the day; these birds are not owls and do not conflict with statements 1 and 2. All statements can be true simultaneously."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of Elm Street own a bicycle.",
      "Some people who own a bicycle live on Oak Avenue.",
      "No resident of Oak Avenue lives on Elm Street."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means everyone on Elm Street has a bicycle. Statement 3 means no one lives on both Elm Street and Oak Avenue. Statement 2 says some bicycle owners live on Oak Avenue. This is consistent, as the bicycle owners who live on Oak Avenue are a distinct group from those who live on Elm Street."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a fern, it requires shade.",
      "Any plant that requires shade cannot tolerate direct sunlight.",
      "Some plants that are ferns can tolerate direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a plant is a fern, it cannot tolerate direct sunlight. Statement 3, however, asserts that some plants that are ferns CAN tolerate direct sunlight. This directly contradicts the conclusion derived from statements 1 and 2, making the set inconsistent."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "No innovative thinker is afraid of failure.",
      "David is a successful entrepreneur.",
      "David is afraid of failure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all successful entrepreneurs are not afraid of failure. Statement 3 tells us David is a successful entrepreneur, so he must not be afraid of failure. This conclusion contradicts statement 4, which states David IS afraid of failure."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Julia trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all professional athletes are a subset of people who train daily. Statement 2 confirms that there are people who train daily but are not professional athletes, which is compatible with statement 1. Julia trains daily, and she could either be a professional athlete or not, fitting all conditions."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student enrolled in the advanced class passed the final exam.",
      "No student who passed the final exam had more than two absences.",
      "Some students enrolled in the advanced class had more than two absences."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no student enrolled in the advanced class had more than two absences. Statement 3 directly contradicts this by stating that some students in the advanced class DID have more than two absences. This makes the set inconsistent."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mammals have fur.",
      "Some animals with fur are not mammals.",
      "Every cat is a mammal.",
      "No cat has scales."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 mean all cats have fur. Statement 2 allows for animals with fur that are not mammals, which is fine. Statement 4 is consistent as cats are mammals, and mammals do not have scales. All statements can be true together."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus completed their training module.",
      "No employee who completed their training module was hired after June 1st.",
      "Sarah received a bonus.",
      "Sarah was hired after June 1st."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that no employee who received a bonus was hired after June 1st. Statement 3 tells us Sarah received a bonus, so she must not have been hired after June 1st. This contradicts statement 4, which claims Sarah WAS hired after June 1st."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All architects are skilled in drafting.",
      "Some people skilled in drafting are not architects.",
      "No engineer is an architect.",
      "Some engineers are skilled in drafting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 makes architects a subset of those skilled in drafting. Statement 2 confirms that the 'skilled in drafting' group is larger. Statement 3 means engineers and architects are distinct groups. Statement 4 is compatible, as engineers can be skilled in drafting without being architects. All statements can be true simultaneously."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful politician is charismatic.",
      "All charismatic individuals are skilled public speakers.",
      "Some successful politicians are not skilled public speakers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that every successful politician is a skilled public speaker. Statement 3 directly contradicts this by stating that some successful politicians are NOT skilled public speakers. This makes the set inconsistent."
  },
  {
    "id": "gen-2-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All blooming plants require full sun.",
      "Plants that get full sun will thrive.",
      "Thriving plants never need daily watering.",
      "This particular orchid needs daily watering.",
      "This particular orchid bloomed."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 (This particular orchid bloomed) and Statement 1 (All blooming plants require full sun) imply the orchid requires full sun. Statement 2 (Plants that get full sun will thrive) implies the orchid will thrive. Statement 3 (Thriving plants never need daily watering) implies the orchid does not need daily watering. This directly contradicts Statement 4."
  },
  {
    "id": "gen-2-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in Advanced Calculus have passed Algebra.",
      "Some students who passed Algebra did not enroll in Advanced Calculus.",
      "Sarah passed Algebra.",
      "Sarah did not enroll in Advanced Calculus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Sarah passing Algebra and not enrolling in Advanced Calculus is consistent with Statement 1 (she would have had to pass Algebra if she enrolled, but she didn't enroll), and she fits the description of 'some students who passed Algebra did not enroll in Advanced Calculus' from Statement 2."
  },
  {
    "id": "gen-2-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a robin, it builds a nest in a tree.",
      "Birds that build nests in trees are always migratory.",
      "All migratory birds travel south for winter.",
      "This specific bird is a robin.",
      "This specific bird does not travel south for winter."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 (This specific bird is a robin) and Statement 1 (If a bird is a robin, it builds a nest in a tree) imply the bird builds a nest in a tree. Statement 2 (Birds that build nests in trees are always migratory) implies the bird is migratory. Statement 3 (All migratory birds travel south for winter) implies the bird travels south for winter. This contradicts Statement 5."
  },
  {
    "id": "gen-2-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have met their sales target.",
      "No employee who has not met their sales target receives a bonus.",
      "Some employees who met their sales target did not receive a bonus.",
      "Mark met his sales target."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 are contrapositives and thus convey the same information. Statement 3 indicates that meeting the target does not guarantee a bonus. Mark, by meeting his sales target (Statement 4), could either be an employee who received a bonus or one who did not, both of which are consistent with the other statements."
  },
  {
    "id": "gen-2-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is a senior, they are eligible for the scholarship.",
      "Only students who have a GPA above 3.5 are eligible for the scholarship.",
      "All students with a GPA above 3.5 are on the Dean's List.",
      "There is at least one senior who is not on the Dean's List."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 (There is at least one senior who is not on the Dean's List) identifies a senior who is not on the Dean's List. Statement 1 (If a student is a senior, they are eligible for the scholarship) implies this senior is eligible. Statement 2 (Only students who have a GPA above 3.5 are eligible for the scholarship) implies this senior has a GPA above 3.5. Statement 3 (All students with a GPA above 3.5 are on the Dean's List) implies this senior is on the Dean's List. This contradicts the initial premise from Statement 4 that this senior is not on the Dean's List."
  },
  {
    "id": "gen-2-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees in the marketing department attend the weekly meeting.",
      "If an employee attends the weekly meeting, they submit a report.",
      "Some employees who submit a report are not in the marketing department.",
      "Sarah is an employee who submits a report."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Sarah submits a report (Statement 4). She could be an employee in the marketing department (who would then attend the meeting and submit a report, consistent with 1 and 2). Alternatively, she could be one of the employees mentioned in Statement 3, who submits a report but is not in the marketing department. Both scenarios are consistent."
  },
  {
    "id": "gen-2-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a substance contains lead, it cannot be safely used in toys.",
      "Only substances that are safe for use in toys are approved by the safety board.",
      "All materials approved by the safety board are non-toxic.",
      "This new paint contains lead.",
      "This new paint was approved by the safety board."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 (This new paint contains lead) and Statement 1 (If a substance contains lead, it cannot be safely used in toys) imply the paint cannot be safely used in toys. Statement 2 (Only substances that are safe for use in toys are approved by the safety board) means that if a substance is not safe for toys, it is not approved by the safety board. Therefore, the paint is not approved by the safety board. This contradicts Statement 5."
  },
  {
    "id": "gen-2-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All reputable charities publish their financial statements.",
      "If a charity publishes its financial statements, it has transparent operations.",
      "Some organizations with transparent operations are not reputable charities.",
      "The 'Helping Hands' organization has transparent operations."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The 'Helping Hands' organization has transparent operations (Statement 4). It could be a reputable charity, in which case it would publish financial statements and thus have transparent operations (consistent with 1 and 2). Alternatively, it could be one of the organizations described in Statement 3, having transparent operations but not being a reputable charity. Both possibilities are consistent."
  },
  {
    "id": "gen-2-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates receive an offer letter.",
      "If a candidate receives an offer letter, they must pass the final interview.",
      "No candidate who failed the preliminary screening passes the final interview.",
      "Some candidates passed the preliminary screening but did not receive an offer letter.",
      "All candidates who pass the preliminary screening are successful."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 (All candidates who pass the preliminary screening are successful) and Statement 1 (All successful candidates receive an offer letter) imply that any candidate who passes the preliminary screening receives an offer letter. Statement 4 explicitly states that some candidates passed the preliminary screening but did not receive an offer letter, which is a direct contradiction of this derived conclusion."
  },
  {
    "id": "gen-2-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents living in the downtown district have a parking permit.",
      "If a resident has a parking permit, they pay an annual fee.",
      "Some residents who pay an annual fee do not live in the downtown district.",
      "John pays an annual fee."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. John pays an annual fee (Statement 4). He could be a resident of the downtown district (who would then have a parking permit and pay the fee, consistent with 1 and 2). Alternatively, he could be one of the residents described in Statement 3, who pays an annual fee but does not live in the downtown district. Both scenarios are consistent."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of Maple Street own a bicycle.",
      "No one who owns a bicycle lives on Oak Avenue.",
      "Some residents of Maple Street live on Oak Avenue."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all Maple Street residents own bicycles. Statement 2 says no bicycle owners live on Oak Avenue. Taken together, these mean no residents of Maple Street live on Oak Avenue, which directly contradicts Statement 3."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in this sanctuary have brightly colored feathers.",
      "Some animals with brightly colored feathers are not birds.",
      "No birds in this sanctuary migrate in winter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Birds in the sanctuary can have brightly colored feathers (Statement 1) and not migrate (Statement 3). Other animals can also have brightly colored feathers without being birds (Statement 2)."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a recipe requires fresh herbs, it is gourmet.",
      "If a recipe is gourmet, it uses expensive ingredients.",
      "This recipe does not use expensive ingredients.",
      "This recipe requires fresh herbs."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 create a chain: if a recipe requires fresh herbs, then it uses expensive ingredients. Statement 4 asserts that this recipe requires fresh herbs, which logically implies it uses expensive ingredients. This directly contradicts Statement 3."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No professional athletes are amateurs.",
      "All Olympic medalists are professional athletes.",
      "Some individuals who train daily are amateurs.",
      "No professional athletes train daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Olympic medalists (who are professional athletes) can be non-amateurs and not train daily. Some daily trainers can be amateurs, and professional athletes can be distinct from both amateurs and daily trainers."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No insects are birds.",
      "All sparrows are birds.",
      "Some insects are sparrows."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that no insects are birds. Statement 2 indicates that all sparrows are birds. Therefore, if something is a sparrow, it must be a bird, which means it cannot be an insect. This contradicts Statement 3, which claims some insects are sparrows."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All vegetables contain vitamins.",
      "No fruits contain vitamins.",
      "Some snacks are not vegetables."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Vegetables contain vitamins, and fruits do not. Some snacks are not vegetables (they could be fruits, or chips, or anything else that doesn't contradict the other statements)."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students in the advanced class passed the final exam.",
      "Some students in the advanced class did not receive a certificate.",
      "Every student who passed the final exam received a certificate."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says all advanced class students passed the exam. Statement 3 says every student who passed the exam received a certificate. Together, these imply that all students in the advanced class received a certificate. This directly contradicts Statement 2."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a book is a mystery novel, then it is fictional.",
      "If a book is fictional, then it is found in the literature section.",
      "Some historical texts are not found in the literature section.",
      "No biography is a mystery novel."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Mystery novels are fictional and found in the literature section. Some historical texts can exist outside the literature section without contradiction. Biographies are separate from mystery novels."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No dogs are fish.",
      "All whales are fish.",
      "Some dogs are whales."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says no dogs are fish. Statement 2 says all whales are fish. Therefore, if something is a whale, it must be a fish, which means it cannot be a dog. This conclusion that no dogs are whales directly contradicts Statement 3."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All planets are celestial bodies.",
      "No comets are planets.",
      "If a celestial body is observed, it is cataloged.",
      "Some comets are observed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Planets are celestial bodies, and comets are not planets. Some comets can be observed (which means they are cataloged, as they are also celestial bodies) without creating any contradictions with planets."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every participant in the marathon completed the full distance.",
      "No one who completed the full distance felt well enough to run another mile.",
      "All participants who didn't feel well enough to run another mile received a medical check-up.",
      "Some participants in the marathon did not receive a medical check-up."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect to imply that every participant in the marathon received a medical check-up. Statement 4 asserts that some participants in the marathon did not receive a medical check-up, which directly contradicts this conclusion."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All insects have six legs.",
      "Some creatures with six legs are not insects.",
      "Every spider has eight legs.",
      "No creature with eight legs is an insect."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Insects are a subset of creatures with six legs. Spiders are a subset of creatures with eight legs, and creatures with eight legs are distinct from insects. It is possible for some six-legged creatures to not be insects."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique timepieces are delicate.",
      "No delicate item is suitable for daily use.",
      "Every item not suitable for daily use must be stored in a climate-controlled environment.",
      "Some antique timepieces are not stored in a climate-controlled environment."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect to imply that every antique timepiece is stored in a climate-controlled environment. Statement 4 asserts that some antique timepieces are not stored in a climate-controlled environment, which directly contradicts this conclusion."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a dog is a terrier, it is energetic.",
      "Some energetic dogs are not terriers.",
      "All poodles are dogs.",
      "No poodle is a terrier."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Terriers are energetic dogs, but other energetic dogs exist (like poodles or other breeds). Poodles are dogs that are not terriers, fitting the general categories without conflict."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student attending the advanced seminar has completed the prerequisite course.",
      "Anyone who completed the prerequisite course passed the midterm exam.",
      "No student who passed the midterm exam failed the final project.",
      "Some students attending the advanced seminar failed the final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect to imply that every student attending the advanced seminar did not fail the final project. Statement 4 asserts that some students attending the advanced seminar failed the final project, which directly contradicts this conclusion."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates possess a valid license.",
      "Some individuals with a valid license are not qualified candidates.",
      "No provisional license holder is a qualified candidate.",
      "All provisional license holders have a valid license."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Qualified candidates are a subset of those with a valid license. Provisional license holders are also a subset of those with a valid license, but they are not qualified candidates. This allows for valid license holders who are not qualified candidates."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every bird in this aviary has a specific diet plan.",
      "Any bird with a specific diet plan is monitored daily.",
      "No bird monitored daily has experienced a recent health issue.",
      "At least one bird in this aviary has experienced a recent health issue."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect to imply that no bird in this aviary has experienced a recent health issue. Statement 4 asserts that at least one bird in this aviary has experienced a recent health issue, which directly contradicts this conclusion."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful project proposals were approved by the board.",
      "Some project proposals approved by the board were not successful.",
      "No proposal submitted after the deadline was approved by the board.",
      "Some project proposals that were submitted after the deadline were not successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Successful proposals are approved by the board, and some approved proposals might not be successful. Proposals submitted after the deadline are distinct from any approved proposals, and thus are not successful, which is consistent with the existence of some such proposals."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a vehicle has an electric engine, it produces zero emissions.",
      "All vehicles producing zero emissions qualify for a tax credit.",
      "No vehicle that qualifies for a tax credit is subject to a congestion charge.",
      "There is at least one vehicle with an electric engine that is subject to a congestion charge."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect to imply that no vehicle with an electric engine is subject to a congestion charge. Statement 4 asserts that there is at least one vehicle with an electric engine that is subject to a congestion charge, which directly contradicts this conclusion."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every cat in this shelter has received its vaccinations.",
      "Some animals that have received vaccinations are not cats.",
      "No animal with a microchip has missed its vaccinations.",
      "All cats in this shelter have a microchip."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Cats are vaccinated and have microchips. All microchipped animals are vaccinated. There are also vaccinated animals that are not cats (e.g., microchipped animals that are not cats, or other vaccinated animals)."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses saffron, it is considered gourmet.",
      "All gourmet recipes are difficult to prepare.",
      "No recipe that requires a special spice blend is difficult to prepare.",
      "Some recipes that use saffron require a special spice blend."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that if a recipe uses saffron, it is difficult to prepare. Statement 4 states that some recipes that use saffron also require a special spice blend. For any such recipe, statement 3 dictates it cannot be difficult to prepare, creating a direct contradiction."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete trains rigorously, they will be considered for the national team.",
      "Only athletes who maintain strict diets are considered for the national team.",
      "All athletes considered for the national team train rigorously.",
      "Some athletes who maintain strict diets are not considered for the national team."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true. For example, some athletes who maintain strict diets may not train rigorously enough or meet other criteria to be considered for the national team. The conditions for being considered for the national team are consistent with some athletes meeting those conditions and others not."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified, they have extensive experience.",
      "Every candidate with extensive experience passes the initial screening.",
      "No candidate who passes the initial screening is unknown to the hiring committee.",
      "Some candidates who are qualified are unknown to the hiring committee."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a candidate is qualified, then they have extensive experience, then they pass the initial screening, and then they are not unknown to the hiring committee. This means all qualified candidates are known to the hiring committee. Statement 4, however, asserts that some qualified candidates are unknown to the hiring committee, creating a contradiction."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a student submits their assignment on time, they will lose points.",
      "All students who lose points must resubmit their work.",
      "No student who received an extension lost points.",
      "Some students received an extension and submitted their assignment on time."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 3 implies that students with an extension do not lose points. From Statement 1, not losing points implies submitting on time. Thus, students with extensions submitted on time, which is consistent with Statement 4's claim that some students received an extension and submitted their assignment on time."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a dog is a terrier, it is energetic.",
      "All energetic dogs require daily walks.",
      "No dog requiring daily walks is comfortable in small apartments.",
      "Some terriers are comfortable in small apartments."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a dog is a terrier, then it is energetic, then it requires daily walks, and then it is not comfortable in small apartments. Therefore, no terrier should be comfortable in small apartments. Statement 4 directly contradicts this conclusion by asserting that some terriers are comfortable in small apartments."
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is a convertible, it has a soft top.",
      "Every car with a soft top is susceptible to sun damage.",
      "Some cars susceptible to sun damage are not convertibles.",
      "No car that is garaged regularly gets sun damage."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For instance, cars that are garaged regularly would avoid sun damage, and those that get sun damage would not be garaged regularly. Some cars susceptible to sun damage might not be convertibles, which is compatible with all convertibles being susceptible to sun damage."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless an item is fragile, it can be shipped via standard mail.",
      "No item with a value over $100 can be shipped via standard mail.",
      "Every item marked \"handle with care\" is not fragile.",
      "Some items with a value over $100 are marked \"handle with care\"."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that any item with a value over $100 must be fragile (because it cannot be shipped via standard mail, which means it must be fragile). Statement 3 claims that every item marked 'handle with care' is not fragile. Statement 4 then introduces items that have a value over $100 AND are marked 'handle with care,' which leads to a contradiction: such an item must be both fragile and not fragile."
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a mushroom is edible, it has a distinct cap.",
      "No mushroom with a distinct cap grows in direct sunlight.",
      "All mushrooms that grow in direct sunlight are poisonous.",
      "Some edible mushrooms are poisonous."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statements 1 and 2 imply that edible mushrooms do not grow in direct sunlight. Statement 3 implies that any mushroom that *does* grow in direct sunlight is poisonous. These two facts are consistent. Statement 4 states that some edible mushrooms are poisonous; this is possible as long as these edible-and-poisonous mushrooms do not grow in direct sunlight, which is already established by statements 1 and 2."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who attended the seminar submitted a report.",
      "If a student submitted a report, they received a certificate.",
      "No student who received a certificate failed the final exam.",
      "Some students who attended the seminar failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a student attended the seminar, they submitted a report, then they received a certificate, and then they did not fail the final exam. This means all students who attended the seminar did not fail the final exam. Statement 4 directly contradicts this by stating that some students who attended the seminar *did* fail the final exam."
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a software project is complex, it requires extensive documentation.",
      "All software projects requiring extensive documentation use agile methodologies.",
      "Some software projects that use agile methodologies are not complex.",
      "No software project that uses agile methodologies is completed ahead of schedule."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that complex projects use agile methodologies. Statement 3 then specifies that the set of agile projects is broader than just complex ones, which is consistent. Statement 4 adds another characteristic of agile projects, not conflicting with the previous statements."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mountaineers are skilled climbers.",
      "No skilled climber fears heights.",
      "Some mountaineers fear heights."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all mountaineers are skilled climbers. Statement 2 says no skilled climber fears heights. Together, these imply that no mountaineer fears heights. This directly contradicts Statement 3, which claims some mountaineers do fear heights."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All poets are dreamers.",
      "Some dreamers are not poets.",
      "Emily is a poet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 places all poets within the category of dreamers, while Statement 2 allows for dreamers who are not poets. Emily, as a poet from Statement 3, fits consistently within the group of poets who are also dreamers, without contradicting any other statement."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student passes the exam, they receive a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the program passed the exam.",
      "Some students in the program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that every student in the program passed the exam. Combined with Statement 1, this means every student in the program received a certificate. Statement 2 dictates that no student who received a certificate missed more than three classes. Therefore, every student in the program did not miss more than three classes. This directly contradicts Statement 4, which asserts that some students in the program did miss more than three classes."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds lay eggs.",
      "Some creatures that lay eggs are not birds.",
      "This robin is a bird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 affirms that all birds lay eggs. Statement 2 allows for other creatures besides birds that also lay eggs. The robin in Statement 3 is a bird, so it consistently lays eggs according to Statement 1, and does not contradict Statement 2."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every employee who works remotely has a flexible schedule.",
      "No employee with a flexible schedule is required to be in the office daily.",
      "Sarah is an employee who works remotely, but she is required to be in the office daily."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that employees working remotely have flexible schedules. Statement 2 states that no employee with a flexible schedule is required to be in the office daily. Together, these imply that no employee who works remotely is required to be in the office daily. This directly contradicts Statement 3, which says Sarah works remotely AND is required to be in the office daily."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful startups innovate constantly.",
      "Some businesses that innovate constantly are not successful startups.",
      "AlphaTech is a successful startup."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 indicates that successful startups are a subset of businesses that innovate constantly. Statement 2 allows for other innovative businesses that are not successful startups. AlphaTech, as a successful startup in Statement 3, consistently innovates constantly according to Statement 1, without contradiction."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an artist uses oil paints, they prefer vibrant colors.",
      "No artist who prefers vibrant colors avoids abstract themes.",
      "Some artists avoid abstract themes, and all of those artists use oil paints."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that using oil paints implies preferring vibrant colors. Statement 2 says that preferring vibrant colors implies not avoiding abstract themes. Therefore, using oil paints implies not avoiding abstract themes. This contradicts Statement 3, which states that some artists who use oil paints do avoid abstract themes."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mammals have fur.",
      "Some animals with fur are not mammals.",
      "This bat is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes that all mammals possess fur. Statement 2 indicates that some non-mammalian animals also have fur. The bat in Statement 3 is a mammal, thus it consistently has fur according to Statement 1, without contradicting Statement 2."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car in the garage is electric.",
      "No electric car is exempt from charging overnight.",
      "This specific car is in the garage, but it is exempt from charging overnight."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that every car in the garage is electric. Statement 2 indicates that no electric car is exempt from charging overnight, meaning all electric cars are required to charge overnight. Combined, these imply that every car in the garage is required to charge overnight. This directly contradicts Statement 3, which describes a car in the garage that is exempt from charging overnight."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a fern, it has spores.",
      "No plant with spores produces flowers.",
      "Some ferns produce flowers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that if a plant is a fern, it has spores. Statement 2 states that no plant with spores produces flowers. Therefore, it follows that no fern produces flowers. This directly contradicts Statement 3, which claims that some ferns do produce flowers."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is open past midnight, it serves dessert.",
      "No restaurant that serves dessert closes before 10 PM.",
      "Every restaurant in Midtown closes before 10 PM.",
      "Some restaurants in Midtown are open past midnight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain. From Statement 3, every restaurant in Midtown closes before 10 PM. From Statement 2 (contrapositive), if a restaurant closes before 10 PM, it does not serve dessert. From Statement 1 (contrapositive), if a restaurant does not serve dessert, it is not open past midnight. Therefore, any restaurant in Midtown is not open past midnight. Statement 4 directly contradicts this conclusion by asserting that some restaurants in Midtown are open past midnight."
  },
  {
    "id": "gen-7-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who submit their essays on time receive bonus points.",
      "If a student receives bonus points, they are eligible for the scholarship.",
      "Some students who did not submit their essays on time are eligible for the scholarship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that if a student submits their essay on time, they receive bonus points, and therefore are eligible for the scholarship. Statement 3 claims that some students who did not submit on time are also eligible for the scholarship. This is consistent, as eligibility for the scholarship might be granted through other means besides submitting essays on time and receiving bonus points."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No one without a valid ticket can enter the main hall.",
      "If a person is on the VIP list, they have a valid ticket.",
      "All concertgoers with backstage passes are also on the VIP list.",
      "Some concertgoers with backstage passes cannot enter the main hall."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: If a person has a backstage pass (3), they are on the VIP list. If they are on the VIP list (2), they have a valid ticket. If they have a valid ticket (contrapositive of 1), they can enter the main hall. Therefore, anyone with a backstage pass can enter the main hall. Statement 4 directly contradicts this by stating some concertgoers with backstage passes cannot enter the main hall."
  },
  {
    "id": "gen-7-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research project that receives full funding is successfully completed.",
      "If a project is successfully completed, its findings are published in a top journal.",
      "Some research projects with findings published in a top journal did not receive full funding.",
      "No research project that did not receive full funding is successfully completed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 together imply that a project is successfully completed if and only if it receives full funding. Statement 2 indicates that if a project is successfully completed, its findings are published. Statement 3 asserts that some projects are published despite not receiving full funding. This is consistent: A project could be published even if it did not receive full funding and thus was not successfully completed (due to statement 4), as statement 2 (B→C) would still be true because its antecedent (B) is false for such a project."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All senior managers have completed advanced training.",
      "If an employee has completed advanced training, they are eligible for promotion.",
      "No employee eligible for promotion is denied access to executive reports.",
      "Some employees who are denied access to executive reports are senior managers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if an employee is a senior manager (1), they have completed advanced training. If they have completed advanced training (2), they are eligible for promotion. If they are eligible for promotion (3), they are not denied access to executive reports. Therefore, if an employee is a senior manager, they are not denied access to executive reports. Statement 4 directly contradicts this by claiming some senior managers are denied access to executive reports."
  },
  {
    "id": "gen-7-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs taken to the city park must be on a leash.",
      "If a dog is on a leash, it is comfortable around strangers.",
      "Some dogs that are not comfortable around strangers are never taken to the city park."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if a dog is taken to the city park, it must be on a leash, and if it's on a leash, it is comfortable around strangers. This implies that any dog taken to the city park is comfortable around strangers (A→C). The contrapositive of this is that if a dog is not comfortable around strangers, it is not taken to the city park (not C → not A). Statement 3 claims that some dogs that are not comfortable around strangers are never taken to the city park, which is perfectly consistent with the derived contrapositive."
  },
  {
    "id": "gen-7-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant thrives in dry soil, it requires infrequent watering.",
      "No plant that requires infrequent watering has large, broad leaves.",
      "Every tropical plant has large, broad leaves.",
      "Some tropical plants thrive in dry soil."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 create a chain: if a plant thrives in dry soil, it requires infrequent watering, and thus does not have large, broad leaves (A→not C). Statement 3 states that every tropical plant has large, broad leaves (D→C), which means if a plant does NOT have large, broad leaves, it is NOT tropical (not C → not D). Combining these, if a plant thrives in dry soil, it is not tropical (A→not C→not D). Statement 4 contradicts this by claiming some tropical plants thrive in dry soil."
  },
  {
    "id": "gen-7-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles manufactured before 2000 use gasoline.",
      "If a vehicle uses gasoline, it produces significant emissions.",
      "Some vehicles that produce significant emissions were not manufactured before 2000."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: if a vehicle was manufactured before 2000, it uses gasoline, and therefore produces significant emissions. This means all vehicles manufactured before 2000 produce significant emissions (A→C). Statement 3 asserts that some vehicles producing significant emissions were not manufactured before 2000. This is consistent; the chain A→C does not preclude other vehicles (those not manufactured before 2000) from also producing significant emissions."
  },
  {
    "id": "gen-7-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a software application has automatic updates, it requires an internet connection.",
      "No software requiring an internet connection can operate in offline mode.",
      "All mission-critical software must operate in offline mode.",
      "Some mission-critical software has automatic updates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 create a chain: if software has automatic updates, it requires an internet connection, and therefore cannot operate in offline mode (A→not C). Statement 3 states that all mission-critical software must operate in offline mode (D→C), which means if software cannot operate in offline mode, it is not mission-critical (not C → not D). Combining these, if software has automatic updates, it is not mission-critical (A→not C→not D). Statement 4 contradicts this by claiming some mission-critical software has automatic updates."
  },
  {
    "id": "gen-7-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All researchers who secure a major grant participate in international collaborations.",
      "If a researcher participates in international collaborations, they present at global conferences.",
      "Some researchers who present at global conferences do not participate in international collaborations."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: if a researcher secures a major grant, they participate in international collaborations, and therefore present at global conferences (A→C). Statement 3 states that some researchers who present at global conferences do not participate in international collaborations. This is consistent, as a researcher could present at global conferences (C) for reasons other than participating in international collaborations (not B), without contradicting the initial chain."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All engineers are creative thinkers.",
      "No creative thinkers are resistant to new ideas.",
      "Some engineers are resistant to new ideas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 combine to imply that no engineers are resistant to new ideas. This directly contradicts Statement 3, which claims some engineers are resistant to new ideas."
  },
  {
    "id": "gen-8-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "Some carnivores are not lions.",
      "No herbivores are carnivores."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. There can be lions that are carnivores, other carnivores that are not lions, and herbivores that are not carnivores. No contradiction arises."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, it has a red breast.",
      "No bird with a red breast is a sparrow.",
      "Every robin is a sparrow."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 together imply that if a bird is a robin, it is not a sparrow. This directly contradicts Statement 3, which states every robin is a sparrow."
  },
  {
    "id": "gen-8-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who attend the training receive a certificate.",
      "Some employees do not attend the training.",
      "Maria is an employee who received a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Maria must have attended the training to receive a certificate. Other employees might not attend the training and therefore not receive a certificate. This situation is possible."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No athletes are lazy.",
      "Every person who trains daily is an athlete.",
      "Some people who train daily are lazy."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 1 combine to imply that no person who trains daily is lazy. This directly contradicts Statement 3, which claims some people who train daily are lazy."
  },
  {
    "id": "gen-8-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All valid arguments have true conclusions.",
      "Some arguments with true conclusions are not valid.",
      "No invalid argument has a true conclusion."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 3 together imply that an argument is valid if and only if it has a true conclusion. Statement 2, however, claims that there are arguments with true conclusions that are not valid, which directly contradicts the combined meaning of Statements 1 and 3."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student passes the course, they attend at least 80% of lectures.",
      "Some students pass the course.",
      "Not all students attend at least 80% of lectures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. Some students pass the course and therefore attend at least 80% of lectures. Other students might not pass the course and also not attend at least 80% of lectures, satisfying all statements."
  },
  {
    "id": "gen-8-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every politician cares about public opinion.",
      "No one who cares about public opinion ignores voter feedback.",
      "Some politicians ignore voter feedback."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no politician ignores voter feedback. This directly contradicts Statement 3, which asserts that some politicians do ignore voter feedback."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses do not prioritize customer satisfaction.",
      "Amazon is a successful business."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. Amazon (a successful business) prioritizes customer satisfaction. Other businesses might exist that do not prioritize customer satisfaction, and these would necessarily not be successful businesses, in line with Statement 1."
  },
  {
    "id": "gen-8-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a mushroom is edible, it has a white cap.",
      "No mushroom with gills is edible.",
      "All mushrooms with white caps have gills.",
      "Some mushrooms are edible."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 3, and 2 form a chain: if a mushroom is edible, it has a white cap (1), and if it has a white cap, it has gills (3), and if it has gills, it is not edible (2). This means 'if a mushroom is edible, then it is not edible.' Statement 4 asserts that some mushrooms are edible, which makes this contradiction actual."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who complete the advanced course are eligible for the scholarship.",
      "No student who missed more than two lectures completed the advanced course.",
      "Every student eligible for the scholarship has a cumulative GPA above 3.5.",
      "Some students in the program missed more than two lectures but still achieved a cumulative GPA above 3.5."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 indicates that if a student missed more than two lectures, they did not complete the advanced course. Statement 1 states that all who complete the advanced course are eligible for the scholarship, so by contrapositive, those who did not complete it are not eligible for the scholarship. Statement 3 says that every student eligible for the scholarship has a GPA above 3.5, so by contrapositive, anyone without a GPA above 3.5 is not eligible. Therefore, missing more than two lectures leads to not completing the advanced course, which means not being eligible for the scholarship, which in turn implies not having a GPA above 3.5. This conclusion contradicts Statement 4, which asserts that some students missed more than two lectures AND achieved a GPA above 3.5. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are highly disciplined.",
      "Some highly disciplined individuals are not successful entrepreneurs.",
      "No highly disciplined individual lacks a clear vision.",
      "Every individual who lacks a clear vision fails to achieve their goals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that all successful entrepreneurs are highly disciplined. Statement 2 is consistent with Statement 1, as it allows for highly disciplined individuals who are not entrepreneurs. Statement 3 implies that all highly disciplined individuals have a clear vision. Combining Statement 1 and Statement 3, all successful entrepreneurs are highly disciplined and thus have a clear vision. Statement 4 indicates that lacking a clear vision leads to failing goals. This is consistent, as successful entrepreneurs (who have clear vision) would not fail their goals due to lack of vision. Some highly disciplined individuals who are not successful entrepreneurs could still have clear vision and not fail their goals, or pursue other goals."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid parking permits display a current date.",
      "No vehicle displaying a current date permit can park in the restricted zone.",
      "Some vehicles parked in the restricted zone have valid parking permits."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a parking permit is valid, it displays a current date. Statement 2 says that if a permit displays a current date, the vehicle cannot park in the restricted zone. Combining these, if a vehicle has a valid parking permit, it cannot park in the restricted zone. Statement 3 contradicts this conclusion by stating that some vehicles parked in the restricted zone actually have valid parking permits. Removing Statement 3 eliminates the conflicting group."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus have exceeded their performance targets.",
      "Some employees who exceeded their performance targets did not receive a bonus.",
      "No employee who received a bonus was hired less than a year ago.",
      "At least one employee hired less than a year ago exceeded their performance targets."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes that receiving a bonus implies exceeding performance targets. Statement 2 is consistent, allowing for a group that exceeded targets but didn't get a bonus. Statement 3 says that if an employee received a bonus, they were not hired less than a year ago. Statement 4 describes employees hired less than a year ago who exceeded their performance targets. For these employees to exist without contradiction, they must be among those who did not receive a bonus, which is allowed by Statement 2."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the culinary society are skilled chefs.",
      "No skilled chef uses pre-packaged ingredients in their signature dish.",
      "Every participant in the annual cooking competition is a member of the culinary society.",
      "Some participants in the annual cooking competition use pre-packaged ingredients in their signature dish."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all participants in the annual cooking competition are members of the culinary society. Statement 1 indicates that all members of the culinary society are skilled chefs. Statement 2 indicates that no skilled chef uses pre-packaged ingredients. Therefore, any participant in the annual cooking competition must be a skilled chef who does not use pre-packaged ingredients in their signature dish. This conclusion contradicts Statement 4, which claims that some participants in the annual cooking competition DO use pre-packaged ingredients. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the city council are eligible voters.",
      "Some eligible voters are not members of the city council.",
      "No eligible voter resides outside the city limits.",
      "At least one person who resides outside the city limits is still a member of a local civic organization."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that all city council members are eligible voters. Statement 2 allows for eligible voters who are not on the city council, which is consistent. Statement 3 states that no eligible voter resides outside the city limits. This implies that if someone resides outside the city limits, they are not an eligible voter. Statement 4 states that some people residing outside the city limits are members of a local civic organization. These people would, by implication from Statement 3, not be eligible voters and therefore not members of the city council, which creates no contradiction."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All licensed engineers possess a degree in a STEM field.",
      "No one with a degree in a STEM field is unqualified for advanced research.",
      "Some people qualified for advanced research are not licensed engineers.",
      "Every person unqualified for advanced research lacks critical thinking skills."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 says all licensed engineers have STEM degrees. Statement 2 says all with STEM degrees are qualified for advanced research. Therefore, all licensed engineers are qualified for advanced research. Statement 3 is consistent because it allows for people who are qualified for advanced research but are not licensed engineers (e.g., scientists without engineering licenses). Statement 4 describes a characteristic of those unqualified for advanced research, which does not contradict the status of licensed engineers or other qualified individuals."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful public speakers use effective visuals.",
      "No one who uses effective visuals struggles with audience engagement.",
      "Every public speaker who receives a standing ovation is a successful public speaker.",
      "Some public speakers who receive a standing ovation struggle with audience engagement."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that if a public speaker receives a standing ovation, they are a successful public speaker. Statement 1 states that all successful public speakers use effective visuals. Statement 2 asserts that no one who uses effective visuals struggles with audience engagement. Chaining these together, if a public speaker receives a standing ovation, they are a successful public speaker, who uses effective visuals, and therefore does not struggle with audience engagement. This conclusion contradicts Statement 4, which claims that some public speakers who receive a standing ovation DO struggle with audience engagement. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All active members of the mountaineering club have successfully climbed a peak over 5,000 meters.",
      "Some individuals who have successfully climbed a peak over 5,000 meters are not active members of the mountaineering club.",
      "No one who has never experienced altitude sickness has successfully climbed a peak over 5,000 meters.",
      "At least one active member of the mountaineering club has never experienced altitude sickness."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 implies that if someone has never experienced altitude sickness, then they have NOT successfully climbed a peak over 5,000 meters. Statement 4 claims there is at least one active member of the mountaineering club who has never experienced altitude sickness. Therefore, from Statement 3 and Statement 4, there exists at least one active member of the mountaineering club who has NOT successfully climbed a peak over 5,000 meters. This directly contradicts Statement 1, which asserts that ALL active members of the mountaineering club have successfully climbed a peak over 5,000 meters. Removing Statement 4 resolves this contradiction by removing the group that causes the conflict."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every physician licensed in this state holds a medical degree.",
      "Some individuals with medical degrees are not physicians licensed in this state.",
      "No physician licensed in this state has failed the ethics examination.",
      "At least one individual who has failed the ethics examination is a medical researcher."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 means all licensed physicians have medical degrees. Statement 2 is consistent, allowing for people with medical degrees who are not licensed physicians. Statement 3 means all licensed physicians have passed the ethics examination. Statement 4 describes individuals who failed the ethics examination and are medical researchers. According to Statement 3, if someone failed the ethics examination, they cannot be a licensed physician. Thus, the individuals in Statement 4 are not licensed physicians, which is consistent with the other statements."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it requires indirect light.",
      "Every plant that requires indirect light is suitable for a north-facing window.",
      "No plant suitable for a north-facing window thrives in full sun.",
      "Some ferns thrive in full sun."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a plant is a fern, it requires indirect light, so it is suitable for a north-facing window, and thus it does not thrive in full sun. This means no fern thrives in full sun. Statement 4 directly contradicts this conclusion by asserting that some ferns do thrive in full sun."
  },
  {
    "id": "gen-10-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All owls are birds of prey.",
      "If a bird is a bird of prey, it has sharp talons.",
      "Some birds with sharp talons are not owls.",
      "Every bird with sharp talons can hunt small mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The chain 'owls are birds of prey' which 'have sharp talons' and 'can hunt small mammals' is compatible with the idea that there are other types of birds with sharp talons who can hunt small mammals but are not owls."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced seminar, they must have completed the prerequisite course.",
      "No student who completed the prerequisite course is exempt from the final project.",
      "Every student in the advanced seminar is exempt from the final project."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a chain: if a student enrolls in the advanced seminar, they completed the prerequisite course, and therefore are not exempt from the final project. This means no student in the advanced seminar is exempt from the final project. Statement 3 directly contradicts this by claiming every student in the advanced seminar is exempt from the final project."
  },
  {
    "id": "gen-10-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "The team will win the championship unless their star player is injured.",
      "If the team wins the championship, their coach will receive a bonus.",
      "The coach did not receive a bonus.",
      "The star player is not injured."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 4 imply that since the star player is not injured, the team will win the championship. Combined with Statement 2, this means the coach will receive a bonus. Statement 3 directly contradicts this conclusion by stating that the coach did not receive a bonus."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who passed the midterm also passed the final.",
      "If a student passed the final, they received an A in the course.",
      "Some students did not pass the midterm but still received an A in the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A student could pass the final and receive an A without passing the midterm (Statement 1 only applies if a student *did* pass the midterm). Thus, some students not passing the midterm but getting an A is possible."
  },
  {
    "id": "gen-10-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a sculpture, it is displayed outdoors.",
      "No artwork displayed outdoors is fragile.",
      "All artworks by K. Rivera are sculptures.",
      "Some artworks by K. Rivera are fragile."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if an artwork is by K. Rivera, it is a sculpture, so it is displayed outdoors, and therefore it is not fragile. This means no artwork by K. Rivera is fragile. Statement 4 contradicts this by stating that some artworks by K. Rivera are fragile."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the marathon trained for at least six months.",
      "If someone trained for at least six months, they followed a strict diet.",
      "Some people who followed a strict diet did not participate in the marathon."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. While marathon participants trained for six months and followed a strict diet, there could also be individuals who followed a strict diet and trained for six months (or not) but simply chose not to participate in the marathon."
  },
  {
    "id": "gen-10-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it is a fast flyer.",
      "No fast flyer migrates south for winter.",
      "All birds that do not migrate south for winter have short lifespans.",
      "Some swifts do not have short lifespans."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a bird is a swift, it is a fast flyer, which means it does not migrate south for winter, and therefore it has a short lifespan. This implies all swifts have short lifespans. Statement 4 directly contradicts this by claiming some swifts do not have short lifespans."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "Every innovative thinker is a problem-solver.",
      "Sarah is a problem-solver.",
      "Sarah is not a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 create a chain that successful entrepreneurs are innovative thinkers and problem-solvers. However, being a problem-solver (like Sarah) does not mean one must be an innovative thinker or a successful entrepreneur. Sarah could be a problem-solver without being an entrepreneur, or even an innovative thinker."
  },
  {
    "id": "gen-10-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an appliance is energy-efficient, it has a high-efficiency motor.",
      "Every appliance with a high-efficiency motor is certified by the green initiative.",
      "No appliance certified by the green initiative uses more than 500 watts.",
      "There is an energy-efficient appliance that uses more than 500 watts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if an appliance is energy-efficient, it has a high-efficiency motor, so it is certified by the green initiative, and thus it does not use more than 500 watts. This implies no energy-efficient appliance uses more than 500 watts. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are strategic thinkers.",
      "No strategic thinkers are impulsive decision-makers.",
      "Every student who signed up for the tournament is a member of the chess club.",
      "At least one student who signed up for the tournament is an impulsive decision-maker."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 together imply that every student who signed up for the tournament is not an impulsive decision-maker. Statement 4 directly contradicts this by asserting that at least one such student is an impulsive decision-maker."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No mammals are cold-blooded.",
      "All whales are mammals.",
      "Some whales live in warm waters."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Whales are mammals, and mammals are not cold-blooded. The fact that some whales live in warm waters does not contradict these statements or imply any inconsistency with being warm-blooded."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, then it has sold over a million copies.",
      "No book that sold over a million copies has fewer than 200 pages.",
      "Some books on the prize shortlist are bestsellers.",
      "Every book on the prize shortlist has fewer than 200 pages."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 together imply that some books on the prize shortlist do not have fewer than 200 pages. Statement 4, however, claims that every book on the prize shortlist has fewer than 200 pages, which directly contradicts the earlier implication."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Sarah trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Sarah trains daily. She could be a professional athlete (consistent with Statement 1) or one of the people who train daily but are not professional athletes (consistent with Statement 2). No contradiction arises."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds in this sanctuary are native species.",
      "No native species in this sanctuary migrates during winter.",
      "Some falcons in this sanctuary migrate during winter.",
      "All falcons are birds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 imply that no falcons in this sanctuary migrate during winter. Statement 3 directly contradicts this by stating that some falcons in the sanctuary do migrate during winter."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2020 has a backup camera.",
      "Some cars with backup cameras are not electric vehicles.",
      "This specific car was manufactured after 2020."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This car was manufactured after 2020, so it has a backup camera. Statement 2 indicates that some cars with backup cameras are not electric, so this car could be either an electric or a non-electric vehicle. All statements can be true simultaneously."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All effective leaders possess strong communication skills.",
      "No one with strong communication skills avoids public speaking.",
      "Some project managers avoid public speaking.",
      "Every project manager is an effective leader."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 together imply that no project manager avoids public speaking. Statement 3 directly contradicts this by stating that some project managers do avoid public speaking."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every artist's studio contains an easel.",
      "Some rooms that contain an easel are not very tidy.",
      "No room with an easel is completely dark.",
      "This room is an artist's studio."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This room, being an artist's studio, contains an easel and is not completely dark. It could be one of the rooms that are not very tidy, or it could be a tidy one. All statements can hold true at the same time."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All rare gemstones are valuable.",
      "No valuable object is easily replaced.",
      "Some items found in ancient tombs are rare gemstones.",
      "Every item found in ancient tombs is easily replaced."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 together imply that some items found in ancient tombs are not easily replaced. Statement 4, however, claims that every item found in ancient tombs is easily replaced, which directly contradicts the earlier implication."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful politician understands economics.",
      "No one who understands economics is easily swayed by popular opinion.",
      "Some easily swayed individuals are outspoken.",
      "This person is an outspoken politician."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This person is an outspoken politician. If they are successful, they understand economics and are not easily swayed. If they are not successful, they might or might not understand economics, and could be easily swayed while still being outspoken. There is no direct contradiction."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is late for class, they miss the introductory remarks.",
      "All students who miss the introductory remarks are marked absent.",
      "No student marked absent receives a perfect attendance award.",
      "Some students in the class were late for class and received a perfect attendance award."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, a late student misses introductory remarks. From Statement 2, missing introductory remarks means being marked absent. From Statement 3, being marked absent means not receiving a perfect attendance award. Therefore, any student late for class cannot receive a perfect attendance award. Statement 4 directly contradicts this by claiming some students were both late and received the award."
  },
  {
    "id": "gen-12-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it requires shade.",
      "Some plants in the garden are ferns.",
      "No plant that requires shade can tolerate direct sunlight.",
      "Some plants in the garden tolerate direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and 3 establish that ferns require shade and cannot tolerate direct sunlight. Statement 2 confirms there are ferns, meaning some plants require shade and do not tolerate direct sunlight. Statement 4 indicates there are other plants in the garden that tolerate direct sunlight, which is possible if those plants are not ferns or do not require shade. There is no contradiction."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student uses the textbook, they attend the lecture.",
      "All students who attend the lecture understand the material.",
      "No student who understands the material fails the test.",
      "Some students who use the textbook fail the test."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, using the textbook implies attending the lecture. From Statement 2, attending the lecture implies understanding the material. From Statement 3, understanding the material implies not failing the test. Therefore, any student who uses the textbook cannot fail the test. Statement 4 directly contradicts this by asserting some students who use the textbook also fail the test."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle is a car, it has at least four wheels.",
      "No vehicle with fewer than four wheels is allowed on the highway.",
      "Some vehicles on the highway are not cars.",
      "All cars are allowed on the highway."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 4 indicates all cars are on the highway, and Statement 1 says cars have at least four wheels. Statement 2 implies that any vehicle on the highway must have at least four wheels (contrapositive). Statement 3 allows for other types of vehicles (like trucks) to be on the highway, which also must have at least four wheels, consistent with the rules. There is no contradiction."
  },
  {
    "id": "gen-12-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If the alarm sounds, the security system is active.",
      "The security system is active only if all doors are locked.",
      "No door can be locked unless it is closed.",
      "The alarm sounded, but not all doors were closed."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if the alarm sounds, the security system is active. From Statement 2, an active security system means all doors are locked. From Statement 3, if a door is locked, it must be closed. Therefore, if the alarm sounds, all doors must be closed. Statement 4 directly contradicts this by stating the alarm sounded, but not all doors were closed."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds that migrate south have strong wings.",
      "If a bird is a raptor, it does not migrate south.",
      "Some birds with strong wings are not raptors.",
      "No bird that migrates south is a raptor."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 and Statement 4 are logically equivalent, both stating that raptors do not migrate south. Statement 1 indicates that birds migrating south have strong wings and are not raptors. This group of birds (migrating, strong wings, not raptors) is consistent with Statement 3, which says some strong-winged birds are not raptors. There is no contradiction."
  },
  {
    "id": "gen-12-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee who received a bonus met their quarterly target.",
      "No employee who met their quarterly target was subject to a performance review.",
      "If an employee was subject to a performance review, they did not receive a bonus.",
      "Some employees who were subject to a performance review also received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, receiving a bonus implies meeting the quarterly target. From Statement 2, meeting the quarterly target implies not being subject to a performance review. Therefore, receiving a bonus implies not being subject to a performance review. Statement 3, which states that being subject to a performance review implies not receiving a bonus, is consistent with this chain (its contrapositive is 'receiving a bonus implies not being subject to a performance review'). Statement 4 directly contradicts the established chain by claiming some employees were subject to a performance review and also received a bonus."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the survey received a gift card.",
      "No participant who did not answer all questions completed the survey.",
      "Some participants received a gift card even though they did not answer all questions."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 implies that if a participant did not answer all questions, they did not complete the survey. Statement 1 states that completing the survey leads to a gift card. However, Statement 1 does not state that completing the survey is the *only* way to receive a gift card. It's possible for some participants to receive a gift card via other means, as described in Statement 3, even if they didn't complete the survey by answering all questions. No contradiction exists."
  },
  {
    "id": "gen-12-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must pass pre-calculus.",
      "A student can pass pre-calculus only if they score above 70% on the final exam.",
      "No student who scores below 70% on the final exam can enroll in advanced calculus.",
      "Some students are enrolled in advanced calculus despite not scoring above 70% on the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, enrolling in advanced calculus implies passing pre-calculus. From Statement 2, passing pre-calculus implies scoring above 70% on the final exam. Therefore, enrolling in advanced calculus implies scoring above 70% on the final exam. Statement 3, which states that scoring below 70% on the final exam means not enrolling in advanced calculus, is consistent with this chain (it's the contrapositive). Statement 4 directly contradicts this established chain by claiming some students are enrolled in advanced calculus but did not score above 70%."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a travel allowance are in the sales department.",
      "Some employees in the sales department do not receive a travel allowance.",
      "If an employee works remotely, they do not receive a travel allowance.",
      "Maria works remotely and is in the sales department."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 3, since Maria works remotely, she does not receive a travel allowance. This is consistent with Statement 1 (which says *if* someone receives a travel allowance, they are in sales, not that everyone in sales gets one). Statement 2 explicitly states that some employees in sales do not receive a travel allowance, and Maria is one such example. All statements can be true simultaneously."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "No carnivores are herbivores.",
      "Some lions are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all lions are carnivores. Statement 2 says no carnivores are herbivores. Together, these mean that no lions are herbivores. Statement 3 contradicts this by claiming some lions are herbivores. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All teachers are educated professionals.",
      "Some educated professionals are artists.",
      "No teachers are artists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. While all teachers are educated professionals (Statement 1) and some educated professionals are artists (Statement 2), it is possible that the artists among the educated professionals are not teachers, which is compatible with Statement 3."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student completes the advanced course, they receive a special certificate.",
      "No one who receives a special certificate has a grade below B.",
      "Every student in the research group completes the advanced course.",
      "Some students in the research group have a grade below B."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that if a student completes the advanced course, they do not have a grade below B. Statement 3 says every student in the research group completes the advanced course. Therefore, every student in the research group does not have a grade below B. Statement 4 contradicts this by saying some students in the research group have a grade below B. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All classic novels are works of literature.",
      "No science textbooks are works of literature.",
      "Some acclaimed books are classic novels.",
      "Some acclaimed books are not science textbooks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 3 indicates some acclaimed books are classic novels, and Statement 1 confirms these are works of literature. This is compatible with Statement 2, which states no science textbooks are works of literature. Statement 4 simply states that some acclaimed books are not science textbooks, which aligns with them being classic novels and works of literature."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student submits their assignment late, they receive a penalty.",
      "Some students submitted their assignment late.",
      "No students received a penalty."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a student submits their assignment late, they receive a penalty. Statement 2 says some students submitted their assignment late. These two statements together logically imply that some students received a penalty. Statement 3 directly contradicts this by stating no students received a penalty. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds are mammals.",
      "Some flying creatures are birds.",
      "Some flying creatures are not mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 2 indicates that some flying creatures are birds. Statement 1 states that no birds are mammals. Therefore, those flying creatures that are birds cannot be mammals, which is exactly what Statement 3 says. Statement 3 is a logical consequence of Statements 1 and 2, not a contradiction."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with full benefits work more than 40 hours a week.",
      "Some senior managers do not work more than 40 hours a week.",
      "Every senior manager is an employee with full benefits."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 indicates that every senior manager is an employee with full benefits. Statement 1 says all employees with full benefits work more than 40 hours a week. Together, these imply that every senior manager works more than 40 hours a week. Statement 2 directly contradicts this by stating some senior managers do not work more than 40 hours a week. Removing Statement 2 resolves the inconsistency."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All vegetables are healthy foods.",
      "Some green beans are vegetables.",
      "Some green beans are healthy foods.",
      "Some healthy foods are not vegetables."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Since some green beans are vegetables (Statement 2) and all vegetables are healthy foods (Statement 1), it logically follows that some green beans are healthy foods (Statement 3). Statement 4 is also consistent, as there are many healthy foods (like fruits) that are not vegetables."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No politicians are completely honest.",
      "If a person holds public office, they are a politician.",
      "Some people who hold public office are completely honest."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says if a person holds public office, they are a politician. Statement 1 says no politicians are completely honest. These two statements together imply that if a person holds public office, they are not completely honest. Statement 3 directly contradicts this by asserting some people who hold public office are completely honest. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a restaurant is highly rated, it serves excellent food.",
      "Some local diners are highly rated.",
      "Some roadside cafes do not serve excellent food.",
      "No roadside cafes are local diners."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 and 2 together imply that some local diners serve excellent food. Statement 3 says some roadside cafes do not serve excellent food. Statement 4 clarifies that roadside cafes are a separate group from local diners, so there's no conflict. It is perfectly possible for some local diners to serve excellent food while some different establishments (roadside cafes) do not."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All architects have strong spatial reasoning.",
      "No one with strong spatial reasoning struggles with advanced geometry.",
      "Every candidate who passes the certification exam struggles with advanced geometry.",
      "Some architects pass the certification exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all architects do not struggle with advanced geometry. Statement 3 indicates that every candidate who passes the certification exam does struggle with advanced geometry. Therefore, no architect can pass the certification exam. Statement 4 directly contradicts this conclusion by asserting that some architects pass the certification exam."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every research scientist holds a doctorate.",
      "No one holding a doctorate is unfamiliar with statistical analysis.",
      "Some employees at the institute are research scientists.",
      "All employees at the institute are unfamiliar with statistical analysis."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all research scientists are familiar with statistical analysis. Statement 3 says that some employees at the institute are research scientists, which means some employees must be familiar with statistical analysis. Statement 4 claims that all employees at the institute are unfamiliar with statistical analysis, which directly contradicts the previous deduction."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All licensed doctors completed advanced medical training.",
      "No one who completed advanced medical training struggles with diagnostic reasoning.",
      "Every intern at the hospital struggles with diagnostic reasoning.",
      "Some licensed doctors are interns at the hospital."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all licensed doctors do not struggle with diagnostic reasoning. Statement 3 states that every intern at the hospital struggles with diagnostic reasoning. Thus, no licensed doctor can be an intern at the hospital. Statement 4 directly contradicts this by claiming that some licensed doctors are interns at the hospital."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All advanced drones require specialized pilot training.",
      "No drone requiring specialized pilot training can be operated without a license.",
      "Every hobbyist drone can be operated without a license.",
      "Some advanced drones are hobbyist drones."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all advanced drones cannot be operated without a license. Statement 3 claims that every hobbyist drone can be operated without a license. These conclusions mean that no advanced drone can be a hobbyist drone. Statement 4 directly contradicts this by asserting that some advanced drones are hobbyist drones."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful project managers attend leadership workshops.",
      "No one who attends leadership workshops is unwilling to delegate tasks.",
      "Every team member who consistently meets deadlines is unwilling to delegate tasks.",
      "Some successful project managers are team members who consistently meet deadlines."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all successful project managers are willing to delegate tasks. Statement 3 indicates that every team member who consistently meets deadlines is unwilling to delegate tasks. Therefore, no successful project manager can be a team member who consistently meets deadlines. Statement 4 directly contradicts this by claiming that some successful project managers are team members who consistently meet deadlines."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful product launches involve extensive market research.",
      "No product launch that involves extensive market research proceeds without competitor analysis.",
      "If a product launch has competitor analysis, it always achieves its sales goals.",
      "Some successful product launches do not achieve their sales goals."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a launch is successful, then it involves extensive market research (1), which means it proceeds with competitor analysis (2), and consequently it achieves its sales goals (3). This implies that every successful product launch achieves its sales goals. Statement 4 directly contradicts this conclusion by asserting that some successful product launches do not achieve their sales goals."
  },
  {
    "id": "gen-15-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every athlete participating in the marathon is a skilled long-distance runner.",
      "All skilled long-distance runners follow a strict training regimen.",
      "Some athletes who follow a strict training regimen are not participating in the marathon.",
      "No athlete participating in the marathon fails to follow a strict training regimen."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that every athlete participating in the marathon follows a strict training regimen. Statement 4 reiterates this conclusion. Statement 3 (Some athletes who follow a strict training regimen are not participating in the marathon) is consistent because the group of those following a strict training regimen can be larger than just marathon participants."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is considered a masterpiece, it commands a high auction price.",
      "No artwork that commands a high auction price is easily acquired by private collectors.",
      "All artworks that are not easily acquired by private collectors are widely exhibited in public galleries.",
      "Every masterpiece is rarely exhibited in public galleries."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if an artwork is a masterpiece, it commands a high auction price (1), which means it is not easily acquired by private collectors (2), and therefore it is widely exhibited in public galleries (3). This leads to the conclusion that every masterpiece is widely exhibited in public galleries. Statement 4 contradicts this by stating that every masterpiece is rarely exhibited in public galleries."
  },
  {
    "id": "gen-15-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All highly effective public speakers use vivid imagery.",
      "Some public speakers who use vivid imagery are not highly effective.",
      "If a public speaker uses vivid imagery, they engage their audience.",
      "Every public speaker who engages their audience is highly effective."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that all highly effective public speakers use vivid imagery and engage their audience. Statement 4 indicates that only highly effective speakers engage their audience, establishing an equivalence between being highly effective and engaging the audience. Statement 2 is consistent because using vivid imagery does not automatically make someone highly effective; it's a necessary condition, but not sufficient."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research study requiring ethical approval uses human participants.",
      "No research study using human participants is exempt from data privacy regulations.",
      "All research studies not exempt from data privacy regulations require explicit consent for publication.",
      "Some research studies requiring ethical approval do not require explicit consent for publication."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a study requires ethical approval, it uses human participants (1), which means it is not exempt from data privacy regulations (2), and therefore it requires explicit consent for publication (3). This implies that every research study requiring ethical approval requires explicit consent for publication. Statement 4 contradicts this by claiming some studies requiring ethical approval do not require explicit consent for publication."
  },
  {
    "id": "gen-15-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle has an internal combustion engine, it produces carbon emissions.",
      "All vehicles that produce carbon emissions contribute to air pollution.",
      "Some vehicles that contribute to air pollution do not have an internal combustion engine.",
      "No vehicle that has an internal combustion engine fails to contribute to air pollution."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically imply that if a vehicle has an internal combustion engine, it contributes to air pollution. Statement 4 reinforces this same conclusion. Statement 3 is consistent because other types of vehicles or activities could also contribute to air pollution without having internal combustion engines."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every company receiving government subsidies must comply with strict environmental regulations.",
      "No company complying with strict environmental regulations uses outdated waste disposal methods.",
      "If a company avoids outdated waste disposal methods, it invests in sustainable practices.",
      "Some companies receiving government subsidies do not invest in sustainable practices."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a company receives government subsidies, it complies with strict environmental regulations (1), which means it does not use outdated waste disposal methods (2), and therefore it invests in sustainable practices (3). This implies that every company receiving government subsidies invests in sustainable practices. Statement 4 contradicts this by stating that some companies receiving government subsidies do not invest in sustainable practices."
  },
  {
    "id": "gen-15-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful marketing campaigns target specific demographics.",
      "Some marketing campaigns that target specific demographics are not successful.",
      "If a marketing campaign targets specific demographics, it uses data analytics.",
      "No successful marketing campaign fails to use data analytics."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 logically imply that all successful marketing campaigns use data analytics. Statement 4 confirms this conclusion. Statement 2 is consistent because while targeting specific demographics is a characteristic of successful campaigns, it doesn't guarantee success; other campaigns might target demographics and use data analytics but still not be successful."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a building is listed as historic, it is protected by preservation laws.",
      "No building protected by preservation laws can undergo major structural alterations.",
      "Every building constructed before 1900 is listed as historic.",
      "Some buildings constructed before 1900 undergo major structural alterations."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 create a logical chain: if a building was constructed before 1900, it is listed as historic (3), which means it is protected by preservation laws (1), and therefore it cannot undergo major structural alterations (2). This implies that no building constructed before 1900 undergoes major structural alterations. Statement 4 directly contradicts this conclusion by asserting that some buildings constructed before 1900 do undergo major structural alterations."
  },
  {
    "id": "gen-15-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All effective team leaders foster open communication.",
      "Some individuals who foster open communication are not effective team leaders.",
      "If an individual fosters open communication, they conduct regular team meetings.",
      "No individual who conducts regular team meetings is an ineffective team leader."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that all effective team leaders foster open communication and conduct regular team meetings. Statement 4 suggests that anyone conducting regular team meetings is an effective team leader, establishing an equivalence between the two. Statement 2 is consistent because while fostering open communication is a trait of effective leaders, it doesn't mean all who foster it are effective; some might have other shortcomings."
  },
  {
    "id": "gen-16-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All artists are creative individuals.",
      "No creative individuals are dull speakers.",
      "Some artists are dull speakers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all artists are creative. Statement 2 says no creative individuals are dull speakers. Together, these imply that all artists are not dull speakers. Statement 3 directly contradicts this conclusion by asserting that some artists are dull speakers."
  },
  {
    "id": "gen-16-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All athletes are disciplined.",
      "Some disciplined people are not athletes.",
      "No undisciplined person is an athlete."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all athletes are disciplined. Statement 3 is the contrapositive of Statement 1, meaning they convey the same information. Statement 2 indicates that the group of disciplined people is larger than or equal to the group of athletes, which is entirely consistent with all athletes being disciplined."
  },
  {
    "id": "gen-16-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All plants in this garden are roses.",
      "Some plants in this garden do not have thorns."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 states that all plants in the garden are roses. Combined with Statement 1, which says all roses have thorns, it logically follows that all plants in this garden have thorns. Statement 3 contradicts this by claiming some plants in the garden do not have thorns."
  },
  {
    "id": "gen-16-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful companies prioritize innovation.",
      "Some companies that prioritize innovation are not successful.",
      "The company \"Alpha Tech\" prioritizes innovation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that successful companies are a subset of those that prioritize innovation. Statement 2 confirms that prioritizing innovation does not guarantee success, which is consistent with Statement 1. Statement 3 introduces Alpha Tech, which fits within the group of companies that prioritize innovation, and could be either successful or not successful."
  },
  {
    "id": "gen-16-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No birds that migrate are tropical birds.",
      "All birds in this aviary are tropical birds.",
      "Some birds in this aviary migrate."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 asserts that some birds in this aviary migrate. Statement 1 indicates that no migrating birds are tropical. Therefore, those aviary birds that migrate cannot be tropical, which directly contradicts Statement 2, claiming all birds in this aviary are tropical."
  },
  {
    "id": "gen-16-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student earns a scholarship, they have excellent grades.",
      "Some students with excellent grades do not earn scholarships.",
      "David has excellent grades."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that earning a scholarship requires excellent grades. Statement 2 confirms that having excellent grades does not guarantee a scholarship, which is fully consistent with Statement 1. Statement 3 states David has excellent grades, which is consistent with the possibility of him either earning or not earning a scholarship."
  },
  {
    "id": "gen-16-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a person is a successful entrepreneur, they are a risk-taker.",
      "No risk-taker avoids challenges.",
      "Some successful entrepreneurs avoid challenges."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that successful entrepreneurs are risk-takers. Statement 2 asserts that risk-takers do not avoid challenges. These two statements combined imply that successful entrepreneurs do not avoid challenges. Statement 3 directly contradicts this by stating that some successful entrepreneurs avoid challenges."
  },
  {
    "id": "gen-16-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs in this park are leashed.",
      "Some leashed dogs are not in this park.",
      "Fido is a dog in this park."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all dogs in the park are leashed. Statement 2 indicates that there are leashed dogs outside the park, which is consistent with Statement 1. Statement 3 places Fido in the park, meaning he must be leashed according to Statement 1, and this does not create any conflict with the other statements."
  },
  {
    "id": "gen-16-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist is impatient.",
      "Some chess club members are impatient."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all chess club members are skilled strategists. Statement 2 asserts that no skilled strategist is impatient. Taken together, these statements imply that no chess club member is impatient. Statement 3 directly contradicts this conclusion by claiming that some chess club members are impatient."
  },
  {
    "id": "gen-16-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a city has a high population density, it faces traffic congestion.",
      "Some cities that face traffic congestion do not have a high population density.",
      "The city of Metropolis has traffic congestion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that high population density leads to traffic congestion. Statement 2 clarifies that traffic congestion can occur even without high population density, which is fully consistent with Statement 1. Statement 3 states that Metropolis has traffic congestion, which allows for Metropolis to either have high population density or not, consistent with the other two statements."
  },
  {
    "id": "gen-17-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the annual audit is conducted, a full financial review is performed.",
      "A full financial review is performed only if all major accounts are reconciled.",
      "If any major account is not reconciled, then a discrepancy report is generated.",
      "A discrepancy report is never generated when the annual audit is conducted.",
      "Sometimes the annual audit is conducted even when at least one major account is not reconciled."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 2 establish a chain: If the annual audit is conducted, then a full financial review is performed, and this review implies all major accounts are reconciled. Therefore, if the annual audit is conducted, all major accounts are reconciled. Statement 5 directly contradicts this by claiming that sometimes the annual audit is conducted even when at least one major account is not reconciled."
  },
  {
    "id": "gen-17-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only students enrolled in the advanced seminar can access the restricted database.",
      "All students enrolled in the advanced seminar submit a research proposal.",
      "No student who submits a research proposal is exempt from the final presentation.",
      "Some students are exempt from the final presentation but can access the restricted database."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a student can access the restricted database, then they are enrolled in the advanced seminar, then they submit a research proposal, and then they are not exempt from the final presentation. This means anyone who can access the restricted database is not exempt from the final presentation. Statement 4 directly contradicts this by asserting that some students who can access the restricted database are exempt from the final presentation."
  },
  {
    "id": "gen-17-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No artwork produced before 1900 uses synthetic dyes.",
      "All artwork that does not use synthetic dyes requires specific humidity control.",
      "Artwork requiring specific humidity control must be displayed in a climate-controlled gallery.",
      "Some artwork produced before 1900 is displayed in a non-climate-controlled gallery."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if artwork was produced before 1900, then it does not use synthetic dyes, then it requires specific humidity control, and then it must be displayed in a climate-controlled gallery. This implies all artwork produced before 1900 is displayed in a climate-controlled gallery. Statement 4 directly contradicts this by stating some artwork produced before 1900 is displayed in a non-climate-controlled gallery."
  },
  {
    "id": "gen-17-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles in the company fleet are electric or hybrid.",
      "If a vehicle is electric, it always uses a charging station.",
      "If a vehicle is hybrid, it never uses a charging station.",
      "No vehicle in the company fleet is electric.",
      "Some vehicles in the company fleet use a charging station."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 4 combine to establish that all vehicles in the company fleet must be hybrid (since they are either electric or hybrid, but not electric). Statement 3 indicates that if a vehicle is hybrid, it never uses a charging station. Therefore, no vehicle in the company fleet uses a charging station. Statement 5 directly contradicts this by asserting that some vehicles in the company fleet use a charging station."
  },
  {
    "id": "gen-17-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project requiring external funding undergoes a rigorous review process.",
      "Projects undergoing a rigorous review process must submit a detailed budget.",
      "If a project submits a detailed budget, it is eligible for initial grant approval.",
      "Some projects eligible for initial grant approval do not require external funding.",
      "Some projects undergo a rigorous review process without submitting a detailed budget."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 2 asserts that all projects undergoing a rigorous review process must submit a detailed budget. Statement 5 directly contradicts this by claiming that some projects undergo a rigorous review process without submitting a detailed budget. The other statements (1, 3, 4) do not form a contradiction with each other or the remaining statements once Statement 5 is removed."
  },
  {
    "id": "gen-17-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All medical residents must complete a rotation in emergency care.",
      "No resident who completes a rotation in emergency care is assigned to an outpatient clinic during their first year.",
      "If a resident is assigned to an outpatient clinic, they must also complete a specialty elective.",
      "Every medical resident is assigned to an outpatient clinic during their first year.",
      "No medical resident completes a specialty elective."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all medical residents complete an emergency care rotation, and therefore are not assigned to an outpatient clinic during their first year. Statement 4 directly contradicts this by stating that every medical resident is assigned to an outpatient clinic during their first year. If statement 4 is removed, the set becomes consistent."
  },
  {
    "id": "gen-18-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members attended the workshop.",
      "No one who attended the workshop received a certificate.",
      "Every committee member received a certificate."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no committee member received a certificate (All committee members attended the workshop, and no attendees received certificates). This directly contradicts Statement 3, which claims that every committee member received a certificate. Removing Statement 3 resolves this conflict by allowing committee members not to receive certificates."
  },
  {
    "id": "gen-18-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "Some risk-takers are not successful entrepreneurs.",
      "No risk-taker avoids challenges.",
      "Maria is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Maria is a successful entrepreneur and therefore a risk-taker (Statement 1). Some risk-takers might not be entrepreneurs (Statement 2), and risk-takers generally embrace challenges (Statement 3). There is no logical conflict."
  },
  {
    "id": "gen-18-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No student who majors in history takes calculus.",
      "All students who major in economics take calculus.",
      "Some students major in both history and economics."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no student can major in both history and economics (If history, then no calculus; if economics, then calculus). This derived conclusion directly contradicts Statement 3, which asserts that some students major in both. Removing Statement 3 eliminates the contradiction."
  },
  {
    "id": "gen-18-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All migratory birds build nests in trees.",
      "Some birds that build nests in trees do not migrate.",
      "No bird that builds nests in trees lives in deserts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Migratory birds build nests in trees (Statement 1). It is possible for other, non-migratory birds to also build nests in trees (Statement 2), and none of these tree-nesting birds, migratory or otherwise, live in deserts (Statement 3)."
  },
  {
    "id": "gen-18-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a dog is a terrier, then it is playful.",
      "No dog that is playful barks loudly.",
      "Some terriers bark loudly."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a dog is a terrier, then it does not bark loudly (Terrier → Playful; Playful → No Loud Barking; therefore Terrier → No Loud Barking). This derived conclusion directly contradicts Statement 3, which states that some terriers do bark loudly. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-18-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every actor in the play attended rehearsals.",
      "Some people who attended rehearsals are not actors.",
      "The director also attended rehearsals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. Actors attended rehearsals (Statement 1). There were other people at rehearsals who weren't actors (Statement 2), and the director is one example of such a person (Statement 3). No logical conflicts arise."
  },
  {
    "id": "gen-18-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who work remotely live outside the city.",
      "No employee who lives outside the city is eligible for a parking permit.",
      "Every employee eligible for a parking permit works remotely.",
      "Some employees are eligible for a parking permit."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that no employee who works remotely is eligible for a parking permit (Remote → Outside City; Outside City → Not Eligible; therefore Remote → Not Eligible). Statement 3 indicates that every employee eligible for a parking permit works remotely (Eligible → Remote). Combined with Statement 4, which says some employees are eligible, this means some remote workers are eligible. This contradicts the conclusion from Statements 1 and 2. Removing Statement 4 makes the set of eligible employees empty, resolving the contradiction."
  },
  {
    "id": "gen-18-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "No student who passed the exam submitted a late assignment.",
      "Maria submitted a late assignment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Maria (Statement 4) submitted a late assignment. From Statement 3, she therefore did not pass the exam. This is consistent with Statements 1 and 2, as Maria could be a diligent student who did not pass, or a student who did not study diligently and also did not pass."
  },
  {
    "id": "gen-18-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "Some carnivores are not lions.",
      "No herbivore is a carnivore.",
      "Zebras are herbivores."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Lions are carnivores (Statement 1). There exist other carnivores that are not lions (Statement 2). Herbivores and carnivores are distinct categories (Statement 3), and zebras fit into the herbivore category (Statement 4)."
  },
  {
    "id": "gen-18-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every candidate selected for an interview received a high score on the aptitude test.",
      "No candidate who received a high score on the aptitude test failed the background check.",
      "Some candidates who failed the background check were selected for an interview."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no candidate selected for an interview failed the background check (Selected → High Score; High Score → Not Failed Background Check; therefore Selected → Not Failed Background Check). This derived conclusion directly contradicts Statement 3, which states that some candidates selected for an interview did fail the background check. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-19-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful software engineers have strong logical skills.",
      "No one with strong logical skills struggles with advanced mathematics.",
      "Some people who struggle with advanced mathematics become successful software engineers.",
      "Every person who struggles with advanced mathematics also struggles with basic arithmetic."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all successful software engineers do not struggle with advanced mathematics. Statement 3 directly contradicts this conclusion by asserting that some people who struggle with advanced mathematics become successful software engineers."
  },
  {
    "id": "gen-19-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategists are easily distracted.",
      "Some easily distracted people are not members of the chess club.",
      "If a person is easily distracted, they do not excel at puzzle games."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that no members of the chess club are easily distracted. Statement 3 is consistent with this, as it is possible for some easily distracted people to exist outside the chess club. Statement 4 introduces another characteristic of easily distracted people, which does not create a conflict with the other statements."
  },
  {
    "id": "gen-19-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs possess a high degree of risk tolerance.",
      "No individual with a high degree of risk tolerance avoids new challenges.",
      "Some people who avoid new challenges are successful entrepreneurs.",
      "Every individual who avoids new challenges also dislikes uncertainty."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that all successful entrepreneurs do not avoid new challenges. However, Statement 3 asserts that some people who avoid new challenges are successful entrepreneurs, which directly contradicts this established conclusion."
  },
  {
    "id": "gen-19-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an athlete trains daily, they perform exceptionally well.",
      "Some athletes who train daily do not win every competition.",
      "No athlete who performs exceptionally well ever fails a drug test.",
      "All athletes who train daily are diligent."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 establish that athletes who train daily do not fail drug tests. Statement 2 indicates that some daily trainers do not win every competition, which is perfectly compatible with performing exceptionally well and not failing drug tests. Statement 4 adds another characteristic that does not introduce any conflict."
  },
  {
    "id": "gen-19-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the expedition team are experienced climbers.",
      "Every experienced climber has successfully navigated extreme terrain.",
      "No one who has successfully navigated extreme terrain has ever been surprised by a sudden storm.",
      "At least one member of the expedition team was surprised by a sudden storm."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together lead to the conclusion that no members of the expedition team have ever been surprised by a sudden storm. Statement 4 directly contradicts this conclusion by stating that at least one member of the expedition team was surprised by a sudden storm."
  },
  {
    "id": "gen-19-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires full sunlight, it cannot thrive in shady conditions.",
      "Some plants that require full sunlight are not tropical species.",
      "All plants that thrive in shady conditions are native to temperate climates.",
      "No tropical species are native to temperate climates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 3 and 4 together imply that no plant that thrives in shady conditions is a tropical species. Statement 1 states that plants requiring full sunlight do not thrive in shady conditions. Statement 2 indicates some full-sunlight plants are not tropical, which is entirely consistent with the other information and does not create a conflict."
  },
  {
    "id": "gen-19-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful journalist writes compelling stories.",
      "All individuals who write compelling stories are excellent communicators.",
      "No excellent communicator struggles with public speaking.",
      "Some successful journalists struggle with public speaking."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that no successful journalists struggle with public speaking. Statement 4 directly contradicts this conclusion by asserting that some successful journalists do struggle with public speaking."
  },
  {
    "id": "gen-19-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All participants who completed the advanced course received a certificate.",
      "Some participants who completed the advanced course did not attend the final ceremony.",
      "No participant who received a certificate failed the final project.",
      "Mia attended the final ceremony but did not receive a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 establish that anyone completing the advanced course received a certificate and did not fail the final project. Statement 2 indicates that some of these participants missed the ceremony, which is compatible. Statement 4 describes Mia, who did not receive a certificate, which means she did not necessarily complete the advanced course, making her case consistent with all other statements."
  },
  {
    "id": "gen-19-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds found in this forest are migratory species.",
      "No migratory species remains in this region during winter.",
      "Every bird that does not remain in this region during winter is camouflaged.",
      "Some birds found in this forest are not camouflaged."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all birds found in this forest do not remain in this region during winter. Combining this with Statement 3, which states that every bird not remaining in winter is camouflaged, leads to the conclusion that all birds found in this forest are camouflaged. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-19-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All highly collaborative projects require extensive communication.",
      "Some projects with extensive communication are not completed on schedule.",
      "No project completed on schedule ever exceeds its initial budget.",
      "If a project requires extensive communication, its team is large."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 combine to indicate that all highly collaborative projects have large teams. Statement 3 establishes that projects completed on schedule do not exceed their budget. Statement 2 describes a subset of projects with extensive communication that are not completed on schedule, which is fully compatible with the other statements and does not lead to a contradiction."
  },
  {
    "id": "gen-20-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced course, they must complete the prerequisite module.",
      "No student who completes the prerequisite module fails the final assessment.",
      "Some students who enroll in the advanced course fail the final assessment.",
      "Every student in the advanced course also takes the seminar."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all students in the advanced course complete the prerequisite module. Statement 2 implies that no student who completes the prerequisite module fails the final assessment. Therefore, all students in the advanced course must not fail the final assessment. This directly contradicts Statement 3, which claims some students in the advanced course do fail the final assessment."
  },
  {
    "id": "gen-20-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird migrates south for winter, it is a species that breeds in the tundra.",
      "All birds that breed in the tundra have distinctive calls.",
      "Some birds with distinctive calls do not migrate south for winter.",
      "No bird that migrates south for winter is a ground-nesting species."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, a bird could migrate south, breed in the tundra, have a distinctive call, and not be ground-nesting. Other birds could have distinctive calls (due to breeding in tundra or other reasons) but not migrate south, which is consistent with the established conditional chains. Statement 4 adds an independent fact."
  },
  {
    "id": "gen-20-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A permit is issued only if all safety protocols have been met.",
      "Unless a site inspection is completed, no permit will be issued.",
      "All safety protocols have been met for this project.",
      "The site inspection for this project has not been completed.",
      "A permit has been issued for this project."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 2 implies that if a permit is issued, then a site inspection must have been completed. However, Statement 4 states that the site inspection for this project has not been completed. If both Statements 2 and 4 are true, then a permit cannot have been issued. This directly contradicts Statement 5, which claims a permit has been issued for this project."
  },
  {
    "id": "gen-20-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is endorsed by the union, they campaign vigorously.",
      "Every candidate who campaigns vigorously receives significant media coverage.",
      "Some candidates who receive significant media coverage are not endorsed by the union.",
      "No candidate who is endorsed by the union withdraws from the race."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Candidates endorsed by the union will campaign vigorously and receive media coverage. It is possible for other candidates to campaign vigorously and receive media coverage without being endorsed by the union, satisfying Statement 3. Statement 4 provides additional information about union-endorsed candidates without creating a conflict."
  },
  {
    "id": "gen-20-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who attend the annual retreat submit a project proposal.",
      "No employee who submits a project proposal misses the departmental review.",
      "Some employees who attend the annual retreat miss the departmental review.",
      "Only senior staff attend the annual retreat."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all employees who attend the retreat submit a proposal. Statement 2 says no employee who submits a proposal misses the review. Combining these, it follows that no employee who attends the retreat misses the departmental review. This directly contradicts Statement 3, which states that some employees who attend the annual retreat do miss the departmental review."
  },
  {
    "id": "gen-20-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle has an emissions sticker, it passed its annual inspection.",
      "No vehicle that passed its annual inspection has a faulty brake system.",
      "Some vehicles with faulty brake systems do not have an emissions sticker.",
      "All vehicles manufactured before 2000 require a special permit to operate in the city."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The first two statements imply that any vehicle with an emissions sticker cannot have a faulty brake system. If a vehicle has a faulty brake system, it therefore cannot have an emissions sticker, making Statement 3 perfectly consistent. Statement 4 introduces an independent condition that does not conflict with the others."
  },
  {
    "id": "gen-20-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A document is archived only if it has been signed by a manager.",
      "No document signed by a manager is missing its revision history.",
      "Unless a document is approved by legal, it cannot be archived.",
      "Some documents missing their revision history have been approved by legal.",
      "All documents approved by legal are eventually archived."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 implies that if a document is archived, it must be approved by legal. Statement 5 states that all documents approved by legal are archived. Therefore, being archived is equivalent to being approved by legal. Statement 1 says archived documents are signed by a manager, and Statement 2 says documents signed by a manager are not missing their revision history. This chain implies that all documents approved by legal are not missing their revision history. This directly contradicts Statement 4, which claims some documents approved by legal are missing their revision history."
  },
  {
    "id": "gen-20-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a player is eligible for the tournament, they have registered by the deadline.",
      "Every player who registers by the deadline pays the entry fee.",
      "Some players who pay the entry fee are not eligible for the tournament.",
      "All players who win a game receive a prize."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 establish that all eligible players have registered and paid the fee. Statement 3 is consistent because there could be players who registered and paid but were not eligible for other reasons. Statement 4 introduces an unrelated condition about winning games and prizes."
  },
  {
    "id": "gen-20-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the advanced workshop have completed the basic module.",
      "No one who completed the basic module scored poorly on the final quiz.",
      "Some participants in the advanced workshop scored poorly on the final quiz.",
      "Unless a participant attends the introductory session, they cannot join the advanced workshop."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all advanced workshop participants completed the basic module. Statement 2 says no one who completed the basic module scored poorly on the final quiz. This logically implies that no advanced workshop participant scored poorly on the final quiz. This directly contradicts Statement 3, which claims some participants in the advanced workshop scored poorly on the final quiz."
  },
  {
    "id": "gen-20-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe calls for fresh herbs, it is a savory dish.",
      "All savory dishes require at least one spice.",
      "Some recipes that require at least one spice do not call for fresh herbs.",
      "No recipe that uses dried fruit is a savory dish.",
      "All recipes that call for fresh herbs are suitable for dinner."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The first two statements imply that any recipe calling for fresh herbs is a savory dish and requires at least one spice. Statement 3 is consistent as there can be savory dishes that require spice but no fresh herbs. Statements 4 and 5 introduce additional conditions that do not create any contradiction with the existing chains."
  },
  {
    "id": "gen-21-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam received a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the program passed the exam.",
      "Some students in the program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 together logically imply that every student in the program received a certificate. Statement 2 asserts that no student who missed more than three classes received a certificate. Therefore, it must be true that no student in the program missed more than three classes. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-21-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that build nests are migratory.",
      "No migratory bird can survive in arctic climates.",
      "Some birds that build nests can survive in arctic climates."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all birds that build nests are migratory. Statement 2 states that no migratory bird can survive in arctic climates. These two statements together logically imply that no bird that builds nests can survive in arctic climates. Statement 3 directly contradicts this conclusion."
  },
  {
    "id": "gen-21-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of Sector 7 have access to the community garden.",
      "No resident of Sector 8 has access to the community garden.",
      "Some individuals who reside in Sector 7 also reside in Sector 8."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all residents of Sector 7 have access to the community garden. Statement 2 establishes that no resident of Sector 8 has access to the community garden. If there are individuals who reside in both Sector 7 and Sector 8, as stated in Statement 3, then those individuals must both have access to the garden and not have access to the garden, which is a contradiction."
  },
  {
    "id": "gen-21-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All paintings in the current exhibit are by local artists.",
      "Some works by local artists are not paintings.",
      "Maria's sculpture is not part of the current exhibit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all paintings in the exhibit to be by local artists, while some local artists also produce non-painting works (like sculptures). Maria's sculpture simply not being in the exhibit does not create any conflict with these statements."
  },
  {
    "id": "gen-21-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies diligently, they will pass the course.",
      "Some students did not study diligently.",
      "All students who passed the course were admitted to the advanced program.",
      "No student who did not study diligently was admitted to the advanced program."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 3, if a student passed the course, they were admitted to the advanced program. From Statement 4, if a student was admitted to the advanced program, they must have studied diligently. Therefore, if a student passed the course, they must have studied diligently. This is consistent with Statement 1 (studying diligently implies passing) and Statement 2 (some students did not study diligently, and thus did not pass)."
  },
  {
    "id": "gen-21-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an item is handmade, it is expensive.",
      "No item sold at the market is expensive.",
      "All items sold at the market are unique.",
      "Some items sold at the market are handmade."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that all handmade items are expensive. Statement 2 says that no item sold at the market is expensive. Together, these imply that no item sold at the market can be handmade. Statement 4 directly contradicts this conclusion by asserting that some items sold at the market are handmade. Statement 3 is consistent with the other statements regardless."
  },
  {
    "id": "gen-21-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own waterproof boots.",
      "Some people who own waterproof boots do not belong to the hiking club.",
      "No one who owns waterproof boots also owns leather shoes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is entirely possible for all hiking club members to own waterproof boots, while some people who own waterproof boots are not in the club. The additional statement about not owning leather shoes does not create any logical conflict with the other two statements."
  },
  {
    "id": "gen-21-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every employee who attended the workshop received a bonus.",
      "No employee who received a bonus was eligible for promotion.",
      "All managers are eligible for promotion.",
      "Some managers attended the workshop."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that any employee who attended the workshop was not eligible for promotion. Statement 3 states that all managers are eligible for promotion. This means that no manager could have attended the workshop. Statement 4, however, states that some managers did attend the workshop, creating a direct contradiction."
  },
  {
    "id": "gen-21-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All books checked out from the library must be returned within two weeks.",
      "Some books in the library are reference materials.",
      "No reference materials can be checked out from the library.",
      "Some books returned within two weeks were not reference materials."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for books checked out to have a return deadline, while the library also contains reference materials that cannot be checked out. Statement 4 simply indicates that some books returned were not reference materials, which aligns with the idea that non-reference books can be checked out and returned."
  },
  {
    "id": "gen-21-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a candidate is qualified, they will be interviewed.",
      "All candidates with prior experience are qualified.",
      "No candidate interviewed for the position was ultimately hired.",
      "Some candidates with prior experience were hired."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together establish that all candidates with prior experience will be interviewed. Statement 3 states that no candidate who was interviewed for the position was ultimately hired. These three statements logically imply that no candidate with prior experience was ultimately hired. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-22-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates who received an interview invitation also submitted a complete portfolio.",
      "If a candidate submitted a complete portfolio, they passed the initial screening.",
      "No candidate who passed the initial screening was subsequently rejected before the final round.",
      "Some candidates who received an interview invitation were rejected before the final round."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all interviewees submitted a portfolio. Statement 2 says all who submitted a portfolio passed initial screening. Statement 3 says no one who passed initial screening was rejected before the final round. This chain means all interviewees were NOT rejected before the final round. Statement 4 directly contradicts this by stating some interviewees WERE rejected before the final round."
  },
  {
    "id": "gen-22-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a city is a capital, it has a major airport.",
      "All cities with a major airport have a significant tourism industry.",
      "Some cities with a significant tourism industry are not capitals.",
      "Lisbon is a capital city."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and 2 establish that all capital cities have a significant tourism industry. Statement 3 indicates that some cities with a significant tourism industry are not capitals, which is entirely consistent (e.g., a non-capital city like Orlando could have significant tourism). Statement 4 identifies Lisbon as a capital, fitting within the established consistency."
  },
  {
    "id": "gen-22-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All premium subscribers have access to exclusive content.",
      "No user with access to exclusive content encounters advertisements.",
      "If a user is a premium subscriber, they occasionally encounter advertisements."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates all premium subscribers have access to exclusive content. Statement 2 says no user with exclusive content encounters advertisements. This means all premium subscribers should NOT encounter advertisements. Statement 3 directly contradicts this by asserting that premium subscribers DO encounter advertisements."
  },
  {
    "id": "gen-22-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a hummingbird, it can hover motionless in the air.",
      "All birds that feed on nectar are hummingbirds.",
      "Some birds that can hover motionless in the air do not feed on nectar.",
      "No bird that cannot hover motionless in the air is a hummingbird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all birds that feed on nectar can hover motionless in the air. Statement 3, claiming some birds that hover motionless do not feed on nectar, is consistent with this (e.g., a bird might hover but eat insects). Statement 4 is a contrapositive of Statement 1, not adding new information for a contradiction."
  },
  {
    "id": "gen-22-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All applicants with a strong academic record were invited for a second interview.",
      "If an applicant was invited for a second interview, they successfully completed the skills assessment.",
      "No applicant who successfully completed the skills assessment was ultimately denied admission.",
      "Some applicants with a strong academic record were ultimately denied admission."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all applicants with a strong academic record received a second interview. Statement 2 says all invited for a second interview completed the skills assessment. Statement 3 says no one who completed the skills assessment was denied admission. This chain implies that all applicants with a strong academic record were NOT ultimately denied admission. Statement 4 directly contradicts this by stating some applicants with a strong academic record WERE denied admission."
  },
  {
    "id": "gen-22-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur possesses strong leadership skills.",
      "If an individual possesses strong leadership skills, they inspire their team.",
      "Some individuals who inspire their team are not successful entrepreneurs.",
      "No individual who does not possess strong leadership skills is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that every successful entrepreneur inspires their team. Statement 3 allows for individuals who inspire their team but are not successful entrepreneurs (e.g., a charismatic teacher). Statement 4 is a contrapositive of Statement 1, reiterating that a lack of leadership skills means no success as an entrepreneur. All statements can be true simultaneously."
  },
  {
    "id": "gen-22-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the advanced course received a certificate of merit.",
      "No participant who missed more than two sessions received a certificate of merit.",
      "Every participant in the summer program completed the advanced course.",
      "Some participants in the summer program missed more than two sessions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3 and 1 indicate that every participant in the summer program completed the advanced course and therefore received a certificate of merit. Statements 4 and 2 indicate that some participants in the summer program missed more than two sessions and therefore did NOT receive a certificate of merit. These conclusions directly contradict each other."
  },
  {
    "id": "gen-22-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires direct sunlight, it has broad leaves.",
      "All plants with broad leaves need frequent watering.",
      "Some plants that need frequent watering do not require direct sunlight.",
      "No plant that does not have broad leaves requires direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all plants requiring direct sunlight also need frequent watering. Statement 3, that some plants needing frequent watering do not require direct sunlight, is consistent (e.g., shade plants that still need frequent watering). Statement 4 is the contrapositive of Statement 1, which means it doesn't introduce any new information or contradiction."
  },
  {
    "id": "gen-22-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All executives attended the quarterly board meeting.",
      "If an executive attended the quarterly board meeting, they reviewed the financial report.",
      "No executive who reviewed the financial report expressed concerns about spending.",
      "At least one executive expressed concerns about spending."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all executives attended the board meeting. Statement 2 says all who attended the meeting reviewed the financial report. Statement 3 says no one who reviewed the report expressed concerns. This chain implies that all executives expressed NO concerns about spending. Statement 4 directly contradicts this by stating at least one executive DID express concerns about spending."
  },
  {
    "id": "gen-22-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful negotiation involved concessions from both sides.",
      "If a negotiation involved concessions from both sides, it concluded amicably.",
      "Some negotiations concluded amicably but were not successful.",
      "All negotiations that concluded amicably involved concessions from both sides."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all successful negotiations concluded amicably. Statement 4 states that all amicably concluded negotiations involved concessions from both sides, effectively making 'concessions from both sides' and 'concluded amicably' equivalent for negotiations. Statement 3, that some negotiations concluded amicably but were not successful, is consistent, as it implies there are amicable negotiations that didn't meet the 'successful' criteria."
  },
  {
    "id": "gen-23-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds that migrate fly south for winter.",
      "No bird that flies south for winter nests in the tropics.",
      "Some birds that migrate nest in the tropics."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a bird migrates, it flies south for winter. Statement 2 says that if a bird flies south for winter, it does not nest in the tropics. Together, these imply that all birds that migrate do not nest in the tropics. This directly contradicts Statement 3, which claims that some birds that migrate do nest in the tropics. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-23-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who received a bonus met their quarterly goals.",
      "Some employees who met their quarterly goals did not receive a bonus.",
      "Maria received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 indicates Maria, having received a bonus, must have met her quarterly goals. Statement 2 allows for other employees who met their goals but did not receive a bonus, which is compatible with Maria's situation and Statement 1."
  },
  {
    "id": "gen-23-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book on the top shelf is a novel.",
      "No novel has a blue cover.",
      "Every book on the top shelf has a blue cover."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that any book on the top shelf is a novel. Statement 2 states that no novel has a blue cover. Therefore, it must be true that no book on the top shelf has a blue cover. This conclusion directly contradicts Statement 3, which asserts that every book on the top shelf has a blue cover. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-23-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "Some students passed algebra but did not enroll in advanced calculus.",
      "Sarah passed algebra."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 sets a prerequisite for advanced calculus. Statement 2 confirms that it's possible to pass algebra without taking advanced calculus. Sarah (Statement 3) could be one of the students mentioned in Statement 2, or she could be a student who passed algebra and then enrolled in advanced calculus. There is no contradiction."
  },
  {
    "id": "gen-23-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits grown in the orchard are organic.",
      "No organic produce contains artificial preservatives.",
      "Some fruits grown in the orchard contain artificial preservatives."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all fruits from the orchard are organic. Statement 2 says that organic produce contains no artificial preservatives. Together, these statements logically imply that all fruits grown in the orchard contain no artificial preservatives. This conclusion directly contradicts Statement 3, which claims that some fruits grown in the orchard do contain artificial preservatives. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-23-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every painting in the exhibition uses oil paints.",
      "Some paintings using oil paints are not in the exhibition.",
      "Maria's painting uses oil paints."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 defines a characteristic of all paintings in the exhibition. Statement 2 acknowledges that some oil paintings exist outside the exhibition. Maria's painting (Statement 3) could be either in the exhibition (and therefore uses oil paints, consistent with Statement 1) or it could be one of the oil paintings not in the exhibition (consistent with Statement 2). No contradiction arises."
  },
  {
    "id": "gen-23-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a document is classified, it requires special authorization to view.",
      "No document requiring special authorization is publicly accessible.",
      "Every document in this file is publicly accessible.",
      "Some documents in this file are classified."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that if a document is classified, then it is not publicly accessible. Statement 3 claims that every document in this file is publicly accessible. Statement 4 asserts that some documents in this file are classified. If Statement 4 is true, then for those classified documents in the file, they must be publicly accessible (from Statement 3) and not publicly accessible (from the combination of Statements 1 and 2), which is a contradiction. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-23-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All puppies under six months old are playful.",
      "Some playful dogs are not puppies.",
      "Max is a puppy under six months old."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes that Max, being a puppy under six months, is playful. Statement 2 simply notes that not all playful dogs are puppies, which does not conflict with Max being a playful puppy. There is no contradiction."
  },
  {
    "id": "gen-23-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every member of the photography club owns a DSLR camera.",
      "No one who owns a DSLR camera uses film.",
      "Some members of the photography club use film."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all members of the photography club own a DSLR camera. Statement 2 says that no one who owns a DSLR camera uses film. Therefore, it logically follows that no member of the photography club uses film. This conclusion directly contradicts Statement 3, which claims that some members of the photography club do use film. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-23-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who received a promotion attended the leadership workshop.",
      "Some employees who attended the leadership workshop did not receive a promotion.",
      "Elena attended the leadership workshop."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 outlines a condition for receiving a promotion. Statement 2 confirms that attending the workshop does not guarantee a promotion, which is compatible with Statement 1. Elena (Statement 3) could be an employee who attended the workshop and was promoted (consistent with Statement 1), or she could be one of the employees from Statement 2 who attended but was not promoted. There is no contradiction."
  },
  {
    "id": "gen-24-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All owls are birds of prey.",
      "No bird of prey eats only seeds.",
      "Some animals that eat only seeds are nocturnal.",
      "All nocturnal animals are owls."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 says all nocturnal animals are owls. Statement 1 says all owls are birds of prey. Statement 2 says no bird of prey eats only seeds. Therefore, it must be true that no nocturnal animal eats only seeds. This contradicts Statement 3, which claims some animals that eat only seeds are nocturnal."
  },
  {
    "id": "gen-24-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires direct sunlight, it has broad leaves.",
      "No plant with broad leaves can grow in shade.",
      "Some plants that grow in shade have narrow leaves.",
      "All plants with narrow leaves require direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 implies all plants with narrow leaves require direct sunlight. Statement 1 states that if a plant requires direct sunlight, it has broad leaves. Statement 2 indicates no plant with broad leaves can grow in shade. This chain means no plant with narrow leaves can grow in shade, which directly contradicts Statement 3, which claims some plants that grow in shade have narrow leaves."
  },
  {
    "id": "gen-24-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed an internship.",
      "No one who completed an internship failed the final interview.",
      "Some applicants failed the final interview.",
      "Maria is an applicant who completed an internship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful candidates did not fail the final interview. Statement 4 indicates Maria completed an internship, meaning she did not fail her final interview, which is consistent. Statement 3 only states that some other applicants failed, which does not contradict Maria's situation or the conditions for successful candidates."
  },
  {
    "id": "gen-24-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a recipe uses saffron, it is expensive.",
      "Only expensive recipes are served at the gala.",
      "No recipe served at the gala contains nuts.",
      "Some recipes that use saffron also contain nuts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 4 indicates some recipes use saffron and contain nuts. Statement 1 means these recipes are expensive. Statement 3, by contrapositive, means if a recipe contains nuts, it is not served at the gala. Thus, the recipes described in Statement 4 are expensive and contain nuts, but are not served at the gala, which is entirely consistent with all other statements."
  },
  {
    "id": "gen-24-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful job applicants have excellent references.",
      "No one with excellent references lacks prior experience.",
      "Some job applicants who applied for the position lack prior experience.",
      "Every job applicant for this position is a successful job applicant."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 says all job applicants for this position are successful. Statement 1 states all successful applicants have excellent references. Statement 2 indicates no one with excellent references lacks prior experience. This chain implies that every job applicant for this position has prior experience, which contradicts Statement 3, asserting that some applicants lack prior experience."
  },
  {
    "id": "gen-24-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals have fur.",
      "No reptiles have fur.",
      "Some animals with fur are not mammals.",
      "The platypus is an animal that has fur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all mammals have fur, which does not mean only mammals have fur, so Statement 3 is consistent. Statement 2 implies that any animal with fur is not a reptile. Statement 4 says the platypus has fur, thus it is not a reptile, which is a true biological fact and does not contradict any other statement."
  },
  {
    "id": "gen-24-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A candidate receives a bonus only if they exceed their sales quota.",
      "No employee who exceeds their sales quota is denied a promotion.",
      "All employees are denied a promotion unless they have perfect attendance.",
      "Some candidates who receive a bonus do not have perfect attendance."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 means receiving a bonus implies exceeding the quota. Statement 2 means exceeding the quota implies not being denied a promotion. Statement 3 (rewritten) means not being denied a promotion implies having perfect attendance. This forms a chain: receiving a bonus implies having perfect attendance, which contradicts Statement 4, which says some bonus recipients do not have perfect attendance."
  },
  {
    "id": "gen-24-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they must score high on the placement test.",
      "No student who scores high on the placement test struggles with algebra.",
      "Some students who struggle with algebra are accepted into the program.",
      "All students accepted into the program are eligible for advanced calculus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 indicate that students who enroll in advanced calculus do not struggle with algebra. Statements 3 and 4 show that some students who struggle with algebra are eligible for advanced calculus. There is no contradiction, as eligibility for advanced calculus does not mean enrollment, allowing for students who struggle with algebra to be eligible but not enroll."
  },
  {
    "id": "gen-24-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique clocks are intricate mechanisms.",
      "No intricate mechanism can be repaired by an amateur.",
      "Some devices that can be repaired by an amateur are not newly manufactured.",
      "Every device that is not newly manufactured is an antique clock."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 says devices not newly manufactured are antique clocks. Statement 1 says antique clocks are intricate mechanisms. Statement 2 says intricate mechanisms cannot be repaired by an amateur. This chain implies that any device not newly manufactured cannot be repaired by an amateur. This means any device that can be repaired by an amateur must be newly manufactured, which directly contradicts Statement 3."
  },
  {
    "id": "gen-24-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs take calculated risks.",
      "No one who avoids calculated risks can become wealthy.",
      "Some people who become wealthy are not successful entrepreneurs.",
      "Mark takes calculated risks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2, by contrapositive, means anyone who becomes wealthy takes calculated risks. This is consistent with Statement 1 that successful entrepreneurs take risks. Statement 3 allows for wealthy individuals who take risks but are not successful entrepreneurs (e.g., lottery winners or inheritors). Mark's action (Statement 4) is consistent with any of these possibilities."
  },
  {
    "id": "gen-25-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document contains personal data, it must be encrypted.",
      "All encrypted documents require two-factor authentication.",
      "No document requiring two-factor authentication can be accessed remotely.",
      "Some documents containing personal data can be accessed remotely."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a document contains personal data, it is encrypted; if it is encrypted, it requires two-factor authentication; and if it requires two-factor authentication, it cannot be accessed remotely. Thus, if a document contains personal data, it cannot be accessed remotely. Statement 4 directly contradicts this conclusion by asserting that some documents containing personal data *can* be accessed remotely. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-25-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified candidates are invited for a second interview.",
      "Every candidate invited for a second interview submits a portfolio.",
      "No candidate who did not submit a portfolio was qualified.",
      "Some candidates who submitted a portfolio were not qualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 (which implies if a candidate is qualified, they submit a portfolio) together establish that all qualified candidates submit a portfolio. Statement 4 notes that some candidates who submitted a portfolio were not qualified. This is consistent, as it simply means there can be candidates who submit a portfolio but were not among the qualified ones."
  },
  {
    "id": "gen-25-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the advanced seminar, they must pass the preliminary exam.",
      "No student who passed the preliminary exam failed the final project.",
      "Every student who passed the final project received a certificate of completion.",
      "Some students who attend the advanced seminar did not receive a certificate of completion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a student attends the advanced seminar, they pass the preliminary exam; if they pass the preliminary exam, they pass the final project; and if they pass the final project, they receive a certificate. Therefore, all students attending the advanced seminar must receive a certificate of completion. Statement 4 contradicts this by claiming some advanced seminar students did not receive a certificate. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-25-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only employees who complete the safety course are allowed on the factory floor.",
      "All employees on the factory floor wear protective helmets.",
      "Some employees who wear protective helmets did not complete the safety course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that being on the factory floor requires completing the safety course. Statement 2 says all employees on the factory floor wear protective helmets. This implies any employee on the factory floor must have completed the safety course AND wear a helmet. Statement 3 suggests there are employees who wear helmets but did not complete the safety course. These employees, by Statement 1, simply cannot be on the factory floor, which is consistent."
  },
  {
    "id": "gen-25-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a client submits a complaint, their case is reviewed by a supervisor.",
      "No case reviewed by a supervisor is closed without resolution.",
      "All cases closed without resolution are recorded as unresolved.",
      "Some clients submit a complaint for a case that is recorded as unresolved."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that if a client submits a complaint, their case is reviewed by a supervisor, and thus is not closed without resolution. Statement 3 states that all cases closed without resolution are recorded as unresolved. Statement 4 asserts that some clients submit a complaint for a case that is recorded as unresolved. If a case is recorded as unresolved (from Statement 4), then by Statement 3 it must have been closed without resolution. This means Statement 4, combined with Statement 3, implies that some cases from clients who submit complaints are closed without resolution, which directly contradicts the conclusion from Statements 1 and 2. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-25-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only employees with a security badge can access the data center.",
      "All employees with a security badge have undergone a background check.",
      "Some employees who have undergone a background check cannot access the data center.",
      "No employee who has not undergone a background check can access the data center."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 collectively establish that any employee who accesses the data center must have a security badge and have undergone a background check. Statement 3 states that some employees who have undergone a background check cannot access the data center. This is consistent, as it means that having a background check is a necessary condition for accessing the data center, but not a sufficient one."
  },
  {
    "id": "gen-25-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a participant enrolls in the advanced workshop, they must complete prerequisite coursework.",
      "No participant who has completed prerequisite coursework received a scholarship.",
      "Every participant in the professional development program enrolls in the advanced workshop.",
      "Some participants in the professional development program received a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: if a participant is in the professional development program, they enroll in the advanced workshop; if they enroll, they complete prerequisite coursework; and if they complete coursework, they do not receive a scholarship. Thus, all participants in the professional development program did not receive a scholarship. Statement 4 claims that some participants in the program *did* receive a scholarship, which directly contradicts this conclusion. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-25-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device runs on solar power, it has a rechargeable battery.",
      "All devices with a rechargeable battery are capable of storing energy.",
      "Some devices capable of storing energy do not run on solar power.",
      "No device that runs on solar power lacks a rechargeable battery."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 (which is logically identical to Statement 1) lead to the conclusion that if a device runs on solar power, it is capable of storing energy. Statement 3 states that some devices capable of storing energy do not run on solar power. This is consistent; it simply means there are other ways for a device to store energy besides running on solar power."
  },
  {
    "id": "gen-25-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it receives legal protection.",
      "Every species that receives legal protection has a designated habitat.",
      "No species that is a known agricultural pest has a designated habitat.",
      "Some endangered species are known agricultural pests."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish a chain: if a species is endangered, it receives legal protection, and therefore has a designated habitat. Statement 3 asserts that no agricultural pest has a designated habitat. Statement 4 claims that some endangered species are also agricultural pests. If such a species exists, it must both have a designated habitat (from the E -> DH chain) and not have a designated habitat (from AP -> not DH), which is a contradiction. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-25-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All customers with a premium membership receive exclusive discounts.",
      "Every customer who receives exclusive discounts attends the special event.",
      "Some customers who attend the special event do not have a premium membership.",
      "No customer who does not have a premium membership receives exclusive discounts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 together imply that having a premium membership is equivalent to receiving exclusive discounts, and that receiving exclusive discounts means attending the special event. This leads to the conclusion that all premium members attend the special event. Statement 3 notes that some customers who attend the special event do not have a premium membership. This is consistent; it means that attending the special event is not exclusive to premium members."
  },
  {
    "id": "gen-26-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All lions are mammals.",
      "No mammals are fish.",
      "Some lions are fish."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all lions are mammals. Statement 2 says no mammals are fish. Combining these means no lions are fish. Statement 3 contradicts this by claiming some lions are fish."
  },
  {
    "id": "gen-26-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All choir members are excellent singers.",
      "All students who play piano are choir members.",
      "Some excellent singers do not play piano."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all choir members are excellent singers. Statement 2 states that all piano players are choir members. This implies all piano players are excellent singers. Statement 3, that some excellent singers do not play piano, is consistent with this, as not all excellent singers must be piano players; some could be choir members who don't play piano, or excellent singers who are not in the choir at all."
  },
  {
    "id": "gen-26-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a project is approved, it receives funding.",
      "No project that receives funding is delayed.",
      "Every project on the priority list is approved.",
      "Some projects on the priority list are delayed."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every project on the priority list is approved. Statement 1 states that if a project is approved, it receives funding. Therefore, every project on the priority list receives funding. Statement 2 indicates that no project that receives funding is delayed. This means no project on the priority list is delayed. Statement 4 contradicts this by claiming some projects on the priority list are delayed."
  },
  {
    "id": "gen-26-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No science fiction novels are historical fiction.",
      "All books published this year are science fiction novels.",
      "Some historical fiction novels are bestsellers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 indicates all books published this year are science fiction novels. Statement 1 states no science fiction novels are historical fiction. This means no books published this year are historical fiction. Statement 3, that some historical fiction novels are bestsellers, is consistent, as these bestsellers could be historical fiction novels not published this year."
  },
  {
    "id": "gen-26-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional basketball players are tall.",
      "Some professional basketball players are short.",
      "No tall people are short."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says all professional basketball players are tall. Statement 3 says no tall people are short. Combining these, it follows that no professional basketball players are short. Statement 2 directly contradicts this conclusion by asserting that some professional basketball players are short."
  },
  {
    "id": "gen-26-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees in marketing have a strong understanding of consumer trends.",
      "No employee in sales works in marketing.",
      "Emily has a strong understanding of consumer trends.",
      "Emily works in sales."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 4 indicates Emily works in sales. Statement 2 says no employee in sales works in marketing, so Emily does not work in marketing. Statement 1 states that all employees in marketing understand consumer trends, but this does not mean only marketing employees understand them. Emily, working in sales, could still have a strong understanding of consumer trends, as stated in Statement 3, without contradicting any other statement."
  },
  {
    "id": "gen-26-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that nest in trees lay blue eggs.",
      "No birds that lay blue eggs migrate south for winter.",
      "Every robin nests in trees.",
      "Some robins migrate south for winter."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 states every robin nests in trees. Statement 1 says all birds that nest in trees lay blue eggs, so all robins lay blue eggs. Statement 2 says no birds that lay blue eggs migrate south for winter, which means no robins migrate south for winter. Statement 4 directly contradicts this by stating some robins migrate south for winter."
  },
  {
    "id": "gen-26-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All organic apples are locally grown.",
      "All locally grown fruits are delicious.",
      "Some apples are not organic.",
      "Some delicious fruits are not apples."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies all organic apples are locally grown. Statement 2 implies all locally grown fruits are delicious. Thus, all organic apples are delicious. Statement 3, that some apples are not organic, is consistent as not all apples need to be organic. Statement 4, that some delicious fruits are not apples, is also consistent, as other fruits like pears or oranges could be locally grown and delicious."
  },
  {
    "id": "gen-26-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No insects are capable of complex thought.",
      "All ants are insects.",
      "Some ants are capable of complex thought."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 indicates that all ants are insects. Statement 1 states that no insects are capable of complex thought. Therefore, it logically follows that no ants are capable of complex thought. Statement 3 contradicts this conclusion by claiming some ants are capable of complex thought."
  },
  {
    "id": "gen-26-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All paintings in the main gallery are portraits.",
      "Some portraits are abstract.",
      "No abstract art is displayed on the second floor.",
      "All sculptures in the museum are portraits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all main gallery paintings are portraits. Statement 4 establishes that all sculptures are portraits. Statement 2 says some portraits are abstract, which is possible given the other statements. Statement 3 states no abstract art is on the second floor. This set of conditions is entirely consistent; for example, the main gallery could have non-abstract portraits, and abstract portraits could exist but be displayed in a different section of the museum, not on the second floor."
  },
  {
    "id": "gen-27-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it has long, pointed wings.",
      "No bird with long, pointed wings is a ground nester.",
      "Every swift builds a nest in a high crevice.",
      "Some ground nesters build nests in high crevices.",
      "There are swifts that are ground nesters."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 posits the existence of swifts that are ground nesters. According to Statement 1, all swifts have long, pointed wings. Therefore, there must be ground nesters with long, pointed wings. However, Statement 2 explicitly states that no bird with long, pointed wings is a ground nester, creating a contradiction. Removing Statement 5 resolves this conflict."
  },
  {
    "id": "gen-27-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants submitted their forms on time.",
      "No one who submitted their form on time missed the orientation.",
      "Some applicants who missed the orientation still received an interview.",
      "Not all applicants who received an interview were successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and 2, successful applicants submitted on time and did not miss orientation. This means if an applicant missed orientation, they were not successful. Statement 3 indicates some applicants missed orientation and received an interview. These applicants would necessarily be among those who were not successful, which is consistent with Statement 4 that not all interviewees were successful."
  },
  {
    "id": "gen-27-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the alarm sounds, the security lights activate.",
      "The security lights activate only if motion is detected.",
      "No motion is detected unless the gate sensor is triggered.",
      "The alarm sounds at least once a day when the gate sensor is not triggered."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that the alarm sounds while the gate sensor is not triggered. If the alarm sounds, Statement 1 dictates the security lights activate. If the security lights activate, Statement 2 requires motion to be detected. Therefore, motion is detected when the gate sensor is not triggered, which directly contradicts Statement 3 (if no gate sensor is triggered, no motion is detected). Removing Statement 4 breaks this contradictory chain."
  },
  {
    "id": "gen-27-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is popular, it is always busy.",
      "A restaurant is busy only if it has good food.",
      "Some restaurants that have good food are not popular.",
      "No restaurant that has good food is ever empty."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, a popular restaurant is busy and has good food. Statement 3 notes that some restaurants with good food are not popular, which is consistent; having good food is a necessary but not sufficient condition for popularity. Statement 4 provides an additional characteristic for restaurants with good food, which does not conflict with any other statement. All conditions can be simultaneously met."
  },
  {
    "id": "gen-27-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful product launches have comprehensive marketing plans.",
      "If a product with a comprehensive marketing plan exceeds its budget, then the development team was expanded.",
      "Some successful product launches exceed their budgets.",
      "For any successful product launch, the development team is never expanded."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims some successful launches exceed their budgets. For these launches, Statement 4 dictates that the development team was not expanded. Combining these, there are successful launches that exceed their budgets and did not expand their teams. However, Statement 1 states all successful launches have marketing plans. This means there are marketing plans that exceed their budget without team expansion. This contradicts Statement 2, which states that if a marketing plan exceeds its budget, the team must have been expanded. Removing Statement 3 eliminates the specific instance that creates the contradiction."
  },
  {
    "id": "gen-27-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it reproduces by spores.",
      "No plant that reproduces by spores produces flowers.",
      "Some plants that produce flowers are ornamental.",
      "All ferns are ornamental."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, ferns reproduce by spores and do not produce flowers. Statement 4 adds that all ferns are ornamental. Statement 3 mentions some flowering plants are ornamental. These statements are consistent, describing two distinct groups of ornamental plants (ferns and some flowering plants) without creating any logical conflict."
  },
  {
    "id": "gen-27-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who passed the final project were eligible for the advanced seminar.",
      "Only students who completed all prerequisites were eligible for the advanced seminar.",
      "Some students did not complete all prerequisites but passed the final project.",
      "No student who did not complete all prerequisites could enroll in the advanced seminar."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims some students passed the final project despite not completing all prerequisites. From Statement 1, passing the final project makes a student eligible for the advanced seminar. However, Statement 2 clarifies that eligibility for the advanced seminar requires completing all prerequisites. Therefore, Statements 1 and 2 together imply that passing the final project means completing all prerequisites, which directly contradicts Statement 3. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-27-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the alarm sounds, the fire suppression system activates.",
      "The fire suppression system activates only if there is a detected heat source.",
      "Some detected heat sources are not actual fires.",
      "The alarm sometimes sounds when there is no actual fire."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, if the alarm sounds, a heat source is detected. Statement 4 asserts that the alarm sometimes sounds when there is no actual fire. This implies there are instances where a heat source is detected but it's not an actual fire. This is explicitly supported by Statement 3. All statements describe a possible scenario where a false alarm leads to detection of a non-fire heat source."
  },
  {
    "id": "gen-27-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle is certified for public transport, it undergoes annual inspection.",
      "No vehicle that undergoes annual inspection is allowed on public roads without proper registration.",
      "Some vehicles certified for public transport are on public roads, but lack proper registration."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 describes vehicles certified for public transport that are on public roads without proper registration. According to Statement 1, any vehicle certified for public transport must undergo annual inspection. This means there are vehicles undergoing annual inspection that are on public roads without proper registration. This directly contradicts Statement 2, which states that no vehicle undergoing annual inspection is allowed on public roads without proper registration. Removing Statement 3 removes the premise of this contradiction."
  },
  {
    "id": "gen-27-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful marketing campaigns target specific demographics.",
      "No marketing campaign that targets specific demographics is considered generic.",
      "Some marketing campaigns are generic and achieve their goals.",
      "A campaign is successful only if it achieves its goals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, successful marketing campaigns target specific demographics and are not generic. Statement 4 clarifies that successful campaigns also achieve their goals. Statement 3 mentions some generic campaigns achieve their goals. These generic campaigns cannot be successful (because successful campaigns are not generic), so they represent a different category of campaigns that achieve goals but are not successful. There is no contradiction."
  },
  {
    "id": "gen-28-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the final exam received a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the study group passed the final exam.",
      "Some students in the study group missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3 and 1 together imply that every student in the study group received a certificate. However, statements 4 and 2 together imply that some students in the study group did not receive a certificate, creating a contradiction."
  },
  {
    "id": "gen-28-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All jaguars are big cats.",
      "Some big cats are not jaguars.",
      "No small cats are jaguars.",
      "Every animal that roars is a big cat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For instance, jaguars are big cats, and lions are big cats that are not jaguars. Small cats are distinct from jaguars, and some big cats, like lions, roar."
  },
  {
    "id": "gen-28-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants have strong recommendations.",
      "No applicant with strong recommendations has a weak interview.",
      "Some applicants who had weak interviews were successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no successful applicant had a weak interview. Statement 3, however, asserts that some applicants who had weak interviews were successful, which directly contradicts this implication."
  },
  {
    "id": "gen-28-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every lawyer has passed the bar exam.",
      "Some individuals who passed the bar exam are not lawyers.",
      "All judges have passed the bar exam.",
      "All judges are lawyers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For instance, all judges are lawyers who have passed the bar exam. Some people pass the bar exam but choose not to practice law, consistent with Statement 2."
  },
  {
    "id": "gen-28-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in the aviary has a colored band.",
      "No bird with a colored band is a migratory bird.",
      "Some migratory birds are in the aviary."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no bird in the aviary is a migratory bird. However, Statement 3 asserts that some migratory birds are in the aviary, which directly contradicts this implication."
  },
  {
    "id": "gen-28-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who work from home have access to the VPN.",
      "Only employees with VPN access are allowed to use company software.",
      "Some employees use company software but do not work from home.",
      "All employees who use company software work for the company."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Employees who use company software must have VPN access (from Statement 2) and work for the company (from Statement 4). Some of these employees might not work from home, which is consistent with Statement 1."
  },
  {
    "id": "gen-28-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits that contain seeds are botanically berries.",
      "No botanically berries are true fruits.",
      "Some true fruits contain seeds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no fruit that contains seeds is a true fruit. However, Statement 3 asserts that some true fruits do contain seeds, which directly contradicts this implication."
  },
  {
    "id": "gen-28-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every painting in the collection is by a European artist.",
      "Some paintings by European artists are not in this collection.",
      "No painting by an American artist is in the collection.",
      "All paintings by artists from outside Europe are by American artists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Paintings in the collection are by European artists. Some European artists' works are elsewhere. American artists (who are from outside Europe) do not have works in the collection, fitting all conditions."
  },
  {
    "id": "gen-28-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All citizens eligible to vote are registered voters.",
      "All registered voters are required to have a valid ID to vote.",
      "Every citizen is eligible to vote.",
      "Some citizens are allowed to vote without a valid ID."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 together imply that no citizen is allowed to vote without a valid ID. Statement 4 directly contradicts this by asserting that some citizens are allowed to vote without a valid ID."
  },
  {
    "id": "gen-28-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All vegetables rich in Vitamin K are leafy greens.",
      "Some leafy greens are not vegetables rich in Vitamin K.",
      "No root vegetables are leafy greens.",
      "Some vegetables good for eye health are root vegetables."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, kale is a leafy green rich in Vitamin K, while lettuce is a leafy green not rich in Vitamin K. Carrots are root vegetables good for eye health, and root vegetables are distinct from leafy greens."
  },
  {
    "id": "gen-29-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates have extensive work experience.",
      "No candidate with extensive work experience lacks professional certifications.",
      "Every applicant for this position is a qualified candidate.",
      "Some applicants for this position lack professional certifications."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if an applicant is qualified, they have extensive work experience, and thus possess professional certifications. This implies all applicants for this position have professional certifications. Statement 4 directly contradicts this conclusion by asserting that some applicants lack them."
  },
  {
    "id": "gen-29-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student attends office hours, they perform well on the exam.",
      "Some students who perform well on the exam do not attend office hours.",
      "No student who fails the exam attends office hours."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says attending office hours leads to good performance. Statement 3 (No student who fails the exam attends office hours) is the contrapositive of Statement 1, meaning it conveys the same information. Statement 2 (Some students who perform well on the exam do not attend office hours) simply suggests that there are other ways to perform well, which does not contradict Statement 1."
  },
  {
    "id": "gen-29-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every expert gardener prefers organic fertilizers.",
      "No one who prefers organic fertilizers uses chemical pesticides.",
      "All farmers in this region are expert gardeners.",
      "Some farmers in this region use chemical pesticides."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 combine to form a logical chain: all farmers in this region are expert gardeners, who prefer organic fertilizers, and therefore use no chemical pesticides. This leads to the conclusion that no farmer in this region uses chemical pesticides. Statement 4 directly contradicts this derived conclusion."
  },
  {
    "id": "gen-29-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that migrate south have strong wings.",
      "Some birds with strong wings do not migrate south.",
      "Birds that do not migrate south remain in the northern territories.",
      "No bird that remains in the northern territories has weak wings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Birds that migrate south must have strong wings (Statement 1). Some strong-winged birds may not migrate south (Statement 2). Those that don't migrate stay north (Statement 3) and must also have strong wings (Statement 4), which is compatible with Statement 2."
  },
  {
    "id": "gen-29-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a restaurant is popular, it has long wait times.",
      "Every restaurant with long wait times offers reservations.",
      "No restaurant that offers reservations is closed on weekends.",
      "The new bistro is a popular restaurant.",
      "The new bistro is closed on weekends."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a chain: the new bistro is popular, therefore it has long wait times, which means it offers reservations, and thus it is not closed on weekends. This implies the new bistro is open on weekends. Statement 5 directly contradicts this conclusion."
  },
  {
    "id": "gen-29-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups secure venture capital.",
      "Some businesses that secure venture capital are not successful startups.",
      "No business that fails to secure venture capital is a successful startup."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 3 are contrapositives of each other, meaning they convey the same logical rule: securing venture capital is a necessary condition for a successful startup. Statement 2 simply clarifies that securing venture capital is not, by itself, a sufficient condition for success, which is consistent with the other statements."
  },
  {
    "id": "gen-29-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every car on the lot has working air conditioning.",
      "No car with working air conditioning has a faulty engine.",
      "All cars that pass inspection have working air conditioning.",
      "Some cars on the lot have a faulty engine."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically combine to mean that every car on the lot has working air conditioning and, therefore, does not have a faulty engine. This implies no car on the lot has a faulty engine. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-29-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are avid readers.",
      "Some avid readers are not members of the chess club.",
      "Every member of the debate team is also a member of the chess club.",
      "Sarah is an avid reader."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are all consistent. All chess club members are readers (Statement 1), but not all readers are chess club members (Statement 2). Debate team members are also chess club members (Statement 3), so they are also readers. Sarah, as an avid reader (Statement 4), could be a member of any of these groups or none, without contradiction."
  },
  {
    "id": "gen-29-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All software engineers are skilled in logic.",
      "No one skilled in logic struggles with advanced mathematics.",
      "Every student in this program is a software engineer.",
      "Some students in this program struggle with advanced mathematics."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: every student in this program is a software engineer, who is skilled in logic, and therefore does not struggle with advanced mathematics. This implies no student in this program struggles with advanced mathematics. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-29-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a painting is famous, it is valuable.",
      "Some valuable paintings are not famous.",
      "No painting that is not valuable is famous.",
      "The museum owns many famous paintings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (famous implies valuable) and Statement 3 (not valuable implies not famous, which is the contrapositive of Statement 1) convey the same rule. Statement 2 (some valuable paintings are not famous) means fame is not the only source of value, which is compatible. Statement 4 just adds context without creating conflict."
  },
  {
    "id": "gen-30-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee who attends the advanced training program receives a bonus.",
      "No employee who receives a bonus is eligible for overtime hours.",
      "Some employees who attend the advanced training program are eligible for overtime hours."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish a chain: If an employee attends the advanced training program, they receive a bonus, and if they receive a bonus, they are not eligible for overtime. This means no employee who attends the advanced training program is eligible for overtime hours. Statement 3 directly contradicts this by asserting that some employees who attend the program *are* eligible for overtime hours. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-30-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All antique cars require specialized maintenance.",
      "Some cars that require specialized maintenance are not antique cars.",
      "The mechanic, Alex, works only on cars that require specialized maintenance.",
      "Alex is currently repairing a car that is not an antique."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates antique cars need specialized maintenance. Statement 2 confirms that other types of cars also need specialized maintenance. Statement 3 states Alex only works on cars needing specialized maintenance. Statement 4, that Alex is repairing a non-antique car, is consistent because, according to Statement 2, there are non-antique cars that require specialized maintenance, and Alex can work on those."
  },
  {
    "id": "gen-30-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student submits the optional essay, they receive extra credit.",
      "No student who receives extra credit fails the course.",
      "Every student in this seminar submitted the optional essay.",
      "Some students in this seminar failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a student is in this seminar, they submitted the optional essay (Statement 3). If they submitted the optional essay, they received extra credit (Statement 1). If they received extra credit, they did not fail the course (Statement 2). Therefore, no student in this seminar failed the course. Statement 4 directly contradicts this conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-30-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful artists exhibit their work frequently.",
      "No artist who exhibits their work frequently struggles with funding.",
      "Some artists struggle with funding.",
      "At least one successful artist does not struggle with funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 together imply that all successful artists do not struggle with funding. Statement 4 confirms this implication, providing an example of a successful artist who does not struggle. Statement 3, that some artists struggle with funding, is also consistent as these would simply be artists who are not successful (or do not exhibit frequently)."
  },
  {
    "id": "gen-30-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate passes the initial screening, they are invited for an interview.",
      "Anyone invited for an interview must submit a portfolio.",
      "All candidates who submit a portfolio are considered for a second round.",
      "Some candidates who pass the initial screening are not considered for a second round."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: If a candidate passes the initial screening (Statement 1), they are invited for an interview. If invited for an interview (Statement 2), they must submit a portfolio. If they submit a portfolio (Statement 3), they are considered for a second round. This implies that all candidates who pass the initial screening are considered for a second round. Statement 4 contradicts this by stating some candidates who pass the initial screening are *not* considered for a second round. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-30-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is Michelin-starred, it offers a tasting menu.",
      "Every restaurant offering a tasting menu sources ingredients locally.",
      "Some restaurants that source ingredients locally are not Michelin-starred.",
      "The new restaurant \"The Gilded Spoon\" is Michelin-starred."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 establish that Michelin-starred restaurants offer tasting menus and source ingredients locally. Statement 3 confirms that not all restaurants that source ingredients locally are Michelin-starred, which is perfectly possible. Statement 4 states that \"The Gilded Spoon\" is Michelin-starred, which means it would fit the criteria of Statements 1 and 2, but does not contradict any other statement."
  },
  {
    "id": "gen-30-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All early bird registrants received a discount.",
      "No one who received a discount also paid the full fee.",
      "Some attendees paid the full fee and were early bird registrants.",
      "All attendees who paid the full fee received a special welcome packet."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 1 and 2 imply that no early bird registrant paid the full fee (since early bird registrants received a discount, and no one with a discount paid the full fee). Statement 3 directly contradicts this by stating that some early bird registrants *did* pay the full fee. To resolve this, Statement 1 must be removed, allowing for early bird registrants who did not receive a discount and thus could have paid the full fee."
  },
  {
    "id": "gen-30-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it has sharp teeth.",
      "Every species with sharp teeth belongs to the phylum Chordata.",
      "Some species that belong to the phylum Chordata are not carnivorous.",
      "There is a newly discovered species that has sharp teeth."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 together imply that all carnivorous species have sharp teeth and belong to the phylum Chordata. Statement 3 allows for species in Chordata that are not carnivorous. Statement 4 introduces a new species with sharp teeth; by Statement 2, this new species must belong to the phylum Chordata. It could either be a carnivorous species (consistent with 1) or one of the non-carnivorous Chordata species (consistent with 3)."
  },
  {
    "id": "gen-30-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All effective leaders possess strong communication skills.",
      "No one with strong communication skills avoids public speaking.",
      "Some individuals who avoid public speaking are effective leaders."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: If an individual is an effective leader (Statement 1), they possess strong communication skills. If they possess strong communication skills (Statement 2), they do not avoid public speaking. This implies that no effective leader avoids public speaking. Statement 3 directly contradicts this conclusion. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-30-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a building uses solar power, it has reduced energy costs.",
      "Every building with reduced energy costs receives an eco-friendly certification.",
      "No building with an eco-friendly certification has outdated insulation.",
      "Some buildings that use solar power have outdated insulation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: If a building uses solar power (Statement 1), it has reduced energy costs. If it has reduced energy costs (Statement 2), it receives an eco-friendly certification. If it has an eco-friendly certification (Statement 3), it does not have outdated insulation. This implies that no building that uses solar power has outdated insulation. Statement 4 directly contradicts this conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-31-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are birds of prey.",
      "No bird of prey eats berries.",
      "Some owls eat berries."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are birds of prey. Statement 2 says no bird of prey eats berries. Together, these imply that no owls eat berries. This directly contradicts Statement 3, which claims some owls do eat berries."
  },
  {
    "id": "gen-31-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies hard, they pass the exam.",
      "All students who attend tutoring sessions study hard.",
      "Some students who attend tutoring sessions pass the exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 indicates that all students who attend tutoring sessions study hard. Statement 1 states that if a student studies hard, they pass the exam. Taken together, these imply that all students who attend tutoring sessions pass the exam. Statement 3, which says some students who attend tutoring sessions pass the exam, is entirely consistent with this conclusion."
  },
  {
    "id": "gen-31-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "No plant that is a tropical species thrives in cold climates.",
      "All plants that thrive in cold climates require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that if a plant requires daily watering, then it does not thrive in cold climates. This means no plant can both require daily watering and thrive in cold climates. However, Statement 3 asserts that all plants that thrive in cold climates *do* require daily watering, creating a direct contradiction."
  },
  {
    "id": "gen-31-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Some painters are musicians.",
      "No sculptor is a musician.",
      "Some sculptors are not painters."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. For example, there could be painters who are musicians, sculptors who are neither painters nor musicians, and painters who are not musicians. The existence of some sculptors who are not painters does not conflict with any other statement."
  },
  {
    "id": "gen-31-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are avid readers.",
      "Some students from the debate team are members of the chess club.",
      "No student from the debate team is an avid reader."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 indicates there is at least one student who is both on the debate team and in the chess club. According to Statement 1, all members of the chess club are avid readers, meaning this specific student must be an avid reader. However, Statement 3 states that no student from the debate team is an avid reader, which implies this student cannot be an avid reader, creating a direct contradiction."
  },
  {
    "id": "gen-31-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a mammal, it has a backbone.",
      "Some mammals are aquatic.",
      "Some aquatic animals have a backbone."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 confirms that some animals are both mammals and aquatic. Statement 1 establishes that all mammals have a backbone. Therefore, the aquatic animals that are mammals must also have a backbone. This directly supports Statement 3, which states that some aquatic animals have a backbone."
  },
  {
    "id": "gen-31-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed an internship.",
      "Every candidate who completed an internship received a job offer.",
      "Some successful candidates did not receive a job offer."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together form a chain: if a candidate is successful, they completed an internship, and if they completed an internship, they received a job offer. This logically implies that all successful candidates received a job offer. Statement 3, however, asserts that some successful candidates did not receive a job offer, which directly contradicts this conclusion."
  },
  {
    "id": "gen-31-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional dancers train rigorously.",
      "No amateur dancers train rigorously.",
      "All professional dancers perform on stage.",
      "Some dancers who perform on stage are not amateur dancers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 indicates that all professional dancers perform on stage. By definition, professional dancers are not amateur dancers. Therefore, any professional dancer who performs on stage (as per Statement 3) is a dancer who performs on stage and is not an amateur dancer. This means Statement 4 is consistent with, and even directly supported by, the first three statements."
  },
  {
    "id": "gen-31-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in the advanced course, they must complete the prerequisite.",
      "All students who complete the prerequisite are eligible for a scholarship.",
      "Some students enrolled in the advanced course are not eligible for a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a logical chain: if a student enrolls in the advanced course, they must complete the prerequisite, and if they complete the prerequisite, they are eligible for a scholarship. Therefore, it logically follows that all students who enroll in the advanced course are eligible for a scholarship. Statement 3, which claims some students enrolled in the advanced course are *not* eligible for a scholarship, directly contradicts this conclusion."
  },
  {
    "id": "gen-31-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees with management roles attend the weekly planning meeting.",
      "No one who attends the weekly planning meeting works less than 30 hours per week.",
      "Some employees who work less than 30 hours per week have management roles."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a logical deduction: if an employee has a management role, they attend the weekly planning meeting, and if they attend that meeting, they do not work less than 30 hours per week. This means no employee with a management role works less than 30 hours per week. Statement 3 directly contradicts this by asserting that some employees who work less than 30 hours per week *do* have management roles."
  },
  {
    "id": "gen-32-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the city council attend public forums.",
      "No one who attends public forums misses the budget review.",
      "If someone does not miss the budget review, they are well-informed.",
      "Some city council members are not well-informed."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if someone is a city council member, they attend public forums, do not miss the budget review, and are therefore well-informed. This means all city council members are well-informed. Statement 4 directly contradicts this conclusion by asserting that some city council members are not well-informed."
  },
  {
    "id": "gen-32-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful athlete trains consistently.",
      "If someone trains consistently, they are disciplined.",
      "Some disciplined people are not successful athletes.",
      "Alex is disciplined."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 and 2 imply all successful athletes are disciplined. Statement 3 indicates that there are disciplined people who are not successful athletes, which is consistent. Alex being disciplined is also consistent, as Alex could be either a successful athlete or one of the disciplined people who are not successful athletes."
  },
  {
    "id": "gen-32-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a masterpiece, it commands a high price.",
      "Works that command a high price are never sold at auction.",
      "All artworks sold at auction are not considered masterpieces.",
      "Some masterpieces are sold at auction."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that if an artwork is a masterpiece, it commands a high price and is therefore never sold at auction. Statement 3 supports this by stating that artworks sold at auction are not masterpieces. Statement 4, however, claims that some masterpieces are sold at auction, which directly contradicts the conclusion derived from the other statements."
  },
  {
    "id": "gen-32-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All migratory birds travel in flocks.",
      "If a bird travels in a flock, it flies long distances.",
      "Some birds that fly long distances are not migratory birds.",
      "The swift is a migratory bird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all migratory birds fly long distances. Statement 3 is consistent with this, as it is possible for other types of birds to also fly long distances without being migratory. The swift being a migratory bird is consistent with this framework."
  },
  {
    "id": "gen-32-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No student is admitted to the advanced seminar unless they have excellent grades.",
      "Every student with excellent grades has published a research paper.",
      "If a student has published a research paper, they receive a scholarship.",
      "Some students admitted to the advanced seminar do not receive a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: being admitted to the advanced seminar requires excellent grades, which requires having published a research paper, which in turn means receiving a scholarship. Therefore, any student admitted to the advanced seminar must receive a scholarship. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-32-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A software update is only released if it passes all tests.",
      "If a software update passes all tests, it is stable.",
      "Some stable software updates are not released.",
      "This new update is stable."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 indicate that a released update is stable. Statement 3 suggests that there can be stable updates that are not released, which is consistent. The new update being stable is also consistent, as it may or may not have been released yet."
  },
  {
    "id": "gen-32-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates who are endorsed by the committee are highly qualified.",
      "A candidate is highly qualified only if they have significant experience.",
      "If a candidate has significant experience, they possess strong leadership skills.",
      "No candidate with strong leadership skills is overlooked for promotion.",
      "Some candidates endorsed by the committee are overlooked for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: being endorsed by the committee implies being highly qualified, which implies having significant experience, which implies possessing strong leadership skills, which means not being overlooked for promotion. Thus, all endorsed candidates are not overlooked for promotion. Statement 5 directly contradicts this conclusion by stating that some endorsed candidates are overlooked for promotion."
  },
  {
    "id": "gen-32-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful business grows its customer base.",
      "If a business grows its customer base, it invests in marketing.",
      "Some businesses that invest in marketing are not successful businesses.",
      "Our company invests in marketing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all successful businesses invest in marketing. Statement 3 is consistent with this, as it allows for other businesses to invest in marketing without necessarily being successful. Our company investing in marketing is also consistent, as it could be either successful or not."
  },
  {
    "id": "gen-32-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it flies fast.",
      "All birds that fly fast have short wings.",
      "This particular bird is a swift.",
      "This particular bird does not have short wings."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that this particular bird is a swift, which flies fast, and therefore has short wings. Statement 4 directly contradicts this conclusion by asserting that this bird does not have short wings. Removing Statement 4 makes the set of statements consistent."
  },
  {
    "id": "gen-32-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No student can join the debate club unless they attend the tryouts.",
      "If a student attends the tryouts, they must prepare a speech.",
      "Some students who prepare a speech do not join the debate club.",
      "Maria prepared a speech."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that any student joining the debate club must attend tryouts and prepare a speech. Statement 3 is consistent, as it describes students who prepare speeches but don't join the club (perhaps they don't pass tryouts or choose not to join). Maria preparing a speech is consistent within this framework."
  },
  {
    "id": "gen-33-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of Maple Street own a car.",
      "No one who owns a car uses public transport.",
      "Some residents of Maple Street use public transport."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that every resident of Maple Street owns a car, and no car owner uses public transport. Therefore, no resident of Maple Street uses public transport. This directly contradicts Statement 3, which asserts that some residents of Maple Street do use public transport."
  },
  {
    "id": "gen-33-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an athlete trains daily, they will win a medal.",
      "No athlete who eats fast food wins a medal.",
      "Every athlete in this club trains daily.",
      "Some athletes in this club eat fast food."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 together establish that every athlete in this club trains daily and, consequently, wins a medal. However, Statement 4 indicates that some athletes in this club eat fast food, which, by Statement 2, means they do not win a medal. This creates a contradiction where some athletes in the club both win a medal and do not win a medal."
  },
  {
    "id": "gen-33-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful startups are innovative.",
      "No innovative company struggles with funding.",
      "Some successful startups struggle with funding."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combine to show that if a startup is successful, it is innovative, and if it is innovative, it does not struggle with funding. Therefore, no successful startup struggles with funding. This directly contradicts Statement 3, which claims that some successful startups do struggle with funding."
  },
  {
    "id": "gen-33-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professors conduct research.",
      "No one who conducts research teaches undergraduates.",
      "Some professors teach undergraduates."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all professors conduct research, and no one who conducts research teaches undergraduates. Therefore, no professor teaches undergraduates. This directly contradicts Statement 3, which states that some professors do teach undergraduates."
  },
  {
    "id": "gen-33-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All trees in this park are deciduous.",
      "No deciduous tree keeps its leaves in winter.",
      "Some trees in this park keep their leaves in winter."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically entail that all trees in this park are deciduous, and no deciduous tree keeps its leaves in winter. This means no tree in this park keeps its leaves in winter. This conclusion directly conflicts with Statement 3, which claims that some trees in this park do keep their leaves in winter."
  },
  {
    "id": "gen-33-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs enjoy playing fetch.",
      "Some dogs do not enjoy swimming.",
      "Sparky is a dog."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that all dogs enjoy playing fetch, and some subset of dogs (including potentially Sparky) do not enjoy swimming. Sparky is simply a member of the 'dogs' group, and his enjoyment of fetch and potential enjoyment or non-enjoyment of swimming do not create any contradiction."
  },
  {
    "id": "gen-33-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student studies diligently, they pass the course.",
      "All students in the honors program study diligently.",
      "Not all students pass the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together mean that all students in the honors program study diligently and thus pass the course. Statement 3, 'Not all students pass the course,' simply indicates that some students (presumably those not in the honors program, or those who don't study diligently) do not pass, which does not contradict the success of the diligent honors students."
  },
  {
    "id": "gen-33-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No one who runs a marathon enjoys painting.",
      "Some artists run marathons.",
      "All artists are creative."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that some artists run marathons, and those particular artists therefore do not enjoy painting according to Statement 1. Statement 3 states that all artists are creative, which is a separate attribute that does not conflict with running marathons or not enjoying painting."
  },
  {
    "id": "gen-33-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every doctor has a medical degree.",
      "Some people with medical degrees are not practicing doctors.",
      "If someone has a medical degree, they are knowledgeable about health."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that doctors possess medical degrees. Statement 2 indicates that the group of people with medical degrees is broader than just practicing doctors. Statement 3 applies to all individuals with a medical degree, whether they are practicing doctors or not. All statements can be true simultaneously."
  },
  {
    "id": "gen-33-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All insects have six legs.",
      "No spider has six legs.",
      "Some spiders are venomous."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that spiders are not insects because they have a different number of legs. Statement 3 simply provides an additional characteristic of some spiders. There is no contradiction, as spiders are clearly defined as a separate category from insects."
  },
  {
    "id": "gen-34-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All seasoned sailors have extensive knowledge of maritime law.",
      "No one with extensive knowledge of maritime law is unaware of the new regulations.",
      "Every member of the crew is a seasoned sailor.",
      "Some members of the crew are unaware of the new regulations."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to a contradiction with Statement 4. If every member of the crew is a seasoned sailor (Statement 3), and all seasoned sailors have extensive knowledge of maritime law (Statement 1), then every member of the crew has extensive knowledge of maritime law. Since no one with extensive knowledge of maritime law is unaware of the new regulations (Statement 2), it follows that every member of the crew is aware of the new regulations. This directly contradicts Statement 4, which claims that some members of the crew are unaware of the new regulations."
  },
  {
    "id": "gen-34-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All eligible voters were registered for the election.",
      "Some registered voters did not cast a ballot.",
      "No one who cast a ballot failed to meet the age requirement.",
      "A few eligible voters did not cast a ballot."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. It is possible for all eligible voters to be registered (Statement 1), and for some registered voters (including some eligible voters from Statement 4) to not cast a ballot (Statements 2 and 4). Statement 3, concerning the age requirement for those who cast a ballot, does not conflict with the other statements, as there is no information about eligible voters failing the age requirement or being forced to cast a ballot."
  },
  {
    "id": "gen-34-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student passes the exam, they receive a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the program passed the exam.",
      "Some students in the program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to a contradiction with Statement 4. If every student in the program passed the exam (Statement 3), and passing the exam means receiving a certificate (Statement 1), then every student in the program received a certificate. However, Statement 2 indicates that no student who missed more than three classes received a certificate. Therefore, if some students in the program missed more than three classes (Statement 4), they would not receive a certificate, which contradicts the conclusion that every student in the program received one."
  },
  {
    "id": "gen-34-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All medical residents complete a rotation in emergency surgery.",
      "No one who completes a rotation in emergency surgery is unfamiliar with trauma protocols.",
      "Every doctor who specializes in pediatrics is a medical resident.",
      "Some doctors specializing in pediatrics are unfamiliar with trauma protocols."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to a contradiction with Statement 4. If every doctor who specializes in pediatrics is a medical resident (Statement 3), and all medical residents complete a rotation in emergency surgery (Statement 1), then every doctor who specializes in pediatrics completes a rotation in emergency surgery. Since no one who completes a rotation in emergency surgery is unfamiliar with trauma protocols (Statement 2), it follows that every doctor who specializes in pediatrics is familiar with trauma protocols. This directly contradicts Statement 4, which claims that some doctors specializing in pediatrics are unfamiliar with trauma protocols."
  },
  {
    "id": "gen-34-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it cannot thrive in arid climates.",
      "All cacti thrive in arid climates.",
      "Some plants that do not require daily watering are cacti.",
      "No plant that thrives in arid climates is a succulent."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 1, if a plant thrives in an arid climate, it does not require daily watering. Combined with Statement 2 (all cacti thrive in arid climates), this implies all cacti do not require daily watering, which is consistent with Statement 3 (some plants that do not require daily watering are cacti). Statement 4 simply states that plants thriving in arid climates are not succulents, which is compatible with cacti thriving in arid climates and not being succulents."
  },
  {
    "id": "gen-34-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the research team completed the ethics training.",
      "No one who completed the ethics training failed the background check.",
      "If an individual did not fail the background check, they are eligible for field experiments.",
      "Some members of the research team are not eligible for field experiments."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to a contradiction with Statement 4. If all members of the research team completed the ethics training (Statement 1), and no one who completed the ethics training failed the background check (Statement 2), then all members of the research team did not fail the background check. Since not failing the background check means being eligible for field experiments (Statement 3), it follows that all members of the research team are eligible for field experiments. This directly contradicts Statement 4, which claims that some members of the research team are not eligible for field experiments."
  },
  {
    "id": "gen-34-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who receive performance bonuses attend the annual review.",
      "No employee who skips the annual review is considered for promotion.",
      "Some employees who attend the annual review do not receive performance bonuses.",
      "Every employee considered for promotion receives a performance bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 4, employees considered for promotion receive performance bonuses. From Statement 1, these employees then attend the annual review. This is consistent with Statement 2, which implies that employees considered for promotion must attend the annual review. Statement 3 simply allows for some employees who attend the annual review to not receive performance bonuses, which is compatible with the other statements."
  },
  {
    "id": "gen-34-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur is a skilled negotiator.",
      "No skilled negotiator lacks strong financial acumen.",
      "Some individuals with strong financial acumen are not successful entrepreneurs.",
      "All mentors in the program are successful entrepreneurs.",
      "Some mentors in the program lack strong financial acumen."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 4 logically lead to a contradiction with Statement 5. If all mentors in the program are successful entrepreneurs (Statement 4), and every successful entrepreneur is a skilled negotiator (Statement 1), then all mentors in the program are skilled negotiators. Since no skilled negotiator lacks strong financial acumen (Statement 2), it follows that all mentors in the program have strong financial acumen. This directly contradicts Statement 5, which claims that some mentors in the program lack strong financial acumen."
  },
  {
    "id": "gen-34-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a painting is ancient, it is never displayed without humidity control.",
      "All artworks from the Ming Dynasty are ancient paintings.",
      "Some displayed artworks have humidity control.",
      "No artwork displayed without humidity control is properly preserved."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 1, ancient paintings are always displayed with humidity control. From Statement 2, artworks from the Ming Dynasty are ancient, so they must also be displayed with humidity control. Statement 3 confirms that some displayed artworks do have humidity control, which is consistent. Statement 4 means that artworks without humidity control are not properly preserved, which does not contradict the existence of artworks (including ancient or Ming Dynasty ones) that are properly preserved and displayed with humidity control."
  },
  {
    "id": "gen-34-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid tickets display a barcode.",
      "No ticket with a barcode is eligible for a refund.",
      "Some tickets purchased online are not valid tickets.",
      "Every ticket eligible for a refund was purchased online.",
      "All tickets eligible for a refund display a barcode."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 2 and 5 logically lead to a contradiction. Statement 5 asserts that all tickets eligible for a refund display a barcode. However, Statement 2 clearly states that no ticket with a barcode is eligible for a refund. Therefore, if a ticket is eligible for a refund (from Statement 5), it must display a barcode, but then it cannot be eligible for a refund (from Statement 2), creating a direct contradiction."
  },
  {
    "id": "gen-35-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a canary, it has yellow feathers.",
      "All birds with yellow feathers sing loudly.",
      "No bird that sings loudly can also fly at high altitudes.",
      "Every canary in this flock can fly at high altitudes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 form a chain: If a bird is a canary, it has yellow feathers, which means it sings loudly, which means it cannot fly at high altitudes. Therefore, every canary cannot fly at high altitudes. Statement 4 directly contradicts this by asserting that every canary can fly at high altitudes."
  },
  {
    "id": "gen-35-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies diligently, they pass the exam.",
      "All students who pass the exam receive a scholarship.",
      "Some students study diligently.",
      "No student who receives a scholarship also works full-time."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true. Some diligent students could exist, pass their exams, receive scholarships, and not work full-time. Other students who don't fit this profile could also exist, and none of the statements create a contradiction."
  },
  {
    "id": "gen-35-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus also attend the annual conference.",
      "If an employee attends the annual conference, they must complete a feedback survey.",
      "No employee who completes a feedback survey has a salary above $100k.",
      "Some employees with a salary above $100k received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: If an employee receives a bonus, they attend the conference, complete a survey, and therefore do not have a salary above $100k. This means no employee who receives a bonus has a salary above $100k. Statement 4 directly contradicts this by claiming some employees with a high salary did receive a bonus."
  },
  {
    "id": "gen-35-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project with a deadline must be approved by the committee.",
      "No project approved by the committee can begin without funding.",
      "Some projects without funding are still in the planning phase.",
      "Not all projects in the planning phase have a deadline."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Projects with deadlines need committee approval and funding. Some projects might lack funding and be in planning, and not all planning projects necessarily have deadlines, thus avoiding the earlier requirements."
  },
  {
    "id": "gen-35-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a sculpture, it must be displayed outdoors.",
      "All artworks displayed outdoors are made of durable materials.",
      "No artwork made of durable materials requires special climate control.",
      "Some artworks in the gallery are sculptures.",
      "Every artwork in the gallery requires special climate control."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: If an artwork is a sculpture, it's displayed outdoors, made of durable materials, and therefore does not require special climate control. Statement 4 tells us some sculptures are in the gallery. Thus, some artworks in the gallery do not require special climate control. This directly contradicts Statement 5, which asserts that every artwork in the gallery requires special climate control."
  },
  {
    "id": "gen-35-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups offer a unique service.",
      "Companies offering a unique service always attract early investors.",
      "Some companies that attract early investors fail to become profitable.",
      "Not all profitable companies are successful startups."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for successful startups to offer unique services and attract investors. It is also possible for some companies attracting investors to not become profitable. Finally, some profitable companies might not be startups, or not successful ones, allowing all statements to hold."
  },
  {
    "id": "gen-35-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is highly rated, it receives many reservations.",
      "Every restaurant that receives many reservations is fully booked on weekends.",
      "No restaurant fully booked on weekends offers same-day seating.",
      "The new bistro is highly rated.",
      "The new bistro offers same-day seating."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: If the new bistro is highly rated, it receives many reservations, is fully booked on weekends, and therefore does not offer same-day seating. Thus, the new bistro does not offer same-day seating. Statement 5 directly contradicts this by stating that the new bistro offers same-day seating."
  },
  {
    "id": "gen-35-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All effective medications have been approved by the FDA.",
      "If a medication is approved by the FDA, it has undergone rigorous testing.",
      "Some medications that have undergone rigorous testing are not yet widely available.",
      "No medication that is not widely available is marketed extensively."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Effective medications are FDA approved and rigorously tested. Some rigorously tested medications might not be widely available (e.g., new drugs) and thus not extensively marketed. No contradictions arise from this scenario."
  },
  {
    "id": "gen-35-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who takes advanced calculus also excels in physics.",
      "No student who excels in physics struggles with problem-solving.",
      "If a student struggles with problem-solving, they cannot be admitted to the honor society.",
      "Some students who are admitted to the honor society struggle with problem-solving."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 implies that if a student is admitted to the honor society, they do not struggle with problem-solving (contrapositive of 'S -> Not A' is 'A -> Not S'). Statement 4 directly contradicts this by asserting that some students who are admitted to the honor society do struggle with problem-solving."
  },
  {
    "id": "gen-35-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful marketing campaigns rely on market research.",
      "If a campaign relies on market research, it must target specific demographics.",
      "Some campaigns that target specific demographics do not achieve high sales.",
      "No campaign that achieves high sales is considered a failure."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are entirely consistent. Successful campaigns can rely on research and target demographics. Some campaigns might target demographics but not achieve high sales, which is fine. Campaigns that do achieve high sales are not failures. No logical conflict is present."
  },
  {
    "id": "gen-36-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are birds of prey.",
      "No bird of prey eats berries.",
      "Some owls eat berries."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no owl eats berries. Statement 3, however, asserts that some owls do eat berries, creating a contradiction."
  },
  {
    "id": "gen-36-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur is a diligent worker.",
      "Some diligent workers are not entrepreneurs.",
      "No diligent worker is ever lazy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all three statements to be true simultaneously. Successful entrepreneurs are a subset of diligent workers, some diligent workers are not entrepreneurs, and all diligent workers can be non-lazy."
  },
  {
    "id": "gen-36-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All candidates who receive a scholarship have excellent grades.",
      "Sarah received a scholarship.",
      "Sarah does not have excellent grades."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that Sarah has excellent grades. This directly contradicts Statement 3, which states that Sarah does not have excellent grades."
  },
  {
    "id": "gen-36-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work full-time receive health benefits.",
      "Some employees who work part-time also receive health benefits.",
      "No employee who works full-time works part-time."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Full-time employees are a group that receives benefits, part-time employees are a separate group, and some of them can also receive benefits without contradiction."
  },
  {
    "id": "gen-36-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful movie is highly entertaining.",
      "Some highly entertaining movies are not successful movies.",
      "All highly entertaining movies are successful movies."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 claims that all highly entertaining movies are successful movies. This directly contradicts Statement 2, which states that some highly entertaining movies are not successful movies."
  },
  {
    "id": "gen-36-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes are extremely disciplined.",
      "Some extremely disciplined people are not professional athletes.",
      "Maria is extremely disciplined.",
      "Maria is not a professional athlete."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true. Maria can be one of the extremely disciplined people who are not professional athletes, which is consistent with all given conditions."
  },
  {
    "id": "gen-36-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every plant in this garden requires direct sunlight.",
      "No plant that requires direct sunlight can tolerate shade.",
      "Some plants in this garden can tolerate shade."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no plant in this garden can tolerate shade. This directly contradicts Statement 3, which claims that some plants in this garden can tolerate shade."
  },
  {
    "id": "gen-36-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds in this aviary are tropical species.",
      "Some tropical species are not birds in this aviary.",
      "No bird in this aviary is flightless.",
      "There are flightless tropical species."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true. The flightless tropical species mentioned in Statement 4 must be among the tropical species that are not in this aviary, which is consistent with Statement 2."
  },
  {
    "id": "gen-36-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies regularly, they will pass the course.",
      "All students who pass the course receive a certificate.",
      "John did not receive a certificate.",
      "John studies regularly."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 together imply that John studied regularly, passed the course, and therefore received a certificate. This directly contradicts Statement 3, which claims John did not receive a certificate."
  },
  {
    "id": "gen-36-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees in Department A are proficient in Spanish.",
      "No employee proficient in Spanish is also proficient in French.",
      "Some employees in Department A are proficient in French."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no employee in Department A is proficient in French. This directly contradicts Statement 3, which states that some employees in Department A are proficient in French."
  },
  {
    "id": "gen-37-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires direct sunlight, it is not a fern.",
      "All plants in this greenhouse are ferns.",
      "Every plant that is a fern thrives in shade.",
      "Some plants in this greenhouse require direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates that some plants in the greenhouse require direct sunlight. According to Statement 1, any plant requiring direct sunlight is not a fern. Therefore, some plants in this greenhouse are not ferns. This directly contradicts Statement 2, which asserts that all plants in this greenhouse are ferns. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-37-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs are innovative.",
      "If a person is innovative, they take calculated risks.",
      "Everyone who takes calculated risks embraces difficult challenges.",
      "Some successful entrepreneurs avoid difficult challenges."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all successful entrepreneurs are innovative. Statement 2 says that all innovative people take calculated risks. Statement 3 indicates that everyone who takes calculated risks embraces difficult challenges. Chaining these together, we deduce that all successful entrepreneurs embrace difficult challenges. This implies that no successful entrepreneur avoids difficult challenges, which directly contradicts Statement 4, which claims that some successful entrepreneurs avoid difficult challenges. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-37-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every applicant with a strong resume receives an interview.",
      "If an applicant receives an interview, they must pass a skills test.",
      "No applicant who passes a skills test is denied admission.",
      "Some applicants with strong resumes are denied admission."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that all applicants with strong resumes receive an interview. Statement 2 says that all applicants who receive an interview must pass a skills test. Statement 3 indicates that no applicant who passes a skills test is denied admission. Chaining these, we conclude that all applicants with strong resumes are not denied admission. This directly contradicts Statement 4, which claims that some applicants with strong resumes are denied admission. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-37-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the marathon receive a medal.",
      "Everyone who receives a medal finishes the race.",
      "Some participants in the marathon do not finish the race."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all marathon participants receive a medal. Statement 2 specifies that everyone who receives a medal finishes the race. Chaining these two, we conclude that all participants in the marathon finish the race. This conclusion directly contradicts Statement 3, which claims that some participants in the marathon do not finish the race. Removing Statement 3 resolves this inconsistency."
  },
  {
    "id": "gen-37-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful job applicants have excellent communication skills.",
      "If a person has excellent communication skills, they excel in team environments.",
      "No person who excels in team environments struggles with public speaking.",
      "Some successful job applicants struggle with public speaking."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 states that all successful job applicants have excellent communication skills. Statement 2 indicates that if a person has excellent communication skills, they excel in team environments. Statement 3 says that no person who excels in team environments struggles with public speaking. Chaining these three statements, we deduce that all successful job applicants do not struggle with public speaking. This directly contradicts Statement 4, which claims that some successful job applicants struggle with public speaking. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-38-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey are herbivores.",
      "Some owls are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that if an animal is an owl, it is a bird of prey, and therefore not a herbivore. This means no owls are herbivores. Statement 3 directly contradicts this conclusion by asserting that some owls are herbivores."
  },
  {
    "id": "gen-38-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "Fido is a dog."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Fido, being a dog, is a mammal. It is also possible for some mammals to exist that are not dogs, for example, cats. There is no logical contradiction among these claims."
  },
  {
    "id": "gen-38-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every member of the jazz band can read sheet music.",
      "No one who can read sheet music prefers improvisation over composition.",
      "Some members of the jazz band prefer improvisation over composition."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that if someone is a member of the jazz band, they can read sheet music, and therefore they do not prefer improvisation over composition. This means no members of the jazz band prefer improvisation over composition. Statement 3 contradicts this by claiming some do."
  },
  {
    "id": "gen-38-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every fruit grown in the orchard is organic.",
      "Some organic produce is sold at the market.",
      "Not all produce sold at the market is fruit grown in the orchard."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Fruits from the orchard are organic. Some organic produce goes to market (which may or may not include the orchard fruit). It is also entirely possible that some market produce isn't from the orchard (it could be non-organic, or organic from another farm)."
  },
  {
    "id": "gen-38-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student passes the final exam, they receive an A grade.",
      "If a student has more than 5 absences, they do not receive an A grade.",
      "Some students who pass the final exam have more than 5 absences."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 describes a group of students who both passed the final exam and had more than 5 absences. According to Statement 1, these students must receive an A grade. However, according to Statement 2, these same students cannot receive an A grade. This is a direct contradiction."
  },
  {
    "id": "gen-38-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All paintings in the gallery are abstract.",
      "Some abstract art is made with oil paints.",
      "No painting in the gallery is made with watercolors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Paintings in the gallery are abstract and not watercolors. It is possible for some abstract art (whether it's in the gallery or not) to be made with oil paints, as this does not conflict with any other statement."
  },
  {
    "id": "gen-38-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every computer in the office uses operating system X.",
      "No device running operating system X has high-security encryption.",
      "Some computers in the office have high-security encryption."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a computer is in the office, it uses operating system X, and therefore it does not have high-security encryption. This means no computers in the office have high-security encryption. Statement 3 directly contradicts this conclusion."
  },
  {
    "id": "gen-38-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur has a strong work ethic.",
      "Some people with a strong work ethic are not successful entrepreneurs.",
      "Lisa has a strong work ethic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Lisa, having a strong work ethic, could either be a successful entrepreneur or not, without contradicting any of the statements. The existence of people with a strong work ethic who are not successful entrepreneurs allows for this flexibility."
  },
  {
    "id": "gen-38-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants in the workshop provided feedback.",
      "No one who provided feedback was unsatisfied.",
      "Some participants in the workshop were unsatisfied."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically lead to the conclusion that if someone was a participant in the workshop, they provided feedback, and therefore they were not unsatisfied. This means no participants in the workshop were unsatisfied. Statement 3 contradicts this by claiming some participants were unsatisfied."
  },
  {
    "id": "gen-38-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book in the library is cataloged.",
      "Some cataloged items are not books.",
      "Not all cataloged items are in the library."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Books in the library are cataloged. Other cataloged items exist that are not books (e.g., magazines or audio recordings). Furthermore, some cataloged items might not be physically located in the library (e.g., digital archives or items belonging to other branches), which creates no conflict."
  },
  {
    "id": "gen-39-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful athlete trains rigorously.",
      "No one who trains rigorously avoids injury.",
      "If an athlete gets injured, they cannot compete in the championship.",
      "Some successful athletes compete in the championship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that every successful athlete trains rigorously. Statement 2 means anyone who trains rigorously gets injured. Statement 3 states that if an athlete gets injured, they cannot compete. Chaining these three (1, 2, 3) leads to the conclusion that all successful athletes cannot compete in the championship. This directly contradicts Statement 4, which claims that some successful athletes *do* compete in the championship."
  },
  {
    "id": "gen-39-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All reliable vehicles are regularly serviced.",
      "Some vehicles that are regularly serviced are not expensive.",
      "Only expensive vehicles have advanced navigation systems.",
      "No vehicle with an advanced navigation system is unreliable."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 4 indicates that vehicles with advanced navigation systems are reliable. Combined with Statement 1, this means all vehicles with advanced navigation systems are regularly serviced. Statement 3 states that such vehicles must be expensive. Statement 2 notes that some regularly serviced vehicles are not expensive. These conditions can all be true simultaneously: some regularly serviced vehicles could be expensive (like those with advanced navigation systems), while others are not."
  },
  {
    "id": "gen-39-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every member of the photography club owns a digital camera.",
      "No one who owns a digital camera prefers film photography.",
      "Some people who prefer film photography are members of the photography club."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all photography club members own digital cameras. Statement 2 indicates that no one who owns a digital camera prefers film photography. Therefore, all photography club members do not prefer film photography. This directly contradicts Statement 3, which asserts that some people who prefer film photography are members of the photography club, implying some members *do* prefer film photography."
  },
  {
    "id": "gen-39-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires direct sunlight, it is not a fern.",
      "All plants that thrive in shade are ferns.",
      "Some plants that thrive in shade are found near rivers.",
      "No plant that is a fern requires direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 4 are logically equivalent, both asserting that ferns do not require direct sunlight. Statement 2 implies that all plants thriving in shade are ferns, and therefore, do not require direct sunlight. Statement 3 merely adds that some of these shade-loving plants are found near rivers, which does not create any conflict with the other conditions."
  },
  {
    "id": "gen-39-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees with management positions attended the leadership workshop.",
      "No one who attended the leadership workshop was eligible for the bonus.",
      "Every employee eligible for the bonus is highly productive.",
      "Some employees eligible for the bonus hold management positions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that all management position holders attended the leadership workshop. Statement 2 states that no one who attended the workshop was eligible for the bonus. Chaining these (1, 2) leads to the conclusion that no employee with a management position was eligible for the bonus. This directly contradicts Statement 4, which claims that some employees eligible for the bonus *do* hold management positions."
  },
  {
    "id": "gen-39-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless a book is recent, it is a paperback.",
      "All hardcovers are recent books.",
      "No paperback is a hardcover.",
      "Some books are not paperbacks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that if a book is not recent, it is a paperback, or equivalently, if a book is not a paperback, it is recent. Statement 2 asserts that all hardcovers are recent. Statement 3 confirms that paperbacks and hardcovers are mutually exclusive categories. Statement 4 indicates that some books are not paperbacks; these non-paperback books could be hardcovers (which Statement 2 says are recent) or other types of recent books, all consistent with the other statements."
  },
  {
    "id": "gen-39-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All highly sought-after artists have a unique style.",
      "No artist with a unique style struggles to find patrons.",
      "If an artist struggles to find patrons, they are not highly influential.",
      "Every highly influential artist is highly sought-after.",
      "Some highly influential artists struggle to find patrons."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 indicates that all highly influential artists are highly sought-after. Statement 1 says all highly sought-after artists have a unique style. Statement 2 implies that artists with a unique style do not struggle to find patrons. Chaining these (4, 1, 2) leads to the conclusion that all highly influential artists do not struggle to find patrons. This directly contradicts Statement 5, which asserts that some highly influential artists *do* struggle to find patrons."
  },
  {
    "id": "gen-39-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All advanced encryption methods are computationally intensive.",
      "No computationally intensive process is suitable for low-power devices.",
      "Some low-power devices run advanced encryption methods.",
      "Every device suitable for low-power operation is battery-friendly."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims that some low-power devices run advanced encryption methods. Statement 1 states that all advanced encryption methods are computationally intensive. Statement 2 indicates that no computationally intensive process is suitable for low-power devices. Chaining these three (3, 1, 2) leads to the conclusion that some low-power devices are not suitable for low-power devices, which is a direct contradiction."
  },
  {
    "id": "gen-39-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed the prerequisite course.",
      "Some successful candidates were interviewed multiple times.",
      "No one who completed the prerequisite course failed the final assessment.",
      "Some candidates who failed the final assessment were interviewed multiple times."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all successful candidates completed the prerequisite course. Statement 3 implies that no one who completed the prerequisite course failed the final assessment. Therefore, all successful candidates did not fail the final assessment. Statement 2 indicates some successful candidates were interviewed multiple times. Statement 4 indicates some candidates who failed the final assessment were interviewed multiple times. These facts are all compatible; the successful candidates are a group distinct from those who failed the final assessment, and both groups can have members interviewed multiple times."
  },
  {
    "id": "gen-39-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every chef who works at \"The Gilded Spoon\" uses locally sourced ingredients.",
      "No one who uses locally sourced ingredients cooks with pre-packaged sauces.",
      "If a chef cooks with pre-packaged sauces, their dishes are not authentic.",
      "All chefs whose dishes are not authentic work at \"The Gilded Spoon.\"",
      "Some chefs who work at \"The Gilded Spoon\" cook with pre-packaged sauces."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 1 establishes that all chefs at 'The Gilded Spoon' use locally sourced ingredients. Statement 2 states that no one who uses locally sourced ingredients cooks with pre-packaged sauces. Chaining these two (1, 2) leads to the conclusion that all chefs at 'The Gilded Spoon' do not cook with pre-packaged sauces. This directly contradicts Statement 5, which claims that some chefs who work at 'The Gilded Spoon' *do* cook with pre-packaged sauces."
  },
  {
    "id": "gen-40-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a machine overheats, it will trigger the alarm.",
      "Any machine that triggers the alarm requires immediate shutdown.",
      "All assembly line machines are prone to overheating.",
      "At least one assembly line machine does not require immediate shutdown."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a machine is an assembly line machine, then it is prone to overheating, which triggers the alarm, which requires immediate shutdown. Therefore, all assembly line machines require immediate shutdown. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-40-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete trains daily, they will improve their endurance.",
      "No athlete who improves their endurance struggles with fatigue.",
      "All members of the track team train daily.",
      "Some members of the track team struggle with fatigue."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: All members of the track team train daily (Statement 3), which means they improve their endurance (Statement 1), which means they do not struggle with fatigue (Statement 2). This implies that no members of the track team struggle with fatigue. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-40-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project with a critical deadline must be approved by the director.",
      "If a project is approved by the director, it requires several rounds of revisions.",
      "No project requiring several rounds of revisions can be completed ahead of schedule.",
      "Some projects with a critical deadline are completed ahead of schedule."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a project has a critical deadline (Statement 1), it must be approved by the director (Statement 2), which means it requires several rounds of revisions (Statement 3), which means it cannot be completed ahead of schedule. Thus, no project with a critical deadline can be completed ahead of schedule. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-40-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car sold at \"Auto-Mart\" comes with an extended warranty.",
      "No car with an extended warranty requires major repairs within the first year.",
      "If a car is a luxury model, it is sold at \"Auto-Mart\".",
      "Some luxury model cars require major repairs within the first year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a car is a luxury model (Statement 3), then it is sold at \"Auto-Mart\" (Statement 1), which means it comes with an extended warranty (Statement 2), which means it does not require major repairs within the first year. Thus, no luxury model car requires major repairs within the first year. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-40-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant offers a vegan menu, it must source local ingredients.",
      "No restaurant that sources local ingredients uses imported spices.",
      "Every restaurant on Elm Street offers a vegan menu.",
      "At least one restaurant on Elm Street uses imported spices."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Every restaurant on Elm Street (Statement 3) offers a vegan menu (Statement 1), which means it sources local ingredients (Statement 2), which means it does not use imported spices. Thus, no restaurant on Elm Street uses imported spices. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-41-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the astronomy club own a telescope.",
      "No one who owns a telescope has ever seen a UFO.",
      "Some people who have seen a UFO are members of the astronomy club."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no member of the astronomy club has ever seen a UFO. This directly contradicts Statement 3, which asserts that some people who have seen a UFO are members of the astronomy club. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-41-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every research paper published must undergo peer review.",
      "If a paper undergoes peer review, it is eventually revised.",
      "No revised paper contains uncorrected errors.",
      "Some research papers published contain uncorrected errors."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically establish that every research paper published contains no uncorrected errors. This directly contradicts Statement 4, which claims that some published research papers do contain uncorrected errors. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-41-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful candidates for the position have advanced programming skills.",
      "No one with advanced programming skills struggles with data structures.",
      "Every person who struggles with data structures lacks a strong logic foundation.",
      "Some successful candidates possess a strong logic foundation but struggle with data structures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that all successful candidates do not struggle with data structures. This directly contradicts the claim in Statement 4 that some successful candidates do struggle with data structures. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-41-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All chefs at \"The Golden Spoon\" restaurant completed culinary school.",
      "No one who completed culinary school lacks basic knife skills.",
      "Every chef at \"The Golden Spoon\" restaurant lacks basic knife skills."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all chefs at \"The Golden Spoon\" restaurant possess basic knife skills. This directly contradicts Statement 3, which asserts that every chef at \"The Golden Spoon\" restaurant lacks basic knife skills. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-41-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All planets in our solar system orbit the Sun.",
      "No celestial body that orbits the Sun is a moon.",
      "Triton is a moon.",
      "Triton is a planet in our solar system."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no planet in our solar system is a moon. Statement 4 identifies Triton as a planet in our solar system, which would mean Triton is not a moon. This directly contradicts Statement 3, which asserts Triton is a moon. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-42-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified candidates received an interview.",
      "Every candidate interviewed was offered a second-round assessment.",
      "No candidate who completed a second-round assessment was ultimately rejected.",
      "Some candidates were qualified but were ultimately rejected."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 chain together to establish that all qualified candidates were not ultimately rejected. Statement 4 directly contradicts this by asserting that some qualified candidates were ultimately rejected."
  },
  {
    "id": "gen-42-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses saffron, it is considered gourmet.",
      "All gourmet recipes require specialized ingredients.",
      "Some recipes that require specialized ingredients are not gourmet.",
      "This specific recipe uses saffron."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if a recipe uses saffron, then it is gourmet, and therefore it requires specialized ingredients. Statement 4 indicates this specific recipe uses saffron, thus it is gourmet and requires specialized ingredients. Statement 3 describes a general possibility that does not contradict the specific instance of this recipe."
  },
  {
    "id": "gen-42-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles in the motor pool are regularly inspected.",
      "No vehicle that is regularly inspected ever breaks down unexpectedly.",
      "Every vehicle that breaks down unexpectedly causes significant delays.",
      "Some vehicles in the motor pool caused significant delays last month."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all vehicles in the motor pool do not break down unexpectedly. Statement 3 indicates that if a vehicle caused significant delays, it must have broken down unexpectedly. Therefore, Statement 4 implies that some vehicles in the motor pool broke down unexpectedly, which contradicts the conclusion from Statements 1 and 2."
  },
  {
    "id": "gen-42-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a person is a professional musician, they regularly practice their instrument.",
      "All people who regularly practice their instrument enjoy performing live.",
      "No amateur musician enjoys performing live.",
      "Some people who regularly practice their instrument are amateur musicians."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 establish that if someone regularly practices their instrument, they enjoy performing live, but no amateur musician enjoys performing live. This means no one who regularly practices their instrument can be an amateur musician. Statement 4 directly contradicts this by stating some people who regularly practice their instrument are amateur musicians."
  },
  {
    "id": "gen-42-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All trees in this forest are deciduous.",
      "If a tree is deciduous, it sheds its leaves in autumn.",
      "Some trees that shed their leaves in autumn are not in this forest.",
      "No tree in this forest keeps its leaves year-round."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 chain to show that all trees in this forest shed their leaves in autumn. Statement 3 merely notes that not all trees that shed leaves are from this particular forest, which is perfectly consistent. Statement 4 is also consistent, as trees that shed leaves in autumn would naturally not keep them year-round."
  },
  {
    "id": "gen-42-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work in the finance department have access to sensitive data.",
      "If an employee has access to sensitive data, they must undergo quarterly audits.",
      "No employee who undergoes quarterly audits has ever been accused of a breach.",
      "Some employees in the finance department have been accused of a breach."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: employees in the finance department have access to sensitive data, undergo quarterly audits, and thus have never been accused of a breach. Statement 4 directly contradicts this conclusion by asserting that some employees in the finance department have been accused of a breach."
  },
  {
    "id": "gen-42-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant serves vegan options, it attracts a diverse clientele.",
      "All restaurants that attract a diverse clientele offer flexible dining hours.",
      "Some restaurants that offer flexible dining hours do not serve vegan options.",
      "This specific restaurant does not offer flexible dining hours."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that if a restaurant serves vegan options, it must offer flexible dining hours. The contrapositive implies that if a restaurant does not offer flexible dining hours, it does not serve vegan options. Statement 4 states this restaurant does not offer flexible dining hours, which consistently leads to the conclusion that it does not serve vegan options. Statement 3 describes a general possibility that does not contradict the specific instance of this restaurant."
  },
  {
    "id": "gen-42-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who enrolled in the advanced seminar must complete a research project.",
      "No student who completed a research project submitted it late.",
      "All students who submitted their research project on time received an early bird bonus.",
      "Some students enrolled in the advanced seminar did not receive an early bird bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: any student enrolled in the advanced seminar completed a research project, submitted it on time, and therefore received an early bird bonus. Statement 4 directly contradicts this by stating that some students enrolled in the advanced seminar did not receive an early bird bonus."
  },
  {
    "id": "gen-42-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by conservation laws.",
      "All species protected by conservation laws have designated habitats.",
      "Some species with designated habitats are not endangered.",
      "This specific species has a designated habitat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all endangered species have designated habitats. Statement 3 is consistent with this, as not all species with designated habitats need to be endangered. Statement 4 introduces a specific species with a designated habitat, which could either be endangered or not, without contradicting any of the preceding statements."
  },
  {
    "id": "gen-42-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a new software release fixes bugs, it improves user experience.",
      "Every software release that improves user experience boosts customer satisfaction.",
      "No software release that boosts customer satisfaction causes system instability.",
      "This specific new software release fixes bugs, but it causes system instability."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a new software release fixes bugs, it improves user experience, boosts customer satisfaction, and thus does not cause system instability. Statement 4 states that this specific software release fixes bugs, which implies it should not cause system instability. However, Statement 4 also asserts that it *does* cause system instability, creating a direct contradiction."
  },
  {
    "id": "gen-43-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey are purely herbivorous.",
      "Some owls are purely herbivorous."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no owls are purely herbivorous. Statement 1 states that all owls are birds of prey, and Statement 2 states that no birds of prey are purely herbivorous. This means that owls cannot be purely herbivorous. Statement 3, however, asserts that some owls are purely herbivorous, which directly contradicts this conclusion."
  },
  {
    "id": "gen-43-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "No cats are dogs.",
      "Some cats have short fur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No logical inconsistency arises from these statements. Dogs are mammals, and some mammals (like cats) are not dogs. Cats are separate from dogs and some have short fur. This is a simple scenario that is entirely possible."
  },
  {
    "id": "gen-43-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a fox, it is a carnivore.",
      "If an animal is a deer, it is an herbivore.",
      "All carnivores are predators.",
      "No herbivores are predators.",
      "Some foxes are deer."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 3 together imply that if an animal is a fox, it is a predator. Statements 2 and 4 together imply that if an animal is a deer, it is not a predator. Since a predator cannot simultaneously be a non-predator, these chains mean that no fox can be a deer. Statement 5, which claims that some foxes are deer, directly contradicts this derived conclusion."
  },
  {
    "id": "gen-43-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "Some roses are not red.",
      "All plants with thorns are protected from some herbivores.",
      "No red plants are protected from any herbivores."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. A rose can have thorns and be protected (from Statement 1 and Statement 3). Some roses are not red (Statement 2). If a rose is not red, then Statement 4 (No red plants are protected) does not apply to it, so it can still be protected. There is no contradiction."
  },
  {
    "id": "gen-43-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruit bats are mammals.",
      "All mammals have fur.",
      "No creatures with fur are amphibians.",
      "Some fruit bats are amphibians."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together establish that all fruit bats have fur. This conclusion, combined with Statement 3 (no creatures with fur are amphibians), logically leads to the conclusion that no fruit bats are amphibians. Statement 4, however, claims that some fruit bats are amphibians, which directly contradicts this logical deduction."
  },
  {
    "id": "gen-43-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a vehicle is a car, it has an engine.",
      "Some vehicles with engines are motorcycles.",
      "No motorcycles are cars."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. Cars have engines (Statement 1). Motorcycles also have engines, as some vehicles with engines are motorcycles (Statement 2). However, motorcycles are distinct from cars (Statement 3), which is perfectly possible as both can have engines without being the same type of vehicle."
  },
  {
    "id": "gen-43-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are students.",
      "Some members of the chess club do not have a permission slip.",
      "Every student attending the regional tournament has a permission slip.",
      "At least one member of the chess club is attending the regional tournament."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 4 indicates that there is at least one individual who is both a member of the chess club and attending the regional tournament. Statement 3 requires that anyone attending the regional tournament must have a permission slip. Therefore, this individual must have a permission slip. This implies that some members of the chess club have a permission slip, which directly contradicts Statement 2, claiming that some members of the chess club do not have a permission slip."
  },
  {
    "id": "gen-43-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds can breathe underwater.",
      "All fish can breathe underwater.",
      "Some animals that breathe underwater live on land.",
      "Not all animals that live on land are birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Birds cannot breathe underwater (Statement 1), while fish can (Statement 2). Some creatures that breathe underwater might also live on land (e.g., amphibians), which is compatible with Statements 1 and 2. Not all animals on land are birds (Statement 4) is a general truth and creates no conflict."
  },
  {
    "id": "gen-43-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All mammals are warm-blooded.",
      "No reptiles are warm-blooded.",
      "Some creatures that lay eggs are reptiles.",
      "All creatures that lay eggs are mammals."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that no reptiles are mammals, because mammals are warm-blooded and reptiles are not. Statements 3 and 4 together imply that some creatures that lay eggs are both reptiles and mammals, which means some reptiles are mammals. This creates a direct contradiction with the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-43-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All scientists are university graduates.",
      "Some research assistants are not university graduates.",
      "All lab interns are research assistants.",
      "Some university graduates are not scientists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. Scientists are university graduates (Statement 1). Some research assistants are not university graduates (Statement 2), meaning they cannot be scientists. Lab interns are a subset of research assistants (Statement 3), so some lab interns may or may not be university graduates, and thus may or may not be scientists. Some university graduates are not scientists (Statement 4) is also compatible. No direct contradiction arises."
  },
  {
    "id": "gen-44-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club are experienced navigators.",
      "No experienced navigator gets lost on the main trail.",
      "Every person who joins a guided tour gets lost on the main trail.",
      "At least one member of the hiking club joins a guided tour."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all hiking club members are experienced navigators. From Statement 2, no experienced navigator gets lost on the main trail. Therefore, all hiking club members do not get lost on the main trail. However, Statement 3 says that every person who joins a guided tour gets lost on the main trail. Statement 4 asserts that at least one member of the hiking club joins a guided tour, meaning this person both does not get lost on the main trail (from 1 & 2) and does get lost on the main trail (from 3), which is a contradiction. Removing Statement 4 makes the set consistent by allowing the hiking club and guided tour groups to be entirely separate."
  },
  {
    "id": "gen-44-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified applicants have a university degree.",
      "Some university graduates are not qualified applicants.",
      "Maria has a university degree but is not a qualified applicant.",
      "If someone has a university degree, they are eligible for the position."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria having a university degree but not being a qualified applicant is an instance of Statement 2. She can still be eligible for the position according to Statement 4, as eligibility for the position is not restricted to qualified applicants."
  },
  {
    "id": "gen-44-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare books are stored in the secure vault.",
      "No item stored in the secure vault can be loaned out.",
      "Some books in the university library are rare books.",
      "Every book in the university library can be loaned out."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, all rare books are stored in the secure vault. From Statement 2, no item in the secure vault can be loaned out. Therefore, no rare book can be loaned out. Statement 4 states that every book in the university library can be loaned out. Statement 3 claims that some books in the university library are rare books. This implies that these particular books both can be loaned out (from 4) and cannot be loaned out (from 1 & 2), which is a contradiction. Removing Statement 3 resolves the inconsistency by breaking the link between rare books and the university library."
  },
  {
    "id": "gen-44-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend the weekly video call.",
      "No employee who attends the weekly video call is exempt from the daily progress report.",
      "Every employee who is exempt from the daily progress report works remotely.",
      "Some employees are exempt from the daily progress report."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all remote workers attend the weekly video call. From Statement 2, no one who attends the video call is exempt from the daily progress report. Therefore, remote workers are not exempt from the daily progress report. However, Statement 3 says that every employee who is exempt from the daily progress report works remotely. So, if an employee is exempt from the daily progress report, they must work remotely (from 3) and thus not be exempt from the daily progress report (from 1 & 2). Statement 4 asserts that some employees are exempt from the daily progress report, which triggers this contradiction. Removing Statement 4 makes the set consistent, as no such employee would exist to create the conflict."
  },
  {
    "id": "gen-44-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful.",
      "Every business that fails to prioritize customer satisfaction struggles to retain clients.",
      "No struggling business is a successful business."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. For example, a successful business would prioritize customer satisfaction and not struggle (from Statements 1 and 4). A business that prioritizes customer satisfaction but is not successful (from Statement 2) does not contradict any other statement. A business that fails to prioritize customer satisfaction would struggle (from Statement 3), and this is consistent with not being a successful business (from Statement 4)."
  },
  {
    "id": "gen-44-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a candidate is qualified, they are invited for an interview.",
      "No candidate invited for an interview fails the background check.",
      "Every candidate who passes the initial screening is qualified.",
      "Some candidates who pass the initial screening fail the background check."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, every candidate who passes the initial screening is qualified. From Statement 1, all qualified candidates are invited for an interview. From Statement 2, no candidate invited for an interview fails the background check. Therefore, any candidate who passes the initial screening does not fail the background check. Statement 4, however, states that some candidates who pass the initial screening fail the background check, which is a direct contradiction. Removing Statement 4 resolves the inconsistency by removing the claim of existence for such candidates."
  },
  {
    "id": "gen-44-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare paintings are kept in climate-controlled environments.",
      "Some works of art in climate-controlled environments are not rare paintings.",
      "No painting in the curator's private collection is a rare painting.",
      "Every painting in the curator's private collection is a work of art."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. For instance, a painting in the curator's private collection is a work of art (from 4) and not rare (from 3). This non-rare painting could be in a climate-controlled environment, consistent with Statement 2, or it could not be, consistent with Statement 1 (since it's not rare)."
  },
  {
    "id": "gen-44-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "No vegetarian prepares dishes containing meat.",
      "Anyone who prepares the main course at the banquet serves dishes containing meat.",
      "All chefs working in the five-star restaurant are vegetarians.",
      "Some chefs working in the five-star restaurant prepare the main course at the banquet."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, all chefs in the five-star restaurant are vegetarians. From Statement 1, no vegetarian prepares dishes containing meat. Thus, no chef in the five-star restaurant prepares dishes containing meat. Statement 2, however, claims that anyone who prepares the main course at the banquet serves dishes containing meat. Statement 4 asserts that some chefs working in the five-star restaurant prepare the main course at the banquet. This means these chefs both do not prepare dishes containing meat (from 3 & 1) and do prepare dishes containing meat (from 2), which is a contradiction. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-44-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a species is carnivorous, it has sharp teeth.",
      "Every species with sharp teeth is a predator.",
      "Some predators are not carnivorous.",
      "No species that is not carnivorous has sharp teeth."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statements 1 and 4 together imply that a species is carnivorous if and only if it has sharp teeth. From Statement 2, any species with sharp teeth is a predator. This means all carnivorous species are predators. Statement 3 (some predators are not carnivorous) is consistent because not all predators must be carnivorous; there can be predators that do not have sharp teeth and are not carnivorous."
  },
  {
    "id": "gen-44-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents approved for a parking permit have a valid driver's license.",
      "No resident with a valid driver's license lives outside the city limits.",
      "Every resident who lives outside the city limits is approved for a parking permit.",
      "At least one resident lives outside the city limits."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, every resident who lives outside the city limits is approved for a parking permit. From Statement 1, all residents approved for a parking permit have a valid driver's license. From Statement 2, no resident with a valid driver's license lives outside the city limits. Therefore, any resident who lives outside the city limits (from 3, 1, and 2) must not live outside the city limits. Statement 4 states that at least one resident lives outside the city limits, triggering this contradiction. Removing Statement 4 makes the set consistent by allowing the conditional statements to be true without actualizing the impossible scenario."
  },
  {
    "id": "gen-45-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a canary, it sings beautifully.",
      "All birds that sing beautifully are kept as pets.",
      "No bird kept as a pet lives in the wild.",
      "Some canaries live in the wild."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that canaries sing beautifully. Statement 2 says that birds that sing beautifully are kept as pets. Statement 3 says that no pet lives in the wild. This chain implies that if a bird is a canary, it does not live in the wild. Statement 4 directly contradicts this by claiming some canaries do live in the wild."
  },
  {
    "id": "gen-45-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every manager must attend the quarterly meeting.",
      "No one who attends the quarterly meeting is a new hire.",
      "If an employee is not a decision-maker, they are a new hire.",
      "Some managers are not decision-makers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, managers attend the meeting. From Statement 2, those who attend the meeting are not new hires. So, managers are not new hires. Statement 3 implies that if someone is not a new hire, they are a decision-maker. Therefore, all managers are decision-makers. Statement 4 contradicts this by asserting that some managers are not decision-makers."
  },
  {
    "id": "gen-45-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artist is famous, their work is always original.",
      "Only artists whose work is original achieve widespread recognition.",
      "No artist can be both famous and not achieve widespread recognition.",
      "Some artists whose work is not original are famous."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 means that if an artist is famous, they achieve widespread recognition. Statement 2 means that artists who achieve widespread recognition have original work. Therefore, if an artist is famous, their work is original. Statement 4 directly contradicts this by stating that some famous artists have work that is not original."
  },
  {
    "id": "gen-45-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for the advanced seminar, they have completed the prerequisite course.",
      "All students who complete the prerequisite course score highly on the entrance exam.",
      "No student who scored highly on the entrance exam is ever new to the university.",
      "Some students who are new to the university are eligible for the advanced seminar."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, eligibility for the seminar implies completing the prerequisite. From Statement 2, completing the prerequisite implies scoring highly on the exam. From Statement 3, scoring highly on the exam implies not being new to the university. So, eligibility for the seminar implies not being new to the university. Statement 4 contradicts this by presenting students who are both eligible for the seminar and new to the university."
  },
  {
    "id": "gen-45-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All project leads have at least five years of experience.",
      "If a person has at least five years of experience, they possess the Senior Certification.",
      "No one possessing the Senior Certification works on the Alpha project.",
      "There is at least one project lead working on the Alpha project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all project leads have experience. Statement 2 says experience means Senior Certification. Statement 3 says Senior Certification means not working on the Alpha project. Thus, all project leads do not work on the Alpha project. Statement 4 directly contradicts this by stating that some project leads do work on the Alpha project."
  },
  {
    "id": "gen-45-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All books in the public library are available for loan.",
      "Some books available for loan are not physical copies.",
      "If a book is a digital edition, it is never a physical copy.",
      "No book in the public library is a digital edition."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. While some books available for loan are not physical copies (Statement 2), these could be digital editions from a source other than the public library, which according to Statement 4 contains no digital editions. There is no contradiction between library books being physical and other loanable books being non-physical."
  },
  {
    "id": "gen-45-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in advanced physics attend the weekly lectures.",
      "No one who attends the weekly lectures ever skips a lab session.",
      "Some students who skip a lab session are not enrolled in advanced physics.",
      "Maria is a student who attends the weekly lectures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, students in advanced physics do not skip lab sessions. Statement 3 states that some students who skip labs are not in advanced physics, which is consistent. Maria (Statement 4) attending lectures means she doesn't skip labs, which aligns with the derived rule, and she may or may not be in advanced physics."
  },
  {
    "id": "gen-45-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every doctor who publishes research attends professional conferences.",
      "If a doctor attends professional conferences, they are well-respected in their field.",
      "Some doctors are well-respected in their field but do not publish research.",
      "Dr. Evans publishes research."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, doctors who publish research are well-respected. Statement 3 allows for doctors to be well-respected without publishing research, meaning publishing research is sufficient but not necessary for respect. Dr. Evans (Statement 4) would be well-respected and attend conferences, which fits all conditions."
  },
  {
    "id": "gen-45-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees eligible for promotion have completed the mandatory training.",
      "If an employee completes the mandatory training, they receive a certificate of achievement.",
      "Some employees who receive a certificate of achievement are not eligible for promotion.",
      "No employee eligible for promotion failed the training assessment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Employees eligible for promotion complete training and receive a certificate (Statements 1 and 2). Statement 3 indicates that a certificate is not a guarantee of promotion, which is perfectly logical as other eligibility criteria may exist. Statement 4 simply adds another consistent condition for promotion eligibility, reinforcing the prerequisites."
  },
  {
    "id": "gen-45-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If software receives critical updates, its security protocols are current.",
      "Software with current security protocols is never vulnerable to common exploits.",
      "Some software not vulnerable to common exploits does not receive critical updates.",
      "All new software releases must receive critical updates within the first month."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, software with critical updates is not vulnerable to common exploits. Statement 3 allows for software to be not vulnerable for other reasons or via other means, not necessarily requiring critical updates, which is consistent. Statement 4 provides a rule about new software that doesn't contradict anything. No logical inconsistency arises."
  },
  {
    "id": "gen-46-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls hunt at night.",
      "No animal that hunts at night is a mammal.",
      "Some owls are mammals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls hunt at night. Statement 2 says no animal that hunts at night is a mammal. This logically implies that no owls are mammals. Statement 3 directly contradicts this conclusion by stating that some owls are mammals."
  },
  {
    "id": "gen-46-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees with a security clearance must pass a background check.",
      "Some new hires have a security clearance.",
      "Some new hires have not passed a background check."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that anyone with a security clearance passed a background check. Statement 2 tells us some new hires have security clearance, meaning they passed the check. Statement 3 simply means a different group of new hires, who do not have security clearance, have not passed the background check, which is consistent with all statements."
  },
  {
    "id": "gen-46-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed the final interview.",
      "Everyone who completed the final interview received a job offer.",
      "Some successful candidates did not receive a job offer."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all successful candidates completed the final interview. Statement 2 says everyone who completed the final interview received a job offer. Therefore, it must be true that all successful candidates received a job offer. Statement 3 contradicts this by claiming some successful candidates did not receive a job offer."
  },
  {
    "id": "gen-46-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No birds are mammals.",
      "All bats are mammals.",
      "Some flying animals are birds.",
      "Some flying animals are bats."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that no birds are bats. Statements 3 and 4 indicate that there are flying animals that are birds and flying animals that are bats. Since birds and bats are distinct categories, these statements are entirely consistent with each other."
  },
  {
    "id": "gen-46-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it must be kept indoors.",
      "No plant kept indoors is a succulent.",
      "All plants that require daily watering are succulents."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says plants requiring daily watering must be kept indoors. Statement 2 says no plant kept indoors is a succulent. These two statements together imply that no plant requiring daily watering is a succulent. Statement 3 directly contradicts this conclusion by stating that all plants requiring daily watering are succulents."
  },
  {
    "id": "gen-46-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All tigers are predators.",
      "Some predators are not big cats.",
      "Some tigers are big cats."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all tigers are predators. Statement 3 says some tigers are big cats, which implies some predators are big cats. Statement 2 says some predators are not big cats. These are not contradictory; there can be predators that are big cats (like tigers) and predators that are not big cats (like wolves)."
  },
  {
    "id": "gen-46-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members attended the annual meeting.",
      "Some new hires are committee members.",
      "No one who attended the annual meeting received a bonus.",
      "All new hires received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all committee members attended the annual meeting. Statement 2 says some new hires are committee members, so some new hires attended the annual meeting. Statement 3 states that no one who attended the annual meeting received a bonus. This means those specific new hires (who are committee members) did not receive a bonus. Statement 4, however, claims all new hires received a bonus, creating a contradiction."
  },
  {
    "id": "gen-46-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "Some students studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that diligent study is a prerequisite for passing. Statement 2 shows that diligent study alone isn't always enough to pass, which is a common and consistent scenario. Statement 3 merely asserts the existence of diligent students, which is consistent with the other two statements."
  },
  {
    "id": "gen-46-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All endangered species require special protection.",
      "All species requiring special protection are monitored by the agency.",
      "No insects are monitored by the agency.",
      "Some endangered species are insects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all endangered species require special protection. Statement 2 says all species requiring special protection are monitored by the agency. This means all endangered species are monitored by the agency. Statement 3 says no insects are monitored by the agency. Therefore, it must be true that no endangered species are insects. Statement 4 directly contradicts this by stating some endangered species are insects."
  },
  {
    "id": "gen-46-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in the advanced course, they must complete the prerequisite.",
      "If a student skips the introductory course, they must complete the prerequisite.",
      "Some students who enroll in the advanced course did not skip the introductory course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that completing the prerequisite is necessary for both advanced enrollment and skipping the introductory course. Statement 3 simply means some students who take the advanced course might have taken the introductory course instead of skipping it. This information presents no contradiction with the other statements."
  },
  {
    "id": "gen-47-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a player scores more than 10 points, they receive a bonus prize.",
      "Every player who receives a bonus prize qualifies for the final round.",
      "No player who committed a foul qualifies for the final round.",
      "Some players who score more than 10 points committed a foul."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that any player who scores more than 10 points qualifies for the final round. Statement 3 indicates that no player who committed a foul qualifies for the final round. Statement 4 asserts that some players who score more than 10 points also committed a foul. For these players, they must qualify for the final round (from 1 & 2) and also not qualify for the final round (from 3), which is a contradiction. Removing Statement 4 resolves this."
  },
  {
    "id": "gen-47-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with a security clearance have completed ethics training.",
      "No employee who has completed ethics training is eligible for the promotion.",
      "Some employees without a security clearance are eligible for the promotion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all employees with a security clearance are not eligible for the promotion. Statement 3 says that some employees without a security clearance are eligible for the promotion. These statements are consistent, as it is possible for employees without a security clearance to be eligible, while those with a security clearance are not."
  },
  {
    "id": "gen-47-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All interns attend the weekly seminar.",
      "No one who attends the weekly seminar misses the project deadline.",
      "Every intern who did not miss the project deadline received an excellent performance review.",
      "Some interns did not receive an excellent performance review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all interns did not miss the project deadline (I → WS → not MPD). Statement 3 states that every intern who did not miss the project deadline received an excellent performance review. Combining these, it follows that all interns received an excellent performance review (I → not MPD → EPR). Statement 4, however, claims that some interns did not receive an excellent performance review, which directly contradicts the conclusion that all interns did. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-47-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced course, they must have passed the prerequisite.",
      "No student who passed the prerequisite failed the diagnostic test.",
      "All students who enroll in the advanced course take the diagnostic test.",
      "Some students who took the diagnostic test did not fail it."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that if a student enrolls in the advanced course, they did not fail the diagnostic test (AC → PP → not DTF). Statement 3 adds that students in the advanced course take the diagnostic test. Statement 4 indicates that some students who took the diagnostic test did not fail it. These conditions are consistent, as students in the advanced course would fall into the group described in Statement 4, and there could be other students who took the test and did not fail it without being in the advanced course."
  },
  {
    "id": "gen-47-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All new hires attended the orientation session.",
      "No one who attended the orientation session completed the onboarding paperwork late.",
      "If a new hire completed the onboarding paperwork on time, they received the early bonus.",
      "Some new hires did not receive the early bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all new hires completed their onboarding paperwork on time (NH → OS → not LP). Statement 3 states that if a new hire completed the onboarding paperwork on time, they received the early bonus. Combining these, it follows that all new hires received the early bonus (NH → not LP → EB). Statement 4, however, claims that some new hires did not receive the early bonus, which directly contradicts the conclusion that all new hires did. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-47-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All clients who request a premium package are assigned a dedicated account manager.",
      "No client assigned a dedicated account manager complains about service quality.",
      "If a client complains about service quality, their feedback is recorded.",
      "Some clients who do not request a premium package do not complain about service quality."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that any client who requests a premium package does not complain about service quality (PP → DAM → not CSQ). Statement 3 states that if a client complains about service quality, their feedback is recorded. Statement 4 indicates that some clients who do not request a premium package also do not complain about service quality. This set of statements is consistent; for example, clients requesting a premium package do not complain, and some other clients also do not complain, which creates no logical conflict."
  },
  {
    "id": "gen-47-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of Elm Street participate in the neighborhood watch.",
      "No one who participates in the neighborhood watch owns a car built before 2000.",
      "Every resident who owns a car built after 2000 has a garage.",
      "If a resident has a garage, they do not live on Elm Street.",
      "Some residents of Elm Street own a car built after 2000."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: Residents of Elm Street (ES) → participate in neighborhood watch (NW) → do not own a car built before 2000 (not OldCar) → have a garage (Garage) → do not live on Elm Street (not ES). This chain concludes that if a resident lives on Elm Street, they do not live on Elm Street (ES → not ES). Statement 5 explicitly states that some residents of Elm Street exist (Some ES are not OldCar), creating a direct contradiction. Removing Statement 5 resolves this, as it would mean no such contradictory residents exist."
  },
  {
    "id": "gen-47-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All attendees of the summit received a conference badge.",
      "No one who received a conference badge was denied access to the keynote speech.",
      "If an attendee was denied access to the keynote speech, they did not register online.",
      "Every attendee who registered online received a welcome kit.",
      "Some attendees of the summit did not receive a welcome kit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all attendees of the summit were not denied access to the keynote speech (AS → CB → not DAK). Statement 3 states that if an attendee was denied access to the keynote speech, they did not register online (DAK → not RO). Statement 4 shows that all attendees who registered online received a welcome kit (RO → WK). Statement 5 indicates that some attendees of the summit did not receive a welcome kit. This set is consistent. For instance, some summit attendees might not have registered online, and therefore, would not have received a welcome kit, without contradicting any other statement."
  },
  {
    "id": "gen-47-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by conservation laws.",
      "All species protected by conservation laws require careful habitat management.",
      "Some species that require careful habitat management are not endangered.",
      "No species that is protected by conservation laws is considered invasive."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all endangered species require careful habitat management (E → PCL → CHM). Statement 3 states that some species requiring careful habitat management are not endangered, which is consistent with the previous implication (i.e., there can be non-endangered species that still need careful habitat management). Statement 4 adds that protected species are not invasive. All statements are logically consistent with each other."
  },
  {
    "id": "gen-47-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful business venture secures sufficient funding.",
      "No venture that secures sufficient funding struggles with initial overhead costs.",
      "If a business struggles with initial overhead costs, it does not achieve profitability in its first year.",
      "All businesses that do not achieve profitability in their first year eventually fail.",
      "Some successful business ventures eventually fail."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 2 combine to imply that successful business ventures do not struggle with initial overhead costs (SBV → SF → not IHC). Statements 3 and 4 combine to imply that if a business struggles with initial overhead costs, it eventually fails (IHC → not P1Y → F). Together, these chains imply that successful business ventures do not struggle with initial overhead costs, and therefore do not eventually fail (SBV → not IHC → not F). Statement 5, however, claims that some successful business ventures eventually fail, directly contradicting this conclusion. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-48-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All registered voters received a ballot.",
      "No one who received a ballot was under eighteen.",
      "Some registered voters are under eighteen."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no registered voter was under eighteen (All registered voters received a ballot, and no one who received a ballot was under eighteen). This directly contradicts Statement 3, which claims some registered voters are under eighteen."
  },
  {
    "id": "gen-48-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the hiking club own waterproof boots.",
      "No one who owns waterproof boots has complained about wet feet.",
      "Some members of the hiking club have complained about wet feet."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no member of the hiking club has complained about wet feet (All members own waterproof boots, and no one who owns waterproof boots has complained about wet feet). This directly contradicts Statement 3, which asserts that some members of the hiking club have complained about wet feet."
  },
  {
    "id": "gen-48-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every dog at the kennel has been vaccinated.",
      "No animal that has been vaccinated has shown symptoms of the illness.",
      "Some dogs at the kennel have shown symptoms of the illness."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together lead to the conclusion that no dog at the kennel has shown symptoms of the illness (Every dog is vaccinated, and no vaccinated animal has shown symptoms). This contradicts Statement 3, which states that some dogs at the kennel have shown symptoms of the illness."
  },
  {
    "id": "gen-48-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the advanced exam received a certificate.",
      "No student who received a certificate missed more than three classes.",
      "Some students in the advanced program missed more than three classes.",
      "Every student in the advanced program passed the advanced exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a chain: Every student in the advanced program passed the advanced exam (4) → received a certificate (1) → did not miss more than three classes (2). This implies that no student in the advanced program missed more than three classes. Statement 3, however, claims that some students in the advanced program missed more than three classes, creating a contradiction."
  },
  {
    "id": "gen-48-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All customers who ordered a main course also ordered a dessert.",
      "No one who ordered a dessert left without paying the bill.",
      "Some customers who left without paying the bill ordered a main course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combine to show that no customer who ordered a main course left without paying the bill (All main course customers ordered dessert, and no dessert orderer left without paying). This directly contradicts Statement 3, which claims some customers who left without paying the bill ordered a main course."
  },
  {
    "id": "gen-49-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students in the advanced seminar write a research paper.",
      "No one who writes a research paper can skip the final presentation.",
      "Every student who passes the course receives a certificate.",
      "Some students in the advanced seminar pass the course but skip the final presentation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says 'All students in the advanced seminar write a research paper.' Statement 2 says 'No one who writes a research paper can skip the final presentation.' Together, these imply that all students in the advanced seminar cannot skip the final presentation. Statement 4 directly contradicts this by stating that some students in the advanced seminar do skip the final presentation. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-49-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed the prerequisite modules.",
      "Some individuals who completed the prerequisite modules did not pass the final interview.",
      "No one who failed the final interview was ultimately hired.",
      "Alice was ultimately hired."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. While Statement 2 indicates some module completers failed the interview, Alice could be a successful candidate who completed modules, passed the interview, and was hired. Her hiring implies she did not fail the final interview, which is compatible with all other statements."
  },
  {
    "id": "gen-49-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "No birds that nest in the forest migrate south for winter.",
      "Every bird species that has bright plumage also migrates south for winter.",
      "Some birds with bright plumage are known to nest in the forest."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says 'Every bird species that has bright plumage also migrates south for winter.' Statement 1, in its contrapositive form, implies that any bird that migrates south for winter does not nest in the forest. Therefore, all birds with bright plumage do not nest in the forest. Statement 3 directly contradicts this by asserting that some birds with bright plumage are known to nest in the forest. Removing Statement 3 resolves this inconsistency."
  },
  {
    "id": "gen-49-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid arguments have true conclusions if their premises are true.",
      "Some arguments with true premises do not have true conclusions.",
      "No invalid argument is logically sound.",
      "This particular argument has true premises."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 2 describes arguments that, by Statement 1, must be invalid. This is consistent with Statement 3. Statement 4 refers to a specific argument with true premises, which could either be a valid argument with a true conclusion or one of the invalid arguments described in Statement 2."
  },
  {
    "id": "gen-49-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird has long talons, it is a predator.",
      "No bird of prey is a vegetarian.",
      "All birds that primarily eat seeds are vegetarians.",
      "Some birds with long talons primarily eat seeds."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 ('If a bird has long talons, it is a predator') and Statement 2 ('No bird of prey is a vegetarian') together imply that any bird with long talons is not a vegetarian. Statement 3 ('All birds that primarily eat seeds are vegetarians') implies that any bird that eats seeds is a vegetarian. Combining these, it means birds with long talons cannot primarily eat seeds. Statement 4 directly contradicts this by claiming some birds with long talons primarily eat seeds. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-49-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the jury panel have been screened for bias.",
      "No one screened for bias has a direct conflict of interest.",
      "Some individuals with a direct conflict of interest were excused from service.",
      "A few individuals excused from service were not on the jury panel."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 and Statement 2 imply that no jury panel member has a conflict of interest. Statement 3 indicates that some individuals with conflicts were excused, and these individuals could not have been on the jury panel, which aligns with Statement 4. There is no contradiction."
  },
  {
    "id": "gen-49-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All art students attend the gallery opening.",
      "No one who attends the gallery opening misses the artist's talk.",
      "Some art students miss the artist's talk."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts 'All art students attend the gallery opening.' Statement 2 claims 'No one who attends the gallery opening misses the artist's talk.' These two statements logically combine to mean that all art students do not miss the artist's talk. Statement 3 ('Some art students miss the artist's talk') directly contradicts this conclusion. Removing Statement 3 resolves this inconsistency."
  },
  {
    "id": "gen-49-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful negotiation involves compromise from both sides.",
      "Some negotiations that involve compromise from both sides still end in deadlock.",
      "No negotiation that ends in deadlock can be considered successful.",
      "This particular negotiation did not end in deadlock."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 2 describes negotiations that fit Statement 3's condition (ending in deadlock means they are not successful), which does not contradict Statement 1 (successful ones need compromise, but not all compromises lead to success). Statement 4 describes a negotiation that could be successful or not, without creating any contradiction with the other statements."
  },
  {
    "id": "gen-49-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a city has a robust public transportation system, then it experiences less traffic congestion.",
      "Cities that experience less traffic congestion rarely invest heavily in road expansion.",
      "Every city with inadequate funding for infrastructure inevitably invests heavily in road expansion.",
      "Some cities with robust public transportation systems have inadequate funding for infrastructure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 and Statement 2 logically imply that any city with a robust public transportation system does not invest heavily in road expansion. Statement 3, by contrapositive, means that any city that does not invest heavily in road expansion also does not have inadequate funding for infrastructure. Therefore, all cities with robust public transportation systems do not have inadequate funding for infrastructure. Statement 4 directly contradicts this conclusion by claiming that some such cities do have inadequate funding. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-49-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the research team attended the conference.",
      "Some individuals who attended the conference also presented a paper.",
      "No one who presented a paper failed to receive a travel grant.",
      "A few members of the research team did not present a paper."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates all research team members attended the conference. Statement 2 means some attendees (potentially including some from the research team) presented papers, and Statement 3 ensures these paper presenters received grants. Statement 4 specifies that some research team members did not present a paper, which is fully compatible with the other statements, as not all attendees or research team members were required to present a paper."
  },
  {
    "id": "gen-50-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a succulent, it needs infrequent watering.",
      "Plants that need infrequent watering are always native to arid regions.",
      "Any plant native to an arid region cannot tolerate frost.",
      "This particular plant is a succulent.",
      "This particular plant tolerates frost."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if a plant is a succulent, then it needs infrequent watering, which means it's native to an arid region, and therefore cannot tolerate frost. This implies that if this plant is a succulent, it cannot tolerate frost. Statement 4 affirms that this particular plant is a succulent, which means it cannot tolerate frost. Statement 5 claims this particular plant tolerates frost, directly contradicting the conclusion drawn from the first four statements."
  },
  {
    "id": "gen-50-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who took the advanced class passed the final exam.",
      "If a student passed the final exam, they received a certificate of completion.",
      "Some students who took the advanced class did not receive a certificate of completion."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a chain: all students who took the advanced class passed the final exam, and if a student passed the final exam, they received a certificate of completion. Therefore, all students who took the advanced class received a certificate of completion. Statement 3 directly contradicts this conclusion by asserting that some students who took the advanced class did not receive a certificate of completion."
  },
  {
    "id": "gen-50-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All lawyers are college graduates.",
      "Some college graduates are not lawyers.",
      "Maria is a college graduate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Maria could be one of the college graduates who is not a lawyer, consistent with all statements."
  },
  {
    "id": "gen-50-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No one who works in the accounting department attends the weekly town hall.",
      "If an employee does not attend the weekly town hall, they will not be informed of policy changes.",
      "All employees informed of policy changes are required to sign a compliance document.",
      "Some employees who work in the accounting department signed a compliance document."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that if an employee works in the accounting department, they do not attend the weekly town hall, and therefore will not be informed of policy changes. Statement 3 means that to sign a compliance document, an employee must have been informed of policy changes. This creates a chain: working in accounting implies not being informed of policy changes, which implies not signing a compliance document. Thus, no employee in the accounting department signs a compliance document. Statement 4 contradicts this by stating some employees in the accounting department signed a compliance document."
  },
  {
    "id": "gen-50-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who attend the monthly meeting receive a bonus.",
      "No employee who works part-time attends the monthly meeting.",
      "If an employee receives a bonus, they must have worked full-time.",
      "Some employees who work full-time do not receive a bonus.",
      "Sarah works part-time."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. For example, Sarah works part-time, so she doesn't attend the monthly meeting and doesn't receive a bonus. Some full-time employees might not attend the meeting either, thus not receiving a bonus, which is consistent with statement 4. Other full-time employees could attend and receive bonuses, consistent with statements 1 and 3."
  },
  {
    "id": "gen-50-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A candidate will be interviewed only if they have relevant experience.",
      "No candidate with relevant experience has a gap in their resume.",
      "If a candidate is selected for a second interview, they must have been interviewed previously.",
      "Some candidates with a gap in their resume were selected for a second interview."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: if a candidate is selected for a second interview, they must have been interviewed, which means they have relevant experience, and therefore they do not have a gap in their resume. This implies that no candidate selected for a second interview has a gap in their resume. Statement 4 directly contradicts this by asserting that some candidates with a gap in their resume were selected for a second interview."
  },
  {
    "id": "gen-50-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All paintings in the exhibit are by impressionist artists.",
      "No impressionist artist living in France used solely oil paints.",
      "If a painting uses only oil paints, it cannot be by an artist living in Italy.",
      "Some paintings in the exhibit are by artists living in Italy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 means all paintings are by impressionist artists. Statement 4 indicates some of these impressionist artists live in Italy. Statement 3 implies that if these Italian artists painted with only oil paints, this would be inconsistent, but it is possible for them to use other mediums or mixed media, thus avoiding solely oil paints. This does not contradict statement 2, which only concerns artists living in France. Therefore, no inconsistency arises."
  },
  {
    "id": "gen-50-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Students can enroll in the advanced seminar only if they have completed the prerequisite course.",
      "No student who completed the prerequisite course failed the diagnostic test.",
      "Every student who did not fail the diagnostic test was granted access to the research lab.",
      "Some students enrolled in the advanced seminar were not granted access to the research lab."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a student is enrolled in the advanced seminar, they completed the prerequisite course. Completing the prerequisite course means they did not fail the diagnostic test. Not failing the diagnostic test means they were granted access to the research lab. Therefore, every student enrolled in the advanced seminar was granted access to the research lab. Statement 4 directly contradicts this conclusion by stating that some students enrolled in the advanced seminar were not granted access to the research lab."
  },
  {
    "id": "gen-50-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a product receives a 5-star rating, it is eligible for the annual award.",
      "No product eligible for the annual award uses synthetic materials.",
      "All products using synthetic materials are manufactured overseas.",
      "Some products manufactured overseas received a 5-star rating."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statements 1 and 2 imply that if a product receives a 5-star rating, it does not use synthetic materials. Statement 4 states some products manufactured overseas received a 5-star rating. This is consistent, as these 5-star products manufactured overseas would simply be products that do not use synthetic materials, which does not contradict statement 3 (which only applies to products that *do* use synthetic materials)."
  },
  {
    "id": "gen-50-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless an employee completes the training, they cannot work on Project X.",
      "Every employee who works on Project X is assigned a mentor.",
      "No employee assigned a mentor has access to confidential client data.",
      "At least one employee who works on Project X has access to confidential client data."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 form a logical chain: every employee who works on Project X is assigned a mentor, and no employee assigned a mentor has access to confidential client data. This implies that no employee who works on Project X has access to confidential client data. Statement 4 directly contradicts this conclusion by asserting that at least one employee who works on Project X has access to confidential client data."
  }
];

export default generatedPuzzles;
