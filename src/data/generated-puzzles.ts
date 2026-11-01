// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that migrate fly south for winter.",
      "No bird that flies south for winter is a robin.",
      "Some robins are birds that migrate."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all birds that migrate are not robins. Statement 3 directly contradicts this conclusion by asserting that some robins are birds that migrate."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the choir can read music.",
      "Some people who can read music are not in the choir.",
      "Sarah can read music."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Sarah could be one of the people described in Statement 2, a person who can read music but is not a member of the choir. There is no contradiction among the statements."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful companies invest in research.",
      "Company X does not invest in research.",
      "Company X is a successful company."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that if a company does not invest in research, it is not successful. Given Statement 2 that Company X does not invest in research, it must follow that Company X is not successful. This contradicts Statement 3, which claims Company X is a successful company."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who complete the training receive a bonus.",
      "Some employees who received a bonus did not complete the training.",
      "No employee who failed the final exam received a bonus.",
      "John received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. John could be one of the employees described in Statement 2, having received a bonus without completing the training. Statement 3 doesn't create a conflict as John could have passed the final exam or never taken one."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy playing fetch.",
      "Spot is a dog.",
      "Spot does not enjoy playing fetch."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that Spot enjoys playing fetch. This directly contradicts Statement 3, which asserts that Spot does not enjoy playing fetch."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "Some students who passed algebra did not enroll in advanced calculus.",
      "No student who failed algebra enrolled in advanced calculus.",
      "Emily passed algebra."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 3 is the contrapositive of Statement 1 and therefore provides no new information. Emily could be one of the students from Statement 2, having passed algebra but not enrolling in advanced calculus."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All plants in this garden require daily watering.",
      "If a plant requires daily watering, it cannot tolerate shade.",
      "Plant A is in this garden.",
      "Plant A can tolerate shade."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all plants in this garden cannot tolerate shade. Given Statement 3, Plant A (being in this garden) must not be able to tolerate shade. This contradicts Statement 4, which claims Plant A can tolerate shade."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the advisory board are experienced consultants.",
      "Some experienced consultants are not members of the advisory board.",
      "Maria is an experienced consultant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Maria could be one of the experienced consultants described in Statement 2, who is not a member of the advisory board. There is no contradiction among the statements."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No politician with integrity accepts anonymous donations.",
      "All politicians who prioritize public service have integrity.",
      "Senator Davis prioritizes public service.",
      "Senator Davis accepts anonymous donations."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 1 together imply that all politicians who prioritize public service do not accept anonymous donations. Given Statement 3, Senator Davis (prioritizing public service) must not accept anonymous donations. This contradicts Statement 4, which claims Senator Davis accepts anonymous donations."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the final exam also passed the course.",
      "Some students who passed the course did not pass the final exam.",
      "No student who failed the course received a certificate.",
      "Sarah passed the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Sarah could be a student who passed the course either by passing the final exam (Statement 1) or by other means (Statement 2). Statement 3, about certificates, does not create a contradiction regarding Sarah passing the course."
  },
  {
    "id": "gen-2-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, then it has long, pointed wings.",
      "Every bird with long, pointed wings is a fast flyer.",
      "No fast flyer can perform intricate aerial maneuvers.",
      "Some swifts can perform intricate aerial maneuvers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: If a bird is a swift, it has long, pointed wings; if it has long, pointed wings, it is a fast flyer; if it is a fast flyer, it cannot perform intricate aerial maneuvers. This means that if a bird is a swift, it cannot perform intricate aerial maneuvers. Statement 4 directly contradicts this by asserting that some swifts can perform intricate aerial maneuvers."
  },
  {
    "id": "gen-2-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee receives a bonus, they exceed their sales quota.",
      "All employees who exceed their sales quota are recognized publicly.",
      "Some employees received a bonus.",
      "Not all employees are recognized publicly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that any employee receiving a bonus is recognized publicly. Statement 3 confirms some employees received a bonus, so some employees are recognized publicly. Statement 4 asserts that some employees are not recognized publicly. These can all coexist, as the employees not recognized publicly could be those who did not receive a bonus."
  },
  {
    "id": "gen-2-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates completed the advanced training module.",
      "No one who completed the advanced training module failed the final interview.",
      "If a candidate did not fail the final interview, they are hired.",
      "Some successful candidates were not hired."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: If a candidate is successful, they completed the advanced training module; if they completed the module, they did not fail the final interview; if they did not fail the interview, they are hired. This implies that all successful candidates are hired. Statement 4 directly contradicts this by stating that some successful candidates were not hired."
  },
  {
    "id": "gen-2-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced course, they must pass the prerequisite exam.",
      "All students who pass the prerequisite exam attend the study group.",
      "No student who attends the study group struggles with the material.",
      "Some students struggle with the material.",
      "Mia enrolled in the advanced course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statements 1, 2, and 3 create a chain implying that if a student enrolls in the advanced course, they do not struggle with the material. Since Mia enrolled in the advanced course (Statement 5), Mia does not struggle with the material. Statement 4 only says that 'some students' struggle with the material, which does not mean Mia must be one of them. Other students could struggle without contradicting Mia's situation or any other statement."
  },
  {
    "id": "gen-2-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a device is fully charged, it will not connect to the network.",
      "All devices that are currently connecting to the network are transmitting data.",
      "No device transmitting data has low battery.",
      "Every device that is fully charged has a low battery.",
      "There is at least one device connected to the network."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 (which implies: if a device connects to the network, it is fully charged) and 4 imply that if a device connects to the network, it has a low battery. Statements 2 and 3 imply that if a device connects to the network, it transmits data, and if it transmits data, it does not have a low battery. Thus, if a device connects to the network, it does not have a low battery. These two conclusions (CN -> LB and CN -> not LB) are contradictory. Statement 5 asserts that at least one device is connected to the network, making this contradiction actual rather than hypothetical."
  },
  {
    "id": "gen-2-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a mushroom is edible, it has gills.",
      "All mushrooms with gills are found in damp environments.",
      "No mushroom found in a damp environment is bioluminescent.",
      "Some mushrooms are bioluminescent.",
      "Not all mushrooms are edible."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1, 2, and 3 create a chain: if a mushroom is edible, then it is not bioluminescent. This means any bioluminescent mushrooms (Statement 4) cannot be edible. This is consistent with Statement 5, which asserts that not all mushrooms are edible."
  },
  {
    "id": "gen-2-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All senior managers attended the annual retreat.",
      "If a person attended the annual retreat, they completed the leadership seminar.",
      "No one who completed the leadership seminar skipped the closing ceremony.",
      "Some senior managers skipped the closing ceremony."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a person is a senior manager, then they attended the annual retreat; if they attended the retreat, they completed the leadership seminar; if they completed the seminar, they did not skip the closing ceremony. Therefore, all senior managers did not skip the closing ceremony. Statement 4 directly contradicts this conclusion by asserting that some senior managers skipped the closing ceremony."
  },
  {
    "id": "gen-2-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a vehicle has a valid permit, it cannot enter the restricted zone.",
      "Every vehicle that enters the restricted zone is equipped with a GPS tracker.",
      "No vehicle equipped with a GPS tracker has an expired registration.",
      "Some vehicles have an expired registration.",
      "All vehicles with a valid permit have an expired registration."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 (which means if a vehicle enters the restricted zone, it has a valid permit) and 5 imply that if a vehicle enters the restricted zone, it has an expired registration. Statements 2 and 3 imply that if a vehicle enters the restricted zone, it does not have an expired registration. These two conclusions (RZ -> ER and RZ -> not ER) are contradictory. However, no statement asserts that any vehicle actually enters the restricted zone. If no vehicles enter the restricted zone, then the conditional contradiction never materializes, and all statements can be true. Statement 4, that some vehicles have an expired registration, does not force any vehicle into the restricted zone."
  },
  {
    "id": "gen-2-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students registered for the advanced seminar completed the prerequisite workshop.",
      "If a student completed the prerequisite workshop, they submitted a final report.",
      "No student who submitted a final report missed the final presentation.",
      "Every student who missed the final presentation was placed on academic warning.",
      "Some students registered for the advanced seminar were placed on academic warning."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 establish that if a student is registered for the advanced seminar, they did not miss the final presentation. Statement 4, by contrapositive, indicates that if a student did not miss the final presentation, they were not placed on academic warning. Therefore, if a student is registered for the advanced seminar, they were not placed on academic warning. Statement 5 directly contradicts this by asserting that some students registered for the advanced seminar were placed on academic warning."
  },
  {
    "id": "gen-2-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses leavening agents, it will rise when baked.",
      "Every recipe that rises when baked has a light texture.",
      "No recipe with a light texture is dense.",
      "Some recipes are dense.",
      "All recipes that use leavening agents are sweet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1, 2, and 3 imply that if a recipe uses leavening agents, it is not dense. Statement 4 indicates that some recipes are dense, which simply means these dense recipes do not use leavening agents, which is consistent. Statement 5 provides an additional characteristic for recipes using leavening agents (they are sweet), which does not create a contradiction with any other statement."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are birds.",
      "No birds are mammals.",
      "Some owls are mammals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are birds, and Statement 2 says no birds are mammals. This logically means that no owls can be mammals. Statement 3 claims that some owls are mammals, which directly contradicts this conclusion."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful candidates completed an interview.",
      "Some candidates who completed an interview were not successful.",
      "Every successful candidate had prior experience."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful candidates are a subset of those who completed an interview. Statement 2 allows for other candidates who completed an interview but were not successful. Statement 3 adds another condition to successful candidates without creating a conflict."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant needs direct sunlight, it has large leaves.",
      "This plant does not have large leaves.",
      "Some plants that do not need direct sunlight have large leaves.",
      "This plant needs direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that if a plant needs direct sunlight, it must have large leaves. Statement 2 tells us that this specific plant does not have large leaves. From these two statements, we can conclude that this plant does not need direct sunlight. Statement 4, however, asserts that this plant does need direct sunlight, which is a direct contradiction."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No student who passed the exam failed the course.",
      "Some students who studied diligently failed the course.",
      "All students who passed the exam studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Students who passed the exam did not fail the course and studied diligently. Statement 2 identifies a group of students who studied diligently but still failed the course; these students simply did not pass the exam, which is allowed by the other statements."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with a bonus received a positive performance review.",
      "No employee with a positive performance review received a warning.",
      "Some employees who received a bonus also received a warning."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 tells us that all employees who got a bonus also received a positive performance review. Statement 2 states that no employee with a positive performance review ever received a warning. Combining these, it logically follows that no employee who received a bonus received a warning. Statement 3, however, claims that some employees who received a bonus did receive a warning, which creates a contradiction."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful negotiation involved compromise.",
      "Some difficult discussions do not involve compromise.",
      "Not every difficult discussion is a negotiation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful negotiations require compromise. Statement 2 identifies difficult discussions that do not involve compromise, implying they were not successful negotiations, which is fine. Statement 3 indicates that the categories of 'difficult discussion' and 'negotiation' are not entirely overlapping."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the expedition had proper winter gear.",
      "No one with proper winter gear suffered from frostbite.",
      "Some individuals who did not suffer from frostbite were not members of the expedition.",
      "One member of the expedition suffered from frostbite."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all expedition members had proper winter gear. Statement 2 says no one with proper winter gear suffered from frostbite. This implies that no members of the expedition suffered from frostbite. Statement 4 directly contradicts this conclusion by stating that one member of the expedition did suffer from frostbite."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is migratory, it flies south for winter.",
      "Some birds that fly south for winter are not migratory.",
      "No bird that stays north for winter is migratory."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Migratory birds fly south, but other non-migratory birds can also fly south (Statement 2). Statement 3 simply reinforces that birds that remain north cannot be migratory, which is consistent with migratory birds flying south."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All new interns are assigned a mentor.",
      "Some new interns are not yet familiar with company policy.",
      "No one unfamiliar with company policy can be assigned a mentor."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 2 says some new interns are not familiar with company policy. Statement 3 establishes that no one unfamiliar with company policy can be assigned a mentor. Therefore, it must be true that some new interns cannot be assigned a mentor. This directly contradicts Statement 1, which claims that all new interns are assigned a mentor."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every item on the clearance rack has a red tag.",
      "Some items with a red tag are not on the clearance rack.",
      "No item with a red tag is full price."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. All clearance items have red tags. Statement 2 allows for items with red tags that are not on clearance (perhaps other discounted items). Statement 3 confirms that all items with red tags, whether on clearance or not, are not full price, which is logically sound."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who complete the advanced course are eligible for the scholarship.",
      "No student who missed more than three lectures is eligible for the scholarship.",
      "Every student who passed the final exam completed the advanced course.",
      "Some students who passed the final exam did not miss more than three lectures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 3 establish that students who passed the final exam are eligible for the scholarship. Statement 2 indicates that students who missed more than three lectures are not eligible. Statement 4 describes a group of students who passed the final exam and did not miss more than three lectures; these students would be eligible for the scholarship, which is consistent with all other statements."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All musicians are artists.",
      "No artists are accountants.",
      "Some accountants are composers.",
      "Every composer is a musician."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4 and 1 together establish that every composer is an artist. Statement 2 then states that no artist is an accountant, which means no composer can be an accountant. However, Statement 3 claims that some accountants are composers, directly contradicting the conclusion that no composer is an accountant. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that build nests in trees are excellent flyers.",
      "No excellent flyer has poor eyesight.",
      "Some raptors have poor eyesight.",
      "Every raptor is a bird that builds nests in trees."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4 and 1 establish that all raptors are excellent flyers. Statement 2 then indicates that no excellent flyer has poor eyesight, leading to the conclusion that no raptor has poor eyesight. This directly contradicts Statement 3, which claims that some raptors do have poor eyesight. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a vehicle has an electric engine, it produces zero emissions.",
      "Any vehicle that produces zero emissions is exempt from city tolls.",
      "No vehicle exempt from city tolls is subject to the urban congestion charge.",
      "All buses in the city have electric engines.",
      "Some city buses are subject to the urban congestion charge."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 create a logical chain: All city buses have electric engines, which means they produce zero emissions, are exempt from city tolls, and therefore are not subject to the urban congestion charge. This directly contradicts Statement 5, which claims that some city buses are subject to the urban congestion charge. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds can fly.",
      "Some animals cannot fly.",
      "No animal that cannot fly is a bird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 says all birds can fly. Statement 2 indicates there are some non-flying animals. Statement 3 ensures that any animal that cannot fly is not a bird, which prevents a contradiction with Statement 1. It is possible for some animals to be non-flying and non-birds, while all birds are flying."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the gardening club attend the annual plant sale.",
      "Some people who attend the annual plant sale are not members of the gardening club.",
      "No one who misses the annual plant sale is eligible for the club's seed exchange program.",
      "Alice is a member of the gardening club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 says all club members attend the sale. Statement 2 allows for non-members to also attend. Statement 3 sets a condition for seed exchange eligibility. Alice, being a club member, attends the sale (from Statement 1) but her eligibility for the seed exchange is not determined, nor does it create any contradictions with the other statements."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student passes the final exam, they receive a certificate.",
      "Every student who attended all lectures passed the final exam.",
      "No student who missed more than three lectures passed the final exam.",
      "Some students did not attend all lectures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 links passing the exam to receiving a certificate. Statement 2 states that perfect attendance leads to passing. Statement 3 specifies that missing too many lectures prevents passing the exam. Statement 4 simply indicates that not all students had perfect attendance. It is possible for some students to have missed a few lectures (but not more than three), still passed the exam, and received a certificate, without contradicting any statement."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All licensed engineers have completed advanced mathematics.",
      "No one who has completed advanced mathematics struggles with physics.",
      "Some project managers struggle with physics.",
      "Every project manager is a licensed engineer."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a chain: Every project manager is a licensed engineer, who has completed advanced mathematics, and therefore does not struggle with physics. This means no project manager struggles with physics. Statement 3, however, asserts that some project managers do struggle with physics, creating a direct contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All research proposals submitted before the deadline were approved.",
      "Some research proposals required minor revisions before final approval.",
      "No research proposal that required minor revisions was submitted before the deadline.",
      "Every approved research proposal received funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 states that all proposals submitted on time were approved. Statement 2 acknowledges that some proposals needed revisions. Statement 3 clarifies that proposals needing revisions were not submitted on time, so they fall outside the scope of Statement 1. Statement 4 adds that all approved proposals received funding. It's possible for proposals needing revisions (and thus submitted late) to still be approved later and receive funding, without contradicting the on-time proposals."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare artifacts are protected by national heritage laws.",
      "No artifact protected by national heritage laws can be legally exported.",
      "Some artifacts excavated from the ancient ruins are legally exportable.",
      "Every artifact excavated from the ancient ruins is a rare artifact."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 create a logical chain: Every artifact excavated from the ancient ruins is a rare artifact, which means it is protected by national heritage laws, and therefore cannot be legally exported. This concludes that no artifact from the ancient ruins can be legally exported. Statement 3 directly contradicts this by claiming some artifacts from the ancient ruins are legally exportable. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the advanced exam, they receive a distinction.",
      "Students receive a distinction only if their final project score is perfect.",
      "No student with perfect attendance failed to achieve a perfect final project score.",
      "Every student who attended all lectures also passed the advanced exam.",
      "Some students attended all lectures but did not receive a distinction."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4 and 1 logically combine to mean: 'Every student who attended all lectures receives a distinction.' Statement 5 directly contradicts this by asserting that 'Some students attended all lectures but did not receive a distinction.'"
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe requires saffron, it is considered gourmet.",
      "All gourmet recipes appear in the exclusive cookbook.",
      "No recipe in the exclusive cookbook uses artificial ingredients.",
      "Some recipes that do not require saffron use artificial ingredients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The first three statements establish that any recipe requiring saffron (S) cannot use artificial ingredients (A) (S → Gourmet → Exclusive Cookbook → Not Artificial Ingredients, thus S → Not A). However, this does not preclude the existence of recipes that do NOT require saffron (Not S) but DO use artificial ingredients (A). Statement 4 describes such recipes, which is perfectly consistent with the derived chain."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants possess a unique skill.",
      "No one with a unique skill fails the final interview.",
      "If a candidate fails the final interview, they do not receive a job offer.",
      "Every candidate who receives a job offer was a successful applicant.",
      "Some candidates who received a job offer failed the final interview."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "There are two paths to a contradiction. First, statements 4, 1, and 2 chain to imply: 'Every candidate who receives a job offer did not fail the final interview.' Second, statement 3's contrapositive (If a candidate receives a job offer, then they did not fail the final interview) leads to the same conclusion. Statement 5 directly contradicts this by stating 'Some candidates who received a job offer failed the final interview.'"
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device is connected to the network, it runs the latest security patch.",
      "Only devices with administrator privileges can install security patches.",
      "Some devices on the network do not have administrator privileges.",
      "All devices running the latest security patch have been approved by IT."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 imply that any device connected to the network runs the latest security patch and has been approved by IT. Statement 2 specifies who can *install* patches, not who *has* patches. Statement 3 describes devices that are on the network but lack admin privileges. These devices can still *run* the latest security patch (perhaps installed by IT) and be IT approved, without contradiction."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a scientist uses the telescope, they are authorized.",
      "All authorized personnel have completed safety training.",
      "No one who has completed safety training has bypassed protocol.",
      "Some scientists bypassed protocol to use the telescope."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a scientist uses the telescope, they are authorized (1), and all authorized personnel complete safety training (2), and no one who completes safety training bypasses protocol (3). This means 'If a scientist uses the telescope, they do not bypass protocol.' Statement 4 directly contradicts this by claiming 'Some scientists bypassed protocol to use the telescope.'"
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car with an active warranty is under five years old.",
      "If a car is under five years old, it passed the recent inspection.",
      "No car that failed the recent inspection has an active warranty.",
      "Some cars passed the recent inspection but are not under five years old.",
      "All cars that passed the recent inspection are eligible for a discount."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all cars with an active warranty passed the recent inspection (AW → <5YO → PRI). Statement 3 is simply the contrapositive of this implication (Not PRI → Not AW), so it adds no new constraints and is consistent. Statement 4 suggests cars exist that passed inspection but are not under five years old. This is consistent, as the earlier chain only applies to cars *with* an active warranty, not to all cars that pass inspection. Such a car (old but passed inspection) would simply not have an active warranty, which is permissible. Statement 5 also doesn't create a conflict."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is drought-resistant, it has deep roots.",
      "Plants with deep roots are never shallow-rooted.",
      "Every plant in this garden is drought-resistant.",
      "Some plants in this garden are shallow-rooted.",
      "No plant with deep roots needs daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: Every plant in this garden (PG) is drought-resistant (DR) (3), if a plant is drought-resistant it has deep roots (DRo) (1), and plants with deep roots are never shallow-rooted (SR) (2). This implies that 'Every plant in this garden is not shallow-rooted.' Statement 4 directly contradicts this by claiming 'Some plants in this garden are shallow-rooted.'"
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student submitted their coursework late, their grade was reduced.",
      "No student whose grade was reduced received an academic award.",
      "Students receive an academic award only if they demonstrated exceptional merit.",
      "Some students demonstrated exceptional merit and submitted their coursework late.",
      "All students who demonstrated exceptional merit completed an honors project."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any student who submitted coursework late (SCL) did not receive an academic award (AA) (SCL → GR → Not AA). Statement 4 describes students who demonstrated exceptional merit (EM) AND submitted late (SCL). Such a student, while demonstrating exceptional merit (a prerequisite for awards per Statement 3) would still not receive an academic award due to submitting late (per Statements 1 and 2). Statements 3 and 5 are also fully consistent with this scenario; demonstrating exceptional merit is a necessary condition for an award, not a sufficient one, and does not conflict with a grade reduction or late submission."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Guests are served a main course only if they have a reservation.",
      "No guest with a reservation is seated at the overflow table.",
      "Unless a guest is seated at the overflow table, they receive dessert.",
      "Every guest receives a main course.",
      "Some guests did not receive dessert."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 form a logical chain. Statement 4 says 'Every guest receives a main course (MC).' Statement 1 says 'MC only if reservation (R).' Statement 2 says 'R implies not seated at overflow table (Not OT).' Statement 3 says 'Unless OT, then dessert (D),' which means 'Not OT implies D.' Together, these mean 'Every guest receives dessert.' Statement 5 directly contradicts this by stating 'Some guests did not receive dessert.'"
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members approved the budget.",
      "Only department heads are committee members.",
      "No one who approved the budget voted against the proposal.",
      "Some department heads voted against the proposal.",
      "If a person is a department head, they are eligible for the bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that all committee members approved the budget (AB) and did not vote against the proposal (VAP) (CM → AB → Not VAP). Statement 2 states that only department heads (DH) can be committee members (CM → DH). This means there can be department heads who are *not* committee members. Statement 4 describes some department heads who voted against the proposal. This is consistent, as these department heads are simply *not* committee members, and therefore the chain 'CM → Not VAP' does not apply to them. Statement 5 also presents no contradiction."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club are experienced climbers.",
      "No experienced climber has ever been to the Amazon rainforest.",
      "At least one member of the hiking club has been to the Amazon rainforest."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all hiking club members are experienced climbers. Statement 2 says no experienced climber has been to the Amazon rainforest. This logically implies that no hiking club member has been to the Amazon rainforest, which directly contradicts Statement 3, which claims at least one member has."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No reptiles are capable of sustained flight.",
      "All creatures with iridescent scales are exotic animals.",
      "Some reptiles are exotic animals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements describe different relationships between reptiles, flying creatures, creatures with iridescent scales, and exotic animals. There is no logical chain that creates a contradiction. It is possible for some reptiles to be exotic animals, while having no bearing on whether they can fly, or on creatures with iridescent scales."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a candidate scores highly on the written exam, they will advance to the interview stage.",
      "If a candidate has more than five years of experience, they will not advance to the interview stage.",
      "All candidates who scored highly on the written exam have more than five years of experience."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 3 indicates that all candidates who scored highly on the written exam have more than five years of experience. Statement 2 indicates that candidates with more than five years of experience will not advance to the interview stage. Therefore, it logically follows that candidates who scored highly on the written exam will not advance to the interview stage, which directly contradicts Statement 1."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students enrolled in advanced calculus are engineering majors.",
      "Some students who participate in the robotics club are enrolled in advanced calculus.",
      "Some students who participate in the robotics club are engineering majors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all advanced calculus students are engineering majors. Statement 2 indicates that some robotics club participants are advanced calculus students. From these two, it logically follows that some robotics club participants must be engineering majors, which is what Statement 3 asserts. The statements are consistent."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No employees who received a bonus attended the annual conference.",
      "All senior managers attended the annual conference.",
      "At least one employee who received a bonus is a senior manager."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that no bonus recipients attended the annual conference. Statement 2 states that all senior managers attended the annual conference. These two statements together mean that no bonus recipient can be a senior manager. This directly contradicts Statement 3, which claims that at least one employee who received a bonus is a senior manager."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful artists have a strong portfolio.",
      "Some people with a strong portfolio work in advertising.",
      "No one who works in advertising is a successful artist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Successful artists have strong portfolios. It is possible for some people with strong portfolios to work in advertising, and for none of those advertising professionals to be successful artists. For example, a commercial designer might have a strong portfolio and work in advertising, but not be considered a 'successful artist' in the same category as, say, a painter."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All research scientists are university faculty.",
      "Some members of the grants committee are not university faculty.",
      "All members of the grants committee are academic professionals.",
      "All academic professionals are research scientists."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 4 and 1 together imply that all academic professionals are university faculty (Academic professionals → Research scientists → University faculty). Statement 3 states that all members of the grants committee are academic professionals. Therefore, it logically follows that all members of the grants committee are university faculty. This contradicts Statement 2, which claims some members of the grants committee are not university faculty."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No type of fruit contains gluten.",
      "No food containing gluten is allowed in the cafeteria.",
      "Some types of fruit are allowed in the cafeteria."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says fruit contains no gluten. Statement 2 says gluten-containing food is not allowed. This means food without gluten is potentially allowed. Therefore, it is consistent that some types of fruit (which contain no gluten) are allowed in the cafeteria, as stated in Statement 3."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a novel is a bestseller, then it was widely promoted.",
      "If a novel was widely promoted, then it received critical acclaim.",
      "Some novels that are bestsellers did not receive critical acclaim.",
      "Every bestseller is written by an award-winning author."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: If a novel is a bestseller, then it was widely promoted, and if it was widely promoted, it received critical acclaim. Therefore, it logically follows that all bestsellers received critical acclaim. This contradicts Statement 3, which claims some novels that are bestsellers did not receive critical acclaim."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a dish contains peanuts, it is not suitable for Mark.",
      "If a dish contains tree nuts, it is not suitable for Mark.",
      "Some dishes contain both peanuts and tree nuts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that any dish with peanuts is unsuitable for Mark. Statement 2 implies that any dish with tree nuts is unsuitable for Mark. Statement 3 describes dishes that contain both. For these dishes, both conditions apply, making them unsuitable for Mark. There is no contradiction; the statements reinforce each other for dishes containing both."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the research team regularly publish in peer-reviewed journals.",
      "If a researcher publishes in peer-reviewed journals, they attend the annual conference.",
      "No researcher who attends the annual conference has their travel fully reimbursed.",
      "Some members of the research team had their travel fully reimbursed."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if someone is a member of the research team, they do not have their travel fully reimbursed (Research Team → Publish → Attend Conference → No Travel Reimbursed). Statement 4 directly contradicts this by asserting that some members of the research team *did* have their travel fully reimbursed. Removing Statement 4 resolves this contradiction by removing the specific instances that cause the conflict."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a city's public transit system is efficient, it has high ridership.",
      "Cities with high ridership typically experience reduced traffic congestion.",
      "Any city that experiences reduced traffic congestion attracts new businesses.",
      "Some cities with an efficient public transit system have not attracted new businesses."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if a city's public transit system is efficient, that city attracts new businesses (Efficient Transit → High Ridership → Reduced Congestion → Attracts Businesses). Statement 4 directly contradicts this by asserting that some cities with an efficient public transit system *have not* attracted new businesses. Removing Statement 4 resolves this contradiction by removing the specific instances that cause the conflict."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every product undergoing a full quality inspection is thoroughly tested.",
      "If a product is thoroughly tested, it receives a \"passed\" certification.",
      "Products receiving a \"passed\" certification are always packaged in tamper-proof seals.",
      "No product that is packaged in tamper-proof seals contains a digital warranty.",
      "Some products undergoing a full quality inspection contain a digital warranty."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 together imply that if a product undergoes a full quality inspection, it does not contain a digital warranty (Quality Inspection → Thoroughly Tested → Passed Certification → Tamper-Proof Seals → No Digital Warranty). Statement 5 directly contradicts this by asserting that some products undergoing a full quality inspection *do* contain a digital warranty. Removing Statement 5 resolves this contradiction by removing the specific instances that cause the conflict."
  },
  {
    "id": "gen-7-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research paper published in \"Nature\" undergoes rigorous peer review.",
      "If a paper undergoes rigorous peer review, it receives feedback from at least three experts.",
      "No paper that receives feedback from at least three experts is published without revisions.",
      "Some research papers published in \"Nature\" are published without revisions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if a research paper is published in \"Nature\", it is not published without revisions (Published in Nature → Peer Review → Feedback from Experts → No Publication Without Revisions). Statement 4 directly contradicts this by asserting that some research papers published in \"Nature\" *are* published without revisions. Removing Statement 4 resolves this contradiction by removing the specific instances that cause the conflict."
  },
  {
    "id": "gen-7-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every animal born with specialized camouflage possesses highly developed sensory organs.",
      "If an animal possesses highly developed sensory organs, it has heightened awareness of its surroundings.",
      "Animals with heightened awareness of their surroundings rarely fall prey to larger predators.",
      "No animal that falls prey to larger predators survives to adulthood.",
      "Some animals born with specialized camouflage do not survive to adulthood."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 together imply that if an animal is born with specialized camouflage, it rarely falls prey to larger predators (Camouflage → Sensory Organs → Heightened Awareness → Rarely Falls Prey). Statement 4 implies that if an animal rarely falls prey to larger predators, it survives to adulthood (Rarely Falls Prey → Survives to Adulthood). Combining these, it follows that if an animal is born with specialized camouflage, it survives to adulthood. Statement 5 directly contradicts this by asserting that some animals born with specialized camouflage *do not* survive to adulthood. Removing Statement 5 resolves this contradiction by removing the specific instances that cause the conflict."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students registered for the seminar.",
      "No one registered for the seminar missed the orientation.",
      "At least one student missed the orientation."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all students are registered for the seminar. Statement 2 says no one registered for the seminar missed the orientation. Together, these imply that all students did not miss the orientation. Statement 3 directly contradicts this conclusion by asserting that at least one student did miss the orientation."
  },
  {
    "id": "gen-8-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All cats are mammals.",
      "Some mammals are not cats.",
      "Every animal that purrs is a cat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that cats are a type of mammal. Statement 3 establishes that purring animals are a type of cat. So, any purring animal is also a cat and thus a mammal. Statement 2 asserts that there are mammals that are not cats (e.g., dogs), which is entirely possible and doesn't conflict with the other statements. All statements can be true simultaneously."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, it lays blue eggs.",
      "No bird that lays blue eggs is a migratory bird.",
      "Some robins are migratory birds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all robins lay blue eggs. Statement 2 implies that no bird that lays blue eggs is migratory. Combining these, it logically follows that no robin is a migratory bird. Statement 3, however, asserts that some robins are migratory birds, which creates a direct contradiction."
  },
  {
    "id": "gen-8-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All plants in this garden are roses.",
      "Some plants with thorns are not roses."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that all roses have thorns. Statement 2 means every plant in the garden is a rose, and therefore has thorns. Statement 3 asserts that there are plants that have thorns but are not roses (e.g., blackberry bushes), which is entirely consistent with the first two statements. No conflict arises."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No athlete on the team is under 18 years old.",
      "All athletes who train intensely are under 18 years old.",
      "Some athletes on the team train intensely."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 indicates that there are athletes who are both on the team AND train intensely. Statement 2 states that all athletes who train intensely are under 18 years old. Therefore, some athletes on the team are under 18 years old. This directly contradicts Statement 1, which says no athlete on the team is under 18 years old."
  },
  {
    "id": "gen-8-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members approved the proposal.",
      "No one who approved the proposal voted against the budget.",
      "Some people who voted against the budget were not committee members."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 2 together imply that all committee members did not vote against the budget. Statement 3 asserts that some people who voted against the budget were not committee members. This is entirely consistent; it simply means those who voted against the budget cannot be the committee members mentioned in the first two statements. No contradiction is present."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every doctor in this hospital specializes in cardiology.",
      "No cardiologist in this hospital performs general surgery.",
      "At least one doctor in this hospital performs general surgery."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all doctors in this hospital are cardiologists. Statement 2 states that no cardiologist in this hospital performs general surgery. Combining these, it must be true that no doctor in this hospital performs general surgery. This contradicts Statement 3, which asserts that at least one doctor in this hospital does perform general surgery."
  },
  {
    "id": "gen-8-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who receives a scholarship maintains a high GPA.",
      "All students who maintain a high GPA are eligible for awards.",
      "Some students who are eligible for awards do not receive scholarships."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 2 establish a chain: if a student receives a scholarship, they maintain a high GPA, and therefore they are eligible for awards. This means the set of students with scholarships is a subset of those eligible for awards. Statement 3 then claims that there are students eligible for awards who don't receive scholarships, which is perfectly consistent. Eligibility for an award does not guarantee receiving a scholarship."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who work remotely attend the daily stand-up meeting.",
      "No employee who attends the daily stand-up meeting misses the weekly team sync.",
      "Some remote employees miss the weekly team sync."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all remote employees attend the daily stand-up. Statement 2 says no one who attends the stand-up misses the weekly sync. Therefore, it must be true that no remote employee misses the weekly team sync. This directly contradicts Statement 3, which asserts that some remote employees do miss the weekly team sync."
  },
  {
    "id": "gen-8-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No vehicle in the lot is a motorcycle.",
      "All motorcycles have two wheels.",
      "Some vehicles in the lot have four wheels."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 clarifies that there are no motorcycles in the lot. Statement 2 states that all motorcycles have two wheels. Statement 3 claims some vehicles in the lot have four wheels. These statements are fully consistent. The vehicles in the lot are not motorcycles (by Statement 1), and it's possible for them to have four wheels (e.g., cars or trucks), while motorcycles universally have two wheels (by Statement 2). No contradiction exists."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified physicians are eligible to teach medical residents.",
      "No one who failed the board certification exam is a qualified physician.",
      "All individuals who failed the board certification exam are unable to teach medical residents.",
      "Some individuals eligible to teach medical residents failed the board certification exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that anyone who failed the board certification exam is not eligible to teach medical residents (Failed Board Exam → Not Qualified Physician → Not Eligible To Teach Medical Residents). Statement 3 explicitly states this conclusion. Statement 4, however, claims that some individuals eligible to teach medical residents *did* fail the board certification exam, which directly contradicts the conclusion established by statements 1, 2, and 3. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups develop innovative technology.",
      "Some companies that develop innovative technology are not successful startups.",
      "No company that develops innovative technology has a large market share.",
      "TechCorp is a successful startup."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. TechCorp, as a successful startup, develops innovative technology (from Statement 1) and therefore does not have a large market share (from Statement 3). This is consistent. Statement 2 allows for innovative technology companies that are not successful startups, which poses no conflict."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified lifeguards have current CPR certification.",
      "No one with a recent disciplinary action has current CPR certification.",
      "Every individual with a recent disciplinary action is not a qualified lifeguard.",
      "Some qualified lifeguards have a recent disciplinary action."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that anyone with a recent disciplinary action cannot be a qualified lifeguard (Recent Disciplinary Action → No Current CPR Certification → Not a Qualified Lifeguard). Statement 3 explicitly states this conclusion. Statement 4, however, claims that some qualified lifeguards *do* have a recent disciplinary action, directly contradicting the conclusion from statements 1, 2, and 3. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful public speakers use compelling anecdotes.",
      "No one who lacks a strong stage presence uses compelling anecdotes.",
      "All successful public speakers have a strong stage presence.",
      "Some individuals who lack a strong stage presence are successful public speakers.",
      "All individuals with strong stage presence are charismatic."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all successful public speakers must have a strong stage presence (Successful Public Speaker → Uses Compelling Anecdotes → Has Strong Stage Presence). Statement 3 explicitly states this conclusion. Statement 4, however, claims that some individuals who lack a strong stage presence *are* successful public speakers, which directly contradicts the conclusion from statements 1, 2, and 3. Statement 5 is irrelevant to this contradiction. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful software updates improve user experience.",
      "No update that causes system instability improves user experience.",
      "All updates that cause system instability fail to be successful software updates.",
      "Some successful software updates cause system instability."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that any update causing system instability cannot be a successful software update (Causes System Instability → Does Not Improve User Experience → Not a Successful Software Update). Statement 3 explicitly states this conclusion. Statement 4, however, claims that some successful software updates *do* cause system instability, which directly contradicts the conclusion from statements 1, 2, and 3. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a restaurant has a Michelin star, it offers a tasting menu.",
      "Some restaurants that offer a tasting menu do not have a Michelin star.",
      "Every restaurant with a Michelin star sources ingredients locally.",
      "The Grand Bistro offers a tasting menu and sources ingredients locally."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. The Grand Bistro offers a tasting menu and sources ingredients locally. It could be one of the restaurants that offers a tasting menu but does not have a Michelin star (from Statement 2). If it does not have a Michelin star, then statements 1 and 3 are not contradicted, as they only apply to restaurants *with* Michelin stars."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All advanced drones use proprietary navigation software.",
      "No drone manufactured in the last year uses proprietary navigation software.",
      "Some advanced drones were not manufactured in the last year.",
      "There exist drones that use proprietary navigation software but are not advanced."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statement 1, all advanced drones use proprietary navigation software. From Statement 2, no drone manufactured last year uses proprietary navigation software. This implies that no advanced drone was manufactured last year, making Statement 3 (Some advanced drones were not manufactured in the last year) consistent. Statement 4 allows for non-advanced drones that use proprietary navigation software, which is also consistent."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a research grant is experimental, it requires significant ethical oversight.",
      "No research grant requiring significant ethical oversight is approved without strict peer review.",
      "Some experimental research grants are approved without strict peer review.",
      "All research grants approved without strict peer review are high-risk."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statements 1 and 2 imply that if a research grant is experimental, it is approved with strict peer review (Experimental Grant → Significant Ethical Oversight → Approved with Strict Peer Review). Statement 3 claims that some experimental research grants are approved *without* strict peer review. This implies that the 'some' grants in Statement 3 cannot be experimental, or the premise 'no research grant requiring significant ethical oversight is approved without strict peer review' is false. However, Statement 2 means that 'Not (SEO and ASSPR)'. Let's re-evaluate Statement 2 carefully: 'No research grant requiring significant ethical oversight is approved without strict peer review' means 'If SEO, then ASSPR'. So, (1) REG → SEO, (2) SEO → ASSPR. Thus, REG → ASSPR. Statement 3 'Some REG are ASSPR' is consistent with REG → ASSPR. Statement 4 then implies these grants are also high-risk. Everything is consistent."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All top-tier universities attract international scholars.",
      "Some institutions that attract international scholars are not top-tier universities.",
      "No institution that attracts international scholars receives minimal government funding.",
      "University X is a top-tier university and receives substantial government funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. University X, as a top-tier university (from Statement 4), attracts international scholars (from Statement 1). Since it attracts international scholars, it does not receive minimal government funding (from Statement 3), which is consistent with it receiving substantial government funding (from Statement 4). Statement 2 simply notes that some institutions with international scholars are not top-tier, which doesn't conflict with anything."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the culinary guild participate in the annual food festival.",
      "No one who failed the hygiene inspection is a member of the culinary guild.",
      "All members of the culinary guild failed the hygiene inspection.",
      "Some members of the culinary guild participate in the annual food festival."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 3 establish a contradiction: Statement 1 claims all members of the culinary guild participate in the annual food festival. Statement 3 claims all members of the culinary guild failed the hygiene inspection. Statement 2 states that no one who failed the hygiene inspection is a member of the culinary guild. This means if you are a member of the culinary guild (from statement 3), you failed the hygiene inspection, but if you failed the hygiene inspection (from statement 2), you are not a member of the culinary guild. Thus, being a member of the culinary guild makes one simultaneously a member and not a member of the culinary guild. Statement 2 and 3 directly contradict each other regarding 'members of the culinary guild.' Removing Statement 3 makes the rest consistent."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the final exam, they receive a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the advanced program passed the final exam.",
      "Some students in the advanced program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every student in the advanced program passed the final exam. According to Statement 1, this means every student in the advanced program received a certificate. However, Statement 4 indicates that some students in the advanced program missed more than three classes, and Statement 2 clarifies that no student who missed more than three classes received a certificate. This creates a contradiction: some advanced program students received a certificate while also not receiving one. Removing Statement 4 eliminates the specific group that creates this conflict."
  },
  {
    "id": "gen-10-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a sparrow, it has brown feathers.",
      "All birds with brown feathers eat seeds.",
      "Some birds do not eat seeds.",
      "No bird with red feathers is a sparrow."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 and 2 together imply that all sparrows have brown feathers and eat seeds. Statement 3 (Some birds do not eat seeds) is consistent because there can be other types of birds that are not sparrows and do not eat seeds. Statement 4 provides additional information about birds with red feathers, but it does not create a conflict with sparrows or seed-eating birds. A bird with red feathers could be one of the birds that does not eat seeds, and that would be entirely consistent."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every orange cat in the shelter has green eyes.",
      "If a cat has green eyes, it is a playful animal.",
      "No cat currently housed in the shelter is a playful animal.",
      "At least one cat in the shelter is orange."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that at least one cat in the shelter is orange. According to Statement 1, this orange cat must have green eyes. Following Statement 2, any cat with green eyes is a playful animal, so this orange cat must be playful. This conclusion directly contradicts Statement 3, which states that no cat in the shelter is a playful animal. Removing Statement 4 means there might not be any orange cats, thus preventing the chain of contradiction from starting."
  },
  {
    "id": "gen-10-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All musicians in the orchestra are skilled performers.",
      "Some skilled performers are not musicians.",
      "If someone is a skilled performer, they practice daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes that all musicians are a type of skilled performer. Statement 2 indicates that the category of skilled performers is broader than just musicians, which is entirely possible. Statement 3 applies to all skilled performers, including both the musicians and the skilled performers who are not musicians. There is no contradiction; all three statements can be simultaneously true."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work weekend shifts receive a performance bonus.",
      "An employee receives a performance bonus only if they are a happy team member.",
      "No employee at this company is a happy team member.",
      "Some employees at this company work weekend shifts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates that some employees work weekend shifts. According to Statement 1, these employees must receive a performance bonus. Statement 2 specifies that an employee receives a performance bonus only if they are a happy team member, meaning these employees must be happy team members. This directly contradicts Statement 3, which states that no employee at this company is a happy team member. Removing Statement 4 ensures that no employees initiate the chain leading to a bonus and happiness, thus resolving the conflict."
  },
  {
    "id": "gen-10-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is electric, it produces zero emissions.",
      "Any car that produces zero emissions qualifies for a tax credit.",
      "Maria's car is not electric.",
      "Maria's car qualifies for a tax credit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 together imply that if a car is electric, it qualifies for a tax credit. Statement 3 says Maria's car is not electric. This does not preclude her car from qualifying for a tax credit, as stated in Statement 4. Her car could be a hybrid or a fuel-cell vehicle, for example, which is not electric but still produces zero emissions and therefore qualifies for a tax credit. There is no contradiction."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All devices that are electric operate using batteries.",
      "Any device that uses batteries is considered portable.",
      "No portable device is ever heavy.",
      "Some electric devices are heavy."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims some electric devices are heavy. From Statement 1, all electric devices operate using batteries. From Statement 2, any device that uses batteries is considered portable. Therefore, these 'some electric devices' must be portable. This leads to the conclusion that some portable devices are heavy. However, Statement 3 explicitly states that no portable device is ever heavy. This creates a direct contradiction. Removing Statement 4 eliminates the existence of heavy electric devices, thereby preventing the logical chain from forming a contradiction."
  },
  {
    "id": "gen-10-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the lecture, they take notes.",
      "All students who take notes pass the quiz.",
      "Some students do not pass the quiz.",
      "No student who takes notes misses the lecture."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 and 4 are logically equivalent (attending lecture if and only if taking notes). Statements 1 and 2 together mean that if a student attends the lecture, they take notes and pass the quiz. Statement 3 (Some students do not pass the quiz) implies that there are students who neither attend the lecture nor take notes, which is consistent with the established relationships. There is no contradiction."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who diligently study will pass their final exams.",
      "A student receives a scholarship if they pass their final exams.",
      "If a student receives a scholarship, they attend university.",
      "Some students in this program will not attend university.",
      "Every student in this program diligently studies."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 asserts that every student in the program diligently studies. Following Statement 1, this means every student will pass their final exams. Based on Statement 2, every student who passes receives a scholarship. Finally, Statement 3 states that if a student receives a scholarship, they attend university. Therefore, all students in the program must attend university. This conclusion directly contradicts Statement 4, which claims some students in the program will not attend university. Removing Statement 4 eliminates the group that contradicts the universal attendance."
  },
  {
    "id": "gen-10-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who complete the training program are eligible for promotion.",
      "If an employee is eligible for promotion, they receive a salary increase.",
      "No employee who receives a salary increase complains about their pay.",
      "Some employees who completed the training program did not complain about their pay."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 imply that if an employee completes the training program, they receive a salary increase. Statement 3 then means that if an employee completes the training program, they do not complain about their pay. Statement 4 simply affirms that some employees who completed the training program did not complain about their pay, which is entirely consistent with (and an expected outcome of) the preceding logical chain. There is no contradiction."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All qualified candidates are invited for an interview.",
      "No candidate invited for an interview fails the initial assessment.",
      "Some candidates who failed the initial assessment are qualified."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all qualified candidates do not fail the initial assessment. Specifically, if a candidate is qualified, they are invited for an interview (Statement 1), and if they are invited for an interview, they do not fail the initial assessment (Statement 2). Therefore, all qualified candidates do not fail the initial assessment. Statement 3 directly contradicts this conclusion by asserting that some qualified candidates *did* fail the initial assessment."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own sturdy boots.",
      "Some people who own sturdy boots are not members of the hiking club.",
      "David owns sturdy boots."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 establishes that hiking club members have sturdy boots. Statement 2 confirms that there are non-members who also own sturdy boots. David, owning sturdy boots (Statement 3), could be either a member of the hiking club or one of the non-members described in Statement 2."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who attend the workshop receive a bonus.",
      "No employee who receives a bonus has poor performance reviews.",
      "Some employees who attend the workshop have poor performance reviews."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 2 establish a chain: if an employee attends the workshop, they receive a bonus (Statement 1), and if they receive a bonus, they do not have poor performance reviews (Statement 2). Therefore, all employees who attend the workshop do not have poor performance reviews. Statement 3 directly contradicts this by stating that some employees who attend the workshop *do* have poor performance reviews."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every classic car requires specialized maintenance.",
      "Some cars that require specialized maintenance are not classic cars.",
      "My neighbor's car is a classic car.",
      "My neighbor's car requires specialized maintenance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 states that all classic cars need specialized maintenance. Statement 3 says the neighbor's car is a classic, which logically means it requires specialized maintenance (Statement 4). Statement 2 simply confirms that not all cars requiring specialized maintenance are classic cars, which is entirely compatible with the other statements."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All rare books are valuable.",
      "No valuable item is stored in the public library section.",
      "Some books stored in the public library section are rare."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no rare books are stored in the public library section. Specifically, if a book is rare, it is valuable (Statement 1), and if it is valuable, it is not stored in the public library section (Statement 2). Therefore, all rare books are not stored in the public library section. Statement 3 directly contradicts this conclusion by asserting that some rare books *are* stored in the public library section."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a hummingbird, it feeds on nectar.",
      "All birds that feed on nectar have long beaks.",
      "Some birds with long beaks are not hummingbirds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 establish that hummingbirds feed on nectar and therefore have long beaks. Statement 3 simply states that there are birds with long beaks that are not hummingbirds, which is entirely consistent with the first two statements (e.g., other nectar feeders or other types of birds)."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All research papers submitted before the deadline are reviewed.",
      "No research paper that is reviewed contains serious errors.",
      "Some research papers that were submitted before the deadline contain serious errors."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 2 together imply that all research papers submitted before the deadline do not contain serious errors. Specifically, if a paper is submitted before the deadline, it is reviewed (Statement 1), and if it is reviewed, it does not contain serious errors (Statement 2). Therefore, all papers submitted before the deadline do not contain serious errors. Statement 3 directly contradicts this conclusion by asserting that some research papers submitted before the deadline *do* contain serious errors."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every athlete trains daily.",
      "Anyone who trains daily is highly disciplined.",
      "Not all highly disciplined people are athletes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that every athlete is highly disciplined. Statement 3 asserts that there are highly disciplined people who are not athletes, which is entirely consistent with the conclusion that all athletes are highly disciplined. The set allows for highly disciplined non-athletes to exist."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruits rich in Vitamin C are citrus fruits.",
      "No citrus fruit contains seeds.",
      "Some fruits rich in Vitamin C contain seeds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no fruits rich in Vitamin C contain seeds. Specifically, if a fruit is rich in Vitamin C, it is a citrus fruit (Statement 1), and if it is a citrus fruit, it does not contain seeds (Statement 2). Therefore, all fruits rich in Vitamin C do not contain seeds. Statement 3 directly contradicts this conclusion by asserting that some fruits rich in Vitamin C *do* contain seeds."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, it is widely read.",
      "If a book is widely read, it is available in many formats.",
      "No book that is available in many formats is out of print.",
      "All bestsellers are out of print."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 3 together imply that all bestsellers are not out of print. Specifically, if a book is a bestseller, it is widely read (Statement 1), if it is widely read, it is available in many formats (Statement 2), and if it is available in many formats, it is not out of print (Statement 3). Therefore, all bestsellers are not out of print. Statement 4 directly contradicts this conclusion by asserting that all bestsellers *are* out of print."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is late for class, they miss the first part of the lecture.",
      "No student who misses the first part of the lecture passes the quiz.",
      "All students who attend the review session are late for class.",
      "Every student who attends the review session passes the quiz."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that students attending the review session are late. Statement 1 says if a student is late, they miss the first part of the lecture. Statement 2 states no student who misses the first part of the lecture passes the quiz. This forms a chain: attending review session → late → miss first part of lecture → does not pass the quiz. This directly contradicts Statement 4, which claims every student who attends the review session passes the quiz."
  },
  {
    "id": "gen-12-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a machine is broken, it will display an error code.",
      "Machines that display an error code are always sent for repair.",
      "No machine sent for repair has its warranty honored.",
      "This specific machine is broken, and its warranty was honored."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a machine is broken, it displays an error code. Statement 2 says machines with error codes are sent for repair. Statement 3 establishes that machines sent for repair do not have their warranty honored. This creates a chain: broken machine → displays error code → sent for repair → warranty not honored. Statement 4 asserts that this specific machine is broken and its warranty was honored, which directly contradicts the conclusion of the chain (warranty not honored)."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only experienced hikers join the advanced group.",
      "If a hiker attempts the summit, they must be in the advanced group.",
      "Some hikers who attempt the summit are not experienced."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says if a hiker attempts the summit, they are in the advanced group. Statement 1 implies that if a hiker is in the advanced group, they are experienced. Combining these, it follows that if a hiker attempts the summit, they are experienced. This conclusion directly contradicts Statement 3, which claims some hikers who attempt the summit are not experienced."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have completed their annual training.",
      "If an employee completes their annual training, they are eligible for promotion.",
      "No employee who is eligible for promotion fails their performance review.",
      "Some employees who received a bonus failed their performance review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all employees who receive a bonus completed their annual training. Statement 2 states that completing annual training makes them eligible for promotion. Statement 3 indicates that those eligible for promotion do not fail their performance review. This forms a chain: received bonus → completed annual training → eligible for promotion → did not fail performance review. This conclusion directly contradicts Statement 4, which claims some employees who received a bonus failed their performance review."
  },
  {
    "id": "gen-12-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a new software release is approved, it must pass all security checks.",
      "Any software that passes all security checks will be deployed to production.",
      "No software deployed to production contains known critical vulnerabilities.",
      "The latest software release was approved, but it contains known critical vulnerabilities."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says an approved software release passes all security checks. Statement 2 states software passing security checks is deployed to production. Statement 3 establishes that deployed software does not contain critical vulnerabilities. This creates a chain: approved software release → passes security checks → deployed to production → contains no known critical vulnerabilities. Statement 4 asserts that the latest software release was approved and contains known critical vulnerabilities, directly contradicting the chain's conclusion."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds in this sanctuary migrate south for the winter.",
      "Birds that migrate south for the winter only eat specific types of berries.",
      "This sanctuary contains some birds that do not eat specific types of berries."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all birds in the sanctuary migrate south. Statement 2 indicates that all birds migrating south eat specific types of berries. Combining these, it follows that all birds in this sanctuary eat specific types of berries. This directly contradicts Statement 3, which claims some birds in this sanctuary do not eat specific types of berries."
  },
  {
    "id": "gen-12-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student excels in art, they must have a strong sense of color.",
      "Only students with a strong sense of color are admitted to the advanced painting class.",
      "Some students in the advanced painting class do not excel in art."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A student could have a strong sense of color (required for the advanced class by Statement 2) and be admitted to the advanced painting class, without necessarily excelling in art (Statement 1 only applies if they *do* excel). Therefore, some students in the advanced class could indeed not excel in art, which aligns with Statement 3."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car parked in the lot belongs to an employee.",
      "Only employees with a special permit can park in the lot.",
      "Some employees have a special permit but do not park in the lot."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 establish that cars in the lot belong to employees with special permits. Statement 3 describes a scenario where some employees possess the necessary permit but simply choose not to park in the lot, which does not contradict the rules for those who do park in the lot."
  },
  {
    "id": "gen-12-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a product passes quality control, it receives a green sticker.",
      "No product with a green sticker contains any factory defects.",
      "Every product shipped to customers has passed quality control.",
      "Some products shipped to customers are found to have factory defects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 says all shipped products passed quality control. Statement 1 says if a product passes quality control, it gets a green sticker. Statement 2 says products with green stickers have no factory defects. This forms a chain: shipped product → passed quality control → received green sticker → contains no factory defects. This conclusion directly contradicts Statement 4, which claims some products shipped to customers have factory defects."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All engineers on the team are certified in Project Management.",
      "If a team member is certified in Project Management, they lead at least one project.",
      "Some team members lead at least one project but are not engineers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statements 1 and 2, it follows that all engineers lead at least one project. Statement 3 allows for other team members (non-engineers) to also be certified in Project Management (per Statement 2's condition) and thus lead projects. This creates no contradiction, as the first two statements only define conditions for engineers, not for all project leaders."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are nocturnal birds.",
      "No nocturnal birds hunt during the day.",
      "Some owls hunt during the day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are nocturnal birds. Statement 2 says no nocturnal birds hunt during the day. This implies that all owls do not hunt during the day. Statement 3 directly contradicts this conclusion by asserting that some owls do hunt during the day."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All healthy trees produce oxygen.",
      "Some trees in the park are not healthy.",
      "Every tree that produces oxygen is green."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all healthy trees to produce oxygen and be green. Some trees in the park could be unhealthy and therefore not produce oxygen, or they could still be green. There is no contradiction among these statements."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "No student who passed algebra failed the placement test.",
      "At least one student who enrolled in advanced calculus failed the placement test."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 means that all advanced calculus students passed algebra. Statement 2 means that all students who passed algebra did not fail the placement test. Therefore, all advanced calculus students did not fail the placement test. Statement 3 contradicts this by saying at least one advanced calculus student failed the placement test."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All musicians are creative individuals.",
      "Some creative individuals are not musicians.",
      "No computer programmers are musicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Musicians are a subset of creative individuals, and some creative individuals are not musicians. Computer programmers form a group distinct from musicians. All these statements can be true simultaneously, as programmers could be among the creative individuals who are not musicians, or they could be entirely separate."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All tigers are striped animals.",
      "No domestic cats are striped animals.",
      "Some domestic cats are tigers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims that some domestic cats are tigers. According to Statement 1, all tigers are striped animals. This means some domestic cats must be striped animals. However, Statement 2 clearly states that no domestic cats are striped animals, creating a direct contradiction."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "Some risk-takers are not successful entrepreneurs.",
      "Maria is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Maria can be a successful entrepreneur, and thus a risk-taker, consistent with Statement 1. Statement 2 simply allows for other individuals to be risk-takers without being successful entrepreneurs. All statements can coexist."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the 'Phoenix' species have fiery plumage.",
      "Every creature with fiery plumage possesses regenerative abilities.",
      "Some members of the 'Phoenix' species do not possess regenerative abilities."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, all Phoenix members have fiery plumage. From Statement 2, every creature with fiery plumage possesses regenerative abilities. Combining these, it follows that all Phoenix members possess regenerative abilities. Statement 3 directly contradicts this by stating some Phoenix members do not possess regenerative abilities."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No politicians are entirely honest.",
      "Some entirely honest people are teachers.",
      "Every teacher is a public servant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Politicians and teachers can be distinct groups. Some teachers are honest, and all teachers are public servants, so some public servants are honest. This does not conflict with the idea that no politicians are entirely honest."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an artwork is a sculpture, it is a three-dimensional piece.",
      "Every three-dimensional piece must be displayed on a pedestal.",
      "Some artworks are sculptures, but are not displayed on a pedestal."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all sculptures are three-dimensional pieces. Statement 2 specifies that all three-dimensional pieces are displayed on a pedestal. Therefore, it must be true that all sculptures are displayed on a pedestal. Statement 3 contradicts this by asserting that some sculptures are not displayed on a pedestal."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All cars in the lot are red.",
      "Some red vehicles are trucks.",
      "No trucks are in the lot."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The cars in the lot are all red. It is possible for there to be red vehicles (trucks) outside of the lot. Since no trucks are in the lot, this creates no conflict with cars in the lot being red. All statements can be true simultaneously."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors conduct extensive research.",
      "No one who conducts extensive research writes purely from imagination.",
      "An author creates a best-seller quickly only if they write purely from imagination.",
      "Some successful authors create a best-seller quickly."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that all successful authors do not write purely from imagination. Statement 3's contrapositive is: if an author does not write purely from imagination, then they do not create a best-seller quickly. Combining these, all successful authors do not create best-sellers quickly, which directly contradicts Statement 4."
  },
  {
    "id": "gen-14-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who excels in calculus understands linear algebra.",
      "Some students who understand linear algebra struggle with discrete mathematics.",
      "No student who struggles with discrete mathematics excels in calculus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 together imply that any student who excels in calculus understands linear algebra and does not struggle with discrete mathematics. Statement 2 describes a group of students who understand linear algebra and struggle with discrete mathematics. These students (from Statement 2) simply cannot be among those who excel in calculus, which is entirely consistent with all given statements."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All committee members approved the budget proposal.",
      "No one who approved the budget proposal voted against the amendment.",
      "Every staff liaison voted against the amendment.",
      "Some staff liaisons are committee members."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all committee members did not vote against the amendment. Statement 3 asserts that every staff liaison voted against the amendment. This means no one can be both a committee member and a staff liaison, which directly contradicts Statement 4."
  },
  {
    "id": "gen-14-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "No professional chefs use frozen ingredients.",
      "Some culinary school graduates use frozen ingredients.",
      "Every professional chef is a culinary school graduate.",
      "Some culinary school graduates are not professional chefs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 combined show that professional chefs are culinary school graduates who do not use frozen ingredients. Statement 2 says some culinary school graduates use frozen ingredients; these individuals must be those graduates who are not professional chefs, which is consistent with Statement 4."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All effective managers delegate tasks strategically.",
      "No one who delegates tasks strategically micro-manages their team.",
      "Every manager who avoids micro-managing motivates their team effectively.",
      "No effective manager motivates their team effectively."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a manager is effective, they delegate tasks strategically; if they delegate strategically, they do not micro-manage; if they do not micro-manage, they motivate their team effectively. Thus, all effective managers motivate their team effectively. This directly contradicts Statement 4."
  },
  {
    "id": "gen-14-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every bird in this aviary has vibrant plumage.",
      "Some birds with vibrant plumage cannot fly long distances.",
      "No bird that cannot fly long distances migrates south for winter.",
      "All birds in this aviary migrate south for winter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 3 and 4 imply that all birds in this aviary can fly long distances (because they migrate south for winter). Statement 1 establishes that all aviary birds have vibrant plumage. Statement 2 describes some vibrant-plumage birds that cannot fly long distances; these birds must therefore be outside of this aviary, making all statements consistent."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "No business that prioritizes customer satisfaction cuts operating costs aggressively.",
      "Every business that fails to cut operating costs aggressively struggles financially in the long run.",
      "Some successful businesses do not struggle financially in the long run."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a business is successful, it prioritizes customer satisfaction; if it prioritizes customer satisfaction, it does not cut operating costs aggressively; if it does not cut operating costs aggressively, it struggles financially in the long run. Therefore, all successful businesses struggle financially in the long run. This directly contradicts Statement 4."
  },
  {
    "id": "gen-14-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every athlete who trains intensely avoids processed foods.",
      "Some athletes who avoid processed foods consume energy supplements.",
      "No athlete who trains intensely consumes energy supplements."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 establish that athletes who train intensely avoid processed foods and do not consume energy supplements. Statement 2 refers to athletes who avoid processed foods and consume energy supplements; these athletes cannot be among those who train intensely, which is consistent with the given statements."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All experienced programmers write clear, well-documented code.",
      "No one who writes clear, well-documented code introduces bugs frequently.",
      "A programmer works on critical systems only if they introduce bugs frequently.",
      "Some experienced programmers work on critical systems."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that experienced programmers do not introduce bugs frequently. Statement 3's contrapositive is: if a programmer does not introduce bugs frequently, then they do not work on critical systems. Combining these, experienced programmers do not work on critical systems, which directly contradicts Statement 4."
  },
  {
    "id": "gen-14-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every effective public speaker uses vivid imagery.",
      "Some speakers who use vivid imagery write their speeches verbatim.",
      "No speaker who writes their speeches verbatim improvises well.",
      "Some effective public speakers improvise well."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 indicate that some effective public speakers use vivid imagery and improvise well. Statement 3 shows that speakers who improvise well do not write their speeches verbatim. Therefore, the speakers from Statement 2 who write their speeches verbatim and use vivid imagery must be distinct from the effective public speakers who improvise well, making the set of statements consistent."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work in the marketing department attend the weekly strategy meeting.",
      "If an employee attends the weekly strategy meeting, they must submit a progress report.",
      "No employee who submits a progress report works in the product development team.",
      "Some employees in the marketing department are part of the product development team."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: employees in the marketing department attend the weekly strategy meeting, then submit a progress report, and therefore do not work in the product development team. This implies no marketing department employee is part of the product development team. Statement 4 contradicts this by claiming some marketing department employees *are* part of the product development team. Removing statement 4 resolves this contradiction."
  },
  {
    "id": "gen-15-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes the advanced module, they are eligible for a scholarship.",
      "Only students with a GPA above 3.5 complete the advanced module.",
      "Some students eligible for a scholarship do not have a GPA above 3.5."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "If a student completes the advanced module (Statement 2), they have a GPA above 3.5. Also, if they complete the advanced module (Statement 1), they are eligible for a scholarship. However, Statement 3 indicates that some scholarship-eligible students do not have a GPA above 3.5. These students could be eligible for a scholarship through other means, or they simply haven't completed the advanced module. All statements can be true simultaneously."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant in the marathon race registered before the deadline.",
      "If a participant registered before the deadline, they received a complimentary t-shirt.",
      "No one who received a complimentary t-shirt also ran the full distance.",
      "All participants in the marathon race ran the full distance."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: participants in the marathon race registered before the deadline, then received a complimentary t-shirt, and therefore did not run the full distance. This means no participant in the marathon race ran the full distance. Statement 4 directly contradicts this by stating all participants in the marathon race *did* run the full distance. Removing statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-15-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only vehicles with a valid parking permit can enter the restricted zone.",
      "All government-owned vehicles have a valid parking permit.",
      "Some vehicles that entered the restricted zone are not government-owned."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means that any vehicle entering the restricted zone must have a valid parking permit. Statement 2 confirms that all government-owned vehicles have this permit. Statement 3 says some vehicles that entered the restricted zone are not government-owned. This is consistent, as these non-government vehicles could still possess a valid parking permit and thus legally enter the zone."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant offers outdoor seating, it must also provide umbrellas for shade.",
      "Any restaurant that provides umbrellas for shade is listed in the city's green dining guide.",
      "No restaurant listed in the city's green dining guide has a strict dress code.",
      "There is a restaurant with outdoor seating that has a strict dress code."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: a restaurant with outdoor seating must provide umbrellas, which means it is listed in the green dining guide, and therefore does not have a strict dress code. This implies that no restaurant with outdoor seating has a strict dress code. Statement 4, however, asserts that there *is* a restaurant with outdoor seating that has a strict dress code, which creates a direct contradiction. Removing statement 4 makes the set consistent."
  },
  {
    "id": "gen-15-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All applicants invited for an interview submitted a portfolio.",
      "Some applicants who submitted a portfolio were not invited for an interview.",
      "Maria submitted a portfolio."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that being invited for an interview implies submitting a portfolio. Statement 2 clarifies that the reverse is not always true; some who submit portfolios are not invited for interviews. Maria, having submitted a portfolio (Statement 3), could be among those invited for an interview, or she could be among those who submitted a portfolio but were not invited. All scenarios are consistent."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Students must pass the prerequisite course to enroll in the advanced calculus class.",
      "If a student passed the prerequisite course, they scored above 80% on the final exam.",
      "No student who scored above 80% on the final exam received a grade of C or lower.",
      "Some students enrolled in the advanced calculus class received a grade of C or lower."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: students enrolled in advanced calculus must pass the prerequisite, then score above 80% on the final exam, and therefore did not receive a grade of C or lower. This implies no student enrolled in advanced calculus received a grade of C or lower. Statement 4 contradicts this by stating some students enrolled in advanced calculus *did* receive a grade of C or lower. Removing statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-15-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is a convertible, it has a fabric roof.",
      "No car with a fabric roof is also a sports car.",
      "Some sports cars are not convertibles."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: if a car is a convertible, it has a fabric roof, and therefore it is not a sports car. This means all convertibles are not sports cars. Statement 3 claims that some sports cars are not convertibles, which is entirely consistent with the chain, as it does not force any sports car to be a convertible. All statements can be true simultaneously."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant in the photography workshop owns a digital camera.",
      "No one who owns a digital camera prefers traditional film techniques.",
      "If a participant does not prefer traditional film techniques, they must use editing software.",
      "Some participants in the photography workshop do not use editing software."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: participants in the photography workshop own digital cameras, which means they do not prefer traditional film techniques, and therefore they use editing software. This implies all participants in the photography workshop use editing software. Statement 4 directly contradicts this by asserting that some participants in the photography workshop *do not* use editing software. Removing statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-15-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a package is shipped express, it arrives within two business days.",
      "All packages arriving within two business days are insured.",
      "Some packages that were not shipped express still arrived within two business days."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if a package is shipped express, it arrives within two business days, and therefore it is insured. Statement 3 indicates that some packages not shipped express still arrived within two business days. These packages would also be insured, which is consistent with the rules. The statements can all be true at the same time."
  },
  {
    "id": "gen-16-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who complete the project pass the course.",
      "No one who failed the final exam passed the course.",
      "Some students completed the project but failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all students who complete the project pass the course. Statement 2 indicates that no one who failed the final exam passed the course, which implies that if a student passed the course, they did not fail the final exam. Combining these, if a student completes the project, they must pass the course, and therefore they must not have failed the final exam. Statement 3, however, claims that some students completed the project AND failed the final exam, which directly contradicts this conclusion."
  },
  {
    "id": "gen-16-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All apples in this basket are ripe.",
      "No ripe fruit has worms.",
      "Some apples in this basket have worms."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all apples in the basket are ripe. Statement 2 states that no ripe fruit has worms. From these two statements, it logically follows that no apples in this basket have worms. Statement 3, however, asserts that some apples in this basket do have worms, which creates a direct contradiction with the derived conclusion."
  },
  {
    "id": "gen-16-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that can fly have hollow bones.",
      "Some birds cannot fly.",
      "Every bird in this aviary has hollow bones."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 tells us that flying birds have hollow bones. Statement 2 confirms that some birds do not fly. Statement 3 indicates that all birds within the specific 'aviary' group have hollow bones. This is consistent: the birds in the aviary could include both flying birds (which must have hollow bones per Statement 1) and non-flying birds (which are not restricted by Statement 1 but can still have hollow bones, making the set consistent)."
  },
  {
    "id": "gen-16-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No professional athlete is a beginner.",
      "All beginners train for at least a year.",
      "Some people who train for at least a year are not professional athletes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means that if someone is a professional athlete, they are not a beginner. Statement 2 says that all beginners train for at least a year. Statement 3 claims that some individuals who train for at least a year are not professional athletes. This is entirely consistent: a person could have trained for years, not be a professional athlete, and thus not be a beginner, fitting all conditions without contradiction."
  },
  {
    "id": "gen-16-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, then it was reviewed by critics.",
      "No book reviewed by critics is poorly written.",
      "Some books in this store are bestsellers, and all of them are poorly written."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that if a book is a bestseller, it was reviewed by critics. Statement 2 states that no book reviewed by critics is poorly written. Therefore, it follows that if a book is a bestseller, it cannot be poorly written. Statement 3, however, claims that some books in the store are bestsellers AND that all of these bestsellers are poorly written. This directly contradicts the conclusion that bestsellers cannot be poorly written."
  },
  {
    "id": "gen-16-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend the weekly video meeting.",
      "No employee who attends the weekly video meeting submits a late report.",
      "Some employees submit late reports, and all of them work remotely."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that remote employees attend weekly video meetings. Statement 2 indicates that employees who attend weekly video meetings do not submit late reports. From these, it logically follows that no employee who works remotely submits a late report. Statement 3 claims that some employees submit late reports AND all of these employees work remotely. This directly contradicts the conclusion that remote workers do not submit late reports."
  },
  {
    "id": "gen-16-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a candidate passes the first interview, they are invited for a second.",
      "No candidate who missed the application deadline is invited for a second interview.",
      "Some candidates who passed the first interview also missed the application deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 tells us that passing the first interview leads to a second interview invitation. Statement 2 says that missing the application deadline prevents an invitation for a second interview. Statement 3 claims there are candidates who both passed the first interview AND missed the application deadline. If such a candidate exists, according to Statement 1 they should be invited for a second interview, but according to Statement 2 they should NOT be invited, creating a contradiction."
  },
  {
    "id": "gen-16-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All drivers in the race have completed advanced training.",
      "No driver who completed advanced training has a beginner's license.",
      "Some drivers with a beginner's license are not in the race."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 states that all race drivers have advanced training. Statement 2 indicates that no one with advanced training has a beginner's license. From these, it can be inferred that no driver in the race has a beginner's license. Statement 3, which says some individuals with a beginner's license are not in the race, is perfectly consistent with this inference, as it describes a group of people who are not restricted by the conditions of Statements 1 and 2 regarding race drivers."
  },
  {
    "id": "gen-16-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No chef at this restaurant uses pre-packaged ingredients.",
      "All chefs at this restaurant have at least five years of experience.",
      "Some chefs with at least five years of experience use pre-packaged ingredients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 specifies that chefs at 'this restaurant' do not use pre-packaged ingredients. Statement 2 adds that all chefs at 'this restaurant' have significant experience. Statement 3 refers to 'some chefs with at least five years of experience' (in general) who use pre-packaged ingredients. This is consistent because Statement 3 could refer to experienced chefs at other restaurants or experienced chefs who are not currently working at 'this restaurant', hence not bound by its rules."
  },
  {
    "id": "gen-16-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All participants in the study filled out a consent form.",
      "No one who filled out a consent form was under 18.",
      "Some participants in the study were not under 18."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all study participants filled out a consent form. Statement 2 states that no one who filled out a consent form was under 18. From these, it can be logically concluded that all participants in the study were not under 18. Statement 3, which asserts that some participants in the study were not under 18, is consistent because if 'all' participants fit a condition, then 'some' participants necessarily also fit that condition."
  },
  {
    "id": "gen-17-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the city council attend the weekly public forum.",
      "No one who attends the weekly public forum votes against new zoning proposals.",
      "Every person who supports urban development projects votes against new zoning proposals.",
      "Some members of the city council support urban development projects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "An individual who is a member of the city council (from Statement 4) must attend the public forum (Statement 1). If they attend the public forum, they cannot vote against new zoning proposals (Statement 2). Therefore, this individual does not vote against new zoning proposals. However, the same individual (from Statement 4) supports urban development projects, which means they must vote against new zoning proposals (Statement 3). This creates a direct contradiction: the individual both does and does not vote against new zoning proposals. Removing Statement 4 eliminates the assertion of such an individual's existence, resolving the inconsistency."
  },
  {
    "id": "gen-17-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who successfully completes the capstone project receives a scholarship.",
      "No student who receives a scholarship is required to pay tuition fees.",
      "If a student is required to pay tuition fees, they must have failed a prerequisite course.",
      "Some students who successfully complete the capstone project did not fail any prerequisite courses."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Let's trace the implications. From Statement 1 and Statement 2, any student who successfully completes the capstone project receives a scholarship and is therefore not required to pay tuition fees. Statement 3 implies that if a student did not fail a prerequisite course, then they are not required to pay tuition fees. Statement 4 asserts that some capstone completers did not fail any prerequisite courses. This is consistent: these students complete the capstone (so are not required to pay tuition fees) and also did not fail prerequisites (which also implies they are not required to pay tuition fees). All statements can be true simultaneously."
  },
  {
    "id": "gen-17-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete qualifies for the national tournament, they must pass a fitness test.",
      "No athlete who passes a fitness test has previously been suspended for doping.",
      "Every athlete who competes internationally has previously been suspended for doping.",
      "Some athletes who qualify for the national tournament compete internationally."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "An athlete (from Statement 4) who qualifies for the national tournament must pass a fitness test (Statement 1) and therefore cannot have been suspended for doping (Statement 2). Therefore, this athlete has not been suspended for doping. However, that same athlete (from Statement 4) competes internationally, which means they must have been suspended for doping (Statement 3). This creates a direct contradiction: the athlete has both been suspended and not been suspended for doping. Removing Statement 4 eliminates the assertion of such an athlete's existence, resolving the inconsistency."
  },
  {
    "id": "gen-17-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely are granted flexible hours.",
      "Some employees granted flexible hours do not work remotely.",
      "If an employee works less than 30 hours a week, they are not eligible for health insurance.",
      "No employee granted flexible hours works less than 30 hours a week."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Let's trace the implications. From Statement 1, all remote workers have flexible hours. Statement 2 is consistent, as some employees with flexible hours may not be remote workers. From Statement 4, no employee with flexible hours works less than 30 hours a week. This means employees with flexible hours are not affected by Statement 3's condition for not being eligible for health insurance. An employee with flexible hours (whether remote or not) can consistently exist, not work less than 30 hours, and be eligible for health insurance. All statements can be true simultaneously."
  },
  {
    "id": "gen-17-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project team leader holds a PMP certification.",
      "No one with a PMP certification is assigned to the legacy system upgrade.",
      "All engineers assigned to the legacy system upgrade receive specialized training.",
      "Some project team leaders receive specialized training."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "A project team leader (from Statement 4) must hold a PMP certification (Statement 1) and therefore cannot be assigned to the legacy system upgrade (Statement 2). So, this individual is not assigned to the legacy system upgrade. However, the same individual (from Statement 4) receives specialized training. For an individual to receive specialized training, they must be an engineer assigned to the legacy system upgrade (Statement 3). This creates a direct contradiction: the individual is both assigned and not assigned to the legacy system upgrade. Removing Statement 4 eliminates the assertion of such an individual's existence, resolving the inconsistency."
  },
  {
    "id": "gen-17-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All rare book collectors attend the annual literary auction.",
      "No one who attends the annual literary auction pays retail prices for antique texts.",
      "If someone pays retail prices for antique texts, they are not a member of the Antiquarian Society.",
      "Some rare book collectors are members of the Antiquarian Society."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Let's trace the implications. From Statement 1 and Statement 2, all rare book collectors attend the auction and therefore do not pay retail prices for antique texts. Statement 3 implies that if someone is a member of the Antiquarian Society, they do not pay retail prices for antique texts (the contrapositive). Statement 4 asserts that some rare book collectors are members of the Antiquarian Society. This is consistent: if a rare book collector is a member of the Antiquarian Society, they would both not pay retail prices (from 1 & 2) and also not pay retail prices (from 3). All statements can be true simultaneously."
  },
  {
    "id": "gen-17-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every candidate with prior political experience is endorsed by the PAC.",
      "No candidate endorsed by the PAC participates in independent grassroots campaigns.",
      "If a candidate wins the primary election, they always participate in independent grassroots campaigns.",
      "Some candidates with prior political experience win the primary election."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "A candidate (from Statement 4) with prior political experience must be endorsed by the PAC (Statement 1) and therefore cannot participate in independent grassroots campaigns (Statement 2). So, this candidate does not participate in independent grassroots campaigns. However, the same candidate (from Statement 4) wins the primary election, which means they must always participate in independent grassroots campaigns (Statement 3). This creates a direct contradiction: the candidate both does and does not participate in independent grassroots campaigns. Removing Statement 4 eliminates the assertion of such a candidate's existence, resolving the inconsistency."
  },
  {
    "id": "gen-17-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All vehicles equipped with advanced navigation systems have automatic braking features.",
      "No vehicle with automatic braking features is prone to software glitches.",
      "Every vehicle prone to software glitches requires frequent manual updates.",
      "Some vehicles equipped with advanced navigation systems do not require frequent manual updates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Let's trace the implications. From Statement 1 and Statement 2, all vehicles equipped with advanced navigation systems have automatic braking features and are therefore not prone to software glitches. Statement 3 implies that if a vehicle is not prone to software glitches, it does not require frequent manual updates (the contrapositive). Combining these, all vehicles equipped with advanced navigation systems do not require frequent manual updates. Statement 4 asserts that some vehicles equipped with advanced navigation systems do not require frequent manual updates. This is perfectly consistent with the 'all' implication. All statements can be true simultaneously."
  },
  {
    "id": "gen-17-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a researcher proposes a novel experiment, they must obtain ethical approval.",
      "No researcher who obtains ethical approval works with potentially hazardous biological agents.",
      "Every researcher funded by the bio-safety institute works with potentially hazardous biological agents.",
      "Some researchers who propose a novel experiment are funded by the bio-safety institute."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "A researcher (from Statement 4) who proposes a novel experiment must obtain ethical approval (Statement 1) and therefore cannot work with potentially hazardous biological agents (Statement 2). So, this researcher does not work with potentially hazardous biological agents. However, the same researcher (from Statement 4) is funded by the bio-safety institute, which means they must work with potentially hazardous biological agents (Statement 3). This creates a direct contradiction: the researcher both does and does not work with potentially hazardous biological agents. Removing Statement 4 eliminates the assertion of such a researcher's existence, resolving the inconsistency."
  },
  {
    "id": "gen-17-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All advanced mathematics students attend the weekly colloquium.",
      "Some students who attend the weekly colloquium are not advanced mathematics students.",
      "If a student is enrolled in a doctoral program, they attend the weekly colloquium.",
      "No student who attends the weekly colloquium struggles with abstract concepts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Let's trace the implications. Statement 1 states all advanced mathematics students attend the colloquium. Statement 2 allows for other types of students to also attend the colloquium, which is consistent. Statement 3 states that doctoral students attend the colloquium. Statement 4 implies that anyone attending the colloquium (including advanced math students and doctoral students) does not struggle with abstract concepts. All these conditions can coexist without contradiction. For example, a student could be an advanced mathematics student, attend the colloquium, and not struggle with abstract concepts. Another student could be a doctoral student, attend the colloquium, and not struggle with abstract concepts, without being an advanced mathematics student. All statements can be true simultaneously."
  },
  {
    "id": "gen-18-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the exam attended the review session.",
      "No student who attended the review session failed the course.",
      "Some students who passed the exam failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all students who passed the exam attended the review session. Statement 2 states that no student who attended the review session failed the course. Together, these imply that all students who passed the exam did not fail the course. This directly contradicts Statement 3, which claims some students who passed the exam failed the course."
  },
  {
    "id": "gen-18-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds that migrate fly south for the winter.",
      "All birds that fly south for the winter are waterfowl.",
      "Some waterfowl do not migrate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that any bird that migrates does not fly south. Statement 2 indicates that all birds that fly south are waterfowl. Taken together, any bird that flies south for the winter is a waterfowl and does not migrate. Therefore, it is possible for some waterfowl not to migrate, which is consistent with Statement 3."
  },
  {
    "id": "gen-18-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur possesses strong leadership skills.",
      "No one who possesses strong leadership skills lacks determination.",
      "Some successful entrepreneurs lack determination."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every successful entrepreneur has strong leadership skills. Statement 2 states that everyone with strong leadership skills also has determination. Combining these, it follows that every successful entrepreneur possesses determination. This directly contradicts Statement 3, which asserts that some successful entrepreneurs lack determination."
  },
  {
    "id": "gen-18-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All premium coffee beans are ethically sourced.",
      "No ethically sourced coffee beans are grown with pesticides.",
      "Some coffee beans grown with pesticides are not premium coffee beans."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that if beans are premium, they are ethically sourced. Statement 2 implies that if beans are ethically sourced, they are not grown with pesticides. Thus, premium coffee beans are not grown with pesticides. This means any coffee bean grown with pesticides cannot be a premium coffee bean, which is consistent with Statement 3."
  },
  {
    "id": "gen-18-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees in the marketing department attended the training seminar.",
      "No one who attended the training seminar was absent from the quarterly review.",
      "Some employees in the marketing department were absent from the quarterly review."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all marketing department employees attended the training seminar. Statement 2 establishes that no one who attended the training seminar was absent from the quarterly review. This means all marketing department employees were present at the quarterly review. This directly contradicts Statement 3, which asserts that some marketing department employees were absent from the quarterly review."
  },
  {
    "id": "gen-18-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant requires full sun, it cannot thrive in shade.",
      "All plants that thrive in shade are drought-resistant.",
      "Some drought-resistant plants require full sun."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means plants requiring full sun do not thrive in shade. Statement 2 means plants thriving in shade are drought-resistant. These statements do not prevent the existence of drought-resistant plants that also require full sun. Such plants would simply not thrive in shade, which is consistent with all given information."
  },
  {
    "id": "gen-18-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful politician is an effective public speaker.",
      "No one who is an effective public speaker avoids media interviews.",
      "Some successful politicians avoid media interviews."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all successful politicians are effective public speakers. Statement 2 states that effective public speakers do not avoid media interviews. Combining these, it follows that all successful politicians do not avoid media interviews. This directly contradicts Statement 3, which claims some successful politicians avoid media interviews."
  },
  {
    "id": "gen-18-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All software engineers are proficient in at least one programming language.",
      "Some computer science graduates are not software engineers.",
      "Every person proficient in a programming language is a problem-solver."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all software engineers are proficient in a programming language. Statement 3 states that all who are proficient in a programming language are problem-solvers. This implies all software engineers are problem-solvers. Statement 2 allows for computer science graduates who are not software engineers, and these individuals are not subject to the combined implications of Statements 1 and 3. All statements can simultaneously be true."
  },
  {
    "id": "gen-18-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents who live in the old district pay higher property taxes.",
      "No one who pays higher property taxes qualifies for the low-income rebate.",
      "Some residents who live in the old district qualify for the low-income rebate."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all residents in the old district pay higher property taxes. Statement 2 states that no one who pays higher property taxes qualifies for the low-income rebate. Taken together, these imply that all residents who live in the old district do not qualify for the low-income rebate. This directly contradicts Statement 3, which claims some residents who live in the old district qualify for the low-income rebate."
  },
  {
    "id": "gen-18-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All concertgoers must have a ticket.",
      "Every person with a ticket has a seat reservation.",
      "No one with a seat reservation may enter the backstage area.",
      "Some concertgoers may enter the backstage area."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 states that all concertgoers must have a ticket. Statement 2 says that everyone with a ticket has a seat reservation. Statement 3 establishes that no one with a seat reservation may enter the backstage area. Combining these, it follows that all concertgoers may not enter the backstage area. This directly contradicts Statement 4, which claims some concertgoers may enter the backstage area."
  },
  {
    "id": "gen-19-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful researcher publishes in top-tier journals.",
      "No one who publishes in top-tier journals attends industry-sponsored conferences.",
      "Some faculty members attend industry-sponsored conferences.",
      "All faculty members are successful researchers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4 (All faculty members are successful researchers) and 1 (Every successful researcher publishes in top-tier journals) imply that all faculty members publish in top-tier journals. Statement 2 (No one who publishes in top-tier journals attends industry-sponsored conferences) then implies that no faculty member attends industry-sponsored conferences. This contradicts Statement 3, which states that some faculty members do attend industry-sponsored conferences. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-19-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All premium customers receive priority support.",
      "No customer with outstanding bills receives priority support.",
      "Some customers have outstanding bills.",
      "All premium customers pay their bills on time."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 (All premium customers receive priority support) and the contrapositive of Statement 2 (If a customer receives priority support, they do not have outstanding bills), it follows that all premium customers do not have outstanding bills. Statement 4 (All premium customers pay their bills on time) reinforces this, meaning premium customers do not have outstanding bills. Statement 3 (Some customers have outstanding bills) is also consistent, as these customers could simply be non-premium customers."
  },
  {
    "id": "gen-19-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Students pass the course unless they fail the final exam.",
      "Every student who fails the final exam also failed the midterm.",
      "No student who passed the midterm fails the course.",
      "Some students passed the midterm but failed the final exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (Students pass the course unless they fail the final exam) means that if a student does not fail the final exam, then they pass the course. It does not mean that failing the final exam prevents passing the course. From Statement 4, assume a student exists who passed the midterm and failed the final exam. From Statement 3 (No student who passed the midterm fails the course), this student must pass the course. This is consistent with the interpretation of Statement 1, as Statement 1 does not forbid a student who failed the final exam from still passing the course. Statement 2 is also consistent with this scenario."
  },
  {
    "id": "gen-19-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed an advanced degree.",
      "No one who completed an advanced degree was rejected from the program.",
      "Anyone lacking critical experience was rejected from the program.",
      "Some successful candidates lacked critical experience."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (All successful candidates completed an advanced degree) and Statement 2 (No one who completed an advanced degree was rejected from the program) together imply that no successful candidate was rejected from the program. The contrapositive of Statement 3 (Anyone lacking critical experience was rejected) is that anyone not rejected did not lack critical experience. Therefore, no successful candidate lacked critical experience. This directly contradicts Statement 4, which claims that some successful candidates did lack critical experience. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-19-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No one who plays video games is a skilled strategist.",
      "Some people who play video games are not members of the chess club.",
      "Every student who enjoys puzzles is a skilled strategist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (All members of the chess club are skilled strategists) and Statement 2 (No one who plays video games is a skilled strategist) together imply that no members of the chess club play video games (CC -> SS -> ~PVG). Statement 3 (Some people who play video games are not members of the chess club) is consistent with this, as it is possible for all people who play video games to not be chess club members. Statement 4 (Every student who enjoys puzzles is a skilled strategist) is also consistent, as such students would then not play video games (due to Statement 2) and may or may not be chess club members."
  },
  {
    "id": "gen-19-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All interns attend the weekly training sessions.",
      "No employee who attends the weekly training sessions works on weekend projects.",
      "Some employees work on weekend projects.",
      "All employees who work on weekend projects are interns."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4 (All employees who work on weekend projects are interns), 1 (All interns attend the weekly training sessions), and 2 (No employee who attends the weekly training sessions works on weekend projects) form a chain: if an employee works on weekend projects, then they are an intern, then they attend weekly training sessions, and therefore they do not work on weekend projects. This implies that no employee works on weekend projects. This directly contradicts Statement 3, which asserts that some employees do work on weekend projects. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-19-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All applicants with a strong resume receive an interview.",
      "No applicant who receives an interview is rejected outright.",
      "Some applicants are rejected outright.",
      "Every applicant who receives an offer had a strong resume.",
      "Only applicants who receive an interview receive an offer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 (All applicants with a strong resume receive an interview) and Statement 2 (No applicant who receives an interview is rejected outright), it follows that all applicants with a strong resume are not rejected outright. Statement 4 (Every applicant who receives an offer had a strong resume) and Statement 5 (Only applicants who receive an interview receive an offer) are consistent with this. Statement 3 (Some applicants are rejected outright) refers to applicants who simply do not fall into the 'strong resume' or 'offer' categories, which is entirely possible."
  },
  {
    "id": "gen-19-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All registered voters cast a ballot in the last election.",
      "No one who cast a ballot in the last election endorsed the third-party candidate.",
      "Not all registered voters endorsed the third-party candidate.",
      "Every voter who endorsed the third-party candidate is a registered voter.",
      "Some voters endorsed the third-party candidate."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 (All registered voters cast a ballot in the last election) and 2 (No one who cast a ballot in the last election endorsed the third-party candidate) together imply that no registered voter endorsed the third-party candidate (RV -> CB -> ~TPC). Statement 4 (Every voter who endorsed the third-party candidate is a registered voter) means that if anyone endorsed the third-party candidate, they must be a registered voter. Therefore, if any voter endorsed the third-party candidate, they must also not have endorsed them, which is a contradiction. Statement 5 explicitly states that some voters endorsed the third-party candidate, creating this contradiction. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-19-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Some scientists who work in genetics do not work in proteomics.",
      "All scientists who work in genetics collaborate with computational biologists.",
      "No scientist who collaborates with computational biologists works in proteomics.",
      "Every scientist who works in proteomics is a senior researcher."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 2 (All scientists who work in genetics collaborate with computational biologists) and Statement 3 (No scientist who collaborates with computational biologists works in proteomics), it follows that no scientist who works in genetics works in proteomics. Statement 1 (Some scientists who work in genetics do not work in proteomics) is consistent with this, as 'all' implies 'some' (if all do not, then some do not). Statement 4 (Every scientist who works in proteomics is a senior researcher) adds information about senior researchers but does not create a contradiction with the other statements."
  },
  {
    "id": "gen-19-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a tree is an oak, then it produces acorns.",
      "A tree produces acorns only if it is a deciduous tree.",
      "All deciduous trees shed their leaves in autumn.",
      "Some oak trees do not shed their leaves in autumn."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (If a tree is an oak, then it produces acorns), Statement 2 (A tree produces acorns only if it is a deciduous tree), and Statement 3 (All deciduous trees shed their leaves in autumn) form a logical chain: If a tree is an oak, then it produces acorns; if it produces acorns, then it is deciduous; if it is deciduous, then it sheds its leaves in autumn. Therefore, all oak trees shed their leaves in autumn. This directly contradicts Statement 4, which claims that some oak trees do not shed their leaves in autumn. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-20-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants submitted their portfolio on time.",
      "No applicant who submitted their portfolio on time received a penalty.",
      "If an applicant did not submit their portfolio on time, they did not receive a penalty.",
      "Some applicants received a penalty."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 implies that if an applicant received a penalty, they did NOT submit their portfolio on time. Statement 3 implies that if an applicant received a penalty, they DID submit their portfolio on time. These two implications create a contradiction: no applicant can both submit and not submit their portfolio on time. Therefore, it is impossible for any applicant to receive a penalty. Statement 4 directly contradicts this impossibility by asserting that some applicants received a penalty. Removing Statement 4 resolves the inconsistency. Statement 1 is not directly involved in this contradiction."
  },
  {
    "id": "gen-20-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered voters are eligible to serve on a jury.",
      "No one eligible to serve on a jury is currently serving in public office.",
      "If a person is currently serving in public office, they cannot register to vote.",
      "Some registered voters are currently serving in public office."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a person is a registered voter, they are eligible for jury duty. From Statement 2, if a person is eligible for jury duty, they are not serving in public office. Combining these, if a person is a registered voter, they are not serving in public office. Statement 4 directly contradicts this by stating that some registered voters ARE serving in public office. Furthermore, Statement 3 asserts that anyone serving in public office cannot be a registered voter, which directly conflicts with Statement 4. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-20-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every active member votes in the annual election.",
      "No one who votes in the annual election has overdue fees.",
      "If a member has overdue fees, they are suspended.",
      "Some active members are suspended and have overdue fees."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a member is active, they vote. From Statement 2, if a member votes, they do not have overdue fees. Therefore, if a member is active, they do not have overdue fees. Statement 4 claims that some active members HAVE overdue fees, which directly contradicts this logical conclusion. Statement 3 is consistent with the other statements, as the active members who do not have overdue fees would not be suspended due to overdue fees. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-20-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered attendees receive a conference badge.",
      "No one with a conference badge will be denied access to the main hall.",
      "If someone is denied access to the main hall, they must not be a registered attendee.",
      "Some individuals are registered attendees but were denied access to the main hall."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if an individual is a registered attendee, they receive a badge. From Statement 2, if an individual has a badge, they will not be denied access to the main hall. Combining these, if an individual is a registered attendee, they will not be denied access to the main hall. Statement 3 reinforces this by stating that if someone is denied access, they cannot be a registered attendee. Statement 4 directly contradicts this by asserting that some registered attendees WERE denied access to the main hall. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-20-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an appliance is a refrigerator, it requires a constant power supply.",
      "No appliance requiring a constant power supply is energy-efficient.",
      "All energy-efficient appliances are refrigerators.",
      "Some refrigerators are energy-efficient."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if an appliance is a refrigerator, it requires a constant power supply. From Statement 2, if an appliance requires a constant power supply, it is not energy-efficient. Therefore, if an appliance is a refrigerator, it is not energy-efficient. Statement 4 directly contradicts this by asserting that some refrigerators ARE energy-efficient. Statement 3 is consistent with the implications, as it means any energy-efficient appliance must be a refrigerator, which then (by the derived chain) cannot be energy-efficient, suggesting no energy-efficient appliances can exist. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-21-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the final exam received a scholarship.",
      "No student who missed more than five classes received a scholarship.",
      "Some students who passed the final exam also missed more than five classes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that passing the final exam leads to receiving a scholarship. Statement 2 states that missing more than five classes means no scholarship is received. Statement 3 describes students who both passed the final exam and missed more than five classes, meaning they would simultaneously receive a scholarship (from Statement 1) and not receive one (from Statement 2), which is a contradiction. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-21-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a robin, then it lays blue eggs.",
      "No bird that lives in Antarctica lays blue eggs.",
      "Some robins do not live in Antarctica."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that all robins lay blue eggs. Statement 2 implies that any bird laying blue eggs does not live in Antarctica. Combining these, it follows that all robins do not live in Antarctica. Statement 3, 'Some robins do not live in Antarctica,' is entirely consistent with all robins not living in Antarctica, as 'some' does not contradict 'all' in this context."
  },
  {
    "id": "gen-21-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus attended the annual conference.",
      "No employee who attended the annual conference was eligible for promotion.",
      "Some employees who received a bonus were eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that receiving a bonus implies attending the annual conference. Statement 2 states that attending the conference implies not being eligible for promotion. Therefore, it logically follows that all employees who received a bonus were not eligible for promotion. Statement 3 directly contradicts this conclusion by claiming that some employees who received a bonus *were* eligible for promotion. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-21-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car in the showroom has air conditioning.",
      "Some cars with air conditioning are electric vehicles.",
      "No electric vehicle is currently being test-driven."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All cars in the showroom have air conditioning (Statement 1). Some cars with air conditioning are electric vehicles (Statement 2); these could be among the showroom cars or not. No electric vehicle is currently being test-driven (Statement 3). It is possible for all these conditions to exist simultaneously; for example, some showroom cars could be electric vehicles with AC, and they are simply not test-driven."
  },
  {
    "id": "gen-21-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses cilantro, it must use lime juice.",
      "All recipes that use lime juice are considered Mexican cuisine.",
      "No recipe that uses cilantro is considered Mexican cuisine."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that using cilantro implies using lime juice. Statement 2 indicates that using lime juice implies the recipe is Mexican cuisine. Combining these, it must be true that any recipe using cilantro is considered Mexican cuisine. Statement 3 directly contradicts this derived truth by stating that no recipe using cilantro is considered Mexican cuisine. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-21-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every musician in the orchestra plays an instrument with strings.",
      "Some instruments with strings are not woodwinds.",
      "No woodwind instrument is a percussion instrument."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All orchestra musicians play string instruments (Statement 1). There exist some string instruments that are not woodwinds (Statement 2), such as violins. No woodwind instrument is also a percussion instrument (Statement 3). All these statements can be true at the same time; the string instruments played by the musicians could be among those that are not woodwinds, and woodwinds and percussion instruments exist as distinct categories."
  },
  {
    "id": "gen-21-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student enrolled in the advanced course achieved a grade of A.",
      "No student who achieved a grade of A failed the prerequisite course.",
      "Some students enrolled in the advanced course also failed the prerequisite course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all students in the advanced course achieved an A grade. Statement 2 states that any student with an A grade did not fail the prerequisite. Therefore, it logically follows that no student in the advanced course failed the prerequisite course. Statement 3 directly contradicts this conclusion by asserting that some students enrolled in the advanced course *did* fail the prerequisite. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-21-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a fantasy novel, then it has a map.",
      "All books with a map are bestsellers.",
      "Some bestsellers are not fantasy novels."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all fantasy novels have maps. Statement 2 implies that all books with maps are bestsellers. Therefore, it follows that all fantasy novels are bestsellers. Statement 3, 'Some bestsellers are not fantasy novels,' is perfectly consistent with this; the category of bestsellers can include fantasy novels (as a subset) and also other types of books that are not fantasy novels."
  },
  {
    "id": "gen-21-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All puppies in this litter have blue eyes.",
      "No animal with blue eyes is afraid of water.",
      "Some puppies in this litter are afraid of water."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all puppies in the litter have blue eyes. Statement 2 claims that no animal with blue eyes is afraid of water. Combining these, it logically follows that all puppies in this litter are not afraid of water. Statement 3 directly contradicts this conclusion by stating that some puppies in this litter *are* afraid of water. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-21-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every participant in the workshop received a certificate of completion.",
      "Some people who received a certificate of completion did not submit feedback.",
      "No participant in the workshop submitted feedback."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All participants received certificates (Statement 1). No participant submitted feedback (Statement 3). Statement 2 states that some people who received a certificate did not submit feedback. This is entirely consistent, as the participants themselves (who received certificates and submitted no feedback) serve as examples of 'people who received a certificate of completion did not submit feedback'. All three statements can be true simultaneously."
  },
  {
    "id": "gen-22-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a machine completes its diagnostic, all its systems are functioning optimally.",
      "No machine with optimal systems emits error codes.",
      "Every machine undergoing maintenance must complete its diagnostic.",
      "Some machines undergoing maintenance are currently emitting error codes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every machine undergoing maintenance completes its diagnostic. Statement 1 states that if a machine completes its diagnostic, its systems are optimal. Statement 2 says that no machine with optimal systems emits error codes. Therefore, any machine undergoing maintenance should not emit error codes. This directly contradicts Statement 4, which claims some machines undergoing maintenance are emitting error codes."
  },
  {
    "id": "gen-22-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student submits their essay late, they receive a grade penalty.",
      "No student who attends all seminars receives a grade penalty.",
      "All students who receive an extension submit their essay late.",
      "Some students received an extension and attended all seminars."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "According to Statement 3, students who receive an extension submit their essay late. Statement 1 says submitting late incurs a grade penalty. Statement 2 implies that if a student receives a grade penalty, they did not attend all seminars. Therefore, any student who receives an extension must not have attended all seminars. This directly contradicts Statement 4, which asserts that some students received an extension and attended all seminars."
  },
  {
    "id": "gen-22-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend the daily stand-up meeting.",
      "If an employee attends the daily stand-up meeting, they update their task board by noon.",
      "Some employees update their task board by noon but do not work remotely.",
      "No employee who does not work remotely has access to the central server."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If an employee works remotely (Statement 1), they attend the stand-up, and (Statement 2) update their task board. Statement 3 describes employees who update their task board but are not remote, which does not contradict the previous chain. Statement 4 applies to non-remote employees, which can include those in Statement 3, without creating an inconsistency."
  },
  {
    "id": "gen-22-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project with a critical deadline requires overnight development work.",
      "If a project requires overnight development work, its budget is automatically increased.",
      "No project with an automatically increased budget is approved without review.",
      "All projects without a critical deadline are approved without review.",
      "Some projects are without a critical deadline but require overnight development work."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "From Statement 5, consider a project that is without a critical deadline but requires overnight development work. Since it is without a critical deadline, Statement 4 implies it is approved without review. However, since it requires overnight development work, Statement 2 implies its budget is increased. Statement 3 states that no project with an increased budget is approved without review. This means the project is approved without review AND not approved without review, which is a contradiction."
  },
  {
    "id": "gen-22-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a primate, it can solve complex puzzles.",
      "No animal that can solve complex puzzles relies solely on instinct.",
      "All animals that rely solely on instinct live in the wild.",
      "Some animals live in the wild but are not primates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If an animal is a primate (Statement 1), it solves puzzles, and (Statement 2) does not rely solely on instinct. Statement 3 says animals relying solely on instinct live in the wild. Statement 4 describes animals that live in the wild but are not primates; these animals could either rely solely on instinct (and thus live in the wild, consistent with Statement 3) or not, without causing any contradiction."
  },
  {
    "id": "gen-22-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All cities with modern infrastructure have reliable public transport.",
      "If a city has reliable public transport, its air quality index is low.",
      "No city with a low air quality index experiences frequent traffic jams.",
      "Every city without modern infrastructure experiences frequent traffic jams.",
      "Some cities without modern infrastructure have reliable public transport."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Consider a city from Statement 5: it has no modern infrastructure but has reliable public transport. Because it has no modern infrastructure, Statement 4 implies it experiences frequent traffic jams. However, because it has reliable public transport, Statement 2 implies its air quality index is low. Statement 3 states that no city with a low air quality index experiences frequent traffic jams. This leads to a contradiction where the city both experiences frequent traffic jams and does not."
  },
  {
    "id": "gen-22-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant offers outdoor seating, it has a separate smoking area.",
      "All restaurants with a separate smoking area use recyclable containers.",
      "No restaurant that uses recyclable containers charges a service fee.",
      "Some restaurants that do not charge a service fee offer outdoor seating."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If a restaurant offers outdoor seating (Statement 1), it has a separate smoking area. (Statement 2) It uses recyclable containers, and (Statement 3) does not charge a service fee. Therefore, any restaurant with outdoor seating does not charge a service fee. Statement 4 simply confirms that such restaurants exist, which is perfectly consistent with the derived implications."
  },
  {
    "id": "gen-22-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every candidate who passed the initial screening attended the mandatory workshop.",
      "No one who attended the mandatory workshop failed the final assessment.",
      "If a candidate was offered a position, they failed the final assessment.",
      "Some candidates who passed the initial screening were offered a position."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Consider a candidate from Statement 4: they passed the initial screening and were offered a position. Since they passed the initial screening, Statement 1 implies they attended the mandatory workshop. Statement 2 indicates that no one who attended the mandatory workshop failed the final assessment. Therefore, this candidate did not fail the final assessment. However, because this candidate was offered a position, Statement 3 implies they failed the final assessment. This creates a contradiction where the candidate both failed and did not fail the final assessment."
  },
  {
    "id": "gen-22-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a product is marked as \"organic,\" it contains no artificial flavors.",
      "All products containing no artificial flavors are packaged in recycled materials.",
      "Some products packaged in recycled materials are not marked as \"organic.\"",
      "No product that is not marked as \"organic\" can be advertised as \"all-natural.\""
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If a product is organic (Statement 1), it has no artificial flavors, and (Statement 2) is packaged in recycled materials. Statement 3 notes that some products packaged in recycled materials are not organic, which is consistent as not all recycled packaging must be for organic products. Statement 4 applies a rule to non-organic products, consistent with other statements."
  },
  {
    "id": "gen-22-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every company that prioritizes employee well-being offers flexible working hours.",
      "No company offering flexible working hours requires employees to be in the office five days a week.",
      "Companies that do not prioritize employee well-being require employees to be in the office five days a week.",
      "Some companies that require employees to be in the office five days a week also offer flexible working hours."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Consider a company from Statement 4: it requires employees to be in the office five days a week AND offers flexible working hours. Since it offers flexible working hours, Statement 2 implies it does NOT require employees to be in the office five days a week. This creates a direct contradiction within the definition of this company from Statement 4, as it both requires and does not require employees to be in the office five days a week."
  },
  {
    "id": "gen-23-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the final exam attended every lecture.",
      "No student who attended every lecture failed the midterm.",
      "Some students who passed the final exam failed the midterm."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 together imply that all students who passed the final exam did not fail the midterm. This conclusion directly contradicts Statement 3, which claims some students who passed the final exam did fail the midterm."
  },
  {
    "id": "gen-23-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every fruit in this basket is ripe.",
      "Some ripe fruits have blemishes.",
      "No fruit in this basket has blemishes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. While Statement 2 indicates some ripe fruits have blemishes, this does not require any fruit *in the basket* to have blemishes, given that Statement 3 only refers to fruits within the basket."
  },
  {
    "id": "gen-23-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants in the marathon finished the race.",
      "No one who finished the race felt completely rested.",
      "Every participant in the marathon felt completely rested."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that every participant in the marathon did not feel completely rested. This conclusion directly contradicts Statement 3, which states that every participant in the marathon felt completely rested."
  },
  {
    "id": "gen-23-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful entrepreneurs take calculated risks.",
      "Some people who take calculated risks are not successful entrepreneurs.",
      "Mark is a successful entrepreneur.",
      "Mark takes calculated risks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that all successful entrepreneurs take calculated risks, which means Mark, being a successful entrepreneur according to Statement 3, must take calculated risks, which is supported by Statement 4. Statement 2 describes a separate group that does not create a conflict."
  },
  {
    "id": "gen-23-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a hummingbird, it has a high metabolism.",
      "Some birds with a high metabolism are not hummingbirds.",
      "No bird that feeds on nectar has a high metabolism.",
      "Every hummingbird feeds on nectar."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 4 and 3 together imply that every hummingbird feeds on nectar and thus does not have a high metabolism. This conclusion directly contradicts Statement 1, which states that if a bird is a hummingbird, it has a high metabolism."
  },
  {
    "id": "gen-23-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes train rigorously.",
      "Some people who train rigorously are not professional athletes.",
      "No one who trains rigorously avoids injury.",
      "John is a professional athlete."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. John, being a professional athlete (Statement 4), trains rigorously (Statement 1) and therefore does not avoid injury (Statement 3). Statement 2 describes a separate group and does not create a conflict."
  },
  {
    "id": "gen-23-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful negotiation involves compromise.",
      "Some deals that involve compromise are not successful negotiations.",
      "No deal that involves compromise is easy to achieve.",
      "All successful negotiations are easy to achieve."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 together imply that every successful negotiation involves compromise and is therefore not easy to achieve. This conclusion directly contradicts Statement 4, which states that all successful negotiations are easy to achieve."
  },
  {
    "id": "gen-23-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant needs direct sunlight, it is a succulent.",
      "Some succulents do not need direct sunlight.",
      "All plants on this windowsill are succulents.",
      "No plant on this windowsill needs direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Plants on the windowsill are succulents that do not need direct sunlight (Statements 3 and 4), which aligns with Statement 2 that some succulents do not need direct sunlight. Statement 1 remains true as no plant needing direct sunlight on the windowsill is identified as a non-succulent."
  },
  {
    "id": "gen-23-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with management roles received a bonus this year.",
      "No employee who received a bonus this year was recently hired.",
      "Some employees with management roles were recently hired."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all employees with management roles received a bonus and therefore were not recently hired. This conclusion directly contradicts Statement 3, which claims some employees with management roles were recently hired."
  },
  {
    "id": "gen-23-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every animal that hibernates is a mammal.",
      "Some animals that hibernate are not active in winter.",
      "All mammals are warm-blooded.",
      "No animal that is warm-blooded has gills."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Animals that hibernate are mammals (Statement 1) and are warm-blooded (Statement 3), and therefore do not have gills (Statement 4). Statement 2 simply describes a characteristic of some hibernating animals, which does not create a conflict."
  },
  {
    "id": "gen-24-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All applicants who passed the initial screening were invited for an interview.",
      "No one invited for an interview was denied final admission.",
      "Every applicant who submitted a complete application passed the initial screening.",
      "Some applicants who submitted a complete application were denied final admission."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically establish that all applicants who submitted a complete application were not denied final admission (Complete App → Passed Screen → Invited Interview → Not Denied Admission). Statement 4 directly contradicts this by claiming that some applicants who submitted a complete application were denied final admission."
  },
  {
    "id": "gen-24-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All chefs who trained in Paris use exotic spices.",
      "Some chefs who use exotic spices did not train in Paris.",
      "No chef who trained in London uses exotic spices.",
      "Chef Antoine trained in Paris."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for Chef Antoine to be a Paris-trained chef using exotic spices, while other non-Parisian chefs also use exotic spices. London-trained chefs simply do not use them. No contradictions arise."
  },
  {
    "id": "gen-24-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires minimal watering.",
      "All plants that require minimal watering thrive in direct sunlight.",
      "No plant that thrives in direct sunlight can grow indoors.",
      "Every plant in this nursery is a succulent.",
      "All plants in this nursery can grow indoors."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 logically establish that every plant in this nursery cannot grow indoors (Nursery → Succulent → Minimal Watering → Direct Sunlight → Cannot Grow Indoors). Statement 5 directly contradicts this by asserting that all plants in this nursery can grow indoors."
  },
  {
    "id": "gen-24-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who attended the workshop received a bonus.",
      "Some employees received a bonus despite not attending the workshop.",
      "No employee who works part-time attended the workshop.",
      "Everyone who received a bonus is eligible for promotion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for employees to receive bonuses either by attending the workshop or through other means. All bonus recipients are eligible for promotion, and part-time employees simply do not attend the workshop, but might still receive bonuses and be eligible for promotion."
  },
  {
    "id": "gen-24-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups prioritize customer feedback.",
      "Any company that prioritizes customer feedback fosters innovation.",
      "No company that fosters innovation struggles with market adaptation.",
      "Some companies that struggle with market adaptation are successful startups."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically establish that all successful startups do not struggle with market adaptation (Successful Startup → Prioritize Customer Feedback → Foster Innovation → Not Struggle with Market Adaptation). Statement 4 claims that some successful startups do struggle with market adaptation, which directly contradicts this conclusion."
  },
  {
    "id": "gen-24-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a mammal is a feline, it has retractable claws.",
      "No animal with retractable claws is a hoofed animal.",
      "Some hoofed animals are mammals.",
      "All felines are mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Felines (mammals) have retractable claws and are not hoofed. Hoofed animals (some of which are mammals, like horses) do not have retractable claws. These facts can all be true simultaneously."
  },
  {
    "id": "gen-24-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All artifacts from the ancient tomb were made of gold.",
      "No object made of gold is easily breakable.",
      "If an object is not easily breakable, it can withstand extreme pressure.",
      "Some artifacts from the ancient tomb cannot withstand extreme pressure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically establish that all artifacts from the ancient tomb can withstand extreme pressure (Artifact from Tomb → Gold → Not Easily Breakable → Can Withstand Extreme Pressure). Statement 4 directly contradicts this by asserting that some artifacts from the ancient tomb cannot withstand extreme pressure."
  },
  {
    "id": "gen-24-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who passed the advanced coding exam aced the final project.",
      "Some students who aced the final project did not pass the advanced coding exam.",
      "All students who aced the final project were eligible for the internship.",
      "No student who failed the advanced coding exam was eligible for the internship."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 3 and 4 logically imply that if a student did not pass the advanced coding exam, they could not have aced the final project (Failed Exam → Not Eligible for Internship → Did Not Ace Final Project). Statement 2 directly contradicts this by claiming that some students who aced the final project did not pass the advanced coding exam."
  },
  {
    "id": "gen-24-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees on the morning shift are required to attend the daily briefing.",
      "No employee who attends the daily briefing leaves before 9 AM.",
      "Some employees are allowed to leave before 9 AM.",
      "Every employee on the evening shift is allowed to leave before 9 AM."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that morning shift employees stay past 9 AM, while evening shift employees (or others) are allowed to leave earlier. The groups are not mutually exclusive in a way that creates a contradiction."
  },
  {
    "id": "gen-24-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful political campaigns involve extensive grassroots organizing.",
      "No campaign involving extensive grassroots organizing is poorly funded.",
      "If a campaign is not poorly funded, it achieves widespread public support.",
      "Every campaign that achieves widespread public support wins the election.",
      "Some successful political campaigns lose the election."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 logically establish that all successful political campaigns win the election (Successful Campaign → Grassroots Organizing → Not Poorly Funded → Widespread Public Support → Wins Election). Statement 5 directly contradicts this by asserting that some successful political campaigns lose the election."
  },
  {
    "id": "gen-25-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the final exam, they receive an award.",
      "All students who receive an award are invited to the banquet.",
      "No student who was invited to the banquet also failed a midterm.",
      "Every student in this class passed the final exam.",
      "Some students in this class failed a midterm."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 together imply that every student in this class passed the final exam, received an award, was invited to the banquet, and therefore did not fail a midterm. This directly contradicts Statement 5, which asserts that some students in this class did fail a midterm."
  },
  {
    "id": "gen-25-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All hybrid tea roses are roses.",
      "Some plants with thorns are not roses.",
      "Every plant with thorns requires well-drained soil."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Hybrid tea roses would have thorns and require well-drained soil. The existence of thorny plants that are not roses (like a cactus) is consistent with Statement 1, as it does not claim that only roses have thorns."
  },
  {
    "id": "gen-25-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "No one who possesses strong leadership skills is unwilling to take risks.",
      "Every person who prioritizes stability is unwilling to take risks.",
      "Some successful entrepreneurs prioritize stability."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all successful entrepreneurs are willing to take risks. Statement 3's contrapositive implies that anyone willing to take risks does not prioritize stability. Therefore, all successful entrepreneurs do not prioritize stability, which directly contradicts Statement 4."
  },
  {
    "id": "gen-25-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a raptor, it is a predator.",
      "All falcons are raptors.",
      "Some predators do not hunt mammals.",
      "No bird that preys on insects is a raptor.",
      "Some falcons hunt mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Falcons, being raptors and predators, can hunt mammals. This is consistent with some predators (e.g., a hawk that primarily eats fish) not hunting mammals, and with insect-eating birds (e.g., a swallow) not being raptors. No logical contradiction arises."
  },
  {
    "id": "gen-25-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who attend the workshop receive a certificate.",
      "No participant who missed more than two sessions receives a certificate.",
      "Every participant in Group A attended the workshop.",
      "Some participants in Group A missed more than two sessions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 together imply that every participant in Group A received a certificate. Statement 2 implies that anyone who received a certificate did not miss more than two sessions. Thus, every participant in Group A did not miss more than two sessions. This directly contradicts Statement 4."
  },
  {
    "id": "gen-25-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a building is a skyscraper, it has at least 50 stories.",
      "All structures over 100 meters tall are skyscrapers.",
      "Some buildings with at least 50 stories are not over 100 meters tall.",
      "Every skyscraper is resistant to high winds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. A 120-meter-tall building with 60 stories would be a skyscraper, have at least 50 stories, and be resistant to high winds. A 90-meter-tall building with 55 stories would have at least 50 stories but not be over 100 meters tall, which is also consistent. No logical contradiction arises."
  },
  {
    "id": "gen-25-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful marketing campaign uses social media.",
      "No campaign that uses social media is effective without a clear budget.",
      "All marketing campaigns with a clear budget achieve their target reach.",
      "Some successful marketing campaigns do not achieve their target reach."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a campaign is successful, it uses social media; if it uses social media, it has a clear budget; if it has a clear budget, it achieves its target reach. Therefore, all successful marketing campaigns achieve their target reach. This directly contradicts Statement 4."
  },
  {
    "id": "gen-25-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed pre-calculus.",
      "All students who passed pre-calculus are eligible for a scholarship.",
      "No student eligible for a scholarship needs a tutor for advanced calculus.",
      "Some students who enroll in advanced calculus need a tutor for advanced calculus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a student enrolls in advanced calculus, they passed pre-calculus; if they passed pre-calculus, they are eligible for a scholarship; if they are eligible for a scholarship, they do not need a tutor for advanced calculus. Therefore, all students who enroll in advanced calculus do not need a tutor. This directly contradicts Statement 4."
  },
  {
    "id": "gen-25-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the chess club are skilled in strategy.",
      "Every student skilled in strategy performs well in logic puzzles.",
      "Some students who perform well in logic puzzles are not members of the chess club.",
      "If a student is a member of the debate team, they are skilled in strategy.",
      "No student who performs well in logic puzzles struggles with critical thinking."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. For instance, members of the debate team could be skilled in strategy and perform well in logic puzzles without being members of the chess club, satisfying Statement 3. All logical chains are consistent."
  },
  {
    "id": "gen-25-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All cars manufactured in Detroit meet specific safety standards.",
      "If a car meets specific safety standards, it passes the annual inspection.",
      "Some cars that pass the annual inspection were not manufactured in Detroit.",
      "Every car that passes the annual inspection consumes premium fuel."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Cars manufactured in Detroit meet safety standards, pass inspection, and consume premium fuel. Other cars (not from Detroit) can also meet safety standards, pass inspection, and consume premium fuel, which is consistent with Statement 3. No logical contradiction arises."
  },
  {
    "id": "gen-26-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are skilled in math.",
      "No one skilled in math is a poet.",
      "Some engineers are poets."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 together imply that no engineer is a poet (Engineers → Skilled in Math → Not a Poet). Statement 3 directly contradicts this by asserting that some engineers are poets. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-26-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every doctor has studied biology.",
      "Some people who have studied biology are not doctors.",
      "Maria is a doctor."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Maria, being a doctor (Statement 3), must have studied biology (from Statement 1). Statement 2 simply states that the group of people who have studied biology is larger than just doctors, which is consistent with the other statements."
  },
  {
    "id": "gen-26-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a robin, it builds nests in trees.",
      "All birds that build nests in trees are excellent singers.",
      "Some robins are not excellent singers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 together imply that every robin is an excellent singer (Robins → Build nests in trees → Excellent Singers). Statement 3 contradicts this by asserting that some robins are not excellent singers. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-26-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who works in marketing is an introvert.",
      "All sales team members are extroverts.",
      "Some sales team members also work in marketing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies anyone in marketing is not an introvert. Statement 2 implies sales team members are not introverts (assuming extrovert means not introvert). Statement 3 says some people are in both groups, and those people would be not introverted, which is consistent with both prior statements."
  },
  {
    "id": "gen-26-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus attended the annual conference.",
      "No employee who attended the annual conference missed the quarterly review.",
      "Some employees who received a bonus missed the quarterly review."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 together imply that no employee who received a bonus missed the quarterly review (Bonus → Attended Conference → Did not miss review). Statement 3 contradicts this by asserting that some employees who received a bonus did miss the quarterly review. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-26-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every painting in the gallery is an oil painting.",
      "Some oil paintings are very expensive.",
      "No painting in the gallery is very expensive."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 3 mean that any painting in the gallery is an oil painting and is not very expensive. Statement 2 says some oil paintings exist that are very expensive, but these simply must be oil paintings that are not in this particular gallery. This is consistent."
  },
  {
    "id": "gen-26-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy playing fetch.",
      "No animal that enjoys playing fetch dislikes water.",
      "Some dogs dislike water."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 and Statement 2 together imply that all dogs enjoy water (Dogs → Enjoy fetch → Do not dislike water). Statement 3 contradicts this by asserting that some dogs dislike water. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-26-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a tree is an oak, it has acorns.",
      "Every tree with acorns is a deciduous tree.",
      "Some deciduous trees are not very tall.",
      "All oak trees are very tall."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 2 establish that all oak trees are deciduous. Statement 4 states that all oak trees are very tall. Statement 3 indicates that some deciduous trees are not very tall, which is consistent, as these deciduous trees simply cannot be oak trees."
  },
  {
    "id": "gen-26-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students enrolled in advanced physics also take advanced calculus.",
      "Every student taking advanced calculus receives extra credit for participation.",
      "No student who receives extra credit for participation fails the course.",
      "Some students enrolled in advanced physics fail the course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that no student enrolled in advanced physics fails the course (Advanced Physics → Advanced Calculus → Extra Credit → Does not fail). Statement 4 contradicts this by asserting that some students enrolled in advanced physics do fail the course. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-26-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every project with a tight deadline uses agile methodology.",
      "Some projects using agile methodology are large-scale.",
      "All large-scale projects require extensive documentation.",
      "No project with a tight deadline requires extensive documentation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 imply that any project with a tight deadline uses agile methodology but does not require extensive documentation. Statement 3 states that all large-scale projects require extensive documentation. Therefore, any project that uses agile methodology and is large-scale (from Statement 2) cannot also have a tight deadline, which is consistent."
  },
  {
    "id": "gen-27-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe is for a dessert, it requires sugar.",
      "No recipe that requires sugar is suitable for a low-carb diet.",
      "Every recipe in the 'Healthy Eating' cookbook is suitable for a low-carb diet.",
      "Some recipes in the 'Healthy Eating' cookbook are desserts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a recipe is a dessert (1), it requires sugar (2), and thus is not suitable for a low-carb diet. However, Statement 3 says every recipe in the 'Healthy Eating' cookbook IS suitable for a low-carb diet. Statement 4 claims there are some recipes in the 'Healthy Eating' cookbook that are desserts. These specific recipes, by the chain, must be both suitable and not suitable for a low-carb diet, which is a contradiction. Removing Statement 4 eliminates the specific instances that cause the contradiction, making the set consistent."
  },
  {
    "id": "gen-27-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All managers attend the quarterly budget meeting.",
      "If someone attends the quarterly budget meeting, they must submit a financial report.",
      "Some employees who submit a financial report are not managers.",
      "No employee who submits a financial report is exempt from the annual audit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statements 1 and 2, all managers submit financial reports. Statement 3 indicates that there are employees who submit financial reports but are not managers, which is perfectly consistent. Statement 4 establishes that anyone submitting a financial report is subject to the annual audit. No logical contradiction arises from these conditions."
  },
  {
    "id": "gen-27-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is enrolled in the advanced robotics course, they must complete a final project.",
      "No student who completes a final project is permitted to graduate early.",
      "Every student permitted to graduate early has a perfect attendance record.",
      "Some students in the advanced robotics course have a perfect attendance record.",
      "No student with a perfect attendance record completes a final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 5 are in direct conflict regarding any student who is both in the advanced robotics course and has a perfect attendance record. Statement 1 dictates that such a student must complete a final project, while Statement 5 states that a student with a perfect attendance record does not complete a final project. Statement 4 asserts that such students exist, leading to an irresolvable contradiction. Removing Statement 4 makes the set consistent by removing the specific instance that triggers the conflict."
  },
  {
    "id": "gen-27-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups offer a unique product.",
      "If a company offers a unique product, it attracts significant investment.",
      "Some companies that attract significant investment are not successful startups.",
      "No company that attracts significant investment relies solely on traditional advertising."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all successful startups attract significant investment. Statement 3 allows for other companies besides successful startups to attract investment, which does not conflict. Statement 4 indicates that companies attracting significant investment do not rely on traditional advertising. No logical contradiction arises from these conditions."
  },
  {
    "id": "gen-27-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project approved by the board receives priority funding.",
      "No project that receives priority funding is subject to further review.",
      "Only projects that are subject to further review require additional documentation.",
      "Some projects approved by the board require additional documentation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain. If a project is approved by the board (1), it receives priority funding (2), and therefore is not subject to further review. If it is not subject to further review, then according to Statement 3's contrapositive (if not subject to further review, then does not require additional documentation), it does not require additional documentation. Thus, any project approved by the board should not require additional documentation. Statement 4, however, asserts that some projects approved by the board DO require additional documentation, which creates a direct contradiction. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-27-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it has sharp teeth.",
      "All species with sharp teeth are apex predators.",
      "Some apex predators do not have sharp teeth.",
      "No carnivorous species is herbivorous."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all carnivorous species are apex predators. Statement 3 merely states that some apex predators exist that do not have sharp teeth, which does not contradict the earlier statements, as not all apex predators are necessarily carnivorous or derive their status from having sharp teeth. Statement 4 is a general biological truth consistent with the others. No logical contradiction arises from these conditions."
  },
  {
    "id": "gen-27-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All research proposals submitted before the deadline are eligible for early review.",
      "If a proposal is eligible for early review, its primary investigator receives a notification email.",
      "No primary investigator who receives a notification email is required to attend the preliminary hearing.",
      "Some research proposals submitted before the deadline are required to attend the preliminary hearing."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a research proposal is submitted before the deadline, its primary investigator receives a notification email, and therefore is not required to attend the preliminary hearing. This means no proposal submitted before the deadline should be required to attend the preliminary hearing. Statement 4, however, explicitly states that some proposals submitted before the deadline ARE required to attend the preliminary hearing, which directly contradicts the derived conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-27-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a city enforces strict environmental regulations, it sees a reduction in air pollution.",
      "If a city sees a reduction in air pollution, it always invests in renewable energy.",
      "Not all cities that invest in renewable energy enforce strict environmental regulations.",
      "No city that invests in renewable energy relies solely on fossil fuels."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that cities with strict environmental regulations invest in renewable energy. Statement 3 asserts that there are cities investing in renewable energy that do not have strict environmental regulations, which is consistent with the implication. Statement 4 adds that these cities do not rely solely on fossil fuels. No logical contradiction arises."
  },
  {
    "id": "gen-27-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in the honors program must attend the advanced seminar.",
      "If a student attends the advanced seminar, they must submit a research paper.",
      "No student who submits a research paper is eligible for a travel grant.",
      "Some students enrolled in the honors program are eligible for a travel grant."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a student is enrolled in the honors program (1), they attend the advanced seminar (2), submit a research paper (3), and therefore are not eligible for a travel grant. This implies that no student in the honors program should be eligible for a travel grant. Statement 4 directly contradicts this by asserting that some students in the honors program ARE eligible for a travel grant. Removing Statement 4 eliminates the specific instances that cause the contradiction, making the set consistent."
  },
  {
    "id": "gen-27-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it is a carnivore.",
      "All carnivores have sharp claws.",
      "Some animals with sharp claws are not felines.",
      "No animal that is a carnivore is an herbivore.",
      "All felines are active hunters."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all felines have sharp claws. Statement 3 confirms that not all animals with sharp claws are felines, which is consistent. Statements 4 and 5 introduce additional truths about carnivores and felines that do not conflict with each other or the preceding statements. No logical contradiction arises from these conditions."
  },
  {
    "id": "gen-28-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who complete the project pass the course.",
      "No student who fails the final exam passes the course.",
      "Some students completed the project and failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a student completes the project, they pass the course. Statement 2 says that if a student passes the course, they did not fail the final exam. Therefore, combining Statement 1 and Statement 2 implies that any student who completes the project did not fail the final exam. Statement 3 directly contradicts this conclusion by stating that some students completed the project AND failed the final exam. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-28-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds migrate south for the winter.",
      "Some animals that migrate south are not birds.",
      "A penguin is a bird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that all birds migrate. Statement 2 allows for other types of animals to also migrate. Statement 3 confirms a penguin is a bird, which means penguins also migrate south according to Statement 1. No contradiction arises from these facts."
  },
  {
    "id": "gen-28-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every member of the hiking club owns a map.",
      "No one who owns a map has ever gotten lost.",
      "Some members of the hiking club have gotten lost."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all hiking club members own a map. Statement 2 states that no one who owns a map has gotten lost. Together, these imply that no member of the hiking club has ever gotten lost. Statement 3 directly contradicts this by asserting that some members of the hiking club have gotten lost. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All efficient engines run quietly.",
      "Some engines that run quietly are not efficient.",
      "The engine in Sarah's car runs quietly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 sets a condition for efficient engines. Statement 2 states that not all quiet engines are efficient, allowing for non-efficient quiet engines. Sarah's engine, running quietly, could be either efficient (consistent with Statement 1) or not efficient (consistent with Statement 2). No contradiction exists."
  },
  {
    "id": "gen-28-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Only employees with a manager's approval can access the secure server.",
      "All employees who work remotely can access the secure server.",
      "No employee who works remotely has a manager's approval."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says that all remote employees can access the secure server. Statement 1 says that only employees with a manager's approval can access the secure server, meaning that if an employee accesses the server, they must have manager's approval. Therefore, combining Statement 1 and Statement 2 implies that all remote employees must have a manager's approval. Statement 3 directly contradicts this by stating that no employee who works remotely has a manager's approval. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-28-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful playwright has published at least one novel.",
      "Some authors who have published novels have never written a play.",
      "Sarah is a successful playwright."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 sets a condition for successful playwrights. Statement 2 shows that the group of novelists is larger than just successful playwrights, which is logically sound. Statement 3 introduces Sarah as a successful playwright, which means she must have published at least one novel according to Statement 1. No contradiction is formed."
  },
  {
    "id": "gen-28-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All vehicles in the lot are cars.",
      "Some vehicles in the lot have two wheels.",
      "No car has two wheels."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says that all vehicles in the lot are cars. Statement 3 says that no car has two wheels. Together, these statements imply that no vehicle in the lot has two wheels. Statement 2 directly contradicts this by stating that some vehicles in the lot do have two wheels. Removing Statement 2 resolves the inconsistency."
  },
  {
    "id": "gen-28-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a recipe calls for herbs, it is considered gourmet.",
      "Some gourmet recipes do not call for herbs.",
      "This particular recipe is considered gourmet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes a sufficient condition for a recipe to be gourmet. Statement 2 indicates that there are other ways for a recipe to be gourmet. Statement 3 identifies a specific gourmet recipe, which could either call for herbs (consistent with Statement 1) or not call for herbs (consistent with Statement 2). No logical contradiction exists."
  },
  {
    "id": "gen-28-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book on the top shelf is a novel.",
      "No novel is a history book.",
      "Some books on the top shelf are history books."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that every book on the top shelf is a novel. Statement 2 says that no novel is a history book. Together, these statements imply that no book on the top shelf is a history book. Statement 3 directly contradicts this by stating that some books on the top shelf ARE history books. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every musician in the orchestra plays a string instrument.",
      "No one who plays a string instrument is a percussionist.",
      "Some percussionists are members of the orchestra."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all orchestra musicians play string instruments. Statement 2 states that no one who plays a string instrument is a percussionist. Combining these, it follows that no orchestra musician is a percussionist. Statement 3 directly contradicts this by claiming that some percussionists are members of the orchestra. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-29-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted a complete portfolio.",
      "No one who submitted a complete portfolio was missing a letter of recommendation.",
      "At least one applicant who was missing a letter of recommendation was successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all successful applicants submitted a complete portfolio. Statement 2 implies that no one who submitted a complete portfolio was missing a letter of recommendation. Therefore, it must be true that no successful applicant was missing a letter of recommendation, which directly contradicts Statement 3."
  },
  {
    "id": "gen-29-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates passed the initial screening.",
      "Every candidate who met the experience requirements was deemed qualified.",
      "Some candidates who passed the initial screening did not meet the experience requirements."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all candidates who met the experience requirements also passed the initial screening. Statement 3 describes a group of candidates who passed the initial screening but did not meet the experience requirements. This group could exist independently of those who met experience requirements, making all statements consistent."
  },
  {
    "id": "gen-29-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they must have completed linear algebra.",
      "No student who completed linear algebra has failed the logic prerequisite.",
      "All students enrolled in advanced calculus are making satisfactory progress.",
      "Some students who failed the logic prerequisite were permitted to enroll in advanced calculus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 states that enrollment in advanced calculus requires completing linear algebra. Statement 2 indicates that completing linear algebra means not having failed the logic prerequisite. Thus, any student enrolled in advanced calculus must not have failed the logic prerequisite, which directly contradicts Statement 4."
  },
  {
    "id": "gen-29-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid parking permits display a current year sticker.",
      "Some vehicles displaying a current year sticker do not have a valid parking permit.",
      "No vehicle with an expired parking permit displays a current year sticker.",
      "Maria's car has a current year sticker."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 2 indicates that having a current year sticker does not automatically mean a valid permit, allowing for cases like Maria's car to have a sticker without a valid permit or with one. No statement creates an unavoidable conflict with the others."
  },
  {
    "id": "gen-29-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful grant application included a detailed budget.",
      "No application that included a detailed budget was missing supplementary materials.",
      "At least one grant application was approved despite being missing supplementary materials."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all successful grant applications included a detailed budget. Statement 2 specifies that applications with a detailed budget were not missing supplementary materials. Therefore, any successful grant application must not have been missing supplementary materials, which is contradicted by Statement 3."
  },
  {
    "id": "gen-29-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees eligible for overtime have completed the advanced training module.",
      "Some employees who completed the advanced training module are not eligible for overtime.",
      "No employee who completed only the basic training module is eligible for overtime.",
      "A few employees have completed the advanced training module."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that the group of employees who completed the advanced training module is broader than those eligible for overtime. Statement 3 further clarifies that those with only basic training are not eligible for overtime, which is compatible with the previous statements. Statement 4 simply confirms the existence of employees who completed the advanced training module."
  },
  {
    "id": "gen-29-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it must be kept in direct sunlight.",
      "No plant that is kept in direct sunlight can also thrive in shade.",
      "Every plant that requires daily watering is known to thrive in shade."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that plants requiring daily watering must be kept in direct sunlight. Statement 2 states that plants kept in direct sunlight cannot thrive in shade. Consequently, plants requiring daily watering cannot thrive in shade, which directly contradicts Statement 3."
  },
  {
    "id": "gen-29-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful fundraising campaigns achieved their initial target.",
      "No fundraising campaign that achieved its initial target failed to attract major donors.",
      "Some fundraising campaigns that attracted major donors were not successful.",
      "Our latest fundraising campaign did not fail to attract major donors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all successful fundraising campaigns attracted major donors. Statement 3 allows for campaigns that attracted major donors but were not successful. Statement 4 simply states that the latest campaign attracted major donors, which is compatible with it being either successful or unsuccessful based on previous statements."
  },
  {
    "id": "gen-29-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every device equipped with biometric security features has an encrypted storage drive.",
      "No device with an encrypted storage drive is vulnerable to remote data compromise.",
      "Some devices vulnerable to remote data compromise are equipped with biometric security features."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all devices with biometric security features have an encrypted storage drive. Statement 2 asserts that no device with an encrypted storage drive is vulnerable to remote data compromise. This means devices with biometric security features cannot be vulnerable to remote data compromise, which is contradicted by Statement 3."
  },
  {
    "id": "gen-29-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All senior managers attend the quarterly strategic review.",
      "No one who attends the quarterly strategic review is exempt from the annual performance audit.",
      "Some employees exempt from the annual performance audit are not senior managers.",
      "Every employee who is a senior manager is evaluated in the annual performance audit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all senior managers are evaluated in the annual performance audit (not exempt). This means anyone exempt from the audit cannot be a senior manager. Statement 3 confirms that some employees who are exempt from the audit are indeed not senior managers, which is a consistent outcome. Statement 4 reiterates a consequence of Statements 1 and 2."
  },
  {
    "id": "gen-30-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a client requests a custom build, they must pay an upfront deposit.",
      "No client who pays an upfront deposit is eligible for a refund.",
      "Every client requesting a custom build is offered a warranty.",
      "Some clients eligible for a refund are offered a warranty."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A client could be eligible for a refund and offered a warranty (Statement 4), but not have requested a custom build, thus avoiding the deposit requirement (Statement 1) and the subsequent ineligibility for a refund (Statement 2). This scenario does not create any contradictions."
  },
  {
    "id": "gen-30-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the advanced training module received a certificate of completion.",
      "If a participant received a certificate of completion, they are eligible for the next-level course.",
      "No participant who missed more than two sessions is eligible for the next-level course.",
      "Every participant in the summer cohort completed the advanced training module.",
      "Some participants in the summer cohort missed more than two sessions."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 asserts the existence of a participant who is in the summer cohort and missed more than two sessions. From Statement 4, such a participant completed the advanced training module. From Statement 1, they received a certificate, and from Statement 2, they are eligible for the next-level course. However, since this participant missed more than two sessions (Statement 5), Statement 3 dictates they are not eligible for the next-level course. This creates a direct contradiction: the participant is both eligible and not eligible for the next-level course."
  },
  {
    "id": "gen-30-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a building undergoes major structural changes, it requires a city permit.",
      "No building with a city permit can skip a final safety inspection.",
      "Every building that is exempt from a final safety inspection uses approved sustainable materials.",
      "All buildings using approved sustainable materials are eligible for tax credits.",
      "Some buildings undergoing major structural changes are eligible for tax credits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A building could undergo major structural changes (Statement 1), require a city permit, and therefore not skip a final safety inspection (Statement 2). It could still use approved sustainable materials and be eligible for tax credits (Statement 4), even if it didn't meet the condition in Statement 3 (being exempt from safety inspection). There is no contradiction generated by these conditions."
  },
  {
    "id": "gen-30-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project misses its initial deadline, it incurs a penalty fee.",
      "No project incurring a penalty fee can be considered a high-priority assignment.",
      "Every project that uses external consultants is considered a high-priority assignment.",
      "All projects with limited internal resources miss their initial deadline.",
      "Some projects with limited internal resources use external consultants."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 describes a project that has limited internal resources and uses external consultants. According to Statement 4, a project with limited internal resources misses its initial deadline. This means it incurs a penalty fee (Statement 1), and thus cannot be a high-priority assignment (Statement 2). However, because this same project uses external consultants (Statement 5), Statement 3 dictates it must be considered a high-priority assignment. The project is both a high-priority assignment and not a high-priority assignment, which is a contradiction."
  },
  {
    "id": "gen-30-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All artifacts displayed in the main gallery are high-value items.",
      "If an artifact is a high-value item, it requires constant security monitoring.",
      "No artifact requiring constant security monitoring can be handled directly by visitors.",
      "Every artifact that visitors can handle directly is a replica.",
      "Some artifacts in the main gallery are replicas."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. An artifact could be in the main gallery and be a replica (Statement 5). From Statements 1, 2, and 3, any artifact in the main gallery is a high-value item, requires constant security, and cannot be handled directly by visitors. Statement 4 says that artifacts that can be handled directly are replicas, which does not contradict that an unhandled replica might be in the main gallery. The statements collectively do not lead to a logical impossibility."
  },
  {
    "id": "gen-30-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird species migrates south for winter, it nests in temperate regions.",
      "No bird species that nests in temperate regions is found in arctic habitats.",
      "Every bird species that consumes insects exclusively is found in arctic habitats.",
      "All bird species that fly long distances for feeding migrate south for winter.",
      "Some bird species that fly long distances for feeding consume insects exclusively."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 identifies a bird species that both flies long distances for feeding and consumes insects exclusively. From Statement 4, a species that flies long distances for feeding migrates south for winter. Statement 1 then dictates it nests in temperate regions. Following Statement 2, this means it is not found in arctic habitats. Conversely, because this same species consumes insects exclusively (Statement 5), Statement 3 requires it to be found in arctic habitats. This is a contradiction, as the species cannot both be found and not found in arctic habitats."
  },
  {
    "id": "gen-30-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All software modules undergoing internal review must pass all unit tests.",
      "If a software module passes all unit tests, it is considered stable.",
      "No software module considered stable contains critical bugs.",
      "Every software module with critical bugs requires immediate patching.",
      "Some software modules undergoing internal review require immediate patching."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A software module could be undergoing internal review and require immediate patching (Statement 5). From Statements 1, 2, and 3, a module undergoing internal review passes unit tests, is stable, and therefore does not contain critical bugs. Statement 4 indicates that critical bugs require immediate patching. However, a module can require immediate patching for reasons other than critical bugs (e.g., security updates, minor bug fixes), so there is no contradiction."
  },
  {
    "id": "gen-30-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a conference attendee is a keynote speaker, they are exempt from paying registration fees.",
      "No attendee exempt from paying registration fees is required to submit an abstract.",
      "Every attendee presenting a research poster is required to submit an abstract.",
      "All attendees receiving travel grants are keynote speakers.",
      "Some attendees receiving travel grants are presenting a research poster."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 asserts an attendee receives a travel grant and is presenting a research poster. According to Statement 4, anyone receiving a travel grant is a keynote speaker. From Statement 1, keynote speakers are exempt from registration fees, and Statement 2 then dictates they are not required to submit an abstract. However, this same attendee is presenting a research poster (Statement 5), which, by Statement 3, means they are required to submit an abstract. This creates a contradiction, as the attendee cannot both be required and not required to submit an abstract."
  },
  {
    "id": "gen-30-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dishes on the chef's special menu use seasonal ingredients.",
      "If a dish uses seasonal ingredients, it has a limited availability.",
      "No dish with limited availability can be ordered for catering events.",
      "Every dish with a vegan option is available for catering events.",
      "Some dishes on the chef's special menu have a vegan option."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 identifies a dish that is on the chef's special menu and has a vegan option. From Statement 1, any dish on the chef's special menu uses seasonal ingredients, and Statement 2 indicates it therefore has limited availability. Statement 3 then specifies that a dish with limited availability cannot be ordered for catering events. However, because this same dish has a vegan option (Statement 5), Statement 4 requires it to be available for catering events. This is a contradiction, as the dish cannot simultaneously be available and not available for catering."
  },
  {
    "id": "gen-30-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student registers for a graduate-level course, they must have a bachelor's degree.",
      "No student with a bachelor's degree is required to take an introductory placement exam.",
      "Every student who registers without prior academic advising is required to take an introductory placement exam.",
      "All students enrolled in the capstone seminar register for a graduate-level course.",
      "Some students enrolled in the capstone seminar register without prior academic advising."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 describes a student who is enrolled in the capstone seminar and registers without prior academic advising. From Statement 4, a student in the capstone seminar registers for a graduate-level course. Statement 1 indicates they must have a bachelor's degree, and Statement 2 then dictates they are not required to take an introductory placement exam. However, since this same student registers without prior academic advising (Statement 5), Statement 3 requires them to take an introductory placement exam. This leads to a contradiction, as the student cannot both be required and not required to take the exam."
  },
  {
    "id": "gen-31-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of Sector 7 pay taxes.",
      "No one who pays taxes avoids civic duties.",
      "Some residents of Sector 7 avoid civic duties."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all residents of Sector 7 pay taxes. Statement 2 asserts that no one who pays taxes avoids civic duties. Therefore, it must be true that all residents of Sector 7 do not avoid civic duties. Statement 3 directly contradicts this conclusion by claiming that some residents of Sector 7 avoid civic duties."
  },
  {
    "id": "gen-31-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every cat in the shelter is vaccinated.",
      "Some vaccinated animals are not cats.",
      "Mittens is a vaccinated animal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No contradiction exists. Mittens could be a cat in the shelter (and thus vaccinated), or she could be another type of vaccinated animal that is not a cat, which is consistent with the statements provided."
  },
  {
    "id": "gen-31-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses chili powder, it is spicy.",
      "Every spicy dish requires a cooling ingredient.",
      "This recipe uses chili powder, but does not require a cooling ingredient."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that if a recipe uses chili powder, it is spicy. Statement 2 claims that every spicy dish requires a cooling ingredient. Therefore, any recipe using chili powder must require a cooling ingredient. Statement 3 asserts that this recipe uses chili powder but does not require a cooling ingredient, creating a contradiction."
  },
  {
    "id": "gen-31-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students enrolled in advanced logic passed the midterm.",
      "No student who passed the midterm failed the course.",
      "Some students enrolled in advanced logic did not fail the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that all students in advanced logic passed the midterm. Statement 2 implies that all students who passed the midterm did not fail the course. Therefore, it must be true that all students enrolled in advanced logic did not fail the course. Statement 3, which claims some students in advanced logic did not fail the course, is consistent with all students not failing."
  },
  {
    "id": "gen-31-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful politician is a skilled debater.",
      "No skilled debater avoids public speaking.",
      "Some politicians who avoid public speaking are successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that every successful politician is a skilled debater. Statement 2 asserts that no skilled debater avoids public speaking. This means that all successful politicians do not avoid public speaking. Statement 3, however, claims that some politicians who avoid public speaking are successful, which is a direct contradiction."
  },
  {
    "id": "gen-31-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs that bark are territorial.",
      "Some territorial dogs are not aggressive.",
      "Fido barks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No contradiction exists. From Statement 1 and 3, Fido is a territorial dog. Statement 2 indicates that some territorial dogs are not aggressive, which allows for Fido to be either aggressive or not aggressive. This set of statements is entirely consistent."
  },
  {
    "id": "gen-31-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every book on the top shelf is a novel.",
      "No novel contains scientific formulas.",
      "Some books on the top shelf contain scientific formulas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that every book on the top shelf is a novel. Statement 2 states that no novel contains scientific formulas. Therefore, it must be true that no book on the top shelf contains scientific formulas. Statement 3 directly contradicts this by claiming some books on the top shelf contain scientific formulas."
  },
  {
    "id": "gen-31-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a fruit is an apple, it grows on a tree.",
      "Some fruits that grow on trees are not apples.",
      "This fruit did not grow on a tree."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No contradiction exists. This fruit could be a banana, which does not grow on a tree, or any other fruit not growing on a tree. This is consistent with apples growing on trees and some tree fruits not being apples."
  },
  {
    "id": "gen-31-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All cars in the parking lot are sedans.",
      "No sedans have two doors.",
      "There is at least one two-door car in the parking lot."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all cars in the parking lot are sedans. Statement 2 states that no sedans have two doors. Therefore, it must be true that no car in the parking lot has two doors. Statement 3 directly contradicts this by claiming there is at least one two-door car in the parking lot."
  },
  {
    "id": "gen-31-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every employee who attended the meeting submitted a report.",
      "Some employees submitted a report but did not attend the meeting.",
      "John attended the meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No contradiction exists. From Statement 1 and 3, John submitted a report. Statement 2 describes a separate group of employees who submitted reports without attending the meeting, which does not conflict with John's situation."
  },
  {
    "id": "gen-32-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird species is migratory, it builds nests in multiple locations.",
      "All birds that build nests in multiple locations travel across continents.",
      "No bird that travels across continents lives exclusively in temperate zones.",
      "Some migratory bird species live exclusively in temperate zones."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a bird is migratory, it builds nests in multiple locations, which means it travels across continents, and therefore it does not live exclusively in temperate zones. This implies that all migratory bird species do not live exclusively in temperate zones. Statement 4 directly contradicts this derived conclusion by asserting that some migratory bird species do live exclusively in temperate zones. Removing Statement 4 resolves the contradiction by eliminating the specific group for whom the conflict arises."
  },
  {
    "id": "gen-32-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All team members attending the leadership retreat receive a bonus.",
      "If a team member receives a bonus, they must complete an extra training module.",
      "No team member who completes an extra training module fails their quarterly review.",
      "Some team members who do not attend the leadership retreat also complete an extra training module."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A logical chain can be formed from the first three statements: Team members attending the leadership retreat receive a bonus, complete an extra training module, and therefore do not fail their quarterly review. Statement 4 simply describes another group of team members (those not attending the retreat) who also complete an extra training module. This additional information does not create any conflict with the first three statements; it merely means completing the training module is not exclusive to retreat attendees."
  },
  {
    "id": "gen-32-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every novel on the bestseller list is a thrilling mystery.",
      "If a novel is a thrilling mystery, it was written by an acclaimed author.",
      "No novel written by an acclaimed author contains significant historical inaccuracies.",
      "Some novels on the bestseller list contain significant historical inaccuracies."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: every novel on the bestseller list is a thrilling mystery, which means it was written by an acclaimed author, and therefore it contains no significant historical inaccuracies. This implies that all novels on the bestseller list do not contain significant historical inaccuracies. Statement 4 directly contradicts this derived conclusion by stating that some novels on the bestseller list do contain significant historical inaccuracies. Removing Statement 4 eliminates the specific group that causes the logical conflict."
  },
  {
    "id": "gen-32-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a city implements a congestion charge, public transport ridership increases.",
      "All cities where public transport ridership increases invest in new infrastructure.",
      "No city that invests in new infrastructure experiences budget shortfalls.",
      "Some cities that experience budget shortfalls do not implement a congestion charge."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A logical chain can be formed: If a city implements a congestion charge, public transport ridership increases, leading to investment in new infrastructure, and thus no budget shortfalls. Statement 4 indicates that some cities with budget shortfalls do not implement a congestion charge, which is entirely possible and does not contradict the implications for cities that *do* implement a congestion charge. The chain applies only to cities with congestion charges."
  },
  {
    "id": "gen-32-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All medical procedures requiring general anesthesia need prior fasting.",
      "If a procedure requires prior fasting, patients must sign an informed consent form.",
      "No patient who signs an informed consent form is under 18 years old.",
      "Some medical procedures requiring general anesthesia are performed on patients under 18 years old."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a medical procedure requires general anesthesia, it needs prior fasting, then patients must sign an informed consent form, and therefore those patients are not under 18 years old. This implies that all medical procedures requiring general anesthesia are performed on patients not under 18 years old. Statement 4 directly contradicts this derived conclusion by stating that some medical procedures requiring general anesthesia are performed on patients under 18 years old. Removing Statement 4 resolves the contradiction by removing the specific group that causes the conflict."
  },
  {
    "id": "gen-32-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every dog trained for search and rescue possesses exceptional olfactory senses.",
      "If a dog possesses exceptional olfactory senses, it requires specialized dietary supplements.",
      "No dog requiring specialized dietary supplements can tolerate standard commercial kibble.",
      "Some dogs that tolerate standard commercial kibble are not trained for search and rescue."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A logical chain can be formed: A dog trained for search and rescue possesses exceptional olfactory senses, which means it requires specialized dietary supplements, and thus it cannot tolerate standard commercial kibble. Statement 4 indicates that some dogs who *can* tolerate standard commercial kibble are *not* trained for search and rescue. This is entirely consistent, as these dogs simply fall outside the primary implication chain established for search and rescue dogs."
  },
  {
    "id": "gen-32-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a genuine antique, it must be appraised by a certified expert.",
      "All artworks appraised by a certified expert have a unique serial number.",
      "No artwork with a unique serial number was created before the 18th century.",
      "Some genuine antique artworks were created before the 18th century."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if an artwork is a genuine antique, it must be appraised by a certified expert, which means it has a unique serial number, and therefore it was not created before the 18th century. This implies that all genuine antique artworks were not created before the 18th century. Statement 4 directly contradicts this derived conclusion by asserting that some genuine antique artworks were created before the 18th century. Removing Statement 4 eliminates the specific group that creates the contradiction."
  },
  {
    "id": "gen-32-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups secure significant venture capital funding.",
      "If a startup secures significant venture capital funding, it will expand into international markets.",
      "No startup expanding into international markets relies solely on local talent.",
      "Some startups that rely solely on local talent do not secure significant venture capital funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A logical chain can be formed: A successful startup secures significant venture capital funding, expands into international markets, and thus does not rely solely on local talent. Statement 4 describes a group of startups (those relying solely on local talent) that *do not* secure significant venture capital funding, which is consistent and does not conflict with the chain for successful startups. These startups are simply outside the scope of the main implication."
  },
  {
    "id": "gen-32-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student enrolled in the advanced robotics workshop must pass a coding assessment.",
      "If a student passes a coding assessment, they are proficient in Python.",
      "No student proficient in Python struggles with complex algorithms.",
      "Some students enrolled in the advanced robotics workshop struggle with complex algorithms."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a student is enrolled in the advanced robotics workshop, they must pass a coding assessment, which means they are proficient in Python, and therefore they do not struggle with complex algorithms. This implies that all students enrolled in the advanced robotics workshop do not struggle with complex algorithms. Statement 4 directly contradicts this derived conclusion by stating that some students in the advanced robotics workshop *do* struggle with complex algorithms. Removing Statement 4 resolves the contradiction by removing the specific group that causes the conflict."
  },
  {
    "id": "gen-32-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All highly nutritious vegetables are rich in fiber.",
      "If a vegetable is rich in fiber, it aids in digestive health.",
      "No vegetable that aids in digestive health causes bloating.",
      "Some vegetables that cause bloating are not highly nutritious."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A logical chain can be formed: A highly nutritious vegetable is rich in fiber, which aids in digestive health, and therefore does not cause bloating. Statement 4 describes a group of vegetables (those causing bloating) that are *not* highly nutritious, which is consistent and describes vegetables outside the primary implication chain for highly nutritious vegetables."
  },
  {
    "id": "gen-33-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees in the marketing department attended the training.",
      "No one who attended the training missed the deadline.",
      "Some employees in the marketing department missed the deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All employees in the marketing department attended the training) and Statement 2 (No one who attended the training missed the deadline) together imply that all employees in the marketing department did not miss the deadline. Statement 3 (Some employees in the marketing department missed the deadline) directly contradicts this conclusion."
  },
  {
    "id": "gen-33-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are canines.",
      "Some pets are dogs.",
      "Some canines are not pets."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that all dogs are canines, and some pets are dogs (meaning some pets are also canines). It is also consistent that there are some canines (like wolves) that are not pets. All statements can be true simultaneously."
  },
  {
    "id": "gen-33-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful candidates completed an internship.",
      "No one who completed an internship failed the final review.",
      "Some successful candidates failed the final review."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All successful candidates completed an internship) and Statement 2 (No one who completed an internship failed the final review) together imply that all successful candidates did not fail the final review. Statement 3 (Some successful candidates failed the final review) directly contradicts this conclusion."
  },
  {
    "id": "gen-33-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are predators.",
      "Some predators are not big cats.",
      "Every lion is a big cat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that all lions are predators and also big cats. It is also consistent that some predators (e.g., wolves) are not big cats, thus allowing all statements to be true simultaneously."
  },
  {
    "id": "gen-33-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All researchers published their findings.",
      "No one who published their findings kept their data private.",
      "Some researchers kept their data private."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All researchers published their findings) and Statement 2 (No one who published their findings kept their data private) together imply that all researchers did not keep their data private. Statement 3 (Some researchers kept their data private) directly contradicts this conclusion."
  },
  {
    "id": "gen-33-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an artist uses oil paints, then their work is vibrant.",
      "If a work is vibrant, then it sells quickly.",
      "If a work sells quickly, then it is displayed in the main gallery.",
      "No artist who uses oil paints has their work displayed in the main gallery."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If an artist uses oil paints, then their work is vibrant, then it sells quickly, then it is displayed in the main gallery. This implies that if an artist uses oil paints, their work is displayed in the main gallery. Statement 4 (No artist who uses oil paints has their work displayed in the main gallery) directly contradicts this implication."
  },
  {
    "id": "gen-33-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All citizens are entitled to vote.",
      "Some residents are not citizens.",
      "No one under 18 is entitled to vote.",
      "Some residents are under 18."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that some residents are under 18 (Statement 4), and thus not entitled to vote (Statement 3). These residents, not being entitled to vote, cannot be citizens (Statement 1), which is consistent with some residents not being citizens (Statement 2). All statements can be true simultaneously."
  },
  {
    "id": "gen-33-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful products are innovative.",
      "Every innovative product receives positive reviews.",
      "Some products that receive positive reviews are not successful products.",
      "Some successful products do not receive positive reviews."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (All successful products are innovative) and Statement 2 (Every innovative product receives positive reviews) together imply that all successful products receive positive reviews. Statement 4 (Some successful products do not receive positive reviews) directly contradicts this conclusion."
  },
  {
    "id": "gen-33-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All experienced programmers write clean code.",
      "Some programmers do not write clean code.",
      "Every person who writes clean code is detail-oriented.",
      "Some programmers are not detail-oriented."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that experienced programmers write clean code and are detail-oriented (from Statements 1 and 3). Some programmers (e.g., those who are not experienced) might not write clean code (Statement 2) and thus also not be detail-oriented, which is consistent with Statement 4 (Some programmers are not detail-oriented). All statements can be true simultaneously."
  },
  {
    "id": "gen-33-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes follow a strict diet.",
      "If a person follows a strict diet, they maintain peak physical condition.",
      "No person who maintains peak physical condition ever gets injured.",
      "Some professional athletes get injured."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: All professional athletes follow a strict diet, which means they maintain peak physical condition, which means they never get injured. This implies that all professional athletes never get injured. Statement 4 (Some professional athletes get injured) directly contradicts this implication."
  },
  {
    "id": "gen-34-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the finance committee supported the new budget proposal.",
      "No one who supported the new budget proposal voted against the amendment.",
      "Every committee member who did not vote against the amendment cast a final 'yes' vote.",
      "Some members of the finance committee did not cast a final 'yes' vote."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all finance committee members supported the budget. Statement 2 says anyone who supported the budget did not vote against the amendment. Statement 3 says anyone who did not vote against the amendment cast a final 'yes' vote. Together, these statements imply that all finance committee members cast a final 'yes' vote. This directly contradicts Statement 4, which claims some finance committee members did not cast a final 'yes' vote."
  },
  {
    "id": "gen-34-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every team leader must attend the weekly briefing.",
      "Some project managers are team leaders.",
      "No one who attends the weekly briefing is exempt from submitting a progress report.",
      "All project managers submitted a progress report."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1, 2, and 3 imply that some project managers are team leaders, attend the weekly briefing, and are therefore not exempt from submitting a progress report (meaning they must submit one). Statement 4 confirms that all project managers, including those who are not team leaders, submitted a progress report. There is no contradiction."
  },
  {
    "id": "gen-34-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All participants who complete the advanced module are awarded a certificate.",
      "No participant who missed more than two sessions received a certificate.",
      "Every participant who passed the final assessment completed the advanced module.",
      "Some participants in the program missed more than two sessions but still passed the final assessment."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 says participants who passed the final assessment completed the advanced module. Statement 1 says participants who complete the advanced module are awarded a certificate. Therefore, anyone who passed the final assessment must be awarded a certificate. Statement 2 says no participant who missed more than two sessions received a certificate, meaning anyone who received a certificate did not miss more than two sessions. Combining these, anyone who passed the final assessment did not miss more than two sessions. Statement 4 contradicts this by claiming some participants both missed more than two sessions and passed the final assessment."
  },
  {
    "id": "gen-34-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees eligible for premium healthcare benefits have completed the wellness program.",
      "Some employees who completed the wellness program are not eligible for premium healthcare benefits.",
      "No employee who has not completed the wellness program receives any employer-sponsored childcare.",
      "At least one employee receives employer-sponsored childcare."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 3 implies that any employee receiving employer-sponsored childcare must have completed the wellness program. Statement 4 confirms that at least one employee receives childcare, meaning at least one employee has completed the wellness program. This is consistent with Statements 1 and 2, as some employees can complete the wellness program and not be eligible for premium healthcare, while others who complete it might be eligible. There is no contradiction."
  },
  {
    "id": "gen-34-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All researchers who received the innovation grant presented at the annual symposium.",
      "No one who presented at the annual symposium was awarded the distinguished fellowship.",
      "Every researcher awarded the distinguished fellowship has published in a top-tier journal.",
      "Some researchers who published in a top-tier journal did not receive the innovation grant.",
      "Some researchers were awarded both the innovation grant and the distinguished fellowship."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 states that some researchers were awarded both the innovation grant and the distinguished fellowship. Statement 1 indicates that all researchers with the innovation grant presented at the annual symposium. Therefore, these specific researchers who received both awards must have presented at the annual symposium. However, Statement 2 explicitly states that no one who presented at the annual symposium was awarded the distinguished fellowship. This creates a direct contradiction: a group of researchers who both presented at the symposium and received the distinguished fellowship, versus the rule that no such group exists."
  },
  {
    "id": "gen-34-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All researchers who received the advanced fellowship attended the international conference.",
      "No one who attended the international conference published in a non-peer-reviewed journal.",
      "Some junior researchers received the advanced fellowship.",
      "Every senior researcher has published in a non-peer-reviewed journal.",
      "Some junior researchers are also senior researchers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1, 2, and 3 imply that some junior researchers received the advanced fellowship, attended the international conference, and therefore did not publish in a non-peer-reviewed journal. Statements 4 and 5 imply that some junior researchers, who are also senior researchers, have published in a non-peer-reviewed journal and therefore did not attend the international conference. These are two distinct groups of 'some junior researchers', one of whom did not publish in a non-peer-reviewed journal, and another group who did. This scenario creates no logical contradiction."
  },
  {
    "id": "gen-34-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students enrolled in the advanced robotics course are required to complete the capstone project.",
      "No student who completes the capstone project is eligible for the basic coding workshop.",
      "Every student who passed the pre-requisite exam is eligible for the basic coding workshop.",
      "Some students enrolled in the advanced robotics course passed the pre-requisite exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some students enrolled in the advanced robotics course also passed the pre-requisite exam. From Statement 1, all students in the advanced robotics course must complete the capstone project. From Statement 3, every student who passed the pre-requisite exam is eligible for the basic coding workshop. Therefore, the students described in Statement 4 must both complete the capstone project and be eligible for the basic coding workshop. However, Statement 2 explicitly states that no student who completes the capstone project is eligible for the basic coding workshop, creating a direct contradiction."
  },
  {
    "id": "gen-34-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All attendees at the leadership summit are senior executives.",
      "No senior executive is required to submit a quarterly performance report.",
      "Some attendees from partner organizations are not senior executives.",
      "All attendees from partner organizations are required to submit a quarterly performance report."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 imply that all attendees at the leadership summit are senior executives and are not required to submit a quarterly performance report. Statement 4 says that all attendees from partner organizations are required to submit a quarterly performance report. This means that no attendee from a partner organization can also be an attendee at the leadership summit, as that would create a contradiction. Statement 3 (some attendees from partner organizations are not senior executives) is consistent, as it just describes a subset of the partner organization attendees. The absence of an overlap between 'attendees at the leadership summit' and 'attendees from partner organizations' makes all statements compatible."
  },
  {
    "id": "gen-34-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All guests on the guided tour received a complimentary audio guide.",
      "No guest who received a complimentary audio guide purchased a souvenir.",
      "Every guest who visited the ancient artifacts exhibit purchased a souvenir.",
      "Some guests on the guided tour visited the ancient artifacts exhibit."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims some guests on the guided tour also visited the ancient artifacts exhibit. Statement 1 indicates that all guests on the guided tour received a complimentary audio guide. Therefore, these specific guests must have received an audio guide. Statement 3 states that every guest who visited the ancient artifacts exhibit purchased a souvenir, meaning these guests must have purchased a souvenir. Combining these, the guests in question both received an audio guide and purchased a souvenir. However, Statement 2 explicitly says that no guest who received a complimentary audio guide purchased a souvenir. This creates a direct contradiction."
  },
  {
    "id": "gen-34-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All doctors working in the pediatric ward completed their residency in pediatrics.",
      "Some doctors who completed their residency in pediatrics are not general practitioners.",
      "No general practitioner is certified in emergency medicine.",
      "Every doctor certified in emergency medicine completed a trauma fellowship.",
      "Some doctors working in the pediatric ward are certified in emergency medicine."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 5 introduces a group of doctors working in the pediatric ward who are certified in emergency medicine. From Statement 1, these doctors must have completed their residency in pediatrics. From Statement 4, they must also have completed a trauma fellowship. From Statement 3 (contrapositive: if certified in emergency medicine, then not a general practitioner), these doctors are not general practitioners. This means there exist doctors who completed their residency in pediatrics and are not general practitioners, which is consistent with Statement 2. No part of this group's characteristics or any other combination of statements leads to a contradiction."
  },
  {
    "id": "gen-35-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by conservation laws.",
      "No species protected by conservation laws can be legally hunted.",
      "All species that are legally hunted are also endangered.",
      "There is at least one endangered species that is legally hunted."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Assume there is an endangered species that is legally hunted (from Statement 4). Since this species is endangered, Statement 1 implies it is protected by conservation laws. However, Statement 2 states that no species protected by conservation laws can be legally hunted. This leads to the conclusion that the species cannot be legally hunted, which directly contradicts the initial assumption from Statement 4. Removing Statement 2 resolves this by allowing protected species to be legally hunted."
  },
  {
    "id": "gen-35-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses employ a dedicated marketing team.",
      "No business that fails to innovate can be successful.",
      "Some businesses that employ a dedicated marketing team fail to innovate.",
      "Our company is a successful business."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Our company is successful, so it employs a dedicated marketing team (Statement 1) and must innovate (contrapositive of Statement 2). The businesses mentioned in Statement 3 (which employ a marketing team but fail to innovate) would not be successful (from Statement 2). This is consistent with our company being successful and distinct from those businesses."
  },
  {
    "id": "gen-35-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a painting is a genuine Renaissance masterpiece, it is highly valued.",
      "No highly valued painting is ever offered for sale at public auction.",
      "Every painting offered for sale at public auction is a genuine Renaissance masterpiece.",
      "Some paintings that are not highly valued are offered for sale at public auction."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Assume there is a painting (P) that is not highly valued but is offered for sale at a public auction (from Statement 4). From Statement 3, if P is offered at public auction, it must be a genuine Renaissance masterpiece. Then, according to Statement 1, if P is a genuine Renaissance masterpiece, it must be highly valued. This conclusion that P is highly valued directly contradicts the initial premise from Statement 4 that P is not highly valued. Removing Statement 3 breaks the chain, allowing paintings offered at public auction to not necessarily be masterpieces."
  },
  {
    "id": "gen-35-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All athletes who compete professionally adhere to a strict training regimen.",
      "No one who adheres to a strict training regimen avoids healthy eating.",
      "Some athletes who avoid healthy eating do not compete professionally.",
      "Maria adheres to a strict training regimen."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria adheres to a strict training regimen (Statement 4), which means she does not avoid healthy eating (Statement 2). She could be a professional athlete or not; if she is, Statement 1 holds. The athletes mentioned in Statement 3 avoid healthy eating, so by Statement 2, they cannot adhere to a strict training regimen and thus cannot be professional athletes (from Statement 1). This is fully consistent."
  },
  {
    "id": "gen-35-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a person is a certified diver, they have passed an advanced safety course.",
      "No one who has passed an advanced safety course ever ignores crucial dive protocols.",
      "All certified divers are known to ignore crucial dive protocols.",
      "Some people who ignore crucial dive protocols are certified divers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that if a person is a certified diver, they have passed an advanced safety course (Statement 1) and therefore never ignore crucial dive protocols (Statement 2). This means 'Certified Diver' logically leads to 'Does Not Ignore Crucial Dive Protocols'. However, Statement 3 claims 'All certified divers are known to ignore crucial dive protocols'. This directly contradicts the conclusion derived from Statements 1 and 2. Removing Statement 3 resolves this contradiction by allowing certified divers to either ignore or not ignore protocols, depending on other factors."
  },
  {
    "id": "gen-35-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who volunteer for extra shifts receive bonus pay.",
      "If an employee receives bonus pay, they are eligible for the annual recognition award.",
      "No employee who misses more than three workdays is eligible for the annual recognition award.",
      "Some employees who volunteer for extra shifts miss more than three workdays."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Assume there is an employee who volunteers for extra shifts and misses more than three workdays (from Statement 4). From Statement 1, this employee receives bonus pay. From Statement 2, receiving bonus pay makes them eligible for the annual recognition award. However, Statement 3 states that no employee who misses more than three workdays is eligible for the annual recognition award. This means the employee is both eligible and not eligible for the award, a direct contradiction. Removing Statement 3 resolves the inconsistency by allowing employees who miss more than three workdays to still be eligible for the award."
  },
  {
    "id": "gen-35-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a product is locally sourced, it is organic.",
      "Every organic product is packaged in biodegradable materials.",
      "Some products packaged in biodegradable materials are not locally sourced.",
      "No product that is not organic is packaged in biodegradable materials."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 4 implies that if a product is packaged in biodegradable materials, it must be organic. Statement 3 describes products that are packaged in biodegradable materials but are not locally sourced. Such products would be organic (from Statement 4's contrapositive) and thus consistent with Statement 1 (which only states locally sourced implies organic, not vice versa) and Statement 2 (organic implies biodegradable packaging)."
  },
  {
    "id": "gen-35-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every valid driver's license requires passing a vision test.",
      "No one who has passed a vision test has impaired night vision.",
      "If a person has impaired night vision, their driver's license is valid.",
      "Some people with valid driver's licenses have impaired night vision."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Assume there is a person with a valid driver's license and impaired night vision (from Statement 4). From Statement 1, anyone with a valid license must have passed a vision test. From Statement 2, no one who has passed a vision test has impaired night vision. This leads to the conclusion that this person does not have impaired night vision, which contradicts the initial assumption from Statement 4 that they do. Removing Statement 2 resolves this by allowing someone who passed a vision test to still have impaired night vision."
  },
  {
    "id": "gen-35-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a country's economy is stable, its currency is strong.",
      "A country's currency is strong only if it has low inflation.",
      "Every country with a stable economy also experiences high inflation.",
      "Some countries with low inflation have an unstable economy."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a country's economy is stable, its currency is strong (Statement 1), and therefore it must have low inflation (Statement 2). This means 'Stable Economy' logically leads to 'Low Inflation'. However, Statement 3 claims 'Every country with a stable economy also experiences high inflation'. 'Low inflation' and 'high inflation' are mutually exclusive, creating a direct contradiction. Removing Statement 3 resolves this by allowing countries with stable economies to have low inflation."
  },
  {
    "id": "gen-35-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups receive early-stage venture capital funding.",
      "No startup that receives early-stage venture capital funding relies solely on bootstrapping.",
      "If a startup relies solely on bootstrapping, it cannot be a successful startup.",
      "Some startups that rely solely on bootstrapping achieve moderate growth."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 logically imply Statement 3: if a startup is successful, it receives VC funding (Statement 1), and thus does not rely solely on bootstrapping (Statement 2); therefore, if a startup relies solely on bootstrapping, it cannot be successful. Statement 4 describes startups that rely on bootstrapping and achieve moderate growth; these would, by Statement 3, not be successful startups, which is consistent. Moderate growth does not necessarily equate to being a 'successful startup' within the specific definitions given."
  },
  {
    "id": "gen-36-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members attended the workshop.",
      "No one who attended the workshop missed the deadline.",
      "At least one committee member missed the deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no committee members missed the deadline. Statement 1 states that all committee members attended the workshop. Statement 2 states that no one who attended the workshop missed the deadline. Therefore, no committee members missed the deadline. This directly contradicts Statement 3, which claims that at least one committee member missed the deadline."
  },
  {
    "id": "gen-36-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted a strong portfolio.",
      "Some internship candidates are successful applicants.",
      "Some internship candidates submitted a strong portfolio."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that anyone who is a successful applicant submitted a strong portfolio. Statement 2 tells us that some internship candidates are successful applicants. It logically follows that these internship candidates, being successful applicants, must also have submitted a strong portfolio, which is what Statement 3 asserts. Therefore, all three statements can be true at the same time."
  },
  {
    "id": "gen-36-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a robin, then it lays blue eggs.",
      "All birds in this nest are robins.",
      "Some birds in this nest do not lay blue eggs."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all birds in this nest lay blue eggs. Statement 1 says that if a bird is a robin, it lays blue eggs. Statement 2 says all birds in this nest are robins. Therefore, all birds in this nest must lay blue eggs. This directly contradicts Statement 3, which claims some birds in this nest do not lay blue eggs."
  },
  {
    "id": "gen-36-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No certified engineers are untrained.",
      "Some recent hires are untrained.",
      "Some recent hires are not certified engineers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 tells us that no certified engineer is untrained, meaning anyone untrained cannot be a certified engineer. Statement 2 says some recent hires are untrained. From these two, it logically follows that those recent hires who are untrained cannot be certified engineers. Therefore, some recent hires are not certified engineers, which is exactly what Statement 3 states. All three statements can be true simultaneously."
  },
  {
    "id": "gen-36-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a mushroom is edible, it has a white underside.",
      "If a mushroom is poisonous, it does not have a white underside.",
      "Some poisonous mushrooms are edible."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no edible mushroom can be poisonous. Statement 1 says if a mushroom is edible, it has a white underside. Statement 2 says if a mushroom is poisonous, it does not have a white underside. This means any mushroom with a white underside cannot be poisonous. Therefore, if a mushroom is edible, it must have a white underside, and thus it cannot be poisonous. This contradicts Statement 3, which claims some poisonous mushrooms are edible."
  },
  {
    "id": "gen-36-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All qualified candidates possess a master's degree.",
      "Some applicants do not possess a master's degree.",
      "Some applicants are not qualified candidates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 tells us that all qualified candidates possess a master's degree. Statement 2 says that some applicants do not possess a master's degree. From these two, it logically follows that those applicants who do not possess a master's degree cannot be qualified candidates. Therefore, some applicants are not qualified candidates, which is exactly what Statement 3 states. All three statements can be true simultaneously."
  },
  {
    "id": "gen-36-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Unless an employee is on vacation, they must attend the quarterly meeting.",
      "No team leads attended the quarterly meeting.",
      "Some team leads are not on vacation."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that all team leads are on vacation. Statement 1 implies that if an employee did not attend the quarterly meeting, they must be on vacation. Statement 2 states that no team leads attended the quarterly meeting. Therefore, all team leads must be on vacation. This directly contradicts Statement 3, which claims some team leads are not on vacation."
  },
  {
    "id": "gen-36-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own waterproof boots.",
      "Some people who own waterproof boots are not members of the mountaineering club.",
      "Some members of the hiking club are not members of the mountaineering club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 tells us that all members of the hiking club own waterproof boots. Statement 2 states that some individuals who own waterproof boots are not members of the mountaineering club. This leaves open the possibility that some of these individuals who own waterproof boots but are not in the mountaineering club are also members of the hiking club. If this is the case, then Statement 3 could also be true, and there is no contradiction."
  },
  {
    "id": "gen-36-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of this building have a parking permit.",
      "No one with a parking permit uses the guest lot.",
      "Some residents of this building use the guest lot.",
      "If a person lives in this city, they are a resident of this building."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together logically imply that no residents of this building use the guest lot. Statement 1 states that all residents have a parking permit, and Statement 2 states that no one with a parking permit uses the guest lot. Therefore, it must be true that no resident of this building uses the guest lot. This directly contradicts Statement 3, which claims that some residents of this building use the guest lot. Removing any other statement does not resolve this core contradiction."
  },
  {
    "id": "gen-36-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No employees working on Project X can access the confidential files.",
      "All new hires are working on Project X.",
      "Some new hires do not access confidential files."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 tells us that no employee working on Project X can access confidential files. Statement 2 says all new hires are working on Project X. From these two, it logically follows that all new hires cannot access confidential files. If all new hires cannot access confidential files, then it is necessarily true that some new hires do not access confidential files, which is what Statement 3 states (assuming there are new hires). All three statements can be true simultaneously."
  },
  {
    "id": "gen-37-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project is approved, it receives funding.",
      "Every project that receives funding must pass a final review.",
      "No project that passes a final review is started before the new year.",
      "Project X was approved and started before the new year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says if a project is approved, it receives funding. Statement 2 says if it receives funding, it passes a final review. Statement 3 says if it passes a final review, it is not started before the new year. Thus, if a project is approved, it is not started before the new year. Statement 4 contradicts this by stating Project X was approved AND started before the new year."
  },
  {
    "id": "gen-37-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates completed the advanced training module.",
      "If a candidate completed the advanced training module, they received a certificate.",
      "No candidate who received a certificate failed the final interview.",
      "John received a certificate.",
      "John did not complete the advanced training module."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 indicate that completing the advanced training module is a sufficient condition for receiving a certificate. However, they do not state that it is a necessary condition. John could have received a certificate through other means without having completed the advanced training module, making all statements consistent."
  },
  {
    "id": "gen-37-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in a master's program, they must have a bachelor's degree.",
      "Every student with a bachelor's degree is eligible for advanced scholarships.",
      "No student eligible for advanced scholarships is required to pay tuition fees.",
      "Some students in the master's program are required to pay tuition fees."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that enrolling in a master's program implies having a bachelor's degree. Statement 2 indicates that having a bachelor's degree implies eligibility for advanced scholarships. Statement 3 indicates that eligibility for advanced scholarships implies not being required to pay tuition fees. Therefore, all students in the master's program are not required to pay tuition fees. Statement 4, which says some students in the master's program are required to pay tuition fees, directly contradicts this conclusion."
  },
  {
    "id": "gen-37-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who travel internationally must have a valid passport.",
      "If an employee has a valid passport, they are enrolled in the travel insurance plan.",
      "No employee enrolled in the travel insurance plan is exempt from the annual health check.",
      "John is an employee who does not travel internationally.",
      "John is exempt from the annual health check."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 form a chain: if an employee travels internationally, they have a passport, are enrolled in insurance, and therefore are not exempt from the health check. However, Statements 4 and 5 describe John, who does not travel internationally. The logical chain does not apply to employees who do not travel internationally, so John can consistently be exempt from the annual health check."
  },
  {
    "id": "gen-37-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A candidate is hired only if they pass the final interview.",
      "If a candidate passes the final interview, they must have excellent references.",
      "No candidate with excellent references has outstanding loan defaults.",
      "Some candidates who were hired have outstanding loan defaults."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 means that if a candidate is hired, they passed the final interview. Statement 2 means that if they passed the final interview, they have excellent references. Statement 3 means that if they have excellent references, they do not have outstanding loan defaults. Therefore, if a candidate is hired, they do not have outstanding loan defaults. Statement 4, which claims some hired candidates DO have outstanding loan defaults, directly contradicts this."
  },
  {
    "id": "gen-37-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who complete the thesis project graduate with honors.",
      "If a student graduates with honors, they receive a special award.",
      "Some students who receive a special award did not complete the thesis project."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 combine to mean that all students who complete the thesis project receive a special award. This does not mean that only students who complete the thesis project receive a special award. Therefore, it is perfectly consistent for some students to receive a special award without having completed the thesis project, as stated in Statement 3."
  },
  {
    "id": "gen-37-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird migrates south for the winter, it must be a warm-weather species.",
      "All warm-weather species build open nests.",
      "No bird that builds an open nest tolerates cold temperatures.",
      "Some birds that migrate south for the winter tolerate cold temperatures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 means if a bird migrates south, it is a warm-weather species. Statement 2 means if it's a warm-weather species, it builds an open nest. Statement 3 means if it builds an open nest, it does not tolerate cold temperatures. Therefore, if a bird migrates south for the winter, it does not tolerate cold temperatures. Statement 4, which says some birds that migrate south for the winter DO tolerate cold temperatures, directly contradicts this."
  },
  {
    "id": "gen-37-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A candidate is eligible for the position only if they have a professional license.",
      "If a candidate has a professional license, they must undergo a background check.",
      "Every candidate who undergoes a background check passes the initial screening.",
      "John passed the initial screening, but does not have a professional license."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 create a chain where eligibility for the position leads to passing the initial screening. However, passing the initial screening does not necessarily mean a candidate is eligible for the position or has a professional license. John could have passed the initial screening through a different process or capacity without holding a professional license, making all statements consistent."
  },
  {
    "id": "gen-37-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the exam, they receive a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the program passed the exam.",
      "Some students in the program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 means every student in the program passed the exam. Statement 1 means if a student passed the exam, they received a certificate. Statement 2 means if a student received a certificate, they did not miss more than three classes. Thus, every student in the program did not miss more than three classes. Statement 4, which says some students in the program DID miss more than three classes, directly contradicts this."
  },
  {
    "id": "gen-37-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful research proposals required significant inter-departmental collaboration.",
      "If a project involved significant inter-departmental collaboration, then it was assigned a dedicated project manager.",
      "No project assigned a dedicated project manager experienced budget overruns.",
      "Some projects that experienced budget overruns did not require significant inter-departmental collaboration."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 2 and 3 combine to mean that if a project involved significant inter-departmental collaboration, it did not experience budget overruns. The contrapositive of this is: if a project experienced budget overruns, then it did NOT require significant inter-departmental collaboration. Statement 4, saying some projects with budget overruns did not require collaboration, is perfectly consistent with this conclusion."
  },
  {
    "id": "gen-38-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who receive bonuses meet their quotas.",
      "No employee who meets their quota misses deadlines.",
      "Some employees who receive bonuses miss deadlines."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all bonus recipients meet quotas, and Statement 2 says no one meeting quotas misses deadlines. Therefore, all bonus recipients do not miss deadlines. Statement 3 directly contradicts this conclusion."
  },
  {
    "id": "gen-38-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student attending the workshop submitted an RSVP.",
      "No one who submitted an RSVP was denied entry.",
      "Some students who were denied entry still attended the workshop."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that no student attending the workshop was denied entry. Statement 3 claims that some students who were denied entry still attended the workshop, which is a direct contradiction."
  },
  {
    "id": "gen-38-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Some residents of this building own pets.",
      "Every resident who owns a pet pays an extra fee.",
      "No resident of this building pays an extra fee."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates some residents own pets, and Statement 2 says all pet-owning residents pay an extra fee. This means some residents pay an extra fee. Statement 3, however, asserts that no resident pays an extra fee, which contradicts the derived conclusion."
  },
  {
    "id": "gen-38-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an artwork is ancient, it is protected by law.",
      "No artwork protected by law can be sold publicly.",
      "All ancient artworks can be sold publicly."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no ancient artwork can be sold publicly. Statement 3 claims that all ancient artworks can be sold publicly, creating a direct contradiction."
  },
  {
    "id": "gen-38-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Not all birds can fly.",
      "Every bird has feathers.",
      "All creatures with feathers can fly."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 2 and 3 establish a logical chain: Every bird has feathers, and all creatures with feathers can fly. This leads to the conclusion that every bird can fly. Statement 1, which states that not all birds can fly, directly contradicts this conclusion."
  },
  {
    "id": "gen-38-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All engineers are skilled in mathematics.",
      "Some skilled individuals are not engineers.",
      "Maria is skilled in mathematics."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Maria could be an engineer, or she could be a skilled individual who is not an engineer but is still skilled in mathematics. No logical contradiction arises."
  },
  {
    "id": "gen-38-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful politician is charismatic.",
      "Some charismatic individuals are not politicians.",
      "No one who avoids public speaking is charismatic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. There can be successful politicians who are charismatic. There can be charismatic people who are not politicians. And people who avoid public speaking are not charismatic, thus they are neither charismatic politicians nor charismatic non-politicians. No contradiction is formed."
  },
  {
    "id": "gen-38-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All books in the fantasy genre have magic elements.",
      "Some books with magic elements are not in the fantasy genre.",
      "No book in the historical fiction genre has magic elements."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. It is possible for all fantasy books to have magic elements, for some non-fantasy books (e.g., science fiction) to also have magic elements, and for historical fiction books to have no magic elements. These scenarios do not conflict."
  },
  {
    "id": "gen-38-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a recipe uses spices, it is flavorful.",
      "Some flavorful recipes do not use spices.",
      "Every dessert recipe is flavorful.",
      "No dessert recipe uses spices."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. It's possible for recipes using spices to be flavorful, for some flavorful recipes to not use spices, and for all dessert recipes to be flavorful but not use spices. These conditions can all hold true simultaneously."
  },
  {
    "id": "gen-38-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All qualified candidates possess strong communication skills.",
      "Some individuals with strong communication skills are not qualified candidates.",
      "No candidate who lacks experience is qualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. It is possible for all qualified candidates to have strong communication skills, for some individuals with strong communication skills to not be qualified, and for only experienced candidates to be qualified. No logical contradiction arises from these assertions."
  },
  {
    "id": "gen-39-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "All innovative thinkers take risks.",
      "No one who takes risks is afraid of failure.",
      "Some successful entrepreneurs are afraid of failure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all successful entrepreneurs are innovative thinkers. From Statement 2, all innovative thinkers take risks. From Statement 3, no one who takes risks is afraid of failure. Therefore, it must be true that no successful entrepreneur is afraid of failure. This directly contradicts Statement 4, which claims some successful entrepreneurs are afraid of failure."
  },
  {
    "id": "gen-39-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes are dedicated trainers.",
      "Some dedicated trainers are not Olympic medalists.",
      "No professional athlete is an Olympic medalist.",
      "At least one Olympic medalist is not a dedicated trainer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. It is possible for all professional athletes to be dedicated trainers (Statement 1), with none of them being Olympic medalists (Statement 3). There can also be dedicated trainers who are not medalists (Statement 2), and medalists who are not dedicated trainers (Statement 4). For example, a professional athlete is a dedicated trainer but not a medalist; a non-athlete dedicated trainer is not a medalist; a medalist is not a dedicated trainer."
  },
  {
    "id": "gen-39-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "Any tropical species needs a humid environment.",
      "Plants that require a humid environment are always sensitive to direct sunlight.",
      "No plant sensitive to direct sunlight should be placed on a south-facing windowsill.",
      "There are some plants that require daily watering and can be placed on a south-facing windowsill."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 1 says that daily watering implies tropical species. Statement 2 says tropical species imply a humid environment. Statement 3 says a humid environment implies sensitivity to direct sunlight. Statement 4 says sensitivity to direct sunlight implies not on a south-facing windowsill. Chaining these, a plant that requires daily watering should not be placed on a south-facing windowsill. Statement 5 directly contradicts this by stating there are some plants that require daily watering and can be placed on a south-facing windowsill."
  },
  {
    "id": "gen-39-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club participate in tournaments.",
      "Some participants in tournaments do not play speed chess.",
      "Every member of the chess club plays speed chess."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Chess club members all participate in tournaments (Statement 1) and all play speed chess (Statement 3). The chess club members could be a subset of tournament participants who play speed chess. Statement 2 allows for other tournament participants (who are not chess club members) to exist and not play speed chess, which does not create a contradiction."
  },
  {
    "id": "gen-39-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid arguments have true premises.",
      "All arguments with true premises are sound arguments.",
      "No sound argument is fallacious.",
      "Some inductive arguments are valid arguments.",
      "All inductive arguments are fallacious."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "From Statement 1, valid arguments have true premises. From Statement 2, arguments with true premises are sound arguments. From Statement 3, no sound argument is fallacious. Therefore, it must be true that no valid argument is fallacious. Statement 4 says some inductive arguments are valid arguments. For these specific inductive arguments, it must follow that they are not fallacious. This directly contradicts Statement 5, which claims all inductive arguments are fallacious."
  },
  {
    "id": "gen-39-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "Only students who have passed algebra are eligible for geometry.",
      "Some students who are eligible for geometry do not enroll in advanced calculus.",
      "All students who passed algebra also passed pre-calculus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statement 1 means enrolling in advanced calculus requires passing algebra. Statement 2 means being eligible for geometry requires passing algebra. Statement 4 means passing algebra requires passing pre-calculus. Statement 3 indicates that there's a group of students eligible for geometry who don't take advanced calculus. These students would have passed algebra and pre-calculus, but their choice not to enroll in advanced calculus creates no inconsistency."
  },
  {
    "id": "gen-39-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds of paradise are native to New Guinea.",
      "No species native to New Guinea can survive in sub-zero temperatures.",
      "Every bird at the city zoo is a bird of paradise.",
      "Some birds at the city zoo can survive in sub-zero temperatures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every bird at the city zoo is a bird of paradise. Statement 1 states that all birds of paradise are native to New Guinea. Statement 2 indicates that no species native to New Guinea can survive in sub-zero temperatures. Therefore, it must be true that no bird at the city zoo can survive in sub-zero temperatures. This directly contradicts Statement 4, which claims some birds at the city zoo can survive in sub-zero temperatures."
  },
  {
    "id": "gen-39-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend the weekly video conference.",
      "Some employees who attend the weekly video conference do not receive benefits.",
      "Every employee who receives benefits has signed a non-disclosure agreement.",
      "No employee who signed a non-disclosure agreement works remotely."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Employees who work remotely attend the video conference (Statement 1). Those receiving benefits sign an NDA (Statement 3), and those with NDAs do not work remotely (Statement 4). This implies that remote employees do not receive benefits, which is consistent with Statement 2 (some video conference attendees, such as remote employees, do not receive benefits)."
  },
  {
    "id": "gen-39-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful business venture expands its market share.",
      "Businesses that expand their market share inevitably increase their revenue.",
      "Any business that increases its revenue invests heavily in research and development.",
      "No business that invests heavily in research and development has a low profit margin.",
      "Some successful business ventures have a low profit margin."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "From Statement 1, successful business ventures expand market share. From Statement 2, expanding market share increases revenue. From Statement 3, increasing revenue leads to heavy investment in research and development. From Statement 4, heavy investment in research and development means no low profit margin. Therefore, it must be true that no successful business venture has a low profit margin. This directly contradicts Statement 5, which asserts that some successful business ventures have a low profit margin."
  },
  {
    "id": "gen-39-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique maps are highly valuable.",
      "Some highly valuable items are not sold at auction.",
      "No item sold at auction is considered worthless.",
      "At least one antique map is not sold at auction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statement 1 makes antique maps a subset of highly valuable items. Statement 4 indicates that some of these antique maps are not sold at auction. This is compatible with Statement 2 (some highly valuable items are not sold at auction, and these could be the antique maps mentioned in Statement 4). Statement 3, about items sold at auction not being worthless, introduces no contradiction with the other statements."
  },
  {
    "id": "gen-40-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant earns a five-star rating, its head chef is highly acclaimed.",
      "Every restaurant with a highly acclaimed head chef receives extensive media coverage.",
      "No restaurant receiving extensive media coverage struggles with reservations.",
      "Some restaurants that earn a five-star rating regularly struggle with reservations."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a restaurant earns a five-star rating, it does not struggle with reservations. Statement 4 directly contradicts this by asserting that some restaurants with a five-star rating *do* struggle with reservations. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-40-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All software applications with cloud integration require a stable internet connection.",
      "If an application requires a stable internet connection, it performs frequent data backups.",
      "Some applications that perform frequent data backups do not have cloud integration.",
      "Not every software application performs frequent data backups."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all software applications with cloud integration perform frequent data backups. Statement 3 (some applications performing backups lack cloud integration) is consistent with this, as other types of applications could perform backups. Statement 4 (not every application performs frequent data backups) is also consistent, as some applications might not require backups."
  },
  {
    "id": "gen-40-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a nation prioritizes environmental sustainability, it invests heavily in renewable energy.",
      "No nation that invests heavily in renewable energy maintains a high carbon footprint.",
      "No nation that has a low carbon footprint avoids international climate treaties.",
      "There is at least one nation that prioritizes environmental sustainability and avoids international climate treaties."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a nation prioritizes environmental sustainability, then it does not avoid international climate treaties. Statement 4 directly contradicts this by asserting that there is at least one nation that prioritizes environmental sustainability *and* avoids international climate treaties. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-40-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant in the marathon completed the training regimen.",
      "If a participant completed the training regimen, they received a finisher's medal.",
      "Some people who received a finisher's medal did not complete the training regimen.",
      "Not all people who received a finisher's medal were participants in the marathon."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all marathon participants received a finisher's medal. Statement 3 (some people who received medals didn't complete the regimen) is consistent, as these individuals might not be marathon participants. Statement 4 (not all medal recipients were marathon participants) is also consistent. All statements can be true simultaneously."
  },
  {
    "id": "gen-40-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered voters received an official ballot.",
      "No person who received an official ballot failed to cast their vote.",
      "Any person who was a registered voter did not fail to cast their vote.",
      "Some registered voters failed to cast their vote."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that all registered voters did not fail to cast their vote. Statement 3 explicitly reiterates this rule. Statement 4 directly contradicts this established rule by asserting that some registered voters *did* fail to cast their vote. Removing Statement 4 is the only way to resolve this direct inconsistency, as the rule is supported by multiple other statements."
  },
  {
    "id": "gen-40-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "All animals with opposable thumbs are capable of complex tool use.",
      "Some animals capable of complex tool use are not primates.",
      "Not every animal with opposable thumbs is a primate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all primates are capable of complex tool use. Statement 3 (some tool-users are not primates) is consistent, as other animals could use tools. Statement 4 (not every animal with opposable thumbs is a primate) is also consistent, as some animals might have opposable thumbs but are not classified as primates. All statements can be true simultaneously."
  },
  {
    "id": "gen-40-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who attended the seminar submitted a feedback form.",
      "If a student submitted a feedback form, they received a certificate of completion.",
      "No student who received a certificate of completion was marked absent for any session.",
      "Every student who attended the seminar was marked absent for at least one session."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that every student who attended the seminar was *not* marked absent for any session. Statement 4 directly contradicts this by stating that *every* student who attended the seminar *was* marked absent for at least one session. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-40-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document is a legal contract, it requires a witness signature.",
      "All documents requiring a witness signature must be notarized.",
      "Some notarized documents are not legal contracts.",
      "Not every document that is notarized is a legal contract."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all legal contracts must be notarized. Statements 3 and 4 convey the same idea: some notarized documents are not legal contracts. This is consistent with the derived conclusion, as other types of documents can also be notarized without being legal contracts (e.g., birth certificates)."
  },
  {
    "id": "gen-40-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All plants in the botanical garden are labeled with their species.",
      "If a plant is labeled with its species, it has been genetically sequenced.",
      "No plant that has been genetically sequenced shows unusual growth patterns.",
      "There is a plant in the botanical garden that shows unusual growth patterns."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that no plant in the botanical garden shows unusual growth patterns. Statement 4 directly contradicts this by asserting that there is a plant in the botanical garden that *does* show unusual growth patterns. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-40-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an appliance is energy-efficient, it has a high-efficiency motor.",
      "Every appliance with a high-efficiency motor carries an eco-friendly certification.",
      "Some appliances that carry an eco-friendly certification are not energy-efficient.",
      "Not all appliances that have a high-efficiency motor are energy-efficient."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all energy-efficient appliances carry an eco-friendly certification. Statement 3 (some eco-certified appliances are not energy-efficient) is consistent, as they might have other eco-friendly features. Statement 4 (not all appliances with high-efficiency motors are energy-efficient) is also consistent, as a high-efficiency motor doesn't guarantee overall energy efficiency for the entire appliance. All statements can be true simultaneously."
  },
  {
    "id": "gen-41-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are diligent problem-solvers.",
      "No diligent problem-solvers are easily discouraged.",
      "Some engineers are easily discouraged."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that 'All engineers are not easily discouraged.' This directly contradicts Statement 3, which asserts that 'Some engineers are easily discouraged.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-41-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional musicians can read sheet music.",
      "Some people who can read sheet music are not professional musicians.",
      "Liam is a person who can read sheet music."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Liam could be a professional musician, or he could be one of the people who can read sheet music but is not a professional musician, as allowed by Statement 2."
  },
  {
    "id": "gen-41-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a document contains a security breach, it is immediately archived.",
      "All documents with critical errors are security breaches.",
      "No documents with critical errors are immediately archived."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that 'All documents with critical errors are immediately archived.' This contradicts Statement 3, which claims that 'No documents with critical errors are immediately archived.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-41-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Some birds build nests in trees.",
      "All birds that build nests in trees are excellent parents.",
      "The robin is an excellent parent."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. The robin could be a bird that builds nests in trees and is an excellent parent, or it could be an excellent parent that does not build nests in trees, which is not excluded by the other statements."
  },
  {
    "id": "gen-41-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the science club attended the regional fair.",
      "No one who attended the regional fair missed more than one class.",
      "Some members of the science club missed more than one class."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that 'Every member of the science club missed no more than one class.' This directly contradicts Statement 3, which asserts that 'Some members of the science club missed more than one class.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-41-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires very little water.",
      "Some plants that require very little water are not succulents.",
      "All desert plants require very little water."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Desert plants could be succulents (and thus require little water), or they could be among the non-succulent plants that still require very little water, as allowed by Statement 2."
  },
  {
    "id": "gen-41-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who completed the training received a bonus.",
      "No employee who received a bonus failed the final assessment.",
      "Not all employees who completed the training passed the final assessment."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that 'All employees who completed the training passed the final assessment.' This contradicts Statement 3, which states that 'Not all employees who completed the training passed the final assessment' (meaning some failed). Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-41-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "Some animals with opposable thumbs are not primates.",
      "No reptiles have opposable thumbs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Primates have opposable thumbs. Some non-primates also have them. Reptiles are simply a group that lacks them, which does not create any conflict with the other statements."
  },
  {
    "id": "gen-41-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All candidates interviewed for the position submitted a resume.",
      "All candidates who submitted a resume also submitted a cover letter.",
      "Some candidates interviewed for the position did not submit a cover letter."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that 'All candidates interviewed for the position submitted a cover letter.' This directly contradicts Statement 3, which asserts that 'Some candidates interviewed for the position did not submit a cover letter.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-41-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a product is on sale, its price has been reduced.",
      "All products with a reduced price are clearly marked.",
      "Some products not on sale are clearly marked."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statements 1 and 2 imply that 'All products on sale are clearly marked.' Statement 3 states that some products not on sale are clearly marked, which is possible and does not contradict any other information."
  },
  {
    "id": "gen-42-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is endorsed by the committee, they must be highly qualified.",
      "Only highly qualified candidates are approved for the ballot.",
      "Every candidate approved for the ballot is subject to a background check.",
      "No candidate subject to a background check can have undeclared conflicts of interest.",
      "Some candidates endorsed by the committee have undeclared conflicts of interest."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a chain: if a candidate is endorsed by the committee, they are highly qualified; if highly qualified, they are approved for the ballot; if approved, they are subject to a background check; and if subject to a background check, they cannot have undeclared conflicts of interest. This logically concludes that any candidate endorsed by the committee has no undeclared conflicts of interest. Statement 5 directly contradicts this by asserting that some candidates endorsed by the committee *do* have undeclared conflicts of interest."
  },
  {
    "id": "gen-42-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a program is well-funded, it can afford experienced instructors.",
      "No program with experienced instructors has a low student success rate.",
      "Every program with a high student success rate receives positive media attention.",
      "All programs receiving positive media attention attract more applicants.",
      "Some well-funded programs do not attract more applicants."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 create a logical chain: if a program is well-funded, it can afford experienced instructors; if it has experienced instructors, it does not have a low student success rate (implying a high success rate); if it has a high success rate, it receives positive media attention; and if it receives positive media attention, it attracts more applicants. This chain implies that all well-funded programs attract more applicants. Statement 5 directly contradicts this by claiming some well-funded programs do not attract more applicants."
  },
  {
    "id": "gen-42-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the training program are eligible for certification.",
      "No participant eligible for certification can skip the final assessment.",
      "All participants who did not skip the final assessment attended all mandatory workshops.",
      "No participant who attended all mandatory workshops is required to retake the program.",
      "Sarah completed the training program but is required to retake the program."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: if a participant completed the training program, they are eligible for certification (1); if eligible, they cannot skip the final assessment (2); if they did not skip the final assessment, they attended all mandatory workshops (3); and if they attended all mandatory workshops, they are not required to retake the program (4). This means that any participant who completed the training program is not required to retake the program. Statement 5 contradicts this by stating that Sarah, who completed the training program, *is* required to retake the program."
  },
  {
    "id": "gen-42-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A student is eligible for the scholarship only if they maintain a GPA of 3.5 or higher.",
      "To maintain a GPA of 3.5 or higher, a student must enroll in advanced courses.",
      "No student enrolled in advanced courses can work full-time.",
      "All students who do not work full-time complete their degree in four years.",
      "Some students eligible for the scholarship do not complete their degree in four years."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: if a student is eligible for the scholarship, they maintain a 3.5 GPA; if they maintain a 3.5 GPA, they enroll in advanced courses; if they enroll in advanced courses, they cannot work full-time; and if they do not work full-time, they complete their degree in four years. This chain implies that all students eligible for the scholarship complete their degree in four years. Statement 5 directly contradicts this by asserting that some students eligible for the scholarship do not complete their degree in four years."
  },
  {
    "id": "gen-42-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car manufactured after 2010 has GPS navigation.",
      "No car with GPS navigation requires manual map reading.",
      "All vintage vehicles require manual map reading.",
      "My car was manufactured after 2010 and is a vintage vehicle."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 form a chain: if a car was manufactured after 2010, it has GPS navigation; if it has GPS navigation, it does not require manual map reading. This means any car manufactured after 2010 does not require manual map reading. Statement 3 indicates that all vintage vehicles *do* require manual map reading. Statement 4 describes a car that is both manufactured after 2010 AND is a vintage vehicle, creating a contradiction since it must both not require manual map reading (due to being post-2010) and require manual map reading (due to being vintage)."
  },
  {
    "id": "gen-43-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who complete the internship receive a recommendation.",
      "No one who receives a recommendation needs further training.",
      "Some students who complete the internship require further training."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all students who complete the internship do not need further training. Statement 3 claims that some students who complete the internship *do* require further training, which creates a direct contradiction. Removing Statement 3 resolves this inconsistency."
  },
  {
    "id": "gen-43-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in this sanctuary migrate south for winter.",
      "Some birds that migrate south are not native to this region.",
      "There is at least one bird in this sanctuary that is native to this region."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all birds in the sanctuary to migrate, for some migrating birds to not be native, and for some birds in the sanctuary to be native. The native birds from the sanctuary would be part of the group that migrates south, and the non-native migrating birds would be a separate group. No contradiction arises."
  },
  {
    "id": "gen-43-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every fruit sold at the market is locally grown.",
      "No imported produce is locally grown.",
      "Some fruit sold at the market is imported."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all fruit sold at the market is locally grown. Statement 2 states that no imported produce is locally grown. Together, these statements imply that no fruit sold at the market can be imported. Statement 3 directly contradicts this by stating that some fruit sold at the market *is* imported. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student is eligible for the scholarship, they have a GPA above 3.5.",
      "Some students with a GPA above 3.5 are not eligible for the scholarship.",
      "There is at least one student eligible for the scholarship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes a necessary condition for scholarship eligibility. Statement 2 confirms that having a high GPA is not a sufficient condition, which is perfectly compatible. Statement 3 simply confirms the existence of at least one eligible student, which is also consistent with the conditions set. All statements can be true simultaneously."
  },
  {
    "id": "gen-43-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an artwork is a masterpiece, then it is priceless.",
      "All priceless artworks are displayed in a museum.",
      "Some artworks displayed in a museum are not masterpieces.",
      "No masterpiece is displayed in a museum."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together logically imply that every artwork that is a masterpiece is displayed in a museum. Statement 4 directly contradicts this conclusion by asserting that no masterpiece is displayed in a museum. Statement 3 is consistent and does not create the contradiction. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful entrepreneurs are risk-takers.",
      "Some risk-takers are not entrepreneurs.",
      "There is at least one successful entrepreneur who is also a careful planner.",
      "No careful planner is a risk-taker."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 tells us there is at least one successful entrepreneur who is also a careful planner. According to Statement 1, this specific entrepreneur must also be a risk-taker. Therefore, this individual is both a careful planner and a risk-taker. However, Statement 4 asserts that no careful planner is a risk-taker, which directly contradicts this finding. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a book is a bestseller, it receives critical acclaim.",
      "Some books that receive critical acclaim are not bestsellers.",
      "Not all books are bestsellers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 sets a conditional relationship: being a bestseller guarantees critical acclaim. Statement 2 clarifies that critical acclaim does not guarantee bestseller status, which is compatible. Statement 3 simply states that not every book is a bestseller, which is also consistent with the other two statements. All statements can be true simultaneously."
  },
  {
    "id": "gen-43-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who attend the annual retreat are eligible for a bonus.",
      "No employee eligible for a bonus works in the marketing department.",
      "Some employees who work in the marketing department attend the annual retreat.",
      "No employee who attends the annual retreat works in the sales department."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no employee who attends the annual retreat works in the marketing department. Statement 3 directly contradicts this by claiming some employees who work in the marketing department *do* attend the annual retreat. Statement 4 is irrelevant to this specific contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All reputable news sources verify their facts.",
      "Some sources that verify their facts are not reputable news sources.",
      "No biased source verifies its facts.",
      "There is at least one biased source."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 defines a characteristic of reputable sources. Statement 2 shows that verification is not exclusive to reputable sources, which is consistent. Statements 3 and 4 describe a separate category of sources (biased) that do not verify facts. These groups can coexist without contradiction; the non-reputable fact-verifiers are distinct from the biased, non-verifying sources."
  },
  {
    "id": "gen-43-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant in the marathon completed the race within the time limit.",
      "No one who completed the race within the time limit felt completely rested afterwards.",
      "Some participants in the marathon felt completely rested afterwards."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all participants in the marathon did not feel completely rested afterwards. Statement 3 asserts that some participants in the marathon *did* feel completely rested afterwards. This creates a direct contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-44-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student passes the final exam, they are eligible for the scholarship.",
      "No student who missed more than three classes passes the final exam.",
      "All students eligible for the scholarship attend the awards ceremony.",
      "Some students who attended the awards ceremony missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 indicates that if a student missed more than three classes, they did not pass the final exam. From Statement 1, if a student did not pass the final exam, they are not eligible for the scholarship. From Statement 3, if a student is not eligible for the scholarship, they do not attend the awards ceremony. Therefore, if a student missed more than three classes, they do not attend the awards ceremony. This directly contradicts Statement 4, which claims that some students who attended the awards ceremony also missed more than three classes."
  },
  {
    "id": "gen-44-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are excellent strategists.",
      "Every excellent strategist is also a critical thinker.",
      "No critical thinker is easily distracted.",
      "Some members of the chess club are easily distracted."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all members of the chess club are excellent strategists. From Statement 2, all excellent strategists are critical thinkers. From Statement 3, no critical thinker is easily distracted. Therefore, it follows that no member of the chess club is easily distracted. Statement 4, which asserts that some members of the chess club are easily distracted, directly contradicts this conclusion."
  },
  {
    "id": "gen-44-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "All tropical species thrive in humid climates.",
      "Plants that thrive in humid climates never have thick, waxy leaves.",
      "There are some plants with thick, waxy leaves that require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that if a plant requires daily watering, it is a tropical species. Statement 2 says all tropical species thrive in humid climates. Statement 3 says plants that thrive in humid climates never have thick, waxy leaves. Combining these, it logically follows that any plant requiring daily watering does not have thick, waxy leaves. This directly contradicts Statement 4, which claims that some plants with thick, waxy leaves require daily watering."
  },
  {
    "id": "gen-44-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All artifacts from the ancient city are made of copper.",
      "No object made of copper shows signs of rust.",
      "If an object was buried in the salty soil, it shows signs of rust.",
      "Some artifacts from the ancient city were buried in the salty soil."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 tells us all artifacts from the ancient city are made of copper. Statement 2 tells us no object made of copper shows signs of rust. Thus, no artifact from the ancient city shows signs of rust. Statement 3 tells us that if an object was buried in salty soil, it shows signs of rust. This implies that no object showing signs of rust could have been buried in salty soil. Therefore, no artifact from the ancient city could have been buried in salty soil, which directly contradicts Statement 4."
  },
  {
    "id": "gen-44-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents with pets must register them annually.",
      "No resident who registers their pet annually incurs a late fee.",
      "All residents who failed to update their address incurred a late fee.",
      "Some residents with pets failed to update their address."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all residents with pets register them annually. From Statement 2, no resident who registers their pet annually incurs a late fee. It follows that no resident with pets incurs a late fee. Statement 3 says that all residents who failed to update their address incurred a late fee. This means that any resident who failed to update their address must have incurred a late fee. Since residents with pets do not incur late fees, it must be true that no resident with pets failed to update their address. This contradicts Statement 4."
  },
  {
    "id": "gen-44-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups have innovative products.",
      "Some innovative products are not widely adopted.",
      "If a product is widely adopted, it generates high revenue.",
      "Startup X has an innovative product but does not generate high revenue."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Startup X, with its innovative product and lack of high revenue, aligns with the possibility of its product not being widely adopted (by the contrapositive of Statement 3: if it doesn't generate high revenue, it isn't widely adopted). This is consistent with Statement 2, which allows for some innovative products to not be widely adopted. Statement 1 describes successful startups, and Startup X is not stated to be successful, so it does not create a contradiction."
  },
  {
    "id": "gen-44-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All research papers require extensive data analysis.",
      "Some published articles do not require extensive data analysis.",
      "No thesis that required extensive data analysis was rejected.",
      "Some theses are published articles."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 indicates that some theses are published articles. Statement 2 states that some published articles do not require extensive data analysis. It is possible that the theses mentioned in Statement 4 are among the published articles that do not require extensive data analysis. If so, they would not be research papers (due to Statement 1) and Statement 3 (about rejection) would not apply to them directly, as they did not require extensive data analysis. There is no contradiction."
  },
  {
    "id": "gen-44-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student excels in programming, they understand algorithms.",
      "All students who understand algorithms pass the logic course.",
      "Some students who pass the logic course do not excel in programming."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, it can be concluded that if a student excels in programming, they pass the logic course. Statement 3 simply adds that there are other ways to pass the logic course; not all students who pass it necessarily excel in programming. This does not contradict the earlier conclusion that those who excel in programming do pass the course."
  },
  {
    "id": "gen-44-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "No innovative thinker fears failure.",
      "If a person fears failure, they avoid taking risks.",
      "Some entrepreneurs avoid taking risks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, all successful entrepreneurs do not fear failure. Statement 3 indicates that if someone fears failure, they avoid taking risks. Statement 4 states that some entrepreneurs avoid taking risks. These entrepreneurs could be individuals who fear failure (consistent with Statement 3) and are simply not successful entrepreneurs, thus not covered by Statement 1 and Statement 2. There is no contradiction."
  },
  {
    "id": "gen-44-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful artists participate in exhibitions.",
      "Some artists who participate in exhibitions do not sell their work.",
      "If an artist sells their work, they gain critical acclaim.",
      "Maria is a successful artist who did not gain critical acclaim."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 states Maria is a successful artist who did not gain critical acclaim. From Statement 3, if an artist sells their work, they gain critical acclaim, so by contrapositive, if an artist did not gain critical acclaim, they did not sell their work. Therefore, Maria did not sell her work. From Statement 1, since Maria is a successful artist, she participates in exhibitions. So, Maria is an artist who participates in exhibitions but did not sell her work, which is consistent with Statement 2."
  },
  {
    "id": "gen-45-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the finance committee are also on the audit committee.",
      "No one on the audit committee holds shares in the company.",
      "If a committee member does not hold shares, they are eligible for the ethics review.",
      "Some members of the finance committee are not eligible for the ethics review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All Finance Committee members are on the Audit Committee (1), who hold no shares (2), and those not holding shares are eligible for the ethics review (3). This means all Finance Committee members are eligible for the ethics review. Statement 4 directly contradicts this by stating some members of the finance committee are not eligible for the ethics review."
  },
  {
    "id": "gen-45-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "No risk-taker avoids novel challenges.",
      "Some people who embrace novel challenges are not successful entrepreneurs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: Every successful entrepreneur is a risk-taker (1), and no risk-taker avoids novel challenges (2), meaning all risk-takers embrace novel challenges. Therefore, all successful entrepreneurs embrace novel challenges. Statement 3, that some people who embrace novel challenges are not successful entrepreneurs, is consistent with this, as the group of those embracing novel challenges can be larger than the group of successful entrepreneurs."
  },
  {
    "id": "gen-45-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All books published by Crimson Press feature original artwork.",
      "If a book features original artwork, it is printed on archival paper.",
      "Books printed on archival paper are never part of the budget line collection.",
      "Some books published by Crimson Press are part of the budget line collection."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: All books by Crimson Press feature original artwork (1), which means they are printed on archival paper (2), and books on archival paper are never part of the budget line collection (3). This implies that all books published by Crimson Press are excluded from the budget line collection. Statement 4, however, asserts that some books published by Crimson Press are part of the budget line collection, creating a direct contradiction."
  },
  {
    "id": "gen-45-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant receives direct sunlight, it is a succulent.",
      "All succulents require minimal watering.",
      "No plant requiring minimal watering is harmed by drought conditions.",
      "Some plants that receive direct sunlight are not harmed by drought conditions."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 form a chain: Plants receiving direct sunlight (1) are succulents, which require minimal watering (2), and plants requiring minimal watering are not harmed by drought conditions (3). This means all plants receiving direct sunlight are not harmed by drought conditions. Statement 4, that some plants that receive direct sunlight are not harmed by drought conditions, is entirely consistent with this, as 'all' implies 'some'."
  },
  {
    "id": "gen-45-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every member of the choir performed in the spring concert.",
      "Only members who attended all rehearsals performed in the spring concert.",
      "If a choir member attended all rehearsals, they received a commendation.",
      "No member of the choir received a commendation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: All choir members performed in the spring concert (1). Only members who attended all rehearsals performed in the spring concert (2), meaning all performers attended all rehearsals. If a choir member attended all rehearsals, they received a commendation (3). This chain establishes that every member of the choir received a commendation. Statement 4, however, directly states that no member of the choir received a commendation, which is a clear contradiction."
  },
  {
    "id": "gen-45-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a dog is a purebred, it has a documented lineage.",
      "All dogs with a documented lineage are registered with the kennel club.",
      "Some dogs registered with the kennel club are not purebreds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: All purebred dogs have a documented lineage (1), and all dogs with a documented lineage are registered with the kennel club (2). Therefore, all purebred dogs are registered with the kennel club. Statement 3, that some dogs registered with the kennel club are not purebreds, is consistent, as the group of dogs registered with the kennel club can be larger than the group of purebred dogs."
  },
  {
    "id": "gen-45-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every new product release undergoes rigorous quality testing.",
      "Products that undergo rigorous quality testing are never rushed to market.",
      "If a product is not rushed to market, it receives positive customer reviews.",
      "Some new product releases do not receive positive customer reviews."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: Every new product release undergoes rigorous quality testing (1), which means it is never rushed to market (2), and products not rushed to market receive positive customer reviews (3). This implies that all new product releases receive positive customer reviews. Statement 4, however, states that some new product releases do not receive positive customer reviews, which is a contradiction."
  },
  {
    "id": "gen-45-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only artists with extensive portfolios are invited to the gallery exhibition.",
      "Every artist invited to the gallery exhibition submitted their work in the last month.",
      "Some artists with extensive portfolios did not submit their work in the last month."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that if an artist is invited to the gallery exhibition, they must have an extensive portfolio (1) and must have submitted their work in the last month (2). Statement 3, that some artists with extensive portfolios did not submit their work in the last month, is consistent. These artists could simply be those with extensive portfolios who were not invited to the gallery exhibition, and therefore not subject to the submission deadline."
  },
  {
    "id": "gen-45-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful job applicants possess strong communication skills.",
      "If a candidate possesses strong communication skills, they excel in team environments.",
      "No candidate who excels in team environments struggles with public speaking.",
      "Every successful job applicant struggles with public speaking."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: All successful job applicants possess strong communication skills (1), which means they excel in team environments (2), and candidates who excel in team environments do not struggle with public speaking (3). This leads to the conclusion that all successful job applicants do not struggle with public speaking. Statement 4, however, directly states that every successful job applicant struggles with public speaking, creating a clear contradiction."
  },
  {
    "id": "gen-45-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an ingredient is organic, it is sourced locally.",
      "All locally sourced ingredients are non-GMO.",
      "Some non-GMO ingredients are not organic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 create a chain: If an ingredient is organic (1), then it is sourced locally, and all locally sourced ingredients are non-GMO (2). Therefore, all organic ingredients are non-GMO. Statement 3, that some non-GMO ingredients are not organic, is consistent with this, as the category of non-GMO ingredients can be broader than just organic ingredients."
  },
  {
    "id": "gen-46-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey are herbivores.",
      "Some owls are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are birds of prey. Statement 2 says no birds of prey are herbivores. This means all owls are not herbivores. Statement 3 directly contradicts this conclusion by stating that some owls are herbivores."
  },
  {
    "id": "gen-46-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires full sun, it must be watered daily.",
      "This plant can tolerate drought.",
      "All plants that are watered daily cannot tolerate drought.",
      "This plant requires full sun."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says that if a plant requires full sun, it must be watered daily. Statement 4 affirms this plant requires full sun, so it must be watered daily. Statement 3 says all plants watered daily cannot tolerate drought. Therefore, this plant cannot tolerate drought, which directly contradicts Statement 2 that says this plant can tolerate drought."
  },
  {
    "id": "gen-46-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus have exceeded their sales target.",
      "Every employee who exceeded their sales target attended the advanced training session.",
      "No employee who attended the advanced training session is eligible for a bonus.",
      "Some employees received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 and Statement 2 together mean: if an employee receives a bonus, they attended the advanced training session. Statement 3 says that if an employee attended the advanced training session, they are not eligible for a bonus. Therefore, if an employee receives a bonus, they are not eligible for a bonus. This contradiction is instantiated by Statement 4, which claims some employees received a bonus."
  },
  {
    "id": "gen-46-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed the leadership workshop.",
      "No one who completed the leadership workshop was a junior associate.",
      "Some successful candidates were junior associates."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all successful candidates completed the leadership workshop. Statement 2 says no one who completed the leadership workshop was a junior associate. This implies that no successful candidate was a junior associate. Statement 3 directly contradicts this, claiming that some successful candidates were junior associates."
  },
  {
    "id": "gen-46-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the city council are property owners.",
      "No property owner is eligible for public housing.",
      "Some members of the city council are eligible for public housing."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all city council members are property owners. Statement 2 says no property owner is eligible for public housing. This means that all city council members are not eligible for public housing. Statement 3 directly contradicts this conclusion by asserting that some members of the city council are eligible for public housing."
  },
  {
    "id": "gen-47-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a chef is certified, they have completed culinary school.",
      "Every chef working at \"The Gilded Spoon\" is certified.",
      "No chef who completed culinary school lacks practical experience.",
      "Some chefs working at \"The Gilded Spoon\" lack practical experience."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Every chef at \"The Gilded Spoon\" (from 2) is certified, which means they completed culinary school (from 1), and therefore they do not lack practical experience (from 3). This means every chef at \"The Gilded Spoon\" has practical experience. Statement 4 directly contradicts this by asserting that some chefs working there lack practical experience. Removing Statement 4 resolves this conflict."
  },
  {
    "id": "gen-47-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups require significant seed funding.",
      "No company with significant seed funding fails in its first year.",
      "Every company founded by a former executive is a successful startup.",
      "Some companies founded by former executives fail in their first year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: Every company founded by a former executive (from 3) is a successful startup, which requires significant seed funding (from 1), and thus does not fail in its first year (from 2). This implies that no company founded by a former executive fails in its first year. Statement 4 directly contradicts this by stating that some such companies do fail in their first year. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a customer qualifies for premium support, they have an active subscription.",
      "No customer with an active subscription has unpaid invoices.",
      "All customers who do not have unpaid invoices are eligible for a discount.",
      "Some customers who qualify for premium support are not eligible for a discount."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: A customer qualifying for premium support (from 1) has an active subscription, which means they have no unpaid invoices (from 2), and therefore they are eligible for a discount (from 3). This implies that every customer who qualifies for premium support is eligible for a discount. Statement 4 directly contradicts this by claiming some customers who qualify for premium support are not eligible for a discount. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-47-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A permit is granted only if the environmental impact assessment is approved.",
      "Every new construction project requires a granted permit.",
      "If an environmental impact assessment is approved, then local residents must be consulted.",
      "Some new construction projects will not involve consultation with local residents."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2, 1, and 3 form a logical chain: Every new construction project (from 2) requires a granted permit, which means the environmental impact assessment was approved (from 1), and therefore local residents must be consulted (from 3). This implies that all new construction projects will involve consultation with local residents. Statement 4 directly contradicts this by stating some new construction projects will not involve consultation. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-47-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful students attend tutoring sessions.",
      "No student who attends tutoring sessions misses the final exam.",
      "Every student in the Honors program is a successful student.",
      "Some students in the Honors program miss the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: Every student in the Honors program (from 3) is a successful student, which means they attend tutoring sessions (from 1), and therefore they do not miss the final exam (from 2). This implies that no student in the Honors program misses the final exam. Statement 4 directly contradicts this by claiming some students in the Honors program do miss the final exam. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-48-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who aced the final exam received extra credit.",
      "No student who received extra credit failed the course.",
      "Some students who aced the final exam failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all students who aced the final exam received extra credit. Statement 2 says no student who received extra credit failed the course. Therefore, it must be true that no student who aced the final exam failed the course. This contradicts Statement 3, which claims some students who aced the final exam failed the course. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-48-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a cat is playful, it will chase laser pointers.",
      "Some cats chase laser pointers.",
      "Not all cats are playful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A playful cat would chase laser pointers, as per Statement 1. Statement 2 confirms some cats chase laser pointers, which could be playful or non-playful cats. Statement 3 allows for cats that are not playful, which is consistent with the other two."
  },
  {
    "id": "gen-48-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of this building have access to the gym.",
      "No one who has access to the gym uses the pool.",
      "Every resident of this building uses the pool."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates all residents have gym access. Statement 2 states no one with gym access uses the pool. Combining these means that no resident of this building uses the pool. This directly contradicts Statement 3, which asserts every resident uses the pool. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-48-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with full benefits receive paid vacation.",
      "Some employees receive paid vacation.",
      "Some employees do not have full benefits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It's possible for employees with full benefits to get paid vacation (Statement 1), and for other employees (with or without full benefits) to also receive paid vacation (Statement 2). Statement 3 simply acknowledges that not all employees have full benefits, which is entirely possible alongside the other two statements."
  },
  {
    "id": "gen-48-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a device is new, it comes with a warranty.",
      "All devices with a warranty qualify for free repairs.",
      "No devices qualify for free repairs unless they are new.",
      "Some devices are not new but qualify for free repairs."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (new implies warranty) and Statement 2 (warranty implies free repairs) together mean that if a device is new, it qualifies for free repairs. Statement 3 (free repairs implies new) combined with this means a device qualifies for free repairs if and only if it is new. This conclusion directly contradicts Statement 4, which claims some devices are not new but still qualify for free repairs. Removing Statement 3 resolves this conflict, allowing for free repairs on non-new devices."
  },
  {
    "id": "gen-48-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in the aviary are tropical species.",
      "Some tropical species are not found in this region.",
      "No bird in the aviary is found in this region."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 identifies aviary birds as tropical. Statement 2 allows for some tropical species to exist outside this region. Statement 3 specifies that none of the aviary birds are found in this region, which is compatible with them being tropical species that fall into the 'some tropical species not found in this region' group."
  },
  {
    "id": "gen-48-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the hiking club are experienced climbers.",
      "No experienced climber owns a pet.",
      "Some members of the hiking club own a pet."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all hiking club members are experienced climbers. Statement 2 says no experienced climber owns a pet. Therefore, it logically follows that no member of the hiking club owns a pet. This directly contradicts Statement 3, which claims some members of the hiking club do own a pet. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-48-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All paintings in this gallery are abstract.",
      "Some abstract paintings were purchased at auction.",
      "None of the paintings purchased at auction are for sale.",
      "Some paintings in this gallery are for sale."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for some abstract paintings in the gallery to have been purchased at auction and therefore not for sale (combining Statements 1, 2, and 3). At the same time, other paintings in the gallery could be abstract, not purchased at auction, and be for sale (Statement 4)."
  },
  {
    "id": "gen-48-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All applicants for the scholarship submitted a personal essay.",
      "None of the applicants who submitted a personal essay were invited for an interview.",
      "Some applicants for the scholarship were invited for an interview.",
      "Every applicant invited for an interview received the scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all applicants submitted an essay. Statement 2 says none of those who submitted an essay were invited for an interview. Therefore, it must be true that no applicants for the scholarship were invited for an interview. This directly contradicts Statement 3, which claims some applicants were invited for an interview. Statement 4 is irrelevant to this contradiction. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-48-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a recipe uses cilantro, it is a savory dish.",
      "Not all savory dishes use cilantro.",
      "No dessert uses cilantro.",
      "Every savory dish is either a main course or an appetizer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A recipe using cilantro must be savory (Statement 1) and cannot be a dessert (Statement 3). There can also be savory dishes that do not use cilantro (Statement 2). All savory dishes fit into the categories of main course or appetizer (Statement 4). All these conditions can coexist without contradiction."
  },
  {
    "id": "gen-49-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the finance committee are required to approve budget changes.",
      "No one who approves budget changes has a conflict of interest.",
      "Some members of the finance committee have a conflict of interest."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that all members of the finance committee do not have a conflict of interest. This conclusion directly contradicts Statement 3, which asserts that some members of the finance committee do have a conflict of interest."
  },
  {
    "id": "gen-49-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student passes the advanced module, they are eligible for the scholarship.",
      "No student eligible for the scholarship has any outstanding assignments.",
      "Every student in the honors program passed the advanced module.",
      "At least one student in the honors program has outstanding assignments."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a chain: Every student in the honors program passed the advanced module, and passing the advanced module makes them eligible for the scholarship, and no one eligible for the scholarship has outstanding assignments. Therefore, every student in the honors program has no outstanding assignments. This contradicts Statement 4."
  },
  {
    "id": "gen-49-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All software engineers working on Project X have completed the security training.",
      "No one who has completed the security training is permitted to access the legacy server.",
      "Every software engineer on Project X must adhere to the new access protocols.",
      "Some software engineers who must adhere to the new access protocols are permitted to access the legacy server.",
      "All software engineers on Project X are permitted to access the legacy server."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 2 logically imply that all software engineers working on Project X are not permitted to access the legacy server (SEPX → CST → not ALS). This directly contradicts Statement 5, which asserts that all software engineers on Project X are permitted to access the legacy server."
  },
  {
    "id": "gen-49-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every person invited to the gala dinner passed the security screening.",
      "No one who passed the security screening was on the watch list.",
      "Some people on the watch list were invited to the gala dinner."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that every person invited to the gala dinner was not on the watch list (PGD → PSS → not WL). This conclusion directly contradicts Statement 3, which asserts that some people on the watch list were invited to the gala dinner."
  },
  {
    "id": "gen-49-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who enroll in the advanced calculus course have excelled in algebra.",
      "Every student who excels in algebra is proficient in trigonometry.",
      "No student proficient in trigonometry struggles with geometry.",
      "Some students who enroll in the advanced calculus course struggle with geometry."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: Students in advanced calculus excel in algebra, who are proficient in trigonometry, who do not struggle with geometry. Therefore, all students in the advanced calculus course do not struggle with geometry. This contradicts Statement 4."
  },
  {
    "id": "gen-50-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All owls have excellent night vision.",
      "No creature with excellent night vision is afraid of the dark.",
      "If an animal is not afraid of the dark, it hunts at night.",
      "Some creatures that hunt at night are not owls.",
      "No owl hunts at night."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if an animal is an owl, then it has excellent night vision; which means it is not afraid of the dark; which in turn means it hunts at night. Therefore, if an animal is an owl, it hunts at night. This directly contradicts Statement 5, which claims that no owl hunts at night. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-50-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "All tropical species need at least 6 hours of sunlight.",
      "Any plant needing at least 6 hours of sunlight is intolerant of frost.",
      "This specific plant does not require daily watering.",
      "Some plants that are intolerant of frost are not tropical species."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements establish a chain: if a plant requires daily watering, it is a tropical species, which needs at least 6 hours of sunlight, and is therefore intolerant of frost. This means plants requiring daily watering are intolerant of frost. Statement 4 indicates a plant does not require daily watering, which does not contradict any part of the chain (it could be a non-tropical plant that is also intolerant of frost, or not). Statement 5 provides an example of plants that are intolerant of frost but not tropical, which is also consistent. All statements can be simultaneously true."
  },
  {
    "id": "gen-50-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents living in the coastal district are eligible for storm relief.",
      "No one eligible for storm relief received a tax rebate.",
      "If someone did not receive a tax rebate, then they filed an emergency claim.",
      "Every resident who filed an emergency claim resides in the coastal district.",
      "Some residents who live in the coastal district did not file an emergency claim."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if a resident lives in the coastal district, then they are eligible for storm relief; which means they did not receive a tax rebate; which in turn means they filed an emergency claim. Therefore, any resident in the coastal district must have filed an emergency claim (CD -> FEC). This directly contradicts Statement 5, which asserts that some residents in the coastal district did not file an emergency claim. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-50-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "No risk-taker avoids financial challenges.",
      "All individuals who do not avoid financial challenges are resilient.",
      "Some resilient individuals are not successful entrepreneurs.",
      "Only successful entrepreneurs are risk-takers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 create a chain: if someone is a successful entrepreneur, they are a risk-taker; if they are a risk-taker, they do not avoid financial challenges; and if they do not avoid financial challenges, they are resilient. Thus, all successful entrepreneurs are resilient (SE -> R). Statement 5 (Only successful entrepreneurs are risk-takers) is the converse of Statement 1 (SE -> RT), meaning risk-takers are also successful entrepreneurs (RT -> SE). Combined, this means successful entrepreneurs and risk-takers are the same group. Statement 4 indicates that some resilient individuals are not successful entrepreneurs, which is consistent with successful entrepreneurs being a subset of resilient individuals, with other resilient people existing. All statements can be true simultaneously."
  },
  {
    "id": "gen-50-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the city council support public transit initiatives.",
      "No one who supports public transit initiatives opposes the new stadium project.",
      "If a council member does not oppose the new stadium project, then they advocate for urban development.",
      "Some city council members do not advocate for urban development.",
      "All city council members are new to their roles."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a member is on the city council, they support public transit initiatives; which means they do not oppose the new stadium project; which in turn means they advocate for urban development. Thus, all city council members advocate for urban development (CC -> AUD). Statement 4 directly contradicts this conclusion by asserting that some city council members do not advocate for urban development. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-50-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful software launches require extensive testing.",
      "If a project undergoes extensive testing, it must adhere to strict deadlines.",
      "No project that adheres to strict deadlines tolerates scope creep.",
      "This new software launch did not tolerate scope creep.",
      "Some projects that tolerate scope creep are not successful software launches."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 form a chain: if a software launch is successful, it requires extensive testing; which means it adheres to strict deadlines; which means it does not tolerate scope creep. Thus, all successful software launches do not tolerate scope creep (SSL -> !SC). Statement 4 describes a specific launch that did not tolerate scope creep, which is consistent with the derived rule (it could be a successful launch or not). Statement 5 indicates that some projects tolerate scope creep and are not successful launches. From the chain, any project tolerating scope creep must not adhere to strict deadlines, and thus cannot be a successful software launch, so Statement 5 is consistent with the derived universal (SC -> !SSL). All statements can be simultaneously true."
  },
  {
    "id": "gen-50-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every athlete who trains intensely follows a strict diet.",
      "No one who follows a strict diet consumes processed foods.",
      "If an individual does not consume processed foods, they have low cholesterol.",
      "Some athletes who train intensely do not have low cholesterol.",
      "All athletes who train intensely also practice yoga daily."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if an athlete trains intensely, they follow a strict diet; if they follow a strict diet, they do not consume processed foods; and if they do not consume processed foods, they have low cholesterol. Therefore, all athletes who train intensely have low cholesterol (TI -> LC). Statement 4 directly contradicts this conclusion by asserting that some athletes who train intensely do not have low cholesterol. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-50-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful research projects involve peer review.",
      "No project involving peer review is exempt from ethical guidelines.",
      "If a project is not exempt from ethical guidelines, it requires institutional approval.",
      "Some research projects that require institutional approval are not successful.",
      "This specific project is exempt from ethical guidelines."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a research project is successful, it involves peer review; if it involves peer review, it is not exempt from ethical guidelines; and if it is not exempt from ethical guidelines, it requires institutional approval. Thus, all successful research projects require institutional approval (SRP -> IA). Statement 4 states that some projects requiring institutional approval are not successful, which is consistent with the derived rule (the set of IA projects can be larger than SRP projects). Statement 5 indicates a specific project is exempt from ethical guidelines, which, via the contrapositive of Statement 2 (EEG -> !PR), means it does not involve peer review, and therefore cannot be a successful research project. All statements can be simultaneously true."
  },
  {
    "id": "gen-50-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A city's downtown is vibrant only if it has cultural attractions.",
      "If a city has cultural attractions, it draws tourists.",
      "A city with a thriving arts scene will have a vibrant downtown.",
      "No city that draws tourists also has a struggling economy.",
      "Some cities with a thriving arts scene also have a struggling economy."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 3, 1, 2, and 4 form a logical chain: if a city has a thriving arts scene, it will have a vibrant downtown (3); if its downtown is vibrant, it has cultural attractions (1); if it has cultural attractions, it draws tourists (2); and if it draws tourists, it does not have a struggling economy (4). Therefore, any city with a thriving arts scene does not have a struggling economy (TAS -> !SE). Statement 5 directly contradicts this conclusion by asserting that some cities with a thriving arts scene do have a struggling economy. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-50-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees in department A receive mandatory safety training.",
      "If an employee receives mandatory safety training, they are aware of emergency protocols.",
      "No employee aware of emergency protocols is assigned to high-risk zones.",
      "Some employees assigned to high-risk zones are not in department A.",
      "This particular employee is assigned to a high-risk zone."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 establish a chain: if an employee is in department A, they receive mandatory safety training; if they receive mandatory safety training, they are aware of emergency protocols; and if they are aware of emergency protocols, they are not assigned to high-risk zones. Thus, all employees in department A are not assigned to high-risk zones (DA -> !HRZ). The contrapositive of this is that anyone assigned to a high-risk zone is not in department A (HRZ -> !DA). Statement 4 provides a particular instance that is consistent with this derived universal. Statement 5 describes an employee assigned to a high-risk zone, which means they are not in department A, also consistent. All statements can be simultaneously true."
  }
];

export default generatedPuzzles;
