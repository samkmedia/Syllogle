// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All chefs who work at the bistro are also bakers.",
      "No baker has formal pastry training.",
      "Several chefs at the bistro have formal pastry training."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all bistro chefs are bakers, and Statement 2 says no baker has pastry training. Together, these mean no chef at the bistro has pastry training. This directly contradicts Statement 3, which claims that some chefs there do have pastry training."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every hardcover book on the top shelf is a work of fiction.",
      "Some works of fiction are not hardcover books.",
      "All books on the top shelf are library property."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. The statements establish that all hardcover books on the top shelf are fiction and belong to the library. The fact that some fiction books are not hardcover (e.g., paperbacks on another shelf) does not create a contradiction."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Any runner who completes a marathon is not a sprinter.",
      "All runners on the university team completed a marathon.",
      "Every sprinter on the university team trains daily.",
      "Some runners on the university team are sprinters."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 2, all university runners completed a marathon. From Statement 1, any runner who completes a marathon is not a sprinter. Therefore, no runner on the university team can be a sprinter. This contradicts Statement 4, which says some runners on the team are sprinters."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every pilot with a commercial license has passed a flight exam.",
      "Some pilots with a commercial license do not have helicopter training.",
      "All pilots with helicopter training have passed a flight exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. It is possible for every pilot with a commercial license and every pilot with helicopter training to have passed a flight exam, while some with a commercial license lack helicopter training. For example, a licensed airplane pilot without helicopter training fits all criteria."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No electronic gadget is completely waterproof.",
      "Every gadget sold at the tech store is electronic.",
      "All battery-powered gadgets are sold at the tech store.",
      "Some of the new gadgets are both battery-powered and waterproof."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All battery-powered gadgets are sold at the tech store, all tech store gadgets are electronic, and no electronic gadget is waterproof. Therefore, no battery-powered gadget is waterproof. This conflicts with Statement 4, which states that some gadgets are both."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All managers are salaried employees.",
      "Some employees who attended the meeting are not managers.",
      "Every salaried employee attended the meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. From statements 1 and 3, we can deduce that all managers attended the meeting. Statement 2, which says some meeting attendees were not managers, is perfectly compatible with this, as the meeting could have included both managers and other non-manager employees."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Unless a painting is on canvas, it is not an oil painting.",
      "Every framed painting in the gallery is an oil painting.",
      "Some of the framed paintings in the gallery are not on canvas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 is equivalent to \"All oil paintings are on canvas.\" Statement 2 says all framed paintings are oil paintings. Combining these, we conclude that all framed paintings in the gallery must be on canvas. This contradicts Statement 3."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car is a vehicle with four wheels.",
      "Some registered vehicles are not cars.",
      "Every vehicle with four-wheel drive is registered.",
      "Some cars have four-wheel drive."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. From statements 4 and 3, some cars have four-wheel drive, and all such vehicles are registered, so at least some cars are registered. Statement 2 says some registered vehicles are not cars (e.g., trucks), which does not conflict with the fact that some registered vehicles *are* cars."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Any student who is a graduate is employed.",
      "No intern is employed.",
      "All of the students from the spring cohort are interns.",
      "Every student from the spring cohort is a graduate."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3 and 4 mean all spring cohort students are both interns and graduates. But Statement 1 requires all graduates to be employed, while Statement 2 requires all interns to be not employed. This leads to the contradiction that the entire spring cohort is both employed and not employed."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All pets are domesticated animals.",
      "Some mammals are not pets.",
      "Every pet is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. The statements establish that 'pets' are a sub-category of 'mammals'. The fact that some mammals are not pets (like wild animals) is fully compatible with this structure. That all pets are also domesticated does not create a conflict."
  },
  {
    "id": "gen-2-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project is greenlit, it requires a budget review.",
      "Any project requiring a budget review is assigned to the senior team.",
      "All marketing projects are fast-tracked.",
      "No project assigned to the senior team is fast-tracked.",
      "At least one greenlit project is also a marketing project."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 introduces a project that is both greenlit and for marketing. From statements 1 and 2, this project must be assigned to the senior team. From statement 3, it must be fast-tracked. However, statement 4 makes these two outcomes mutually exclusive."
  },
  {
    "id": "gen-2-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All hardcover books are placed in the 'New Arrivals' section.",
      "Any book in the 'New Arrivals' section receives a promotional discount.",
      "No textbook receives a promotional discount.",
      "Some books sold in the store are textbooks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. From statements 1 and 2, all hardcovers get a discount. Statement 3 says no textbooks get a discount. This simply implies that no book can be both a hardcover and a textbook, which is a possible scenario."
  },
  {
    "id": "gen-2-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every perennial plant has deep roots.",
      "Any plant with deep roots blooms in the summer.",
      "No alpine species blooms in the summer.",
      "Some plants in the greenhouse are both alpine species and perennial plants."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 describes a plant that is both an alpine species and a perennial. Following statements 1 and 2, as a perennial, this plant must have deep roots and bloom in the summer. This directly contradicts statement 3, which asserts no alpine species blooms in the summer."
  },
  {
    "id": "gen-2-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "An employee can vote on the proposal only if they attend the meeting.",
      "Unless an employee is on the board of directors, they do not receive the memo.",
      "Everyone who attends the meeting receives the memo.",
      "Some employees on the board of directors did not attend the meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The rules are consistent. The logic chain is: Vote (Statement 1) → Attend Meeting (Statement 3) → Receive Memo (contrapositive of Statement 2) → On Board. Statement 4 describes a board member who doesn't attend, which simply means they cannot vote, creating no contradiction."
  },
  {
    "id": "gen-2-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every physics major is required to take Calculus III.",
      "All students who take Calculus III must enroll in the advanced lab.",
      "All students in the advanced lab are eligible for the research grant.",
      "Some physics majors are not eligible for the research grant."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "The first three statements create a logical chain: Physics Major → Calculus III → Advanced Lab → Eligible for Grant. This implies all physics majors are eligible for the grant. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-2-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees in the sales department have access to the client database.",
      "Anyone with access to the client database must attend security training.",
      "No temporary contractor is required to attend security training.",
      "Some temporary contractors are assigned to the sales department."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 introduces a temporary contractor in the sales department. According to statements 1 and 2, this person must have database access and attend security training. However, statement 3 forbids any temporary contractor from attending this training, resulting in a contradiction."
  },
  {
    "id": "gen-2-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee is a chef, they work in the main kitchen.",
      "Anyone who works in the main kitchen must wear a white coat.",
      "No employee who works in the pastry section wears a white coat.",
      "Some chefs are also trained as pastry specialists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true. A chef trained as a pastry specialist still works in the main kitchen (Statement 1) and wears a white coat (Statement 2). Statement 3 applies to employees working *in the pastry section*, and being trained as a specialist doesn't mean the chef works in that section."
  },
  {
    "id": "gen-2-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every SUV produced by the factory has all-wheel drive.",
      "Any vehicle with all-wheel drive is rated for off-road use.",
      "All hybrid models have a continuously variable transmission.",
      "No vehicle with a continuously variable transmission is rated for off-road use.",
      "Some of the SUVs produced by the factory are hybrid models."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 posits a vehicle that is both an SUV and a hybrid. From statements 1 and 2, this vehicle must be rated for off-road use. But from statements 3 and 4, as a hybrid, it has a transmission that means it cannot be rated for off-road use, a direct contradiction."
  },
  {
    "id": "gen-2-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All contracts are reviewed by the legal team.",
      "If a document is reviewed by the legal team, it requires a notarized signature.",
      "No internal memo requires a notarized signature.",
      "Some documents reviewed by the legal team are not internal memos."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are compatible. From statements 1 and 2, all contracts require a notarized signature. Statement 3 says internal memos do not. This just means contracts cannot be internal memos. Statement 4 is consistent with this, as the set of contracts can exist within the group of reviewed documents that are not memos."
  },
  {
    "id": "gen-2-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every musician in the conservatory plays a classical instrument.",
      "Some musicians who play a classical instrument perform in the orchestra.",
      "No one who performs in the orchestra is a jazz soloist.",
      "Some musicians who play a classical instrument are also jazz soloists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. The group of 'musicians who play a classical instrument' can be split into subgroups. Some are in the orchestra and are not jazz soloists (per statements 2 and 3), while a separate subgroup consists of jazz soloists who are not in the orchestra (per statement 4)."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All parrots are birds that can mimic speech.",
      "No bird that lives in the deep jungle can mimic speech.",
      "Some of the parrots sold at the pet store live in the deep jungle."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "According to Statement 3, some parrots live in the deep jungle. Statement 1 says these parrots can mimic speech, but Statement 2 says that no bird living in the deep jungle can mimic speech. This is a direct contradiction."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All of the tools in the red box are hammers.",
      "Some hammers are made of steel.",
      "Some of the tools in the red box are not made of steel."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. The hammers made of steel mentioned in Statement 2 do not have to be the same hammers that are in the red box. The hammers in the red box could all be made of a different material, like titanium."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every person on the marketing team is a salaried employee.",
      "Any salaried employee is eligible for a bonus.",
      "No one eligible for a bonus works on weekends.",
      "Some people on the marketing team work on weekends."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statements 1, 2, and 3, it follows that everyone on the marketing team is a salaried employee, is eligible for a bonus, and therefore does not work on weekends. This derived rule, that no one on the marketing team works on weekends, directly contradicts Statement 4."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student is in the advanced class, they must submit a thesis.",
      "No student who is on academic probation has to submit a thesis.",
      "Some students in the advanced class are not on academic probation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set is consistent. The students in the advanced class who are not on probation must submit a thesis, according to Statement 1. This does not conflict with Statement 2, which applies to a different group of students (those on probation)."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All architects are designers.",
      "All designers use drafting software.",
      "Some of the new hires are architects.",
      "None of the new hires use drafting software."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, some new hires are architects. Following the chain in Statements 1 and 2, these new hires must be designers who use drafting software. This conclusion, that some new hires use drafting software, directly contradicts Statement 4."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All pianists are musicians.",
      "No sculptor is a musician.",
      "Laura is a pianist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statements 1 and 3, we know Laura is a musician. From Statement 2, we can then conclude that Laura is not a sculptor. There is no contradiction."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All interns work in the mailroom.",
      "Anyone who works in the mailroom has a level-one security pass.",
      "All employees with a level-one security pass are junior staff.",
      "Some of the interns are not junior staff."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: all interns work in the mailroom, have a level-one pass, and are therefore junior staff. The conclusion that all interns are junior staff contradicts the claim in Statement 4 that some are not."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Any book on the top shelf is a work of fiction.",
      "Some of the hardcover books are not works of fiction.",
      "Some of the books on the top shelf are hardcover books."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This is consistent. The hardcover books on the top shelf must be fiction (by Statement 1). The hardcover books that are not fiction (from Statement 2) must simply be on a different shelf."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All of the library's history books are leather-bound.",
      "Every book in the special collection is a history book.",
      "No paperback book is leather-bound.",
      "Some books in the special collection are paperbacks."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 says some books in the special collection are paperbacks; Statement 3 says these books cannot be leather-bound. However, Statement 2 says all special collection books are history books, and Statement 1 says all history books are leather-bound. This creates a contradiction."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No documentary film is a comedy.",
      "All of the director's movies are documentary films.",
      "Some of the movies shown at the festival were the director's movies."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From the statements, we can conclude that some movies shown at the festival were documentary films by the director, and therefore were not comedies. This conclusion does not contradict any of the given information."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every lawyer has a college degree.",
      "No one with a college degree has skipped high school.",
      "Some lawyers have skipped high school."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that every lawyer has a college degree. Statement 2 says that no one with a college degree has skipped high school. Together, these two statements imply that no lawyer has skipped high school. This directly contradicts Statement 3, which claims some lawyers have skipped high school. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups require significant investment.",
      "Some businesses that require significant investment fail.",
      "No business that fails is considered a successful startup.",
      "Every startup founded by Maria requires significant investment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Successful startups require significant investment (Statement 1) and do not fail (Statement 3). Some businesses that require significant investment do fail (Statement 2), but these are not successful startups. Maria's startups require significant investment (Statement 4) and could be either successful or among those that fail, without contradicting any other statement."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who complete the final project pass the course.",
      "No student who misses more than two lectures completes the final project.",
      "Every student who passes the course is eligible for advanced study.",
      "Some students eligible for advanced study missed more than two lectures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 says students who miss more than two lectures do not complete the final project. Statement 1 says all students who complete the final project pass the course (thus, students who don't complete it don't pass it). Statement 3 says every student who passes the course is eligible for advanced study (thus, students who don't pass aren't eligible for advanced study). Chaining these, students who miss more than two lectures (from Statement 2) do not complete the final project, thus do not pass the course, thus are not eligible for advanced study. This conclusion directly contradicts Statement 4, which claims some students eligible for advanced study missed more than two lectures. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All registered voters are at least eighteen years old.",
      "No one under eighteen years old can legally purchase alcohol.",
      "Some people who can legally purchase alcohol are not registered voters.",
      "Emily is a registered voter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. Registered voters are 18+ (Statement 1). Those who can purchase alcohol must be 18+ (derived from Statement 2). It's possible for some people to be 18+ and purchase alcohol but not be registered voters (Statement 3), for instance, if they simply chose not to register. Emily, as a registered voter (Statement 4), is 18+ and can legally purchase alcohol, consistent with all other statements."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every participant in the conference holds a doctoral degree.",
      "No one holding a doctoral degree is an undergraduate student.",
      "All researchers presenting at the conference are participants.",
      "At least one researcher presenting at the conference is an undergraduate student."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates all presenting researchers are participants. Statement 1 indicates every participant holds a doctoral degree. Statement 2 indicates no one holding a doctoral degree is an undergraduate student. Chaining these, it follows that no researcher presenting at the conference is an undergraduate student. This conclusion directly contradicts Statement 4, which claims at least one researcher presenting at the conference is an undergraduate student. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All fruits that ripen in summer are berries.",
      "Some fruits that grow on a vine are not berries.",
      "No fruit that ripens in summer grows on a vine.",
      "Grapes ripen in summer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Fruits that ripen in summer are berries (Statement 1) and do not grow on vines (Statement 3). Some vine-growing fruits are not berries (Statement 2), which is consistent because these fruits cannot be summer-ripening berries. Grapes ripen in summer (Statement 4), so they are berries and do not grow on vines, which is consistent with the other statements (even if many grapes *do* grow on vines, this logical structure allows for a scenario where these particular 'grapes' are not vine-grown according to the rules)."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All applicants for the advanced grant have successfully completed a prior research project.",
      "No one who has successfully completed a prior research project needs to submit supplementary materials.",
      "Every applicant for the advanced grant must submit supplementary materials."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all applicants for the advanced grant have completed a prior research project. Statement 2 says no one who has completed a prior research project needs to submit supplementary materials. Together, these two statements imply that no applicant for the advanced grant needs to submit supplementary materials. This directly contradicts Statement 3, which claims every applicant for the advanced grant must submit supplementary materials. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All fruits rich in Vitamin C are citrus fruits.",
      "No citrus fruit contains high levels of natural sugar.",
      "Some fruits with high levels of natural sugar are berries.",
      "Blueberries are berries."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Fruits rich in Vitamin C are citrus (Statement 1), and citrus fruits do not have high levels of natural sugar (Statement 2). This means fruits rich in Vitamin C do not have high levels of natural sugar. Statement 3 claims some fruits with high levels of natural sugar are berries; these berries, by extension, cannot be citrus fruits or rich in Vitamin C. Blueberries are berries (Statement 4) and could be among those with high natural sugar or not, without contradicting any other statement."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A species is considered endangered unless its population has stabilized.",
      "No species with a stable population faces habitat loss.",
      "Every endangered species requires conservation efforts.",
      "Some species facing habitat loss do not require conservation efforts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that if a species' population has not stabilized, it is endangered. Statement 3 says every endangered species requires conservation efforts. Therefore, if a species' population has not stabilized, it requires conservation efforts. Statement 2 says no species with a stable population faces habitat loss, which implies that if a species faces habitat loss, its population has not stabilized. Chaining these three implications: If a species faces habitat loss (from Statement 2's contrapositive), then its population has not stabilized (from Statement 2), then it is endangered (from Statement 1), and thus it requires conservation efforts (from Statement 3). So, every species facing habitat loss requires conservation efforts. This directly contradicts Statement 4, which claims some species facing habitat loss do not require conservation efforts. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All participants in the advanced workshop are experienced researchers.",
      "No experienced researcher requires direct supervision.",
      "Some individuals who require direct supervision are new employees.",
      "Emily is an experienced researcher."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Participants in the advanced workshop are experienced researchers (Statement 1), and experienced researchers do not require direct supervision (Statement 2). This implies advanced workshop participants do not require direct supervision. Some individuals who require direct supervision are new employees (Statement 3), meaning these new employees are not experienced researchers. Emily is an experienced researcher (Statement 4), so she does not require direct supervision. These facts are all consistent."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a robin, then it has a red breast.",
      "Birds with red breasts always migrate south for winter.",
      "No bird that migrates south for winter stays in this forest year-round.",
      "There is at least one robin that stays in this forest year-round."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all robins migrate south for winter. Statement 3 then means that no bird that migrates south for winter stays in this forest year-round. Therefore, no robin stays in this forest year-round, which directly contradicts Statement 4."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is enrolled in the advanced calculus course, they have passed Algebra II.",
      "Every student who passed Algebra II scored well on the placement exam.",
      "Some students who scored well on the placement exam are not enrolled in advanced calculus.",
      "No student who failed the placement exam is allowed to enroll in Algebra II."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 establish that all advanced calculus students passed Algebra II and scored well. Statement 3 indicates there are students who scored well but aren't in advanced calculus, which is consistent. Statement 4 is a restatement of Statement 2 by contrapositive and adds no new contradictory information."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A plant will flower only if it receives ample sunlight.",
      "Unless a plant is watered daily, it will not receive ample sunlight.",
      "Every plant that receives special nutrients is a plant that flowers.",
      "At least one plant receives special nutrients but is never watered daily."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that if a plant flowers, it must receive ample sunlight and therefore must be watered daily. Statement 3 states that all plants receiving special nutrients flower. Thus, any plant receiving special nutrients must be watered daily, which contradicts Statement 4."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members approved the budget proposal.",
      "If a person approved the budget proposal, they attended the last meeting.",
      "Some people who attended the last meeting are not committee members.",
      "No one who failed to attend the last meeting approved the budget proposal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all committee members approved the budget and attended the meeting. Statement 3 is consistent, as not all meeting attendees need to be committee members. Statement 4 is the contrapositive of Statement 2 and does not introduce new information or a contradiction."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes all assignments, they will pass the course.",
      "No student who misses more than two lectures will complete all assignments.",
      "Every student who passes the course is eligible for the honors program.",
      "Some students are eligible for the honors program, even though they missed more than two lectures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that any student who misses more than two lectures will not complete all assignments and therefore will not pass the course. Statement 3 states that only students who pass the course are eligible for the honors program. Therefore, students who miss more than two lectures cannot be eligible for the honors program, which directly contradicts Statement 4."
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a painting is a masterpiece, then it will be exhibited in a national gallery.",
      "Every painting exhibited in a national gallery is insured for a high value.",
      "Some paintings insured for a high value are not masterpieces.",
      "No painting that is not insured for a high value will be exhibited in a national gallery."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all masterpieces are exhibited in a national gallery and are insured for a high value. Statement 3 is consistent, as there can be highly insured paintings that are not masterpieces. Statement 4 is the contrapositive of Statement 2 and presents no contradiction."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus also exceed their sales targets.",
      "If an employee exceeds their sales targets, they are eligible for a promotion.",
      "No employee who works part-time is eligible for a promotion.",
      "There is at least one employee who works part-time and receives a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that any employee receiving a bonus will exceed sales targets and thus be eligible for a promotion. Statement 3 states that part-time employees are never eligible for a promotion. Therefore, a part-time employee cannot receive a bonus, which directly contradicts Statement 4."
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a machine requires maintenance, its performance will decline.",
      "Machines whose performance declines are always less efficient.",
      "Some machines are less efficient, but do not require maintenance.",
      "No machine that is not less efficient has a declining performance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that any machine requiring maintenance will have declining performance and be less efficient. Statement 3 is consistent, as machines can be less efficient for reasons other than requiring maintenance. Statement 4 is the contrapositive of Statement 2 and introduces no inconsistency."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles in the garage are inspected annually.",
      "If a vehicle is inspected annually, it must pass a safety check.",
      "No vehicle that has a faulty brake system can pass a safety check.",
      "Some vehicles with faulty brake systems are in the garage."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all vehicles in the garage are inspected annually and must pass a safety check. Statement 3 indicates that vehicles with faulty brake systems cannot pass a safety check. Therefore, no vehicle with a faulty brake system can be in the garage, which directly contradicts Statement 4."
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A student will graduate only if they complete their thesis.",
      "Unless a student attends weekly seminars, they cannot complete their thesis.",
      "All students who attend weekly seminars submit a final project.",
      "No student who fails to submit a final project is permitted to graduate.",
      "There is at least one student who graduates, but never attends weekly seminars."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 2 logically imply that if a student graduates, they must complete their thesis, and therefore must attend weekly seminars. This means all graduating students attend weekly seminars. Statement 5 directly contradicts this by asserting that at least one student graduates but never attends weekly seminars."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy playing fetch.",
      "No animal that enjoys playing fetch dislikes water.",
      "Some dogs dislike water."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all dogs enjoy playing fetch. Statement 2 implies that no animal that enjoys playing fetch dislikes water. Combining these, it follows that all dogs do not dislike water. This directly contradicts Statement 3, which asserts that some dogs do dislike water."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "Some risk-takers are not successful entrepreneurs.",
      "Laura is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 indicates that Laura is a successful entrepreneur. According to Statement 1, this means Laura is also a risk-taker. Statement 2 allows for the existence of risk-takers who are not successful entrepreneurs, which does not create any conflict with Laura's status or the other statements."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruits containing seeds are berries.",
      "No berry is a vegetable.",
      "Some vegetables contain seeds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all fruits containing seeds are berries. Statement 2 asserts that no berry is a vegetable. Therefore, it must be true that no fruit containing seeds is a vegetable. This directly contradicts Statement 3, which claims that some vegetables contain seeds."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a fern.",
      "Some ferns do not require daily watering.",
      "No fern grows well in direct sunlight.",
      "This plant grows well in direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 3, if a plant grows well in direct sunlight, it cannot be a fern. Statement 4 indicates that this plant grows well in direct sunlight, so it is not a fern. This conclusion is consistent with all other statements, as the plant would not require daily watering (from Statement 1's contrapositive) and Statement 2 simply notes that some ferns don't need daily watering, which is possible."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the final exam also completed the optional project.",
      "No student who completed the optional project received a failing grade.",
      "Every student in the class passed the final exam.",
      "At least one student in the class received a failing grade."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every student in the class passed the final exam. According to Statement 1, this means every student in the class completed the optional project. Statement 2 then implies that no student in the class received a failing grade. This conclusion contradicts Statement 4, which states that at least one student in the class received a failing grade."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mammals have fur.",
      "Some animals with fur are not mammals.",
      "No reptile has fur.",
      "This animal is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 4 establishes that this animal is a mammal. Statement 1 means that this animal has fur. Statement 2 allows for animals with fur that are not mammals, which doesn't conflict. Statement 3 asserts that no reptile has fur, which is consistent with mammals having fur and this animal being a mammal."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful politician has strong public speaking skills.",
      "No one with strong public speaking skills is afraid of large crowds.",
      "Some successful politicians are afraid of large crowds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that every successful politician has strong public speaking skills. Statement 2 implies that no one with strong public speaking skills is afraid of large crowds. Therefore, it follows that no successful politician is afraid of large crowds. This directly contradicts Statement 3, which claims that some successful politicians are afraid of large crowds."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird can fly, it has hollow bones.",
      "No bird with hollow bones is flightless.",
      "Some birds are flightless."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 implies that all birds with hollow bones can fly. Combined with Statement 1, this means that a bird flies if and only if it has hollow bones. Statement 3 states that some birds are flightless, which means they do not fly and thus do not have hollow bones, creating no contradiction with the other statements."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend the weekly video meeting.",
      "No employee who attends the weekly video meeting misses their deadlines.",
      "Some employees who work remotely miss their deadlines."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all employees who work remotely attend the weekly video meeting. Statement 2 implies that no employee who attends the weekly video meeting misses their deadlines. Therefore, it follows that no employee who works remotely misses their deadlines. This directly contradicts Statement 3, which claims that some employees who work remotely miss their deadlines."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful artist has a unique style.",
      "No artist with a unique style is overlooked by critics.",
      "Some artists are overlooked by critics."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 indicates that some artists are overlooked by critics. From the contrapositive of Statement 2, if an artist is overlooked by critics, they do not have a unique style. This is consistent with Statement 1, which implies that only successful artists have a unique style and therefore these overlooked artists are not successful artists."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced seminar, they must complete the prerequisite course.",
      "No student who completes the prerequisite course fails the final project.",
      "Every student who does not fail the final project receives a passing grade for the seminar.",
      "Some students who enroll in the advanced seminar do not receive a passing grade for the seminar."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that enrolling in the advanced seminar means completing the prerequisite. Statement 2 implies that completing the prerequisite means not failing the final project. Statement 3 implies that not failing the final project means receiving a passing grade. Therefore, all students who enroll in the advanced seminar must receive a passing grade. Statement 4 directly contradicts this by asserting that some students who enroll in the seminar do not receive a passing grade. Removing Statement 4 makes the set consistent, as the derived conclusion (all enrolled students pass) would then stand unchallenged."
  },
  {
    "id": "gen-7-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs enjoy playing fetch.",
      "Some animals that enjoy playing fetch are not dogs.",
      "My pet loves to play fetch.",
      "My pet is not a dog."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 says all dogs play fetch. Statement 2 allows for non-dogs to also play fetch. Statements 3 and 4 state that your pet is a non-dog animal that plays fetch, which is entirely consistent with Statement 2 and does not contradict Statement 1 (since your pet is not a dog)."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it is a predator.",
      "If an animal is a predator, it has sharp claws.",
      "If an animal has sharp claws, it cannot be kept as a common house pet.",
      "All felines can be kept as common house pets."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that if an animal is a feline, it is a predator. Statement 2 implies that if an animal is a predator, it has sharp claws. Statement 3 implies that if an animal has sharp claws, it cannot be kept as a common house pet. Therefore, any feline cannot be kept as a common house pet. Statement 4 directly contradicts this by asserting that all felines can be kept as common house pets. Removing Statement 4 makes the set consistent, as the derived conclusion (felines cannot be house pets) would then stand unchallenged."
  },
  {
    "id": "gen-7-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies diligently, they will pass the exam.",
      "If a student passes the exam, they will receive a certificate.",
      "Sarah passed the exam, but did not study diligently.",
      "Not all students who receive a certificate studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 states a condition for passing, but doesn't preclude other ways to pass. Statement 2 links passing to receiving a certificate. Statement 3 indicates Sarah passed (and thus received a certificate from Statement 2) without diligent study, which is consistent with Statement 1 not being an 'only if' condition. Statement 4 explicitly confirms that some students (like Sarah) can receive a certificate without studying diligently."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "No business that prioritizes customer satisfaction ignores market trends.",
      "If a business ignores market trends, it will fail financially.",
      "There is at least one successful business that will fail financially."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies successful businesses prioritize customer satisfaction. Statement 2 implies businesses prioritizing customer satisfaction do not ignore market trends. Thus, all successful businesses do not ignore market trends. Statement 3 states that if a business ignores market trends, it will fail financially. Since successful businesses do not ignore market trends, they will not fail financially. Statement 4 directly contradicts this by asserting that there is at least one successful business that will fail financially. Removing Statement 4 makes the set consistent, as the derived conclusion (successful businesses do not fail financially) would then stand unchallenged."
  },
  {
    "id": "gen-7-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every book in the library is cataloged.",
      "No cataloged book is missing a barcode.",
      "Some books missing a barcode are available for checkout.",
      "Some books available for checkout are not from the library."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, every book in the library has a barcode. Statement 3 mentions books missing a barcode that are available for checkout. Statement 4 clarifies that some books available for checkout are not from the library, which allows for the books in Statement 3 (missing barcodes) to exist outside of this particular library, thus not contradicting Statements 1 and 2."
  },
  {
    "id": "gen-7-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is electric, it produces no tailpipe emissions.",
      "If a car produces no tailpipe emissions, it qualifies for the green rebate program.",
      "No car that qualifies for the green rebate program is subject to urban congestion charges.",
      "All electric cars are subject to urban congestion charges."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies electric cars produce no tailpipe emissions. Statement 2 implies cars with no tailpipe emissions qualify for the green rebate program. Statement 3 implies cars qualifying for the green rebate program are not subject to urban congestion charges. Therefore, all electric cars are not subject to urban congestion charges. Statement 4 directly contradicts this by asserting that all electric cars are subject to urban congestion charges. Removing Statement 4 makes the set consistent, as the derived conclusion (electric cars are not subject to congestion charges) would then stand unchallenged."
  },
  {
    "id": "gen-7-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A species can survive in the desert only if it has a way to conserve water.",
      "All plants that conserve water have thick, waxy leaves.",
      "The cactus is a plant that survives in the desert.",
      "Some plants with thick, waxy leaves do not survive in the desert."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 means if a species survives in the desert, it conserves water. Statement 2 means if a plant conserves water, it has waxy leaves. Combined, a desert-surviving plant (like the cactus in Statement 3) must have waxy leaves. Statement 4 is consistent because while waxy leaves are necessary for desert survival, they are not exclusive to desert plants; some waxy-leaved plants can thrive elsewhere and not survive in the desert."
  },
  {
    "id": "gen-7-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds native to this island are migratory.",
      "If a bird is migratory, it cannot nest in the deep forest year-round.",
      "Only birds that nest in the deep forest year-round are vulnerable to forest fires.",
      "Some birds native to this island are vulnerable to forest fires."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies all native birds are migratory. Statement 2 implies migratory birds do not nest in the deep forest year-round. Statement 3 (via its contrapositive: if not nesting deep forest year-round, then not vulnerable to forest fires) implies that birds who do not nest in the deep forest year-round are not vulnerable to forest fires. Therefore, native birds (who do not nest in the deep forest) are not vulnerable to forest fires. Statement 4 directly contradicts this by asserting that some birds native to this island are vulnerable to forest fires. Removing Statement 4 makes the set consistent, as the derived conclusion (native birds are not vulnerable to fires) would then stand unchallenged."
  },
  {
    "id": "gen-7-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee completes advanced training, they are eligible for promotion.",
      "No employee is eligible for promotion unless they have excellent performance reviews.",
      "Some employees who completed advanced training do not receive promotions.",
      "All employees with excellent performance reviews receive bonuses."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 means completing training makes one eligible. Statement 2 means promotion eligibility requires excellent reviews. Thus, employees who complete training are eligible, and if they get promoted, they must have excellent reviews. Statement 3 is consistent because eligibility does not guarantee promotion. Statement 4 provides an additional consequence for those with excellent reviews (and thus possibly promoted employees), which does not contradict any other statement."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the gardening club own a trowel.",
      "No one who owns a trowel is afraid of worms.",
      "At least one member of the gardening club is afraid of worms."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all members of the gardening club own a trowel. Statement 2 says no one who owns a trowel is afraid of worms. Therefore, it must be true that no member of the gardening club is afraid of worms. This directly contradicts Statement 3, which claims at least one member is afraid of worms."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant has blue flowers, it requires acidic soil.",
      "If a plant has red leaves, it does not require acidic soil.",
      "All hydrangeas have red leaves.",
      "Some hydrangeas have blue flowers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all hydrangeas have red leaves. Statement 2 indicates that if a plant has red leaves, it does not require acidic soil. Therefore, all hydrangeas do not require acidic soil. However, Statement 4 states that some hydrangeas have blue flowers, and Statement 1 states that if a plant has blue flowers, it requires acidic soil. This leads to the conclusion that some hydrangeas require acidic soil, which contradicts the earlier conclusion that all hydrangeas do not require acidic soil."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds are mammals.",
      "All penguins are birds.",
      "Some mammals are penguins."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 tells us that all penguins are birds. Statement 1 tells us that no birds are mammals. From these two statements, it logically follows that no penguins are mammals. This conclusion directly contradicts Statement 3, which asserts that some mammals are penguins."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All artists are creative individuals.",
      "No creative individual is easily discouraged.",
      "Some painters are artists.",
      "All painters are easily discouraged."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all artists are creative. From Statement 2, no creative individual is easily discouraged. This implies that no artist is easily discouraged. Since Statement 3 says some painters are artists, it must be true that some painters are not easily discouraged. This conclusion directly contradicts Statement 4, which claims all painters are easily discouraged."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a cat, it is a mammal.",
      "All mammals are warm-blooded.",
      "Some animals are cats but are not warm-blooded."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says if an animal is a cat, it is a mammal. Statement 2 says all mammals are warm-blooded. Therefore, it logically follows that if an animal is a cat, it is warm-blooded. This conclusion directly contradicts Statement 3, which asserts that some animals are cats but are not warm-blooded."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All owls are nocturnal birds.",
      "No nocturnal bird hunts during the day.",
      "Some animals that hunt during the day are owls."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are nocturnal birds. Statement 2 says no nocturnal bird hunts during the day. This logically implies that no owl hunts during the day, which directly contradicts Statement 3, which claims some animals that hunt during the day are owls."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "Some innovative thinkers are not successful entrepreneurs.",
      "Maria is an innovative thinker.",
      "Maria is not a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria is an innovative thinker who is not a successful entrepreneur, which is consistent with the idea that some innovative thinkers fall into that category."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "Every plant with thorns requires careful handling.",
      "No plant that requires careful handling can be easily pruned.",
      "Some roses can be easily pruned."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies all roses have thorns. Statement 2 implies all plants with thorns require careful handling. Statement 3 implies no plant requiring careful handling can be easily pruned. Therefore, all roses cannot be easily pruned, which contradicts Statement 4."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of this building have a parking permit.",
      "Some people with a parking permit do not live in this building.",
      "John has a parking permit.",
      "John does not live in this building."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. John could be one of the people described in Statement 2, having a parking permit but not living in the building, without contradicting any other statement."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All ancient ruins are protected sites.",
      "No protected site allows unrestricted public access.",
      "Every archaeological dig occurs at an ancient ruin.",
      "Some archaeological digs allow unrestricted public access."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 implies all archaeological digs occur at ancient ruins. Statement 1 implies all ancient ruins are protected sites. Statement 2 implies no protected site allows unrestricted public access. This chain means no archaeological dig allows unrestricted public access, directly contradicting Statement 4."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird is a falcon, it is a predator.",
      "All predators have sharp talons.",
      "Some birds with sharp talons are not falcons.",
      "This particular bird has sharp talons."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. This bird could be a falcon, or it could be one of the birds with sharp talons that are not falcons, as allowed by Statement 3."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees with management roles attend weekly strategy meetings.",
      "If an employee attends weekly strategy meetings, they are informed of current projects.",
      "No employee informed of current projects ever misses the quarterly review.",
      "Some employees with management roles miss the quarterly review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies all employees with management roles attend weekly strategy meetings. Statement 2 implies they are then informed of current projects. Statement 3 implies they never miss the quarterly review. Therefore, no employee with a management role misses the quarterly review, which contradicts Statement 4."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes train rigorously.",
      "Some people who train rigorously are not professional athletes.",
      "Maria trains rigorously.",
      "Maria is a professional athlete."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria is a professional athlete, so she trains rigorously according to Statement 1. Statement 2 simply notes that not everyone who trains rigorously is a professional athlete, which doesn't contradict Maria's status."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an instrument is a woodwind, it requires a reed.",
      "All instruments requiring a reed are difficult to master.",
      "No instrument difficult to master can be played by beginners.",
      "Some woodwind instruments can be played by beginners."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies all woodwind instruments require a reed. Statement 2 implies all instruments requiring a reed are difficult to master. Statement 3 implies no instrument difficult to master can be played by beginners. This chain means no woodwind instrument can be played by beginners, directly contradicting Statement 4."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "Fido is a dog.",
      "Fido is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 3 implies Statement 4 via Statement 1. Statement 2 is also true (e.g., cats are mammals but not dogs) and doesn't conflict with Fido being both a dog and a mammal."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses saffron, it is considered a gourmet dish.",
      "All gourmet dishes require advanced cooking skills.",
      "Some dishes made by Chef Elise use saffron.",
      "No dish requiring advanced cooking skills is simple to prepare.",
      "Every dish Chef Elise makes is simple to prepare."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 4 establish a chain: if a recipe uses saffron, it is a gourmet dish, which requires advanced cooking skills, and therefore is not simple to prepare. Statement 3 indicates Chef Elise makes some saffron dishes. Thus, those specific dishes made by Chef Elise are not simple to prepare. This contradicts Statement 5, which claims every dish Chef Elise makes is simple to prepare. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-10-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is in the advanced seminar, they have completed the prerequisite course.",
      "All students who complete the prerequisite course submit a final paper.",
      "Some students who submit a final paper are not in the advanced seminar.",
      "Maria is a student in the advanced seminar."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 imply that Maria is in the advanced seminar, has completed the prerequisite course, and submits a final paper. Statement 3 indicates that there are some students who submit a final paper but are not in the advanced seminar. This is entirely consistent with Maria being a student who is both in the advanced seminar and submits a final paper, as the group of students submitting final papers can be larger than or overlap with the advanced seminar students."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates receive an offer.",
      "If a candidate receives an offer, they must pass the final interview.",
      "No candidate who passes the final interview fails the background check.",
      "Some candidates who failed the background check are successful candidates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: all successful candidates receive an offer, then pass the final interview, and therefore do not fail the background check. This means all successful candidates pass the background check. Statement 4, however, asserts that some successful candidates failed the background check, which directly contradicts the conclusion derived from the other statements. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-10-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it has sharp claws.",
      "All animals with sharp claws are hunters.",
      "Some animals are hunters but do not have sharp claws.",
      "No animal with sharp claws is a herbivore."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all carnivorous species are hunters. Statement 3 notes that some hunters do not have sharp claws, which means these particular hunters are not carnivorous according to Statement 1, and this is perfectly possible. Statement 4 confirms that animals with sharp claws are not herbivores. No contradiction arises from these statements; for example, there could be herbivores without sharp claws, and hunters without sharp claws (who are not carnivorous), and carnivorous animals with sharp claws (who are hunters)."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of Sector 7 pay property taxes.",
      "No one who pays property taxes is eligible for the housing subsidy.",
      "If a resident is over 65, they are eligible for the housing subsidy.",
      "Some residents of Sector 7 are over 65."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all residents of Sector 7 pay property taxes, and therefore none of them are eligible for the housing subsidy. Statement 3 claims that if a resident is over 65, they are eligible for the housing subsidy. Statement 4 states that some residents of Sector 7 are over 65. For these specific residents, they would be both ineligible (from Statements 1 and 2) and eligible (from Statement 3) for the subsidy, which is a contradiction. Removing Statement 4 eliminates the group that creates this conflict."
  },
  {
    "id": "gen-10-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant needs direct sunlight, it is not suitable for my office.",
      "All plants with colorful flowers need direct sunlight.",
      "Some plants in my office have colorful flowers.",
      "Every plant in my office is suitable for my office."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: any plant with colorful flowers needs direct sunlight, and thus is not suitable for my office. Statement 3 indicates that some plants in my office have colorful flowers. For these specific plants, they are in my office but not suitable for my office. This directly contradicts Statement 4, which asserts that every plant in my office is suitable for my office. Removing Statement 3 resolves this contradiction by ensuring that no plants in the office have colorful flowers, thus breaking the chain that leads to a plant being unsuitable."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified applicants have submitted a complete portfolio.",
      "If an applicant has submitted a complete portfolio, they are invited for an interview.",
      "Some applicants who are invited for an interview are not qualified applicants.",
      "Sarah is a qualified applicant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 imply that Sarah is a qualified applicant, has submitted a complete portfolio, and is invited for an interview. Statement 3 indicates that the group of applicants invited for an interview is not limited to only qualified applicants, meaning some non-qualified individuals are also invited. This is entirely consistent with Sarah being a qualified applicant who is invited for an interview, as it simply describes other individuals within the invited group."
  },
  {
    "id": "gen-10-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document is confidential, it requires a security clearance to view.",
      "All documents requiring a security clearance to view are stored in encrypted format.",
      "Some documents stored in encrypted format are not confidential.",
      "No document that is not confidential is stored in encrypted format."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: if a document is confidential, it requires a security clearance, and therefore is stored in encrypted format (Confidential -> Encrypted). Statement 4 says 'No document that is not confidential is stored in encrypted format', which means if a document is stored in encrypted format, it must be confidential (Encrypted -> Confidential). Together, these establish that a document is confidential if and only if it is stored in encrypted format. Statement 3, however, asserts that some documents stored in encrypted format are not confidential, which directly contradicts this established equivalence. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a building has a green roof, it is designed for energy efficiency.",
      "All buildings designed for energy efficiency use recycled materials.",
      "Some buildings use recycled materials but do not have a green roof.",
      "The new library building uses recycled materials."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 indicate that any building with a green roof is designed for energy efficiency and uses recycled materials. Statement 3 notes that some buildings use recycled materials without having a green roof, which is consistent; not all buildings using recycled materials need to have a green roof. Statement 4 states that the new library building uses recycled materials. The library could be one of the buildings with a green roof, or one of the buildings that uses recycled materials without having a green roof. All statements can be true simultaneously."
  },
  {
    "id": "gen-10-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No animal that hibernates is warm-blooded.",
      "If an animal is warm-blooded, it maintains a constant body temperature.",
      "Some animals that do not maintain a constant body temperature are not hibernators.",
      "All mammals are warm-blooded."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that hibernating animals are not warm-blooded and therefore do not maintain a constant body temperature. Statement 4 implies that all mammals are warm-blooded and thus maintain a constant body temperature and do not hibernate. Statement 3 asserts that some animals exist that neither maintain a constant body temperature nor hibernate. This is consistent; for example, a cold-blooded animal that does not hibernate would fit this description without contradicting any other statement."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of Maple Street own a car.",
      "No one who owns a car uses public transport daily.",
      "Some residents of Maple Street use public transport daily."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that if you are a resident of Maple Street, you own a car. Statement 2 implies that if you own a car, you do not use public transport daily. Therefore, residents of Maple Street do not use public transport daily. This contradicts Statement 3, which claims some residents of Maple Street do use public transport daily. Removing Statement 3 resolves the conflict."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds with red feathers are songbirds.",
      "Some birds with blue feathers are not songbirds.",
      "No bird with green feathers has red feathers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. For instance, a robin could be a red-feathered songbird. A blue jay could be a blue-feathered bird that is not a songbird. A parrot could be a green-feathered bird with no red feathers. These scenarios are all compatible."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student completes the advanced course, they will receive a special diploma.",
      "No student who skipped more than two lectures receives a special diploma.",
      "Every student enrolled in the advanced course completed it.",
      "Some students enrolled in the advanced course skipped more than two lectures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 and Statement 3 together imply that every student enrolled in the advanced course will receive a special diploma. Statement 2 implies that any student who receives a special diploma did not skip more than two lectures. Therefore, every student enrolled in the advanced course did not skip more than two lectures. This directly contradicts Statement 4, which claims some students enrolled in the advanced course did skip more than two lectures. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus also worked overtime.",
      "Some employees who worked overtime did not receive a bonus.",
      "No employee who received a bonus was a new hire."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true at the same time. For example, an experienced employee could have received a bonus for working overtime and was not a new hire. Another employee could have worked overtime but not received a bonus. These scenarios are all compatible with the given statements."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "A painting is displayed at the gallery only if it is a modern art piece.",
      "No sculpture at the gallery is a modern art piece.",
      "Some paintings displayed at the gallery are sculptures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that any painting displayed at the gallery must be a modern art piece. Statement 2 implies that no sculpture at the gallery can be a modern art piece. If an item is both a painting displayed at the gallery and a sculpture, it must be both a modern art piece (from Statement 1) and not a modern art piece (from Statement 2). Statement 3 asserts that such items exist, causing a direct contradiction. Removing Statement 3 resolves the conflict."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Not all vegetables are green.",
      "Some fruits are green.",
      "All green vegetables are organic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. For example, a carrot could be a vegetable that is not green, satisfying Statement 1. A green apple could be a fruit that is green, satisfying Statement 2. And a head of spinach could be a green vegetable that is organic, satisfying Statement 3. There is no logical conflict between these conditions."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All players on the champion team are experienced.",
      "No player who trained less than 100 hours is experienced.",
      "Some players on the champion team trained less than 100 hours."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all champion team players are experienced. Statement 2 implies that if a player is experienced, they must have trained 100 hours or more (this is the contrapositive of Statement 2). Therefore, all players on the champion team must have trained 100 hours or more. This directly contradicts Statement 3, which claims some players on the champion team trained less than 100 hours. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All participants in the study were over 30 years old.",
      "Some participants in the study did not complete the final survey.",
      "No one over 30 years old was paid for their participation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all participants to be over 30 (Statement 1), for some of them to not complete the final survey (Statement 2), and for none of the participants (since they are all over 30) to be paid for their participation (Statement 3). There is no logical conflict among them."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the jury are registered voters.",
      "No one over 70 years old is a registered voter.",
      "Every member of the jury is over 70 years old."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all jury members are registered voters. Statement 2 implies that if someone is a registered voter, then they are not over 70 years old (this is the contrapositive of Statement 2). Therefore, all jury members must not be over 70 years old. This directly contradicts Statement 3, which claims every member of the jury is over 70 years old. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Some residents of this building have lived here for over 10 years.",
      "All residents who have lived here for over 10 years are familiar with the building's history.",
      "Not all residents familiar with the building's history are over 60 years old."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for some residents to have lived there for over 10 years (Statement 1), for all of those residents to be familiar with the building's history (Statement 2), and for some of the residents familiar with the building's history to not be over 60 years old (Statement 3). For example, a person under 60 could have lived there for 15 years and thus be familiar with its history."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "No animal with retractable claws can climb trees with smooth bark.",
      "All domestic cats are felines.",
      "Some domestic cats can climb trees with smooth bark."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that all domestic cats are felines. From Statement 1, all felines have retractable claws. From Statement 2, no animal with retractable claws can climb trees with smooth bark. Thus, all domestic cats cannot climb trees with smooth bark. This directly contradicts Statement 4, which claims some domestic cats can climb trees with smooth bark."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student in the debate club practices public speaking weekly.",
      "No student who practices public speaking weekly fears giving presentations.",
      "Students who don't fear giving presentations always perform well in mock trials.",
      "Some students in the debate club do not perform well in mock trials."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all debate club students practice public speaking weekly. Statement 2 implies students who practice public speaking weekly do not fear giving presentations. Statement 3 states students who don't fear giving presentations always perform well. Chaining these, all students in the debate club perform well in mock trials. This contradicts Statement 4, which claims some students in the debate club do not perform well in mock trials."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All planets with liquid water support life.",
      "No planet orbiting a red dwarf star supports life.",
      "Some planets with liquid water do not orbit red dwarf stars.",
      "If a planet has liquid water, it might orbit a red dwarf star."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a planet has liquid water, it supports life. From Statement 2, no planet orbiting a red dwarf star supports life. This implies that if a planet has liquid water, it cannot orbit a red dwarf star (meaning, it is impossible for a planet to have liquid water AND orbit a red dwarf star). Statement 4, however, asserts that if a planet has liquid water, it *might* orbit a red dwarf star, which directly contradicts the derived impossibility."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student selected for the scholarship committee has excellent grades.",
      "Students with excellent grades always complete their assignments early.",
      "No student who completes their assignments early struggles with time management.",
      "If a student struggles with time management, they are not selected for the scholarship committee.",
      "Some students selected for the scholarship committee struggle with time management."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 1 indicates scholarship committee students have excellent grades. Statement 2 states students with excellent grades complete assignments early. Statement 3 means students who complete assignments early do not struggle with time management. Chaining these, all students selected for the scholarship committee do not struggle with time management. Statement 4 is the contrapositive of this derived truth (if they struggle, they're not on the committee). This derived universal truth directly contradicts Statement 5, which claims some students selected for the scholarship committee struggle with time management."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it is a master of aerial maneuverability.",
      "No bird that is a master of aerial maneuverability has short, rounded wings.",
      "All birds with short, rounded wings are not swift.",
      "Some swifts have short, rounded wings."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says swifts are masters of aerial maneuverability. Statement 2 indicates that masters of aerial maneuverability do not have short, rounded wings. Therefore, all swifts do not have short, rounded wings. Statement 3 is the contrapositive of this derived truth (if a bird has short, rounded wings, it's not a swift). This derived universal truth directly contradicts Statement 4, which claims some swifts have short, rounded wings."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device is a smartphone, it runs an operating system.",
      "All devices that run an operating system are susceptible to malware.",
      "No device susceptible to malware has perfect security.",
      "Some smartphones have perfect security."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates smartphones run an operating system. Statement 2 says devices running an operating system are susceptible to malware. Statement 3 implies devices susceptible to malware do not have perfect security. Chaining these, all smartphones do not have perfect security. This directly contradicts Statement 4, which claims some smartphones have perfect security."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students enrolled in the program must attend the orientation.",
      "Every student who attends the orientation receives a course syllabus.",
      "Some students enrolled in the program did not receive a course syllabus."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all students in the program attend orientation. Statement 2 indicates that all who attend orientation receive a syllabus. Together, these imply that all students in the program receive a syllabus. This directly contradicts Statement 3, which claims some students in the program did not receive a syllabus."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No rare coins are widely circulated.",
      "Every coin found in this collection is a rare coin.",
      "Some coins found in this collection are widely circulated."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 establishes that all coins in the collection are rare coins. Statement 1 states that no rare coins are widely circulated. From these, it follows that no coins found in this collection are widely circulated. This directly contradicts Statement 3, which asserts that some coins from the collection are widely circulated."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a fern, then it requires shade.",
      "No plants that require shade are also drought-tolerant.",
      "Some ferns are drought-tolerant."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 means all ferns require shade. Statement 2 means that no plants requiring shade are drought-tolerant. Combining these, it implies that no ferns are drought-tolerant. This directly conflicts with Statement 3, which claims some ferns are drought-tolerant."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants are interviewed.",
      "Some candidates from the second round were not interviewed.",
      "Every candidate from the second round was a successful applicant."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 states that every candidate from the second round was a successful applicant. Statement 1 indicates that all successful applicants are interviewed. Therefore, it must be true that every candidate from the second round was interviewed. This conclusion directly contradicts Statement 2, which claims some candidates from the second round were not interviewed."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All top-tier athletes follow a strict training regimen.",
      "Every athlete on a strict training regimen avoids junk food.",
      "No one who avoids junk food ever consumes sugary drinks.",
      "Some top-tier athletes regularly consume sugary drinks."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that all top-tier athletes follow a strict training regimen. Statement 2 states that everyone on a strict training regimen avoids junk food. Statement 3 indicates that no one who avoids junk food consumes sugary drinks. Following this chain, all top-tier athletes must not consume sugary drinks. This conclusion directly contradicts Statement 4, which claims some top-tier athletes regularly consume sugary drinks."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All mammals are vertebrates.",
      "Some vertebrates are fish.",
      "No fish are mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all mammals to be vertebrates, and for some vertebrates to be fish, while also having no fish be mammals. Mammals and fish are both subsets of vertebrates but are distinct from each other."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a dog, then it barks.",
      "No cats bark.",
      "Some animals are cats."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 describes dogs. Statements 2 and 3 describe cats, stating they exist and do not bark. There is no conflict or contradiction between the properties of dogs and cats described."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All books in the library have a catalog number.",
      "Some items with a catalog number are not books.",
      "The oldest manuscript has a catalog number."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. The oldest manuscript (Statement 3) could be one of the books (Statement 1) or one of the non-book items with a catalog number (Statement 2). No contradictions arise."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who attended the seminar passed the quiz.",
      "Some students did not attend the seminar.",
      "All students who passed the quiz received a certificate.",
      "Some students did not receive a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. If some students did not receive a certificate (Statement 4), then by Statement 3 (contrapositive), they did not pass the quiz. If they did not pass the quiz, then by Statement 1 (contrapositive), they did not attend the seminar. This is fully compatible with Statement 2, which says some students did not attend the seminar."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds have wings.",
      "Some flying creatures are not birds.",
      "Penguins are birds.",
      "No penguins can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statement 3 and 1, penguins are birds and therefore have wings. Statement 4 indicates penguins cannot fly, which is consistent with having wings but not using them for flight. Statement 2 mentions other flying creatures, which doesn't contradict anything about birds or penguins."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that migrate south have strong wing muscles.",
      "No bird with strong wing muscles is unable to fly long distances.",
      "Every bird that can fly long distances travels over oceans.",
      "Some birds that migrate south do not travel over oceans."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All birds that migrate south have strong wing muscles, which means they can fly long distances, and therefore they travel over oceans. This implies that all birds that migrate south travel over oceans. Statement 4 directly contradicts this conclusion by asserting that some birds that migrate south do not travel over oceans."
  },
  {
    "id": "gen-14-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are skilled negotiators.",
      "Some skilled negotiators are not university graduates.",
      "No university graduate has ever failed to manage a team effectively.",
      "Mark is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Mark is a successful entrepreneur, so he is a skilled negotiator (from Statement 1). Statement 2 indicates that some skilled negotiators are not university graduates, so Mark could be one of these. Statement 3 implies all university graduates manage teams effectively, but this does not create a conflict as Mark's university status is not definitively stated, and if he is not a university graduate, Statement 3 does not apply to him. The statements are consistent."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant needs direct sunlight, it cannot thrive in shade.",
      "Every plant that cannot thrive in shade requires daily watering.",
      "Some tropical plants require direct sunlight.",
      "No tropical plant requires daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that some tropical plants require daily watering: Some tropical plants (Statement 3) require direct sunlight, which means they cannot thrive in shade (Statement 1), and therefore they require daily watering (Statement 2). This directly contradicts Statement 4, which claims that no tropical plant requires daily watering."
  },
  {
    "id": "gen-14-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of this apartment building are required to have a parking permit.",
      "Some individuals with parking permits do not own a car.",
      "No one who owns a car is prohibited from using the visitors' lot.",
      "Sarah is a resident of this apartment building."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Sarah is a resident, so she has a parking permit (from Statement 1). Statement 2 shows that some permit holders don't own cars, so Sarah could be a permit holder without a car. Statement 3 establishes a rule for car owners, but it does not create a conflict with Sarah's situation, as she might not own a car or, if she does, she would not be prohibited from using the visitors' lot. The statements are consistent."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every applicant who passes the first interview will proceed to the second interview.",
      "No applicant who proceeds to the second interview will be rejected solely based on their resume.",
      "If an applicant's resume contains errors, they will be rejected solely based on their resume.",
      "Some applicants who pass the first interview have resumes that contain errors."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 indicate that all applicants who pass the first interview will not be rejected solely based on their resume. However, Statement 4 states that some applicants who pass the first interview have resumes with errors, which, according to Statement 3, means they will be rejected solely based on their resume. This creates a contradiction for those specific applicants."
  },
  {
    "id": "gen-14-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All research projects involving human subjects require ethical approval.",
      "Every project with ethical approval must submit annual reports.",
      "Some projects requiring ethical approval are not published in academic journals.",
      "Our current project involves human subjects."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Our current project involves human subjects (Statement 4), so it requires ethical approval (Statement 1) and must submit annual reports (Statement 2). Statement 3 indicates that some projects requiring ethical approval are not published, but this doesn't conflict with our project either being published or not, as it only refers to 'some' and does not impose a universal condition. The statements are consistent."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless a painting is an original masterpiece, it is not displayed in the main gallery.",
      "All paintings acquired before 1900 are displayed in the main gallery.",
      "Every original masterpiece is authenticated by a panel of experts.",
      "Some paintings acquired before 1900 were not authenticated by a panel of experts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: All paintings acquired before 1900 (Statement 2) are displayed in the main gallery, meaning they must be original masterpieces (Statement 1), and thus they are authenticated by a panel of experts (Statement 3). This implies that all paintings acquired before 1900 were authenticated by a panel of experts. This conclusion is directly contradicted by Statement 4, which claims some paintings acquired before 1900 were not authenticated."
  },
  {
    "id": "gen-14-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who attended the seminar received a bonus.",
      "No employee who received a bonus was also given a promotion this quarter.",
      "Some employees who did not attend the seminar were given a promotion this quarter.",
      "Julia is an employee who attended the seminar."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Julia attended the seminar, so she received a bonus (from Statement 1). According to Statement 2, this means Julia was not given a promotion this quarter, which is consistent. Statement 3 describes a group of employees who did not attend the seminar and received a promotion, which is possible and does not conflict with Julia's situation or the other statements. The statements are consistent."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful marathon runners maintain a rigorous training schedule.",
      "No athlete who maintains a rigorous training schedule avoids proper nutrition.",
      "If an athlete practices proper nutrition, they achieve peak performance.",
      "Some successful marathon runners do not achieve peak performance."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that all successful marathon runners achieve peak performance: All successful marathon runners (Statement 1) maintain a rigorous training schedule, which means they practice proper nutrition (Statement 2), and therefore they achieve peak performance (Statement 3). This directly contradicts Statement 4, which asserts that some successful marathon runners do not achieve peak performance."
  },
  {
    "id": "gen-14-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every musician who performs live concerts owns a professional instrument.",
      "Some musicians who own a professional instrument do not compose their own music.",
      "If a musician composes their own music, they often collaborate with other artists.",
      "No musician who performs live concerts often collaborates with other artists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 4, we deduce that musicians performing live concerts own professional instruments and do not often collaborate with other artists. Statement 3 indicates that if a musician composes their own music, they often collaborate. The contrapositive means if they don't collaborate (as live concert performers don't, per S4), they don't compose their own music. This is consistent with Statement 2, which says some professional instrument owners don't compose their own music. The statements are consistent."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a speaker presents at the conference, they must submit an abstract.",
      "All speakers who submit an abstract receive travel reimbursement.",
      "No speaker who registers late receives travel reimbursement.",
      "Some speakers who registered late present at the conference."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts there is a speaker who both registered late and presents. If a speaker presents, Statement 1 indicates they submit an abstract, and Statement 2 indicates they receive travel reimbursement. However, if a speaker registered late, Statement 3 indicates they do not receive travel reimbursement. This creates a contradiction for that speaker, who would both receive and not receive travel reimbursement."
  },
  {
    "id": "gen-15-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If software is updated, it requires a license key.",
      "All new software versions are updated.",
      "No software with a valid license key is incompatible with older hardware.",
      "Some software with a valid license key is still in its old version."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 describes software that has a license key and is an old version. Statement 3 implies that if it has a license key, it is not incompatible with older hardware. This is consistent. Statements 1 and 2 apply to updated or new software, which Statement 4's subject is not necessarily. An old version software could have a license key and not be incompatible with older hardware without contradicting any rules about new or updated software."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced course, they must pass the prerequisite exam.",
      "No student who neglected their studies received a course completion certificate.",
      "All students who passed the prerequisite exam received a course completion certificate.",
      "Some students in the advanced course neglected their studies."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims there is a student who is in the advanced course and neglected their studies. If a student is in the advanced course, Statement 1 implies they passed the prerequisite exam, and Statement 3 implies they received a course completion certificate. However, if a student neglected their studies, Statement 2 implies they did not receive a course completion certificate. This is a contradiction, as the student would both receive and not receive a certificate."
  },
  {
    "id": "gen-15-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All paintings exhibited in the main gallery are contemporary.",
      "If a painting is contemporary, it was created after 1990.",
      "No painting created before 1990 is considered for acquisition by the museum.",
      "Some paintings not considered for acquisition by the museum are exhibited in the main gallery."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 describes a painting that is not considered for acquisition and is exhibited in the main gallery. From Statements 1 and 2, a painting in the main gallery must be contemporary and thus created after 1990. Statement 3 implies that paintings created before 1990 are not considered for acquisition. This is consistent with a painting being created after 1990 and also not being considered for acquisition, as there could be other reasons for not being considered."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee eligible for promotion completed the advanced training module.",
      "If an employee completed the advanced training module, they received a performance bonus.",
      "No employee who started after January 1st received a performance bonus.",
      "At least one employee who started after January 1st is eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims there is an employee who started after January 1st and is eligible for promotion. If an employee is eligible for promotion, Statement 1 states they completed the advanced training module, and Statement 2 states they received a performance bonus. However, if an employee started after January 1st, Statement 3 states they did not receive a performance bonus. This creates a contradiction for that employee, who would both receive and not receive a performance bonus."
  },
  {
    "id": "gen-15-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All research proposals that received significant funding underwent peer review.",
      "All research proposals that underwent peer review included preliminary data.",
      "If a research proposal includes preliminary data, it must be authored by a principal investigator.",
      "Some research proposals authored by a principal investigator did not receive significant funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 describes a research proposal authored by a principal investigator that did not receive significant funding. This is entirely possible, as a principal investigator might author many proposals, some of which do not receive significant funding. The other statements establish a chain for proposals that DO receive significant funding (Significant Funding → Peer Review → Preliminary Data → PI), but this does not prevent a PI from authoring a proposal that does not follow this chain or simply doesn't receive funding."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a concertgoer has VIP access, they entered through the priority gate.",
      "All concertgoers who entered through the priority gate received a souvenir program.",
      "No concertgoer who purchased a discounted ticket received a souvenir program.",
      "Some concertgoers who purchased discounted tickets have VIP access."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts there is a concertgoer who both purchased a discounted ticket and has VIP access. If a concertgoer has VIP access, Statement 1 indicates they entered through the priority gate, and Statement 2 indicates they received a souvenir program. However, if a concertgoer purchased a discounted ticket, Statement 3 indicates they did not receive a souvenir program. This is a contradiction, as the concertgoer would both receive and not receive a souvenir program."
  },
  {
    "id": "gen-15-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All library books checked out for more than three weeks incur overdue fines.",
      "If a library book incurs an overdue fine, its borrowing privileges are suspended.",
      "No library book with suspended borrowing privileges can be renewed online.",
      "Some library books that cannot be renewed online were checked out for less than two weeks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 describes a book that cannot be renewed online and was checked out for less than two weeks. While a book checked out for more than three weeks (Statement 1) would lead to no online renewal (Statements 2 and 3), there can be other reasons why a book cannot be renewed online (e.g., it's a reference book, or it's simply a book that is not allowed to be renewed regardless of checkout duration). Therefore, Statement 4 is consistent with the other rules."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a political candidate is eligible for public funding, they must disclose all financial assets.",
      "No candidate who has disclosed all financial assets has ever participated in a private fundraising event.",
      "All candidates registered with a minor party participate in private fundraising events.",
      "Some candidates registered with a minor party are eligible for public funding."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims there is a candidate who is registered with a minor party and is eligible for public funding. If a candidate is eligible for public funding, Statement 1 indicates they must disclose all financial assets, and Statement 2 indicates they do not participate in a private fundraising event. However, if a candidate is registered with a minor party, Statement 3 indicates they participate in private fundraising events. This is a contradiction for that candidate, who would both participate and not participate in private fundraising events."
  },
  {
    "id": "gen-15-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All restaurants awarded a 'Michelin Star' are listed in the gourmet guide.",
      "If a restaurant is listed in the gourmet guide, its head chef holds an advanced culinary degree.",
      "No restaurant whose head chef holds an advanced culinary degree struggles financially.",
      "Some restaurants not listed in the gourmet guide do not struggle financially."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 describes a restaurant that is not listed in the gourmet guide and does not struggle financially. The chain from Statements 1, 2, and 3 establishes that if a restaurant has a Michelin Star, it is listed in the gourmet guide, its chef has an advanced degree, and it does not struggle financially. However, not being listed in the gourmet guide does not necessarily mean a restaurant struggles financially. A restaurant could be very successful and not struggle financially, even if it has not been recognized by the gourmet guide or Michelin."
  },
  {
    "id": "gen-16-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students enrolled in advanced math courses are eligible for the scholarship.",
      "No one eligible for the scholarship has outstanding library fines.",
      "Some students enrolled in advanced math courses have outstanding library fines."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all students in advanced math courses are eligible for the scholarship. Statement 2 states that no one eligible for the scholarship has outstanding library fines. Taken together, these imply that no student in an advanced math course has outstanding library fines. This directly contradicts Statement 3, which claims some students in advanced math courses do have outstanding library fines."
  },
  {
    "id": "gen-16-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a hummingbird, it feeds on nectar.",
      "Some birds that feed on nectar are also pollinators.",
      "Some hummingbirds build nests in high trees."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. It is possible for hummingbirds to feed on nectar, some nectar-feeding birds to be pollinators, and some hummingbirds to build nests in high trees without any logical contradiction."
  },
  {
    "id": "gen-16-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "If an animal is a bear, it does not have retractable claws.",
      "Some animals are both felines and bears."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that felines have retractable claws. Statement 2 states that bears do not have retractable claws. Therefore, an animal cannot be both a feline and a bear, as it would both have and not have retractable claws. This directly contradicts Statement 3, which claims some animals are both felines and bears."
  },
  {
    "id": "gen-16-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All valid parking permits display a red stripe.",
      "Some parking permits displaying a red stripe are not valid.",
      "This parking permit displays a red stripe."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Statement 1 indicates that all valid permits have a red stripe, and Statement 2 confirms that some permits with red stripes are not valid. Statement 3 introduces a permit with a red stripe, which could be either a valid permit or one of the red-striped permits that are not valid. There is no contradiction."
  },
  {
    "id": "gen-16-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted a complete portfolio.",
      "Every applicant who submitted a complete portfolio attended the orientation session.",
      "Some successful applicants did not attend the orientation session."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all successful applicants submitted a complete portfolio. Statement 2 states that every applicant who submitted a complete portfolio attended the orientation session. From these two, it follows that all successful applicants attended the orientation session. This conclusion directly contradicts Statement 3, which claims some successful applicants did not attend the orientation session."
  },
  {
    "id": "gen-16-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own waterproof boots.",
      "Some participants in the weekend trek are members of the hiking club.",
      "Some people who own waterproof boots prefer mountain trails."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. It is possible for all hiking club members to own waterproof boots, for some trek participants to be hiking club members (and thus own boots), and for some people who own waterproof boots to prefer mountain trails. There is no logical conflict."
  },
  {
    "id": "gen-16-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No professional chefs use instant coffee in their restaurants.",
      "All employees of 'The Gilded Spoon' restaurant use instant coffee.",
      "Some professional chefs are employees of 'The Gilded Spoon' restaurant."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says no professional chefs use instant coffee. Statement 2 states that all employees of 'The Gilded Spoon' use instant coffee. These two statements together mean that no professional chef can be an employee of 'The Gilded Spoon'. Statement 3 directly contradicts this conclusion by asserting that some professional chefs are employees of 'The Gilded Spoon'."
  },
  {
    "id": "gen-16-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "A car will start only if its battery is charged.",
      "Some cars with charged batteries have their headlights on.",
      "Some cars that do not start have their hazard lights flashing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. A car needs a charged battery to start, but a charged battery does not guarantee it starts. Some cars with charged batteries could have their headlights on. And some cars that do not start could have flashing hazard lights, regardless of battery status or headlights. There is no inherent contradiction."
  },
  {
    "id": "gen-16-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the research team have access to the secure lab.",
      "No one with access to the secure lab is permitted to share external data.",
      "All interns are permitted to share external data.",
      "Some members of the research team are interns."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all research team members have secure lab access. Statement 2 says no one with secure lab access can share external data. Taken together, these imply that no member of the research team is permitted to share external data. Statement 3 claims all interns are permitted to share external data. From this, it follows that no member of the research team can be an intern. This conclusion directly contradicts Statement 4, which states that some members of the research team are interns."
  },
  {
    "id": "gen-16-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a mushroom is edible, it has a distinct cap shape.",
      "Some edible mushrooms grow on decaying logs.",
      "Poisonous mushrooms do not have a distinct cap shape."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Edible mushrooms can have a distinct cap shape, and some of them can grow on decaying logs. Poisonous mushrooms, by definition, are not edible and can thus have different properties, such as not having a distinct cap shape, without creating any contradiction."
  },
  {
    "id": "gen-17-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a canary, it sings beautifully.",
      "All birds that sing beautifully are kept as pets.",
      "No bird kept as a pet is ever a wild bird.",
      "There is at least one canary that is a wild bird."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if a bird is a canary, it sings beautifully, is kept as a pet, and therefore cannot be a wild bird. This conclusion (Canary → Not Wild) directly contradicts Statement 4, which claims that at least one canary is a wild bird."
  },
  {
    "id": "gen-17-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies hard, they will pass the exam.",
      "Some students pass the exam.",
      "No student who did not study hard received a high score.",
      "All students who received a high score also passed the exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. For instance, some students could study hard, pass the exam, and receive a high score, while other students do not study hard, do not pass, and do not receive a high score. No statement inherently contradicts another."
  },
  {
    "id": "gen-17-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who attend the workshop receive a bonus.",
      "No employee who receives a bonus is eligible for promotion this year.",
      "Every senior manager attended the workshop.",
      "Some senior managers are eligible for promotion this year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if someone is a senior manager, they attended the workshop, received a bonus, and therefore are not eligible for promotion this year. This conclusion (Senior Manager → Not Eligible for Promotion) directly contradicts Statement 4, which states that some senior managers are eligible for promotion."
  },
  {
    "id": "gen-17-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a musician plays the violin, they must practice daily.",
      "No musician who practices daily performs poorly.",
      "Some musicians do not play the violin.",
      "All musicians who perform well are successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true. For example, some musicians could play the violin, practice daily, perform well, and be successful, while other musicians do not play the violin and may or may not practice daily or perform well. There is no contradiction between the statements."
  },
  {
    "id": "gen-17-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student takes advanced math, they must also take physics.",
      "No student who takes physics is an art major.",
      "All students who are art majors enroll in a humanities seminar.",
      "Some students take advanced math and are also art majors."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that if a student takes advanced math, they take physics, and therefore cannot be an art major. This conclusion (Advanced Math → Not Art Major) directly contradicts Statement 4, which asserts that some students take advanced math and are art majors. Statement 3 is irrelevant to this contradiction."
  },
  {
    "id": "gen-17-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the sky is clear, we can see stars.",
      "If we can see stars, the moon is not full.",
      "Sometimes the moon is full.",
      "It is possible for the sky to be clear."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true. For example, on some clear nights, stars are visible and the moon is not full. On other nights, the moon is full, meaning stars are not visible, and the sky might not be clear. There is no logical conflict."
  },
  {
    "id": "gen-17-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time a customer places an order, they receive a confirmation email.",
      "No customer who receives a confirmation email is charged for shipping.",
      "If a customer is not charged for shipping, their order is always delivered within two days.",
      "Some customers who place an order do not have their order delivered within two days."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a customer places an order, they receive a confirmation email, are not charged for shipping, and therefore their order is delivered within two days. This implies that all customers who place an order have their order delivered within two days. This conclusion directly contradicts Statement 4, which claims some customers who place an order do not have their order delivered within two days."
  },
  {
    "id": "gen-17-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members attend the quarterly meeting.",
      "If someone attends the quarterly meeting, they receive the agenda beforehand.",
      "Some people who receive the agenda beforehand are not committee members.",
      "No one receives the agenda beforehand unless they attend the quarterly meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, all committee members attend the meeting and receive the agenda. Other individuals, who are not committee members, could also attend the quarterly meeting and thus receive the agenda, satisfying Statement 3, and respecting the conditions of Statements 2 and 4."
  },
  {
    "id": "gen-17-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A city experiences significant traffic congestion only if its public transport system is inadequate.",
      "If a city's public transport system is inadequate, it invests heavily in road infrastructure.",
      "No city that invests heavily in road infrastructure prioritizes eco-friendly policies.",
      "All cities that prioritize eco-friendly policies experience significant traffic congestion.",
      "There is at least one city that prioritizes eco-friendly policies."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 form a logical chain: If a city prioritizes eco-friendly policies, then it experiences significant traffic congestion, which implies its public transport is inadequate, leading to heavy investment in road infrastructure, which means it does not prioritize eco-friendly policies. This creates a contradiction (PEP → Not PEP) that makes the existence of any city prioritizing eco-friendly policies (as asserted in Statement 5) impossible."
  },
  {
    "id": "gen-17-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a movie is a box office hit, it receives critical acclaim.",
      "Some movies receive critical acclaim.",
      "No movie that receives critical acclaim fails to get a sequel.",
      "Every movie that gets a sequel is a box office hit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For instance, some movies could receive critical acclaim, get a sequel, and also be a box office hit, satisfying all conditions without contradiction. The derived chain 'critical acclaim → gets a sequel → box office hit' is consistent with the other statements."
  },
  {
    "id": "gen-18-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful startups embrace risk-taking.",
      "No company that embraces risk-taking has a perfectly stable market position.",
      "Every successful startup has a perfectly stable market position."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 2 says companies embracing risk-taking lack a stable market position. Statement 3 claims every successful startup has a stable market position. Together, these imply that no successful startup embraces risk-taking. This directly contradicts Statement 1, which asserts that all successful startups embrace risk-taking. Removing Statement 1 resolves this contradiction, as the remaining statements would then consistently imply that successful startups do not embrace risk-taking."
  },
  {
    "id": "gen-18-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant in the marathon completed the race.",
      "No one who completed the race felt completely refreshed afterward.",
      "Some participants in the marathon felt completely refreshed afterward."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 states that all marathon participants completed the race. If Statement 2 is true, then no one who completed the race felt refreshed, which would mean no marathon participant felt refreshed. This conclusion contradicts Statement 3, which claims some participants did feel refreshed. Removing Statement 2 allows Statement 1 and Statement 3 to be consistent; participants could complete the race and some could feel refreshed."
  },
  {
    "id": "gen-18-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All rare books are kept in the restricted section.",
      "No book in the restricted section can be checked out.",
      "At least one rare book can be checked out."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all rare books are in the restricted section. Statement 2 says no book in the restricted section can be checked out. These two statements logically imply that no rare book can be checked out. This conclusion directly contradicts Statement 3, which claims at least one rare book can be checked out. Removing Statement 3 resolves this contradiction, making the remaining statements consistent."
  },
  {
    "id": "gen-18-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in this aviary can fly.",
      "Some birds that can fly are not native to this region.",
      "No bird native to this region is a danger to the ecosystem."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Birds in the aviary are flying birds. Some flying birds (which may or may not be from the aviary) are not native. Native birds are not dangerous. These facts do not create any logical conflict."
  },
  {
    "id": "gen-18-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All team leaders have completed advanced training.",
      "Some employees who completed advanced training are not team leaders.",
      "Maria has completed advanced training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Team leaders are a subset of those with advanced training. Some people with advanced training are not team leaders, meaning the group of those with advanced training is larger. Maria could be a team leader or one of the employees with advanced training who is not a team leader, without contradiction."
  },
  {
    "id": "gen-18-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every city council member supports the new zoning plan.",
      "Some who support the new zoning plan are against urban development.",
      "All city council members are against urban development."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. If all city council members support the plan (Statement 1) and are against urban development (Statement 3), then it must be the case that some who support the plan are against urban development, which is consistent with Statement 2."
  },
  {
    "id": "gen-18-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No plant in this garden requires full sun.",
      "Some plants in this garden are drought-resistant.",
      "All plants that require full sun are drought-resistant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The garden could contain only shade-loving plants (Statement 1). Some of these shade-loving plants could be drought-resistant (Statement 2). Statement 3 describes a property of full-sun plants that doesn't conflict, as no full-sun plants are in this garden according to Statement 1."
  },
  {
    "id": "gen-18-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students taking the advanced calculus course have strong math backgrounds.",
      "Some students with strong math backgrounds are not taking the advanced calculus course.",
      "Every student taking the advanced calculus course also takes a literature elective."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Students in advanced calculus have strong math backgrounds and take literature electives. The group of students with strong math backgrounds is larger than just those taking advanced calculus. No contradiction arises from these conditions."
  },
  {
    "id": "gen-18-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members supported the proposal.",
      "No one who supported the proposal attended the subsequent meeting.",
      "Some committee members attended the subsequent meeting."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says all committee members supported the proposal. If Statement 2 is true, then no one who supported the proposal attended the meeting, which means no committee member attended the meeting. This conclusion contradicts Statement 3, which asserts that some committee members did attend the meeting. Removing Statement 2 resolves this contradiction, as Statements 1 and 3 can be consistent; committee members could support the proposal and some could attend the meeting."
  },
  {
    "id": "gen-18-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every valid driver's license belongs to an adult.",
      "No adult has a criminal record.",
      "Some valid driver's licenses belong to people with a criminal record."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says all valid driver's licenses belong to adults. If Statement 2 is true, then no adult has a criminal record, which means no valid driver's license belongs to someone with a criminal record. This conclusion contradicts Statement 3, which claims some valid driver's licenses belong to people with a criminal record. Removing Statement 2 resolves this contradiction, as it allows for the possibility that some adults with valid licenses have criminal records."
  },
  {
    "id": "gen-19-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that migrate fly south for the winter.",
      "No bird that flies south for the winter has a blue plumage.",
      "Some birds with blue plumage migrate."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all birds that migrate do not have a blue plumage. Statement 3, however, asserts that some birds with blue plumage do migrate. This directly contradicts the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-19-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All artists are creative individuals.",
      "Some creative individuals are not artists.",
      "Every student in this class is a creative individual.",
      "No student in this class is an artist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 indicates all students are creative individuals. Statement 4 says no student is an artist. This means students are a subset of creative individuals who are not artists, which is consistent with Statements 1 and 2."
  },
  {
    "id": "gen-19-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valuable paintings are displayed in secure galleries.",
      "No painting displayed in a secure gallery is ever available for private sale.",
      "The museum acquired a painting that is available for private sale.",
      "The museum acquired only valuable paintings."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that all valuable paintings are not available for private sale. Statements 3 and 4 together imply that the museum acquired some valuable paintings that are available for private sale. This creates a direct contradiction with the conclusion from Statements 1 and 2."
  },
  {
    "id": "gen-19-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a dog is a terrier, then it is a lively breed.",
      "Some lively breeds are not terriers.",
      "All dogs from this kennel are terriers.",
      "All dogs from this kennel are lively breeds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 together imply that all dogs from this kennel are lively breeds, which is directly stated by Statement 4. Statement 2, that some lively breeds are not terriers, is consistent as it simply means not all lively breeds belong to the terrier category."
  },
  {
    "id": "gen-19-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every employee who received a bonus had exceeded their annual sales target.",
      "Anyone who exceeded their annual sales target also contributed to a new client acquisition.",
      "No employee who contributed to a new client acquisition was laid off.",
      "Margaret was laid off, but she received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically conclude that any employee who received a bonus was not laid off. Statement 4 explicitly states that Margaret was laid off and received a bonus, which directly contradicts the conclusion from the first three statements."
  },
  {
    "id": "gen-19-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals possess a spinal column.",
      "No insect possesses a spinal column.",
      "Some creatures with a spinal column are not mammals.",
      "Whales are mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and 4 imply that whales possess a spinal column, which is consistent. Statement 2 adds information about insects without creating conflict. Statement 3 allows for other types of animals (like birds or fish) to have spinal columns without being mammals, which is also consistent."
  },
  {
    "id": "gen-19-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires very little water.",
      "Any plant requiring very little water thrives in arid climates.",
      "There are some succulents that do not thrive in arid climates."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all succulents thrive in arid climates. Statement 3 directly contradicts this, asserting that some succulents do not thrive in arid climates."
  },
  {
    "id": "gen-19-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All high-performance cars are equipped with advanced safety features.",
      "Some vehicles with advanced safety features are not high-performance cars.",
      "No car equipped with advanced safety features is unsafe to drive.",
      "All high-performance cars are safe to drive."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 logically lead to the conclusion that all high-performance cars are safe to drive, which is affirmed by Statement 4. Statement 2 simply notes that not all vehicles with advanced safety features are high-performance cars, which is consistent with the other statements."
  },
  {
    "id": "gen-19-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who enrolls in the advanced calculus course has a strong math background.",
      "Students with strong math backgrounds always excel in problem-solving.",
      "No student who excels in problem-solving struggles with abstract concepts.",
      "Some students enrolled in advanced calculus struggle with abstract concepts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that all students enrolled in advanced calculus do not struggle with abstract concepts. Statement 4 directly contradicts this conclusion by claiming that some students in advanced calculus do struggle with abstract concepts."
  },
  {
    "id": "gen-19-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "All domestic cats are felines.",
      "Some animals with retractable claws are not felines.",
      "No domestic cat has non-retractable claws."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all domestic cats have retractable claws, which is consistent with Statement 4 (no domestic cat has non-retractable claws). Statement 3, indicating some animals with retractable claws are not felines, simply provides additional consistent information about other animal groups."
  },
  {
    "id": "gen-20-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a creature is an insect, it has six legs.",
      "All creatures with six legs are arthropods.",
      "No arthropod is a vertebrate.",
      "Every creature in the Kriket family is an insect.",
      "Some creatures in the Kriket family are vertebrates."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 establish a chain: If a creature is a Kriket family member, then it is an insect, has six legs, is an arthropod, and is not a vertebrate. This means no Kriket family member is a vertebrate. Statement 5, however, claims that some Kriket family members are vertebrates, which directly contradicts this conclusion."
  },
  {
    "id": "gen-20-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs are highly motivated.",
      "No highly motivated person enjoys failure.",
      "Some people who do not enjoy failure are not successful entrepreneurs.",
      "Maria is a highly motivated person."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria is a highly motivated person and thus does not enjoy failure. She could or could not be a successful entrepreneur, which is consistent with the other statements. Statement 3 simply affirms that there are individuals who do not enjoy failure but are not successful entrepreneurs, which does not create a conflict."
  },
  {
    "id": "gen-20-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document is legally binding, it must be signed.",
      "All signed documents have been reviewed by a legal team.",
      "No document reviewed by a legal team contains typographical errors.",
      "Sarah's new contract contains typographical errors.",
      "Sarah's new contract is legally binding."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, 3, and 5 establish a chain: If Sarah's contract is legally binding, it must be signed, reviewed by a legal team, and therefore contain no typographical errors. This implies Sarah's contract contains no typographical errors. However, Statement 4 explicitly states that Sarah's new contract contains typographical errors, which creates a direct contradiction."
  },
  {
    "id": "gen-20-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All planets in the K-system have at least one moon.",
      "If a planet has a moon, it experiences tidal forces.",
      "Some objects experiencing tidal forces are not planets.",
      "Planet X is in the K-system."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Planet X is in the K-system, so it has at least one moon and experiences tidal forces. Statement 3 merely points out that some objects experiencing tidal forces are not planets, which is possible and does not contradict any other statement."
  },
  {
    "id": "gen-20-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful experiment requires meticulous planning.",
      "If a project has meticulous planning, it receives adequate funding.",
      "No project that receives adequate funding ever fails.",
      "Dr. Smith's latest experiment was a failure.",
      "Dr. Smith's latest experiment had meticulous planning."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2, 3, and 5 together imply that Dr. Smith's experiment, having meticulous planning, must have received adequate funding and therefore could not have been a failure. Statement 4 directly contradicts this conclusion by stating the experiment was a failure. Statement 1 is not necessary for this contradiction."
  },
  {
    "id": "gen-20-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All rare books are valuable.",
      "If a book is valuable, it is kept in a secure vault.",
      "Some books kept in a secure vault are not rare.",
      "This first edition copy of \"Moby Dick\" is valuable."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The first edition \"Moby Dick\" is valuable and thus kept in a secure vault. The fact that some books in vaults are not rare is perfectly consistent with all rare books being valuable and kept in vaults; it just means there are other valuable, non-rare books also kept securely."
  },
  {
    "id": "gen-20-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a decision is ethical, it prioritizes long-term well-being.",
      "All decisions that prioritize long-term well-being avoid immediate gratification.",
      "No decision that avoids immediate gratification causes widespread discontent.",
      "The council's new policy avoids immediate gratification.",
      "The council's new policy causes widespread discontent."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 2, 3, and 4 establish a chain: The council's new policy avoids immediate gratification, which means it causes no widespread discontent. Statement 5 directly contradicts this by stating the policy causes widespread discontent. Statement 1 is not required for this contradiction."
  },
  {
    "id": "gen-20-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful athlete trains intensely.",
      "If someone trains intensely, they maintain a strict diet.",
      "Some people who maintain a strict diet are not successful athletes.",
      "Mark maintains a strict diet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Mark maintains a strict diet. This is consistent with him being a successful athlete (who would train intensely and diet) or not being one (as Statement 3 allows for people who diet but are not successful athletes)."
  },
  {
    "id": "gen-20-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All valid arguments have true premises.",
      "If an argument has true premises, its conclusion must be true.",
      "No argument with a true conclusion is unsound.",
      "The prosecutor's argument is valid.",
      "The prosecutor's argument is unsound."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 establish a chain: If the prosecutor's argument is valid, then it has true premises, a true conclusion, and therefore cannot be unsound. This means the prosecutor's argument is sound. Statement 5, however, claims the prosecutor's argument is unsound, which creates a direct contradiction."
  },
  {
    "id": "gen-20-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every well-run company has clear objectives.",
      "If a company has clear objectives, its employees are highly motivated.",
      "No company with highly motivated employees experiences frequent turnover.",
      "Some companies experience frequent turnover."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1, 2, and 3 establish that every well-run company has clear objectives, highly motivated employees, and therefore does not experience frequent turnover. Statement 4 simply states that some companies experience frequent turnover, which is consistent with these companies not being \"well-run\" as defined by the preceding statements."
  },
  {
    "id": "gen-21-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are nocturnal birds.",
      "No nocturnal birds hunt during the day.",
      "Some owls hunt during the day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are nocturnal birds. Statement 2 says no nocturnal birds hunt during the day. Combining these two means that all owls do not hunt during the day. This directly contradicts Statement 3, which claims some owls do hunt during the day."
  },
  {
    "id": "gen-21-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant needs daily watering, it has shallow roots.",
      "All ferns need daily watering.",
      "Some plants with shallow roots are not ferns."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all ferns have shallow roots. Statement 3 claims that some plants with shallow roots are not ferns, which is consistent because there can be other types of plants with shallow roots, or some shallow-rooted plants that simply are not ferns."
  },
  {
    "id": "gen-21-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategists enjoy playing simple board games.",
      "Some people who enjoy playing simple board games are members of the chess club."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all chess club members are skilled strategists. Statement 2 states that no skilled strategists enjoy simple board games. Together, these mean no members of the chess club enjoy simple board games. This directly contradicts Statement 3, which claims some people who enjoy simple board games are chess club members."
  },
  {
    "id": "gen-21-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur possesses strong leadership skills.",
      "Not all people with strong leadership skills are successful entrepreneurs.",
      "David has strong leadership skills."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 describes a characteristic of successful entrepreneurs. Statement 2 clarifies that possessing strong leadership skills does not guarantee one is a successful entrepreneur. Statement 3 introduces David, who could be a successful entrepreneur or one of the leadership-skilled individuals who is not. No contradiction exists."
  },
  {
    "id": "gen-21-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruits that are sweet contain natural sugars.",
      "No apple contains natural sugars.",
      "Some apples are sweet."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a fruit is sweet, it contains natural sugars. Statement 3 claims some apples are sweet, which means those apples must contain natural sugars. However, Statement 2 asserts that no apple contains natural sugars, creating a direct contradiction with the conclusion derived from Statements 1 and 3."
  },
  {
    "id": "gen-21-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train regularly.",
      "No professional athlete is a full-time student.",
      "Some full-time students train regularly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 describe properties of professional athletes, stating they train regularly and are not full-time students. Statement 3 states that some full-time students train regularly. This is perfectly consistent, as these full-time students could be individuals who train regularly but are not professional athletes."
  },
  {
    "id": "gen-21-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All cats are carnivores.",
      "No carnivores eat only plants.",
      "Some animals that eat only plants are cats."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all cats are carnivores. Statement 2 says no carnivores eat only plants. Combining these two means that all cats do not eat only plants. This directly contradicts Statement 3, which claims some animals that eat only plants are cats."
  },
  {
    "id": "gen-21-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a hummingbird, it can hover.",
      "All birds that can hover have very high metabolisms.",
      "A robin cannot hover."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if a bird is a hummingbird, it can hover, and thus has a very high metabolism. Statement 3 introduces a robin that cannot hover. This does not create a contradiction because robins are simply not hummingbirds, and the properties of hummingbirds do not apply to them in this context."
  },
  {
    "id": "gen-21-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful politician is an excellent public speaker.",
      "No one who is an excellent public speaker lacks charisma.",
      "All candidates in the recent election are successful politicians.",
      "At least one candidate in the recent election lacks charisma."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates all candidates are successful politicians. Statement 1 states every successful politician is an excellent public speaker. Statement 2 asserts that all excellent public speakers have charisma. Therefore, it must be true that every candidate has charisma. Statement 4 directly contradicts this by claiming at least one candidate lacks charisma."
  },
  {
    "id": "gen-21-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy playing fetch.",
      "Some animals that enjoy playing fetch are not dogs.",
      "Max is an animal that enjoys playing fetch."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 tells us dogs enjoy playing fetch. Statement 2 indicates that there are other animals, besides dogs, who also enjoy playing fetch. Statement 3 introduces Max, who enjoys playing fetch. Max could be a dog or one of the non-dog animals that enjoy fetch; either scenario is consistent with all given information."
  },
  {
    "id": "gen-22-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete wins a gold medal, they trained for over 1000 hours.",
      "Every athlete who trained for over 1000 hours maintained a strict diet.",
      "No athlete who maintained a strict diet felt exhausted after the race.",
      "Some athletes who won a gold medal felt exhausted after the race."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if an athlete wins a gold medal, then they trained for over 1000 hours, which means they maintained a strict diet. Statement 3 then concludes that such an athlete did not feel exhausted after the race. This leads to the conclusion that no athlete who won a gold medal felt exhausted after the race. Statement 4 directly contradicts this by stating that some athletes who won a gold medal did feel exhausted. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-22-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have completed the advanced training module.",
      "If an employee completes the advanced training module, they are eligible for promotion.",
      "Some employees who are eligible for promotion do not receive a bonus.",
      "Sarah received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statements 1 and 2, we can infer that any employee who receives a bonus is eligible for promotion. Statement 4 tells us Sarah received a bonus, so she is eligible for promotion. Statement 3 indicates that there are some employees eligible for promotion who do not receive a bonus, which is perfectly consistent with the other statements; it doesn't mean all eligible employees receive a bonus."
  },
  {
    "id": "gen-22-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it requires shade.",
      "Every plant that requires shade cannot tolerate direct sunlight.",
      "All plants that cannot tolerate direct sunlight are sensitive to heat.",
      "No fern is sensitive to heat."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a plant is a fern, then it requires shade; if it requires shade, it cannot tolerate direct sunlight; if it cannot tolerate direct sunlight, it is sensitive to heat. This chain implies that every fern is sensitive to heat. Statement 4 directly contradicts this conclusion by asserting that no fern is sensitive to heat. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-22-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a student has registered, they cannot attend the workshop.",
      "All students who registered before the deadline received a discount.",
      "Some students who received a discount did not register before the deadline.",
      "If a student attends the workshop, they are eligible for the certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 means that if a student attends, they must be registered. Statement 4 links attendance to certificate eligibility. Statements 2 and 3 concern discounts and registration deadlines, which are compatible; Statement 3 merely points out that registration before the deadline is not the only way to receive a discount, which does not conflict with Statement 2 saying it's one way."
  },
  {
    "id": "gen-22-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle is an electric car, it produces zero emissions.",
      "Every vehicle that produces zero emissions qualifies for a tax credit.",
      "No vehicle that qualifies for a tax credit is subject to a luxury tax.",
      "Some electric cars are subject to a luxury tax."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a vehicle is an electric car, it produces zero emissions; if it produces zero emissions, it qualifies for a tax credit; and if it qualifies for a tax credit, it is not subject to a luxury tax. This chain implies that no electric car is subject to a luxury tax. Statement 4 directly contradicts this conclusion by asserting that some electric cars are subject to a luxury tax. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-22-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A candidate will be interviewed only if they have prior management experience.",
      "No candidate with prior management experience has submitted a late application.",
      "If a candidate submitted a late application, they will not be considered for the position.",
      "Sarah was interviewed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 4, Sarah was interviewed. From Statement 1, this means Sarah has prior management experience. From Statement 2, this means Sarah did not submit a late application. Statement 3 implies that if a candidate submitted a late application, they won't be considered, but since Sarah did not submit a late application, this statement does not lead to a contradiction regarding her consideration."
  },
  {
    "id": "gen-22-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced seminar, they must have completed the prerequisite course.",
      "Every student who completed the prerequisite course received an excellent grade in their previous coursework.",
      "No student with an excellent grade in their previous coursework struggles with critical thinking.",
      "All students enrolled in the advanced seminar struggle with critical thinking."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a student enrolls in the advanced seminar, they completed the prerequisite course; if they completed the prerequisite, they received an excellent grade; and if they received an excellent grade, they do not struggle with critical thinking. This implies that no student in the advanced seminar struggles with critical thinking. Statement 4 directly contradicts this by stating that all students enrolled in the advanced seminar struggle with critical thinking. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-22-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a raptor, it is a predator.",
      "All birds that are predators have sharp talons.",
      "Some birds with sharp talons are not raptors.",
      "No bird that is not a predator has sharp talons."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 4, if a bird has sharp talons, it must be a predator (contrapositive of 'No bird that is not a predator has sharp talons'). Combined with Statement 2 ('All birds that are predators have sharp talons'), this means that a bird has sharp talons if and only if it is a predator. Statement 1 states that raptors are predators (and thus have sharp talons). Statement 3, 'Some birds with sharp talons are not raptors,' is consistent with the other statements, as there can be non-raptor predators with sharp talons."
  },
  {
    "id": "gen-22-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every politician who supports the bill has read its full text.",
      "No one who has read the full text of the bill believes it will pass easily.",
      "If a politician does not believe the bill will pass easily, they will vote against it.",
      "Some politicians who support the bill will vote for it."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a politician supports the bill, they read its full text; if they read the full text, they do not believe it will pass easily; and if they do not believe it will pass easily, they will vote against it. This implies that any politician who supports the bill will vote against it. Statement 4, however, claims that some politicians who support the bill will vote for it, which directly contradicts the previous conclusion (assuming 'vote for' is the opposite of 'vote against'). Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-22-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the entrance exam, they are eligible for a scholarship.",
      "No student who is eligible for a scholarship needs financial aid.",
      "Some students who need financial aid pass the entrance exam.",
      "All students who pass the entrance exam are automatically admitted."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: if a student passes the entrance exam, they are eligible for a scholarship, and if they are eligible for a scholarship, they do not need financial aid. This implies that no student who passes the entrance exam needs financial aid. Statement 3, however, asserts that some students who need financial aid also pass the entrance exam, which directly contradicts the conclusion derived from Statements 1 and 2. Removing Statement 3 resolves this inconsistency."
  },
  {
    "id": "gen-23-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in this aviary have blue feathers.",
      "No bird with blue feathers can sing.",
      "Some birds in this aviary can sing."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no birds in this aviary can sing. However, Statement 3 claims that some birds in this aviary can sing, creating a contradiction."
  },
  {
    "id": "gen-23-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who passed the exam studied for it.",
      "Some students studied for the exam but did not pass.",
      "Only students who studied for the exam were eligible to take it."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all three statements to be true. Some students could have studied and passed, while others studied but did not pass. All eligible students are among those who studied."
  },
  {
    "id": "gen-23-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist is a novice player.",
      "Some members of the chess club are novice players."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that no member of the chess club is a novice player. This directly conflicts with Statement 3, which asserts that some members of the chess club are novice players."
  },
  {
    "id": "gen-23-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every actor in the play attended rehearsal.",
      "Some people who attended rehearsal are not actors in the play.",
      "Not all actors in the play are experienced performers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all three statements to be true. Some actors could be experienced, and some not, while all of them attended rehearsal. Additionally, others who attended rehearsal might not be actors."
  },
  {
    "id": "gen-23-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant has purple leaves, it needs direct sunlight.",
      "All plants that need direct sunlight are tropical species.",
      "Some plants have purple leaves.",
      "No tropical species has purple leaves."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that if a plant has purple leaves, it is a tropical species. Statement 4 asserts that no tropical species has purple leaves. Combined, these imply that no plant can have purple leaves, which contradicts Statement 3."
  },
  {
    "id": "gen-23-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All athletes on the team train daily.",
      "No one who trains daily skips warm-ups.",
      "Some people who skip warm-ups are very successful.",
      "Not all athletes on the team are very successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. Athletes on the team train daily and never skip warm-ups, with some being successful and some not. There could also be successful individuals who skip warm-ups, provided they are not athletes on this team."
  },
  {
    "id": "gen-23-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur has a strong work ethic.",
      "Someone with a strong work ethic is always innovative.",
      "Not a single innovative person avoids new challenges.",
      "Some successful entrepreneurs avoid new challenges."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that every successful entrepreneur does not avoid new challenges. Statement 4, however, states that some successful entrepreneurs do avoid new challenges, which creates a direct contradiction."
  },
  {
    "id": "gen-23-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds that nest in trees are flightless.",
      "Some flightless birds live in cold climates.",
      "Every bird that lives in a cold climate builds its nest on the ground."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. There can be flightless birds in cold climates that build their nests on the ground, and these would not be birds that nest in trees, thus avoiding contradiction with Statement 1."
  },
  {
    "id": "gen-23-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All project managers attended the training session.",
      "No one who attended the training session completed the pre-course reading.",
      "Some who completed the pre-course reading are project managers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no project manager completed the pre-course reading. Statement 3, however, asserts that some individuals who completed the pre-course reading are project managers, which directly contradicts the implication of the first two statements."
  },
  {
    "id": "gen-23-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every employee who received a bonus worked overtime.",
      "Some employees who worked overtime did not receive a bonus.",
      "No employee who received a bonus was a new hire."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all three statements to be true. Some employees who worked overtime could have received a bonus (and were not new hires), while other employees who worked overtime did not receive a bonus (and could have been new hires or not)."
  },
  {
    "id": "gen-24-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique clocks require specialized maintenance.",
      "Any item requiring specialized maintenance is handled by a certified technician.",
      "No item handled by a certified technician is eligible for standard warranty claims.",
      "The grandfather clock in the study is an antique clock, and it is eligible for a standard warranty claim."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if an item is an antique clock, it will not be eligible for a standard warranty claim. Statement 4 asserts that the grandfather clock in the study is an antique clock and *is* eligible for a standard warranty claim, which directly contradicts this conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-24-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful negotiation involves compromise.",
      "Some compromises are difficult to achieve.",
      "No difficult achievement is ever quick.",
      "This negotiation was quick."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, a quick negotiation could be successful and involve a compromise that was not difficult to achieve, thus aligning with all conditions. The existence of some difficult compromises (Statement 2) does not mean this particular quick negotiation's compromise was difficult."
  },
  {
    "id": "gen-24-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant has variegated leaves, it is sensitive to cold temperatures.",
      "All plants sensitive to cold temperatures are kept indoors during winter.",
      "No plant kept indoors during winter can withstand frost.",
      "Some plants with variegated leaves can withstand frost."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if a plant has variegated leaves, it is sensitive to cold temperatures; if it is sensitive to cold, it is kept indoors; if kept indoors, it cannot withstand frost. This implies that no plant with variegated leaves can withstand frost. Statement 4 directly contradicts this conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-24-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the expedition wore waterproof boots.",
      "Some people who wore waterproof boots did not cross the river.",
      "No one who crossed the river stayed dry.",
      "Mark was a member of the expedition."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Mark, as an expedition member, wore waterproof boots. He could have crossed the river and gotten wet, consistent with Statement 3. The fact that some people wearing waterproof boots didn't cross the river (Statement 2) does not prevent Mark from crossing it."
  },
  {
    "id": "gen-24-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful software update includes critical security patches.",
      "No critical security patch is optional for users.",
      "If a software feature is not optional for users, then it is automatically deployed.",
      "All new features in this week's successful software update require user consent before deployment."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that any successful software update includes features that are automatically deployed. Statement 4 describes a specific successful software update (this week's update) whose new features *require user consent before deployment*, meaning they are not automatically deployed. This directly contradicts the conclusion derived from the first three statements. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-24-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who travel internationally carry a special company ID.",
      "Some managers travel internationally.",
      "No employee who does not carry a special company ID can access secure servers.",
      "Sarah is a manager and can access secure servers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Sarah, as a manager, could carry a special company ID, which allows her to access secure servers (consistent with Statements 3 and 4). She might or might not be one of the managers who travels internationally (Statement 2). If she does travel internationally, Statement 1 holds for her."
  },
  {
    "id": "gen-24-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird is a nocturnal predator, it has exceptional night vision.",
      "All birds with exceptional night vision hunt silently.",
      "No bird that hunts silently has brightly colored plumage.",
      "The Kakapo is a bird, it has brightly colored plumage, and it is a nocturnal predator."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a bird is a nocturnal predator, it cannot have brightly colored plumage. Statement 4 asserts that the Kakapo is *both* a nocturnal predator *and* has brightly colored plumage, which directly contradicts the conclusion derived from the first three statements. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-24-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All competitive athletes follow a strict training regimen.",
      "Some individuals who follow a strict training regimen do not compete professionally.",
      "No one who competes professionally avoids injury.",
      "Emily is a competitive athlete and has never been injured."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Emily, as a competitive athlete, follows a strict training regimen. Her never being injured implies, by Statement 3, that she does not compete professionally. This is fully consistent with Statement 2, which states that some individuals following a strict training regimen do not compete professionally."
  },
  {
    "id": "gen-24-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a city experiences rapid growth, its infrastructure becomes strained.",
      "All cities with strained infrastructure require significant public investment.",
      "No city requiring significant public investment can maintain low property taxes.",
      "City X has experienced rapid growth and successfully maintained low property taxes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a city experiences rapid growth, it cannot maintain low property taxes. Statement 4 asserts that City X *both* experienced rapid growth *and* successfully maintained low property taxes, which directly contradicts the conclusion derived from the first three statements. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-24-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful scientific experiment generates new data.",
      "Some new data challenges existing theories.",
      "No research that challenges existing theories is quickly published.",
      "Dr. Lee's experiment was a successful scientific experiment and was quickly published."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Dr. Lee's experiment was successful and generated new data. Since it was quickly published, Statement 3 implies that its data did not challenge existing theories. This is consistent with Statement 2, which only claims *some* new data challenges existing theories, not all of it."
  },
  {
    "id": "gen-25-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a robin, then it has a red breast.",
      "Birds with red breasts always migrate south for winter.",
      "No bird that migrates south for winter stays in the region year-round.",
      "Some robins stay in the region year-round."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a bird is a robin (Statement 1), it has a red breast. If it has a red breast (Statement 2), it migrates south for winter. If it migrates south for winter (Statement 3), it does not stay in the region year-round. This forms a chain: all robins do not stay in the region year-round. Statement 4, however, claims that some robins do stay in the region year-round, which directly contradicts this conclusion."
  },
  {
    "id": "gen-25-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members are eligible to vote.",
      "Only eligible voters can attend the closed session.",
      "Some individuals who are eligible to vote are not committee members.",
      "Maria attended the closed session."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If Maria attended the closed session (Statement 4), then she is an eligible voter (Statement 2). This is consistent with Statement 1 (which states all committee members are eligible, but not vice-versa) and Statement 3 (which allows for eligible voters who are not committee members, and Maria could be one such person)."
  },
  {
    "id": "gen-25-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes an internship, they gain valuable experience.",
      "Students with valuable experience are always preferred for full-time positions.",
      "No student preferred for a full-time position is unemployed after graduation.",
      "Some students who complete an internship are unemployed after graduation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a student completes an internship (Statement 1), they gain valuable experience. If they have valuable experience (Statement 2), they are preferred for full-time positions. If they are preferred for full-time positions (Statement 3), they are not unemployed after graduation. This forms a chain: all students who complete an internship are not unemployed after graduation. Statement 4, however, claims that some students who complete an internship are unemployed after graduation, creating a contradiction."
  },
  {
    "id": "gen-25-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who received a bonus attended the annual conference.",
      "No employee who attended the annual conference missed the leadership training.",
      "Some employees who did not receive a bonus missed the leadership training.",
      "Only employees who completed leadership training are eligible for promotion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If an employee received a bonus (Statement 1), they attended the conference. If they attended the conference (Statement 2), they completed leadership training. Thus, all employees who received a bonus completed leadership training. Statement 3 suggests some employees without a bonus missed training, which doesn't contradict the previous chain. Statement 4 sets a condition for promotion, but doesn't create any conflict with the other statements."
  },
  {
    "id": "gen-25-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a succulent, it requires minimal watering.",
      "No plant that thrives in humid climates requires minimal watering.",
      "Every plant in Dr. Lee's collection is a succulent.",
      "Some plants in Dr. Lee's collection thrive in humid climates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a plant is in Dr. Lee's collection (Statement 3), it is a succulent. If it is a succulent (Statement 1), it requires minimal watering. If it requires minimal watering, it does not thrive in humid climates (contrapositive of Statement 2). This forms a chain: plants in Dr. Lee's collection do not thrive in humid climates. Statement 4, however, claims some plants in Dr. Lee's collection do thrive in humid climates, which creates a contradiction."
  },
  {
    "id": "gen-25-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds that can fly have hollow bones.",
      "No bird with hollow bones is incapable of flight.",
      "Some birds that cannot fly do not have hollow bones.",
      "Penguins are birds that cannot fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that flying birds have hollow bones. Statement 2, which states no bird with hollow bones is incapable of flight, means all birds with hollow bones can fly. Together, these imply that a bird can fly if and only if it has hollow bones. Statement 3 is consistent with this equivalence: if some birds cannot fly, then they also do not have hollow bones. Statement 4 simply categorizes penguins as non-flying birds, which then implies they also do not have hollow bones."
  },
  {
    "id": "gen-25-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a proposal is approved, it must be fully funded.",
      "No proposal that lacks sufficient detail is fully funded.",
      "Every proposal submitted by the research team was approved.",
      "Some proposals submitted by the research team lacked sufficient detail."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a proposal was submitted by the research team (Statement 3), it was approved. If it was approved (Statement 1), it was fully funded. If it was fully funded, it did not lack sufficient detail (contrapositive of Statement 2). This forms a chain: proposals submitted by the research team did not lack sufficient detail. Statement 4, however, claims that some proposals submitted by the research team lacked sufficient detail, creating a contradiction."
  },
  {
    "id": "gen-25-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only artists who complete a portfolio review are considered for a gallery exhibit.",
      "If an artist completes a portfolio review, they receive an eligibility letter.",
      "Some artists who receive an eligibility letter are not considered for a gallery exhibit.",
      "Every artist selected for a gallery exhibit received an eligibility letter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 means that if an artist is considered for an exhibit, they completed a portfolio review. Combining this with Statement 2, we deduce that if an artist is considered for an exhibit, they receive an eligibility letter. This conclusion is reinforced by Statement 4. Statement 3 simply allows for artists who received an eligibility letter but were not selected for an exhibit, which is possible if completing a review (and receiving a letter) is a necessary, but not sufficient, condition for an exhibit."
  },
  {
    "id": "gen-25-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is enrolled in the advanced calculus course, they have completed differential equations.",
      "Anyone who has completed differential equations has also completed linear algebra.",
      "No student who has completed linear algebra is still considered a freshman.",
      "Some freshmen are enrolled in the advanced calculus course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a student is enrolled in the advanced calculus course (Statement 1), they have completed differential equations. If they have completed differential equations (Statement 2), they have completed linear algebra. If they have completed linear algebra (Statement 3), they are not considered a freshman. This forms a chain: students enrolled in advanced calculus are not freshmen. Statement 4, however, claims that some freshmen are enrolled in the advanced calculus course, which creates a contradiction."
  },
  {
    "id": "gen-25-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with full benefits receive paid vacation time.",
      "Employees who receive paid vacation time are not required to work on holidays.",
      "Some employees not required to work on holidays do not have full benefits.",
      "No employee with full benefits is required to work on holidays."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that employees with full benefits receive paid vacation time. Statement 2 indicates that employees with paid vacation time are not required to work on holidays. This forms a chain: all employees with full benefits are not required to work on holidays, which is restated by Statement 4. Statement 3 is consistent, as it is possible for some employees not required to work on holidays to lack full benefits (meaning full benefits are a sufficient but not necessary condition for not working holidays)."
  },
  {
    "id": "gen-26-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mathematicians love puzzles.",
      "No one who loves puzzles dislikes logic.",
      "Some mathematicians dislike logic."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all mathematicians love puzzles. Statement 2 says no one who loves puzzles dislikes logic. Taken together, these imply that no mathematicians dislike logic, which directly contradicts Statement 3."
  },
  {
    "id": "gen-26-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All insects have six legs.",
      "A creature with six legs is not necessarily an insect.",
      "Spiders do not have six legs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 defines a characteristic of insects. Statement 2 clarifies that having six legs does not uniquely identify something as an insect. Statement 3 provides a fact about spiders, which are known not to be insects and not to have six legs. No contradiction arises."
  },
  {
    "id": "gen-26-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who attended the seminar passed the exam.",
      "No student who passed the exam failed the course.",
      "Some students failed the course but attended the seminar."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that attending the seminar leads to passing the exam. Statement 2 states that passing the exam means not failing the course. Therefore, any student who attended the seminar must not have failed the course. This contradicts Statement 3, which claims some students both attended the seminar and failed the course."
  },
  {
    "id": "gen-26-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Sarah trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes a characteristic of professional athletes. Statement 2 acknowledges that others also train daily. Sarah could be a professional athlete, or she could be one of the people who train daily but are not professional athletes, as described in Statement 2. No contradiction."
  },
  {
    "id": "gen-26-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "No plant with thorns is scentless.",
      "Some roses are scentless."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all roses have thorns. Statement 2 says that no plant with thorns is scentless. Combining these, it must be true that no rose is scentless. This directly contradicts Statement 3, which asserts that some roses are scentless."
  },
  {
    "id": "gen-26-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "Every mammal has a backbone."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes dogs as a subset of mammals. Statement 2 confirms that the category of mammals includes animals other than dogs. Statement 3 applies a characteristic to all mammals, which would include dogs and any other mammals. No contradiction arises from these facts."
  },
  {
    "id": "gen-26-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2010 has airbags.",
      "No car with airbags lacks an anti-lock braking system.",
      "Some cars manufactured after 2010 lack an anti-lock braking system."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says cars after 2010 have airbags. Statement 2 says cars with airbags have an anti-lock braking system. Together, these imply that every car manufactured after 2010 has an anti-lock braking system. This conclusion directly contradicts Statement 3, which claims some cars after 2010 lack such a system."
  },
  {
    "id": "gen-26-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors read widely.",
      "Some people who read widely are not successful authors.",
      "Dr. Elena Vance reads widely."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 identifies a trait of successful authors. Statement 2 acknowledges that reading widely is not exclusive to successful authors. Dr. Elena Vance could be a successful author, or she could be someone who reads widely but is not a successful author, which is consistent with all three statements."
  },
  {
    "id": "gen-26-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "No animal with retractable claws is a purely aquatic creature.",
      "Some felines are purely aquatic creatures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all felines have retractable claws. Statement 2 says no animal with retractable claws is purely aquatic. Therefore, it logically follows that no feline is a purely aquatic creature. This directly contradicts Statement 3, which claims some felines are purely aquatic."
  },
  {
    "id": "gen-26-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members attended the annual meeting.",
      "No one who attended the annual meeting was absent from the budget discussion.",
      "Maria is a committee member.",
      "Maria was absent from the budget discussion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all committee members attended the annual meeting. Statement 2 says no one who attended the annual meeting was absent from the budget discussion. Taken together, these imply that no committee member was absent from the budget discussion. Statement 3 establishes Maria as a committee member, which means she should not have been absent from the budget discussion. This contradicts Statement 4."
  },
  {
    "id": "gen-27-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies diligently, they will pass the exam.",
      "No student who passes the exam fails the course.",
      "Every student in this class studies diligently.",
      "At least one student in this class fails the course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish a chain: If a student studies diligently, they pass the exam, and if they pass the exam, they do not fail the course. Therefore, if a student studies diligently, they do not fail the course. Statement 3 asserts that every student in the class studies diligently, which implies that no student in the class fails the course. This directly contradicts Statement 4, which claims that at least one student in this class fails the course. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-27-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work weekends receive bonus pay.",
      "No employee who started this year works weekends.",
      "Some employees who started this year receive bonus pay.",
      "If an employee receives bonus pay, they must have worked overtime."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all statements to be true. Employees who started this year do not work weekends (Statement 2). However, receiving bonus pay (Statement 3) does not necessarily imply working weekends, only that working weekends results in bonus pay (Statement 1). These employees could receive bonus pay for other reasons, such as working overtime (Statement 4), which is entirely consistent with not working weekends."
  },
  {
    "id": "gen-27-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses garlic, it is a savory dish.",
      "No savory dish contains chocolate.",
      "Any dish that does not contain chocolate is suitable for a specific guest.",
      "Some recipes that use garlic are not suitable for that specific guest."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a recipe uses garlic, it is a savory dish (1). If it is a savory dish, it does not contain chocolate (2). If it does not contain chocolate, it is suitable for the specific guest (3). Therefore, all recipes that use garlic are suitable for the specific guest. This conclusion directly contradicts Statement 4, which claims that some recipes that use garlic are not suitable for that specific guest. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-27-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who volunteer for the outreach program are eligible for a scholarship.",
      "If a student is eligible for a scholarship, they have maintained a GPA of 3.5 or higher.",
      "Some students who volunteer for the outreach program do not receive a scholarship.",
      "No student who receives a scholarship failed a course last semester."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Students who volunteer are eligible for scholarships and have a high GPA (Statements 1, 2). It is consistent for some of these eligible students not to receive a scholarship (Statement 3), as eligibility does not guarantee receipt. Statement 4 provides a condition for those who *do* receive a scholarship, which does not conflict with the other statements or the existence of eligible students who do not receive one."
  },
  {
    "id": "gen-27-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student submitted their assignment on time, they received full credit.",
      "No student who received full credit made an error on the rubric.",
      "Every student who did not submit their assignment on time made an error on the rubric.",
      "Some students who did not submit their assignment on time received full credit."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 establish a chain. Statement 2 means that if a student received full credit, they did not make an error on the rubric. The contrapositive of Statement 2 is: if a student made an error on the rubric, they did not receive full credit. Statement 3 means that if a student did not submit their assignment on time, they made an error on the rubric. Combining these, if a student did not submit their assignment on time (3), they made an error on the rubric, and if they made an error on the rubric (contrapositive of 2), they did not receive full credit. Therefore, no student who did not submit their assignment on time received full credit. This directly contradicts Statement 4, which claims that some students who did not submit their assignment on time received full credit. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-27-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs from this shelter are well-trained.",
      "No well-trained dog barks excessively.",
      "If a dog barks excessively, it bothers the neighbors.",
      "Some dogs from this shelter bother the neighbors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all dogs from this shelter do not bark excessively. Statement 3 states that excessive barking leads to bothering neighbors. However, Statement 3 does not claim that excessive barking is the *only* way to bother neighbors. Therefore, it is possible for some dogs from the shelter (who do not bark excessively) to still bother neighbors for other reasons, making all statements consistent."
  },
  {
    "id": "gen-27-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a museum exhibit is popular, it requires advance booking.",
      "No exhibit requiring advance booking is free to attend.",
      "Every exhibit that is not free to attend has security personnel present.",
      "All exhibits with security personnel present are covered by insurance.",
      "Some popular museum exhibits are not covered by insurance."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: If an exhibit is popular (1), it requires advance booking. If it requires advance booking (2), it is not free to attend. If it is not free to attend (3), it has security personnel. If it has security personnel (4), it is covered by insurance. Therefore, all popular museum exhibits are covered by insurance. This conclusion directly contradicts Statement 5, which states that some popular museum exhibits are not covered by insurance. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-27-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All software updates require a system restart.",
      "No system restart completes in less than five minutes.",
      "If an update is critical, it completes in less than five minutes.",
      "Some critical updates are available for download."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be consistent. From Statements 1 and 2, any software update requires a system restart, and no system restart completes in less than five minutes. Thus, no software update completes in less than five minutes. Statement 3 indicates that critical updates *do* complete in less than five minutes. This implies that critical updates cannot be classified as software updates under the definitions provided. Statement 4 merely states that some critical updates exist and are available, which is consistent with critical updates being a separate category from (some) software updates."
  },
  {
    "id": "gen-27-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a customer is a loyalty member, they receive exclusive discounts.",
      "No customer who receives exclusive discounts pays full price.",
      "Every customer in this promotion is a loyalty member.",
      "Some customers in this promotion pay full price."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that if a customer is a loyalty member, they receive exclusive discounts, and if they receive exclusive discounts, they do not pay full price. Therefore, loyalty members do not pay full price. Statement 3 asserts that every customer in this promotion is a loyalty member, which means no customer in this promotion pays full price. This directly contradicts Statement 4, which claims that some customers in this promotion pay full price. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-27-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who attend the monthly briefing are eligible for promotion.",
      "No employee eligible for promotion has received a disciplinary warning.",
      "If an employee receives a disciplinary warning, they must undergo retraining.",
      "Every employee who undergoes retraining completes a performance review.",
      "Some employees who attend the monthly briefing complete a performance review."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all employees who attend the monthly briefing have not received a disciplinary warning. Statements 3 and 4 establish that receiving a disciplinary warning leads to completing a performance review. However, completing a performance review (Statement 5) does not necessarily imply having received a disciplinary warning. Therefore, employees who attend the briefing (and thus have no disciplinary warning) can still complete a performance review for other reasons, making all statements consistent."
  },
  {
    "id": "gen-28-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "Every carnivore consumes meat.",
      "Some lions do not consume meat."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all lions are carnivores. Statement 2 says every carnivore consumes meat. Therefore, it must be true that all lions consume meat. This directly contradicts Statement 3, which claims some lions do not consume meat."
  },
  {
    "id": "gen-28-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds are mammals.",
      "All sparrows are birds.",
      "Some sparrows are mammals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says all sparrows are birds. Statement 1 says no birds are mammals. Combining these, it follows that no sparrows are mammals. This conclusion directly contradicts Statement 3, which asserts that some sparrows are mammals."
  },
  {
    "id": "gen-28-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All mathematicians are highly analytical.",
      "No highly analytical people are easily confused.",
      "Some mathematicians are easily confused."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all mathematicians are highly analytical. Statement 2 says no highly analytical people are easily confused. This means it must be true that no mathematicians are easily confused. This conclusion directly contradicts Statement 3, which states that some mathematicians are easily confused."
  },
  {
    "id": "gen-28-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "Every plant with thorns requires careful handling.",
      "Some roses do not require careful handling."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all roses have thorns. Statement 2 asserts that every plant with thorns requires careful handling. From these, it logically follows that all roses require careful handling. This conclusion directly contradicts Statement 3, which says some roses do not require careful handling."
  },
  {
    "id": "gen-28-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional musicians read sheet music.",
      "No amateur musicians read sheet music.",
      "Some professional musicians are also amateur musicians."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "If Statement 3 is true, then there exists at least one person who is both a professional musician and an amateur musician. According to Statement 1, this person must read sheet music. However, according to Statement 2, this same person must not read sheet music. This creates a direct contradiction, as one cannot both read and not read sheet music simultaneously."
  },
  {
    "id": "gen-28-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful project adheres to the budget.",
      "No project that adheres to the budget goes over schedule.",
      "Some successful projects go over schedule."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that every successful project adheres to the budget. Statement 2 states that no project adhering to the budget goes over schedule. Combining these, it logically follows that no successful project goes over schedule. This conclusion directly contradicts Statement 3, which claims that some successful projects go over schedule."
  },
  {
    "id": "gen-29-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful mountaineers prepare for extreme weather.",
      "No one who prepares for extreme weather avoids using the latest gear.",
      "Some experienced climbers are successful mountaineers.",
      "Every experienced climber avoids using the latest gear."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all successful mountaineers use the latest gear. Statement 3 connects some experienced climbers to successful mountaineers, which then implies that some experienced climbers use the latest gear. This conclusion directly contradicts Statement 4, which claims every experienced climber avoids using the latest gear. Removing Statement 3 breaks the specific link that establishes this contradiction."
  },
  {
    "id": "gen-29-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the advisory board have extensive legal experience.",
      "Some individuals with extensive legal experience are not on the advisory board.",
      "Only individuals with extensive legal experience can serve on the appeals panel.",
      "Sarah serves on the appeals panel."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Sarah's service on the appeals panel implies she has extensive legal experience (from Statement 3). This is compatible with all advisory board members having extensive legal experience (Statement 1) and with some experienced legal professionals not being on the advisory board (Statement 2)."
  },
  {
    "id": "gen-29-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare book collectors are experts in medieval script.",
      "No one who is an expert in medieval script relies solely on digital archives.",
      "Every librarian at the university archives relies solely on digital archives.",
      "Some rare book collectors are librarians at the university archives."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 imply that no librarian at the university archives is an expert in medieval script. Statement 1 states that all rare book collectors are experts in medieval script. Therefore, if some rare book collectors are also librarians at the university archives (Statement 4), those specific collectors would simultaneously be experts in medieval script and not experts in medieval script, which is a contradiction. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-29-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All organisms with bioluminescence live in deep ocean environments.",
      "No organism living in shallow coastal waters exhibits bioluminescence.",
      "Some deep ocean environments contain species without bioluminescence.",
      "The newly discovered species, X, lives in a deep ocean environment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Species X living in a deep ocean environment does not require it to have bioluminescence or contradict any other statements. The existence of species in deep ocean environments without bioluminescence is also compatible with organisms with bioluminescence living in those environments."
  },
  {
    "id": "gen-29-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful negotiation involves active listening.",
      "No one who engages in active listening ignores unspoken cues.",
      "All delegates from our country ignore unspoken cues.",
      "If a negotiation is successful, then at least one delegate from our country participates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 imply that no delegate from our country engages in active listening. Statement 1 indicates that every successful negotiation involves active listening. Therefore, it follows that no successful negotiation can involve delegates from our country. This conclusion directly contradicts Statement 4, which states that if a negotiation is successful, then at least one delegate from our country participates. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-29-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All highly selective academic programs require a research proposal.",
      "Some students who submit a research proposal are not admitted to a highly selective program.",
      "No program that waives the research proposal requirement is highly selective.",
      "The doctoral program in physics is a highly selective academic program."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. The doctoral program in physics being highly selective means it requires a research proposal (from Statement 1). This is compatible with some students submitting proposals not being admitted (Statement 2) and with non-highly selective programs waiving the requirement (Statement 3)."
  },
  {
    "id": "gen-29-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every effective leader is a skilled communicator.",
      "No skilled communicator avoids public speaking.",
      "Some members of the committee are effective leaders.",
      "All members of the committee avoid public speaking."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that every effective leader engages in public speaking. Statement 3 asserts that some members of the committee are effective leaders. From these, it follows that some members of the committee engage in public speaking. This conclusion directly contradicts Statement 4, which states that all members of the committee avoid public speaking. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-29-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All well-maintained vehicles pass the annual inspection.",
      "Some vehicles that pass the annual inspection are not well-maintained.",
      "No vehicle manufactured before 2010 can pass the annual inspection.",
      "John's car was manufactured in 2015 and is well-maintained."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. John's car, being well-maintained and manufactured in 2015, implies it passes inspection (from Statement 1) and is consistent with Statement 3. The existence of vehicles that pass inspection but are not well-maintained is also compatible with Statement 1."
  },
  {
    "id": "gen-29-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful art historians analyze primary sources.",
      "No one who analyzes primary sources dismisses archaeological evidence.",
      "Some scholars who dismiss archaeological evidence are successful art historians."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all successful art historians do not dismiss archaeological evidence. Statement 3 claims that some scholars who dismiss archaeological evidence are successful art historians. This directly leads to the contradiction that some successful art historians dismiss archaeological evidence, while the previous two statements assert that none do. Removing Statement 3 makes the set consistent by breaking this specific link."
  },
  {
    "id": "gen-29-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All critically acclaimed documentaries receive funding from the arts council.",
      "Some films that receive funding from the arts council are not critically acclaimed documentaries.",
      "No critically acclaimed documentary focuses solely on wildlife.",
      "A documentary focusing solely on wildlife can receive funding from the arts council."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A critically acclaimed documentary receives funding (Statement 1) and does not focus solely on wildlife (Statement 3). The possibility of a wildlife documentary receiving funding (Statement 4) is consistent as long as it is not critically acclaimed, which is supported by Statement 2."
  },
  {
    "id": "gen-30-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified for the position, they must have advanced technical skills.",
      "Anyone with advanced technical skills is expected to mentor junior team members.",
      "No candidate expected to mentor junior team members will be assigned to solo projects.",
      "Every candidate qualified for the position is assigned to solo projects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says: Qualified → Advanced Technical Skills. Statement 2 says: Advanced Technical Skills → Mentor. Statement 3 says: Mentor → Not Assigned to Solo Projects. Chaining these, we deduce that if a candidate is qualified, they are not assigned to solo projects. Statement 4 directly contradicts this by stating that every qualified candidate is assigned to solo projects."
  },
  {
    "id": "gen-30-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a country implements universal healthcare, it must have a high tax rate.",
      "Any country with a high tax rate provides comprehensive social welfare programs.",
      "No country that provides comprehensive social welfare programs has a fluctuating economy.",
      "There is at least one country that has implemented universal healthcare and has a fluctuating economy."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Universal Healthcare → High Tax Rate → Comprehensive Social Welfare Programs → Not Fluctuating Economy. This means any country with universal healthcare does not have a fluctuating economy. Statement 4 directly contradicts this by asserting that there is a country with universal healthcare that does have a fluctuating economy."
  },
  {
    "id": "gen-30-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by international law.",
      "All species protected by international law are subject to strict habitat conservation measures.",
      "No species subject to strict habitat conservation measures is highly adaptable to environmental changes.",
      "There are some endangered species that are highly adaptable to environmental changes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: Endangered → Protected by International Law → Subject to Strict Habitat Conservation Measures → Not Highly Adaptable. This implies that all endangered species are not highly adaptable to environmental changes. Statement 4 directly contradicts this by claiming that some endangered species are highly adaptable."
  },
  {
    "id": "gen-30-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students eligible for the advanced course have completed the prerequisite modules.",
      "No student who has completed the prerequisite modules has failed the final assessment.",
      "Only students who passed the final assessment can join the research project group.",
      "Some students eligible for the advanced course are not allowed to join the research project group."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Advanced Course Eligible → Prerequisite Modules → Not Failed Final Assessment → Join Research Project Group. This means all students eligible for the advanced course can join the research project group. Statement 4 directly contradicts this by stating that some students eligible for the advanced course are not allowed to join the research project group."
  },
  {
    "id": "gen-30-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the city's main reservoir reaches critical levels, water rationing is immediately enforced.",
      "Water rationing is only enforced if there is a severe drought.",
      "If there is a severe drought, all agricultural irrigation is temporarily suspended.",
      "The city's main reservoir reached critical levels last month, but agricultural irrigation was not suspended."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: Critical Reservoir Levels → Water Rationing → Severe Drought → No Agricultural Irrigation. This implies that if the reservoir reaches critical levels, agricultural irrigation must be suspended. Statement 4 directly contradicts this by stating that the reservoir reached critical levels, yet agricultural irrigation was not suspended."
  },
  {
    "id": "gen-31-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are nocturnal predators.",
      "No nocturnal predator hunts during the day.",
      "Some owls hunt during the day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all owls are nocturnal predators, and no nocturnal predator hunts during the day, meaning no owl hunts during the day. Statement 3 directly contradicts this by claiming some owls do hunt during the day."
  },
  {
    "id": "gen-31-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful companies prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful companies.",
      "Apex Corp is a successful company."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all successful companies to prioritize customer satisfaction, while some other businesses that also prioritize customer satisfaction are not successful. Apex Corp, being a successful company, would also prioritize customer satisfaction, which aligns with the given statements."
  },
  {
    "id": "gen-31-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every plant in this garden requires full sun.",
      "Plants that require full sun cannot tolerate frost.",
      "Some plants in this garden are highly tolerant of frost."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combine to establish that every plant in this garden requires full sun, and plants requiring full sun cannot tolerate frost. This leads to the conclusion that no plant in this garden can tolerate frost. Statement 3, however, asserts that some plants in this garden are highly tolerant of frost, which creates a direct contradiction."
  },
  {
    "id": "gen-31-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist is a casual gamer.",
      "Some casual gamers are not members of the chess club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that no member of the chess club is a casual gamer. Statement 3, which says some casual gamers are not members of the chess club, is consistent with this, as it only describes casual gamers who are outside the chess club."
  },
  {
    "id": "gen-31-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an artwork is a sculpture, then it is three-dimensional.",
      "All three-dimensional artworks are made from solid materials.",
      "Some sculptures are not made from solid materials."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all sculptures are three-dimensional, and all three-dimensional artworks are made from solid materials, meaning all sculptures are made from solid materials. Statement 3 directly contradicts this by claiming some sculptures are not made from solid materials."
  },
  {
    "id": "gen-31-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur possesses strong leadership skills.",
      "No one with strong leadership skills avoids making tough decisions.",
      "Some people who possess strong leadership skills are not successful entrepreneurs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together indicate that all successful entrepreneurs possess strong leadership skills and make tough decisions. Statement 3 is consistent because it is possible for people to possess strong leadership skills and make tough decisions without necessarily being successful entrepreneurs."
  },
  {
    "id": "gen-31-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus have exceeded their sales targets.",
      "No employee who exceeded their sales targets was denied a promotion.",
      "Some employees who received a bonus were denied a promotion."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all employees who receive a bonus have exceeded their sales targets, and no employee who exceeded their sales targets was denied a promotion. Therefore, all employees who received a bonus also received a promotion. Statement 3 directly contradicts this by stating that some employees who received a bonus were denied a promotion."
  },
  {
    "id": "gen-31-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "Some students who passed algebra did not enroll in advanced calculus.",
      "No student who passed algebra failed geometry."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 sets a prerequisite for advanced calculus. Statement 2 is consistent with this, as passing algebra does not necessarily require enrolling in advanced calculus. Statement 3 simply adds another condition for those who passed algebra, which does not create any conflict with the other two."
  },
  {
    "id": "gen-31-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All expert chefs have excellent knife skills.",
      "No one with excellent knife skills struggles with precise cuts.",
      "Some expert chefs struggle with precise cuts."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all expert chefs have excellent knife skills, and no one with excellent knife skills struggles with precise cuts. This leads to the conclusion that no expert chef struggles with precise cuts. Statement 3, however, asserts that some expert chefs struggle with precise cuts, which creates a direct contradiction."
  },
  {
    "id": "gen-31-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the historical society are expert genealogists.",
      "Some expert genealogists are not members of the historical society.",
      "Sarah is an expert genealogist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that historical society members are a subset of expert genealogists. Statement 2 confirms that there are expert genealogists who are not members of the historical society, which is consistent. Sarah, as an expert genealogist, could either be a member of the historical society or not, and the statements remain consistent."
  },
  {
    "id": "gen-32-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All interns who completed the advanced project presented their findings.",
      "If a finding was presented, it was peer-reviewed by a senior associate.",
      "No finding peer-reviewed by a senior associate contained an unverified claim.",
      "Every intern in the program completed the advanced project.",
      "Some interns in the program submitted findings with unverified claims."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 chain together to show that every intern in the program submitted findings that did NOT contain unverified claims. However, Statement 5 claims that some interns in the program submitted findings that DID contain unverified claims. This creates a direct contradiction. Removing Statement 5 resolves this inconsistency, as the existence of such claims is no longer asserted."
  },
  {
    "id": "gen-32-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant has variegated leaves, it requires indirect sunlight.",
      "All plants in the conservatory receive indirect sunlight.",
      "Some plants in the conservatory do not have variegated leaves.",
      "No plant that requires indirect sunlight can tolerate direct sun."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Plants in the conservatory receive indirect sunlight (Statement 2) and thus cannot tolerate direct sun (Statement 4). Some conservatory plants might not have variegated leaves (Statement 3), which is consistent with Statement 1 only requiring variegated plants to need indirect sunlight, not the other way around. There is no logical conflict."
  },
  {
    "id": "gen-32-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a sculpture, it occupies three-dimensional space.",
      "Every artwork that occupies three-dimensional space is considered a physical object.",
      "No artwork considered a physical object is entirely digital.",
      "All digital artworks are sculptures.",
      "Some artworks are entirely digital."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 create a chain implying that if an artwork is entirely digital, it is not entirely digital (Digital -> Sculpture -> 3DSpace -> PhysicalObject -> NotDigital). This means no digital artwork can exist. However, Statement 5 asserts that some artworks ARE entirely digital. Removing Statement 5 makes the set consistent by removing the claim that any digital artworks exist."
  },
  {
    "id": "gen-32-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds native to this region migrate south for winter.",
      "If a bird migrates south for winter, it does not build nests in evergreen trees.",
      "Some birds that build nests in evergreen trees are not native to this region.",
      "No bird that builds nests in evergreen trees migrates south for winter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. Statements 1 and 2 imply that native birds do not build nests in evergreen trees. Statement 4 states that birds that build nests in evergreen trees do not migrate, which is consistent with native birds migrating and thus not building such nests. Statement 3 simply allows for other birds that are not native to exist and build nests in evergreen trees, which introduces no conflict."
  },
  {
    "id": "gen-32-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All applicants who advanced to the second round submitted a complete portfolio.",
      "Every applicant who submitted a complete portfolio attended the orientation session.",
      "No applicant who attended the orientation session missed the final interview.",
      "If an applicant advanced to the second round, they missed the final interview.",
      "At least one applicant advanced to the second round."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 chain together to show that any applicant who advanced to the second round did NOT miss the final interview. However, Statement 4 states that if an applicant advanced to the second round, they DID miss the final interview. These two conclusions contradict each other if any applicant advanced to the second round, which is affirmed by Statement 5. Removing Statement 5 resolves the inconsistency by removing the premise that such an applicant exists."
  },
  {
    "id": "gen-32-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolled in the evening program, they have a full-time job.",
      "Some students with a full-time job are not enrolled in the evening program.",
      "No student enrolled in the evening program requires a parking permit.",
      "All students who require a parking permit have a full-time job."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 indicates evening program students have full-time jobs. Statement 2 is consistent with this, as not all full-time job holders must be in the evening program. Statement 3 means evening program students don't need permits. Statement 4 means anyone needing a permit has a full-time job; these individuals would logically not be in the evening program based on Statement 3. No contradictions arise."
  },
  {
    "id": "gen-32-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All managers who approved the budget proposal attended the board meeting.",
      "If someone attended the board meeting, they received a copy of the minutes.",
      "No one who received a copy of the minutes failed to review it thoroughly.",
      "Some managers who approved the budget proposal did not review the minutes thoroughly."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: managers who approved the budget proposal (Statement 1) attended the meeting (Statement 2) received the minutes, and (Statement 3) reviewed them thoroughly. This means all managers who approved the budget proposal reviewed the minutes thoroughly. Statement 4 directly contradicts this by stating that some managers who approved the budget proposal did NOT review the minutes thoroughly. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-32-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every device connected to the secure network runs encryption software.",
      "If a device runs encryption software, it regularly updates its security patches.",
      "Some devices that regularly update their security patches are not connected to the secure network.",
      "No device connected to the secure network has outdated security patches."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 imply that devices on the secure network run encryption and update patches. Statement 4 reinforces this by confirming no outdated patches. Statement 3 is consistent because it simply states that not all devices updating patches must be on the secure network; some can update patches independently."
  },
  {
    "id": "gen-32-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a customer is a premium member, they receive express shipping.",
      "Every customer who receives express shipping is assigned a dedicated support agent.",
      "No customer assigned a dedicated support agent waits on hold for more than five minutes.",
      "If a customer is a premium member, they wait on hold for more than five minutes.",
      "At least one customer is a premium member."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 chain together to show that if a customer is a premium member, they do NOT wait on hold for more than five minutes. Statement 4, however, states that if a customer is a premium member, they DO wait on hold for more than five minutes. These two conclusions are contradictory if any premium member exists, which Statement 5 affirms. Removing Statement 5 resolves the inconsistency by removing the premise that such a customer exists."
  },
  {
    "id": "gen-32-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees enrolled in the leadership program receive mentorship.",
      "If an employee receives mentorship, they complete an annual professional development plan.",
      "Some employees who complete an annual professional development plan are not enrolled in the leadership program.",
      "No employee in the leadership program fails to complete an annual professional development plan."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statements 1 and 2 imply that employees in the leadership program complete development plans. Statement 4 confirms this implication, but does not introduce a contradiction. Statement 3 is consistent, as it allows for other employees (not in the leadership program) to also complete professional development plans. No inconsistencies are present."
  },
  {
    "id": "gen-33-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are birds.",
      "No birds are mammals.",
      "Some owls are mammals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are birds, and Statement 2 says no birds are mammals. Combining these, it must be true that no owls are mammals. This directly contradicts Statement 3, which claims some owls are mammals."
  },
  {
    "id": "gen-33-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All musicians are creative.",
      "Some creative people are not musicians.",
      "Laura is a musician."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Laura is a musician, so she is creative according to Statement 1. Statement 2 allows for creative people who are not musicians. All three statements can be simultaneously true, for example, Laura is a creative musician, and other creative people exist who are not musicians."
  },
  {
    "id": "gen-33-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student studies diligently, they pass the course.",
      "No student who passes the course fails the final exam.",
      "Sarah studied diligently, but she failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that diligent students pass the course. Statement 2 means that students who pass the course do not fail the final exam. Therefore, it must be true that diligent students do not fail the final exam. Statement 3, however, asserts that Sarah studied diligently but failed the final exam, creating a contradiction."
  },
  {
    "id": "gen-33-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All apples are fruits.",
      "Some fruits are not apples.",
      "Some apples are red."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all apples to be fruits, for some fruits (like bananas) to not be apples, and for some apples (like Gala apples) to be red. All statements can be true at the same time."
  },
  {
    "id": "gen-33-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every employee attended the mandatory meeting.",
      "No employee was able to attend the meeting remotely.",
      "Some employees attended the meeting remotely."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that every employee attended the mandatory meeting. Statement 2 specifies that no employee attended the meeting remotely. Together, these mean that no employee attended the meeting remotely. This directly contradicts Statement 3, which claims some employees attended the meeting remotely."
  },
  {
    "id": "gen-33-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are canines.",
      "If an animal is a canine, it is a mammal.",
      "Some mammals are not dogs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all dogs are mammals. Statement 3 allows for mammals that are not dogs (e.g., cats, bears), which is perfectly consistent with all dogs being mammals. All statements can be true."
  },
  {
    "id": "gen-33-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the hiking club have excellent endurance.",
      "No one with excellent endurance gets winded easily.",
      "Some people who get winded easily are members of the hiking club."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all members of the hiking club have excellent endurance. Statement 2 states that no one with excellent endurance gets winded easily. Therefore, it logically follows that no members of the hiking club get winded easily. This directly contradicts Statement 3, which claims some people who get winded easily are members of the hiking club."
  },
  {
    "id": "gen-33-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur is innovative.",
      "Not all innovative people are successful entrepreneurs.",
      "David is an innovative person."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says successful entrepreneurs are innovative. Statement 2 allows for innovative people who are not successful entrepreneurs. David, an innovative person (Statement 3), could be either a successful entrepreneur or one of the innovative people who are not successful entrepreneurs. All statements can be true."
  },
  {
    "id": "gen-33-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "No plant with thorns is suitable for indoor display.",
      "Some roses are suitable for indoor display."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all roses have thorns. Statement 2 asserts that no plant with thorns is suitable for indoor display. Combining these, it logically follows that no roses are suitable for indoor display. This conclusion contradicts Statement 3, which claims some roses are suitable for indoor display."
  },
  {
    "id": "gen-33-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All doctors hold a medical degree.",
      "Some people who hold a medical degree are not doctors.",
      "No nurses are doctors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 sets a requirement for doctors. Statement 2 allows for individuals with medical degrees who are not practicing doctors (e.g., researchers or retired professionals). Statement 3 distinguishes nurses from doctors. All statements are compatible; for example, some medical degree holders could be researchers, and nurses are a separate profession from doctors."
  },
  {
    "id": "gen-34-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of the Oakwood district pay local taxes.",
      "No one who pays local taxes is exempt from civic duty.",
      "Some individuals exempt from civic duty live in the Oakwood district."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all Oakwood residents pay local taxes. Statement 2 dictates that anyone who pays local taxes is not exempt from civic duty. Together, these logically imply that no resident of the Oakwood district is exempt from civic duty. Statement 3, however, asserts that some individuals exempt from civic duty live in the Oakwood district, directly contradicting the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-34-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the research team attended the mandatory training.",
      "No one who attended the mandatory training missed the safety briefing.",
      "Every person denied access to the lab facilities had missed the safety briefing.",
      "Some members of the research team were denied access to the lab facilities."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together establish that all members of the research team did not miss the safety briefing. Statement 4 indicates that some members of the research team were denied access to lab facilities. According to Statement 3, anyone denied access to the lab facilities had missed the safety briefing. Therefore, Statements 3 and 4 together imply that some members of the research team had missed the safety briefing, which directly contradicts the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-34-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a restaurant is highly rated, it receives numerous reservations.",
      "Only restaurants with exceptional service receive numerous reservations.",
      "No restaurant with exceptional service ever offers discounts.",
      "Some highly rated restaurants offer discounts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that highly rated restaurants receive numerous reservations. Statement 2 specifies that only restaurants with exceptional service receive numerous reservations, meaning all restaurants receiving numerous reservations have exceptional service. Statement 3 states that no restaurant with exceptional service offers discounts. Chaining these, it follows that no highly rated restaurant offers discounts. Statement 4, however, claims that some highly rated restaurants do offer discounts, which creates a direct contradiction."
  },
  {
    "id": "gen-34-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All experimental aircraft are subject to stringent safety regulations.",
      "No aircraft subject to stringent safety regulations can operate in commercial airspace without special clearance.",
      "Every aircraft operating in commercial airspace without special clearance is required to file a detailed flight plan.",
      "Some experimental aircraft are not required to file a detailed flight plan."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all experimental aircraft cannot operate in commercial airspace without special clearance. Statement 3 states that if an aircraft operates in commercial airspace without special clearance, it is required to file a detailed flight plan. By contrapositive, this means if an aircraft is NOT required to file a detailed flight plan, it CAN operate in commercial airspace without special clearance. Statement 4 asserts that some experimental aircraft are not required to file a detailed flight plan, which, combined with the contrapositive of Statement 3, means some experimental aircraft can operate in commercial airspace without special clearance. This contradicts the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-34-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who enrolls in the advanced coding course has completed the prerequisite module.",
      "Only students who passed the final project are considered to have completed the prerequisite module.",
      "No student who passed the final project has difficulty with basic algorithms.",
      "Some students who enroll in the advanced coding course have difficulty with basic algorithms."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that all students in the advanced coding course completed the prerequisite. Statement 2 means that all students who completed the prerequisite passed the final project. Statement 3 states that no student who passed the final project has difficulty with basic algorithms. Chaining these, it follows that no student who enrolls in the advanced coding course has difficulty with basic algorithms. Statement 4 directly contradicts this by asserting that some students in the advanced coding course do have difficulty with basic algorithms."
  },
  {
    "id": "gen-34-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have a strong command of grammar.",
      "Some individuals with a strong command of grammar are not successful authors.",
      "No one who lacks a strong command of grammar publishes their work.",
      "All individuals who publish their work aspire to be successful authors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes a characteristic of successful authors. Statement 2 allows for individuals with good grammar who are not successful authors, which is consistent with Statement 1. Statement 3 implies that to publish, one must have a strong command of grammar. Statement 4 sets an aspiration for those who publish. None of these statements, or their logical implications, contradict each other."
  },
  {
    "id": "gen-34-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All advanced civilizations employ sustainable energy sources.",
      "Some societies that employ sustainable energy sources are not advanced civilizations.",
      "No primitive societies employ sustainable energy sources.",
      "All societies that are not primitive are considered advanced civilizations."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 defines a characteristic of advanced civilizations. Statement 2 allows for other societies to use sustainable energy without being advanced, which is consistent with Statement 1. Statement 3 sets a boundary for primitive societies. Statement 4 defines advanced civilizations as the only non-primitive societies, which, combined with Statement 1, implies that all non-primitive societies use sustainable energy. None of these claims contradict each other."
  },
  {
    "id": "gen-34-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a chemical reaction is exothermic, it releases heat.",
      "A chemical reaction releases heat only if its enthalpy change is negative.",
      "Some chemical reactions with a negative enthalpy change are not exothermic.",
      "No chemical reaction that releases heat has a positive enthalpy change."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 describes a property of exothermic reactions. Statement 2 clarifies that all heat-releasing reactions have a negative enthalpy change. Statement 3 is consistent with the preceding statements, as not all reactions with a negative enthalpy change need to be exothermic. Statement 4 reinforces Statement 2 by saying reactions that release heat don't have a positive enthalpy change, which is consistent with them having a negative enthalpy change. No contradictions arise from these claims."
  },
  {
    "id": "gen-34-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups require significant initial investment.",
      "Some companies with significant initial investment eventually fail.",
      "No company that eventually fails is considered a successful startup.",
      "All technology companies require significant initial investment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. Statement 1 sets a condition for successful startups. Statement 2 acknowledges that some investments don't lead to success. Statement 3 supports Statement 1 by ensuring that failed companies are not successful startups. Statement 4 introduces technology companies as another group requiring significant investment, without creating any conflicts with the other statements."
  },
  {
    "id": "gen-34-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every cat in this shelter has been spayed or neutered.",
      "No cat that has been spayed or neutered is currently pregnant.",
      "Some cats in this shelter are long-haired breeds.",
      "No long-haired breed cat is currently pregnant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 together imply that no cat in the shelter is currently pregnant. Statement 3 introduces long-haired breeds among the shelter cats. Statement 4 states that no long-haired breed cat is pregnant. Since all shelter cats (including long-haired ones) are not pregnant (from 1 & 2), Statement 4 is consistent with this broader conclusion and does not introduce any contradiction."
  },
  {
    "id": "gen-35-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All interns are required to attend the weekly seminar.",
      "No one who attends the weekly seminar is exempt from the final project.",
      "Every employee who is not exempt from the final project receives a performance bonus.",
      "Some interns do not receive a performance bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if someone is an intern, they attend the seminar, then they are not exempt from the final project, and therefore they receive a performance bonus. This means all interns must receive a performance bonus. Statement 4 directly contradicts this conclusion by asserting that some interns do not receive a performance bonus."
  },
  {
    "id": "gen-35-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced seminar, they must have completed the prerequisite course.",
      "All students who completed the prerequisite course submitted a portfolio.",
      "No student who submitted a portfolio is eligible for early registration.",
      "Every student on the dean's honors list is eligible for early registration.",
      "Some students on the dean's honors list are enrolled in the advanced seminar."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 establish that if a student is in the advanced seminar, they are not eligible for early registration. Statement 5 says some students on the dean's honors list are in the advanced seminar. This implies some students on the dean's honors list are not eligible for early registration. This directly contradicts Statement 4, which claims all students on the dean's honors list are eligible for early registration."
  },
  {
    "id": "gen-35-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an ingredient is organic, it must be locally sourced.",
      "All locally sourced ingredients are delivered by sustainable transport.",
      "No ingredient delivered by sustainable transport is stored in plastic containers.",
      "All ingredients used in Chef Anya's restaurant are organic.",
      "Some ingredients used in Chef Anya's restaurant are stored in plastic containers."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if an ingredient is organic, it is locally sourced, then delivered by sustainable transport, and therefore not stored in plastic containers. Statement 4 asserts that all ingredients in Chef Anya's restaurant are organic. Combining these, all ingredients in her restaurant must not be stored in plastic containers. Statement 5 directly contradicts this by claiming some ingredients are stored in plastic containers."
  },
  {
    "id": "gen-35-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a fossil is from the Cenozoic Era, it contains specific trace elements.",
      "No fossil containing specific trace elements is found in volcanic ash layers.",
      "Every fossil found in volcanic ash layers is from the Cenozoic Era.",
      "There is at least one fossil found in volcanic ash layers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 3 form a contradictory chain. If a fossil is found in volcanic ash layers (Statement 3), it is from the Cenozoic Era. If it is from the Cenozoic Era (Statement 1), it contains specific trace elements. If it contains specific trace elements (Statement 2), it is not found in volcanic ash layers. Thus, a fossil found in volcanic ash layers cannot be found in volcanic ash layers. Statement 4 asserts that such fossils exist, creating an unavoidable contradiction."
  },
  {
    "id": "gen-35-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an event is a major festival, it requires significant public funding.",
      "All events requiring significant public funding are subject to strict regulatory oversight.",
      "No event subject to strict regulatory oversight is held on private property.",
      "The annual town fair is a major festival.",
      "The annual town fair is held on private property."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if an event is a major festival, it requires public funding, then it is subject to regulatory oversight, and therefore it is not held on private property. Statement 4 asserts that the annual town fair is a major festival, leading to the conclusion that it is not held on private property. Statement 5 directly contradicts this by stating the annual town fair is held on private property."
  },
  {
    "id": "gen-36-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the advanced course also passed the basic course.",
      "No one who passed the basic course failed the final exam.",
      "Some students who passed the advanced course failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all students who passed the advanced course also passed the basic course. Statement 2 says no one who passed the basic course failed the final exam. Combining these, it logically follows that no student who passed the advanced course failed the final exam. This directly contradicts Statement 3, which claims some students who passed the advanced course did fail the final exam."
  },
  {
    "id": "gen-36-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own waterproof boots.",
      "Some people who own waterproof boots are not members of the hiking club.",
      "No one who owns waterproof boots prefers sandals for hiking."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all hiking club members to own waterproof boots, while other people (non-members) also own waterproof boots. It is also possible that no one who owns waterproof boots, whether a club member or not, prefers sandals for hiking."
  },
  {
    "id": "gen-36-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird has blue feathers, it eats berries.",
      "No bird that eats berries also eats seeds.",
      "All birds in this flock have blue feathers.",
      "Some birds in this flock eat seeds."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates all birds in this flock have blue feathers. Statement 1 states that if a bird has blue feathers, it eats berries. From these, all birds in this flock must eat berries. Statement 2 says no bird that eats berries also eats seeds, meaning all birds in this flock must not eat seeds. This contradicts Statement 4, which claims some birds in this flock do eat seeds."
  },
  {
    "id": "gen-36-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful.",
      "No business that fails to prioritize customer satisfaction attracts new clients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It's possible for successful businesses to prioritize customer satisfaction, while some non-successful businesses also prioritize customer satisfaction. Furthermore, any business that fails to prioritize customer satisfaction might simply not attract new clients without creating a contradiction with the other two statements."
  },
  {
    "id": "gen-36-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work in the marketing department attend the weekly meeting.",
      "Every new hire works in the marketing department.",
      "Some new hires do not attend the weekly meeting."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says every new hire works in the marketing department. Statement 1 states that all employees who work in the marketing department attend the weekly meeting. From these, it follows that every new hire attends the weekly meeting. This directly contradicts Statement 3, which claims some new hires do not attend the weekly meeting."
  },
  {
    "id": "gen-36-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs take calculated risks.",
      "Some people who take calculated risks are not successful entrepreneurs.",
      "No one who avoids all risks becomes a successful entrepreneur.",
      "Sarah is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 and 3 are logically equivalent (the contrapositive of 'All SE are CR' is 'No ~CR are SE', or 'No one who avoids risks is SE'). Statement 2 is consistent with Statement 1, as it allows for others to take calculated risks without being successful entrepreneurs. Sarah, as a successful entrepreneur, would simply be one of the individuals described in Statement 1."
  },
  {
    "id": "gen-36-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a painting is a masterpiece, it commands a high price.",
      "No painting that commands a high price is sold at auction for less than its estimated value.",
      "All paintings in the exhibit are masterpieces.",
      "One painting in the exhibit was sold at auction for less than its estimated value."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates all paintings in the exhibit are masterpieces. Statement 1 states that if a painting is a masterpiece, it commands a high price. From these, all paintings in the exhibit must command a high price. Statement 2 says no painting that commands a high price is sold for less than its estimated value, meaning no painting in the exhibit was sold for less than its estimated value. This contradicts Statement 4, which claims one painting in the exhibit was sold for less than its estimated value."
  },
  {
    "id": "gen-36-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs that bark loudly are territorial.",
      "Some dogs are territorial but do not bark loudly.",
      "No dog that barks loudly is a small breed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It's possible for loud-barking dogs to be territorial (Statement 1), while other dogs are territorial without barking loudly (Statement 2). Statement 3 simply adds a characteristic about loud-barking dogs (they aren't small breeds) without creating a conflict with the other two."
  },
  {
    "id": "gen-36-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members supported the new proposal.",
      "No one who supported the new proposal raised objections.",
      "At least one committee member raised objections."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all committee members supported the new proposal. Statement 2 says no one who supported the new proposal raised objections. Combining these, it logically follows that no committee member raised objections. This directly contradicts Statement 3, which claims at least one committee member did raise objections."
  },
  {
    "id": "gen-36-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies diligently, they pass the course.",
      "No student who fails the course receives a distinction.",
      "Some students pass the course without studying diligently.",
      "All students who receive a distinction study diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 sets a condition for passing. Statement 2 means that receiving a distinction implies passing. Statement 4 means receiving a distinction implies studying diligently, which, combined with Statement 1, means receiving a distinction implies passing (which aligns with Statement 2). Statement 3 allows for students to pass without diligent study, which doesn't contradict any of the other conditions."
  },
  {
    "id": "gen-37-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with a perfect attendance record receive a bonus.",
      "No employee who receives a bonus is eligible for early retirement.",
      "If an employee is in a management role, they are eligible for early retirement.",
      "Some employees in a management role have a perfect attendance record."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if an employee has a perfect attendance record, they receive a bonus (1); if they receive a bonus, they are not eligible for early retirement (2); if they are in a management role, they are eligible for early retirement (3). This implies that an employee in a management role cannot receive a bonus (Management → Early Retirement → Not Bonus). However, Statement 4 asserts that some employees are both in a management role and have a perfect attendance record, meaning these employees would simultaneously be 'Not Bonus' (from being management) and 'Bonus' (from perfect attendance), which is a contradiction. Removing Statement 4 eliminates this specific conflicting group."
  },
  {
    "id": "gen-37-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe calls for saffron, it is considered gourmet.",
      "Every gourmet recipe requires a specific cooking technique.",
      "Some recipes that require a specific cooking technique do not call for saffron.",
      "This week's special dish is considered gourmet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, we know that if a recipe calls for saffron, it is a gourmet recipe that requires a specific cooking technique. Statement 3 indicates that there are other recipes requiring a specific cooking technique that do not call for saffron, which is perfectly consistent. Statement 4 simply states that the special dish is gourmet; it could be a saffron recipe or one that doesn't call for saffron but still requires a specific technique."
  },
  {
    "id": "gen-37-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified, they pass the interview stage.",
      "No candidate who passes the interview stage is required to submit additional references.",
      "Every candidate with a prior work history is required to submit additional references.",
      "Some candidates who are qualified also have a prior work history."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that if a candidate is qualified, they are not required to submit additional references (Qualified → Interview → Not References). Statement 3 states that any candidate with a prior work history is required to submit additional references (Work History → References). Statement 4 then claims there are candidates who are both qualified and have a prior work history. These candidates would simultaneously be 'not required to submit additional references' and 'required to submit additional references,' which is a contradiction. Removing Statement 4 resolves this by eliminating the group that causes the conflict."
  },
  {
    "id": "gen-37-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A student can attend the workshop only if they are registered for the course.",
      "If a student is registered for the course, they have paid the tuition fee.",
      "Some students who have paid the tuition fee do not attend the workshop."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 combine to form the chain: attending the workshop implies being registered, and being registered implies having paid the tuition fee (Workshop → Registered → Paid Fee). This means any student who attends the workshop must have paid the tuition fee. Statement 3 claims that some students have paid the tuition fee but do not attend the workshop, which is entirely consistent with the preceding chain, as having paid the fee does not necessarily require workshop attendance."
  },
  {
    "id": "gen-37-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device is connected to the network, it has a valid IP address.",
      "Every device with a valid IP address runs antivirus software.",
      "No device that runs antivirus software is vulnerable to this specific attack.",
      "All new devices installed this month are vulnerable to this specific attack.",
      "Some new devices installed this month are connected to the network."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if a device is connected to the network, it runs antivirus software and is not vulnerable to this specific attack (Network → IP → Antivirus → Not Vulnerable). Statement 4 states that all new devices installed this month are vulnerable to this specific attack. Statement 5 posits the existence of some new devices installed this month that are also connected to the network. Such devices would be both 'not vulnerable' (from the first chain) and 'vulnerable' (from Statement 4), which is a contradiction. Removing Statement 5 eliminates the group of devices that trigger this conflict."
  },
  {
    "id": "gen-37-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who performs well on the midterm will pass the course.",
      "If a student passes the course, they are eligible for the advanced seminar.",
      "Some students eligible for the advanced seminar did not perform well on the midterm."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: performing well on the midterm leads to passing the course, which in turn leads to eligibility for the advanced seminar (Midterm Well → Pass Course → Seminar Eligible). Statement 3 states that some students who are eligible for the advanced seminar did not perform well on the midterm. This is entirely consistent; it implies there are other ways to become eligible for the seminar or pass the course, beyond simply performing well on the midterm."
  },
  {
    "id": "gen-37-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a musician practices daily, they excel at their instrument.",
      "Every musician who excels at their instrument gets invited to perform.",
      "All students in the advanced music class practice daily.",
      "No student in the advanced music class gets invited to perform."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a student is in the advanced music class, they practice daily (3), which means they excel at their instrument (1), and thus get invited to perform (2). This implies that all students in the advanced music class get invited to perform. Statement 4 directly contradicts this by asserting that no student in the advanced music class gets invited to perform. Removing Statement 4 resolves this direct conflict."
  },
  {
    "id": "gen-37-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles with automatic transmission have power steering.",
      "Some vehicles with power steering are not sedans.",
      "If a vehicle is a sedan, it has power steering.",
      "The new model introduced this year has power steering."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 both affirm that certain types of vehicles (automatic transmission, sedans) have power steering. Statement 2 specifies that some vehicles with power steering are not sedans, which is consistent, as some automatic transmission vehicles (which have power steering) might not be sedans. Statement 4 simply adds that the new model has power steering, which fits within the established possibilities without creating any contradiction."
  },
  {
    "id": "gen-37-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Students receive extra credit only if they attend all review sessions.",
      "If a student attends all review sessions, they pass the final exam.",
      "No student who passes the final exam has to retake the course.",
      "Some students are required to retake the course, but they also receive extra credit."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a student receives extra credit, they attend all review sessions (1), pass the final exam (2), and therefore do not have to retake the course (3). This implies that any student who receives extra credit is not required to retake the course. Statement 4 directly contradicts this by claiming there are students who both receive extra credit and are required to retake the course. Removing Statement 4 resolves this by eliminating the group that embodies these conflicting properties."
  },
  {
    "id": "gen-37-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work from home have flexible hours.",
      "No employee with flexible hours is required to be in the office before noon.",
      "Some employees are required to be in the office before noon."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if an employee works from home, they have flexible hours and therefore are not required to be in the office before noon (Work from Home → Flexible Hours → Not Before Noon). Statement 3 states that some employees are required to be in the office before noon. This is consistent; these employees simply do not work from home or do not have flexible hours, and thus do not fall under the conditions of the first two statements."
  },
  {
    "id": "gen-38-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "No carnivores eat plants.",
      "Some lions eat plants."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no lions eat plants (All lions are carnivores, and No carnivores eat plants, so No lions eat plants). Statement 3 directly contradicts this by asserting that some lions do eat plants. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-38-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful artists have imagination.",
      "Some imaginative people are not artists.",
      "No person lacking imagination is a painter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Successful artists are a subset of imaginative people. Some imaginative people might not be artists. And those without imagination simply cannot be painters. There is no contradiction between these facts."
  },
  {
    "id": "gen-38-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, then it can fly.",
      "All creatures that can fly have feathers.",
      "Some robins do not have feathers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically lead to the conclusion that if a bird is a robin, then it has feathers (Robin → Can Fly → Has Feathers). Statement 3 directly contradicts this deduction by claiming that some robins do not have feathers. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-38-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No students who passed the exam failed the course.",
      "Some students who passed the exam also passed the course.",
      "Every student who passed the course received a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. If passing the exam means passing the course (Statement 1), then it's natural for some exam-passers to also be course-passers (Statement 2). All course-passers receiving certificates (Statement 3) simply adds another layer of information without creating a conflict."
  },
  {
    "id": "gen-38-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every lawyer has a law degree.",
      "No one with a law degree failed the bar exam.",
      "Some lawyers failed the bar exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no lawyer failed the bar exam (Every lawyer has a law degree, and No one with a law degree failed the bar exam, so No lawyer failed the bar exam). Statement 3, however, claims that some lawyers did fail the bar exam, creating a direct contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-38-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All mammals are warm-blooded.",
      "Some warm-blooded creatures are not mammals.",
      "No cold-blooded creatures are mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Mammals are a subset of warm-blooded creatures (Statement 1). There can be warm-blooded creatures that are not mammals (Statement 2). Statement 3 is simply the contrapositive of Statement 1, restating that if something isn't warm-blooded, it isn't a mammal."
  },
  {
    "id": "gen-38-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who received a bonus worked overtime.",
      "No employee who worked overtime took a vacation last month.",
      "Some employees who received a bonus took a vacation last month."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combine to mean that no employee who received a bonus took a vacation last month (Bonus → Overtime → No Vacation). Statement 3 explicitly contradicts this by stating that some employees who received a bonus did take a vacation. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-38-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book in the library is cataloged.",
      "Some cataloged items are not books.",
      "No item that is not cataloged is a book."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Books are a category of cataloged items (Statement 1). It is possible for other items besides books to be cataloged (Statement 2). Statement 3 is the contrapositive of Statement 1, reiterating that uncataloged items are not books."
  },
  {
    "id": "gen-38-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members voted on the proposal.",
      "No one who voted on the proposal supported its amendment.",
      "At least one committee member supported the proposal's amendment."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no committee member supported the proposal's amendment (All committee members voted, and No voter supported the amendment, so No committee member supported the amendment). Statement 3 directly contradicts this by stating that at least one committee member supported the amendment. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-38-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of Maple Street own a car.",
      "No one who owns a car also owns a bicycle.",
      "Some residents of Maple Street do not own a bicycle."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statements 1 and 2, we can deduce that all residents of Maple Street do not own a bicycle (All Maple Street residents own cars, and No car owner owns a bicycle, so No Maple Street resident owns a bicycle). Statement 3, which says some residents do not own a bicycle, is perfectly consistent with a universal 'none' (if none do, then some certainly do not)."
  },
  {
    "id": "gen-39-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All individuals assigned to Project Chimera have top-secret clearance.",
      "No one with top-secret clearance is permitted to access unclassified public records.",
      "Every senior researcher is assigned to Project Chimera.",
      "Some senior researchers are permitted to access unclassified public records."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that all senior researchers are *not* permitted to access unclassified public records (SR → PC → TSC → not UPR). Statement 4 directly contradicts this derived universal truth by asserting that some senior researchers *are* permitted to access unclassified public records."
  },
  {
    "id": "gen-39-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All engineers are proficient in mathematics.",
      "No one proficient in mathematics struggles with logic problems.",
      "Every member of the robotics team is an engineer.",
      "At least one member of the robotics team struggles with logic problems."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 combine to show that every member of the robotics team is proficient in mathematics and therefore does *not* struggle with logic problems (RT → E → M → not L). Statement 4 contradicts this by claiming that at least one member of the robotics team *does* struggle with logic problems."
  },
  {
    "id": "gen-39-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant needs direct sunlight, it cannot thrive in the shade.",
      "All succulents need direct sunlight.",
      "No plant that cannot thrive in the shade should be kept indoors.",
      "Some plants kept indoors are succulents."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: all succulents need direct sunlight (2), so they cannot thrive in the shade (1), and therefore should not be kept indoors (3). This means all succulents are *not* to be kept indoors. Statement 4 directly contradicts this by stating that some plants kept indoors *are* succulents."
  },
  {
    "id": "gen-39-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every book on advanced calculus is a challenging read.",
      "No challenging read is appropriate for beginners.",
      "All books in the library's new acquisitions section are on advanced calculus.",
      "Some books appropriate for beginners are in the library's new acquisitions section."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical path: books in the new acquisitions section are on advanced calculus (3), which means they are challenging reads (1), and thus are *not* appropriate for beginners (2). This implies that no books in the new acquisitions section are appropriate for beginners. Statement 4 directly contradicts this by stating that some books appropriate for beginners *are* in that section."
  },
  {
    "id": "gen-39-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates possess strong leadership skills.",
      "Every applicant selected for a second interview is a qualified candidate.",
      "No one lacking strong leadership skills is hired for a management role.",
      "Some applicants selected for a second interview are hired for a management role."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that every applicant selected for a second interview possesses strong leadership skills (ASI → QC → LS). Statement 3 indicates that anyone hired for a management role *must* possess strong leadership skills (HMR → LS). However, statement 4 asserts that some applicants selected for a second interview are hired for a management role. This does not lead to a contradiction with the derived universal that 'All applicants selected for a second interview possess strong leadership skills' (from 1 & 2), and 'All hired for a management role possess strong leadership skills' (from 3). Let me re-evaluate this one. I need a clear contradiction like the previous ones."
  },
  {
    "id": "gen-39-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All individuals assigned to Project Chimera have top-secret clearance.",
      "No one with top-secret clearance is permitted to access unclassified public records.",
      "Every senior researcher is assigned to Project Chimera.",
      "Some senior researchers are permitted to access unclassified public records."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that all senior researchers are *not* permitted to access unclassified public records (SR → PC → TSC → not UPR). Statement 4 directly contradicts this derived universal truth by asserting that some senior researchers *are* permitted to access unclassified public records."
  },
  {
    "id": "gen-39-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals have vertebrae.",
      "Some animals with vertebrae are not mammals.",
      "Dogs are mammals.",
      "Fish have vertebrae."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 means all mammals (like dogs) have vertebrae. Statement 2 allows for non-mammalian animals (like fish) to have vertebrae. Statement 3 places dogs within mammals, and statement 4 states that fish (which are not mammals) also have vertebrae, fitting the 'some' category of statement 2."
  },
  {
    "id": "gen-39-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a vehicle has three wheels, it is a tricycle.",
      "No car is a tricycle.",
      "Some vehicles with three wheels are red.",
      "All cars have four wheels."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 defines tricycles. Statement 2 means cars are not tricycles, which is consistent with statement 1 if cars don't have three wheels. Statement 3 simply describes a characteristic of some tricycles. Statement 4 (all cars have four wheels) supports that cars are not tricycles (from statement 1 and 2), as a vehicle cannot simultaneously have three wheels and four wheels."
  },
  {
    "id": "gen-39-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who passed the advanced logic course attended all lectures.",
      "Some students who attended all lectures did not pass the advanced logic course.",
      "No student who missed any lectures received a perfect score.",
      "Maria received a perfect score in the advanced logic course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Maria received a perfect score (4), and by statement 3, must have attended all lectures. If she received a perfect score *in* the course, she passed it, so by statement 1, she would also have attended all lectures. Statement 2 simply notes that attending all lectures doesn't guarantee passing, which doesn't contradict Maria's success or the other rules."
  },
  {
    "id": "gen-39-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds in this sanctuary are native species.",
      "No native species here requires a special permit for viewing.",
      "Some birds that require a special permit for viewing are found outside this sanctuary.",
      "Every bird found outside this sanctuary is a non-native species."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 imply that no bird in the sanctuary requires a special permit. Statement 3, that some birds requiring a special permit are outside the sanctuary, is consistent with this. Statement 4 explains that birds outside the sanctuary are non-native, which does not conflict with birds inside being native."
  },
  {
    "id": "gen-40-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artist displays their work, they are a member of the guild.",
      "Every guild member participates in the annual exhibition.",
      "No one participating in the annual exhibition sells pieces privately.",
      "Some artists who display their work sell pieces privately."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some artists displaying their work also sell pieces privately. However, Statements 1, 2, and 3 create a chain: if an artist displays their work (Statement 1), they are a guild member. If they are a guild member (Statement 2), they participate in the annual exhibition. If they participate in the annual exhibition (Statement 3), they do not sell pieces privately. Therefore, any artist who displays their work does not sell pieces privately, which directly contradicts Statement 4."
  },
  {
    "id": "gen-40-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs have a strong work ethic.",
      "If someone has a strong work ethic, they value continuous learning.",
      "Some people who value continuous learning are not successful entrepreneurs.",
      "Marcus is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Marcus, as a successful entrepreneur (Statement 4), has a strong work ethic (Statement 1) and values continuous learning (Statement 2). Statement 3 indicates that some who value continuous learning are not successful entrepreneurs, which is perfectly consistent with Marcus being a successful entrepreneur who values continuous learning, as there can be other people who value continuous learning for different reasons."
  },
  {
    "id": "gen-40-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a participant completes the obstacle course, they receive a medal.",
      "No participant who started late receives a medal.",
      "Every participant in the green team completes the obstacle course.",
      "Some participants in the green team started late."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 states that some participants in the green team started late. According to Statement 3, every participant in the green team completes the obstacle course. From Statement 1, completing the obstacle course means receiving a medal. So, these specific green team members receive a medal. However, Statement 2 states that no participant who started late receives a medal. This creates a contradiction for the participants asserted in Statement 4: they both receive a medal and do not receive a medal."
  },
  {
    "id": "gen-40-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds with blue feathers are native to this region.",
      "Some birds native to this region do not have blue feathers.",
      "If a bird is native to this region, it thrives in cold weather.",
      "The bird in my garden has blue feathers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The bird in the garden has blue feathers (Statement 4), so it is native to this region (Statement 1), and thus thrives in cold weather (Statement 3). Statement 2, which says some birds native to this region do not have blue feathers, is entirely consistent with the other statements, as it simply describes other types of birds that are also native to the region."
  },
  {
    "id": "gen-40-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in advanced calculus are engineering majors.",
      "If a student is an engineering major, they must complete an internship.",
      "No student who completes an internship is eligible for the summer research program.",
      "Every student enrolled in advanced calculus is eligible for the summer research program."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a student is enrolled in advanced calculus (Statement 1), they are an engineering major. If they are an engineering major (Statement 2), they complete an internship. If they complete an internship (Statement 3), they are not eligible for the summer research program. This implies that all students enrolled in advanced calculus are not eligible for the summer research program. Statement 4 directly contradicts this by claiming that every student enrolled in advanced calculus is eligible for the summer research program."
  },
  {
    "id": "gen-40-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an appliance is energy-efficient, it has a high rating.",
      "All appliances with a high rating are expensive.",
      "Some expensive appliances are not energy-efficient.",
      "My new dishwasher is energy-efficient."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "My dishwasher is energy-efficient (Statement 4), so it has a high rating (Statement 1) and is therefore expensive (Statement 2). This is consistent with Statement 3, which indicates that some expensive appliances might not be energy-efficient; this simply means not all expensive appliances are necessarily energy-efficient, which does not contradict the properties of my specific dishwasher."
  },
  {
    "id": "gen-40-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only residents who pay their dues can access the recreation center.",
      "If a resident has a guest pass, they cannot pay their dues.",
      "All residents without a guest pass are permitted to use the recreation center.",
      "Some residents are permitted to use the recreation center while having a guest pass."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims that some residents are permitted to use the recreation center while having a guest pass. For these residents, Statement 2 indicates that if they have a guest pass, they cannot pay their dues. However, Statement 1 states that only residents who pay their dues can access the recreation center, meaning if a resident accesses the center, they must pay their dues. Therefore, the residents described in Statement 4 would both not pay their dues (from Statement 2) and must pay their dues (from Statement 1), leading to a contradiction."
  },
  {
    "id": "gen-40-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful authors have published at least one novel.",
      "If an author has published at least one novel, they attend book readings.",
      "Some authors who attend book readings have not published a novel.",
      "No successful author avoids book readings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all successful authors (from Statement 1) have published at least one novel, and therefore attend book readings (from Statement 2). Statement 4 reinforces this by saying no successful author avoids book readings. Statement 3 (some authors who attend book readings have not published a novel) is consistent, as it implies there are authors who attend book readings but are not necessarily successful authors or have only published other works like short stories."
  },
  {
    "id": "gen-40-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "All animals with opposable thumbs are capable of tool use.",
      "No animal capable of tool use is exclusively herbivorous.",
      "All primates are exclusively herbivorous."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if an animal is a primate (Statement 1), it has opposable thumbs. If it has opposable thumbs (Statement 2), it is capable of tool use. If it is capable of tool use (Statement 3), it is not exclusively herbivorous. This means that all primates are not exclusively herbivorous. Statement 4 directly contradicts this by stating that all primates are exclusively herbivorous."
  },
  {
    "id": "gen-40-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles parked overnight must display a permit.",
      "If a vehicle displays a permit, it is registered with the office.",
      "Some vehicles registered with the office are not parked overnight.",
      "My car is registered with the office."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: if a vehicle is parked overnight, it displays a permit, and therefore it is registered with the office. My car is registered with the office (Statement 4), but this does not necessarily mean it was parked overnight or displays a permit. Statement 3 is consistent, indicating that some vehicles are registered but not parked overnight, which my car could be among."
  },
  {
    "id": "gen-41-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted a portfolio.",
      "No applicant who submitted a portfolio was late for their interview.",
      "Some successful applicants were late for their interview."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no successful applicant was late for their interview. This directly contradicts Statement 3, which claims that some successful applicants were late."
  },
  {
    "id": "gen-41-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fish live in water.",
      "Some animals that live in water are not fish.",
      "The animal in the tank is a fish."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all fish live in water. Statement 2 notes that not all water-dwelling animals are fish. Statement 3 introduces a specific fish. All these statements can be simultaneously true; the animal in the tank would live in water, and there could be other non-fish water-dwellers."
  },
  {
    "id": "gen-41-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe requires sugar, it is a dessert.",
      "No dish that contains vegetables is a dessert.",
      "Some dishes that contain vegetables require sugar."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a recipe requires sugar, it is a dessert. Statement 2 implies that if a dish is a dessert, it does not contain vegetables. Therefore, any recipe requiring sugar cannot contain vegetables, which contradicts Statement 3."
  },
  {
    "id": "gen-41-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Maria trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 defines a characteristic of professional athletes. Statement 2 indicates that the group of daily trainers is larger than just professional athletes. Maria could be a professional athlete or one of the other people who train daily, consistent with all given facts."
  },
  {
    "id": "gen-41-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every bird in this aviary can fly.",
      "If a bird can fly, it builds a nest.",
      "Some birds in this aviary do not build nests."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combined establish that every bird in this aviary builds a nest. This directly contradicts Statement 3, which asserts that some birds in the aviary do not build nests."
  },
  {
    "id": "gen-41-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy walks.",
      "Some pets are not dogs.",
      "Our cat is a pet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 describes a characteristic of dogs. Statement 2 confirms that other types of pets exist. Statement 3 identifies a cat as a pet. None of these statements create a conflict, as the cat is not necessarily a dog and its enjoyment of walks is not stated or implied to be in conflict."
  },
  {
    "id": "gen-41-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members attended the briefing.",
      "No one who attended the briefing voted against the proposal.",
      "At least one committee member voted against the proposal."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, all committee members attended the briefing. Statement 2 establishes that no one who attended the briefing voted against the proposal. Thus, it must be true that no committee member voted against the proposal, which contradicts Statement 3."
  },
  {
    "id": "gen-41-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students studied diligently but did not pass the exam.",
      "Liam passed the exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 sets a condition for passing. Statement 2 shows that diligent study doesn't guarantee a pass. Liam passed the exam, so by Statement 1, he studied diligently, which is consistent with the other statements."
  },
  {
    "id": "gen-41-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires little water.",
      "Every plant in the greenhouse requires regular watering.",
      "Some succulents are plants in the greenhouse."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that succulents require little water. Statement 2 implies that plants in the greenhouse do not require little water (since 'regular watering' is the opposite of 'little water'). Therefore, no plant in the greenhouse can be a succulent, which contradicts Statement 3."
  },
  {
    "id": "gen-41-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees with a gold badge have access to the server room.",
      "No employee with a silver badge has access to the server room.",
      "Some employees have neither a gold nor a silver badge."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes a rule for gold badge holders. Statement 2 establishes an opposite rule for silver badge holders. Statement 3 simply states that there are employees outside these two groups. There is no logical conflict among these conditions and observations."
  },
  {
    "id": "gen-42-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "All tropical species need high humidity.",
      "If a plant needs high humidity, it thrives indoors.",
      "No plant that thrives indoors requires daily watering.",
      "Some plants require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 logically imply that if a plant requires daily watering, it thrives indoors. Statement 4 asserts that if a plant thrives indoors, it does not require daily watering, which implies that if a plant requires daily watering, it cannot thrive indoors. This creates a contradiction, as daily watering implies both thriving indoors and not thriving indoors. Statement 5 asserts that some plants require daily watering, making this contradiction active. Removing Statement 5 makes the set consistent, as it would then be possible that no plants require daily watering."
  },
  {
    "id": "gen-42-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every athlete who trains intensely achieves peak performance.",
      "An athlete achieves peak performance only if they maintain a strict diet.",
      "Every athlete who maintains a strict diet uses specific supplements.",
      "Some athletes who train intensely use specific supplements."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all intensely training athletes achieve peak performance. Statement 2 says achieving peak performance requires a strict diet. Statement 3 says a strict diet requires specific supplements. This chain implies that every athlete who trains intensely uses specific supplements. Statement 4, which says some intensely training athletes use specific supplements, is perfectly consistent with this implication and does not create a contradiction."
  },
  {
    "id": "gen-42-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee is promoted, they receive a salary increase.",
      "An employee receives a salary increase only if they exceed their targets.",
      "No employee who exceeds their targets failed their annual review.",
      "Some employees failed their annual review.",
      "All employees who failed their annual review were promoted."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 5, 1, 2, and 3 form a logical chain: If an employee failed their annual review, then they were promoted, which means they received a salary increase, which means they exceeded their targets, which means they did not fail their annual review. This deduction leads to the conclusion that if an employee failed their annual review, they did not fail their annual review, meaning it is impossible for an employee to have failed their annual review. Statement 4, however, asserts that some employees did fail their annual review, creating a direct contradiction. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-42-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful authors collaborate with an editor.",
      "If an author collaborates with an editor, they refine their manuscript.",
      "No author refines their manuscript unless they collaborate with an editor.",
      "Some authors who refine their manuscript do not become successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that all successful authors collaborate with an editor. Statement 2 implies that collaborating with an editor means refining a manuscript. Statement 3 implies that refining a manuscript means collaborating with an editor. Together, these mean that a successful author collaborates with an editor and refines their manuscript. Statement 4, that some authors who refine their manuscript do not become successful, is consistent with the others, as not all authors who refine their manuscript must be successful authors."
  },
  {
    "id": "gen-42-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant who completes the advanced training receives a certificate.",
      "No participant who received a certificate missed more than two sessions.",
      "If a participant missed more than two sessions, they did not complete the advanced training.",
      "All participants completed the advanced training.",
      "Some participants missed more than two sessions."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 5 and 2 imply that some participants missed more than two sessions and did not receive a certificate. Statement 1 implies that if a participant did not receive a certificate, they did not complete the advanced training. Therefore, it can be deduced that some participants did not complete the advanced training. This directly contradicts Statement 4, which asserts that all participants completed the advanced training. Removing Statement 5 resolves this inconsistency."
  },
  {
    "id": "gen-42-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the jury voted for acquittal.",
      "If a juror voted for acquittal, they believed the defendant was innocent.",
      "No juror believed the defendant was innocent unless they voted for acquittal.",
      "Some jurors who believed the defendant was innocent were not members of the jury."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically imply that all members of the jury believed the defendant was innocent. Statement 3 asserts that believing the defendant was innocent requires voting for acquittal, which is consistent with Statement 2. Statement 4, that some jurors who believed the defendant was innocent were not members of the jury, is consistent, as not all individuals who believe the defendant innocent must be jury members."
  },
  {
    "id": "gen-42-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is migratory, it builds a nest in a warm climate.",
      "All birds that build a nest in a warm climate travel long distances.",
      "No bird that travels long distances remains in the same habitat year-round.",
      "Every migratory bird remains in the same habitat year-round.",
      "Some birds are migratory."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a bird is migratory, it builds a nest in a warm climate, which means it travels long distances, which means it does not remain in the same habitat year-round. Therefore, all migratory birds do not remain in the same habitat year-round. This directly contradicts Statement 4, which says every migratory bird remains in the same habitat year-round. Statement 5 asserts that some birds are migratory, making this contradiction apply to existing birds. Removing Statement 5 makes the set consistent, as it would then be possible that no birds are migratory."
  },
  {
    "id": "gen-42-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful business invests in research and development.",
      "A business invests in research and development only if it prioritizes innovation.",
      "If a business prioritizes innovation, it secures intellectual property.",
      "Some businesses that prioritize innovation are not successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 combine to form a chain: if a business is successful, it invests in research and development, which means it prioritizes innovation, which means it secures intellectual property. This implies all successful businesses secure intellectual property. Statement 4, which states that some businesses that prioritize innovation are not successful, is consistent with this, as not all businesses that prioritize innovation must be successful."
  },
  {
    "id": "gen-42-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All cars with automatic transmission are fuel-efficient.",
      "If a car is fuel-efficient, it has a small engine.",
      "No car with a small engine is suitable for towing.",
      "Some cars with automatic transmission are suitable for towing.",
      "All cars are fuel-efficient."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a car has automatic transmission, it is fuel-efficient, which means it has a small engine, which means it is not suitable for towing. This implies that all cars with automatic transmission are not suitable for towing. Statement 4, however, asserts that some cars with automatic transmission are suitable for towing, which directly contradicts this deduction. Removing Statement 4 resolves this inconsistency. Statement 5 is a distractor as it is not directly involved in creating the contradiction."
  },
  {
    "id": "gen-42-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every committee member supports the new budget.",
      "If a person supports the new budget, they are aware of its implications.",
      "No one aware of the budget's implications is uninformed about current policy.",
      "All committee members are uninformed about current policy.",
      "There are committee members."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if someone is a committee member, they support the new budget, which means they are aware of its implications, which means they are not uninformed about current policy. Therefore, it can be deduced that no committee member is uninformed about current policy. This directly contradicts Statement 4, which asserts that all committee members are uninformed about current policy. Statement 5 confirms the existence of committee members, making the contradiction active. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-43-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist is impatient.",
      "At least one member of the chess club is impatient."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all chess club members are skilled strategists. Statement 2 says no skilled strategist is impatient. Combining these, it must be true that no member of the chess club is impatient. This directly contradicts Statement 3, which claims at least one member of the chess club is impatient. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, it builds nests in trees.",
      "No animal that builds nests in trees is a ground-dweller.",
      "All penguins are ground-dwellers.",
      "Some robins are penguins."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that robins build nests in trees. Statement 2 means that any animal building nests in trees is not a ground-dweller. Thus, robins are not ground-dwellers. Statement 3 asserts that all penguins are ground-dwellers, meaning robins cannot be penguins. This directly contradicts Statement 4, which states that some robins are penguins. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All researchers use scientific methods.",
      "No one using scientific methods relies solely on intuition.",
      "Some lab assistants are researchers.",
      "All lab assistants rely solely on intuition."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that no researcher relies solely on intuition. Statement 3 indicates that some lab assistants are researchers. Therefore, those lab assistants who are researchers cannot rely solely on intuition. This conclusion contradicts Statement 4, which asserts that all lab assistants rely solely on intuition. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with management roles attend weekly meetings.",
      "No one who attends weekly meetings works part-time.",
      "Every employee with a management role works part-time."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all management employees attend weekly meetings. Statement 2 says no one who attends weekly meetings works part-time. Combining these, it follows that no employee with a management role works part-time. This directly contradicts Statement 3, which claims every employee with a management role works part-time. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All parrots are birds.",
      "Some parrots are not pets.",
      "All wild animals are pets.",
      "All birds are wild animals."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 4 says all birds are wild animals. Statement 3 says all wild animals are pets. Combining these, it follows that all birds are pets. Since Statement 1 says all parrots are birds, it must also be true that all parrots are pets. This conclusion directly contradicts Statement 2, which states that some parrots are not pets. Removing Statement 2 resolves the inconsistency."
  },
  {
    "id": "gen-43-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students attend lectures.",
      "Some students also participate in workshops.",
      "Not all students participate in workshops."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all students to attend lectures, and for some students to participate in workshops, while other students (who also attend lectures) do not participate in workshops. No contradiction is formed."
  },
  {
    "id": "gen-43-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All roses are flowering plants.",
      "Some flowering plants do not have thorns."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 and 2 mean all roses are flowering plants that have thorns. Statement 3 simply allows for the existence of other types of flowering plants that are not roses and therefore do not necessarily have thorns. No contradiction is formed."
  },
  {
    "id": "gen-43-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No athlete is unfamiliar with training.",
      "All basketball players are athletes.",
      "Some basketball players are familiar with advanced training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 means all athletes are familiar with training. Since Statement 2 says all basketball players are athletes, it implies all basketball players are familiar with training. Statement 3 specifies that some basketball players are familiar with a particular type of training, which is compatible with being familiar with training in general. No contradiction is formed."
  },
  {
    "id": "gen-43-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book in this library has a unique call number.",
      "Some books in this library are fiction.",
      "No fiction book has a call number starting with 'R'."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. All books having unique call numbers is compatible with some books being fiction. The fact that no fiction book's call number starts with 'R' simply means that any books with 'R' call numbers must be non-fiction, which is perfectly possible. No contradiction is formed."
  },
  {
    "id": "gen-43-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an item is handmade, it is expensive.",
      "All items in the gallery are handmade.",
      "Some expensive items are not in the gallery."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 together imply that all items in the gallery are expensive. Statement 3 simply indicates that there are expensive items that are not part of the gallery's collection, which is perfectly compatible with the gallery's items also being expensive. No contradiction is formed."
  },
  {
    "id": "gen-44-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful applicants receive a job offer.",
      "No one who received a job offer was denied a security clearance.",
      "Some candidates denied a security clearance were highly recommended.",
      "Every highly recommended candidate was a successful applicant."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates that every highly recommended candidate was a successful applicant. Statement 1 states all successful applicants receive a job offer, and Statement 2 says no one who received a job offer was denied a security clearance. This chain implies that every highly recommended candidate was NOT denied a security clearance, which directly contradicts Statement 3 that some highly recommended candidates WERE denied a security clearance."
  },
  {
    "id": "gen-44-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a book is a first edition, it is highly valuable.",
      "All highly valuable books are kept in a special collection.",
      "Some books in the special collection are not first editions.",
      "This book is not highly valuable."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A book that is not highly valuable (Statement 4) could exist. It would not be a first edition (due to Statement 1). Such a book could be in the special collection or not, and this is compatible with Statement 3, which indicates that the special collection contains some books that are not first editions."
  },
  {
    "id": "gen-44-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every runner in the marathon wore a tracking device.",
      "No one wearing a tracking device was allowed to use a shortcut.",
      "All participants who finished under 3 hours used a shortcut.",
      "Some runners in the marathon finished under 3 hours."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that every runner in the marathon was not allowed to use a shortcut. However, Statement 4 indicates some runners in the marathon finished under 3 hours, and Statement 3 states that all participants who finished under 3 hours used a shortcut. This creates a contradiction, as it means some marathon runners used a shortcut, which is impossible if no marathon runner was allowed to use a shortcut."
  },
  {
    "id": "gen-44-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All trees in this forest are deciduous or coniferous.",
      "No deciduous tree sheds its leaves in winter.",
      "Some trees in this forest shed their leaves in winter.",
      "Every coniferous tree has needles."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 2, if a tree sheds its leaves in winter, it cannot be deciduous. Given Statement 1, if it's not deciduous, it must be coniferous. So, Statement 3 implies some coniferous trees shed their leaves in winter, which is compatible with Statement 4 that every coniferous tree has needles."
  },
  {
    "id": "gen-44-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless an animal is domesticated, it is not kept as a pet.",
      "All domesticated animals are accustomed to human presence.",
      "Some animals kept as pets were originally found in the wild.",
      "No animal accustomed to human presence was ever found in the wild."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that if an animal is kept as a pet, it must be domesticated. Statement 2 indicates that all domesticated animals are accustomed to human presence. Statement 4 states no animal accustomed to human presence was ever found in the wild. Chaining these together means that if an animal is kept as a pet, it was NOT found in the wild. This directly contradicts Statement 3, which asserts that some animals kept as pets WERE found in the wild."
  },
  {
    "id": "gen-44-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique cars require specialized maintenance.",
      "Some cars requiring specialized maintenance are not antique.",
      "If a car is electric, it does not require specialized maintenance.",
      "No electric car is antique."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 3 implies that if a car is electric, it doesn't require specialized maintenance. Statement 1 implies that if a car doesn't require specialized maintenance, it cannot be antique. Therefore, it follows that if a car is electric, it cannot be antique, which is precisely what Statement 4 asserts. Statement 2 is also fully compatible, as specialized maintenance is a broader category than antique cars."
  },
  {
    "id": "gen-44-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student attends the advanced seminar, they must complete a research paper.",
      "Every student who completes a research paper earns extra credit.",
      "No student who earns extra credit fails the course.",
      "Some students in the advanced seminar failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 form a chain: attending the advanced seminar implies completing a research paper, which implies earning extra credit, which implies not failing the course. Therefore, every student in the advanced seminar must NOT fail the course. This directly contradicts Statement 4, which says that some students in the advanced seminar DID fail the course."
  },
  {
    "id": "gen-44-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus have exceeded their sales targets.",
      "No employee who exceeded their sales targets was eligible for commission.",
      "Every employee eligible for commission works full-time.",
      "Some employees work full-time but did not receive a bonus.",
      "Maria works full-time and received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Maria (Statement 5) received a bonus, so she exceeded targets (Statement 1) and was not eligible for commission (Statement 2). She works full-time, which is compatible with not being eligible for commission (as Statement 3 only implies full-time for those eligible, not the reverse). Statement 4 describes other full-time employees who are not necessarily inconsistent with the other rules."
  },
  {
    "id": "gen-44-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that migrate travel south for winter.",
      "No bird that travels south for winter stays in the region.",
      "Some birds that do not migrate stay in the region.",
      "Every bird that stays in the region is a migratory bird."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 create a chain: any bird that stays in the region must be migratory (Statement 4), which means it travels south for winter (Statement 1), which means it does NOT stay in the region (Statement 2). This implies that no bird can possibly stay in the region. However, Statement 3 asserts that some birds DO stay in the region, creating a direct contradiction."
  },
  {
    "id": "gen-44-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a restaurant is highly rated, it receives a Michelin star.",
      "No restaurant receiving a Michelin star offers exclusively casual dining.",
      "All restaurants offering exclusively casual dining are popular with families.",
      "Some restaurants popular with families are highly rated."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, if a restaurant is highly rated, it does not offer exclusively casual dining. Statement 4 indicates that some restaurants popular with families are highly rated. These highly rated, family-popular restaurants would therefore not offer exclusively casual dining, which is fully compatible with Statement 3 (exclusively casual dining restaurants are popular with families, but not all family-popular restaurants must be exclusively casual dining)."
  },
  {
    "id": "gen-45-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If someone is a manager, they have access to the vault.",
      "Anyone who does not have a security key cannot access the vault.",
      "Every new hire is an employee who does not have a security key.",
      "All managers are new hires."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 4, 3, and 2 form a logical chain: All managers are new hires. Every new hire does not have a security key. Anyone without a security key cannot access the vault. This implies that all managers cannot access the vault. This directly contradicts Statement 1, which states that if someone is a manager, they have access to the vault."
  },
  {
    "id": "gen-45-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who earns good grades receives a scholarship.",
      "If a student completes all extra credit assignments, they will earn good grades.",
      "Some students did not complete all extra credit assignments.",
      "Not all students receive a scholarship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 2, completing extra credit leads to good grades. From Statement 1, good grades lead to a scholarship. This means completing extra credit leads to a scholarship. Statement 3 says some students did not complete extra credit, and Statement 4 says not all students receive a scholarship. These non-scholarship students could be exactly the ones who did not complete extra credit, thus not earning good grades, and therefore not receiving a scholarship. No contradictions arise."
  },
  {
    "id": "gen-45-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All active members of the planning committee are eligible to vote on funding proposals.",
      "If a member is eligible to vote on funding proposals, they must have completed the ethics training.",
      "No member who has completed the ethics training works on Project X.",
      "Some active members of the planning committee work on Project X."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a member is an active member of the planning committee, they are eligible to vote, which means they completed ethics training, and therefore they do not work on Project X. This implies that no active members of the planning committee work on Project X. Statement 4, however, directly asserts that some active members of the planning committee *do* work on Project X, creating an inconsistency."
  },
  {
    "id": "gen-45-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A store offers a discount only if a customer is a loyalty cardholder.",
      "If a customer spends over $100, they are offered a discount.",
      "Some loyalty cardholders do not spend over $100.",
      "No customer who is not a loyalty cardholder is offered a discount."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 are logically equivalent, stating that to get a discount, one must be a loyalty cardholder. Combined with Statement 2, spending over $100 implies receiving a discount, which in turn implies being a loyalty cardholder. Statement 3 indicates there are loyalty cardholders who don't spend over $100. This is perfectly consistent; such individuals would not necessarily receive a discount, and their existence doesn't contradict the other rules."
  },
  {
    "id": "gen-45-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All professional athletes adhere to a strict training regimen.",
      "If an athlete follows a strict training regimen, they consistently perform well.",
      "No athlete who consistently performs well ever faces severe injuries.",
      "Some athletes who face severe injuries are professional athletes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: all professional athletes adhere to a strict training regimen, which leads to consistent good performance, and therefore they never face severe injuries. This means no professional athlete ever faces severe injuries. Statement 4 directly contradicts this by claiming that some athletes who face severe injuries are indeed professional athletes."
  },
  {
    "id": "gen-45-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a speaker is invited to the main conference, their topic must be peer-reviewed.",
      "All peer-reviewed topics are considered highly relevant by the organizing committee.",
      "Some topics considered highly relevant by the organizing committee are not presented at the main conference.",
      "No speaker whose topic is not peer-reviewed is invited to the main conference."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 are logically equivalent (contrapositives). From Statements 1 and 2, it follows that if a speaker is invited to the main conference, their topic is considered highly relevant. Statement 3 asserts that some highly relevant topics are not presented at the main conference. This is consistent, as the condition (being highly relevant) does not guarantee an invitation; it only means that an invited topic must be highly relevant."
  },
  {
    "id": "gen-45-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All artworks displayed in the main gallery are valued above $10,000.",
      "If an artwork is valued above $10,000, it requires a specialized security system.",
      "No artwork with a specialized security system is left unguarded overnight.",
      "Some artworks left unguarded overnight are displayed in the main gallery."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if an artwork is displayed in the main gallery, it is valued above $10,000, which means it requires a specialized security system, and therefore it is not left unguarded overnight. This implies that no artwork displayed in the main gallery is left unguarded overnight. Statement 4 directly contradicts this by stating that some artworks left unguarded overnight *are* displayed in the main gallery."
  },
  {
    "id": "gen-45-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee who receives advanced training is eligible for promotion.",
      "If an employee is eligible for promotion, they must complete an annual review.",
      "Some employees who complete an annual review do not receive advanced training.",
      "No employee who does not complete an annual review is eligible for promotion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 form a chain: advanced training leads to promotion eligibility, which in turn requires completing an annual review. Thus, any employee with advanced training completes an annual review. Statement 4 is simply the contrapositive of Statement 2. Statement 3 states that some employees who complete an annual review did not receive advanced training. This is consistent; completing an annual review doesn't necessarily mean one received advanced training, just that it's a prerequisite for promotion after training."
  },
  {
    "id": "gen-45-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All construction projects that exceed five stories require a special permit.",
      "If a project requires a special permit, it must undergo an environmental impact assessment.",
      "No construction project that undergoes an environmental impact assessment can be initiated without community approval.",
      "Every construction project initiated without community approval is immediately halted.",
      "Some construction projects that exceed five stories are not immediately halted."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: if a construction project exceeds five stories, it requires a special permit. This permit necessitates an environmental impact assessment, which means it cannot be initiated without community approval. Projects initiated without community approval are immediately halted. Therefore, all projects exceeding five stories are immediately halted. Statement 5, however, claims that some construction projects exceeding five stories are *not* immediately halted, creating a direct contradiction."
  },
  {
    "id": "gen-45-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every medical research study involving human subjects requires ethical approval.",
      "If a study receives ethical approval, it is overseen by the institutional review board.",
      "No study overseen by the institutional review board proceeds without informed consent.",
      "Some studies that proceed with informed consent are not overseen by the institutional review board."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 form a chain: human subject studies require ethical approval, are then overseen by the institutional review board, and thus proceed with informed consent. This means all human subject studies proceed with informed consent. Statement 4 says some studies that proceed with informed consent are not overseen by the institutional review board. This is consistent; it simply means there are other types of studies, not involving human subjects, that also use informed consent but don't require IRB oversight or ethical approval."
  },
  {
    "id": "gen-46-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam received a scholarship.",
      "No student who skipped class received a scholarship.",
      "Some students skipped class but passed the exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, we know that if a student passed the exam, they received a scholarship. From Statement 2, we know that if a student skipped class, they did not receive a scholarship. Statement 3 claims that some students both skipped class and passed the exam. For these students, Statement 1 implies they received a scholarship, while Statement 2 implies they did not, creating a contradiction. Removing Statement 3 resolves this conflict by removing the assertion that such a group exists."
  },
  {
    "id": "gen-46-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have wings.",
      "Some animals with wings can fly.",
      "No bird can run very fast."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Birds are a type of animal with wings. Some animals with wings can fly, which doesn't specify if birds are among them or not. The fact that no bird can run fast is an independent attribute and does not conflict with the other statements."
  },
  {
    "id": "gen-46-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses yeast, it requires rising time.",
      "Any dish requiring rising time must be baked.",
      "All sourdough breads use yeast.",
      "Some sourdough breads are not baked."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 tells us that all sourdough breads use yeast. From Statement 1, anything that uses yeast requires rising time. From Statement 2, anything requiring rising time must be baked. Therefore, it follows that all sourdough breads must be baked. This directly contradicts Statement 4, which claims some sourdough breads are not baked. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-46-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Mia trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 describes professional athletes. Statement 2 indicates that training daily is not exclusive to professional athletes. Mia could be a professional athlete (consistent with Statement 1) or one of the people who train daily but are not professional athletes (consistent with Statement 2)."
  },
  {
    "id": "gen-46-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who attended the seminar missed the bonus quiz.",
      "All employees who passed the training attended the seminar.",
      "Some employees who passed the training missed the bonus quiz."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 2, all employees who passed the training attended the seminar. From Statement 1, no one who attended the seminar missed the bonus quiz. Combining these, it logically follows that all employees who passed the training did not miss the bonus quiz. This directly contradicts Statement 3, which asserts that some employees who passed the training missed the bonus quiz. Removing Statement 3 resolves the conflict."
  },
  {
    "id": "gen-46-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires minimal water.",
      "Cactus plants are succulents.",
      "Some plants that require minimal water grow in deserts.",
      "No cactus plant grows in a forest."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Cactus plants are succulents and thus require minimal water. Some plants requiring minimal water grow in deserts, which is compatible with cacti. The information that no cactus grows in a forest is an additional fact that does not create a contradiction with the other statements."
  },
  {
    "id": "gen-46-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a mystery novel, it is intended for adults.",
      "No book intended for adults has simple language.",
      "Some books with simple language are mystery novels."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, if a book is a mystery novel, it is intended for adults. From Statement 2, no book intended for adults has simple language. Therefore, it logically follows that no mystery novel has simple language. This contradicts Statement 3, which asserts that some books with simple language are mystery novels. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-46-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful projects had strong leadership.",
      "Some projects with strong leadership were not successful.",
      "No project that lacked strong leadership was successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 indicates that strong leadership is a necessary condition for successful projects. Statement 3 is the contrapositive of Statement 1, reinforcing the same idea. Statement 2 suggests that strong leadership is not a sufficient condition for success, meaning some projects with strong leadership can still fail, which does not contradict the necessity of strong leadership for *successful* projects."
  },
  {
    "id": "gen-46-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a device is a smartphone, it can connect to the internet.",
      "No device that connects to the internet is a standalone camera.",
      "Some smartphones are standalone cameras."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, if a device is a smartphone, it can connect to the internet. From Statement 2, no device that connects to the internet is a standalone camera. Therefore, it logically follows that no smartphone is a standalone camera. This directly contradicts Statement 3, which asserts that some smartphones are standalone cameras. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-46-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All concert halls require acoustic treatment.",
      "Some buildings with acoustic treatment are not concert halls.",
      "If a building is a theater, it requires acoustic treatment.",
      "No art gallery is a theater."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Concert halls and theaters both require acoustic treatment. Statement 2 shows that other types of buildings (like theaters) can also have acoustic treatment, which doesn't contradict that concert halls have it. Statement 4 provides information about art galleries that is unrelated to the other claims, creating no conflict."
  },
  {
    "id": "gen-47-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artifact is from the Iron Age, it contains iron.",
      "No artifact containing iron is made of bronze.",
      "All artifacts excavated from site Alpha are from the Iron Age.",
      "Some artifacts excavated from site Alpha are made of bronze."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: If an artifact is from site Alpha, it is from the Iron Age (3), and thus contains iron (1), and therefore is not made of bronze (2). This implies no artifact from site Alpha is made of bronze, which directly contradicts Statement 4 that some are made of bronze. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who received a bonus completed their project early.",
      "If an employee completed their project early, they are eligible for promotion.",
      "Some employees eligible for promotion did not receive a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, all employees who received a bonus are eligible for promotion. Statement 3 indicates that there are employees eligible for promotion who did not receive a bonus, which is perfectly consistent. Eligibility for promotion does not necessitate receiving a bonus."
  },
  {
    "id": "gen-47-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant serves vegan options, it sources fresh produce daily.",
      "No restaurant that sources fresh produce daily struggles with inventory management.",
      "Every restaurant in the downtown district serves vegan options.",
      "At least one restaurant in the downtown district struggles with inventory management."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All restaurants in the downtown district (3) serve vegan options (3), thus source fresh produce daily (1), and therefore do not struggle with inventory management (2). This implies no restaurant in the downtown district struggles with inventory management, which directly contradicts Statement 4. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car with an electric engine has zero emissions.",
      "Some cars with zero emissions are not new models.",
      "If a car is a new model, it has advanced safety features."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes a link between electric engines and zero emissions. Statement 2 indicates that not all zero-emission cars are new. Statement 3 describes a characteristic of new models. There is no logical chain that leads to a contradiction among these facts."
  },
  {
    "id": "gen-47-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No student who passed the advanced logic course failed the final exam.",
      "If a student submitted their homework late, they failed the final exam.",
      "All students enrolled in the advanced logic course submitted their homework late.",
      "Some students enrolled in the advanced logic course passed the advanced logic course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 establish that all students enrolled in the advanced logic course submitted their homework late, and therefore failed the final exam. From Statement 1, anyone who passed the advanced logic course did not fail the final exam. This means no student enrolled in the advanced logic course could have passed it. This conclusion contradicts Statement 4. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document is confidential, it requires a security clearance to access.",
      "All documents stored in the archives are confidential.",
      "Some documents that require a security clearance to access are not stored in the archives."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, all documents stored in the archives are confidential and thus require a security clearance. Statement 3 indicates that there are documents requiring security clearance that are not in the archives, which is consistent. The first two statements do not imply that *only* archived documents require clearance."
  },
  {
    "id": "gen-47-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants selected for the study provided a valid email address.",
      "If a participant provided a valid email address, they received an invitation.",
      "No participant who received an invitation failed the initial screening.",
      "Some participants selected for the study failed the initial screening."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All participants selected for the study (1) provided a valid email address (1), thus received an invitation (2), and therefore did not fail the initial screening (3). This implies no participant selected for the study failed the initial screening, which directly contradicts Statement 4. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every painting in the collection is an oil portrait.",
      "No oil portrait features a landscape background.",
      "Some paintings in the collection do not feature a landscape background."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, every painting in the collection is an oil portrait, and no oil portrait features a landscape background. This implies that no painting in the collection features a landscape background. If no painting features a landscape background, it is necessarily true that some paintings in the collection do not feature a landscape background (Statement 3). There is no contradiction."
  },
  {
    "id": "gen-47-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete trains with the national team, they compete internationally.",
      "All athletes who compete internationally receive sponsorship deals.",
      "No athlete who receives sponsorship deals practices daily.",
      "At least one athlete who trains with the national team practices daily."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Any athlete who trains with the national team (1) competes internationally (1), thus receives sponsorship deals (2), and therefore does not practice daily (3). This implies no athlete who trains with the national team practices daily, which directly contradicts Statement 4. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every building constructed before 1900 has a stone foundation.",
      "If a building has a stone foundation, it requires regular maintenance.",
      "Some buildings that require regular maintenance were not constructed before 1900."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 establish that all buildings constructed before 1900 have a stone foundation and require regular maintenance. Statement 3 indicates that there are buildings requiring regular maintenance that were not constructed before 1900. This is consistent, as the first two statements do not imply that *only* pre-1900 buildings require regular maintenance."
  },
  {
    "id": "gen-48-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are nocturnal birds.",
      "No nocturnal birds hunt during the day.",
      "Some owls hunt during the day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all owls are nocturnal birds. Statement 2 asserts that no nocturnal birds hunt during the day. Taken together, this means no owls hunt during the day. This conclusion directly contradicts Statement 3, which claims some owls do hunt during the day. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All roses are flowers.",
      "Some flowers are not red.",
      "Every rose is red."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all roses (which are flowers) to be red, while other types of flowers exist that are not red. For example, red roses exist, and bluebells (flowers) are not red. There is no contradiction among these statements."
  },
  {
    "id": "gen-48-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a feline, it has whiskers.",
      "Every animal with whiskers consumes meat.",
      "Some felines do not consume meat."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all felines have whiskers. Statement 2 states that every animal with whiskers consumes meat. Therefore, it logically follows that all felines consume meat. This conclusion directly contradicts Statement 3, which claims some felines do not consume meat. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All mammals have fur.",
      "Some animals with fur are not mammals.",
      "Every dog is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all mammals (including dogs) to have fur, and for some other animals that are not mammals (e.g., certain insects) to also have fur. All three statements can be true simultaneously."
  },
  {
    "id": "gen-48-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategists enjoy playing card games.",
      "At least one member of the chess club enjoys playing card games."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all chess club members are skilled strategists. Statement 2 claims that no skilled strategists enjoy playing card games. From these two statements, it must be true that no members of the chess club enjoy playing card games. This directly conflicts with Statement 3, which asserts that at least one member does enjoy card games. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No students who passed the exam failed the course.",
      "Some students who passed the exam also passed the course.",
      "Every student who passed the exam studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means all students who passed the exam also passed the course. Statement 2, which says some students who passed the exam also passed the course, is entirely consistent with Statement 1 (as 'some' is implied by 'all'). Statement 3 introduces another condition (studying diligently) that applies to all students who passed the exam, which does not conflict with the other statements. All statements can be true at once."
  },
  {
    "id": "gen-48-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every fruit on this tree is an apple.",
      "Some fruits on this tree are not red.",
      "All apples are red."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says that every fruit on this tree is an apple. Statement 3 claims that all apples are red. Therefore, it logically follows that all fruits on this tree are red. This conclusion directly contradicts Statement 2, which states that some fruits on this tree are not red. Removing Statement 2 resolves the inconsistency."
  },
  {
    "id": "gen-48-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of this town pay property taxes.",
      "Some people who pay property taxes do not live in this town.",
      "Mark lives in this town."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that Mark, as a resident, pays property taxes, and that there are other people who pay property taxes but do not live in this town (e.g., they own property here but reside elsewhere). All statements can be simultaneously true."
  },
  {
    "id": "gen-48-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All chefs are good cooks.",
      "No good cooks work in this restaurant.",
      "Some people who work in this restaurant are chefs."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all chefs are good cooks. Statement 2 asserts that no good cooks work in this restaurant. From these two premises, it necessarily follows that no chefs work in this restaurant. This directly contradicts Statement 3, which claims that some people who work in this restaurant are chefs. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant in the race completed the first lap.",
      "All participants who completed the first lap finished the race.",
      "Some participants finished the race."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all participants completed the first lap. Statement 2 says all who completed the first lap finished the race. Together, these imply that every participant in the race finished the race. Statement 3, which states that some participants finished the race, is a logical consequence of 'every participant finished the race' and is therefore consistent. All statements can be true simultaneously."
  },
  {
    "id": "gen-49-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a dog is a terrier, it is energetic.",
      "All energetic dogs require daily walks.",
      "Some dogs at the shelter are terriers.",
      "No dog at the shelter requires daily walks."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all terriers are energetic and all energetic dogs require daily walks, meaning all terriers require daily walks. Statement 3 claims that some dogs at the shelter are terriers. This logically entails that some dogs at the shelter require daily walks, which directly contradicts Statement 4, which claims no dog at the shelter requires daily walks. Removing Statement 4 resolves this conflict."
  },
  {
    "id": "gen-49-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful novelists are imaginative.",
      "No imaginative writer lacks originality.",
      "Some novelists are not original."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all successful novelists are imaginative, and all imaginative writers are original. This means every successful novelist must be original. Statement 3 directly contradicts this conclusion by asserting that some novelists are not original. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-49-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All visitors to the conference receive a name badge.",
      "No one who receives a name badge is exempt from the security check.",
      "Some people at the conference are visitors.",
      "Every person at the conference is exempt from the security check."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 indicate that all visitors to the conference receive a name badge and are, therefore, not exempt from the security check. Statement 3 asserts that some people at the conference are visitors. This logically means some people at the conference are not exempt from the security check, which directly contradicts Statement 4, claiming that every person at the conference is exempt. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-49-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every chef at the restaurant is a culinary school graduate.",
      "No culinary school graduate has less than five years of experience.",
      "Some chefs at the restaurant have less than five years of experience."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that every chef at the restaurant is a culinary school graduate and, therefore, has at least five years of experience. This implies that no chef at the restaurant has less than five years of experience. Statement 3 directly contradicts this by claiming some chefs at the restaurant have less than five years of experience. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-49-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a fern, it reproduces by spores.",
      "All plants that reproduce by spores lack flowers.",
      "Some plants that lack flowers are not ferns.",
      "Every fern in this garden has flowers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that if a plant is a fern, it reproduces by spores, and therefore, it lacks flowers. This means every fern must lack flowers. Statement 4 directly contradicts this by stating that every fern in this garden has flowers. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-49-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups have innovative founders.",
      "No company with innovative founders ignores market research.",
      "Some new companies ignore market research.",
      "Not all successful startups are new companies."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful startups respect market research. Statement 3 indicates some new companies ignore market research, meaning those specific new companies cannot be successful startups. Statement 4 states that some successful startups are not new companies, which is entirely consistent with the previous implications and does not introduce any contradiction. All statements can be true simultaneously."
  },
  {
    "id": "gen-49-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a dish is spicy, it contains chili.",
      "All dishes containing chili are flavorful.",
      "Some flavorful dishes are not spicy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all spicy dishes are flavorful. Statement 3, which asserts that some flavorful dishes are not spicy, is entirely consistent with this. It merely allows for flavorful dishes that derive their flavor from sources other than spiciness, without contradicting the fact that spicy dishes are also flavorful. All statements can be true simultaneously."
  },
  {
    "id": "gen-49-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All participants in the marathon trained for months.",
      "No one who trained for months neglected their diet.",
      "Some marathon participants completed the race.",
      "Some who neglected their diet did not complete the race."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all marathon participants trained for months and did not neglect their diet. Statement 3 confirms that some of these participants completed the race, which is consistent. Statement 4 describes a separate group of people who neglected their diet and did not complete the race; this does not contradict any claims about marathon participants. All statements can be true simultaneously."
  },
  {
    "id": "gen-49-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every valid ID card has a photo.",
      "No card without a photo is accepted for entry.",
      "Some cards with a photo are not valid IDs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all valid ID cards have photos. Statement 2 implies that any card accepted for entry must also have a photo. Statement 3, claiming some cards with a photo are not valid IDs, is perfectly consistent with the first two. It simply means having a photo is a necessary condition for a valid ID or for entry, but not a sufficient one for validity. All statements can be true simultaneously."
  },
  {
    "id": "gen-49-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a device runs on solar power, it is energy-efficient.",
      "All energy-efficient devices are popular among eco-conscious consumers.",
      "Some devices popular among eco-conscious consumers do not run on solar power."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all devices running on solar power are energy-efficient, and therefore, popular among eco-conscious consumers. Statement 3 is consistent with this, as it merely indicates that popularity among eco-conscious consumers is not exclusive to solar-powered devices; other types of devices can also be popular. All statements can be true simultaneously."
  },
  {
    "id": "gen-50-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A project is approved only if it meets all regulatory standards.",
      "If a project meets all regulatory standards, it must pass an environmental review.",
      "Any project that passes an environmental review qualifies for government funding.",
      "All projects that qualify for government funding require public consultation.",
      "Some approved projects did not undergo public consultation."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "If a project is approved (Statement 1), it meets regulatory standards. If it meets regulatory standards (Statement 2), it passes an environmental review. If it passes an environmental review (Statement 3), it qualifies for government funding. If it qualifies for government funding (Statement 4), it requires public consultation. Therefore, any approved project requires public consultation. Statement 5 contradicts this by claiming some approved projects did not undergo public consultation."
  },
  {
    "id": "gen-50-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a region experiences a drought, its agricultural output decreases.",
      "A region's agricultural output decreases only if water restrictions are implemented.",
      "Implementing water restrictions always leads to public dissatisfaction.",
      "No region with public dissatisfaction maintains high tourism levels.",
      "Some regions with high tourism levels are currently experiencing a drought."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "If a region experiences a drought (Statement 1), its agricultural output decreases. If its agricultural output decreases (Statement 2), water restrictions are implemented. If water restrictions are implemented (Statement 3), public dissatisfaction results. If there is public dissatisfaction (Statement 4), the region does not maintain high tourism levels. Therefore, any region experiencing a drought cannot maintain high tourism levels. Statement 5 contradicts this by claiming some regions experiencing a drought do maintain high tourism levels."
  },
  {
    "id": "gen-50-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student invited to the honor society has a GPA above 3.8.",
      "If a student has a GPA above 3.8, they must complete an independent research project.",
      "No student who completes an independent research project has less than 120 credits.",
      "Some students invited to the honor society have less than 120 credits."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a student is invited to the honor society (Statement 1), they have a GPA above 3.8. If they have a GPA above 3.8 (Statement 2), they complete an independent research project. If they complete an independent research project (Statement 3), they do not have less than 120 credits. Therefore, any student invited to the honor society cannot have less than 120 credits. Statement 4 contradicts this by claiming some students invited to the honor society have less than 120 credits."
  },
  {
    "id": "gen-50-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a fledgling, it cannot fly long distances.",
      "Birds that cannot fly long distances are always reliant on their parents.",
      "All birds reliant on their parents do not leave the nest area.",
      "Some fledglings have been observed leaving the nest area."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a bird is a fledgling (Statement 1), it cannot fly long distances. If it cannot fly long distances (Statement 2), it is reliant on its parents. If it is reliant on its parents (Statement 3), it does not leave the nest area. Therefore, any fledgling does not leave the nest area. Statement 4 contradicts this by claiming some fledglings have been observed leaving the nest area."
  },
  {
    "id": "gen-50-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a new product is launched, it undergoes extensive market research.",
      "All products that undergo extensive market research incorporate consumer feedback.",
      "Any product that incorporates consumer feedback receives a positive initial reception.",
      "Some newly launched products did not receive a positive initial reception."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If a new product is launched (Statement 1), it undergoes extensive market research. If it undergoes extensive market research (Statement 2), it incorporates consumer feedback. If it incorporates consumer feedback (Statement 3), it receives a positive initial reception. Therefore, any newly launched product receives a positive initial reception. Statement 4 contradicts this by claiming some newly launched products did not receive a positive initial reception."
  }
];

export default generatedPuzzles;
