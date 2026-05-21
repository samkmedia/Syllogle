// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey are purely herbivorous.",
      "Some owls are purely herbivorous."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All owls are birds of prey) and Statement 2 (No birds of prey are purely herbivorous) together imply that no owls are purely herbivorous. This conclusion directly contradicts Statement 3 (Some owls are purely herbivorous)."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Some musicians are actors.",
      "All opera singers are actors.",
      "No comedians are opera singers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for some musicians to be actors, for all opera singers to be actors, and for no comedians to be opera singers simultaneously. These statements do not force a contradiction."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a tropical plant.",
      "If a plant is a tropical plant, it cannot survive freezing temperatures.",
      "All plants that require daily watering survive freezing temperatures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (If a plant requires daily watering, it is a tropical plant) and Statement 2 (If a plant is a tropical plant, it cannot survive freezing temperatures) together imply that any plant requiring daily watering cannot survive freezing temperatures. This conclusion directly contradicts Statement 3 (All plants that require daily watering survive freezing temperatures)."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are aquatic animals.",
      "No aquatic animals are birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Dogs are mammals. Some mammals, such as whales, are aquatic animals. No aquatic animals are birds. These statements can all be true at the same time without contradiction."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All athletes are highly disciplined individuals.",
      "Some competitive gamers are athletes.",
      "No competitive gamers are highly disciplined individuals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All athletes are highly disciplined individuals) and Statement 2 (Some competitive gamers are athletes) together imply that some competitive gamers are highly disciplined individuals. This conclusion directly contradicts Statement 3 (No competitive gamers are highly disciplined individuals)."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a raptor, it has sharp talons.",
      "If a bird is an owl, it has sharp talons.",
      "Some owls hunt at night."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for both raptors and owls to have sharp talons, and for some owls to hunt at night. These facts are compatible and do not lead to any logical contradiction."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an employee is promoted, they receive a salary increase.",
      "If an employee has received a disciplinary warning, they do not receive a salary increase.",
      "Some employees who are promoted have also received a disciplinary warning."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (If an employee is promoted, they receive a salary increase) and Statement 2 (If an employee has received a disciplinary warning, they do not receive a salary increase) together imply that no employee who is promoted can have received a disciplinary warning. This directly contradicts Statement 3 (Some employees who are promoted have also received a disciplinary warning)."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "Some pets are mammals.",
      "No dogs are cats."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Dogs are mammals. Some pets, such as cats, are mammals. It is also true that no dogs are cats. All these statements can hold true simultaneously."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors have published a book.",
      "No one who has published a book has missed a deadline.",
      "Some people who have missed deadlines are also acclaimed critics.",
      "All acclaimed critics are successful authors."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 (All acclaimed critics are successful authors), Statement 1 (All successful authors have published a book), and Statement 2 (No one who has published a book has missed a deadline) collectively imply that no acclaimed critics have missed a deadline. This derived conclusion directly contradicts Statement 3 (Some people who have missed deadlines are also acclaimed critics)."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies diligently, they pass the course.",
      "If a student participates in class, they earn extra credit.",
      "Some students who study diligently also earn extra credit.",
      "Some students who participate in class do not pass the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "A student can study diligently and pass, participate and earn extra credit. Some students can do both, and some who participate might not pass if their diligence is insufficient. All these scenarios are logically consistent."
  },
  {
    "id": "gen-2-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a fruit is ripe, it is soft.",
      "No soft fruit can be shipped long distances.",
      "All fruits that can be shipped long distances are picked unripe.",
      "Some fruits are picked unripe but are ripe when sold.",
      "All fruits that are picked unripe can be shipped long distances."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1 (Ripe → Soft) and Statement 2 (Soft → Not Shipped Long Distances), we conclude that if a fruit is ripe, it cannot be shipped long distances (Ripe → Not Shipped Long Distances). From Statement 3 (Shipped Long Distances → Picked Unripe) and Statement 5 (Picked Unripe → Shipped Long Distances), we conclude that a fruit can be shipped long distances if and only if it was picked unripe (Shipped Long Distances ↔ Picked Unripe). Combining these, if a fruit is ripe, it cannot be shipped long distances, and therefore it cannot have been picked unripe (Ripe → Not Picked Unripe). This directly contradicts Statement 4, which claims that some fruits are both picked unripe and ripe when sold. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-2-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who received a prize scored above average.",
      "Some participants scored above average but did not receive a prize.",
      "No participant who scored below average received a prize.",
      "Sarah received a prize."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 (Prize → Above Average) and Statement 3 (Not Above Average → Not Prize) are logically equivalent. Statement 4 (Sarah received a prize) implies Sarah scored above average (by Statement 1). Statement 2 simply asserts that there are some people who scored above average and didn't receive a prize. This doesn't contradict Sarah's situation, as Sarah is a participant who scored above average and *did* receive a prize. All statements can be simultaneously true."
  },
  {
    "id": "gen-2-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies hard, they will pass the exam.",
      "No student who spends less than five hours studying can pass the exam.",
      "Every student in this group studies hard.",
      "Some students in this group spend less than five hours studying."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3 (Group → Studies Hard) and Statement 1 (Studies Hard → Pass Exam), we can conclude that every student in this group will pass the exam (Group → Pass Exam). Statement 2 states that no student who spends less than five hours studying can pass the exam, which means if a student passes the exam, they must have spent at least five hours studying (Pass Exam → Not Less Than Five Hours Studying). Combining these, we conclude: If a student is in this group, they must have spent at least five hours studying (Group → Not Less Than Five Hours Studying). This contradicts Statement 4, which claims that some students in this group spend less than five hours studying. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-2-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds in this aviary eat seeds.",
      "No bird that eats seeds also eats insects.",
      "Some birds in this aviary eat insects.",
      "The Toucan in this aviary eats seeds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1 (All birds in this aviary eat seeds) and Statement 2 (No bird that eats seeds also eats insects), we can logically conclude that no bird in this aviary eats insects. This conclusion directly contradicts Statement 3, which claims that some birds in this aviary *do* eat insects. Removing Statement 3 resolves the inconsistency. Statement 4 provides specific information about the Toucan, which is consistent with the other statements if Statement 3 is removed."
  },
  {
    "id": "gen-2-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is electric, it produces no direct emissions.",
      "All cars purchased this year are electric.",
      "Some cars with high fuel efficiency produce direct emissions.",
      "My car was purchased this year.",
      "My car has high fuel efficiency."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 4 (My car was purchased this year) and Statement 2 (All cars purchased this year are electric), we deduce that my car is electric. From this and Statement 1 (If a car is electric, it produces no direct emissions), we deduce that my car produces no direct emissions. Statement 5 says my car has high fuel efficiency. Statement 3 (Some cars with high fuel efficiency produce direct emissions) refers to *some* cars, not *all*. My car, being a high-fuel-efficiency car with no direct emissions, simply isn't one of those 'some' cars. There's no contradiction; all statements can coexist."
  },
  {
    "id": "gen-2-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a student completes the advanced module, they cannot graduate.",
      "No student who attends all lectures fails the advanced module.",
      "Every student who attends all lectures graduates.",
      "Some students complete the advanced module but do not graduate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means that graduating requires completing the advanced module (Graduates → Completes Advanced Module). Statement 2 means attending all lectures ensures completing the advanced module (Attends Lectures → Completes Advanced Module). Statement 3 means attending all lectures ensures graduating (Attends Lectures → Graduates). From Statement 3 and the implication of Statement 1, we can infer that attending all lectures implies completing the advanced module, which is consistent with Statement 2. Statement 4 (Some students complete the advanced module but do not graduate) is also consistent because completing the advanced module is a necessary condition for graduation, but not necessarily a sufficient one. All statements can be true simultaneously."
  },
  {
    "id": "gen-2-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs in the park are leashed.",
      "If an animal is leashed, it is well-behaved.",
      "No well-behaved animal barks excessively.",
      "Some animals in the park bark excessively.",
      "All animals in the park are dogs."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 5 (All animals in the park are dogs) and Statement 1 (All dogs in the park are leashed), we can conclude that all animals in the park are leashed. From this and Statement 2 (If an animal is leashed, it is well-behaved), we can conclude that all animals in the park are well-behaved. Finally, from this and Statement 3 (No well-behaved animal barks excessively), we can conclude that no animal in the park barks excessively. This directly contradicts Statement 4, which claims that some animals in the park *do* bark excessively. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-2-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A project is approved only if it has secured funding.",
      "If a project has secured funding, it will proceed to the next stage.",
      "Some projects that proceed to the next stage are not approved.",
      "The new bridge project has secured funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 (Approved → Secured Funding) and Statement 2 (Secured Funding → Next Stage) combine to mean that if a project is approved, it will proceed to the next stage (Approved → Next Stage). Statement 4 states the new bridge project has secured funding, which, by Statement 2, means it will proceed to the next stage. This does not mean it *must* be approved, as Statement 1 is 'Approved only if Funding', not 'Funding only if Approved'. Therefore, it is entirely possible for the new bridge project to be one of the 'some projects that proceed to the next stage are not approved' as described in Statement 3. All statements can be true together."
  },
  {
    "id": "gen-2-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents who pay their taxes on time receive a rebate.",
      "No resident who receives a rebate is charged a late fee.",
      "If a resident is charged a late fee, they are not eligible for a rebate next year.",
      "Some residents are charged a late fee but paid their taxes on time.",
      "Every resident who pays their taxes on time is eligible for a rebate next year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1 (Pays On Time → Receives Rebate) and Statement 2 (Receives Rebate → Not Charged Late Fee), we can logically conclude that if a resident pays their taxes on time, they are not charged a late fee (Pays On Time → Not Charged Late Fee). Statement 4 directly contradicts this conclusion by asserting that some residents *are* charged a late fee *and* paid their taxes on time. Removing Statement 4 resolves the inconsistency. Statements 3 and 5 discuss eligibility for next year's rebate and do not contribute to the current year's contradiction."
  },
  {
    "id": "gen-2-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend the daily stand-up meeting.",
      "No employee who attends the daily stand-up meeting misses the weekly team sync.",
      "Some employees miss the weekly team sync.",
      "Mark works remotely."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 (Remote Work → Daily Stand-up Meeting) and Statement 2 (Daily Stand-up Meeting → Not Miss Weekly Team Sync), we can deduce that if an employee works remotely, they do not miss the weekly team sync (Remote Work → Not Miss Weekly Team Sync). Statement 4 states that Mark works remotely, so Mark does not miss the weekly team sync. Statement 3 (Some employees miss the weekly team sync) is entirely consistent with this. It implies that there are employees who miss the weekly team sync, and based on our deduction, these employees simply cannot be remote workers. All statements can be true simultaneously."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All managers attended the training.",
      "No one who attended the training missed the deadline.",
      "Some managers missed the deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all managers attended the training. Statement 2 says no one who attended the training missed the deadline. Together, these imply that no manager missed the deadline. Statement 3, however, explicitly states that some managers did miss the deadline, creating a direct contradiction."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "No cat is a dog.",
      "Some mammals are cats."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Dogs are a type of mammal, and cats are another type of mammal, distinct from dogs. It is logically possible for all three statements to be true simultaneously without contradiction."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student in the choir can read music.",
      "If a student can read music, they play an instrument.",
      "No student in the choir plays an instrument."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 tells us that every student in the choir can read music. Statement 2 indicates that anyone who can read music plays an instrument. This chain implies that every student in the choir plays an instrument. Statement 3 directly contradicts this conclusion by asserting that no student in the choir plays an instrument."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every lawyer has a law degree.",
      "Some people with law degrees are not lawyers.",
      "No student at this university is a lawyer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all lawyers to have law degrees, while some individuals with law degrees (e.g., those who chose not to practice) are not lawyers. Statement 3 simply specifies that a particular group (university students) does not include any lawyers, which creates no conflict with the other statements."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who studied hard passed the exam.",
      "No one who passed the exam failed the course.",
      "Some students who studied hard failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all hard-studying students passed the exam. Statement 2 states that passing the exam means not failing the course. Taken together, these mean that no student who studied hard failed the course. Statement 3, however, directly claims that some students who studied hard did fail the course, which is a contradiction."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a recipe uses cilantro, it is a main dish.",
      "Some main dishes do not use cilantro.",
      "All recipes that use dill are main dishes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A recipe using cilantro will be a main dish, and a recipe using dill will also be a main dish. It is possible for some main dishes to not use cilantro (e.g., they might use dill instead, or neither). There is no logical contradiction."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, it has a red breast.",
      "No bird with a red breast is a sparrow.",
      "All sparrows are robins."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims all sparrows are robins. Combining this with Statement 1, which says robins have red breasts, leads to the conclusion that all sparrows have red breasts. However, Statement 2 states that no bird with a red breast is a sparrow. This creates a logical conflict: if sparrows have red breasts (from 3 and 1), they cannot be sparrows (from 2), meaning sparrows cannot exist."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful businesses prioritize customer service.",
      "No failing business prioritizes customer service.",
      "Some businesses are neither successful nor failing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Successful businesses prioritize customer service, and failing ones do not. The existence of businesses that are in a neutral category (neither successful nor failing) introduces no conflict, as their stance on customer service is not specified by the other statements."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with a bonus received a promotion.",
      "No employee who received a promotion also received a reprimand.",
      "Some employees who received a reprimand also received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that having a bonus leads to a promotion. Statement 2 states that receiving a promotion means not receiving a reprimand. Together, these imply that no employee with a bonus received a reprimand. Statement 3, however, directly contradicts this by stating that some employees received both a reprimand and a bonus."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No plant with thorns is edible.",
      "Some edible plants are herbs.",
      "All herbs are plants."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 rules out thorny plants as edible. Statement 2 confirms that some edible plants are herbs. Since all herbs are plants (Statement 3), this simply means there exist some herb plants that are edible and, by extension, do not have thorns. There is no contradiction."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional musicians have perfect pitch.",
      "No one with perfect pitch struggles with transposing music.",
      "Some aspiring musicians struggle with transposing music.",
      "Every aspiring musician is a professional musician."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates that every aspiring musician is a professional musician. Combined with Statement 1, this means every aspiring musician has perfect pitch. Statement 2 then implies that no aspiring musician struggles with transposing music. This directly contradicts Statement 3, which claims some aspiring musicians do struggle with transposing music."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who complete the advanced course receive a commendation.",
      "No student who has received a commendation fails the final project.",
      "Some students who attempt the advanced course do not complete it.",
      "Every student who fails the final project must retake the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If a student completes the advanced course, they receive a commendation and do not fail the final project. Statement 3 describes students who do not complete the course, so the chain does not apply to them. Statement 4 provides a consequence for failing students, which is consistent with the possibility that some students from Statement 3 might fail."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All researchers involved in Project Z have access to classified data.",
      "No one with access to classified data can publish their findings without external review.",
      "Dr. Lee published her Project Z findings without external review."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Dr. Lee is involved in Project Z. From Statement 1, this means she has access to classified data. Statement 2 dictates that no one with access to classified data can publish their findings without external review. Therefore, Dr. Lee cannot publish her findings without external review. This contradicts Statement 3, which asserts that Dr. Lee did publish her Project Z findings without external review."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful marketing campaign targets a specific demographic.",
      "Anyone who understands market trends consults financial analysts.",
      "Some individuals who consult financial analysts are not successful entrepreneurs.",
      "No one who fails to adapt to new technologies is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. The chain 'successful marketing campaign' implies 'targets a specific demographic' (Statement 1). Statement 2 is about market trends and financial analysts, which does not directly connect to a contradiction. Statements 3 and 4 introduce conditions that can exist without contradicting the prior assertions, as they describe groups that are not necessarily successful entrepreneurs or successful marketing campaigns."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club are experienced navigators.",
      "No experienced navigator gets lost on well-marked trails.",
      "Every new member gets lost on well-marked trails.",
      "Some new members are members of the hiking club."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Consider a person who is both a new member and a member of the hiking club, as allowed by Statement 4. From Statement 1, this person is an experienced navigator. Statement 2 then dictates that this person does not get lost on well-marked trails. However, Statement 3 asserts that every new member gets lost on well-marked trails, creating a contradiction."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every book published by Zenith Press undergoes a rigorous editing process.",
      "No book that undergoes a rigorous editing process contains major factual errors.",
      "Some books published by Zenith Press are bestsellers.",
      "Some bestsellers contain minor factual errors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Books published by Zenith Press undergo rigorous editing and therefore contain no major factual errors. Statement 3 confirms that some bestsellers are in this category. Statement 4 indicates that some bestsellers have minor factual errors. Minor errors are not major errors, so there is no contradiction between a bestseller having no major errors and having minor errors."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the astronomy club own a telescope.",
      "No one who owns a telescope uses binoculars for stargazing.",
      "Every member of the astronomy club regularly uses binoculars for stargazing."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Consider any member of the astronomy club. Statement 1 states they own a telescope. Statement 2 then implies that no one who owns a telescope uses binoculars for stargazing, so this astronomy club member does not use binoculars for stargazing. This directly contradicts Statement 3, which claims every member of the astronomy club regularly uses binoculars for stargazing."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful marketing campaign targets a specific demographic.",
      "No marketing campaign that targets a specific demographic ignores social media.",
      "Some marketing campaigns that ignore social media still achieve high visibility.",
      "Some campaigns that achieve high visibility are not successful marketing campaigns."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, every successful marketing campaign does not ignore social media. Statement 3 identifies campaigns that *do* ignore social media and achieve high visibility. Since they ignore social media, they cannot be successful campaigns, which is consistent. Statement 4 further supports this by stating that not all high-visibility campaigns are successful, allowing for the existence of the campaigns described in Statement 3."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All animals native to the desert biome have specialized water conservation mechanisms.",
      "No animal with specialized water conservation mechanisms requires daily watering.",
      "Species X requires daily watering.",
      "Species X is an animal native to the desert biome."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Species X is an animal native to the desert biome, according to Statement 4. From Statement 1, this means Species X has specialized water conservation mechanisms. Statement 2 dictates that no animal with such mechanisms requires daily watering. Therefore, Species X does not require daily watering. This contradicts Statement 3, which claims Species X requires daily watering."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every effective public speaker practices regularly.",
      "No one who practices regularly is afraid of public speaking.",
      "Some people who are afraid of public speaking still manage to deliver compelling presentations.",
      "Some people who deliver compelling presentations are not effective public speakers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 establish that effective public speakers practice regularly and are not afraid of public speaking. Statement 3 identifies a group of people who are afraid of public speaking but still give compelling presentations; since they are afraid, they cannot be effective public speakers, which aligns with the first two statements. Statement 4 supports this by confirming that not all who give compelling presentations are effective public speakers."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the advanced workshop received a certificate.",
      "No one who received a certificate failed the final project.",
      "Every participant who attended the orientation failed the final project.",
      "Some participants attended the orientation and completed the advanced workshop."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some participants attended the orientation and completed the advanced workshop. For any such participant, Statement 3 implies they failed the final project. However, Statements 1 and 2 together imply that if a participant completed the advanced workshop, they received a certificate, and thus did not fail the final project. This means such a participant both failed and did not fail the final project, which is a contradiction."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs are highly disciplined.",
      "If someone is highly disciplined, they are persistent.",
      "Some persistent individuals are not successful entrepreneurs.",
      "No one is a successful entrepreneur unless they are persistent."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 2 establish a chain that if someone is a successful entrepreneur, they are persistent. Statement 4 reiterates this by stating successful entrepreneurs must be persistent. Statement 3 merely points out that the group of persistent individuals is not exclusively successful entrepreneurs, which is fully compatible with the other statements."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a hummingbird, it has a high metabolism.",
      "All birds with a high metabolism consume nectar.",
      "No bird that consumes nectar is also a predatory bird.",
      "Some predatory birds are hummingbirds."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some predatory birds are hummingbirds. For any such bird, Statements 1 and 2 establish a chain that if it is a hummingbird, it has a high metabolism and consumes nectar. However, Statement 3 states that no bird that consumes nectar is a predatory bird. This creates a contradiction: a bird that is both a predatory bird and a hummingbird must also be a non-predatory bird, which is impossible."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful politician is an effective public speaker.",
      "If someone is an effective public speaker, they are persuasive.",
      "Some persuasive individuals are not successful politicians.",
      "Not all effective public speakers are successful politicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 2 establish that all successful politicians are persuasive. Statements 3 and 4 both indicate that the category of persuasive individuals, or even effective public speakers, is broader than just successful politicians, allowing for individuals who are persuasive or effective public speakers without being successful politicians. These are all compatible."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced calculus course, they must pass the prerequisite.",
      "No student who passes the prerequisite fails the midterm exam.",
      "Every student who registered late for advanced calculus failed the midterm exam.",
      "Some students registered late for advanced calculus and enrolled in the advanced calculus course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some students registered late for advanced calculus and also enrolled in the advanced calculus course. For any such student, Statements 1 and 2 together imply that if they enrolled in advanced calculus, they must pass the prerequisite and consequently not fail the midterm exam. However, Statement 3 states that every student who registered late for advanced calculus failed the midterm exam. This means such a student both failed and did not fail the midterm exam, which is a contradiction."
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of this apartment building have access to the rooftop garden.",
      "If a resident has access to the rooftop garden, they pay an amenity fee.",
      "All residents who pay an amenity fee must undergo a yearly maintenance check.",
      "Some residents do not undergo a yearly maintenance check."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1, 2, and 3 establish a chain that all residents of the apartment building must undergo a yearly maintenance check. Statement 4 states that some residents do not undergo a yearly maintenance check. This is consistent if those residents are simply not residents of this specific apartment building, or if there are other categories of residents not covered by the first statement, which is allowed."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee receives a bonus, they met all performance targets.",
      "All employees who met all performance targets were rated as 'excellent'.",
      "No employee rated as 'excellent' was disciplined last quarter.",
      "Some employees were disciplined last quarter and received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some employees were disciplined last quarter and received a bonus. For any such employee, Statements 1, 2, and 3 together establish a chain that if an employee received a bonus, they met all performance targets, were rated as 'excellent', and therefore were not disciplined last quarter. This creates a direct contradiction for those employees, as they would both have been disciplined and not disciplined last quarter."
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All houses built before 1950 have lead paint.",
      "If a house has lead paint, it requires special disposal procedures for renovations.",
      "Some houses that require special disposal procedures for renovations were built after 1950.",
      "No house built after 2000 has lead paint."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 2 establish that all houses built before 1950 have lead paint and thus require special disposal procedures for renovations. Statement 4 states that no house built after 2000 has lead paint. Statement 3 claims some houses built after 1950 require special disposal procedures. This is consistent because Statement 1 does not state that *only* houses built before 1950 have lead paint, allowing houses built between 1950 and 2000 to potentially have it, or for other features of post-1950 houses to require special disposal procedures."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful athlete follows a strict training regimen.",
      "If an individual follows a strict training regimen, they prioritize recovery.",
      "No one who prioritizes recovery skips rest days.",
      "Some successful athletes skip rest days."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some successful athletes skip rest days. For any such athlete, Statements 1, 2, and 3 together establish a chain that if an individual is a successful athlete, they follow a strict training regimen, prioritize recovery, and therefore do not skip rest days. This creates a direct contradiction for those athletes, as they would both skip and not skip rest days."
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a creature is a mammal, it has a backbone.",
      "All creatures with a backbone are vertebrates.",
      "Some vertebrates are not mammals.",
      "No vertebrate is an insect."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 2 establish that all mammals are vertebrates. Statement 3 indicates that the category of vertebrates includes more than just mammals, which is true (e.g., fish, birds, reptiles). Statement 4 sets a boundary for vertebrates by excluding insects, which is also consistent. No conflicts arise."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers in the firm have a master's degree.",
      "No one with a master's degree in the firm works on Project Alpha.",
      "Some engineers in the firm work on Project Alpha."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all engineers in the firm do not work on Project Alpha. Statement 3 directly contradicts this by asserting that some engineers in the firm do work on Project Alpha. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy playing fetch.",
      "Some animals that enjoy playing fetch are not dogs.",
      "My cat, Whiskers, enjoys playing fetch."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Whiskers is an animal that enjoys playing fetch and is not a dog, which is explicitly allowed by Statement 2. This does not contradict Statement 1."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe is for dessert, it requires sugar.",
      "No healthy recipe requires sugar.",
      "All recipes for dessert are healthy."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 2 and 3 together imply that if a recipe is for dessert, then it is healthy, and therefore it does not require sugar. Statement 1 directly contradicts this by stating that all recipes for dessert require sugar. Removing Statement 1 resolves the inconsistency."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted a portfolio.",
      "Some individuals who submitted a portfolio were not successful applicants.",
      "Liam submitted a portfolio but was not a successful applicant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 3 provides a specific example of what Statement 2 states is possible: an individual who submitted a portfolio but was not a successful applicant. This is entirely compatible with Statement 1."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car on the lot has four wheels.",
      "No vehicle with four wheels is a motorcycle.",
      "Some motorcycles are currently on the lot."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that every car on the lot is not a motorcycle. Statement 3 directly asserts that some motorcycles are on the lot, which means some vehicles on the lot are both cars and motorcycles, creating a contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own boots.",
      "Some people who own boots are not members of the hiking club.",
      "Sarah owns boots but is not a member of the hiking club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Sarah's situation in Statement 3 is an example of the possibility described in Statement 2: someone who owns boots but is not a member of the hiking club. This does not contradict Statement 1."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a painting is a masterpiece, it is highly valued.",
      "No painting by artist X is highly valued.",
      "Some paintings by artist X are masterpieces."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a painting is a masterpiece, then it cannot be by artist X. Statement 3 directly contradicts this by stating that some paintings by artist X are masterpieces. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful job candidates submitted a resume.",
      "Some individuals who submitted a resume were not successful job candidates.",
      "The hiring manager reviewed resumes from both successful and unsuccessful candidates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 3 describes a scenario where the hiring manager reviewed resumes from individuals in both categories mentioned in Statement 2 (successful and unsuccessful), which is compatible with all statements."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who attended the seminar passed the quiz.",
      "No student who skipped more than one session passed the quiz.",
      "Some students who attended the seminar skipped more than one session."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that any student who attended the seminar did not skip more than one session. Statement 3 directly contradicts this by asserting that some students who attended the seminar also skipped more than one session. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds in this sanctuary can fly.",
      "Some animals that can fly are not birds.",
      "The bat, Nocturne, is an animal that can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Nocturne is an animal that can fly. Statement 2 explicitly allows for animals that can fly but are not birds (like a bat), which does not contradict Statement 1 that all birds in the sanctuary can fly."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student enrolled in Advanced Calculus has passed Pre-Calculus.",
      "No student who passed Pre-Calculus failed Algebra.",
      "At least one student enrolled in Advanced Calculus failed Algebra."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 states that some students enrolled in Advanced Calculus failed Algebra. However, Statement 1 indicates that every student in Advanced Calculus passed Pre-Calculus. Statement 2 then specifies that no student who passed Pre-Calculus failed Algebra. Therefore, any student in Advanced Calculus must have passed Algebra, contradicting Statement 3."
  },
  {
    "id": "gen-7-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird builds a nest, it will lay eggs.",
      "Only birds that lay eggs migrate south for the winter.",
      "Some birds do not build nests and do not migrate south for the winter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. If a bird builds a nest, it lays eggs and then migrates south. Birds that don't build nests and don't migrate south simply fall outside this chain, neither confirming nor denying any statement."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant thrives in this climate, it requires frequent watering.",
      "Only plants that receive direct sunlight thrive in this climate.",
      "No plant that requires frequent watering also requires direct sunlight.",
      "At least one plant in this garden thrives in this climate."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 confirms the existence of thriving plants. Statement 1 indicates that thriving plants require frequent watering. Statement 3 asserts that no plant requiring frequent watering receives direct sunlight. Therefore, any thriving plant must not receive direct sunlight. This directly contradicts Statement 2, which states that only plants receiving direct sunlight thrive in this climate."
  },
  {
    "id": "gen-7-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a film is a comedy, it will not win an Oscar for Best Picture.",
      "Some films that are comedies are critically panned.",
      "All films that win an Oscar for Best Picture are critically acclaimed.",
      "No film that is critically panned is critically acclaimed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. A film winning Best Picture would be a critically acclaimed comedy. Other comedies could be critically panned, and thus not acclaimed, making them ineligible for Best Picture. This does not create any contradiction."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time a specific bell rings, the dogs start barking.",
      "The dogs only start barking if the mail carrier is present.",
      "If the mail carrier is present, the specific bell never rings.",
      "The specific bell rings at least once a day."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 tells us that the specific bell rings at least once. According to Statement 1, when the bell rings, the dogs start barking. Statement 2 then indicates that if the dogs are barking, the mail carrier must be present. However, Statement 3 states that if the mail carrier is present, the specific bell never rings. This creates a contradiction for the event of the bell ringing: it rings (from Statement 4) but also does not ring (via the chain from Statements 1, 2, and 3)."
  },
  {
    "id": "gen-7-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "No business that prioritizes customer satisfaction ignores employee well-being.",
      "Some businesses that ignore employee well-being are not highly profitable.",
      "Every business that is highly profitable is a successful business."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. If a business is highly profitable, then (from Statements 4, 1, and 2) it must be successful, prioritize customer satisfaction, and care for employee well-being. Statement 3 simply describes some businesses that are not highly profitable and ignore employee well-being, which poses no conflict."
  },
  {
    "id": "gen-7-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A student can register for the advanced course only if they have completed the prerequisite course.",
      "No student who has completed the prerequisite course needs a waiver to register.",
      "Some students who need a waiver to register have registered for the advanced course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 indicates there is at least one student who needs a waiver AND has registered for the advanced course. Statement 1 establishes that any student registered for the advanced course must have completed the prerequisite course. Statement 2 then says that no student who completed the prerequisite course needs a waiver. This means the student from Statement 3, having registered for the advanced course and completed the prerequisite, cannot need a waiver, which directly contradicts the initial premise that they need a waiver."
  },
  {
    "id": "gen-7-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe calls for fresh herbs, it will be flavorful.",
      "Every recipe that is flavorful is also complex.",
      "Some recipes that do not call for fresh herbs are complex.",
      "No recipe that is complex is simple."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. A recipe calling for fresh herbs will be flavorful, complex, and not simple. Statement 3 allows for recipes that don't use fresh herbs to still be complex (e.g., due to other complex ingredients), which poses no contradiction to the other statements."
  },
  {
    "id": "gen-7-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless an artist uses oil paints, their work is not considered classical.",
      "Every artist who works in a classical style attends the annual exhibition.",
      "No artist who uses oil paints attends the annual exhibition.",
      "At least one artist works in a classical style."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that at least one artist works in a classical style. Statement 1 implies that any classical artist uses oil paints. Statement 2 states that every classical artist attends the annual exhibition. However, Statement 3 claims that no artist who uses oil paints attends the annual exhibition. Therefore, a classical artist (from Statement 4) must use oil paints (from Statement 1) and attend the exhibition (from Statement 2), but simultaneously, by using oil paints, cannot attend the exhibition (from Statement 3), creating a contradiction."
  },
  {
    "id": "gen-7-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is endorsed by the union, they will win the election.",
      "Only candidates who campaign vigorously are endorsed by the union.",
      "Some candidates who win the election do not campaign vigorously.",
      "No candidate who campaigns vigorously loses the election."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. A candidate endorsed by the union must campaign vigorously and will win. Statement 3 allows for candidates who win the election without campaigning vigorously; these candidates simply would not have been endorsed by the union (as per Statement 2's contrapositive), which is consistent."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who complete the final project receive extra credit.",
      "No student who skipped more than two lectures received extra credit.",
      "Some students completed the final project despite skipping more than two lectures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that completing the final project guarantees extra credit. Statement 2 indicates that students who skipped too many lectures cannot receive extra credit. Statement 3 claims that there exist students who completed the project AND skipped too many lectures, creating a direct conflict: such students must receive extra credit (by Statement 1) and also must NOT receive extra credit (by Statement 2)."
  },
  {
    "id": "gen-8-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "No one who trains daily ever feels tired."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all professional athletes train daily. Statement 2 specifies that there are individuals who train daily but are not professional athletes, which is perfectly consistent with Statement 1. Statement 3 adds that no one who trains daily feels tired, which applies to both professional athletes and the non-athletes mentioned in Statement 2, allowing all three conditions to be simultaneously true."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All documents approved by the committee are filed in the central archive.",
      "No document filed in the central archive can be removed without executive approval.",
      "Some documents approved by the committee were removed without executive approval."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all committee-approved documents are filed in the central archive. Statement 2 indicates that any document filed in the central archive cannot be removed without executive approval. Taken together, these mean that no committee-approved document can be removed without executive approval. Statement 3, however, claims that some committee-approved documents were removed without executive approval, which directly contradicts the conclusion drawn from Statements 1 and 2."
  },
  {
    "id": "gen-8-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful startups received early-stage funding.",
      "Some companies that received early-stage funding eventually failed.",
      "No company that eventually failed was a successful startup."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that successful startups must have received early-stage funding. Statement 3 establishes that no failed company can be a successful startup. Statement 2 then mentions that some companies that received early-stage funding ultimately failed. This is consistent because those failed companies, by Statement 3, cannot be successful startups, meaning they are a distinct group from the successful startups mentioned in Statement 1. All three statements can hold true simultaneously."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in this aviary has distinct blue feathers.",
      "No bird with distinct blue feathers is a parrot.",
      "Some parrots are present in this aviary."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all birds in this aviary possess distinct blue feathers. Statement 2 claims that no bird with distinct blue feathers can be a parrot. From these two statements, it logically follows that no bird in this aviary can be a parrot. However, Statement 3 directly contradicts this conclusion by stating that some parrots are indeed present in this aviary."
  },
  {
    "id": "gen-8-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who received a bonus met their quarterly targets.",
      "Some employees who met their quarterly targets did not receive a bonus.",
      "No employee who missed a deadline received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that receiving a bonus implies meeting quarterly targets. Statement 2 is consistent with Statement 1, as it allows for employees who meet targets but do not receive a bonus. Statement 3 introduces a separate condition about missing deadlines and bonuses, which does not conflict with the other two. It's possible for employees to exist who received a bonus and met targets (Statement 1), employees who met targets but did not receive a bonus (Statement 2), and employees who missed deadlines and thus did not receive a bonus (Statement 3)."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every painting in the exhibit uses vibrant colors.",
      "No artwork using vibrant colors is considered minimalist.",
      "Some paintings in the exhibit are considered minimalist."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 tells us that every painting in the exhibit uses vibrant colors. Statement 2 states that no artwork using vibrant colors is considered minimalist. From these two, it logically follows that no painting in the exhibit can be considered minimalist. However, Statement 3 claims that some paintings in the exhibit ARE considered minimalist, which directly contradicts this derived conclusion."
  },
  {
    "id": "gen-8-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants in the study filled out a consent form.",
      "Some individuals who filled out a consent form were not participants in the study.",
      "No individual who declined to participate was given access to the study materials."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all study participants completed a consent form. Statement 2 is consistent with Statement 1, as it describes individuals who filled out a consent form but did not become participants, indicating that the group who filled out forms is broader than just the participants. Statement 3 introduces a rule about individuals who declined to participate, which is a separate group and does not create any conflict with the first two statements. All three statements can be true simultaneously."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants passed the final interview.",
      "No candidate who passed the final interview scored below 70% on the written exam.",
      "Some successful applicants scored below 70% on the written exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 dictates that all successful applicants passed the final interview. Statement 2 states that no one who passed the final interview scored below 70% on the written exam. Together, these statements imply that all successful applicants must have scored 70% or higher on the written exam. Statement 3, however, asserts that some successful applicants scored below 70% on the written exam, which creates a direct logical contradiction with the conclusion from Statements 1 and 2."
  },
  {
    "id": "gen-8-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All artifacts displayed in the museum are historically significant.",
      "Some historically significant items are not displayed in the museum.",
      "No historically significant item is considered invaluable."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that every artifact displayed in the museum is historically significant. Statement 2 is consistent with Statement 1, indicating that there are historically significant items that are simply not on display. Statement 3 adds that no historically significant item, whether displayed or not, is considered invaluable. All three conditions can hold true simultaneously, describing a scenario where all displayed artifacts are historically significant and not invaluable, and there are other historically significant, not invaluable items that are not displayed."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the finance team attended the budget meeting.",
      "No one who attended the budget meeting submitted an expense report late.",
      "Some members of the finance team submitted an expense report late."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no members of the finance team submitted an expense report late. Statement 3 directly contradicts this by asserting that some members did."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird builds a nest in winter, it must be an arctic species.",
      "No arctic species migrates south for winter.",
      "Every robin builds a nest in winter.",
      "Some robins migrate south for winter."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if something is a robin, it builds a nest in winter, is an arctic species, and therefore does not migrate south for winter. Statement 4 directly contradicts this by stating that some robins do migrate south for winter."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All trees in this forest are deciduous.",
      "All deciduous trees shed their leaves in autumn.",
      "Some trees in this forest do not shed their leaves in autumn."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that all trees in this forest shed their leaves in autumn. Statement 3 contradicts this conclusion by claiming that some trees in the forest do not shed their leaves in autumn."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they must have completed pre-calculus.",
      "Every student who completes pre-calculus passes the math placement exam.",
      "All students in the honors program enroll in advanced calculus.",
      "At least one student in the honors program did not pass the math placement exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that all students in the honors program pass the math placement exam. Statement 4 directly contradicts this by asserting that at least one student in the honors program did not pass the math placement exam."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a painting is a masterpiece, it commands a high auction price.",
      "No painting that commands a high auction price is unknown to art critics.",
      "Every painting known to art critics is not a forgery.",
      "Some forgeries are masterpieces."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a painting is a forgery, then it cannot be known to art critics (because if it were known, it would not be a forgery, by statement 3). However, statements 4, 1, and 2 imply that some forgeries (the masterpieces) are known to art critics, creating a contradiction."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of this apartment building own a car.",
      "Some car owners do not live in this apartment building.",
      "My neighbor owns a car."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. My neighbor could be a resident of the apartment building who owns a car, or they could be a car owner who does not live in the apartment building. Both scenarios are compatible with the given information."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "All creatures with opposable thumbs can grasp tools.",
      "Some animals with opposable thumbs are not primates.",
      "Monkeys are primates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Monkeys are primates, have opposable thumbs, and can grasp tools. The existence of some animals with opposable thumbs that are not primates does not contradict any other statement."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every book in the library's new arrivals section is a fiction novel.",
      "No history textbook is a fiction novel.",
      "The library has many history textbooks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From statements 1 and 2, it can be concluded that no history textbook is in the new arrivals section. Statement 3 simply confirms the presence of history textbooks, which is compatible with them not being in the new arrivals section."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs have strong leadership skills.",
      "Some people with strong leadership skills are not entrepreneurs.",
      "Sarah has strong leadership skills."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Sarah could be a successful entrepreneur (and thus has strong leadership skills), or she could be one of the people with strong leadership skills who is not an entrepreneur. Both possibilities fit the given information."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student participates in the debate club, they attend weekly meetings.",
      "Some students who attend weekly meetings are not in the debate club.",
      "Emily attends weekly meetings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Emily could be a student who participates in the debate club and therefore attends weekly meetings, or she could be one of the students who attends weekly meetings but is not in the debate club. Both scenarios are possible."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "All animals with retractable claws are agile hunters.",
      "No agile hunter is a herbivore.",
      "Some herbivores are felines."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that if an animal is a feline, it has retractable claws. Statement 2 indicates that all animals with retractable claws are agile hunters. Statement 3 establishes that no agile hunter is a herbivore. Together, these statements mean that if an animal is a feline, it cannot be a herbivore. Statement 4 contradicts this by claiming that some herbivores are felines."
  },
  {
    "id": "gen-10-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is late for class, they must report to the office.",
      "No student who reports to the office is eligible for early dismissal.",
      "Some students are eligible for early dismissal.",
      "Maria is a student who is not late for class."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statement 3, some students are eligible for early dismissal. Statement 2 implies these students do not report to the office. Statement 1's contrapositive means students who don't report to the office are not late for class. Maria, being not late for class, could be one of these students or another consistent student type."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is admitted to the honors program, they have a high GPA.",
      "No student with a high GPA failed the entrance exam.",
      "Every student who did not fail the entrance exam speaks a second language.",
      "Some students admitted to the honors program do not speak a second language."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that admission to the honors program requires a high GPA. Statement 2 states that students with high GPAs did not fail the entrance exam. Statement 3 claims that anyone who did not fail the entrance exam speaks a second language. This chain means that any student admitted to the honors program must speak a second language. Statement 4 directly contradicts this by asserting that some students admitted to the honors program do not speak a second language."
  },
  {
    "id": "gen-10-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs are risk-takers.",
      "No risk-taker avoids financial speculation.",
      "Some people who avoid financial speculation are not successful entrepreneurs.",
      "Sarah is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statement 4, Sarah is a successful entrepreneur. Statement 1 means Sarah is a risk-taker. Statement 2 implies Sarah does not avoid financial speculation. Statement 3 is consistent with Sarah's status; there can be other people who avoid financial speculation and are not successful entrepreneurs."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete trains rigorously, they will improve their performance.",
      "All athletes who improve their performance qualify for the national team.",
      "No athlete who qualifies for the national team misses practice sessions.",
      "Some athletes train rigorously but miss practice sessions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that rigorous training leads to improved performance. Statement 2 connects improved performance to qualifying for the national team. Statement 3 asserts that national team qualifiers do not miss practice sessions. Therefore, any athlete who trains rigorously cannot miss practice sessions. Statement 4 contradicts this by stating that some athletes train rigorously but miss practice sessions."
  },
  {
    "id": "gen-10-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with full-time contracts receive health benefits.",
      "No employee who receives health benefits is eligible for supplemental unemployment aid.",
      "Some employees are eligible for supplemental unemployment aid.",
      "If an employee has a part-time contract, they do not receive health benefits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 3 confirms some employees are eligible for supplemental unemployment aid. Statement 2 implies these employees do not receive health benefits. Statement 1's contrapositive indicates that employees without health benefits do not have full-time contracts. Statement 4 is consistent as employees eligible for aid could have part-time contracts and thus no health benefits."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A student passes the advanced course only if they master calculus.",
      "Every student who masters calculus scored highly on the final exam.",
      "No student who scored highly on the final exam struggled with the prerequisites.",
      "Some students who struggled with the prerequisites passed the advanced course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that passing the advanced course requires mastering calculus. Statement 2 implies that mastering calculus means scoring highly on the final exam. Statement 3 states that students who score highly on the final exam did not struggle with the prerequisites. Therefore, any student who passes the advanced course must not have struggled with the prerequisites. Statement 4 contradicts this by claiming some students who struggled with the prerequisites passed the advanced course."
  },
  {
    "id": "gen-10-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle has an electric engine, it produces zero emissions.",
      "Only vehicles that produce zero emissions are exempt from city tolls.",
      "Some vehicles are exempt from city tolls.",
      "No vehicle that has a gasoline engine produces zero emissions.",
      "Some vehicles have electric engines and are exempt from city tolls."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 5 indicates some vehicles have electric engines and are exempt from city tolls. Statement 1 confirms electric engines produce zero emissions. Statement 2 (exempt from city tolls only if zero emissions) is consistent with these vehicles producing zero emissions. Statements 3 and 4 are also consistent with this scenario."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a painting is a masterpiece, it is highly valued.",
      "No painting that is highly valued is easily replaceable.",
      "Every painting that is mass-produced is easily replaceable.",
      "Some paintings that are masterpieces are mass-produced."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that masterpieces are highly valued. Statement 2 states that highly valued paintings are not easily replaceable. Thus, masterpieces are not easily replaceable. However, Statement 3 indicates that all mass-produced paintings are easily replaceable. Therefore, any painting that is a masterpiece cannot be mass-produced. Statement 4 contradicts this by claiming some masterpieces are mass-produced."
  },
  {
    "id": "gen-10-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a film features a compelling plot, it will not win critical acclaim.",
      "Every film that wins critical acclaim has a strong screenplay.",
      "No film with a strong screenplay relies heavily on special effects.",
      "Some films that rely heavily on special effects feature a compelling plot.",
      "Not all films that feature a compelling plot win critical acclaim."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Let a film exist that relies heavily on special effects (from Statement 4) and features a compelling plot. From Statement 3's contrapositive, this film does not have a strong screenplay. From Statement 2's contrapositive, this film does not win critical acclaim. This is consistent with Statements 1, 4, and 5."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own sturdy boots.",
      "No one who owns sturdy boots uses lightweight sneakers for trails.",
      "Some members of the hiking club use lightweight sneakers for trails."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all hiking club members own sturdy boots. Statement 2 says no one who owns sturdy boots uses lightweight sneakers for trails. Therefore, it must be true that no members of the hiking club use lightweight sneakers for trails, which directly contradicts Statement 3."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a restaurant serves vegan options, it sources fresh produce.",
      "Some restaurants that source fresh produce do not serve vegan options.",
      "All restaurants that serve vegan options are popular."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for restaurants serving vegan options to source fresh produce and be popular, while other restaurants also source fresh produce but do not serve vegan options. No statement logically precludes another."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student in the drama club takes acting lessons.",
      "No one who takes acting lessons avoids performing in public.",
      "Some students in the drama club avoid performing in public."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every drama club student takes acting lessons. Statement 2 says no one taking acting lessons avoids performing in public. This means all drama club students must perform in public, which directly contradicts Statement 3 that some drama club students avoid performing in public."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All insects with iridescent wings are beautiful creatures.",
      "Some beautiful creatures are not insects.",
      "No insects with iridescent wings are considered pests."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Insects with iridescent wings can be beautiful creatures and not pests, and there can also be other beautiful creatures that are not insects. All statements can simultaneously be true without conflict."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a tree is an oak, its leaves change color in autumn.",
      "Every tree whose leaves change color in autumn is deciduous.",
      "Some oak trees are evergreen."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says if a tree is an oak, its leaves change color in autumn. Statement 2 says all trees whose leaves change color in autumn are deciduous. It logically follows that all oak trees are deciduous, which contradicts Statement 3 that some oak trees are evergreen (meaning not deciduous)."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who completed the marathon felt fully rested afterward.",
      "Some people who felt fully rested afterward had not completed the marathon.",
      "All people who completed the marathon trained for months."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It's consistent for marathon finishers not to feel rested, but to have trained, while other people who felt rested simply didn't finish the marathon. There's no contradiction among these statements."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors have vivid imaginations.",
      "No one with a vivid imagination lacks creativity.",
      "Some successful authors lack creativity."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all successful authors have vivid imaginations. Statement 2 says no one with a vivid imagination lacks creativity. This means all successful authors must possess creativity, which directly contradicts Statement 3 that some successful authors lack creativity."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "Some animals with retractable claws are not felines.",
      "Every feline is a predator.",
      "Some predators do not have retractable claws."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Felines can have retractable claws and be predators, while other animals with retractable claws are not felines. Some predators can also lack retractable claws (e.g., bears). All statements can be true simultaneously."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All buildings on campus have sprinkler systems.",
      "No building with a sprinkler system uses outdated fire alarms.",
      "Some buildings on campus use outdated fire alarms."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all campus buildings have sprinkler systems. Statement 2 says no building with a sprinkler system uses outdated fire alarms. Therefore, it must be true that no buildings on campus use outdated fire alarms, which directly contradicts Statement 3."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2010 has airbags.",
      "Some cars with airbags were manufactured before 2010.",
      "No car manufactured after 2010 requires leaded fuel.",
      "All cars that require leaded fuel were manufactured before 2000."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for newer cars to have airbags and not need leaded fuel, while older cars also have airbags or need leaded fuel. The categories and conditions do not create a logical impossibility when combined."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of the Oakwood district are eligible for the city's green energy rebate.",
      "No one eligible for the city's green energy rebate lives in a house built before 1990.",
      "If a house was built before 1990, its residents are not required to pay the new environmental fee.",
      "Some residents of the Oakwood district live in houses built before 1990."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically establish that all residents of the Oakwood district do not live in a house built before 1990. Statement 4, however, claims that some residents of the Oakwood district do live in houses built before 1990, creating a direct contradiction."
  },
  {
    "id": "gen-12-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artist uses oil paints, they prefer classical techniques.",
      "Every artist who prefers classical techniques has studied Renaissance art.",
      "Some artists have studied Renaissance art but do not prefer classical techniques.",
      "Sarah uses oil paints."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any artist using oil paints has studied Renaissance art. Sarah fits this chain. Statement 3 indicates that some artists who studied Renaissance art don't prefer classical techniques, which is consistent because not all who studied Renaissance art must prefer classical techniques, nor must they use oil paints. There is no contradiction."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All managers with direct reports attend the weekly team meeting.",
      "If someone attends the weekly team meeting, they must submit a progress report by Friday.",
      "No one who fails to submit a progress report by Friday has direct reports.",
      "There is at least one manager who has direct reports but does not submit a progress report by Friday."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all managers with direct reports must submit a progress report by Friday. Statement 3 reinforces this by stating that anyone who fails to submit a progress report by Friday does not have direct reports. Statement 4 directly contradicts this conclusion by asserting that some managers have direct reports but do not submit a progress report by Friday."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a dog is a purebred Golden Retriever, it has a gentle temperament.",
      "No dog with a gentle temperament is aggressive towards strangers.",
      "Some dogs that are aggressive towards strangers are not purebred Golden Retrievers.",
      "Buddy is a purebred Golden Retriever."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that Buddy, being a purebred Golden Retriever, has a gentle temperament and is not aggressive towards strangers. Statement 3 allows for the existence of aggressive dogs that are not purebred Golden Retrievers, which does not conflict with Buddy's characteristics or the other rules. All statements can be true simultaneously."
  },
  {
    "id": "gen-12-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every book published by \"Arcadia Press\" features a historical fiction narrative.",
      "If a book features a historical fiction narrative, it is always reviewed by a history scholar.",
      "No book reviewed by a history scholar contains speculative elements.",
      "\"The Time Weaver,\" published by Arcadia Press, contains speculative elements."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a book is published by Arcadia Press, then it features a historical fiction narrative, which means it is reviewed by a history scholar, and therefore it does not contain speculative elements. This implies that no book published by Arcadia Press contains speculative elements. Statement 4 directly contradicts this by stating that 'The Time Weaver,' published by Arcadia Press, does contain speculative elements."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird builds its nest on a cliff face, it is a raptor.",
      "All raptors have sharp talons.",
      "Some birds with sharp talons do not build their nests on cliff faces.",
      "A bald eagle has sharp talons."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 indicate that birds building nests on cliff faces are raptors and have sharp talons. Statement 3 is consistent, as it simply states that not all birds with sharp talons must build nests on cliff faces. Statement 4 is a fact about a bald eagle, which can be consistent with all other statements (a bald eagle could be a raptor with sharp talons, and may or may not build a nest on a cliff face). All statements can be true."
  },
  {
    "id": "gen-12-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students attending the summer workshop receive a certificate of completion.",
      "No student who receives a certificate of completion is required to submit a final project.",
      "If a student is required to submit a final project, they attended the summer workshop.",
      "Sarah attended the summer workshop and was required to submit a final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all students attending the summer workshop receive a certificate of completion, and therefore are not required to submit a final project. This implies that no student who attended the summer workshop is required to submit a final project. Statement 4, however, asserts that Sarah attended the summer workshop AND was required to submit a final project, which is a direct contradiction. Statement 3, if true, further reinforces the idea that if a final project is required, the student must have attended the workshop, leading to the same contradiction when combined with Sarah's situation."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful negotiation involves clear communication.",
      "If a negotiation involves clear communication, then all parties feel respected.",
      "Some negotiations where all parties feel respected do not involve clear communication.",
      "The recent contract discussion was a successful negotiation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any successful negotiation involves clear communication and results in all parties feeling respected. The recent contract discussion, being a successful negotiation, aligns with this. Statement 3 allows for situations where parties feel respected without clear communication, which does not contradict any other statement. All statements can be true simultaneously."
  },
  {
    "id": "gen-12-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All trees in the municipal park are native species.",
      "No native species of tree requires special soil conditions.",
      "If a tree requires special soil conditions, it is not found in the municipal park.",
      "There is at least one tree in the municipal park that requires special soil conditions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all trees in the municipal park are native species, and therefore do not require special soil conditions. This implies that no tree in the municipal park requires special soil conditions. Statement 3 is consistent with this. However, Statement 4 directly contradicts this conclusion by asserting that there is at least one tree in the municipal park that does require special soil conditions."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a masterpiece, it commands a high price at auction.",
      "No artwork that commands a high price at auction is easily acquired by private collectors.",
      "Some artworks that are easily acquired by private collectors are not masterpieces.",
      "\"The Azure Gaze\" is an artwork that commands a high price at auction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that if an artwork is a masterpiece, it commands a high price at auction and is not easily acquired by private collectors. Statement 4 indicates 'The Azure Gaze' commands a high price, which is consistent. Statement 3 is also consistent, as it states that some easily acquired artworks are not masterpieces, which doesn't contradict that masterpieces are not easily acquired. All statements can be true together."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members supported the proposal.",
      "No one who supported the proposal voted against the budget.",
      "At least one committee member voted against the budget."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that all committee members did not vote against the budget. This directly contradicts Statement 3, which claims that at least one committee member did vote against the budget."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every cat in the shelter is black or white.",
      "Some black cats in the shelter have green eyes.",
      "No cat in the shelter has both green eyes and blue eyes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for a cat to be black, have green eyes, and therefore not have blue eyes. Other cats could be white or black without green eyes, maintaining consistency across all statements."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the exam attended every lecture.",
      "No student who attended every lecture failed the exam.",
      "Some students who did not attend every lecture passed the exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that a student passed the exam if and only if they attended every lecture. Therefore, no student who did not attend every lecture could have passed the exam. This directly contradicts Statement 3."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book in this library is either a novel or a history text.",
      "Some history texts in this library are very old.",
      "No novel in this library is very old."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All books are classified as either novels or history texts. While some history texts can be old, novels are never old. This situation is entirely possible; for example, the very old books would simply be history texts."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with a management title receive annual bonuses.",
      "No employee who receives an annual bonus has a part-time contract.",
      "Some employees with a management title have a part-time contract."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combined logically lead to the conclusion that no employee with a management title has a part-time contract. This directly contradicts Statement 3, which asserts that some employees with a management title do have a part-time contract."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in the aviary has brightly colored feathers.",
      "Some birds with brightly colored feathers are finches.",
      "No bird that is a finch has a long tail."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All birds in the aviary have brightly colored feathers. Some of these can be finches, and those finches would not have long tails. Other brightly feathered birds might or might not have long tails, maintaining consistency."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All paintings in the gallery are abstract art.",
      "No abstract art contains realistic portraits.",
      "Some paintings in the gallery contain realistic portraits."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no painting in the gallery contains realistic portraits. This directly contradicts Statement 3, which states that some paintings in the gallery do contain realistic portraits."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every member of the hiking club owns sturdy boots.",
      "Some people who own sturdy boots do not belong to the hiking club.",
      "No member of the hiking club owns running shoes exclusively."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All hiking club members have sturdy boots, and some people outside the club also have sturdy boots. Club members can own running shoes, as long as they also own sturdy boots, meaning they don't own running shoes *exclusively*. All statements can be true simultaneously."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every journalist covering the trial has access to restricted documents.",
      "No one with access to restricted documents is permitted to interview the jury.",
      "Some journalists covering the trial are permitted to interview the jury."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combined logically establish that no journalist covering the trial is permitted to interview the jury. This directly contradicts Statement 3, which claims that some journalists covering the trial are permitted to interview the jury."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits with seeds inside are berries.",
      "Some berries are poisonous.",
      "No poisonous fruit has a thin skin."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It's possible for all fruits with seeds to be berries, some berries to be poisonous, and for those poisonous berries to lack a thin skin. Other berries might not be poisonous and could have thin or thick skin. All conditions can coexist."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful inventors are creative.",
      "No one who lacks funding is a successful inventor.",
      "Some highly creative people lack funding.",
      "Every highly creative person is a successful inventor."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 indicates that there are some people who are both highly creative and lack funding. Statement 4 says every highly creative person is a successful inventor, implying these people are also successful inventors. However, Statement 2 claims no one who lacks funding is a successful inventor, which directly contradicts the existence of successful inventors who lack funding."
  },
  {
    "id": "gen-14-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All owls are birds.",
      "No birds are mammals.",
      "Some mammals lay eggs.",
      "Some creatures that lay eggs are not owls."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Owls are a type of bird, and birds are not mammals. Mammals can lay eggs (e.g., platypuses). Some creatures that lay eggs are not owls; for example, a mammal that lays eggs, or a reptile, would fit this description without contradiction."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a tropical plant.",
      "All tropical plants need warm temperatures to survive.",
      "No plant that needs warm temperatures can survive in an arctic climate.",
      "The new orchid variety requires daily watering.",
      "This new orchid variety can survive in an arctic climate."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "From Statement 4, the orchid requires daily watering. Statements 1, 2, and 3 create a chain: requires daily watering → tropical plant → needs warm temperatures → cannot survive in an arctic climate. Therefore, the orchid cannot survive in an arctic climate. This directly contradicts Statement 5, which claims the orchid can survive in an arctic climate."
  },
  {
    "id": "gen-14-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "Some people with strong leadership skills are not entrepreneurs.",
      "No one who lacks innovative ideas can be a successful entrepreneur.",
      "Maria possesses strong leadership skills but lacks innovative ideas."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 3 and 4, Maria lacks innovative ideas, so she cannot be a successful entrepreneur. This is consistent with Statement 1 (which only applies to successful entrepreneurs) and Statement 2 (Maria is an example of someone with leadership skills who is not an entrepreneur)."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All paintings from the Renaissance era are masterworks.",
      "No masterworks are ignored by art critics.",
      "Some works ignored by art critics are Renaissance paintings.",
      "Every painting from the Renaissance era is displayed in a museum."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims there are Renaissance paintings that are ignored by art critics. However, Statement 1 states all Renaissance paintings are masterworks, and Statement 2 says no masterworks are ignored by art critics. This forms a chain (Renaissance painting → masterwork → not ignored by art critics), directly contradicting Statement 3."
  },
  {
    "id": "gen-14-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it is a carnivore.",
      "All carnivores have sharp teeth.",
      "No animal with sharp teeth is a herbivore.",
      "The newly discovered creature is a feline, but it is not a herbivore."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 4, the creature is a feline. Following the chain: feline → carnivore (Statement 1) → has sharp teeth (Statement 2) → is not a herbivore (Statement 3). The conclusion that the creature is not a herbivore is explicitly stated in Statement 4, so no contradiction exists."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club participate in tournaments.",
      "No one who participates in tournaments dislikes chess.",
      "Some members of the chess club dislike chess."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 asserts that some members of the chess club dislike chess. However, Statement 1 indicates all chess club members participate in tournaments, and Statement 2 says no one who participates in tournaments dislikes chess. This implies all chess club members do not dislike chess, which directly contradicts Statement 3."
  },
  {
    "id": "gen-14-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "No fish have feathers.",
      "Some fish can fly.",
      "Some creatures that can fly are not birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 3 (some fish can fly) and Statement 4 (some creatures that can fly are not birds) can both be true, with flying fish being an example. Statements 1 and 2 simply define properties of birds and fish concerning feathers, which are not contradicted."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A student receives a scholarship only if they pass the advanced course.",
      "No student who misses more than two lectures can pass the advanced course.",
      "All students enrolled in the advanced course received a scholarship.",
      "Some students enrolled in the advanced course missed more than two lectures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 identifies some students who are enrolled in the advanced course and missed more than two lectures. From Statement 2, missing more than two lectures means they cannot pass the course. From Statement 3, all enrolled students received a scholarship. Therefore, these specific students received a scholarship without passing the course, which contradicts Statement 1 (scholarships are only for those who pass)."
  },
  {
    "id": "gen-14-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have published at least three books.",
      "Some people who have published at least three books are not successful authors.",
      "No one who writes only short stories has published at least three books.",
      "Maria is a successful author who occasionally writes short stories."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 4, Maria is a successful author. Statement 1 dictates she must have published at least three books. Statement 3 applies only to those who write *only* short stories; Maria occasionally writes them but is not limited to them, so she could still have published three books (e.g., novels). Statement 2 simply clarifies that publishing three books doesn't guarantee success, which is fine."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the lecture, they take notes.",
      "No student who takes notes misses the review session.",
      "All students enrolled in the course attend the lecture.",
      "Some students enrolled in the course miss the review session."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a student is enrolled, they attend the lecture (3), which means they take notes (1), and therefore they do not miss the review session (2). This implies all enrolled students do not miss the review session. Statement 4 contradicts this by claiming some enrolled students do miss the review session."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every painting in the exhibition was created by a modern artist.",
      "No work by a modern artist features ancient mythology.",
      "Some paintings in the exhibition feature ancient mythology."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that every painting in the exhibition was created by a modern artist (1), and therefore none of them feature ancient mythology (2). Statement 3 directly contradicts this by asserting that some paintings in the exhibition do feature ancient mythology."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student in the advanced class attended the seminar.",
      "Every student who attended the seminar wrote an essay.",
      "No student who wrote an essay failed the course.",
      "Some students in the advanced class failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: all students in the advanced class attended the seminar (1), which means they all wrote an essay (2), and consequently none of them failed the course (3). This implies that no student in the advanced class failed the course. Statement 4 directly contradicts this by claiming that some students in the advanced class did fail the course."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a machine requires daily maintenance, it is expensive to operate.",
      "No expensive machines are energy-efficient.",
      "All newly installed machines are energy-efficient.",
      "Some newly installed machines require daily maintenance."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that any machine requiring daily maintenance is expensive, and thus not energy-efficient. Statement 3 states that all newly installed machines are energy-efficient. Statement 4 claims that some newly installed machines require daily maintenance. This creates a contradiction: if a newly installed machine requires daily maintenance (4), it cannot be energy-efficient (1 & 2), but all newly installed machines are energy-efficient (3)."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant who completed the marathon felt exhausted.",
      "No one who felt exhausted attended the awards ceremony.",
      "If a participant ran faster than four hours, they completed the marathon.",
      "Some participants who ran faster than four hours attended the awards ceremony."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a participant ran faster than four hours (3), they completed the marathon, which means they felt exhausted (1), and therefore did not attend the awards ceremony (2). This implies no participant who ran faster than four hours attended the awards ceremony. Statement 4 directly contradicts this by claiming some participants who ran faster than four hours did attend the awards ceremony."
  }
];

export default generatedPuzzles;
