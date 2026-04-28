// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "All members of the finance team attended the budget meeting.",
      "No one who attended the budget meeting submitted a late report.",
      "At least one member of the finance team submitted a late report."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no member of the finance team submitted a late report. Statement 3 directly contradicts this by asserting that at least one member did. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-1-2",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Maria trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Maria could be a professional athlete or one of the people who train daily but are not professional athletes. The statements do not create any contradiction."
  },
  {
    "id": "gen-1-3",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "If an artwork is a sculpture, it must be displayed outdoors.",
      "No artwork displayed outdoors is fragile.",
      "This artwork is a sculpture and is fragile."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that if an artwork is a sculpture, then it cannot be fragile. Statement 3 claims that this specific artwork is both a sculpture and fragile, which directly contradicts the inference. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-1-4",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "No students who missed more than three classes passed the exam.",
      "All students who passed the exam received a certificate.",
      "Some students received a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Some students could have passed the exam and received a certificate, without having missed more than three classes. No contradiction is formed."
  },
  {
    "id": "gen-1-5",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "Every successful business invests in employee training.",
      "No business that invests in employee training experiences high turnover.",
      "Business X is a successful business with high turnover."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together indicate that no successful business experiences high turnover. Statement 3 asserts that Business X is both successful and experiences high turnover, which is a direct contradiction. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-1-6",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "All cats are carnivores.",
      "Some carnivores eat fish.",
      "Mittens is a cat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Mittens is a cat, therefore Mittens is a carnivore. Mittens might or might not eat fish; the statements do not provide enough information to create a contradiction."
  },
  {
    "id": "gen-1-7",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "All books by this author are historical novels.",
      "No historical novel is set in the future.",
      "This author has written a book set in the future."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no book by this author is set in the future. Statement 3 directly contradicts this by stating that this author has written a book that is set in the future. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-1-8",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "If a bird is a canary, it sings beautifully.",
      "This bird sings beautifully.",
      "This bird is not a canary."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. The first statement only claims that canaries sing beautifully, not that only canaries sing beautifully. Therefore, this bird could be a non-canary that still sings beautifully."
  },
  {
    "id": "gen-1-9",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "All successful puzzle creators are highly creative.",
      "No highly creative individuals are afraid of criticism.",
      "Some successful puzzle creators are afraid of criticism."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no successful puzzle creator is afraid of criticism. Statement 3 directly contradicts this by asserting that some successful puzzle creators are afraid of criticism. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-1-10",
    "difficulty": "easy",
    "category": "syllogism",
    "statements": [
      "If a bird is a hummingbird, it can hover.",
      "All birds that can hover consume nectar.",
      "Every bird that consumes nectar is small.",
      "This bird is a hummingbird, but it is not small."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain, implying that all hummingbirds are small. Statement 4 directly contradicts this by describing a specific bird that is both a hummingbird and not small. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-2-1",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "All successful applicants have strong references.",
      "Anyone with strong references will be invited for an interview.",
      "Some applicants who were invited for an interview were not successful.",
      "No successful applicant was invited for an interview."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all successful applicants will be invited for an interview. Statement 4 directly contradicts this conclusion by stating that no successful applicant was invited for an interview. Statement 3 describes a scenario that is consistent with the other statements individually, but does not participate in the core contradiction."
  },
  {
    "id": "gen-2-2",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "If a book is a bestseller, it is widely reviewed.",
      "Some widely reviewed books are not bestsellers.",
      "No book that is widely reviewed receives poor ratings.",
      "This book received poor ratings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 3 and 4 together imply that this book is not widely reviewed. This conclusion does not contradict Statement 1 (as this book might not be a bestseller) or Statement 2 (as some books can be widely reviewed without being bestsellers). All statements can be true simultaneously."
  },
  {
    "id": "gen-2-3",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "All qualified candidates have completed the training program.",
      "No one who completed the training program has less than five years of experience.",
      "Some applicants with less than five years of experience are qualified candidates."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that any qualified candidate must have completed the training program and, therefore, must not have less than five years of experience. Statement 3 directly contradicts this conclusion by asserting that some qualified candidates do have less than five years of experience."
  },
  {
    "id": "gen-2-4",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "If a restaurant is popular, it is often fully booked on weekends.",
      "No restaurant that is fully booked on weekends offers same-day reservations.",
      "Some restaurants that are not popular offer same-day reservations.",
      "This popular restaurant does not offer same-day reservations."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that popular restaurants do not offer same-day reservations. Statement 4 confirms this for a specific popular restaurant, which is consistent. Statement 3 describes non-popular restaurants, which also does not conflict with the other statements. All statements can be true simultaneously."
  },
  {
    "id": "gen-2-5",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "Every student who passed the midterm also passed the final.",
      "No student who passed the final failed the course.",
      "Some students who failed the course passed the midterm."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that any student who passed the midterm also passed the final, and therefore did not fail the course. Statement 3 directly contradicts this by stating that some students who failed the course actually passed the midterm."
  },
  {
    "id": "gen-2-6",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "All vehicles with four wheels are cars.",
      "Some cars are not vehicles with four wheels.",
      "No car is an electric bicycle.",
      "This electric bicycle does not have four wheels."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 are compatible, as cars can exist that do not have four wheels. Statement 3 implies that electric bicycles are not cars. Statement 4 indicates this specific electric bicycle does not have four wheels, which does not conflict with any other statement. All statements can be true simultaneously."
  },
  {
    "id": "gen-2-7",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by law.",
      "All species protected by law are monitored regularly.",
      "Some species that are not monitored regularly are endangered."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that any endangered species is protected by law and, consequently, monitored regularly. Statement 3 directly contradicts this conclusion by asserting that some endangered species are not monitored regularly."
  },
  {
    "id": "gen-2-8",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Any business that prioritizes customer satisfaction provides excellent service.",
      "Some businesses that provide excellent service are not successful.",
      "This business does not prioritize customer satisfaction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful businesses provide excellent service. Statement 4, combined with the contrapositive of Statement 1 (businesses that do not prioritize customer satisfaction are not successful), indicates this business is not successful. Statement 3 is consistent with the possibility of businesses providing excellent service without being successful. All statements can be true simultaneously."
  },
  {
    "id": "gen-2-9",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "If a software project is completed on time, it is within budget.",
      "No software project that is within budget has unexpected delays.",
      "Some software projects completed on time had unexpected delays."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that any software project completed on time must be within budget and, therefore, must not have unexpected delays. Statement 3 directly contradicts this conclusion by asserting that some software projects completed on time did have unexpected delays."
  },
  {
    "id": "gen-2-10",
    "difficulty": "medium",
    "category": "conditional",
    "statements": [
      "All well-managed organizations foster employee development.",
      "Organizations that foster employee development have low turnover rates.",
      "Some organizations with low turnover rates are not well-managed.",
      "This organization is not well-managed and has a low turnover rate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all well-managed organizations have low turnover rates. Statements 3 and 4 are consistent with this, as they describe organizations that are not well-managed but still have low turnover rates, which does not create a conflict. All statements can be true simultaneously."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All interns are required to attend the weekly seminar.",
      "No one who attends the weekly seminar is eligible for overtime.",
      "Some employees eligible for overtime are interns.",
      "All new hires are interns."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all interns are required to attend the weekly seminar, and no one attending the seminar is eligible for overtime. Therefore, no interns are eligible for overtime. This directly contradicts Statement 3, which claims that some employees eligible for overtime are interns. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "Some risk-takers are not successful entrepreneurs.",
      "Maria is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all successful entrepreneurs are risk-takers. Statement 2 simply states that the category of risk-takers includes individuals who are not successful entrepreneurs, which is consistent with Statement 1 (the set of risk-takers can be larger than successful entrepreneurs). Statement 3, about Maria, is consistent with her being a risk-taker as well, as implied by Statement 1. No logical contradiction exists."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an artwork is a masterpiece, it commands a high price.",
      "No artwork that commands a high price is stored in the public gallery.",
      "Some masterpieces are stored in the public gallery."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all masterpieces command a high price. Statement 2 indicates that no artwork commanding a high price is stored in the public gallery. Together, these statements logically entail that no masterpieces are stored in the public gallery. This directly contradicts Statement 3, which asserts that some masterpieces are stored in the public gallery. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "All mammals are vertebrates.",
      "No reptiles are vertebrates.",
      "Some dogs are reptiles."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all dogs are vertebrates. Statement 3 asserts that no reptiles are vertebrates. From these, it logically follows that no dogs can be reptiles. This directly contradicts Statement 4, which states that some dogs are reptiles. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All plants requiring full sun have large leaves.",
      "No plants with large leaves thrive in shade.",
      "Some garden flowers thrive in shade.",
      "Not all garden flowers require full sun."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any plant requiring full sun does not thrive in shade. Statement 3 claims that some garden flowers do thrive in shade, meaning these particular garden flowers cannot require full sun. This is entirely consistent with Statement 4, which states that not all garden flowers require full sun. The set of statements presents no logical contradiction."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who pass the final project receive a distinction.",
      "All students who receive a distinction are invited to the awards ceremony.",
      "Some students who pass the final project are not invited to the awards ceremony."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that passing the final project leads to a distinction. Statement 2 states that receiving a distinction leads to an invitation to the awards ceremony. Together, these imply that all students who pass the final project are invited to the awards ceremony. This directly contradicts Statement 3, which asserts that some students who pass the final project are not invited. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds can fly faster than a car.",
      "Some animals that can fly faster than a car are not birds.",
      "All birds have feathers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that no bird possesses the characteristic of flying faster than a car. Statement 2 is consistent with this, as it refers to other animals with that characteristic that are not birds. Statement 3, concerning bird anatomy, does not conflict with the other two. The set is consistent."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All valuable antiques are kept in a secure vault.",
      "No items kept in a secure vault are ever displayed publicly.",
      "Some items displayed publicly are priceless.",
      "All priceless items are valuable antiques."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a logical chain: all priceless items are valuable antiques (4), all valuable antiques are kept in a secure vault (1), and no items in a secure vault are displayed publicly (2). This chain implies that no priceless items are ever displayed publicly. This directly contradicts Statement 3, which claims that some items displayed publicly are priceless. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful candidates completed the advanced training module.",
      "Some applicants who completed the advanced training module were not successful candidates.",
      "No applicant who did not complete the advanced training module was offered a position.",
      "All successful candidates were offered a position."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 indicate that successful candidates both completed the advanced training module and were offered a position. Statement 3 implies that only those who completed the advanced training module were offered a position, which is consistent with successful candidates meeting both criteria. Statement 2 merely states that completing the module does not guarantee success, which introduces no conflict. The set of statements is consistent."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategists enjoy loud music.",
      "Some people who enjoy loud music are members of the chess club.",
      "Every member of the chess club is over eighteen."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all members of the chess club are skilled strategists, and no skilled strategists enjoy loud music. Therefore, no members of the chess club enjoy loud music. This directly contradicts Statement 3, which claims that some people who enjoy loud music are members of the chess club. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who score above 90% are awarded a distinction.",
      "No student awarded a distinction is required to take a re-examination.",
      "Some students who score above 90% are required to take a re-examination.",
      "Every student who fails the course must take a re-examination."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all students scoring above 90% get a distinction. Statement 2 says no student with a distinction needs a re-examination. Therefore, all students who score above 90% are not required to take a re-examination. This directly contradicts Statement 3, which claims some students who score above 90% are required to take a re-examination."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it is a carnivore.",
      "All carnivores have sharp claws.",
      "Some animals with sharp claws are not felines.",
      "No herbivore has sharp claws."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and 2 imply that all felines have sharp claws. Statement 3 is consistent with this, as it means the group of animals with sharp claws is larger than just felines (e.g., bears). Statement 4 introduces herbivores as a separate group from those with sharp claws. All statements can be true simultaneously."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who work from home use company laptops.",
      "No employee who uses a company laptop also uses personal devices for work tasks.",
      "Every employee who attends the weekly team meeting uses personal devices for work tasks.",
      "Some employees who work from home attend the weekly team meeting."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all employees who work from home do not use personal devices for work tasks. Statement 3 indicates that anyone who attends the weekly team meeting uses personal devices for work tasks, which means they cannot be an employee who works from home. Therefore, no employee who works from home attends the weekly team meeting, which directly contradicts Statement 4."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful novelists have a strong command of language.",
      "Every writer with a strong command of language enjoys editing.",
      "Some people who enjoy editing are not successful novelists.",
      "No successful novelist dislikes editing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically lead to the conclusion that all successful novelists enjoy editing, making Statement 4 a consistent restatement of this fact. Statement 3 is also consistent, as it allows for other writers who enjoy editing but are not successful novelists. No contradiction exists among these statements."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a chemical is an acid, it will react with a base.",
      "All chemicals that react with a base are corrosive.",
      "No chemical that is corrosive is safe for direct skin contact.",
      "Some acids are safe for direct skin contact."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a chemical is an acid, it reacts with a base; if it reacts with a base, it is corrosive; if it is corrosive, it is not safe for direct skin contact. Therefore, all acids are not safe for direct skin contact. This directly contradicts Statement 4, which asserts that some acids are safe for direct skin contact."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All medical professionals complete extensive training.",
      "Some individuals who complete extensive training are not medical professionals.",
      "If a person is a surgeon, they are a medical professional.",
      "No one who works in public health is a surgeon."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that all surgeons complete extensive training. Statement 2 is consistent, allowing for people with extensive training who are not medical professionals (e.g., engineers). Statement 4 simply indicates that surgeons and public health workers are distinct categories. All statements can be true at the same time."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All applicants who passed the initial screening were invited for an interview.",
      "No applicant invited for an interview failed the subsequent technical evaluation.",
      "Every applicant who submitted an incomplete portfolio failed the subsequent technical evaluation.",
      "Some applicants who submitted an incomplete portfolio passed the initial screening."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that any applicant who passed the initial screening did not fail the technical evaluation. Statement 3 states that every applicant with an incomplete portfolio failed the technical evaluation. Therefore, an applicant who passed the initial screening cannot have submitted an incomplete portfolio. This directly contradicts Statement 4, which claims some applicants with incomplete portfolios passed the initial screening."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student attends evening classes, they have a full-time job.",
      "All students with a full-time job require flexible study options.",
      "Some students who require flexible study options do not attend evening classes.",
      "Every student enrolled in the advanced diploma program attends evening classes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 indicate that all students in the advanced diploma program require flexible study options because they attend evening classes and have full-time jobs. Statement 3 is consistent, as it allows for other students who need flexible study options for reasons unrelated to evening classes. No contradiction is present."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All plants requiring high humidity are tropical species.",
      "No tropical species can tolerate freezing temperatures.",
      "Every plant that cannot tolerate freezing temperatures needs consistent watering.",
      "Some plants requiring high humidity do not need consistent watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: all plants requiring high humidity are tropical species; all tropical species cannot tolerate freezing temperatures; all plants that cannot tolerate freezing temperatures need consistent watering. Therefore, all plants requiring high humidity need consistent watering. This conclusion directly contradicts Statement 4, which claims some plants requiring high humidity do not need consistent watering."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the city council support public transportation initiatives.",
      "Some residents who support public transportation initiatives are not members of the city council.",
      "Every official appointed to the planning committee is a member of the city council.",
      "No official appointed to the planning committee opposes public transportation initiatives."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 combine to mean that every official appointed to the planning committee supports public transportation initiatives, making Statement 4 a consistent restatement of this. Statement 2 is also consistent, indicating that the group of public transportation supporters is larger than just city council members. All statements can coexist without contradiction."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates completed an internship.",
      "No candidate who completed an internship failed the final interview.",
      "Some candidates who failed the final interview were successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply a logical chain: if a candidate was successful, they completed an internship, and therefore they did not fail the final interview. This means that all successful candidates did not fail the final interview. Statement 3 directly contradicts this conclusion by asserting that some successful candidates did fail the final interview. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant has blue flowers, it requires alkaline soil.",
      "No plant that requires alkaline soil can tolerate cold temperatures.",
      "Some plants that cannot tolerate cold temperatures have blue flowers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if a plant has blue flowers, then it requires alkaline soil, and therefore it cannot tolerate cold temperatures. This means that all plants with blue flowers cannot tolerate cold temperatures. Statement 3, which says that some plants that cannot tolerate cold temperatures have blue flowers, is entirely consistent with this chain. It simply states that at least one such plant exists, which is not contradicted by the other statements."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants possess a master's degree.",
      "If a person possesses a master's degree, they have prior work experience.",
      "Some applicants who lack prior work experience are successful.",
      "No applicant who did not complete a bachelor's degree was successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a logical chain: if an applicant is successful, they possess a master's degree, and if they possess a master's degree, they have prior work experience. Therefore, all successful applicants must have prior work experience. Statement 3 directly contradicts this conclusion by stating that some successful applicants lack prior work experience. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents in Zone A pay reduced property taxes.",
      "No resident who pays reduced property taxes lives in Zone C.",
      "Some residents of Zone A also live in Zone C."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a logical chain: if a resident is in Zone A, they pay reduced property taxes, and if they pay reduced property taxes, they do not live in Zone C. Therefore, all residents in Zone A do not live in Zone C. Statement 3 directly contradicts this conclusion by stating that some residents of Zone A do live in Zone C. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a student submits all assignments, they will not pass the course.",
      "Every student who passed the course received a commendation.",
      "No student who received a commendation missed any class.",
      "Some students who did not submit all assignments missed some classes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 create a chain of implications: if a student passes the course, then they submitted all assignments (from 1, contrapositive), they received a commendation (from 2), and they did not miss any class (from 3). This means that any student who passed did not miss any class. Statement 4 asserts that some students who did not submit all assignments also missed some classes. From Statement 1, we know that if a student did not submit all assignments, they did not pass. Thus, Statement 4 implies that some students who did not pass also missed some classes. This is entirely consistent with the conclusion that students who did pass did not miss classes; it simply describes a scenario for students who did not pass."
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students selected for the debate team have strong public speaking skills.",
      "If a student has strong public speaking skills, they consistently score well on presentations.",
      "No student who consistently scores well on presentations ever feels nervous before a speech.",
      "Some students selected for the debate team feel nervous before a speech."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a student is selected for the debate team, they have strong public speaking skills, then they score well on presentations, and therefore they do not feel nervous before a speech. This implies that all students selected for the debate team do not feel nervous before a speech. Statement 4 directly contradicts this conclusion by asserting that some students selected for the debate team do feel nervous before a speech. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees required to wear a uniform work in the retail department.",
      "No employee working in the retail department handles sensitive customer data.",
      "Only employees who handle sensitive customer data receive specialized training.",
      "Some employees who receive specialized training are required to wear a uniform."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that if an employee is required to wear a uniform, they work in the retail department, and therefore do not handle sensitive customer data. Statement 3, 'Only employees who handle sensitive customer data receive specialized training,' can be rephrased as 'If an employee does not handle sensitive customer data, then they do not receive specialized training.' Combining these, it follows that any employee required to wear a uniform does not receive specialized training. Statement 4 contradicts this by stating that some employees who receive specialized training are required to wear a uniform. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a tree produces acorns, it is a species of oak.",
      "All trees that are species of oak are deciduous.",
      "Some deciduous trees do not produce acorns.",
      "No tree that requires full sunlight is a species of oak."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all trees that produce acorns are deciduous. Statement 3, 'Some deciduous trees do not produce acorns,' is entirely consistent with this, as it is possible for some deciduous trees not to be oak species. Statement 4 provides additional information about oaks and sunlight, but does not create any contradiction with the other statements or their implications. There is no logical contradiction among these statements; a scenario exists where all are true."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Anyone eligible for the advanced seminar must have completed the prerequisite course.",
      "No student who has completed the prerequisite course has a GPA lower than 3.0.",
      "All students with a GPA higher than 3.0 are considered for scholarships.",
      "Unless a student is considered for scholarships, they are not eligible for the advanced seminar.",
      "Some students eligible for the advanced seminar have a GPA lower than 3.0."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 2 establish a logical chain: if a student is eligible for the advanced seminar, they must have completed the prerequisite course, and therefore they do not have a GPA lower than 3.0. This implies that all students eligible for the advanced seminar have a GPA of 3.0 or higher. Statement 5 directly contradicts this conclusion by asserting that some students eligible for the advanced seminar have a GPA lower than 3.0. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a robin, it builds a nest in spring.",
      "All birds that build nests in spring lay blue eggs.",
      "Some birds that lay blue eggs are not robins.",
      "No bird that migrates south in winter lays blue eggs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that if a bird is a robin, it builds a nest in spring, and therefore lays blue eggs. Statement 3, 'Some birds that lay blue eggs are not robins,' is consistent with this, as not all birds that lay blue eggs must necessarily be robins. Statement 4 introduces a condition that birds laying blue eggs do not migrate south. This is also consistent with robins (which lay blue eggs) typically not migrating south, and does not create any contradiction with the other statements. A scenario exists where all statements are true."
  }
];

export default generatedPuzzles;
