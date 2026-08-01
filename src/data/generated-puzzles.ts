// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All lions are carnivores.",
      "No carnivores eat grass.",
      "Some animals that eat grass are lions."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all lions are carnivores. Statement 2 establishes that no carnivores eat grass. Together, these imply that no lions eat grass. This directly contradicts Statement 3, which claims that some animals that eat grass are lions."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "Some animals with feathers cannot fly.",
      "Penguins are birds.",
      "Some penguins cannot fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Penguins are birds and have feathers (Statement 1, Statement 3). It is possible for some feathered animals not to fly (Statement 2), and for some penguins not to fly (Statement 4), with penguins being examples of feathered animals that do not fly."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dishes requiring sugar are desserts.",
      "No main course is a dessert.",
      "All dishes at the banquet are main courses.",
      "Some dishes at the banquet require sugar."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 states that no main course is a dessert. Statement 3 indicates that all dishes at the banquet are main courses. From these two, it follows that no dish at the banquet is a dessert. However, Statement 1 indicates that all dishes requiring sugar are desserts, and Statement 4 claims some dishes at the banquet require sugar, implying some banquet dishes are desserts. This creates a contradiction."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "If a business fails, it did not prioritize customer satisfaction.",
      "Some businesses that fail still deliver high-quality products.",
      "No business that delivers high-quality products alienates its customers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 together imply that a business is successful if and only if it prioritizes customer satisfaction. Statements 3 and 4 introduce other facts about businesses, but these do not conflict with the success criteria. A failed business can still deliver high-quality products and not alienate customers, yet still not prioritize customer satisfaction."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own boots.",
      "No one who owns boots prefers sandals.",
      "All members of the hiking club prefer sandals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all members of the hiking club own boots. Statement 2 says no one who owns boots prefers sandals. These two statements together logically imply that all members of the hiking club do not prefer sandals. This conclusion directly contradicts Statement 3, which asserts that all members of the hiking club prefer sandals."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe is for a soup, it includes broth.",
      "Some dishes that include broth are not soups.",
      "All dishes that include broth are savory."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. If a recipe is soup, it has broth (Statement 1). Some dishes with broth are not soup (Statement 2) – for example, a stew. All dishes with broth are savory (Statement 3), which is compatible with both soups and non-soups containing broth."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful artists have a strong work ethic.",
      "No one with a strong work ethic procrastinates.",
      "Some artists who procrastinate are successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all successful artists have a strong work ethic. Statement 2 states that no one with a strong work ethic procrastinates. Therefore, it must be true that no successful artist procrastinates. This directly contradicts Statement 3, which claims that some artists who procrastinate are successful."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a building has historical significance, it is protected.",
      "Only buildings with unique architecture are protected.",
      "All buildings with unique architecture are tourist attractions.",
      "Some tourist attractions do not have historical significance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1, 2, and 3 chain together to imply that all buildings with historical significance are tourist attractions. Statement 4 simply states that there are some tourist attractions that are not historically significant, which is compatible with the previous chain; it simply means there are other reasons for a building to be a tourist attraction."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who attend the workshop improve their skills.",
      "No employee who improves their skills receives a negative performance review.",
      "Every employee in department X attended the workshop.",
      "Some employees in department X received a negative performance review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all employees who attend the workshop improve their skills. Statement 2 says no employee who improves their skills receives a negative performance review. Together, these imply that all employees who attend the workshop do not receive a negative performance review. Statement 3 asserts that every employee in department X attended the workshop, which means no employee in department X received a negative performance review. This conclusion is directly contradicted by Statement 4."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a first edition, it is valuable.",
      "All valuable books are kept in a secure vault.",
      "Some books kept in a secure vault are not first editions."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 indicates that first editions are valuable. Statement 2 implies all valuable books are in a secure vault, so all first editions are in the secure vault. Statement 3 states that some books in the secure vault are not first editions, which is consistent; there could be other types of valuable books (e.g., rare later editions) that are also kept in the vault."
  },
  {
    "id": "gen-2-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "All animals with retractable claws are agile hunters.",
      "No agile hunter is slow.",
      "Some felines are slow."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if an animal is a feline, it cannot be slow (Feline → Retractable Claws → Agile Hunter → Not Slow). Statement 4 asserts that some felines are slow, directly contradicting this conclusion."
  },
  {
    "id": "gen-2-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds that migrate fly south for the winter.",
      "No bird that flies south for the winter builds nests in the arctic.",
      "Some birds build nests in the arctic.",
      "Some birds do not migrate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for some birds to build nests in the arctic (Statement 3) and therefore not migrate (derived from Statements 1 and 2: Migrating birds fly south, and birds flying south do not nest in the arctic, so migrating birds do not nest in the arctic). Statement 4 simply states that some birds do not migrate, which is compatible with the arctic nesters or other non-migratory birds."
  },
  {
    "id": "gen-2-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "No student who passed algebra failed pre-calculus.",
      "Every student who passed pre-calculus is eligible for advanced calculus.",
      "Some students are eligible for advanced calculus but did not enroll.",
      "No student who did not pass algebra is eligible for advanced calculus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 2 and 5 (EAC → PA, and PA → PP), eligibility for advanced calculus implies having passed pre-calculus. Statement 3 confirms that passing pre-calculus implies eligibility (PP → EAC). Thus, eligibility, passing algebra, and passing pre-calculus are all equivalent. Statement 1 (AC → PA) and Statement 4 (Some EAC and not AC) are fully compatible with this, indicating some qualified students simply chose not to enroll."
  },
  {
    "id": "gen-2-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups receive significant funding.",
      "If a startup receives significant funding, it expands rapidly.",
      "No startup that expands rapidly maintains its initial team structure.",
      "Startup Alpha is a successful startup and maintains its initial team structure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that if a startup is successful, it does not maintain its initial team structure (Successful Startup → Significant Funding → Expands Rapidly → Does Not Maintain Initial Team Structure). Statement 4 claims that Startup Alpha is both successful and maintains its initial team structure, which directly contradicts this conclusion."
  },
  {
    "id": "gen-2-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every person invited to the gala is a donor.",
      "No donor is denied entry.",
      "Some people who are not invited to the gala are also not donors.",
      "If a person is denied entry, they were not invited to the gala."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 implies that all invited guests are donors. Statement 2 means donors are not denied entry. Statement 4 (the contrapositive of 'If invited, then not denied entry') is consistent with 1 and 2. Statement 3 suggests that there are people who are neither invited nor donors, which does not contradict the requirement that all invited people are donors."
  },
  {
    "id": "gen-2-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who received a bonus attended the annual conference.",
      "No employee who attended the annual conference missed their project deadline.",
      "Some employees missed their project deadline.",
      "Every employee received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a chain implying that every employee did not miss their project deadline (Every Employee → Received Bonus → Attended Conference → Did Not Miss Deadline). Statement 3, however, claims that some employees did miss their project deadline, which directly contradicts the conclusion derived from the other three statements."
  },
  {
    "id": "gen-2-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a succulent, it requires infrequent watering.",
      "All plants requiring infrequent watering are drought-resistant.",
      "No drought-resistant plant thrives in humid environments.",
      "This plant thrives in a humid environment.",
      "This plant is a succulent."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a plant is a succulent, it requires infrequent watering, is drought-resistant, and thus does not thrive in humid environments (S → IW → DR → Not HE). Therefore, if a plant thrives in a humid environment, it cannot be a succulent (HE → Not S). Statement 4 claims 'This plant thrives in a humid environment', which means 'This plant is Not S'. This contradicts Statement 5, which says 'This plant is a succulent'."
  },
  {
    "id": "gen-2-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful political campaigns employ a strong media strategy.",
      "If a campaign employs a strong media strategy, it uses social media extensively.",
      "No campaign that uses social media extensively avoids public debate.",
      "Some political campaigns avoid public debate.",
      "Campaign Z is a successful political campaign."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1, 2, and 3, it follows that any successful political campaign does not avoid public debate (SPC → SMS → USME → Not APD). Statement 5 indicates Campaign Z is successful, so it also does not avoid public debate, which is consistent. Statement 4 merely states that some political campaigns avoid public debate, implying these campaigns are not successful, which is logically permissible."
  },
  {
    "id": "gen-2-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every artist who wins the annual award has a unique style.",
      "If an artist has a unique style, they are highly influential.",
      "No highly influential artist copies other artists.",
      "Some artists who copy other artists win the annual award."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if an artist wins the annual award, they have a unique style, are highly influential, and therefore do not copy other artists (AAW → US → HI → Not COA). Statement 4 claims that some artists who copy other artists win the annual award. This implies that some artists both copy other artists and do not copy other artists, which is a direct contradiction."
  },
  {
    "id": "gen-2-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful mountain climbers use specialized equipment.",
      "If a climber uses specialized equipment, they train for high altitudes.",
      "Some climbers who train for high altitudes are not successful mountain climbers.",
      "No climber who trains for high altitudes avoids difficult peaks.",
      "Not all successful mountain climbers avoid difficult peaks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1, 2, and 4, it follows that all successful mountain climbers train for high altitudes and do not avoid difficult peaks (SMC → USE → THA → Not ADP). Statement 5 ('Not all successful mountain climbers avoid difficult peaks', meaning some do not avoid them) is consistent with this universal conclusion. Statement 3 (some who train for high altitudes are not successful) is also compatible, as the groups are not necessarily mutually exclusive."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of Sector 7 have access to the city's main reservoir.",
      "No one with access to the city's main reservoir is permitted to use private wells.",
      "Some residents of Sector 7 use private wells."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all residents of Sector 7 have access to the reservoir. Statement 2 says no one with reservoir access can use private wells. Together, these imply that no residents of Sector 7 are permitted to use private wells, which directly contradicts Statement 3."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student passes the final exam, they receive a certificate.",
      "No student who missed more than three classes received a certificate.",
      "Every student in the program passed the final exam.",
      "Some students in the program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 together establish that every student in the program receives a certificate. Statement 2 indicates that no student who received a certificate missed more than three classes. Therefore, no student in the program missed more than three classes, which contradicts Statement 4."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No paintings by contemporary artists are eligible for the ancient art exhibition.",
      "All pieces in the upcoming gallery show are eligible for the ancient art exhibition.",
      "Some pieces in the upcoming gallery show are paintings by contemporary artists."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 asserts that all pieces in the upcoming gallery show are eligible for the ancient art exhibition. Statement 1 dictates that no contemporary artist's paintings are eligible for the ancient art exhibition. These two statements together imply that no pieces in the upcoming gallery show are paintings by contemporary artists, which directly contradicts Statement 3."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every lawyer in this firm has a Juris Doctor degree.",
      "No one with a Juris Doctor degree works in the administrative department.",
      "Some employees in the administrative department are lawyers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no lawyer in this firm works in the administrative department. This directly contradicts Statement 3, which states that some employees in the administrative department are lawyers."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs in the park are leashed.",
      "Some animals in the park are not dogs.",
      "No animals in the park are aggressive if they are leashed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. All dogs in the park are leashed and therefore not aggressive. There can still be other types of animals in the park that are not dogs, and their presence does not create a contradiction with the leashed and non-aggressive dogs."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All plants in this greenhouse require daily watering.",
      "Some plants in this greenhouse are succulents.",
      "No succulents require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 2 claims some plants in the greenhouse are succulents. Statement 3 says no succulents require daily watering. Therefore, some plants in the greenhouse do not require daily watering. This directly contradicts Statement 1, which states that all plants in the greenhouse require daily watering."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every item in the antique shop is valuable.",
      "Some valuable items are not from the antique shop.",
      "No valuable item is mass-produced."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. All items in the antique shop are valuable and, consequently, not mass-produced. The fact that some valuable items exist outside the antique shop does not create any conflict with these assertions."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an athlete trains daily, they will improve their performance.",
      "Some athletes who train daily do not win competitions.",
      "All athletes who win competitions have improved their performance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Athletes who train daily improve their performance, and some might not win competitions, which is not a contradiction. Separately, all athletes who win competitions must have improved their performance, which is also compatible with the other statements."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful startup has innovative leadership.",
      "No company with innovative leadership struggles with funding.",
      "Some successful startups receive grants.",
      "Companies that receive grants do not struggle with funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful startups have innovative leadership and, as a result, do not struggle with funding. The fact that some of these startups also receive grants, which implies they do not struggle with funding, is entirely compatible and creates no contradiction."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds migrate south for the winter.",
      "Some animals that migrate south for the winter are not birds.",
      "No animals that migrate south for the winter are reptiles."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. All birds migrate south for the winter, and no animals migrating south are reptiles. The existence of some non-bird animals that also migrate south for the winter does not create a conflict."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "Every innovative thinker avoids strictly conventional methods.",
      "Anyone who avoids strictly conventional methods adapts easily.",
      "Some successful entrepreneurs struggle to adapt."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 chain together to imply that all successful entrepreneurs adapt easily. Adapting easily means not struggling to adapt. Thus, all successful entrepreneurs do not struggle to adapt. This directly contradicts Statement 4, which claims some successful entrepreneurs struggle to adapt."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All research scientists are analytical thinkers.",
      "Some analytical thinkers are not employed by universities.",
      "No one employed by a university is a research scientist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If all research scientists are analytical thinkers (Statement 1) and no one employed by a university is a research scientist (Statement 3), then all research scientists are analytical thinkers not employed by a university. This outcome is perfectly compatible with Statement 2, which states that some analytical thinkers are not employed by universities."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All applicants for the leadership program have prior management experience.",
      "Every person with prior management experience has completed the advanced training module.",
      "All who completed the advanced training module have exceptional communication skills.",
      "Some applicants for the leadership program do not have exceptional communication skills."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 chain together to imply that all applicants for the leadership program have exceptional communication skills. This directly contradicts Statement 4, which asserts that some applicants for the leadership program do not have exceptional communication skills."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful project managers are highly organized.",
      "Some highly organized individuals are not good at public speaking.",
      "No one who is good at public speaking struggles with team motivation.",
      "Every successful project manager is good at public speaking."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 4, all successful project managers are highly organized and good at public speaking. From Statement 3, if they are good at public speaking, they do not struggle with team motivation. Statement 2, that some highly organized individuals are not good at public speaking, is consistent because successful project managers are a subset of highly organized individuals, and other highly organized individuals could exist who are not good at public speaking."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of Elderwood Village are over 65 years old.",
      "Every person over 65 years old qualifies for senior discounts.",
      "No one who qualifies for senior discounts has to pay full price for public transport.",
      "All residents of Elderwood Village have to pay full price for public transport."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 chain together to imply that all residents of Elderwood Village do not have to pay full price for public transport. This directly contradicts Statement 4, which claims all residents of Elderwood Village have to pay full price for public transport."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All dogs in the park are on a leash.",
      "Some dogs on a leash are not barking.",
      "No dog that is barking is friendly.",
      "Every dog in the park is friendly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 3, if a dog is friendly, it is not barking. Since all dogs in the park are friendly (Statement 4), all dogs in the park are not barking. As all dogs in the park are on a leash (Statement 1), this group contributes to 'some dogs on a leash are not barking' (Statement 2), making the set consistent."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires minimal water.",
      "All plants that require minimal water thrive in arid climates.",
      "No plant that thrives in arid climates has broad leaves.",
      "Some succulents have broad leaves."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 chain together to imply that all succulents have no broad leaves. This directly contradicts Statement 4, which states that some succulents have broad leaves."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "No one can become a certified diver unless they pass the practical exam.",
      "All certified divers have completed extensive safety training.",
      "Some people who have completed extensive safety training have not passed the practical exam.",
      "If a person passes the practical exam, they are skilled swimmers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 means all certified divers pass the practical exam. Statement 2 means all certified divers completed extensive safety training. Statement 4 means those who pass the practical exam are skilled swimmers. Statement 3, that some people with extensive safety training have not passed the practical exam, is consistent because not all people with extensive safety training need to be certified divers, and thus not all need to have passed the practical exam."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed the required internship.",
      "Every person who completed the required internship received a commendation.",
      "All who received a commendation were eligible for the scholarship.",
      "At least one successful candidate was deemed ineligible for the scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 chain together to imply that all successful candidates were eligible for the scholarship. This directly contradicts Statement 4, which asserts that at least one successful candidate was deemed ineligible for the scholarship."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique watches are valuable.",
      "Some valuable items are not made of precious metals.",
      "No item made of precious metals is easily damaged.",
      "Every antique watch is easily damaged."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 3, if an item is easily damaged, it is not made of precious metals. Since all antique watches are easily damaged (Statement 4), all antique watches are not made of precious metals. This is compatible with Statement 1 (all antique watches are valuable) and Statement 2 (some valuable items are not made of precious metals, which would include antique watches)."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the final exam, they receive a certificate of completion.",
      "No student who missed more than three lectures received a certificate of completion.",
      "Every student enrolled in the advanced seminar passed the final exam.",
      "At least one student enrolled in the advanced seminar missed more than three lectures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 establish that every student in the advanced seminar passes the final exam and therefore receives a certificate of completion. Statement 2 dictates that no student who missed more than three lectures receives a certificate. Statement 4 claims that some students in the advanced seminar missed more than three lectures, which contradicts the conclusion that every student in the seminar receives a certificate."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All reptiles are cold-blooded animals.",
      "No mammal is a cold-blooded animal.",
      "Some cold-blooded animals are not reptiles.",
      "If an animal lays eggs, it is not a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Reptiles are cold-blooded (Statement 1). Mammals are not cold-blooded (Statement 2). Fish or amphibians are cold-blooded but not reptiles (consistent with Statement 3). Animals that lay eggs, like birds or reptiles, are not mammals (consistent with Statement 4 and general biological facts). No logical contradiction arises."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates who complete the training program are eligible for promotion.",
      "No employee eligible for promotion has received a disciplinary warning.",
      "Some employees have received a disciplinary warning.",
      "Every employee who received a disciplinary warning completed the training program."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 create a chain: If an employee received a disciplinary warning (from Statement 4), they completed the training program (from Statement 1), which makes them eligible for promotion (from Statement 2), which means they have not received a disciplinary warning. Statement 3 claims that some employees have received a disciplinary warning, forcing this contradiction where such an employee both has and has not received a warning."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is created using digital tools, it is considered contemporary art.",
      "No piece of contemporary art adheres to classical aesthetic principles.",
      "Every artwork that does not adhere to classical aesthetic principles is exhibited in the main gallery.",
      "At least one artwork created using digital tools is not exhibited in the main gallery."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If an artwork is created using digital tools, then it is contemporary art, then it does not adhere to classical aesthetic principles, and therefore it is exhibited in the main gallery. This implies that all artworks created using digital tools are exhibited in the main gallery. Statement 4 directly contradicts this by asserting that at least one such artwork is not exhibited in the main gallery."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the survey received a gift card.",
      "No one who received a gift card provided negative feedback.",
      "Some participants provided negative feedback.",
      "If a participant did not complete the survey, they provided negative feedback."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statements 1 and 2, any participant who completed the survey did not provide negative feedback. Statement 4 states that anyone who did not complete the survey provided negative feedback. This creates two groups: those who completed the survey and gave no negative feedback, and those who did not complete the survey and gave negative feedback. Statement 3 is consistent with the second group existing."
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "No risk-taker avoids collaboration with others.",
      "If an individual collaborates with others, they possess strong leadership skills.",
      "Some successful entrepreneurs do not possess strong leadership skills."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Every successful entrepreneur is a risk-taker (1), who collaborates with others (2), and therefore possesses strong leadership skills (3). This means every successful entrepreneur possesses strong leadership skills. Statement 4 directly contradicts this by stating that some successful entrepreneurs do not possess strong leadership skills."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful products are innovative.",
      "No innovative product is easy to market.",
      "Some easy-to-market products are not successful.",
      "If a product is not innovative, it is easy to market."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that successful products are not easy to market. Statement 2 also implies that easy-to-market products are not innovative. Statement 4 implies that not innovative products are easy to market. Together, Statements 2 and 4 mean a product is easy to market if and only if it is not innovative. Statement 3 then means some products that are not innovative are also not successful, which is consistent with the other derived relationships."
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only artists with extensive training are accepted into the master class.",
      "Every artist who lacks natural talent struggles with advanced techniques.",
      "If an artist struggles with advanced techniques, they are not accepted into the master class.",
      "Some artists accepted into the master class lack natural talent."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 establish a chain: If an artist lacks natural talent (2), they struggle with advanced techniques (3), and therefore are not accepted into the master class. This implies that any artist accepted into the master class must possess natural talent. Statement 4 directly contradicts this by claiming that some artists accepted into the master class lack natural talent."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful marketing campaigns utilize data analytics.",
      "No campaign that utilizes data analytics is based purely on intuition.",
      "Some campaigns based purely on intuition are not successful.",
      "If a campaign is not based purely on intuition, it is successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that successful campaigns do not rely on intuition. Statement 4 implies that campaigns not based on intuition are successful. Together, these mean a campaign is successful if and only if it is not based purely on intuition. Statement 3 (some intuition-based campaigns are not successful) aligns perfectly with this, as intuition-based campaigns would be unsuccessful."
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research paper published in this journal undergoes peer review.",
      "No paper that undergoes peer review receives an immediate acceptance.",
      "If a research paper addresses a novel topic, it receives an immediate acceptance.",
      "At least one research paper published in this journal addresses a novel topic."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 indicate that any paper published in this journal undergoes peer review and therefore does not receive an immediate acceptance. Statement 3 states that if a paper addresses a novel topic, it receives an immediate acceptance. Statement 4 asserts that at least one paper published in this journal addresses a novel topic, creating a contradiction: a paper published in this journal that addresses a novel topic would both receive and not receive an immediate acceptance."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who complete the final project pass the course.",
      "No student who passes the course needs to retake it.",
      "Some students who completed the final project still need to retake the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that completing the final project leads to passing the course. Statement 2 states that passing the course means a student does not need to retake it. Taken together, these imply that completing the final project means a student does not need to retake the course. Statement 3 directly contradicts this by asserting that some students who completed the final project still need to retake the course."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruits rich in Vitamin C are citrus fruits.",
      "Some citrus fruits are not rich in Vitamin C.",
      "All lemons are citrus fruits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Lemons are citrus fruits, and citrus fruits can be rich in Vitamin C or not. Some citrus fruits might not be rich in Vitamin C, which is compatible with all fruits rich in Vitamin C being citrus fruits. There is no logical conflict."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No reptile has feathers.",
      "All birds have feathers.",
      "Some creatures that lay eggs are reptiles.",
      "Every creature that lays eggs is a bird."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that every creature that lays eggs is a bird. Statement 2 states that all birds have feathers. This implies that every creature that lays eggs has feathers. However, Statement 3 claims some creatures that lay eggs are reptiles, and Statement 1 states no reptile has feathers. This means some creatures that lay eggs do not have feathers, which contradicts the conclusion drawn from Statement 4 and Statement 2."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe is a dessert, it contains sugar.",
      "Some recipes that contain sugar are not desserts.",
      "All cakes are desserts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. All cakes are desserts and therefore contain sugar. It is also possible that some recipes containing sugar are not desserts (e.g., a sweet and sour sauce), without creating any logical conflict with the other statements."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus completed the training.",
      "No employee who completed the training was absent for more than five days.",
      "Some employees were absent for more than five days but still received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that receiving a bonus requires completing training. Statement 2 states that completing training means an employee was not absent for more than five days. Therefore, any employee who received a bonus must not have been absent for more than five days. Statement 3 directly contradicts this by asserting that some employees were both absent for more than five days and received a bonus."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car sold at \"Wheels Auto\" has power steering.",
      "Some cars with power steering are not sold at \"Wheels Auto.\"",
      "The red sedan has power steering."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. The red sedan has power steering. It could be a car sold at \"Wheels Auto\" (Statement 1) or one of the cars with power steering not sold at \"Wheels Auto\" (Statement 2). No contradiction arises."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a mystery novel, it is a paperback.",
      "No paperback book is classified as rare.",
      "Some rare books are not mystery novels.",
      "All mystery novels are classified as rare."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that all mystery novels are paperbacks. Statement 2 states that no paperback book is classified as rare. Together, these imply that no mystery novel is classified as rare. Statement 4 directly contradicts this by asserting that all mystery novels are classified as rare."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful.",
      "\"The Daily Grind\" is a successful business."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. \"The Daily Grind\" is a successful business, so it prioritizes customer satisfaction. It is also possible for other businesses to prioritize customer satisfaction without being successful, which does not contradict the other statements."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No athlete who skipped breakfast performs well.",
      "All athletes who train regularly perform well.",
      "Some athletes who skip breakfast train regularly."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 claims that no athlete who skipped breakfast performs well. Statement 2 claims that all athletes who train regularly perform well. Therefore, it is logically impossible for an athlete to both skip breakfast and train regularly, as this would mean they simultaneously do not perform well and perform well. Statement 3 asserts that some athletes do both, creating a direct contradiction."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every painting in the exhibit uses oil paints.",
      "Some paintings that use oil paints are not in the exhibit.",
      "\"Sunset Over the Lake\" uses oil paints."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. \"Sunset Over the Lake\" uses oil paints. It could be one of the paintings in the exhibit (Statement 1) or one of the paintings that uses oil paints but is not in the exhibit (Statement 2). There is no logical conflict."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is a sculpture, it is three-dimensional.",
      "All three-dimensional artworks are displayed in open spaces.",
      "No artwork displayed in an open space is fragile.",
      "There is at least one sculpture that is fragile."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if an artwork is a sculpture, it is three-dimensional, then it is displayed in an open space, and therefore it is not fragile. This implies that no sculpture can be fragile. Statement 4 directly contradicts this conclusion by asserting that some sculptures are fragile."
  },
  {
    "id": "gen-7-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates for the executive board must have prior leadership experience.",
      "If a person has prior leadership experience, they understand organizational dynamics.",
      "No one who understands organizational dynamics is unfamiliar with project management.",
      "Some candidates for the executive board are unfamiliar with project management."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain of implications: all candidates for the executive board have prior leadership experience, which means they understand organizational dynamics, and thus they are familiar with project management. This means all candidates for the executive board must be familiar with project management. Statement 4 contradicts this by stating that some candidates are unfamiliar with project management."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful athlete trains rigorously.",
      "No one who trains rigorously avoids injury risks.",
      "If an athlete takes injury risks, they undergo regular medical check-ups.",
      "There is a successful athlete who does not undergo regular medical check-ups."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 connect to form a logical progression: if an athlete is successful, they train rigorously, which means they take injury risks, and therefore they undergo regular medical check-ups. This implies that all successful athletes undergo regular medical check-ups. Statement 4 presents a direct contradiction by asserting that some successful athletes do not undergo regular medical check-ups."
  },
  {
    "id": "gen-7-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is drought-tolerant, it has deep roots.",
      "All plants with deep roots can access groundwater.",
      "No plant that can access groundwater needs frequent watering.",
      "Every plant that needs frequent watering is not drought-tolerant.",
      "There are some drought-tolerant plants that need frequent watering."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 combine to show that if a plant is drought-tolerant, it has deep roots, can access groundwater, and therefore does not need frequent watering. This implies that no drought-tolerant plant needs frequent watering. Statement 5 directly contradicts this by claiming that some drought-tolerant plants do need frequent watering. Statement 4 is consistent with the logical chain (If DT then not FW; contrapositive: If FW then not DT)."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees eligible for promotion have completed the advanced training program.",
      "If an employee completed the advanced training program, they possess specialized skills.",
      "No employee possessing specialized skills is assigned to general tasks.",
      "Some employees assigned to general tasks are eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical flow: employees eligible for promotion complete the advanced training program, which means they possess specialized skills, and thus are not assigned to general tasks. This implies that no employee eligible for promotion is assigned to general tasks. Statement 4 directly contradicts this by stating that some employees assigned to general tasks are eligible for promotion."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds that migrate south for winter have excellent navigational skills.",
      "No bird with excellent navigational skills gets lost during migration.",
      "Some birds that migrate south for winter occasionally get lost."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all birds that migrate south for winter do not get lost during migration. Statement 3 directly contradicts this, asserting that some birds migrating south do get lost."
  },
  {
    "id": "gen-8-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every artist with a unique style experiments with new mediums.",
      "Some artists who experiment with new mediums are not commercially successful.",
      "All commercially successful artists experiment with new mediums."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. An artist can have a unique style and experiment, some experimenters might not be successful, and all successful artists are also experimenters. These conditions do not create a contradiction."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student passes the advanced algebra exam, they understand complex equations.",
      "No student who understands complex equations finds trigonometry difficult.",
      "All students in the math club passed the advanced algebra exam.",
      "Some students in the math club find trigonometry difficult."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect to imply that no student in the math club finds trigonometry difficult. This derived conclusion directly contradicts Statement 4, which claims some students in the math club do find trigonometry difficult."
  },
  {
    "id": "gen-8-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who attend the quarterly meeting receive a bonus.",
      "Some employees who receive a bonus do not attend the quarterly meeting.",
      "Every employee who does not attend the quarterly meeting receives a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. Together, statements 1 and 3 mean that all employees receive a bonus, regardless of whether they attend the meeting. Statement 2 is then easily true, as some of the employees receiving bonuses would naturally be those who did not attend the meeting."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book on the top shelf is a novel.",
      "No novel is also a non-fiction work.",
      "Some books on the top shelf are educational non-fiction works.",
      "All educational non-fiction works are non-fiction works."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no book on the top shelf is a non-fiction work. However, Statements 3 and 4 combine to assert that some books on the top shelf are non-fiction works. This creates a direct contradiction."
  },
  {
    "id": "gen-8-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful marketing campaigns target specific demographics.",
      "Some campaigns that target specific demographics are not successful.",
      "No campaign that fails to target specific demographics is successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 are logically equivalent (contrapositives of each other), both stating that success requires targeting specific demographics. Statement 2 is consistent with this, as it allows for campaigns that target specific demographics but are not successful, which is not forbidden by the other statements."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No car manufactured before 2010 has modern safety features.",
      "Every car with an active recall has modern safety features.",
      "All cars that were manufactured before 2010 are subject to an active recall."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 2 and 3 logically connect to imply that all cars manufactured before 2010 have modern safety features. This directly contradicts Statement 1, which claims no car manufactured before 2010 has modern safety features."
  },
  {
    "id": "gen-8-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who attended the seminar submitted a feedback form.",
      "Some students who submitted a feedback form did not attend the seminar.",
      "No student who failed to submit a feedback form attended the seminar."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 are logically equivalent (contrapositives of each other), both indicating that attending the seminar guarantees submitting a feedback form. Statement 2 is consistent, as it allows for individuals who submitted forms but were not seminar attendees, which is not forbidden by the other rules."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of this city are required to pay municipal taxes.",
      "No one who is retired is required to pay municipal taxes.",
      "Some residents of this city are retired."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 3 imply that some retired people are residents of the city and are required to pay municipal taxes. This conclusion directly contradicts Statement 2, which states that no retired person is required to pay municipal taxes."
  },
  {
    "id": "gen-8-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful politician possesses excellent public speaking skills.",
      "Some individuals with excellent public speaking skills are not successful politicians.",
      "No politician who lacks excellent public speaking skills is successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 are logically equivalent, both asserting that excellent public speaking skills are necessary for a politician to be successful. Statement 2 is also consistent, as it simply means that not all individuals with excellent public speaking skills are successful politicians, which is allowed by the other statements."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Anyone who trains daily is well-conditioned.",
      "No well-conditioned person suffers from chronic fatigue.",
      "Some professional athletes suffer from chronic fatigue."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (All professional athletes train daily) and Statement 2 (Anyone who trains daily is well-conditioned) together imply that all professional athletes are well-conditioned. This, combined with Statement 3 (No well-conditioned person suffers from chronic fatigue), leads to the conclusion that all professional athletes do not suffer from chronic fatigue. Statement 4 directly contradicts this by asserting that some professional athletes suffer from chronic fatigue. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All migratory birds fly south for winter.",
      "Some birds that fly south for winter are not migratory.",
      "No bird that flies south for winter remains in the north.",
      "All birds that remain in the north are non-migratory."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 establish that all migratory birds fly south for winter and thus do not remain in the north. Statement 4 (All birds that remain in the north are non-migratory) is the contrapositive of 'All migratory birds do not remain in the north', making it consistent with the derived chain. Statement 2 (Some birds that fly south for winter are not migratory) is also perfectly consistent, as not all birds flying south need to be migratory."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful writer has published a novel.",
      "No one who has published a novel has struggled with writer's block.",
      "Some successful writers have struggled with writer's block."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (Every successful writer has published a novel) and Statement 2 (No one who has published a novel has struggled with writer's block) together imply that no successful writer has struggled with writer's block. Statement 3 directly contradicts this conclusion by stating that some successful writers have struggled with writer's block. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All reputable news sources fact-check their stories.",
      "Some news sources that fact-check their stories are not reputable.",
      "No news source that spreads misinformation fact-checks its stories.",
      "All news sources that do not fact-check their stories spread misinformation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all reputable news sources fact-check, and Statement 2 indicates that some news sources that fact-check are not reputable, which is consistent. Statements 3 (No news source that spreads misinformation fact-checks its stories) and 4 (All news sources that do not fact-check their stories spread misinformation) are logically equivalent (contrapositives of each other). No logical chain formed by these statements leads to a contradiction."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a succulent, it requires minimal watering.",
      "Plants that require minimal watering are drought-resistant.",
      "No plant that is drought-resistant wilts easily.",
      "Some succulents wilt easily."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (If a plant is a succulent, it requires minimal watering), Statement 2 (Plants that require minimal watering are drought-resistant), and Statement 3 (No plant that is drought-resistant wilts easily) form a chain: Succulent → Minimal Watering → Drought-Resistant → Does Not Wilt Easily. This implies that all succulents do not wilt easily. Statement 4 directly contradicts this conclusion by asserting that some succulents wilt easily. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups prioritize customer feedback.",
      "Some companies that prioritize customer feedback are not successful startups.",
      "No company that fails to innovate is a successful startup.",
      "Some successful startups do not fail to innovate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that successful startups prioritize customer feedback. Statement 2 is consistent, suggesting that the group of companies prioritizing feedback is larger than just successful startups. Statement 3 implies that all successful startups innovate. Statement 4 is a particular affirmation of Statement 3, meaning it's consistent. No logical contradiction arises when considering all statements together."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents who vote in local elections care about community issues.",
      "No one who cares about community issues is uninformed about local policies.",
      "Every person who is uninformed about local policies is disinterested in civic affairs.",
      "Some residents who vote in local elections are disinterested in civic affairs.",
      "No resident disinterested in civic affairs cares about community issues."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (All residents who vote in local elections care about community issues) establishes that RLE → CCI. Statement 5 (No resident disinterested in civic affairs cares about community issues) implies that CCI → not DCA. Chaining these, we get RLE → CCI → not DCA, meaning all residents who vote in local elections are not disinterested in civic affairs. Statement 4 directly contradicts this by stating some residents who vote in local elections are disinterested in civic affairs. Statements 2 and 3 do not contribute to this specific contradiction."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who complete the optional module earn extra credit.",
      "No student who earns extra credit fails the course.",
      "Some students who do not fail the course did not complete the optional module.",
      "Every student who fails the course passed the midterm."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all students who complete the optional module do not fail the course. Statement 3 is consistent, as there can be students who don't fail but didn't complete the module. Statement 4 describes a characteristic of students who fail, which does not conflict with the other statements. The set as a whole contains no logical contradictions."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All advanced encryption algorithms are computationally intensive.",
      "No computationally intensive process can run on a basic processor.",
      "Some advanced encryption algorithms can run on a basic processor."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All advanced encryption algorithms are computationally intensive) and Statement 2 (No computationally intensive process can run on a basic processor) together imply that all advanced encryption algorithms cannot run on a basic processor. Statement 3 directly contradicts this conclusion by asserting that some advanced encryption algorithms can run on a basic processor. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful marketing campaign uses targeted advertising.",
      "Some campaigns that use targeted advertising are not successful.",
      "No campaign that uses targeted advertising has a low conversion rate.",
      "All campaigns with a low conversion rate avoid targeted advertising."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 (Every successful marketing campaign uses targeted advertising) and Statement 2 (Some campaigns that use targeted advertising are not successful) are consistent. Statements 3 (No campaign that uses targeted advertising has a low conversion rate) and 4 (All campaigns with a low conversion rate avoid targeted advertising) are logically equivalent (contrapositives). The combined implications do not lead to any contradiction; successful campaigns use targeted advertising and do not have low conversion rates, and there are other targeted campaigns that may or may not be successful but also do not have low conversion rates."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for the academic scholarship, then they have a GPA of 3.8 or higher.",
      "No student with a GPA of 3.8 or higher has ever failed the advanced physics course.",
      "At least one student who failed the advanced physics course is eligible for the academic scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that eligible students have a GPA of 3.8 or higher. Statement 2 indicates that students with a GPA of 3.8 or higher did not fail the advanced physics course. Together, these imply that no student eligible for the scholarship failed the advanced physics course, which directly contradicts Statement 3. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-10-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs attended business school.",
      "Some business school graduates are not successful entrepreneurs.",
      "If someone attended business school, then they are highly motivated.",
      "No highly motivated person ever fails to achieve their goals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful entrepreneurs attend business school (Statement 1), and some business school graduates are not successful entrepreneurs (Statement 2). Business school graduates are highly motivated (Statement 3), and highly motivated people achieve their goals (Statement 4). This chain of implications is consistent with the existence of some business school graduates who are not entrepreneurs, as their path doesn't create any contradictions."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, then it is an excellent flyer.",
      "No excellent flyer has weak wing muscles.",
      "All birds that are able to migrate long distances have weak wing muscles.",
      "Some swifts are able to migrate long distances."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 states swifts are excellent flyers. Statement 2 states excellent flyers do not have weak wing muscles, implying they have strong wing muscles. Thus, swifts have strong wing muscles. Statement 3 states birds able to migrate long distances have weak wing muscles. This means a bird cannot be both a swift (strong wing muscles) and able to migrate long distances (weak wing muscles). This contradicts Statement 4, which claims some swifts can migrate long distances. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-10-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a bestseller, then it is widely reviewed.",
      "Some widely reviewed books are not bestsellers.",
      "No book written by a new author is widely reviewed, unless it is a bestseller.",
      "Maria's latest book is written by a new author and is widely reviewed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 4, Maria's book is by a new author and widely reviewed. Statement 3 implies that any book by a new author that is widely reviewed must be a bestseller. Therefore, Maria's book is a bestseller. This is consistent with Statement 1 (bestsellers are widely reviewed) and Statement 2 (some widely reviewed books are not bestsellers, which just means not all widely reviewed books are bestsellers)."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the advanced seminar must have completed the prerequisite course.",
      "If someone completed the prerequisite course, then they possess strong analytical skills.",
      "No one with strong analytical skills struggles with abstract concepts.",
      "There is at least one participant in the advanced seminar who struggles with abstract concepts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 states that all seminar participants completed the prerequisite. Statement 2 says completing the prerequisite means possessing strong analytical skills. Statement 3 indicates that possessing strong analytical skills means not struggling with abstract concepts. Combining these, it logically follows that no seminar participant struggles with abstract concepts. This directly contradicts Statement 4. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-10-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the company's stock price rises, investors are optimistic.",
      "If investors are optimistic, then market volatility decreases.",
      "Market volatility never decreases unless significant new data is released.",
      "The company's stock price rose today, but no significant new data was released."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that a rising stock price leads to optimistic investors. Statement 2 states that optimistic investors lead to decreased market volatility. Statement 3 asserts that decreased market volatility only occurs if significant new data is released. Therefore, a rising stock price (from Statements 1, 2, and 3) implies that significant new data must have been released. This directly contradicts Statement 4, which claims the stock price rose but no new data was released. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project is completed on schedule, then all resources were properly allocated.",
      "Some projects where resources were properly allocated are still not completed on schedule.",
      "No project can be completed on schedule unless its budget was approved in advance.",
      "This project's budget was approved in advance, and its resources were properly allocated."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 4, the project's budget was approved and resources were allocated. Statement 3 indicates that being completed on schedule requires budget approval, which is met. Statement 1 indicates that being completed on schedule requires proper resource allocation, which is also met. Statement 2 simply notes that proper resource allocation doesn't guarantee being on schedule, which is perfectly consistent with the other conditions."
  },
  {
    "id": "gen-10-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who received excellent performance reviews were offered a promotion.",
      "No employee who was offered a promotion declined it.",
      "If an employee did not decline a promotion, then they are still working at the company.",
      "Some employees who received excellent performance reviews are no longer working at the company."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says excellent reviews lead to promotion offers. Statement 2 says promotion offers were not declined. Statement 3 says not declining a promotion means still working at the company. Thus, receiving an excellent performance review logically leads to still working at the company. This directly contradicts Statement 4, which claims some employees with excellent reviews are no longer working at the company. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a city implemented the new traffic plan, then its average commute times decreased.",
      "No city that implemented the new traffic plan experienced an increase in traffic accidents.",
      "Some cities where average commute times decreased did not implement the new traffic plan.",
      "City X's average commute times decreased, and it experienced no increase in traffic accidents."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 and 2 establish consequences for cities implementing the new traffic plan (decreased commute times and no increase in accidents). Statement 3 confirms that other factors can also lead to decreased commute times, independently of the traffic plan. Statement 4 provides specific conditions for City X that align with these possibilities; City X's outcomes could be due to the new plan, or due to other factors (consistent with Statement 3)."
  },
  {
    "id": "gen-10-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful product launches were preceded by extensive market research.",
      "If extensive market research was conducted, then all potential risks were identified.",
      "No product launch with identified potential risks ever fails to meet its sales targets.",
      "The recent product launch was successful, but it failed to meet its sales targets."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says successful launches require market research. Statement 2 says market research identifies all risks. Statement 3 says identified risks mean meeting sales targets (not failing them). Taken together, a successful product launch implies that it meets its sales targets. This directly contradicts Statement 4, which states a successful launch failed to meet its targets. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club own a chessboard.",
      "No one who owns a chessboard has ever competed internationally.",
      "Some members of the chess club have competed internationally."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all members of the chess club own a chessboard. Statement 2 states that no one who owns a chessboard has competed internationally. Taken together, these two statements logically lead to the conclusion that no members of the chess club have competed internationally. This conclusion directly contradicts Statement 3, which claims that some members of the chess club have competed internationally."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All participants who finished the marathon received a medal.",
      "Some people who received a medal did not finish the marathon.",
      "No participant who failed to finish the marathon received a medal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that finishing the marathon guarantees a medal. Statement 2 suggests there are other ways to receive a medal, which doesn't contradict Statement 1 (it just means not all medal recipients are marathon finishers). Statement 3 is the contrapositive of Statement 1 (If not Finished, then not Medal), meaning it expresses the same logical truth as Statement 1. No contradictions arise."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a falcon, then it is a predator.",
      "No predators are herbivores.",
      "Some herbivores are falcons."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a bird is a falcon, it is a predator. Statement 2 says that no predators are herbivores. Combining these, it logically follows that no falcons are herbivores. This derived conclusion directly contradicts Statement 3, which asserts that some herbivores are falcons."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees in the marketing department attended the training.",
      "Some people who attended the training are not in the marketing department.",
      "Every person who attended the training received a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 says all marketing employees attended training. Statement 2 says some who attended training are not in marketing, which is fully compatible with Statement 1 (not all who attended training have to be marketing employees). Statement 3 says everyone who attended training received a certificate. All these can be simultaneously true."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All team captains attended the strategy meeting.",
      "No substitute players attended the strategy meeting.",
      "All substitute players are team captains."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 claims that all substitute players are team captains. Statement 1 states that all team captains attended the strategy meeting. Therefore, it logically follows that all substitute players must have attended the strategy meeting. This conclusion directly contradicts Statement 2, which says that no substitute players attended the strategy meeting."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a domesticated cat, then it has whiskers.",
      "Some animals with whiskers are not domesticated cats.",
      "All domesticated cats are kept as pets."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes a characteristic of domesticated cats. Statement 2 simply notes that not all animals with whiskers are domesticated cats, which is compatible with Statement 1 (many other animals have whiskers). Statement 3 describes another characteristic of domesticated cats. There is no logical contradiction among these claims."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a flower is a rose, it has thorns.",
      "If a flower has thorns, it is not a common garden annual.",
      "Some roses are common garden annuals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all roses have thorns. Statement 2 implies that no flower with thorns is a common garden annual. Combining these, it logically follows that no roses are common garden annuals. This conclusion directly contradicts Statement 3, which states that some roses are common garden annuals."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors write frequently.",
      "No one who writes frequently neglects their health.",
      "Some people who neglect their health are not successful authors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, we can infer that all successful authors do not neglect their health. The contrapositive of this inference is that anyone who neglects their health is not a successful author. Statement 3 (Some people who neglect their health are not successful authors) is entirely consistent with this, as it simply says that at least one such person exists, which is fully compatible with all of them being such."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds lay eggs.",
      "No fish lay eggs.",
      "Some birds are fish."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims that some birds are fish. Statement 2 states that no fish lay eggs. Combining these, it logically follows that some birds do not lay eggs. This conclusion directly contradicts Statement 1, which claims that all birds lay eggs."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every doctor has a medical degree.",
      "Some people with a medical degree do not practice medicine.",
      "All doctors are required to have a license."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 describes a prerequisite for being a doctor. Statement 2 indicates that having a medical degree does not necessarily mean one practices medicine, which is entirely compatible with Statement 1. Statement 3 describes another requirement for doctors. There is no contradiction."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it requires indirect sunlight.",
      "All plants that require indirect sunlight thrive in shade.",
      "No plant that thrives in shade also needs constant watering.",
      "Some ferns need constant watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that if a plant is a fern, it requires indirect sunlight, thrives in shade, and therefore does not need constant watering. This universal conclusion (All ferns do not need constant watering) directly contradicts Statement 4, which claims that some ferns do need constant watering."
  },
  {
    "id": "gen-12-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist is easily distracted.",
      "Some people who are not easily distracted are not members of the chess club.",
      "John is a skilled strategist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statements 1 and 2, all chess club members are skilled strategists and are not easily distracted. Statement 3 indicates there are some people not easily distracted who are not chess club members, which is possible (e.g., John, if he's not in the club). Statement 4 states John is a skilled strategist, which is consistent with not being easily distracted according to Statement 2, and doesn't conflict with any other statement."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend the weekly team meeting.",
      "No employee attends the weekly team meeting unless they are a project manager.",
      "If an employee is a project manager, they are assigned to a critical task.",
      "Some employees work remotely but are not assigned to a critical task."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if an employee works remotely, they attend the weekly team meeting (Statement 1), which means they must be a project manager (Statement 2), and therefore they are assigned to a critical task (Statement 3). This implies that all remote employees are assigned to critical tasks. Statement 4 directly contradicts this conclusion by stating that some remote employees are not assigned to a critical task."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs that compete in agility trials are highly trained.",
      "Some highly trained dogs are not good with children.",
      "No dog that is good with children is ever aggressive.",
      "Fido is a highly trained dog that competes in agility trials."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Fido, as an agility dog, is highly trained (Statement 1). This is consistent with Statement 4. Statement 2 allows for some highly trained dogs, including Fido, to not be good with children. Statement 3 indicates that dogs good with children are not aggressive, which does not create a conflict, as Fido might or might not be good with children, or might or might not be aggressive."
  },
  {
    "id": "gen-12-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it has long, pointed wings.",
      "No bird with long, pointed wings is a ground-nesting bird.",
      "All birds that build nests in trees are ground-nesting birds.",
      "Some swifts build nests in trees."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all swifts are not ground-nesting birds (Swift → Long, Pointed Wings → Not Ground-Nesting Bird). Statement 3, 'All birds that build nests in trees are ground-nesting birds,' has the contrapositive 'No bird that is not a ground-nesting bird builds nests in trees.' Combining these, we deduce that all swifts do not build nests in trees. This directly contradicts Statement 4, which claims that some swifts do build nests in trees."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who receive scholarships maintain a GPA of 3.5 or higher.",
      "No student maintains a GPA of 3.5 or higher unless they study diligently.",
      "Maria studies diligently only if she finds the subject fascinating.",
      "Maria is a student who receives a scholarship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statement 4, Maria receives a scholarship. Based on Statement 1, she maintains a GPA of 3.5 or higher. Statement 2 implies that to maintain that GPA, she must study diligently. Statement 3 further implies that if she studies diligently, it is because she finds the subject fascinating. All these implications can logically coexist without contradiction."
  },
  {
    "id": "gen-12-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the advanced training course received a certificate.",
      "No one received a certificate if they missed more than two sessions.",
      "If a participant was on the advanced track, they completed the advanced training course.",
      "Some participants on the advanced track missed more than two sessions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: if a participant was on the advanced track (Statement 3), they completed the advanced training course (Statement 1), meaning they received a certificate (Statement 1), which in turn means they did not miss more than two sessions (Statement 2). This implies that no participant on the advanced track missed more than two sessions. Statement 4 directly contradicts this conclusion by asserting that some participants on the advanced track did miss more than two sessions."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Most commuters use public transportation.",
      "All commuters who use public transportation own a monthly pass.",
      "Some commuters who own a monthly pass also drive their own car occasionally.",
      "No one who drives their own car occasionally prefers public transportation exclusively."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statement 1 and 2, most commuters use public transportation and own a monthly pass. Statement 3 indicates that among those who own a monthly pass, some also occasionally drive, which is entirely possible. Statement 4 adds that those who drive occasionally do not exclusively prefer public transportation, which is logically sound given their occasional driving, and creates no conflict with the other statements."
  },
  {
    "id": "gen-12-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All volunteers involved in the festival clean up afterwards.",
      "No one cleans up afterwards unless they are paid for their time.",
      "All individuals paid for their time are considered staff members.",
      "Some volunteers involved in the festival are not considered staff members."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if an individual is a volunteer involved in the festival (Statement 1), they clean up afterwards (Statement 2), which means they are paid for their time (Statement 2), and therefore are considered staff members (Statement 3). This implies that all volunteers are considered staff members. Statement 4 directly contradicts this conclusion by stating that some volunteers are not considered staff members."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a musician performs at the grand concert, they must be a master instrumentalist.",
      "No master instrumentalist plays only one genre of music.",
      "Some musicians who play only one genre of music are highly acclaimed.",
      "Sarah is a highly acclaimed musician."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statement 1 and 2, musicians who perform at the grand concert must be master instrumentalists and therefore do not play only one genre of music. Statement 3 establishes that some musicians who play only one genre are highly acclaimed. Sarah (Statement 4) could be one of these highly acclaimed musicians who plays only one genre, or she could be a highly acclaimed master instrumentalist who plays multiple genres. No contradiction arises."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of Sector 7 have access to the public park.",
      "No one who has access to the public park is restricted from using the main library.",
      "Some residents of Sector 7 are restricted from using the main library."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all residents of Sector 7 are not restricted from using the main library. This directly contradicts Statement 3, which claims some residents of Sector 7 are restricted from using it."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in the aviary are brightly colored.",
      "Some brightly colored birds are not from the tropics.",
      "No birds from the tropics are dull-feathered.",
      "There is at least one dull-feathered bird in the aviary."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all statements to be true. For example, a dull-feathered bird in the aviary (from Statements 1 and 4) must be brightly colored and, according to Statement 3, cannot be from the tropics. This individual is consistent with Statement 2 (a brightly colored bird not from the tropics), and no conflicts arise."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student submitted their essay late, they lost points.",
      "No student who lost points received an 'A' grade.",
      "Every student in the seminar received an 'A' grade.",
      "Some students in the seminar submitted their essay late."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together establish that any student who submitted their essay late did not receive an 'A' grade. Statement 4 indicates that some students in the seminar submitted their essay late, meaning some students did not receive an 'A'. This directly contradicts Statement 3, which states every student in the seminar received an 'A' grade."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants possess a valid passport.",
      "Some applicants who possess a valid passport are not granted an interview.",
      "If an applicant is granted an interview, they are a successful applicant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. An applicant could be successful, possess a valid passport, and be granted an interview. Another applicant could possess a valid passport but not be granted an interview (satisfying Statement 2), and this is consistent with them not being a successful applicant (consistent with Statement 3)."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with long commutes arrive at work early.",
      "No employee who arrives at work early punches in before 8 AM.",
      "Every employee with a long commute punches in before 8 AM."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all employees with long commutes do not punch in before 8 AM. This directly contradicts Statement 3, which asserts that every employee with a long commute punches in before 8 AM."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Some antique coins are made of copper.",
      "All coins made of copper are highly valuable.",
      "No highly valuable coins are kept in public museums.",
      "All antique coins are kept in public museums."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together lead to the conclusion that some antique coins are not kept in public museums. This is because some antique coins are copper (1), copper coins are highly valuable (2), and highly valuable coins are not kept in public museums (3). This directly contradicts Statement 4, which claims all antique coins are kept in public museums."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every tree in the forest grows near water.",
      "Some trees that grow near water are not fruit-bearing.",
      "No fruit-bearing tree can survive without sunlight.",
      "All trees in this forest can survive without sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. For instance, there could be forest trees that grow near water (1) and require sunlight (4) but do not bear fruit (consistent with 2). If no fruit-bearing trees exist in the forest, Statement 3 would be vacuously true for them, or it would apply to other fruit-bearing trees outside the forest."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All team members wear a blue uniform.",
      "No one wearing a blue uniform is allowed in the restricted area.",
      "Some team members are allowed in the restricted area."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that no team member is allowed in the restricted area. This conclusion directly conflicts with Statement 3, which says some team members are allowed in the restricted area."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the final exam also completed the group project.",
      "Some students who completed the group project did not pass the final exam.",
      "If a student did not complete the group project, they failed the final exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 are logically equivalent (one is the contrapositive of the other). It is possible for students to complete the project without passing the exam (satisfying Statement 2), while also having all students who passed the exam having completed the project (satisfying Statement 1/3)."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees enrolled in the wellness program have health benefits.",
      "No employee with health benefits is eligible for the basic insurance plan.",
      "Some employees are eligible for the basic insurance plan.",
      "If an employee is enrolled in the wellness program, they are eligible for the basic insurance plan."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that no employee enrolled in the wellness program is eligible for the basic insurance plan. Statement 4 states that all employees enrolled in the wellness program are eligible. This means there can be no employees enrolled in the wellness program. If the wellness program has no members, all statements are consistent, as there can still be employees who are eligible for the basic insurance plan and employees who have health benefits (these two groups would be mutually exclusive per Statement 2)."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates receive an interview.",
      "No one who receives an interview is unqualified.",
      "Only qualified applicants are considered for the position.",
      "Some successful candidates were ultimately deemed unqualified."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all successful candidates are qualified. Statement 4 asserts that some successful candidates are unqualified. This is a direct contradiction."
  },
  {
    "id": "gen-14-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare birds are protected species.",
      "Some birds that are protected species are not rare.",
      "The common sparrow is not a protected species.",
      "No rare bird is found in urban areas."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The existence of some protected species that are not rare (Statement 2) is consistent with all rare birds being protected (Statement 1). The common sparrow being neither rare nor protected (Statement 3) does not conflict with any other statement. Rare birds not being in urban areas (Statement 4) also adds no contradiction."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student passes the final exam, they receive an advanced certificate.",
      "Students who receive an advanced certificate are exempt from the capstone project.",
      "No student who is exempt from the capstone project has completed fewer than 10 research hours.",
      "Some students in the program passed the final exam but completed fewer than 10 research hours."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that any student who passes the final exam must have completed at least 10 research hours. Statement 4 contradicts this by stating that some students passed the final exam but completed fewer than 10 research hours."
  },
  {
    "id": "gen-14-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely are provided with a company laptop.",
      "Some employees who are provided with a company laptop do not work remotely.",
      "Sarah works remotely.",
      "Sarah was provided with a company laptop."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 indicates that Sarah, working remotely (Statement 3), must have a company laptop (consistent with Statement 4). Statement 2 simply allows for employees with company laptops who do not work remotely, which doesn't create a conflict."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful negotiation involves compromise from both sides.",
      "No situation involving compromise from both sides is one where parties maintain their initial demands.",
      "If a negotiation is successful, then at least one party maintained its initial demands."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that if a negotiation is successful, then no party maintained its initial demands. Statement 3 directly contradicts this by stating that if a negotiation is successful, at least one party maintained its initial demands."
  },
  {
    "id": "gen-14-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "Some skilled strategists are not members of the chess club.",
      "Robert is a member of the chess club.",
      "Robert is a skilled strategist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 requires Robert, as a chess club member (Statement 3), to be a skilled strategist (consistent with Statement 4). Statement 2 allows for skilled strategists who are not in the club, which does not create a conflict."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals have fur or hair.",
      "No creature with fur or hair is cold-blooded.",
      "Some animals found in tropical regions are mammals.",
      "All animals found in tropical regions are cold-blooded."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all mammals are not cold-blooded. Statement 4 implies all animals in tropical regions are cold-blooded. Statement 3 asserts that some animals in tropical regions are mammals, which creates a contradiction: these specific animals would have to be both cold-blooded and not cold-blooded."
  },
  {
    "id": "gen-14-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a library book is overdue, a late fee is incurred.",
      "A late fee is incurred only if the book is overdue.",
      "Some books with late fees are returned on time."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that a library book has a late fee if and only if it is overdue. Since an overdue book is, by definition, not returned on time, this implies that any book with a late fee was not returned on time. Statement 3, however, directly contradicts this by claiming some books with late fees were returned on time."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have extensive vocabularies.",
      "Some people with extensive vocabularies are not successful authors.",
      "No one with a limited vocabulary is a successful author.",
      "John is a successful author."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 implies that John, as a successful author (Statement 4), must have an extensive vocabulary. Statement 2 is consistent by allowing for non-successful authors with extensive vocabularies. Statement 3 is the contrapositive of Statement 1, making it consistent as well."
  },
  {
    "id": "gen-14-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every politician who won the election campaigned tirelessly.",
      "No politician who campaigned tirelessly made significant gaffes.",
      "A politician only wins the election if they make significant gaffes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that any politician who won the election did not make significant gaffes. Statement 3 directly contradicts this by asserting that a politician wins the election only if they make significant gaffes."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird builds a nest, it will lay eggs.",
      "No bird that lays eggs migrates south for the winter.",
      "All robins build nests.",
      "Some robins migrate south for the winter."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all robins build nests. According to Statement 1, any bird that builds a nest will lay eggs. Statement 2 then specifies that no bird that lays eggs migrates south for the winter. This creates a chain: If a robin, then it builds a nest, then it lays eggs, then it does not migrate south for the winter. Therefore, no robin migrates south for the winter. This directly contradicts Statement 4, which claims that some robins migrate south for the winter."
  },
  {
    "id": "gen-15-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the exam, they receive a certificate.",
      "If a student attends all lectures, they pass the exam.",
      "Some students receive a certificate.",
      "Some students do not attend all lectures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. For instance, some students could attend all lectures, pass the exam, and receive a certificate, fulfilling Statements 1, 2, and 3. Other students might not attend all lectures (fulfilling Statement 4) but still pass the exam and receive a certificate, or they might fail and not receive one. There is no logical contradiction inherent in these statements."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a proposal is innovative, it will not be funded.",
      "If a proposal comes from an established team, it will be funded.",
      "No proposal from a new team is innovative.",
      "All proposals from established teams come from new teams."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 says that if a proposal comes from an established team, it will be funded. According to Statement 1, if a proposal is funded, then it must be innovative (the contrapositive of 'Unless innovative, not funded'). Statement 3 indicates that if a proposal is innovative, then it cannot be from a new team (the contrapositive of 'No new team proposal is innovative'). This forms a chain: an established team's proposal is funded, therefore it is innovative, therefore it is not from a new team. This means an established team's proposal cannot come from a new team. This conclusion directly contradicts Statement 4, which states that all proposals from established teams come from new teams."
  },
  {
    "id": "gen-15-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members are eligible to vote.",
      "Some employees are committee members.",
      "If an employee is eligible to vote, they must attend the meeting.",
      "Some employees do not attend the meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. For instance, some employees are committee members (Statement 2) and thus eligible to vote (Statement 1) and attend the meeting (Statement 3). The remaining employees might include some who are not eligible to vote and therefore do not attend the meeting (fulfilling Statement 4). There is no logical necessity for a contradiction."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants submitted a complete application.",
      "No applicant who submitted a complete application failed the interview.",
      "Some applicants who failed the interview were successful applicants."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all successful applicants submitted a complete application. Statement 2 specifies that no applicant who submitted a complete application failed the interview, meaning they passed it. Therefore, if an applicant is successful, they must have submitted a complete application, and consequently, they must have passed the interview. This establishes that no successful applicant failed the interview. Statement 3, however, directly contradicts this by stating that some applicants who failed the interview were successful applicants."
  },
  {
    "id": "gen-15-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is in the advanced program, they excel in mathematics.",
      "If a student excels in mathematics, they are invited to competitions.",
      "Some students are invited to competitions.",
      "Some students are not in the advanced program."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be simultaneously true. For example, some students could be in the advanced program, excel in mathematics, and thus be invited to competitions (satisfying Statements 1, 2, and 3). Other students could exist who are not in the advanced program (satisfying Statement 4), and these students may or may not excel in mathematics or be invited to competitions. No logical contradiction arises."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle has an automatic transmission, it is fuel-efficient.",
      "No vehicle that is not fuel-efficient has an automatic transmission.",
      "Some vehicles are fuel-efficient.",
      "Some vehicles do not have an automatic transmission."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 are logically equivalent (Statement 2 is the contrapositive of Statement 1), so they reinforce each other. It is entirely possible for some vehicles to be fuel-efficient and have automatic transmissions (satisfying 1 and 3), while other vehicles might not have automatic transmissions (satisfying 4), potentially being fuel-efficient or not. There is no logical contradiction among these statements."
  },
  {
    "id": "gen-15-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with a master's degree receive a bonus.",
      "No employee who receives a bonus has less than five years of experience.",
      "Some employees with less than five years of experience have a master's degree."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all employees with a master's degree receive a bonus. Statement 2 states that no employee who receives a bonus has less than five years of experience. This creates a chain: if an employee has a master's degree, then they receive a bonus, and therefore they do not have less than five years of experience. This implies that no employee with a master's degree has less than five years of experience. Statement 3, however, directly contradicts this conclusion by stating that some employees with less than five years of experience have a master's degree."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the entrance exam, they are eligible for the scholarship.",
      "If a student has a GPA below 3.0, they are not eligible for the scholarship.",
      "All students who attended the orientation passed the entrance exam.",
      "No student who attended the orientation has a GPA below 3.0."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be simultaneously true. For example, students who attend orientation (Statement 3) would pass the entrance exam and thus be eligible for the scholarship (Statement 1). These same students would also not have a GPA below 3.0 (Statement 4), meaning Statement 2's condition for ineligibility is not met. There is no contradiction; the statements simply describe compatible conditions for scholarship eligibility and student profiles."
  },
  {
    "id": "gen-15-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the study are over 18.",
      "If a person is over 18, they must sign a consent form.",
      "No person who signs a consent form has a legal guardian.",
      "Some participants in the study have a legal guardian."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that all participants in the study are over 18. Statement 2 says that anyone over 18 must sign a consent form. Statement 3 specifies that no one who signs a consent form has a legal guardian. This forms a chain: if a person is a participant in the study, then they are over 18, then they sign a consent form, and therefore they do not have a legal guardian. This implies that no participant in the study has a legal guardian. Statement 4, however, directly contradicts this conclusion by stating that some participants in the study have a legal guardian."
  },
  {
    "id": "gen-16-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that migrate fly south for the winter.",
      "No bird that flies south for the winter stays in the northern hemisphere.",
      "Some migrating birds stay in the northern hemisphere."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all birds that migrate do not stay in the northern hemisphere. This is because if a bird migrates, it flies south (Statement 1), and if it flies south, it does not stay in the northern hemisphere (Statement 2). Statement 3 directly contradicts this conclusion by asserting that some migrating birds do stay in the northern hemisphere."
  },
  {
    "id": "gen-16-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful startups innovate constantly.",
      "Some companies that innovate constantly are not successful startups.",
      "Tech Innovations Inc. innovates constantly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true at the same time. Statement 1 indicates that successful startups are a subset of companies that innovate constantly. Statement 2 confirms that there are also companies that innovate constantly but are not successful startups. Tech Innovations Inc. (Statement 3) could be either a successful startup or one of the innovating companies that is not successful, which is consistent with the other statements."
  },
  {
    "id": "gen-16-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who attend the workshop develop new skills.",
      "No employee who develops new skills misses out on promotion opportunities.",
      "Some employees attend the workshop but miss out on promotion opportunities."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all employees who attend the workshop do not miss out on promotion opportunities. This is because attending the workshop means developing new skills (Statement 1), and developing new skills means not missing out on promotion opportunities (Statement 2). Statement 3, however, asserts that some employees attend the workshop AND miss out on promotion opportunities, directly contradicting this derived conclusion."
  },
  {
    "id": "gen-16-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors have vivid imaginations.",
      "No one with a vivid imagination writes boring stories.",
      "Some authors who write boring stories are not successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Statements 1 and 2 together mean that all successful authors do not write boring stories. Statement 3, that some authors who write boring stories are not successful, is entirely consistent with this, as it simply describes a group of authors that are by definition excluded from the category of successful authors."
  },
  {
    "id": "gen-16-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees with perfect attendance receive a bonus.",
      "No employee who receives a bonus is penalized for tardiness.",
      "Some employees with perfect attendance are penalized for tardiness."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combined lead to the conclusion that all employees with perfect attendance are not penalized for tardiness. This is because perfect attendance leads to a bonus (Statement 1), and receiving a bonus means not being penalized for tardiness (Statement 2). Statement 3 directly contradicts this conclusion by stating that some employees with perfect attendance are penalized for tardiness."
  },
  {
    "id": "gen-16-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who runs a marathon is out of shape.",
      "Some people who exercise regularly do not run marathons.",
      "All people who are not out of shape exercise regularly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Statements 1 and 3 together imply that all marathon runners exercise regularly (M -> not O -> E). Statement 2, that some people who exercise regularly do not run marathons, is perfectly consistent with this, as the group of people who exercise regularly can be larger than just marathon runners."
  },
  {
    "id": "gen-16-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who volunteer for the fundraiser receive extra credit.",
      "No student who receives extra credit is ineligible for the scholarship.",
      "Some students who volunteer for the fundraiser are ineligible for the scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that all students who volunteer for the fundraiser are not ineligible for the scholarship. Volunteering leads to extra credit (Statement 1), and extra credit means not being ineligible for the scholarship (Statement 2). Statement 3 contradicts this derived conclusion by asserting that some students who volunteer for the fundraiser are ineligible for the scholarship."
  },
  {
    "id": "gen-16-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe requires baking, it uses an oven.",
      "No recipe that uses an oven is cooked on a stovetop.",
      "Some recipes cooked on a stovetop do not require baking."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Statements 1 and 2 imply that all recipes that require baking are not cooked on a stovetop. Statement 3, that some recipes cooked on a stovetop do not require baking, is perfectly consistent with this. If no baking recipes are stovetop recipes, then it logically follows that any stovetop recipe cannot be a baking recipe."
  },
  {
    "id": "gen-16-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2020 has a navigation system.",
      "No car with a navigation system uses a manual transmission.",
      "There is at least one car manufactured after 2020 that uses a manual transmission."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that every car manufactured after 2020 does not use a manual transmission. This is because cars made after 2020 have navigation systems (Statement 1), and cars with navigation systems do not use manual transmissions (Statement 2). Statement 3 directly contradicts this conclusion by affirming the existence of a car manufactured after 2020 that uses a manual transmission."
  },
  {
    "id": "gen-16-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, it is widely reviewed.",
      "No book that is widely reviewed is obscure.",
      "Some books that are not bestsellers are obscure."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Statements 1 and 2 imply that all bestsellers are not obscure. Statement 3, that some books that are not bestsellers are obscure, is entirely consistent. There can be books that are not bestsellers which are obscure, as long as no bestsellers themselves are obscure."
  },
  {
    "id": "gen-17-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced coding course, they must complete the prerequisite module.",
      "No student who completes the prerequisite module fails the final project.",
      "Every student who passes the final project receives a certificate of completion.",
      "Some students enrolled in the advanced coding course did not receive a certificate of completion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: students in the advanced coding course complete the prerequisite module, which means they pass the final project, and thus they receive a certificate of completion. This implies that all students enrolled in the advanced coding course receive a certificate. Statement 4 directly contradicts this by asserting that some students enrolled in the course did not receive a certificate."
  },
  {
    "id": "gen-17-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "If a person possesses strong leadership skills, they are capable of motivating a team.",
      "Some people who are capable of motivating a team are not successful entrepreneurs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically imply that all successful entrepreneurs are capable of motivating a team. Statement 3 states that some people capable of motivating a team are not successful entrepreneurs. This is entirely consistent with the previous implication; it simply means the group of people capable of motivating a team is broader than just successful entrepreneurs."
  },
  {
    "id": "gen-17-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All plants in the botanical garden require daily watering.",
      "If a plant requires daily watering, it cannot thrive in arid conditions.",
      "No plant that cannot thrive in arid conditions is suitable for desert landscaping.",
      "There is at least one plant in the botanical garden suitable for desert landscaping."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: all plants in the botanical garden require daily watering, which means they cannot thrive in arid conditions, which in turn means they are not suitable for desert landscaping. This implies that no plant in the botanical garden is suitable for desert landscaping. Statement 4 directly contradicts this conclusion by stating that at least one plant in the botanical garden is suitable for desert landscaping."
  },
  {
    "id": "gen-17-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with management roles attend the quarterly leadership summit.",
      "No employee who attends the quarterly leadership summit misses the annual company retreat.",
      "If an employee is promoted, they are given a management role.",
      "Some employees who are promoted miss the annual company retreat."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 states that promoted employees are given management roles. Statement 1 says all employees with management roles attend the leadership summit. Statement 2 clarifies that attending the summit means not missing the annual retreat. Therefore, all promoted employees must attend the annual company retreat. Statement 4 directly contradicts this by asserting that some promoted employees miss the annual company retreat."
  },
  {
    "id": "gen-17-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student qualifies for the honor roll, they must achieve a GPA of 3.8 or higher.",
      "No student with a GPA of 3.8 or higher is excluded from scholarship consideration.",
      "Some students who are included in scholarship consideration do not qualify for the honor roll."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically imply that all students who qualify for the honor roll are included in scholarship consideration. Statement 3 asserts that some students included in scholarship consideration do not qualify for the honor roll. This is fully consistent; it means that the group of students included in scholarship consideration is broader than just those on the honor roll."
  },
  {
    "id": "gen-17-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All research participants are provided with a compensation package.",
      "If a participant receives a compensation package, they must sign a confidentiality agreement.",
      "No research participant who signs a confidentiality agreement is allowed to publicly disclose their findings.",
      "Every research participant is allowed to publicly disclose their findings."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: all research participants receive a compensation package, which requires them to sign a confidentiality agreement, which in turn means they are not allowed to publicly disclose their findings. This implies that no research participant is allowed to publicly disclose their findings. Statement 4 directly contradicts this by stating that every research participant is allowed to publicly disclose their findings."
  },
  {
    "id": "gen-17-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All applicants who pass the initial screening are invited for a second interview.",
      "Some applicants who are invited for a second interview are not offered a job.",
      "If an applicant is offered a job, they have successfully completed all stages of the application process.",
      "No applicant who successfully completes all stages of the application process fails the initial screening."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 3 and 4 imply that all applicants offered a job must have passed the initial screening. Statement 1 then states that all applicants who pass the initial screening are invited for a second interview. Therefore, all applicants offered a job are invited for a second interview. Statement 2 merely states that some applicants invited for a second interview are not offered a job, which is fully consistent with the previous deductions, as the group invited for second interviews can be larger than those ultimately offered a job."
  },
  {
    "id": "gen-17-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All project managers are required to submit weekly progress reports.",
      "If a staff member submits weekly progress reports, they must attend the monthly status meeting.",
      "No staff member who attends the monthly status meeting is exempt from the quarterly performance review.",
      "Some project managers are exempt from the quarterly performance review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: all project managers submit weekly progress reports, which means they must attend the monthly status meeting, and thus are not exempt from the quarterly performance review. This implies that no project manager is exempt from the quarterly performance review. Statement 4 directly contradicts this by stating that some project managers are exempt from the quarterly performance review."
  },
  {
    "id": "gen-17-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered voters are eligible to cast a ballot in the general election.",
      "If a citizen registers after the deadline, they are not a registered voter.",
      "Some citizens eligible to cast a ballot in the general election registered after the deadline."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all registered voters are eligible to cast a ballot. Statement 2 indicates that those who register after the deadline are not registered voters. Statement 3 asserts that some citizens eligible to cast a ballot registered after the deadline. This is consistent because eligibility to cast a ballot does not necessarily mean one is a registered voter; the citizens in Statement 3 could be eligible to cast a ballot through other means even if they are not officially registered voters."
  },
  {
    "id": "gen-17-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful athlete trains rigorously on a daily basis.",
      "No one who trains rigorously on a daily basis avoids injuries during their career.",
      "If an athlete incurs injuries during their career, they are ineligible for certain high-profile endorsements.",
      "All successful athletes are eligible for all high-profile endorsements."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: every successful athlete trains rigorously, which means they incur injuries during their career, and thus they are ineligible for certain high-profile endorsements. This implies that no successful athlete is eligible for certain high-profile endorsements. Statement 4 asserts that all successful athletes are eligible for all high-profile endorsements, which includes 'certain' ones, directly contradicting the previous conclusion."
  },
  {
    "id": "gen-18-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of this building are over eighteen.",
      "No one over eighteen is eligible for the children's discount.",
      "Some residents of this building are eligible for the children's discount."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all residents of this building are not eligible for the children's discount. This directly contradicts Statement 3, which claims some residents are eligible. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-18-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional musicians have excellent hearing.",
      "Some people with excellent hearing are not professional musicians.",
      "Some music teachers have excellent hearing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Music teachers with excellent hearing could be either professional musicians or among the people with excellent hearing who are not professional musicians. There is no contradiction."
  },
  {
    "id": "gen-18-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All species of wild cat are carnivores.",
      "Every lion is a species of wild cat.",
      "Some lions are not carnivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that every lion is a carnivore. This directly contradicts Statement 3, which asserts that some lions are not carnivores. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-18-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No mammals are fish.",
      "All fish are aquatic animals.",
      "Some mammals are not aquatic animals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Mammals are not fish, and all fish are aquatic. It is entirely possible for some mammals (e.g., land mammals) to not be aquatic animals, which does not conflict with the other statements."
  },
  {
    "id": "gen-18-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants are interviewed.",
      "No one who is interviewed is guaranteed a position.",
      "Every successful applicant is guaranteed a position."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all successful applicants are not guaranteed a position (because they are interviewed, and no one interviewed is guaranteed a position). This contradicts Statement 3, which states that every successful applicant is guaranteed a position. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-18-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds have feathers.",
      "Some animals that have feathers cannot fly.",
      "If an animal cannot fly, it is not a migratory species."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. For example, penguins are birds with feathers that cannot fly, and thus are not migratory, which aligns with all given information. Other birds can fly and be migratory."
  },
  {
    "id": "gen-18-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No plants can move on their own.",
      "All trees are plants.",
      "Some trees can move on their own."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that all trees cannot move on their own. This directly contradicts Statement 3, which claims some trees can move on their own. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-18-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All planets orbit a star.",
      "Some objects that orbit a star are not planets.",
      "Some comets are objects that do not orbit a star."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. For example, asteroids orbit a star but are not planets, and some comets can be rogue objects that do not orbit any specific star. There is no conflict."
  },
  {
    "id": "gen-18-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every employee who receives a bonus works overtime.",
      "All senior managers are employees who receive a bonus.",
      "No senior managers work overtime."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all senior managers work overtime (because they receive a bonus, and anyone receiving a bonus works overtime). This directly contradicts Statement 3, which states that no senior managers work overtime. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-18-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a book is a classic, it is widely read.",
      "Some historical novels are classics.",
      "Some mystery novels are not widely read."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Some historical novels being classics implies they are widely read. This does not prevent some mystery novels from existing that are not widely read. No contradiction is created."
  },
  {
    "id": "gen-19-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All participants who completed the advanced training course passed the final assessment.",
      "No one who passed the final assessment failed the subsequent certification exam.",
      "Every participant who passed the subsequent certification exam is eligible for advanced placement.",
      "Some participants who completed the advanced training course are not eligible for advanced placement."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 chain together: If a participant completed the advanced training course, they passed the final assessment; if they passed the final assessment, they passed the certification exam; and if they passed the certification exam, they are eligible for advanced placement. This means all participants who completed the advanced training course are eligible for advanced placement. Statement 4 directly contradicts this by claiming some such participants are not eligible."
  },
  {
    "id": "gen-19-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All canines are carnivores.",
      "Some carnivores are not canines.",
      "All wolves are canines.",
      "My pet fox is a carnivore."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes a general rule. Statement 2 is true (e.g., bears are carnivores but not canines). Statement 3 classifies wolves. Statement 4 is consistent with a fox being a carnivore, which does not contradict any other statement's rules about canines or other carnivores."
  },
  {
    "id": "gen-19-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an employee submits a travel expense report, they must include original receipts.",
      "No original receipts were submitted by anyone who used the company credit card.",
      "Every employee who traveled abroad this month used the company credit card.",
      "At least one employee who traveled abroad this month submitted a travel expense report."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3 and 2 establish that every employee who traveled abroad this month did not submit original receipts. Statement 4 claims that at least one employee who traveled abroad this month submitted a travel expense report. According to Statement 1, anyone who submits a travel expense report must include original receipts. This creates a contradiction: some employees who traveled abroad submitted original receipts, but all employees who traveled abroad did not submit original receipts."
  },
  {
    "id": "gen-19-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who passed the advanced logic course are eligible for the graduate program.",
      "Some students who are eligible for the graduate program did not pass the advanced logic course.",
      "No student who failed the advanced logic course is eligible for the graduate program.",
      "Some students who are not eligible for the graduate program did not pass the advanced logic course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 sets a condition for eligibility. Statement 2 allows for other paths to eligibility. Statement 3 is the contrapositive of Statement 1, thus not introducing new information or conflict. Statement 4 describes a group consistent with not meeting eligibility criteria."
  },
  {
    "id": "gen-19-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Everyone who is registered for the marathon has completed the health screening.",
      "No one who has completed the health screening has failed the medical fitness test.",
      "Anyone who has not completed the medical fitness test is automatically disqualified from the marathon.",
      "Some people who are registered for the marathon are automatically disqualified from the marathon."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 chain to establish that everyone registered for the marathon has completed the medical fitness test. Statement 3 implies that if someone completed the medical fitness test, they are not disqualified. Therefore, all people registered for the marathon are not disqualified. Statement 4 directly contradicts this by asserting that some people registered for the marathon are disqualified."
  },
  {
    "id": "gen-19-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires full sun, it cannot be kept indoors.",
      "All plants in my garden require full sun.",
      "Some plants that cannot be kept indoors are in my garden."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically imply that all plants in the garden cannot be kept indoors. Statement 3, which says some plants that cannot be kept indoors are in the garden, is a necessary consequence of this implication and thus consistent."
  },
  {
    "id": "gen-19-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful applicants have prior work experience.",
      "No one with prior work experience has a GPA below 3.0.",
      "Every applicant with a GPA of 3.0 or higher was granted an interview.",
      "At least one successful applicant was not granted an interview."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 chain together: If an applicant is successful, they have prior work experience; if they have prior work experience, they do not have a GPA below 3.0 (meaning their GPA is 3.0 or higher); and if their GPA is 3.0 or higher, they were granted an interview. This means all successful applicants were granted an interview. Statement 4 directly contradicts this by asserting that at least one successful applicant was not granted an interview."
  },
  {
    "id": "gen-19-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a vehicle is a car, it has at least four wheels.",
      "No vehicle with fewer than four wheels is allowed on the highway.",
      "Some vehicles allowed on the highway are not cars."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all cars have at least four wheels, and all vehicles allowed on the highway also have at least four wheels (the contrapositive of Statement 2 is 'If a vehicle is allowed on the highway, it has at least four wheels'). Statement 3, that some vehicles on the highway are not cars, is consistent, as these could be trucks or buses, which also have at least four wheels."
  },
  {
    "id": "gen-19-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every member of the astronomy club has observed a supernova.",
      "No one who has observed a supernova believes in astrology.",
      "All individuals who do not believe in astrology regularly attend the monthly star-gazing events.",
      "There is at least one member of the astronomy club who does not regularly attend the monthly star-gazing events."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 chain together: If an individual is a member of the astronomy club, they have observed a supernova; if they have observed a supernova, they do not believe in astrology; and if they do not believe in astrology, they regularly attend the monthly star-gazing events. This means every member of the astronomy club regularly attends the monthly star-gazing events. Statement 4 directly contradicts this by stating that at least one member does not regularly attend these events."
  },
  {
    "id": "gen-19-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All concert attendees must present a valid ticket.",
      "Some people who presented a valid ticket are not concert attendees.",
      "No one who arrived late was able to enter the concert.",
      "Maria presented a valid ticket and was able to enter the concert."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 sets a requirement. Statement 2 describes a scenario where not everyone with a ticket is an attendee (e.g., staff, or someone checking tickets). Statement 3 describes a condition for entry. Statement 4 describes Maria's actions, which are consistent with the rules: she presented a valid ticket, and since she entered, she must not have arrived late, which fits all given conditions."
  },
  {
    "id": "gen-20-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a resident has a permit, they are allowed to park in the restricted zone.",
      "All vehicles parked in the restricted zone must display a valid parking pass.",
      "No resident who displays a valid parking pass has received a notice for improper parking.",
      "John is a resident who has a permit.",
      "John has received a notice for improper parking."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 establishes that John has a permit. According to Statement 1, having a permit means he is allowed to park in the restricted zone. Statement 2 dictates that vehicles in the restricted zone must display a valid parking pass. Statement 3 then concludes that anyone displaying a valid parking pass has not received a notice for improper parking. Therefore, John has not received a notice for improper parking, which directly contradicts Statement 5, which claims John has received a notice for improper parking."
  },
  {
    "id": "gen-20-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs in this shelter are house-trained.",
      "Some house-trained dogs are not good with children.",
      "If a dog is good with children, it will be adopted quickly.",
      "No dog that is not house-trained will be adopted quickly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 4, if a dog is adopted quickly, it must be house-trained (contrapositive). Combined with Statement 3 (if good with children, adopted quickly), this implies that any dog good with children is also house-trained. Statement 1 states all shelter dogs are house-trained. Statement 2 allows for some house-trained dogs not to be good with children, which is compatible with all the other rules."
  },
  {
    "id": "gen-20-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed pre-calculus.",
      "Every student who passes pre-calculus is eligible for the honors program.",
      "No student eligible for the honors program has outstanding library fines.",
      "Some students enrolled in advanced calculus have outstanding library fines."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates there is a student who enrolled in advanced calculus and has outstanding library fines. Following Statement 1, a student enrolling in advanced calculus must have passed pre-calculus. Statement 2 asserts that any student who passed pre-calculus is eligible for the honors program. Statement 3 establishes that no student eligible for the honors program has outstanding library fines. Therefore, the student mentioned in Statement 4 cannot have outstanding library fines, which contradicts Statement 4 itself."
  },
  {
    "id": "gen-20-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with management roles received leadership training.",
      "If an employee received leadership training, they are eligible for the executive bonus.",
      "Some employees eligible for the executive bonus do not have management roles.",
      "No employee who received leadership training failed their performance review."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, all employees with management roles are eligible for the executive bonus. Statement 3, which says some employees eligible for the executive bonus do not have management roles, is consistent with this, as the group eligible for the bonus can be larger than just those with management roles. Statement 4 introduces a new condition (performance review) that does not create any conflict with the other statements."
  },
  {
    "id": "gen-20-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "All tropical species need warm temperatures to thrive.",
      "No plant that needs warm temperatures can survive a hard frost.",
      "Some plants that can survive a hard frost require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims that some plants require daily watering and can survive a hard frost. Following Statement 1, if a plant requires daily watering, it is a tropical species. Statement 2 dictates that all tropical species need warm temperatures to thrive. Statement 3 concludes that no plant needing warm temperatures can survive a hard frost. Thus, a plant that requires daily watering cannot survive a hard frost, which directly contradicts Statement 4."
  },
  {
    "id": "gen-20-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All managers in the marketing department have attended the annual conference.",
      "If an employee attended the annual conference, they submitted a post-conference report.",
      "Some employees who submitted a post-conference report are not managers in the marketing department.",
      "No employee who attended the annual conference failed their mandatory skills assessment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, all managers in the marketing department submitted a post-conference report. Statement 3, which states that some employees who submitted a post-conference report are not managers in the marketing department, is compatible with this, as the group of employees who submitted reports can include others besides marketing managers. Statement 4 introduces a new condition (mandatory skills assessment) that does not create any contradiction with the other statements."
  },
  {
    "id": "gen-20-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a dog is a purebred terrier, it will have a wiry coat.",
      "All dogs with wiry coats require professional grooming.",
      "No dog requiring professional grooming can be considered low-maintenance.",
      "Some dogs that are low-maintenance are purebred terriers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates there is a dog that is both low-maintenance and a purebred terrier. According to Statement 1, a purebred terrier will have a wiry coat. Statement 2 asserts that all dogs with wiry coats require professional grooming. Statement 3 establishes that no dog requiring professional grooming can be considered low-maintenance. Therefore, a purebred terrier cannot be low-maintenance, which directly contradicts Statement 4."
  },
  {
    "id": "gen-20-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful politician is an effective public speaker.",
      "No effective public speaker avoids media interviews.",
      "If a person avoids media interviews, they are unlikely to gain national recognition.",
      "Some politicians who gained national recognition are not effective public speakers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, all successful politicians are effective public speakers who engage in media interviews. Statement 3 implies that individuals who gain national recognition typically do not avoid media interviews. Statement 4 allows for politicians who gain national recognition to exist without being effective public speakers, which does not contradict the requirement that successful politicians must be effective public speakers. The categories are not mutually exclusive in a way that creates a contradiction."
  },
  {
    "id": "gen-20-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees granted a promotion attended the leadership workshop.",
      "If an employee attended the leadership workshop, they demonstrated strong initiative.",
      "No employee who demonstrated strong initiative was passed over for a raise.",
      "Some employees were passed over for a raise, despite being granted a promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates there is an employee who was passed over for a raise and was also granted a promotion. According to Statement 1, an employee granted a promotion attended the leadership workshop. Statement 2 dictates that attending the leadership workshop means demonstrating strong initiative. Statement 3 establishes that no employee who demonstrated strong initiative was passed over for a raise. Therefore, an employee granted a promotion cannot have been passed over for a raise, which directly contradicts Statement 4."
  },
  {
    "id": "gen-20-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant has a Michelin star, it offers a tasting menu.",
      "All restaurants offering a tasting menu use locally sourced ingredients.",
      "Some restaurants with locally sourced ingredients do not have a Michelin star.",
      "No restaurant with a Michelin star serves fast food."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and Statement 2, all restaurants with a Michelin star use locally sourced ingredients. Statement 3, which indicates some restaurants using locally sourced ingredients do not have a Michelin star, is compatible, as using locally sourced ingredients can be a broader category than having a Michelin star. Statement 4 introduces a specific characteristic of Michelin star restaurants (not serving fast food) that does not conflict with any other statement."
  },
  {
    "id": "gen-21-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students in the advanced class have completed Calculus.",
      "No one who has completed Calculus needs to take the placement exam.",
      "Some students in the advanced class need to take the placement exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all advanced students completed Calculus. Statement 2 says no one who completed Calculus needs the placement exam. Therefore, it must be true that no students in the advanced class need the placement exam. This contradicts Statement 3, which claims some advanced students do need the placement exam."
  },
  {
    "id": "gen-21-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds in this sanctuary can fly.",
      "Some animals that can fly are not birds.",
      "The hawk living in the sanctuary can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes a rule for birds in the sanctuary. Statement 2 describes a broader category of flying animals, which is compatible. Statement 3 provides a specific example (a hawk, which is a bird) that aligns with Statement 1. No contradiction arises."
  },
  {
    "id": "gen-21-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a customer purchases the premium package, they receive a free gift.",
      "No customer who receives a free gift is eligible for a discount.",
      "Emily purchased the premium package and is eligible for a discount."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that purchasing the premium package leads to a free gift. Statement 2 states that receiving a free gift means no eligibility for a discount. Therefore, purchasing the premium package implies no eligibility for a discount. Statement 3, however, asserts that Emily purchased the premium package and *is* eligible for a discount, directly contradicting this deduction."
  },
  {
    "id": "gen-21-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who attend the morning meeting are managers.",
      "Some managers do not attend the morning meeting.",
      "David is a manager."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 sets a condition for meeting attendees. Statement 2 confirms that not all managers attend, which is consistent with Statement 1. David being a manager (Statement 3) does not force him to attend the meeting or contradict any other statement."
  },
  {
    "id": "gen-21-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs in the park are leashed.",
      "Some dogs in the park are playing fetch.",
      "No dog playing fetch is leashed."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 indicates that all dogs in the park are leashed. Statement 3 claims that no dog playing fetch is leashed. If Statement 1 and Statement 3 are true, then no dog playing fetch can be in the park. Statement 2 directly contradicts this by stating that some dogs in the park *are* playing fetch."
  },
  {
    "id": "gen-21-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant needs direct sunlight, it cannot thrive indoors.",
      "This orchid thrives indoors.",
      "Some plants that do not need direct sunlight can thrive indoors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that if a plant thrives indoors, it does not need direct sunlight (by contrapositive). Statement 2 says the orchid thrives indoors, so it must not need direct sunlight. This is entirely consistent with Statement 3, which states that some plants not needing direct sunlight *can* thrive indoors."
  },
  {
    "id": "gen-21-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every participant in the marathon received a medal.",
      "Some participants in the marathon did not finish the race.",
      "Only participants who finished the race received a medal."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 means that if someone received a medal, they must have finished the race. Statement 1 asserts that every participant received a medal. Combining these, it logically follows that every participant in the marathon must have finished the race. This deduction directly contradicts Statement 2, which says some participants did not finish the race."
  },
  {
    "id": "gen-21-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All books by this author are popular.",
      "Some popular books are not well-written.",
      "\"The Silent Stream\" is a well-written book by this author."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all books by this author are popular. \"The Silent Stream\" (Statement 3) is such a book, so it is popular. Statement 2 allows for some popular books to be not well-written, but it does not require all popular books to be poorly written. Therefore, it is entirely consistent for \"The Silent Stream\" to be a well-written, popular book."
  },
  {
    "id": "gen-21-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a building has more than five stories, it must have an elevator.",
      "Any building with an elevator must undergo annual safety inspections.",
      "The new library has six stories but does not require annual safety inspections."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that a building with more than five stories has an elevator. Statement 2 then implies that a building with an elevator requires annual safety inspections. Therefore, any building with more than five stories must require annual safety inspections. The new library has six stories (more than five), so it should require inspections, but Statement 3 states it does not, creating a contradiction."
  },
  {
    "id": "gen-21-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one wearing a blue hat is allowed in the VIP section.",
      "Some people wearing a blue hat are allowed backstage.",
      "Sarah is allowed backstage and is not in the VIP section."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 restricts blue hat wearers from the VIP section. Statement 2 states some blue hat wearers are allowed backstage, which is not the VIP section and therefore does not contradict Statement 1. Sarah's situation in Statement 3 is consistent with her possibly being one of the blue hat wearers in Statement 2, or simply a person who fits both conditions without wearing a blue hat."
  },
  {
    "id": "gen-22-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for the scholarship, they must have a GPA above 3.5.",
      "Only students who complete an internship can have a GPA above 3.5.",
      "No student who completed an internship is enrolled in fewer than 12 credits.",
      "Some students eligible for the scholarship are enrolled in fewer than 12 credits."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says (Eligible -> GPA > 3.5). Statement 2 says (GPA > 3.5 -> Internship). Statement 3 says (Internship -> Not enrolled in fewer than 12 credits). Chaining these implies that if a student is eligible for the scholarship, they are not enrolled in fewer than 12 credits. Statement 4 directly contradicts this by asserting that some students eligible for the scholarship *are* enrolled in fewer than 12 credits. Removing Statement 4 resolves this specific contradiction."
  },
  {
    "id": "gen-22-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have exceeded their annual sales targets.",
      "No employee who exceeded their annual sales targets was hired less than a year ago.",
      "Some employees hired less than a year ago did not receive a bonus.",
      "Maria received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If an employee receives a bonus, they must have exceeded sales targets (Statement 1) and therefore could not have been hired less than a year ago (Statement 2). Statement 3 is consistent because an employee hired less than a year ago would not have exceeded sales targets (contrapositive of Statement 2) and thus would not receive a bonus (contrapositive of Statement 1). Maria receiving a bonus (Statement 4) implies she fits these conditions."
  },
  {
    "id": "gen-22-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the alarm sounds, all residents must evacuate the building.",
      "No resident is allowed to re-enter the building until the all-clear signal is given.",
      "The alarm sounded an hour ago, but the all-clear signal has not yet been given.",
      "Some residents remained inside the building after the alarm sounded."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that if the alarm sounds, all residents must evacuate. Statement 3 confirms the alarm sounded. This means all residents must have evacuated. Statement 4 directly contradicts this by stating that some residents remained inside after the alarm sounded. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-22-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is selected for an interview, they must submit a portfolio.",
      "Only candidates with prior experience are selected for an interview.",
      "Some candidates who submitted a portfolio were not selected for an interview.",
      "No candidate without prior experience submitted a portfolio."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (Interview -> Portfolio) and Statement 2 (Interview -> Experience). Statement 4 means (Portfolio -> Experience). Therefore, if someone is interviewed, they submit a portfolio and have experience, which is consistent. Statement 3 describes candidates who submit a portfolio but are not interviewed. These individuals, according to Statement 4, must still have prior experience, which is entirely consistent with all other rules."
  },
  {
    "id": "gen-22-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants receive an acceptance letter.",
      "No applicant who failed the pre-screening exam receives an acceptance letter.",
      "If an applicant passes the interview, they are a successful applicant.",
      "Some applicants who passed the interview also failed the pre-screening exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Passes Interview -> Successful Applicant). Statement 1 (Successful Applicant -> Acceptance Letter). The contrapositive of Statement 2 is (Acceptance Letter -> Did not fail Pre-screening Exam). Chaining these implies that if an applicant passes the interview, they did not fail the pre-screening exam (Passes Interview -> Did not fail Pre-screening Exam). Statement 4 directly contradicts this by asserting that some applicants who passed the interview *also* failed the pre-screening exam. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-22-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless the rain stops, the game will be postponed.",
      "If the game is postponed, all ticket holders receive a refund.",
      "The game was not postponed, but the rain did not stop.",
      "Some ticket holders did not receive a refund."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 means 'If the rain does not stop, then the game will be postponed.' Statement 3 claims that the rain did not stop. According to Statement 1, this means the game *must* have been postponed. However, Statement 3 also asserts that the game was *not* postponed. This creates a direct contradiction. Removing Statement 3 resolves this inconsistency."
  },
  {
    "id": "gen-22-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs in this park are on a leash.",
      "No animal on a leash in this park is aggressive.",
      "Some aggressive animals in this park are not dogs.",
      "There is an aggressive dog in this park."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (Dog -> On Leash) and Statement 2 (On Leash -> Not Aggressive). Chaining these implies that if an animal is a dog in this park, it is not aggressive (Dog -> Not Aggressive). Statement 4 claims there is an aggressive dog in this park, which directly contradicts the conclusion from Statements 1 and 2. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-22-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a flight is delayed by more than an hour, passengers receive a meal voucher.",
      "All international flights provide complimentary beverages.",
      "Some flights delayed by less than an hour did not provide complimentary beverages.",
      "Flight 707 was an international flight delayed by an hour and a half."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Flight 707 being an international flight delayed by an hour and a half (Statement 4) means its passengers received a meal voucher (Statement 1) and complimentary beverages (Statement 2). Statement 3 describes other flights that are delayed by less than an hour and did not provide complimentary beverages. Such flights could be domestic flights, which would not be covered by Statement 2, making all conditions possible simultaneously."
  },
  {
    "id": "gen-22-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with access to sensitive data must complete advanced security training.",
      "No employee who completed advanced security training is exempt from the quarterly audit.",
      "If an employee has been with the company for over ten years, they are exempt from the quarterly audit.",
      "Some employees with access to sensitive data have been with the company for over ten years."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (Sensitive Data Access -> Advanced Security Training) and Statement 2 (Advanced Security Training -> Not Exempt from Audit) together imply that if an employee has access to sensitive data, they are not exempt from the quarterly audit. Statement 3 (Over Ten Years -> Exempt from Audit). Taken together, these rules mean that an employee cannot both have access to sensitive data and have been with the company for over ten years. Statement 4 directly contradicts this by asserting that some employees have both. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-22-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is an evergreen, it retains its leaves year-round.",
      "No plant that thrives in desert climates is an evergreen.",
      "Some plants that retain their leaves year-round do not thrive in desert climates.",
      "Not all plants that retain their leaves year-round are evergreens."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (Evergreen -> Retains Leaves) and Statement 2 (Thrives in Desert -> Not Evergreen; contrapositive: Evergreen -> Not Thrives in Desert) together imply that evergreens retain leaves year-round and do not thrive in desert climates. Statements 3 and 4 suggest the existence of plants that retain leaves year-round but are not evergreens, or do not thrive in desert climates. These conditions can all exist simultaneously; for example, some tropical plants retain leaves year-round but are not evergreens and also do not thrive in deserts."
  },
  {
    "id": "gen-23-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All applicants who passed the initial screening attended the final interview.",
      "No applicant who attended the final interview was rejected.",
      "Some applicants who passed the initial screening were rejected."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all applicants who passed the initial screening attended the final interview. Statement 2 indicates that no applicant who attended the final interview was rejected. Together, these imply that all applicants who passed the initial screening were not rejected. Statement 3 directly contradicts this conclusion."
  },
  {
    "id": "gen-23-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful business has a clear mission statement.",
      "Some businesses with a clear mission statement do not grow quickly.",
      "No business that grows quickly fails within five years."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Successful businesses have clear mission statements. Some of these businesses might not grow quickly, which is consistent with not failing within five years (as long as they don't grow quickly and don't fail, or they do grow quickly and don't fail)."
  },
  {
    "id": "gen-23-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits sold at the local market are grown organically.",
      "No fruit grown organically has been treated with pesticides.",
      "Some fruits sold at the local market have been treated with pesticides."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all fruits sold at the local market are grown organically. Statement 2 states that no organically grown fruit has been treated with pesticides. These two statements together mean that no fruit sold at the local market has been treated with pesticides. Statement 3 directly contradicts this."
  },
  {
    "id": "gen-23-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student enrolls in the advanced seminar, they must complete the prerequisite course.",
      "Some students who completed the prerequisite course did not enroll in the advanced seminar.",
      "All students who completed the prerequisite course passed the final exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Students in the advanced seminar complete the prerequisite. It's possible for some students to complete the prerequisite but not enroll in the advanced seminar. And all students who complete the prerequisite course can also pass their final exam, regardless of their seminar enrollment."
  },
  {
    "id": "gen-23-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in this aviary is native to the region.",
      "No bird native to the region has iridescent plumage.",
      "At least one bird in this aviary has iridescent plumage."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that every bird in this aviary is native to the region. Statement 2 specifies that no bird native to the region has iridescent plumage. Combining these, it implies that no bird in this aviary has iridescent plumage. Statement 3 explicitly claims the opposite, creating a contradiction."
  },
  {
    "id": "gen-23-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the historical society are also members of the local library.",
      "Some members of the local library are not members of the historical society.",
      "No one who is a member of the local library has outstanding overdue fees."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Historical society members are a subset of local library members. There can be other local library members who are not historical society members, and all local library members can have no overdue fees."
  },
  {
    "id": "gen-23-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees eligible for promotion have completed the leadership training.",
      "No employee who completed the leadership training missed the application deadline.",
      "Some employees eligible for promotion missed the application deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all employees eligible for promotion have completed the leadership training. Statement 2 declares that no employee who completed the leadership training missed the application deadline. These two statements imply that no employee eligible for promotion missed the application deadline. Statement 3 then presents a direct contradiction."
  },
  {
    "id": "gen-23-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student attending the university concert has purchased a ticket.",
      "Some people who purchased a ticket are not students attending the university concert.",
      "All students attending the university concert receive a program guide."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Students attending the concert purchase tickets and receive program guides. It is also possible that some general public purchased tickets but are not students, which poses no conflict."
  },
  {
    "id": "gen-23-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an artwork is a masterpiece, it is highly valued.",
      "No artwork that is highly valued is readily available for purchase.",
      "Some masterpieces are readily available for purchase."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that if an artwork is a masterpiece, it is highly valued. Statement 2 asserts that no artwork that is highly valued is readily available for purchase. These combine to mean that no masterpiece is readily available for purchase. Statement 3 states the opposite, creating a contradiction."
  },
  {
    "id": "gen-23-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All trees in the municipal park are deciduous.",
      "Some deciduous trees shed their leaves in autumn.",
      "No tree that sheds its leaves in autumn is an evergreen."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. All park trees are deciduous. It is consistent that some deciduous trees shed leaves in autumn (a common characteristic of deciduous trees) and that such trees are not evergreen (which is true by definition)."
  },
  {
    "id": "gen-24-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All musicians are creative.",
      "Every creative person appreciates art.",
      "No one who appreciates art struggles with improvisation.",
      "Some musicians struggle with improvisation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically establish a chain: All musicians are creative, creative people appreciate art, and no one who appreciates art struggles with improvisation. This implies that no musician struggles with improvisation. Statement 4 directly contradicts this conclusion by asserting that some musicians do struggle with improvisation."
  },
  {
    "id": "gen-24-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All raptors are predators.",
      "Some predators are not birds.",
      "No creature that eats only plants is a raptor.",
      "Some birds are raptors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. For example, eagles are raptors and thus predators. Some bears are predators but not birds. Rabbits eat plants and are not raptors. Some eagles are birds and raptors. All these statements can simultaneously be true without contradiction."
  },
  {
    "id": "gen-24-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur is a disciplined individual.",
      "No disciplined individual avoids daily planning.",
      "Anyone who consistently plans daily achieves their long-term goals.",
      "Some successful entrepreneurs do not achieve their long-term goals."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: Every successful entrepreneur is a disciplined individual, disciplined individuals do not avoid daily planning (meaning they plan daily), and those who plan daily achieve their long-term goals. This implies that every successful entrepreneur achieves their long-term goals. Statement 4 directly contradicts this conclusion by stating that some successful entrepreneurs do not achieve their long-term goals."
  },
  {
    "id": "gen-24-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the city council support public transit.",
      "Some residents who support public transit do not vote in local elections.",
      "No one who opposes public transit is a member of the city council.",
      "Elena is a resident who votes in local elections."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Elena, as a resident who votes, could be a city council member who supports public transit, or she could be a resident who supports public transit but is not on the council. The existence of non-voting transit supporters also does not create a conflict."
  },
  {
    "id": "gen-24-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds native to the archipelago have distinct mating calls.",
      "No bird with a distinct mating call is easily mistaken for another species.",
      "If a bird is not easily mistaken for another species, it is frequently observed by researchers.",
      "Some birds native to the archipelago are rarely observed by researchers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: All native birds have distinct mating calls, birds with distinct calls are not easily mistaken for others, and birds not easily mistaken are frequently observed. Therefore, all birds native to the archipelago are frequently observed by researchers. Statement 4 directly contradicts this, asserting that some native birds are rarely observed."
  },
  {
    "id": "gen-24-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it has shallow roots.",
      "Some plants with shallow roots do not require daily watering.",
      "No plant that tolerates drought has shallow roots.",
      "There are plants that tolerate drought and require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 logically imply that a plant cannot simultaneously require daily watering and tolerate drought. If a plant requires daily watering, it has shallow roots (Statement 1). If a plant tolerates drought, it does not have shallow roots (Statement 3). Therefore, a plant cannot possess both characteristics. Statement 4 directly contradicts this conclusion by asserting that plants with both characteristics exist."
  },
  {
    "id": "gen-24-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful theatrical productions rely on strong direction.",
      "Some theatrical productions with strong direction do not have large budgets.",
      "No play with a weak script can be a successful theatrical production.",
      "A production with a large budget and a weak script might still rely on strong direction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A production with a large budget and a weak script could rely on strong direction, but Statement 3 indicates it would not be a 'successful' production. This does not contradict the possibility of successful productions with strong direction (Statement 1), or that some strong-direction productions have small budgets (Statement 2)."
  },
  {
    "id": "gen-24-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend weekly virtual meetings.",
      "No employee who attends weekly virtual meetings misses key project deadlines.",
      "Every employee who consistently meets key project deadlines is eligible for promotion.",
      "Some employees who work remotely are not eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: Employees who work remotely attend weekly virtual meetings, these employees do not miss key project deadlines, and not missing deadlines makes them eligible for promotion. This implies that all employees who work remotely are eligible for promotion. Statement 4 directly contradicts this conclusion by asserting that some remote employees are not eligible for promotion."
  },
  {
    "id": "gen-24-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful fundraising campaign involves community outreach.",
      "Some community outreach initiatives are volunteer-led.",
      "If a campaign relies on celebrity endorsements, it does not involve community outreach.",
      "There are successful fundraising campaigns that rely on celebrity endorsements."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 establish a contradiction: Statement 1 claims all successful fundraising campaigns involve community outreach, while Statement 3 says campaigns relying on celebrity endorsements do not involve community outreach. Therefore, a successful fundraising campaign cannot simultaneously rely on celebrity endorsements. Statement 4 directly contradicts this by asserting that such campaigns exist."
  },
  {
    "id": "gen-24-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All new software releases include security patches.",
      "Some security patches introduce minor bugs.",
      "No software release with minor bugs is immediately stable.",
      "A new software release could be immediately stable despite having security patches."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 indicates that new releases have security patches. Statement 2 allows for some security patches to introduce bugs, but not necessarily all. Statement 3 means if there are minor bugs, it's not immediately stable. Statement 4 is consistent because a new release with security patches could be immediately stable, as long as its specific security patches do not introduce minor bugs."
  },
  {
    "id": "gen-25-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the finance committee are also on the audit committee.",
      "No one on the audit committee has access to restricted client data.",
      "If a committee member does not have access to restricted client data, they must hold a Level 3 clearance.",
      "Sarah is on the finance committee but does not hold a Level 3 clearance."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 chain together to establish that all members of the finance committee must hold a Level 3 clearance (Finance Committee → Audit Committee → Does Not Have Restricted Client Data → Holds Level 3 Clearance). Statement 4 asserts that Sarah is on the finance committee but does not hold a Level 3 clearance, directly contradicting the conclusion derived from the other three statements regarding all finance committee members. Removing Statement 4 resolves this specific clash."
  },
  {
    "id": "gen-25-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur possesses strong networking skills.",
      "Some individuals with strong networking skills are not successful entrepreneurs.",
      "Only individuals who possess strong networking skills are invited to the annual summit.",
      "Some successful entrepreneurs were not invited to the annual summit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means all successful entrepreneurs have strong networking skills. Statement 3 implies that to be invited to the summit, one must have strong networking skills, but not all who have strong networking skills are invited. Statements 2 and 4 are consistent with these rules, allowing for individuals who are not successful entrepreneurs but have networking skills, or successful entrepreneurs who are not invited to the summit, as long as they still possess strong networking skills."
  },
  {
    "id": "gen-25-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it cannot thrive in arid environments.",
      "All plants that are native to arid environments are drought-resistant.",
      "Plants that cannot thrive in arid environments are never drought-resistant.",
      "Some plants require daily watering and are native to arid environments."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 combine to show that any plant requiring daily watering cannot be drought-resistant (Requires Daily Watering → Cannot Thrive in Arid Environments → Not Drought-Resistant). Statement 2 indicates that all plants native to arid environments are drought-resistant. Statement 4 claims there are plants that require daily watering AND are native to arid environments. These plants must be both not drought-resistant (from 1 & 3) and drought-resistant (from 2), creating a contradiction. Removing Statement 4 removes the existence of this contradictory group."
  },
  {
    "id": "gen-25-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful mountaineers prepare for extreme weather.",
      "No one who prepares for extreme weather avoids taking safety precautions.",
      "Some individuals who avoid taking safety precautions are not successful mountaineers.",
      "If a mountaineer avoids taking safety precautions, they are not successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful mountaineers take safety precautions. Statement 4 reiterates this. Statement 3, asserting that some individuals who avoid safety precautions are not successful mountaineers, is entirely consistent with the universal rule that successful mountaineers do take precautions; it simply describes a group that falls outside the 'successful mountaineer' category."
  },
  {
    "id": "gen-25-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only qualified drivers are allowed to operate heavy machinery.",
      "All individuals who operate heavy machinery must pass an annual safety review.",
      "No one who passes an annual safety review has a record of traffic violations.",
      "John is a qualified driver who has a record of traffic violations, and he is allowed to operate heavy machinery."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 and 3 chain together to establish that anyone who operates heavy machinery cannot have a record of traffic violations (Operates Heavy Machinery → Passes Annual Safety Review → Does Not Have Record of Traffic Violations). Statement 4 states that John operates heavy machinery AND has a record of traffic violations, which directly contradicts the conclusion derived from Statements 2 and 3. Removing Statement 4 removes the specific individual creating the contradiction."
  },
  {
    "id": "gen-25-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research project with significant funding undergoes peer review.",
      "Projects that undergo peer review are presented at the annual conference.",
      "Some projects presented at the annual conference did not have significant funding.",
      "No research project with significant funding is rejected by the review board."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 chain to show that all projects with significant funding are presented at the annual conference. Statement 3 is consistent because it is possible for some projects presented at the conference to not have significant funding, as the universal rule only goes one way (Significant Funding → Presented at Conference, but not necessarily Presented at Conference → Significant Funding). Statement 4 adds another consistent condition for significantly funded projects."
  },
  {
    "id": "gen-25-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees enrolled in the advanced coding course are proficient in Python.",
      "No employee proficient in Python struggles with debugging complex algorithms.",
      "Only employees who struggle with debugging complex algorithms require additional mentorship.",
      "Some employees enrolled in the advanced coding course require additional mentorship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 chain together to show that all employees enrolled in the advanced coding course do not struggle with debugging complex algorithms (Enrolled in Advanced Coding Course → Proficient in Python → Does Not Struggle with Debugging Complex Algorithms). Statement 3 indicates that only employees who struggle with debugging complex algorithms require additional mentorship (Requires Additional Mentorship → Struggles with Debugging Complex Algorithms). Statement 4 asserts that some employees enrolled in the advanced coding course also require additional mentorship. For these employees, they must both not struggle with debugging complex algorithms (from 1 & 2) and struggle with debugging complex algorithms (from 3 & 4), creating a contradiction. Removing Statement 4 removes the existence of this contradictory group."
  },
  {
    "id": "gen-25-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only valid entries include a unique registration code.",
      "All valid entries are reviewed by an independent panel.",
      "No entry reviewed by an independent panel is immediately disqualified.",
      "Some entries with a unique registration code are not immediately disqualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 chain together to establish that all entries with a unique registration code are not immediately disqualified (Unique Registration Code → Valid Entry → Reviewed by Independent Panel → Not Immediately Disqualified). Statement 4 claims that some entries with a unique registration code are not immediately disqualified, which is a direct logical consequence of the established universal truth and therefore consistent."
  },
  {
    "id": "gen-25-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful negotiation involves clear communication.",
      "If a negotiation involves clear communication, it avoids misunderstandings.",
      "Negotiations that avoid misunderstandings always result in a signed agreement.",
      "Some successful negotiations conclude without a signed agreement."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 chain together to establish that every successful negotiation always results in a signed agreement (Successful Negotiation → Clear Communication → Avoids Misunderstandings → Signed Agreement). Statement 4 claims that some successful negotiations conclude without a signed agreement, which directly contradicts the conclusion derived from the first three statements. Removing Statement 4 removes the existence of this contradictory group."
  },
  {
    "id": "gen-25-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All reputable charities undergo annual external audits.",
      "Charities that undergo annual external audits are transparent with their donors.",
      "Some transparent charities do not undergo annual external audits.",
      "If a charity is transparent with its donors, it maintains its public trust."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all reputable charities are transparent with their donors. Statement 3 is consistent with this, as it is possible for some transparent charities to exist that are not reputable and thus do not undergo annual external audits. Statement 4 adds a consistent conditional outcome for transparent charities without creating any conflict."
  },
  {
    "id": "gen-26-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who complete the internship receive a recommendation letter.",
      "No student who skipped the final presentation receives a recommendation letter.",
      "Some students completed the internship but skipped the final presentation."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all students who complete the internship receive a recommendation letter. Statement 2 implies that no student who skips the final presentation receives a recommendation letter, meaning anyone who receives a letter did not skip the presentation. Combining these, it follows that any student who completes the internship did not skip the final presentation. Statement 3 directly contradicts this conclusion by stating that some students both completed the internship and skipped the final presentation."
  },
  {
    "id": "gen-26-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All premium members have access to the VIP lounge.",
      "Some members with access to the VIP lounge are not premium members.",
      "No regular member has access to the VIP lounge."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. It's possible for all premium members to have VIP lounge access, while also some members with VIP lounge access are not premium members (perhaps 'VIP' members are a different category). Additionally, regular members having no VIP lounge access does not conflict with the other possibilities."
  },
  {
    "id": "gen-26-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses chili, it is a spicy dish.",
      "All spicy dishes are popular entrees.",
      "No recipe that uses chili is a popular entree."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a recipe uses chili, it is a spicy dish. Statement 2 says that all spicy dishes are popular entrees. From these two statements, it logically follows that if a recipe uses chili, it must be a popular entree. Statement 3 directly contradicts this conclusion by asserting that no recipe that uses chili is a popular entree."
  },
  {
    "id": "gen-26-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All planets in this system orbit a star.",
      "Some objects that orbit a star are not planets.",
      "The largest body in this system is not a planet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. It's possible for all planets to orbit a star, while other non-planet objects also orbit a star (like comets or asteroids). The largest body could be the star itself, which is not a planet, or some other celestial body not classified as a planet."
  },
  {
    "id": "gen-26-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who attended the seminar missed the registration deadline.",
      "All applicants who received a scholarship attended the seminar.",
      "Some applicants who missed the registration deadline received a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that anyone who attended the seminar did not miss the registration deadline. Statement 2 states that all scholarship recipients attended the seminar. Combining these, it logically follows that all scholarship recipients did not miss the registration deadline. Statement 3, however, claims that some scholarship recipients did miss the registration deadline, which directly contradicts the conclusion."
  },
  {
    "id": "gen-26-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful.",
      "No business that ignores customer feedback is successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. It's possible for all successful businesses to prioritize customer satisfaction, while some businesses prioritizing customer satisfaction are still not successful (e.g., due to other factors). Additionally, the statement that no business ignoring customer feedback is successful does not create a conflict with the other two."
  },
  {
    "id": "gen-26-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every bird in this aviary has vibrant plumage.",
      "If a bird has vibrant plumage, then it is a tropical species.",
      "Some birds in this aviary are not tropical species."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that every bird in this aviary has vibrant plumage. Statement 2 says that if a bird has vibrant plumage, it is a tropical species. Combining these, it logically follows that every bird in this aviary is a tropical species. Statement 3, however, asserts that some birds in this aviary are not tropical species, which creates a direct contradiction."
  },
  {
    "id": "gen-26-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees with full benefits receive paid time off.",
      "No temporary employees receive paid time off.",
      "Some temporary employees have full benefits."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all employees with full benefits receive paid time off. Statement 2 indicates that no temporary employees receive paid time off. Combining these, it logically follows that no employee with full benefits can be a temporary employee. Statement 3 directly contradicts this conclusion by stating that some temporary employees have full benefits."
  },
  {
    "id": "gen-26-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful artists practice regularly.",
      "Some artists who practice regularly are not successful.",
      "Emily is an artist who practices regularly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. It's possible for all successful artists to practice regularly, while also some artists who practice regularly are not successful. Emily practicing regularly fits into either category (successful or not successful), so no contradiction exists."
  },
  {
    "id": "gen-26-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No car manufactured before 2000 has modern safety features.",
      "Every car with an advanced navigation system has modern safety features.",
      "Some cars manufactured before 2000 have an advanced navigation system."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that no car manufactured before 2000 has modern safety features. Statement 2 indicates that every car with an advanced navigation system has modern safety features. Combining these, it logically follows that no car manufactured before 2000 can have an advanced navigation system. Statement 3 directly contradicts this conclusion by asserting that some cars manufactured before 2000 do have an advanced navigation system."
  },
  {
    "id": "gen-27-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates for the internship program are required to pass a technical interview.",
      "If a candidate passes the technical interview, they must also complete a coding challenge.",
      "No candidate who completes a coding challenge lacks advanced programming skills.",
      "Some candidates for the internship program lack advanced programming skills."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Candidates for the internship program → Pass technical interview → Complete coding challenge → Have advanced programming skills. This means all candidates for the internship program have advanced programming skills. Statement 4, however, claims that some candidates for the internship program lack advanced programming skills, directly contradicting the conclusion from the first three statements. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-27-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees eligible for promotion have completed the leadership workshop.",
      "If an employee has completed the leadership workshop, they possess strong communication skills.",
      "No employee with strong communication skills is unfamiliar with project management software.",
      "Some employees eligible for promotion are unfamiliar with project management software."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: Employees eligible for promotion → Completed leadership workshop → Possess strong communication skills → Familiar with project management software. This means all employees eligible for promotion are familiar with project management software. Statement 4, however, claims that some employees eligible for promotion are unfamiliar with project management software, which directly contradicts the conclusion from the first three statements. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-27-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant species is native to this region, it thrives in arid conditions.",
      "Any plant that thrives in arid conditions requires minimal water.",
      "Plants that require minimal water are never susceptible to common local pests.",
      "There is at least one plant species native to this region that is susceptible to common local pests."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Plant species native to this region → Thrives in arid conditions → Requires minimal water → Not susceptible to common local pests. This means no plant species native to this region is susceptible to common local pests. Statement 4, however, explicitly states that at least one plant species native to this region *is* susceptible to common local pests, directly contradicting the conclusion from the first three statements. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-27-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student enrolled in the advanced robotics workshop has completed the prerequisite course.",
      "If a student has completed the prerequisite course, they are allowed to operate the industrial-grade machinery.",
      "No student allowed to operate industrial-grade machinery is unfamiliar with safety protocols.",
      "Some students enrolled in the advanced robotics workshop are unfamiliar with safety protocols."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: Students in advanced robotics workshop → Completed prerequisite course → Allowed to operate industrial-grade machinery → Familiar with safety protocols. This implies that all students in the advanced robotics workshop are familiar with safety protocols. Statement 4, however, asserts that some students in the advanced robotics workshop are unfamiliar with safety protocols, directly contradicting the conclusion from the first three statements. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-27-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful marketing campaigns utilize compelling storytelling.",
      "Campaigns that utilize compelling storytelling generate high audience engagement.",
      "No campaign generating high audience engagement fails to achieve its target reach.",
      "At least one successful marketing campaign failed to achieve its target reach."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Successful marketing campaigns → Utilize compelling storytelling → Generate high audience engagement → Achieve target reach. This means all successful marketing campaigns achieve their target reach. Statement 4, however, claims that at least one successful marketing campaign failed to achieve its target reach, directly contradicting the conclusion from the first three statements. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-28-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees with access codes work on the night shift.",
      "No one on the night shift handles secure data.",
      "Some employees with access codes handle secure data."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all employees with access codes do not handle secure data (Access Code → Night Shift → Not Secure Data). Statement 3 directly contradicts this conclusion by asserting that some employees with access codes do handle secure data. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs in the shelter are vaccinated.",
      "Some vaccinated dogs are still awaiting adoption.",
      "No dog awaiting adoption has been spayed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all dogs to be vaccinated, for some of those vaccinated dogs to be awaiting adoption, and for those awaiting adoption to not have been spayed. No contradiction is forced."
  },
  {
    "id": "gen-28-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant in the marathon completed the full course.",
      "Some participants in the marathon ran without proper hydration.",
      "No one who ran without proper hydration completed the full course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that some participants ran without proper hydration and also completed the full course (Participant → Completed, Some Participant & No Hydration → Some No Hydration & Completed). This directly contradicts Statement 3, which claims that no one who ran without proper hydration completed the full course. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every artist in the gallery contributed a painting.",
      "Some artists in the gallery also contributed a sculpture.",
      "No sculpture in the gallery is a painting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Artists can contribute both paintings and sculptures, where the paintings and sculptures themselves are distinct types of art. No contradiction is forced."
  },
  {
    "id": "gen-28-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a book is overdue, it incurs a late fee.",
      "If a book has a late fee, it cannot be checked out again.",
      "Some books that are overdue can be checked out again."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: If a book is overdue, then it incurs a late fee, which means it cannot be checked out again (Overdue → Late Fee → Not Checked Out Again). This implies no overdue book can be checked out again. Statement 3 directly contradicts this by stating some overdue books can be checked out again. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants submitted a complete portfolio.",
      "Some applicants who submitted a complete portfolio were not successful.",
      "Every successful applicant was interviewed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Successful applicants meet two criteria (portfolio, interviewed). Other applicants might also submit a portfolio but not be successful. No contradiction is forced."
  },
  {
    "id": "gen-28-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All paintings selected for the exhibit are modern art pieces.",
      "No modern art piece contains classical figures.",
      "At least one painting selected for the exhibit contains classical figures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all paintings selected for the exhibit do not contain classical figures (Selected → Modern Art → Not Classical Figures). Statement 3 directly contradicts this by asserting that at least one selected painting does contain classical figures. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every tree in the forest is deciduous.",
      "Some deciduous trees lose their leaves early in the season.",
      "No tree that loses its leaves early in the season is coniferous."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. All trees being deciduous is compatible with some deciduous trees losing leaves early. It is also consistent that trees losing leaves early are not coniferous, as coniferous trees are distinct from deciduous ones. No contradiction is forced."
  },
  {
    "id": "gen-28-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members attended the full meeting.",
      "Not all committee members voted on the proposal.",
      "Everyone who attended the full meeting voted on the proposal."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 3 create a chain: All committee members attended the full meeting, and everyone who attended the full meeting voted on the proposal. This implies that all committee members voted on the proposal (Committee Member → Attended → Voted). Statement 2, which states that not all committee members voted on the proposal (i.e., some did not vote), directly contradicts this conclusion. Removing Statement 2 resolves the inconsistency."
  },
  {
    "id": "gen-28-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who passed the quiz studied diligently.",
      "Some students who studied diligently did not pass the quiz.",
      "No student who did not pass the quiz received a perfect score."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all students who passed to have studied diligently, for some diligent students to still not pass, and for those who did not pass to not receive a perfect score. No contradiction is forced."
  },
  {
    "id": "gen-29-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a package is fragile, it must be handled with care.",
      "Every package handled with care is marked with a special sticker.",
      "No package with a special sticker is ever shipped via economy freight.",
      "Some fragile packages are shipped via economy freight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says fragile packages are handled with care. Statement 2 says packages handled with care are marked with a sticker. Statement 3 says packages with a sticker are not shipped via economy freight. Therefore, fragile packages are not shipped via economy freight. This directly contradicts Statement 4, which claims some fragile packages are shipped via economy freight."
  },
  {
    "id": "gen-29-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All participants in the marathon are experienced runners.",
      "Some experienced runners have never completed a full marathon.",
      "No one who did not register in advance can participate in the marathon.",
      "Sarah is an experienced runner who did not register in advance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 3, Sarah, who did not register in advance, cannot be a participant in the marathon. Statement 1 states all marathon participants are experienced runners, and Statement 2 indicates that not all experienced runners complete full marathons. Sarah can be an experienced runner who did not register, and thus not a marathon participant, which creates no logical conflict with any other statement."
  },
  {
    "id": "gen-29-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful artists display originality in their work.",
      "No truly original work can be considered conventional.",
      "Only conventional art receives widespread public praise.",
      "At least one successful artist receives widespread public praise."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that all successful artists are original. Statement 2 implies that original work is not conventional. Therefore, successful artists produce non-conventional work. Statement 3 implies that anything receiving widespread public praise must be conventional. Statement 4 claims there is a successful artist who receives widespread public praise, meaning this artist's work must be both non-conventional (from Statements 1 & 2) and conventional (from Statement 3), which is a contradiction."
  },
  {
    "id": "gen-29-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a candidate is qualified, they will pass the final interview.",
      "Only candidates with prior experience can be qualified for the position.",
      "Some candidates who pass the final interview do not have prior experience.",
      "No candidate who fails the final interview is ever hired."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that qualified candidates pass the interview. Statement 2 means that a candidate must have prior experience to be qualified. Statement 3 indicates that passing the interview does not guarantee qualification or prior experience, which is consistent. Statement 4 simply means that failing the interview is a barrier to being hired, which doesn't conflict with any other statement."
  },
  {
    "id": "gen-29-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are highly innovative.",
      "No one who is highly innovative ever relies on traditional business models.",
      "Every person who achieves great wealth has relied on traditional business models at some point.",
      "Some successful entrepreneurs achieve great wealth."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all successful entrepreneurs never rely on traditional business models. Statement 3 states that every person who achieves great wealth has relied on traditional business models. Statement 4 claims that some successful entrepreneurs achieve great wealth. This implies that there is a successful entrepreneur who both does not rely on traditional business models (from 1 & 2) and has relied on traditional business models (from 3 & 4), which is a contradiction."
  },
  {
    "id": "gen-29-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "Some plants with thorns are not roses.",
      "All plants with red flowers are roses.",
      "No plant that needs full sun can survive in shade."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that roses have thorns. Statement 2 confirms that not all thorny plants are roses, which is consistent. Statement 3 means plants with red flowers are roses and therefore have thorns. Statement 4 is a general ecological principle that does not interact logically with the other statements about roses and thorns to create any conflict."
  },
  {
    "id": "gen-29-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club play strategically.",
      "No one who plays strategically relies on guesswork.",
      "Only players who rely on guesswork ever win the annual tournament.",
      "At least one member of the chess club wins the annual tournament."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically establish that all members of the chess club do not rely on guesswork. Statement 3 indicates that only players who rely on guesswork win the annual tournament, meaning winning the tournament requires guesswork. Statement 4 asserts that at least one chess club member wins the annual tournament, which implies this member must rely on guesswork (from Statement 3) and simultaneously not rely on guesswork (from Statements 1 & 2). This creates a direct contradiction."
  },
  {
    "id": "gen-29-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful projects are well-funded.",
      "Some well-funded projects are not successful.",
      "Projects that are poorly managed are never successful.",
      "Only projects with strong leadership are well-funded."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 states successful projects are well-funded. Statement 2 implies that being well-funded does not guarantee success, which is consistent with Statement 1. Statement 3 says poorly managed projects are not successful. Statement 4 means well-funded projects require strong leadership. It's possible for a poorly managed project to be well-funded and have strong leadership, but still not be successful, which creates no contradiction."
  },
  {
    "id": "gen-29-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All diligent students submit their assignments on time.",
      "No student who submits assignments on time fails to earn all bonus points.",
      "Students who earn all bonus points are recognized at the awards ceremony.",
      "Some diligent students are NOT recognized at the awards ceremony."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: diligent students submit assignments on time, which means they earn all bonus points, which in turn means they are recognized at the awards ceremony. Therefore, all diligent students are recognized at the awards ceremony. Statement 4 directly contradicts this conclusion by stating that some diligent students are NOT recognized at the awards ceremony."
  },
  {
    "id": "gen-29-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a building is historical, it qualifies for preservation grants.",
      "Only buildings that are structurally sound qualify for preservation grants.",
      "Some buildings that qualify for preservation grants are not historical.",
      "No building built before 1900 is structurally sound."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 says historical buildings qualify for grants. Statement 2 means that qualifying for grants requires structural soundness. Statement 3 indicates that not all buildings qualifying for grants are historical, which is consistent. Statement 4 implies that buildings built before 1900 are not structurally sound, and therefore, cannot qualify for preservation grants. This scenario allows for all statements to be true simultaneously."
  },
  {
    "id": "gen-30-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a tree is an oak, then it sheds its leaves in autumn.",
      "If a tree sheds its leaves in autumn, it is deciduous.",
      "If a tree is deciduous, it is not an evergreen.",
      "All trees in Farmer McGregor's orchard are oaks.",
      "Some trees in Farmer McGregor's orchard are evergreens."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 (All orchard trees are oaks) combined with Statement 1, Statement 2, and Statement 3 (Oak → Shed → Deciduous → Not Evergreen) leads to the conclusion that all trees in Farmer McGregor's orchard are not evergreens. Statement 5 directly contradicts this conclusion by asserting that some trees in Farmer McGregor's orchard are evergreens."
  },
  {
    "id": "gen-30-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate passes the final interview, they are offered the position.",
      "No candidate who failed the background check is offered the position.",
      "Sarah was offered the position.",
      "Sarah passed the final interview."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. There is no logical contradiction."
  },
  {
    "id": "gen-30-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the survey received a gift card.",
      "If a participant received a gift card, they provided valid contact information.",
      "No participant who registered anonymously provided valid contact information.",
      "Every participant in Group A registered anonymously.",
      "Some participants in Group A completed the survey."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 (Some Group A participants completed the survey) combined with Statement 1 and Statement 2 (SurveyComplete → GiftCard → ValidContact) leads to the conclusion that some Group A participants provided valid contact information. Separately, Statement 4 (Every Group A participant registered anonymously) combined with Statement 3 (Anonymous → Not ValidContact) leads to the conclusion that all Group A participants did not provide valid contact information. These two conclusions directly contradict each other."
  },
  {
    "id": "gen-30-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "If someone is a risk-taker, they are not afraid of failure.",
      "Some people who are not afraid of failure are not successful entrepreneurs.",
      "Maria is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. There is no logical contradiction."
  },
  {
    "id": "gen-30-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All plants in the botanical garden require daily watering.",
      "If a plant requires daily watering, it is sensitive to drought.",
      "No plant sensitive to drought can survive more than a week without water.",
      "The newly introduced desert cacti can survive for months without water.",
      "Every newly introduced desert cactus is a plant in the botanical garden."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 (Every desert cactus is a garden plant) combined with Statement 1, Statement 2, and Statement 3 (GardenPlant → DailyWater → DroughtSensitive → Not SurviveWeek) leads to the conclusion that every newly introduced desert cactus cannot survive more than a week without water. This directly contradicts Statement 4, which states that these desert cacti can survive for months without water, implying they can survive more than a week."
  },
  {
    "id": "gen-30-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced linguistics, they must pass the prerequisite course.",
      "Only students who achieve an A in the prerequisite course are permitted to enroll in advanced linguistics.",
      "Some students who achieved an A in the prerequisite course did not enroll in advanced linguistics.",
      "John passed the prerequisite course but did not achieve an A."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. There is no logical contradiction."
  },
  {
    "id": "gen-30-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees eligible for overtime have completed their safety training.",
      "If an employee has completed safety training, they are aware of emergency procedures.",
      "No employee who is aware of emergency procedures has ever caused a major incident.",
      "Some employees who caused a major incident were eligible for overtime."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 (Some employees who caused a major incident were eligible for overtime) implies that some employees eligible for overtime caused a major incident. Separately, Statement 1, Statement 2, and Statement 3 (EligibleOvertime → SafetyTraining → EmergencyAware → Not MajorIncident) lead to the conclusion that no employee eligible for overtime caused a major incident. These two conclusions directly contradict each other."
  },
  {
    "id": "gen-30-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it reproduces by spores.",
      "Only plants that reproduce by spores thrive in damp, shaded environments.",
      "Some plants that thrive in damp, shaded environments are not ferns.",
      "No flowering plant is a fern."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. There is no logical contradiction."
  },
  {
    "id": "gen-30-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All applicants invited to the second round submitted a portfolio.",
      "If an applicant submitted a portfolio, they demonstrated creative skills.",
      "No applicant who demonstrated creative skills failed the initial assessment.",
      "Every applicant who attended the workshop failed the initial assessment.",
      "Some applicants who attended the workshop were invited to the second round."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 (Some applicants who attended the workshop were invited to the second round) implies that some applicants who attended the workshop did not fail the initial assessment, because Statement 1, Statement 2, and Statement 3 (SecondRound → Portfolio → CreativeSkills → Not FailedAssessment) establish that all applicants invited to the second round did not fail the initial assessment. This conclusion contradicts Statement 4, which asserts that every applicant who attended the workshop failed the initial assessment."
  },
  {
    "id": "gen-30-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced coding module, they must have completed the foundational course.",
      "Only students who completed the foundational course are eligible for advanced project funding.",
      "Some students who completed the foundational course did not enroll in the advanced coding module.",
      "Emily enrolled in the advanced coding module.",
      "Not all students who completed the foundational course are eligible for advanced project funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. There is no logical contradiction."
  },
  {
    "id": "gen-31-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All hikers carry water bottles.",
      "No one carrying a water bottle forgets to pack snacks.",
      "Some people who forget to pack snacks are experienced hikers.",
      "Every experienced hiker is a hiker."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all hikers carry water bottles. Statement 2 says no one carrying a water bottle forgets to pack snacks. Combining these means all hikers do not forget to pack snacks. Since Statement 4 says every experienced hiker is a hiker, it follows that all experienced hikers do not forget to pack snacks. This contradicts Statement 3, which claims some experienced hikers forget to pack snacks."
  },
  {
    "id": "gen-31-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful projects have clear goals.",
      "Some projects with clear goals are not completed on time.",
      "No project completed on time lacks a dedicated team.",
      "There is at least one successful project."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all statements to be true. For instance, a successful project could have clear goals, not be completed on time, and still have a dedicated team (as Statement 3 only applies to projects completed on time). Statement 2 allows for some projects with clear goals to miss deadlines, which is consistent with the other statements."
  },
  {
    "id": "gen-31-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All applicants for the scholarship must submit an essay.",
      "No one who submits an essay fails the eligibility check.",
      "Some applicants for the scholarship fail the eligibility check."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all applicants submit an essay. Statement 2 says no one who submits an essay fails the eligibility check. These two statements together mean that all applicants for the scholarship do not fail the eligibility check. This directly contradicts Statement 3, which claims some applicants for the scholarship fail the eligibility check."
  },
  {
    "id": "gen-31-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who attends the festival skips the main concert.",
      "Some people who bought tickets for the festival did not attend.",
      "Every person who skips the main concert bought a ticket for the festival."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. It's possible for people who attend not to skip the concert (Statement 1), for some ticket buyers not to attend (Statement 2), and for anyone who does skip the concert to have bought a ticket (Statement 3). There's no inherent conflict between these conditions."
  },
  {
    "id": "gen-31-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student in the photography club has their own camera.",
      "No student with their own camera has borrowed equipment from the club.",
      "Some students in the photography club have borrowed equipment from the club.",
      "All students who borrowed equipment from the club are also members of the club."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all photography club students have their own camera. Statement 2 states that no student with their own camera has borrowed equipment. Therefore, all students in the photography club have not borrowed equipment from the club. This directly contradicts Statement 3, which asserts that some students in the photography club have borrowed equipment."
  },
  {
    "id": "gen-31-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus worked overtime.",
      "Some employees who worked overtime did not receive a bonus.",
      "No employee who did not work overtime received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Statement 1 and Statement 3 are contrapositives of each other (meaning they convey the same information: if you received a bonus, you worked overtime, and if you didn't work overtime, you didn't get a bonus). Statement 2 merely clarifies that working overtime does not guarantee a bonus, which is perfectly consistent with the other two."
  },
  {
    "id": "gen-31-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every dog in the shelter is vaccinated.",
      "No vaccinated dog shows signs of illness.",
      "At least one dog showing signs of illness was recently adopted from the shelter.",
      "All dogs recently adopted from the shelter were dogs in the shelter."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every dog in the shelter is vaccinated. Statement 2 says no vaccinated dog shows signs of illness. Together, these mean no dog in the shelter shows signs of illness. Statement 4 states that all dogs recently adopted from the shelter were dogs in the shelter. Therefore, no dog recently adopted from the shelter shows signs of illness, which contradicts Statement 3 that at least one such dog showed signs of illness."
  },
  {
    "id": "gen-31-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a restaurant is highly rated, it offers exceptional service.",
      "Some restaurants that offer exceptional service are not expensive.",
      "No restaurant that is expensive is highly rated.",
      "All restaurants offering exceptional service are busy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to hold true. Statement 1 establishes a condition for highly-rated restaurants. Statement 3 implies that highly-rated restaurants are not expensive, which is compatible with Statement 1. Statement 2 suggests that exceptional service doesn't always come with high prices. Statement 4 adds that all restaurants with exceptional service are busy, which doesn't create a contradiction with the other conditions."
  },
  {
    "id": "gen-31-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors have a clear writing process.",
      "No one with a clear writing process struggles with writer's block.",
      "Some successful authors struggle with writer's block.",
      "Every author who struggles with writer's block is determined."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all successful authors have a clear writing process. Statement 2 states that no one with a clear writing process struggles with writer's block. Combining these implies that all successful authors do not struggle with writer's block. This directly contradicts Statement 3, which claims some successful authors do struggle with writer's block."
  },
  {
    "id": "gen-31-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who passed the advanced biology course studied diligently.",
      "Some students who studied diligently did not pass the advanced biology course.",
      "No student who did not pass the advanced biology course studied diligently."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 claims that no student who did not pass the course studied diligently. This means that if a student studied diligently, they must have passed the course. However, Statement 2 claims that some students who studied diligently did not pass the advanced biology course. These two statements directly contradict each other."
  },
  {
    "id": "gen-32-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device is connected to the network, it runs the latest security patch.",
      "Every device running the latest security patch is approved for external access.",
      "No device approved for external access can store sensitive data.",
      "Some devices connected to the network store sensitive data."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that any device connected to the network cannot store sensitive data (Connected → Latest Patch → Approved → Not Sensitive Data). Statement 4 directly contradicts this conclusion by asserting that some devices connected to the network do store sensitive data."
  },
  {
    "id": "gen-32-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the advanced workshop have completed the basic course.",
      "Some students who completed the basic course did not attend the advanced workshop.",
      "If a student completed the basic course, they received a certificate of completion.",
      "No student who received a certificate of completion failed the final exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Some students could complete the basic course, receive a certificate, not fail the final exam, and not attend the advanced workshop. Other students could attend the advanced workshop, meaning they completed the basic course, received a certificate, and did not fail the final exam."
  },
  {
    "id": "gen-32-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research paper submitted for peer review must follow the strict formatting guidelines.",
      "No paper following the strict formatting guidelines contains unreferenced figures.",
      "All papers with unreferenced figures are immediately rejected without review.",
      "Some research papers submitted for peer review contain unreferenced figures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically entail that any research paper submitted for peer review cannot contain unreferenced figures (Submitted → Formatting Guidelines → Not Unreferenced Figures). Statement 4 directly asserts that some research papers submitted for peer review do contain unreferenced figures, creating a contradiction."
  },
  {
    "id": "gen-32-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete qualifies for the finals, they have met the minimum performance standard.",
      "No athlete who met the minimum performance standard failed their preliminary heat.",
      "Some athletes who did not qualify for the finals still met the minimum performance standard.",
      "All athletes who failed their preliminary heat did not qualify for the finals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Athletes can meet the minimum performance standard and not fail their preliminary heat (from Statements 1 and 2). Statement 3 allows for athletes who meet the standard but don't qualify for the finals, which is possible. Statement 4 simply reinforces that failing a heat means not qualifying, which doesn't create a contradiction with the other statements."
  },
  {
    "id": "gen-32-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee scheduled for the morning shift needs to sign out equipment.",
      "No employee who signs out equipment is eligible for overtime pay this week.",
      "Some employees eligible for overtime pay are scheduled for the morning shift."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together indicate that any employee scheduled for the morning shift is not eligible for overtime pay this week (Morning Shift → Sign Out Equipment → Not Eligible for Overtime). Statement 3 claims that some employees eligible for overtime pay are scheduled for the morning shift, which directly contradicts the conclusion from statements 1 and 2."
  },
  {
    "id": "gen-32-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All books in the reference section must be returned by closing time.",
      "Some books in the reference section are not allowed to leave the library building.",
      "If a book is returned by closing time, it is checked in by staff.",
      "No book checked in by staff is still on the shelves overnight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. All books in the reference section are returned by closing time (Statement 1) and then checked in (Statement 3), ensuring they are not on shelves overnight (Statement 4). Statement 2 simply describes a subset of reference books that have an additional restriction, which does not create any contradiction."
  },
  {
    "id": "gen-32-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a client requests expedited delivery, they must pay an additional fee.",
      "No client who pays an additional fee qualifies for the premium discount.",
      "Every client who does not qualify for the premium discount automatically receives a standard rebate.",
      "Some clients requesting expedited delivery do not receive a standard rebate."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that any client who requests expedited delivery will receive a standard rebate (Expedited Delivery → Additional Fee → Not Premium Discount → Standard Rebate). Statement 4 directly contradicts this by stating that some clients requesting expedited delivery do not receive a standard rebate."
  },
  {
    "id": "gen-32-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All products packaged in blue boxes are perishable goods.",
      "Some perishable goods are not packaged in blue boxes.",
      "If a product is a perishable good, it requires refrigerated transport.",
      "No product requiring refrigerated transport can be stored in a dry warehouse."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Products in blue boxes are perishable (Statement 1) and thus require refrigerated transport (Statement 3), meaning they cannot be stored in a dry warehouse (Statement 4). Statement 2 simply clarifies that some perishable goods exist outside blue packaging, which doesn't create a contradiction with the other rules."
  },
  {
    "id": "gen-32-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every vehicle parked in lot C requires a special permit.",
      "No vehicle with a special permit can remain in the lot for more than two hours.",
      "Some vehicles remaining in lot C for more than two hours do not have a special permit.",
      "All vehicles in lot C that remain for more than two hours must be towed."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no vehicle parked in Lot C can remain there for more than two hours (Lot C → Special Permit → Not More Than Two Hours). Statement 3 claims that some vehicles do remain in Lot C for more than two hours, which directly contradicts the conclusion from statements 1 and 2."
  },
  {
    "id": "gen-32-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is drought-resistant, it has deep root systems.",
      "All plants with deep root systems can survive long periods without rain.",
      "Some plants that can survive long periods without rain are not drought-resistant.",
      "No plant with shallow root systems can survive long periods without rain."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Drought-resistant plants have deep root systems and can survive dry periods (Statements 1 and 2). Statement 3 allows for other plants with deep root systems (or other survival mechanisms) to also survive dry periods without being classified as drought-resistant. Statement 4 provides a consistent rule for plants with shallow root systems."
  },
  {
    "id": "gen-33-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "No carnivores eat plants.",
      "Some lions eat plants."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all lions are carnivores. Statement 2 says no carnivores eat plants. Together, these imply that no lions eat plants. This directly contradicts Statement 3, which claims some lions eat plants. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-33-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who complete the project pass the course.",
      "Some students pass the course.",
      "No student who fails the midterm completes the project."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. For example, some students could complete the project and pass, while other students pass without completing the project. Students who fail the midterm simply don't complete the project, which is consistent with the other rules."
  },
  {
    "id": "gen-33-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, it builds a nest.",
      "All birds that build nests migrate south for winter.",
      "Some robins do not migrate south for winter."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all robins build nests. Statement 2 states that all birds that build nests migrate south for winter. Combining these, it follows that all robins migrate south for winter. This directly contradicts Statement 3, which claims some robins do not migrate south for winter. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-33-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every computer produced this year uses a new chip.",
      "Some computers with new chips are prone to overheating.",
      "No computer produced last year uses a new chip."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. Computers produced this year all have new chips. Some of those new-chip computers (perhaps including some from this year's batch) might overheat. Computers from last year are simply excluded from having new chips. There is no contradiction."
  },
  {
    "id": "gen-33-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the club are eligible to vote.",
      "No one eligible to vote holds executive office.",
      "Some club members hold executive office."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all club members are eligible to vote. Statement 2 says that no one eligible to vote holds executive office. These two statements together imply that no club members hold executive office. This directly contradicts Statement 3, which asserts that some club members do hold executive office. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-33-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every dog in the park is on a leash.",
      "Some dogs on leashes are well-behaved.",
      "No dog without a leash is allowed in the cafe."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. All dogs in the park being on a leash is consistent with some leashed dogs being well-behaved. The rule about dogs in the cafe also poses no contradiction to the other two statements."
  },
  {
    "id": "gen-33-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members attended the workshop.",
      "No one who attended the workshop missed the deadline.",
      "Some committee members missed the deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 tells us that all committee members attended the workshop. Statement 2 tells us that no one who attended the workshop missed the deadline. Taken together, these two statements lead to the conclusion that no committee members missed the deadline. This conclusion directly conflicts with Statement 3, which claims that some committee members did miss the deadline. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-33-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a recipe uses cilantro, it is a main course.",
      "No recipe that uses cilantro is a dessert.",
      "Every main course is served hot.",
      "Some dishes served hot are not main courses."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Recipes with cilantro are main courses and served hot, and are not desserts. It's also possible that some dishes served hot are not main courses (e.g., hot appetizers) without contradicting the other statements."
  },
  {
    "id": "gen-33-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who volunteer for the festival get extra credit.",
      "No student who gets extra credit failed the exam.",
      "Some students who volunteered for the festival failed the exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all volunteers get extra credit. Statement 2 specifies that no student receiving extra credit failed the exam. From these, it logically follows that no student who volunteered for the festival failed the exam. This directly contradicts Statement 3, which claims some volunteers did fail the exam. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-33-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every dog owned by a resident lives in an apartment.",
      "Some dogs living in apartments are very noisy.",
      "No dog owned by a non-resident lives in an apartment."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true. Dogs owned by residents live in apartments. Some apartment dogs are noisy. Dogs owned by non-residents do not live in apartments. There is no contradiction inherent in these conditions."
  },
  {
    "id": "gen-34-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are skilled negotiators.",
      "No skilled negotiators are poor communicators.",
      "Some venture capitalists are successful entrepreneurs.",
      "Every venture capitalist is a poor communicator."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all successful entrepreneurs are skilled negotiators. Statement 3 says some venture capitalists are successful entrepreneurs. This means some venture capitalists are skilled negotiators. Statement 2 says no skilled negotiators are poor communicators. Therefore, some venture capitalists are not poor communicators. This directly contradicts Statement 4, which claims every venture capitalist is a poor communicator."
  },
  {
    "id": "gen-34-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "No student who neglected their assignments passed the exam.",
      "Every student who passed the exam completed all assignments."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 means passing students are diligent. Statement 2 means some diligent students still didn't pass, which is possible. Statements 3 and 4 together mean that passing students completed assignments and vice versa, creating no contradiction. The diligent students who didn't pass (from Statement 2) could be those who neglected assignments (from Statement 3)."
  },
  {
    "id": "gen-34-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird has blue feathers, it eats berries.",
      "All birds that eat berries migrate south for winter.",
      "No bird that migrates south for winter builds nests in trees.",
      "Some robins have blue feathers.",
      "Every robin builds its nest in a tree."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a chain: if a bird has blue feathers, it eats berries; if it eats berries, it migrates south; if it migrates south, it does not build nests in trees. So, if a bird has blue feathers, it does not build nests in trees. Statement 4 indicates some robins have blue feathers, so these robins do not build nests in trees. This contradicts Statement 5, which claims every robin builds its nest in a tree."
  },
  {
    "id": "gen-34-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates have strong interview skills.",
      "Some people with strong interview skills are not successful candidates.",
      "No successful candidate is uncharismatic.",
      "Every person with strong interview skills is uncharismatic."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 4 create a chain: All successful candidates have strong interview skills, and every person with strong interview skills is uncharismatic. This means all successful candidates are uncharismatic. This directly contradicts Statement 3, which claims no successful candidate is uncharismatic (meaning all successful candidates are charismatic)."
  },
  {
    "id": "gen-34-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategists are poor planners.",
      "Everyone who is not a poor planner excels at problem-solving.",
      "Some chess club members do not excel at problem-solving."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All chess club members are skilled strategists; no skilled strategists are poor planners; everyone who is not a poor planner excels at problem-solving. Therefore, all chess club members excel at problem-solving. This directly contradicts Statement 4, which claims some chess club members do not excel at problem-solving."
  },
  {
    "id": "gen-34-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless a student attends all lectures, they will not pass the course.",
      "Every student who passes the course receives a distinction.",
      "Some students who attend all lectures do not receive a distinction.",
      "No student receives a distinction unless they pass the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 means passing requires attending all lectures. Statements 2 and 4 combined mean passing the course is equivalent to receiving a distinction. Therefore, receiving a distinction requires attending all lectures. Statement 3 implies there are students who attend all lectures but don't receive a distinction (and thus didn't pass), which is consistent."
  },
  {
    "id": "gen-34-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All paintings from the Renaissance era depict mythological scenes.",
      "No painting depicting mythological scenes is abstract.",
      "Some famous paintings are abstract.",
      "Every famous painting is from the Renaissance era.",
      "All abstract paintings are contemporary."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a chain: Every famous painting is from the Renaissance era; all Renaissance paintings depict mythological scenes; no painting depicting mythological scenes is abstract. Therefore, if a painting is famous, it is not abstract. This contradicts Statement 3, which claims some famous paintings are abstract."
  },
  {
    "id": "gen-34-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless a device is properly maintained, its warranty is void.",
      "All devices with voided warranties require professional repair.",
      "Some devices that require professional repair are not properly maintained.",
      "Every device that is properly maintained has a valid warranty."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 4 are logically equivalent, establishing that proper maintenance is necessary for a valid warranty (and vice versa). This means devices either are properly maintained with a valid warranty OR are not properly maintained with a voided warranty. Statement 2 links voided warranties to professional repair. Therefore, devices that are not properly maintained have voided warranties and require professional repair. Statement 3 describes exactly this group of devices, so it is consistent."
  },
  {
    "id": "gen-34-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All artifacts found in the ancient temple date back to the Bronze Age.",
      "No Bronze Age artifact contains iron.",
      "Some artifacts found in the ancient temple contain iron."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: All artifacts found in the ancient temple date back to the Bronze Age, and no Bronze Age artifact contains iron. This means that if an artifact was found in the ancient temple, it does not contain iron. This conclusion (no artifacts from the temple contain iron) directly contradicts Statement 3, which claims some artifacts found in the ancient temple do contain iron."
  },
  {
    "id": "gen-34-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant has large leaves, it requires direct sunlight.",
      "All plants that require direct sunlight are tropical.",
      "Some tropical plants do not have large leaves.",
      "No plant that requires direct sunlight can survive in cold climates.",
      "Some tropical plants can survive in cold climates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 mean all large-leaved plants are tropical and require direct sunlight. Statement 3 means some tropical plants are not large-leaved, which is consistent. Statement 4 indicates plants requiring direct sunlight cannot survive in cold climates. Statement 5 indicates some tropical plants can survive in cold climates. These tropical plants (from Statement 5) must not require direct sunlight, which is consistent with the other statements."
  },
  {
    "id": "gen-35-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced course, they must have completed the prerequisite.",
      "No student who completed the prerequisite failed the diagnostic test.",
      "Every student who passed the diagnostic test is eligible for a scholarship.",
      "Some students enrolled in the advanced course are not eligible for a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically chain together: A student in the advanced course must complete the prerequisite (1), pass the diagnostic test (2), and thus be eligible for a scholarship (3). This implies that all students in the advanced course are eligible for a scholarship, which directly contradicts Statement 4."
  },
  {
    "id": "gen-35-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All owls in this forest hunt at night.",
      "If a bird hunts at night, it has excellent low-light vision.",
      "Some birds in this forest do not have excellent low-light vision.",
      "No bird that has excellent low-light vision is active during the day."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all owls in the forest have excellent low-light vision. Statement 3 indicates that there are some non-owl birds in the forest that lack excellent low-light vision, which is consistent. Statement 4 provides a characteristic of birds with excellent low-light vision that does not create any conflict with the existence of other birds or owls."
  },
  {
    "id": "gen-35-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a person is assigned to Group A, they must attend the weekly briefing.",
      "Only employees who have completed advanced training are permitted to attend the weekly briefing.",
      "Every manager in the department is assigned to Group A.",
      "Some employees in the department are managers who have not completed advanced training."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: All managers (3) are assigned to Group A (1), so they must attend the weekly briefing (2), which means they must have completed advanced training. This implies all managers have completed advanced training, directly contradicting Statement 4 that some managers have not completed it."
  },
  {
    "id": "gen-35-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a candidate has prior experience, they must undergo an interview.",
      "All candidates with prior experience submitted a detailed portfolio.",
      "Some candidates who underwent an interview did not submit a detailed portfolio.",
      "No candidate who submitted a detailed portfolio failed the background check."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means candidates without prior experience must interview. Statement 2 describes candidates with prior experience. Statement 3 can be true if the candidates who underwent an interview without submitting a portfolio are precisely those from Statement 1 (no prior experience). Statement 4 provides a separate condition about portfolios and background checks, which doesn't create any conflict with the other statements."
  },
  {
    "id": "gen-35-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird nests in this particular wetland, it belongs to a protected species.",
      "No bird that belongs to a protected species is permitted to be tagged by researchers.",
      "Every duck in this flock nests in this particular wetland.",
      "At least one duck in this flock was tagged by researchers last season."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: All ducks in this flock (3) nest in the wetland (1), are thus protected species (2), and therefore cannot be tagged. This implies no duck in this flock was tagged, which directly contradicts Statement 4."
  },
  {
    "id": "gen-35-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the marathon are required to wear a timing chip.",
      "If an athlete wears a timing chip, they must register their race time online.",
      "Some athletes registered their race time online even though they were not participants in the marathon.",
      "Only athletes who registered their race time online are eligible for prizes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all marathon participants register their race time online. Statement 3 describes a group of non-marathon athletes who also register online, which is fully consistent with the previous statements. Statement 4 establishes a condition for prize eligibility that does not conflict with any other statement."
  },
  {
    "id": "gen-35-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful grant application included a detailed budget.",
      "No grant application that included a detailed budget was rejected by the committee.",
      "If an application was submitted after the deadline, it was automatically rejected.",
      "Some successful grant applications were submitted after the deadline."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 indicate that all successful grant applications were not rejected. Statement 3 dictates that any application submitted after the deadline was rejected. Statement 4 presents successful grant applications that were submitted after the deadline, meaning they must be both 'not rejected' (by 1 and 2) and 'rejected' (by 3), which is a contradiction."
  },
  {
    "id": "gen-35-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the hiking trip carried a first-aid kit.",
      "No one who carried a first-aid kit failed the physical endurance test.",
      "If a person failed the physical endurance test, they did not complete the challenging trail.",
      "Some individuals who completed the challenging trail were not participants in the hiking trip."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply all hiking participants passed the endurance test. The contrapositive of Statement 3 is that anyone who completed the challenging trail must have passed the endurance test. Statement 4 allows for individuals who completed the trail but were not hiking participants, and these individuals are still consistent with passing the endurance test per Statement 3's contrapositive."
  },
  {
    "id": "gen-35-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every device capable of wireless charging consumes high power.",
      "If a device consumes high power, it requires a specialized adapter.",
      "No device that requires a specialized adapter is designed for portable use.",
      "Some devices designed for portable use are capable of wireless charging."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 link together: Any device with wireless charging (1) consumes high power (2), requires a specialized adapter (3), and therefore is not designed for portable use. This means all wireless charging devices are not portable, directly contradicting Statement 4, which states some portable devices have wireless charging capability."
  },
  {
    "id": "gen-35-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it must be grown indoors.",
      "All plants that are grown indoors are sensitive to frost.",
      "Some plants sensitive to frost do not require daily watering.",
      "No plant that is sensitive to frost can survive below freezing temperatures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that plants requiring daily watering are sensitive to frost. Statement 3 is consistent because it allows for frost-sensitive plants that are grown indoors (per Statement 2) but do not necessarily require daily watering. Statement 4 describes a general characteristic of frost-sensitive plants that does not conflict with the other conditions."
  },
  {
    "id": "gen-36-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey are herbivores.",
      "Some owls are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all owls are birds of prey. Statement 2 says that no birds of prey are herbivores. Together, these imply that no owls are herbivores. This directly contradicts Statement 3, which claims some owls are herbivores. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-36-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Sarah trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Sarah trains daily, which is consistent with Statement 1 (she could be a professional athlete) and Statement 2 (she could be someone who trains daily but is not a professional athlete)."
  },
  {
    "id": "gen-36-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an artwork is valuable, it is exhibited in a museum.",
      "All sculptures are valuable artworks.",
      "No artwork exhibited in a museum is privately owned.",
      "At least one sculpture is privately owned."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 says all sculptures are valuable artworks. Statement 1 says if an artwork is valuable, it is exhibited in a museum. These two together imply that all sculptures are exhibited in a museum. Statement 3 says no artwork exhibited in a museum is privately owned. Therefore, no sculptures are privately owned. This contradicts Statement 4, which claims at least one sculpture is privately owned. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-36-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All participants in the marathon received a medal.",
      "Some people who received a medal did not finish the marathon.",
      "John received a medal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. John received a medal, and he could be someone who finished the marathon (consistent with Statement 1) or someone who received a medal but did not finish (consistent with Statement 2)."
  },
  {
    "id": "gen-36-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No student who passed the exam failed the course.",
      "Every student in section B passed the exam.",
      "Some students in section B failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says every student in section B passed the exam. Statement 1 says no student who passed the exam failed the course. Together, these imply that no student in section B failed the course. This directly contradicts Statement 3, which claims some students in section B failed the course. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-36-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs take calculated risks.",
      "Some people who take calculated risks are not successful entrepreneurs.",
      "Maria is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Maria is a successful entrepreneur, which means she takes calculated risks (consistent with Statement 1). This does not conflict with Statement 2, which allows for others who take risks but are not successful entrepreneurs."
  },
  {
    "id": "gen-36-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club participate in tournaments.",
      "No one who participates in tournaments is eligible for the beginner's prize.",
      "Some members of the chess club are eligible for the beginner's prize."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all members of the chess club participate in tournaments. Statement 2 says no one who participates in tournaments is eligible for the beginner's prize. Together, these imply that no members of the chess club are eligible for the beginner's prize. This directly contradicts Statement 3, which claims some members of the chess club are eligible for the beginner's prize. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-36-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All healthy plants have green leaves.",
      "Some plants with green leaves are not healthy.",
      "This plant has green leaves."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. This plant has green leaves, and it could be a healthy plant (consistent with Statement 1) or one of the plants with green leaves that are not healthy (consistent with Statement 2)."
  },
  {
    "id": "gen-36-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a species is endangered, it receives special protection.",
      "No species receiving special protection is hunted for sport.",
      "Every lion species is endangered.",
      "Some lion species are hunted for sport."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 says every lion species is endangered. Statement 1 says if a species is endangered, it receives special protection. These two together imply that every lion species receives special protection. Statement 2 says no species receiving special protection is hunted for sport. Therefore, no lion species is hunted for sport. This contradicts Statement 4, which claims some lion species are hunted for sport. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-36-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful startups have innovative products.",
      "Some companies with innovative products are not successful startups.",
      "Our company has an innovative product."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Our company has an innovative product, and it could be a successful startup (consistent with Statement 1) or one of the companies with innovative products that are not successful startups (consistent with Statement 2)."
  },
  {
    "id": "gen-37-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a job candidate is qualified, they advance to the final interview round.",
      "No candidate who scored poorly on their interview received a job offer.",
      "Every candidate who advanced to the final interview round received a job offer.",
      "Some qualified candidates scored poorly on their interview."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 3, and 2 together imply a chain: If a candidate is qualified, they advance to the final round (1), then they receive a job offer (3), which means they did not score poorly on their interview (contrapositive of 2). Therefore, if a candidate is qualified, they did not score poorly on their interview. This directly contradicts Statement 4, which says some qualified candidates did score poorly on their interview."
  },
  {
    "id": "gen-37-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All mammals have fur.",
      "No animal that lives on land is a fish.",
      "Some animals with fur live on land.",
      "If an animal is a fish, it does not have fur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 says all mammals have fur. Statement 4 implies that no animal with fur is a fish. Combining these, all mammals are not fish, which is true. Statement 2 says no land animal is a fish. Statement 3 says some animals with fur live on land. This is consistent; for example, a cat is an animal with fur, lives on land, is not a fish, and is a mammal."
  },
  {
    "id": "gen-37-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student in the advanced seminar attended the guest lecture.",
      "If a student attended the guest lecture, they wrote a research paper.",
      "No student who received a grade of A wrote a research paper.",
      "Some students in the advanced seminar received a grade of A."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: Every student in the advanced seminar (1) attended the guest lecture, and therefore (2) wrote a research paper. Statement 3 implies that if a student wrote a research paper, they did not receive a grade of A. Thus, every student in the advanced seminar did not receive a grade of A. This directly contradicts Statement 4, which claims some students in the advanced seminar did receive a grade of A."
  },
  {
    "id": "gen-37-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No employee who works overtime is salaried.",
      "If an employee is salaried, they do not receive bonus pay.",
      "Every employee who receives bonus pay is paid hourly.",
      "Some employees who are paid hourly also work overtime.",
      "All employees are either salaried or paid hourly, but no employee is both."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1, employees who work overtime are not salaried. From Statement 5, if an employee is not salaried, they must be paid hourly. Thus, employees who work overtime are paid hourly. Statement 4 says some employees who are paid hourly also work overtime, which is consistent with this derivation. Statements 2 and 3 create a chain that implies employees who receive bonus pay are not salaried and are paid hourly, which is also consistent."
  },
  {
    "id": "gen-37-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every doctor who attended the conference received updated medical guidelines.",
      "If a doctor received updated medical guidelines, they changed their treatment protocols.",
      "No doctor who changed their treatment protocols has been practicing for over 20 years.",
      "Some doctors who attended the conference have been practicing for over 20 years."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: Every doctor who attended the conference (1) received updated medical guidelines, and therefore (2) changed their treatment protocols. Statement 3 implies that no doctor who changed their treatment protocols has been practicing for over 20 years. Taken together, these mean that every doctor who attended the conference has not been practicing for over 20 years. This directly contradicts Statement 4, which says some doctors who attended the conference have been practicing for over 20 years."
  },
  {
    "id": "gen-37-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an item is handmade, it is unique.",
      "No mass-produced item is unique.",
      "Some expensive items are mass-produced.",
      "Every handmade item is expensive.",
      "Only expensive items are unique."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If an item is handmade, it is unique (1) and expensive (4). Since unique items are only expensive (5), this is consistent. Mass-produced items are not unique (2). Statement 3 says some expensive items are mass-produced, which means there are expensive items that are not unique. This does not contradict the existence of unique, handmade, expensive items."
  },
  {
    "id": "gen-37-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project proposal was approved, the team received funding.",
      "No team that hired new researchers experienced project delays.",
      "Every team that received funding hired new researchers.",
      "Some project proposals that were approved led to project delays."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 3, and 2 establish a chain of logic: If a project proposal was approved (1), the team received funding. If the team received funding (3), they hired new researchers. If the team hired new researchers (2), they did not experience project delays. Therefore, if a project proposal was approved, it did not lead to project delays. This directly contradicts Statement 4, which claims some approved project proposals led to project delays."
  },
  {
    "id": "gen-37-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students in the debate club study logic.",
      "Some students who study logic do not enjoy public speaking.",
      "If a student participates in a competition, they are in the debate club.",
      "Every student who enjoys public speaking participates in a competition."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 4, 3, and 1 form a chain: If a student enjoys public speaking (4), they participate in a competition. If they participate in a competition (3), they are in the debate club. If they are in the debate club (1), they study logic. Thus, every student who enjoys public speaking studies logic. Statement 2, 'Some students who study logic do not enjoy public speaking,' is fully consistent with this, as not all students who study logic need to enjoy public speaking."
  },
  {
    "id": "gen-37-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every product on sale is a clearance item.",
      "If a product is a clearance item, it is not eligible for return.",
      "All products with minor cosmetic damage are eligible for return.",
      "Some products on sale have minor cosmetic damage."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 together imply a contradiction with Statement 3. From Statements 1 and 2, every product on sale is a clearance item (1) and therefore not eligible for return (2). Statement 4 says some products on sale have minor cosmetic damage. This means there are some products with minor cosmetic damage that are not eligible for return. This directly contradicts Statement 3, which states that all products with minor cosmetic damage are eligible for return (meaning no product with minor cosmetic damage is not eligible for return)."
  },
  {
    "id": "gen-37-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student submitted their application, they paid the application fee.",
      "No student who received a scholarship was admitted.",
      "Some students who paid the application fee were admitted.",
      "Only students who submitted their application were considered for a scholarship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 means if a student received a scholarship, they submitted their application. Combined with Statement 1, this implies that any student who received a scholarship also paid the application fee. Statement 2 says students who received scholarships were not admitted. Statement 3 asserts that some students who paid the application fee were admitted; these admitted students, by Statement 2, would not have received scholarships. All these scenarios are logically possible at the same time."
  },
  {
    "id": "gen-38-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the exam received a scholarship.",
      "No one who received a scholarship missed more than two classes.",
      "Some students who passed the exam missed more than two classes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all students who passed the exam received a scholarship. Statement 2 states that no one who received a scholarship missed more than two classes. Therefore, it must be true that no student who passed the exam missed more than two classes. This directly contradicts Statement 3, which claims some students who passed the exam *did* miss more than two classes."
  },
  {
    "id": "gen-38-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every cat in the shelter is vaccinated.",
      "Some vaccinated animals are not cats.",
      "No cats in the shelter are older than five years."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all cats in the shelter to be vaccinated and not older than five years. Simultaneously, there could be other vaccinated animals (e.g., dogs) that are not cats. All statements can be true at the same time."
  },
  {
    "id": "gen-38-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All paintings in the exhibit are by local artists.",
      "Some paintings in the exhibit feature landscapes.",
      "No painting featuring a landscape is by a local artist."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all paintings in the exhibit are by local artists. Statement 2 tells us that some paintings in the exhibit feature landscapes. Combining these, it logically follows that some paintings featuring landscapes are by local artists. This directly contradicts Statement 3, which claims no painting featuring a landscape is by a local artist."
  },
  {
    "id": "gen-38-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who received a bonus met their sales targets.",
      "Some employees who met their sales targets did not receive a bonus.",
      "No employee who missed their sales target received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all employees receiving a bonus to have met their sales targets, and for some employees who met their targets to not receive a bonus. Statement 3 simply reiterates the condition from Statement 1, and no contradiction arises."
  },
  {
    "id": "gen-38-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, then it migrates south for winter.",
      "If a bird migrates south for winter, it does not live in this region year-round.",
      "Some birds that are robins live in this region year-round."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all robins migrate south for winter. Statement 2 specifies that any bird migrating south for winter does not live in this region year-round. This logically implies that no robin lives in this region year-round. Statement 3, however, claims that some robins do live in this region year-round, creating a direct contradiction."
  },
  {
    "id": "gen-38-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All books on the top shelf are fiction.",
      "Some books on the top shelf are bestsellers.",
      "Some bestsellers are not fiction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It's possible for all books on the top shelf to be fiction, and for some of those to also be bestsellers. Simultaneously, there can exist other bestsellers elsewhere (not on the top shelf) that are not fiction. No contradiction is present."
  },
  {
    "id": "gen-38-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every recipe in the new cookbook requires at least one exotic spice.",
      "No dish that requires an exotic spice is suitable for quick weeknight meals.",
      "Some recipes in the new cookbook are designed for quick weeknight meals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that every recipe in the new cookbook requires at least one exotic spice. Statement 2 indicates that no dish requiring an exotic spice is suitable for quick weeknight meals. These two statements together imply that no recipe in the new cookbook is suitable for quick weeknight meals. This directly contradicts Statement 3, which claims some recipes in the new cookbook *are* designed for quick weeknight meals."
  },
  {
    "id": "gen-38-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every animal in the petting zoo is a mammal.",
      "Some mammals are not found in the petting zoo.",
      "All animals in the petting zoo are herbivores."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It's possible for all animals in the petting zoo to be both mammals and herbivores. Separately, there could be other mammals (e.g., carnivores) that are not found in the petting zoo. All statements can hold true simultaneously."
  },
  {
    "id": "gen-38-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who work remotely are eligible for the flex-time program.",
      "No employee eligible for the flex-time program must come into the office on Fridays.",
      "Some employees who work remotely must come into the office on Fridays."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all remote employees are eligible for the flex-time program. Statement 2 establishes that no employee eligible for the flex-time program must come into the office on Fridays. Therefore, it logically follows that no employee who works remotely must come into the office on Fridays. This contradicts Statement 3, which claims some remote employees *do* have to come into the office on Fridays."
  },
  {
    "id": "gen-38-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All cars parked in lot A require a special permit.",
      "Some vehicles requiring a special permit are not cars.",
      "No car parked in lot B requires a special permit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all cars in Lot A to require a permit, and for some other vehicles (like trucks) to also require a permit. Separately, cars in Lot B might not require such a permit. No logical inconsistency is present."
  },
  {
    "id": "gen-39-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful project managers are excellent communicators.",
      "No excellent communicators struggle with client presentations.",
      "Some individuals who struggle with client presentations lead project teams.",
      "Every project team leader is a successful project manager."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 chain together to show that every project team leader is a successful project manager, who is an excellent communicator, and thus does not struggle with client presentations. Therefore, no project team leader struggles with client presentations. This directly contradicts Statement 3, which claims some individuals who struggle with client presentations lead project teams."
  },
  {
    "id": "gen-39-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes adhere to a strict training regimen.",
      "No one who adheres to a strict training regimen regularly eats fast food.",
      "Some people who do not regularly eat fast food are not professional athletes.",
      "Maria is a professional athlete."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all professional athletes do not regularly eat fast food. Statement 4 indicates Maria is a professional athlete, meaning she does not regularly eat fast food, which is consistent. Statement 3 suggests that some non-fast-food eaters are not professional athletes, which is also consistent as there can be many people who avoid fast food for various reasons, not all of whom are professional athletes."
  },
  {
    "id": "gen-39-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a candidate is endorsed by the union, they have strong public support.",
      "Only candidates who actively campaign in rural districts have strong public support.",
      "No candidate who actively campaigns in rural districts is against the new ballot measure.",
      "Some candidates endorsed by the union are against the new ballot measure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a candidate is endorsed by the union, they have strong public support, which means they actively campaign in rural districts, and therefore are not against the new ballot measure. This leads to the conclusion that no candidate endorsed by the union is against the new ballot measure. This conclusion directly contradicts Statement 4."
  },
  {
    "id": "gen-39-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All creatures with feathers are birds.",
      "No bird is a mammal.",
      "Some mammals have fur.",
      "Some creatures with fur are not birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that no creature with feathers is a mammal. Statement 3 affirms the existence of mammals with fur, which is consistent with birds not being mammals. Statement 4, that some creatures with fur are not birds, is also consistent, as mammals with fur (like bears) are indeed not birds."
  },
  {
    "id": "gen-39-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2010 has an advanced navigation system.",
      "No car with an advanced navigation system lacks side-impact airbags.",
      "Some cars manufactured after 2010 do not have side-impact airbags.",
      "All cars with side-impact airbags are subject to regular safety inspections."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically entail that every car manufactured after 2010 has an advanced navigation system, which means it has side-impact airbags. Therefore, every car manufactured after 2010 has side-impact airbags. This directly contradicts Statement 3, which claims some cars manufactured after 2010 do not have side-impact airbags."
  },
  {
    "id": "gen-39-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates possess strong leadership skills.",
      "No one with strong leadership skills avoids public speaking.",
      "Some individuals who do not avoid public speaking are not qualified candidates.",
      "If a person is elected to the board, they are a qualified candidate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 4, 1, and 2 imply that anyone elected to the board possesses strong leadership skills and does not avoid public speaking. Statement 3, claiming that some individuals who do not avoid public speaking are not qualified candidates, is consistent. It's possible to be a good public speaker without meeting all criteria to be a 'qualified candidate' for a specific role."
  },
  {
    "id": "gen-39-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful startup company fosters innovation.",
      "No company that fosters innovation operates with an outdated business model.",
      "Some companies operating with an outdated business model are considered successful startups.",
      "All companies that invest heavily in research and development are successful startup companies."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 demonstrate that every successful startup company fosters innovation, and therefore does not operate with an outdated business model. This means no successful startup company operates with an outdated business model. This conclusion directly contradicts Statement 3, which asserts that some companies operating with an outdated business model are successful startups."
  },
  {
    "id": "gen-39-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All organisms capable of photosynthesis are plants.",
      "No plant consumes other organisms for energy.",
      "Some organisms that do not consume other organisms for energy are not plants.",
      "Every organism that produces chlorophyll is capable of photosynthesis."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 4, 1, and 2 establish that all organisms that produce chlorophyll are plants and do not consume other organisms for energy. Statement 3, that some organisms that do not consume others for energy are not plants, is consistent. For example, chemosynthetic bacteria do not consume other organisms but are not plants, fitting this description."
  },
  {
    "id": "gen-39-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, it has received critical acclaim.",
      "Books that receive critical acclaim are never difficult to understand.",
      "Some books that are difficult to understand are nevertheless bestsellers.",
      "Only books published in the last year can be bestsellers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 form a chain: if a book is a bestseller, it has received critical acclaim, and thus is never difficult to understand. This means no bestseller is difficult to understand. This conclusion directly contradicts Statement 3, which claims some books that are difficult to understand are bestsellers."
  },
  {
    "id": "gen-39-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who receive quarterly bonuses exceed their performance targets.",
      "No employee who exceeds their performance targets is considered for additional training.",
      "Some employees considered for additional training do not receive quarterly bonuses.",
      "If an employee receives quarterly bonuses, they have been with the company for at least two years."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that employees receiving quarterly bonuses exceed targets and are therefore not considered for additional training. Statement 3, that some employees considered for additional training do not receive quarterly bonuses, is consistent. It allows for employees who, for instance, show potential for training but have not yet achieved bonus-level performance, and thus are not eligible for bonuses."
  },
  {
    "id": "gen-40-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds in this aviary are tropical species.",
      "If a bird is a tropical species, it requires a heated enclosure.",
      "No bird that requires a heated enclosure can survive outdoors.",
      "Some birds in this aviary can survive outdoors."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All birds in this aviary are tropical (1), tropical birds require a heated enclosure (2), and birds requiring a heated enclosure cannot survive outdoors (3). This means all birds in this aviary cannot survive outdoors. Statement 4 directly contradicts this by asserting that some birds in this aviary can survive outdoors."
  },
  {
    "id": "gen-40-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a painting is a masterpiece, it is highly valued.",
      "Some highly valued paintings are not masterpieces.",
      "All paintings in the museum are highly valued."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. All paintings in the museum are highly valued (3). Some of these highly valued paintings could be masterpieces (consistent with 1), and some could be non-masterpieces (consistent with 2). There is no logical contradiction."
  },
  {
    "id": "gen-40-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who complete their thesis receive a diploma.",
      "No student who has outstanding fees receives a diploma.",
      "Every student in the graduate program completes their thesis.",
      "Some students in the graduate program have outstanding fees."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 establish that every student in the graduate program completes their thesis (3), and thus receives a diploma (1). Statement 2 indicates that no student with outstanding fees receives a diploma, meaning all students who receive a diploma do not have outstanding fees. Therefore, all students in the graduate program do not have outstanding fees. Statement 4 directly contradicts this by stating that some students in the graduate program do have outstanding fees."
  },
  {
    "id": "gen-40-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A candidate is eligible for the debate only if they meet the minimum polling threshold.",
      "Some candidates who meet the minimum polling threshold are not eligible for the debate.",
      "No candidate is allowed to speak unless they are eligible for the debate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Statement 1 means that if a candidate is eligible, they meet the threshold. Statement 3 means that if a candidate speaks, they are eligible. Combining these, if a candidate speaks, they meet the polling threshold. Statement 2 is also consistent, as meeting the threshold does not guarantee eligibility, and there can be candidates who meet the threshold but aren't eligible to speak."
  },
  {
    "id": "gen-40-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of the complex must pay an amenity fee.",
      "No one who pays an amenity fee is exempt from the maintenance schedule.",
      "If a resident's unit is damaged, they are exempt from the maintenance schedule.",
      "Some residents of the complex have damaged units."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 create a chain: All residents must pay an amenity fee (1), and no one who pays an amenity fee is exempt from the maintenance schedule (2). This implies that no resident of the complex is exempt from the maintenance schedule. Statement 3 indicates that if a resident's unit is damaged, they are exempt from the maintenance schedule. Therefore, if some residents have damaged units (4), then some residents are exempt, which directly contradicts the conclusion from statements 1 and 2."
  },
  {
    "id": "gen-40-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires direct sunlight, it cannot be grown indoors.",
      "Some plants that can be grown indoors are not tropical.",
      "Every plant in this greenhouse is tropical.",
      "No plant in this greenhouse requires direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Plants in the greenhouse are tropical (3) and do not require direct sunlight (4). This is consistent with statement 1, as statement 1 only applies to plants that *do* require direct sunlight. Statement 2 refers to some indoor plants that are not tropical, which does not conflict with the tropical nature of the greenhouse plants."
  },
  {
    "id": "gen-40-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered voters are eligible to serve on a jury.",
      "If a person is eligible to serve on a jury, they have a clean legal record.",
      "No person with a clean legal record has ever committed a felony.",
      "Some registered voters have committed a felony."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All registered voters are eligible to serve on a jury (1), all eligible jury members have a clean legal record (2), and no one with a clean legal record has committed a felony (3). This means all registered voters have not committed a felony. Statement 4 directly contradicts this by stating that some registered voters have committed a felony."
  },
  {
    "id": "gen-40-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No one receives a bonus unless their team meets its quarterly goals.",
      "If a team meets its quarterly goals, every member of that team receives a bonus.",
      "Some team members who receive a bonus did not perform exceptionally well."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Statement 1 means that receiving a bonus implies the team met its goals. Statement 2 means that the team meeting its goals implies a bonus for every member. Together, these mean a bonus is received if and only if the team meets its goals. Statement 3 is consistent, as receiving a bonus (due to team goals) does not require exceptional individual performance."
  },
  {
    "id": "gen-40-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A car qualifies for the rebate program only if it is an electric vehicle.",
      "All electric vehicles are subject to a luxury tax.",
      "No car is subject to a luxury tax unless it costs over $70,000.",
      "There is at least one car that qualifies for the rebate program but does not cost over $70,000."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: A car qualifies for the rebate program only if it's an electric vehicle (1), all electric vehicles are subject to a luxury tax (2), and a car is subject to a luxury tax only if it costs over $70,000 (3). This means any car that qualifies for the rebate program must cost over $70,000. Statement 4 directly contradicts this by asserting that there is a car that qualifies for the rebate program but does not cost over $70,000."
  },
  {
    "id": "gen-40-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by conservation laws.",
      "All animals in this sanctuary are protected by conservation laws.",
      "Some protected species are not endangered.",
      "No animal in this sanctuary is endangered."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent. Statement 1 states that endangered species are protected, but not necessarily that all protected species are endangered. Statement 2 says all sanctuary animals are protected, and statement 4 says no sanctuary animals are endangered. This is perfectly consistent with statement 3, as the sanctuary animals would be a subset of the protected species that are not endangered."
  },
  {
    "id": "gen-41-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are creative thinkers.",
      "No creative thinkers are resistant to new ideas.",
      "Some engineers are resistant to new ideas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all engineers are creative thinkers. Statement 2 says no creative thinkers are resistant to new ideas. This logically means that all engineers are not resistant to new ideas. Statement 3 directly contradicts this conclusion by claiming some engineers are resistant to new ideas."
  },
  {
    "id": "gen-41-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies diligently, they will pass the exam.",
      "Some students pass the exam without studying diligently.",
      "All students who study diligently complete their assignments."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 sets a condition for passing, while statement 2 shows it's not the only way to pass. Statement 3 adds another attribute for diligent students, which doesn't conflict with the other two."
  },
  {
    "id": "gen-41-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every participant who registered early received a bonus gift.",
      "No participant who did not attend the opening ceremony received a bonus gift.",
      "Some participants registered early but did not attend the opening ceremony."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all early registrants received a bonus gift. Statement 2 implies that if a participant received a bonus gift, they must have attended the opening ceremony. Thus, all early registrants must have attended the opening ceremony. Statement 3 directly contradicts this by claiming some early registrants did not attend the opening ceremony."
  },
  {
    "id": "gen-41-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that build nests are skilled architects.",
      "Some birds that build nests do not fly south for winter.",
      "The robin is a bird that flies south for winter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 describes a characteristic of birds that build nests. Statement 2 indicates variety among nest-building birds regarding migration. Statement 3 introduces a specific type of bird whose migratory behavior does not conflict with the other two statements."
  },
  {
    "id": "gen-41-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every book in this library is cataloged.",
      "No book written before 1900 is cataloged.",
      "Some books in this library were written before 1900."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that every book in the library is cataloged. Statement 2 states that no book written before 1900 is cataloged. If Statement 3 is true, then there are books in this library that were written before 1900 and are therefore not cataloged, which directly contradicts Statement 1."
  },
  {
    "id": "gen-41-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe is challenging, it uses advanced techniques.",
      "Some recipes that use advanced techniques are not challenging.",
      "All recipes using advanced techniques require specific ingredients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 sets a condition for challenging recipes. Statement 2 allows for recipes with advanced techniques that are not challenging, which does not contradict statement 1. Statement 3 adds a requirement for all advanced technique recipes, which is consistent with the preceding statements."
  },
  {
    "id": "gen-41-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members attended the full meeting.",
      "A person voted only if they attended the full meeting.",
      "Some committee members did not vote.",
      "Everyone who attended the full meeting voted."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all committee members attended the full meeting. Statement 4 states that everyone who attended the full meeting voted. Therefore, it logically follows that all committee members voted. Statement 3 directly contradicts this conclusion by asserting that some committee members did not vote."
  },
  {
    "id": "gen-41-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All rare books are housed in the special collection.",
      "No book housed in the special collection can be checked out.",
      "Some books that cannot be checked out are not rare books."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 establish that rare books are in the special collection and thus cannot be checked out. Statement 3 allows for other types of books that also cannot be checked out but are not rare, which is fully consistent with the first two statements."
  },
  {
    "id": "gen-41-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful projects followed a strict timeline.",
      "No project that followed a strict timeline went over budget.",
      "Some projects that went over budget were successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all successful projects followed a strict timeline. Statement 2 asserts that no project that followed a strict timeline went over budget. This logically means that no successful project went over budget. Statement 3 directly contradicts this conclusion by stating that some projects that went over budget were successful."
  },
  {
    "id": "gen-41-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a car is electric, it produces zero emissions.",
      "All cars that produce zero emissions are expensive to manufacture.",
      "Some expensive-to-manufacture cars are not electric."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 establish a chain that all electric cars are expensive to manufacture. Statement 3 suggests that there are other types of expensive-to-manufacture cars besides electric ones, which is fully consistent with the preceding statements."
  },
  {
    "id": "gen-42-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is an orchid, it requires high humidity.",
      "Every plant requiring high humidity must be misted daily.",
      "No plant that is misted daily can tolerate direct sunlight.",
      "Some orchids can tolerate direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a plant is an orchid, it requires high humidity, must be misted daily, and therefore cannot tolerate direct sunlight (Orchid → Not Tolerate Direct Sunlight). Statement 4 claims that some orchids *can* tolerate direct sunlight, which directly contradicts the conclusion derived from the first three statements. Removing Statement 4 resolves this by removing the conflicting specific instance."
  },
  {
    "id": "gen-42-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer feedback.",
      "If a business prioritizes customer feedback, it invests in training.",
      "Some businesses that invest in training are not successful.",
      "Every business that invests in training employs data analysts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A business could invest in training and employ data analysts without being successful, which is compatible with the idea that all successful businesses prioritize customer feedback and invest in training. There is no contradiction generated by these statements."
  },
  {
    "id": "gen-42-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a committee member proposes a new policy, they must attend the board meeting.",
      "Every member attending the board meeting receives a stipend.",
      "No member who receives a stipend is eligible for reimbursement of travel costs.",
      "Some committee members who propose new policies are eligible for reimbursement of travel costs."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a committee member proposes a new policy, they attend the board meeting, receive a stipend, and therefore are not eligible for travel reimbursement (Proposes Policy → Not Eligible for Reimbursement). Statement 4 asserts that some committee members who propose new policies *are* eligible for travel reimbursement, which directly contradicts this conclusion. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who complete the internship receive a recommendation.",
      "If a student receives a recommendation, they are considered for a scholarship.",
      "Some students who do not complete the internship are considered for a scholarship.",
      "No student considered for a scholarship fails the final project."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A student could be considered for a scholarship (due to reasons other than the internship) and not fail the final project, while still being someone who did not complete the internship. This does not contradict that students who complete the internship receive a recommendation, are considered for a scholarship, and do not fail the final project."
  },
  {
    "id": "gen-42-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car sold at the auction has a clean title.",
      "If a car has a clean title, it passes the safety inspection.",
      "No car that passes the safety inspection requires major repairs.",
      "Some cars requiring major repairs are sold at the auction."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish that if a car is sold at the auction, it has a clean title, passes safety inspection, and therefore does not require major repairs (Sold at Auction → Not Requires Major Repairs). Statement 4 claims that some cars requiring major repairs *are* sold at the auction, which directly contradicts the derived conclusion. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant offers outdoor seating, it has a liquor license.",
      "Every restaurant with a liquor license serves dinner.",
      "Some restaurants that serve dinner do not offer outdoor seating.",
      "No restaurant that offers outdoor seating has a drive-through."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A restaurant can serve dinner and have a liquor license without offering outdoor seating, which is fully compatible with the rule that restaurants with outdoor seating serve dinner. The statement about drive-throughs is an additional, compatible fact."
  },
  {
    "id": "gen-42-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend weekly video calls.",
      "If an employee attends weekly video calls, they use dedicated collaboration software.",
      "No employee who uses dedicated collaboration software performs field visits.",
      "Some employees who work remotely perform field visits."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically connect: if an employee works remotely, they attend weekly video calls, use collaboration software, and therefore do not perform field visits (Works Remotely → Not Performs Field Visits). Statement 4 asserts that some employees who work remotely *do* perform field visits, directly contradicting this derived conclusion. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is enrolled in the advanced class, they have passed the prerequisite.",
      "Every student who passed the prerequisite submitted an application on time.",
      "Some students who submitted an application on time are not enrolled in the advanced class.",
      "No student enrolled in the advanced class is a first-year student."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A student could submit an application on time but not be in the advanced class (perhaps because they didn't pass the prerequisite, or chose not to enroll), which doesn't contradict that all advanced class students submitted on time. The statement about first-year students is an additional compatible fact."
  },
  {
    "id": "gen-42-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All devices in the secure lab have encrypted storage.",
      "If a device has encrypted storage, it undergoes regular security audits.",
      "No device that undergoes regular security audits connects to public networks.",
      "There is a device in the secure lab that connects to public networks."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a device is in the secure lab, it has encrypted storage, undergoes regular security audits, and therefore does not connect to public networks (In Secure Lab → Not Connects to Public Networks). Statement 4 claims there is a device in the secure lab that *does* connect to public networks, which directly contradicts this derived conclusion. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project with a tight deadline requires overtime work.",
      "If a project requires overtime work, it receives additional funding.",
      "Some projects with additional funding do not have a tight deadline.",
      "No project with a tight deadline is started prematurely."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. A project could receive additional funding (perhaps for other reasons) but not have a tight deadline, which does not conflict with the rule that projects with tight deadlines receive additional funding. The statement about projects being started prematurely is an additional compatible fact."
  },
  {
    "id": "gen-43-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who attended the workshop passed the exam.",
      "No one who passed the exam received a failing grade.",
      "Some students who attended the workshop received a failing grade."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all students who attended the workshop did not receive a failing grade. Statement 3 contradicts this by asserting that some students who attended the workshop did receive a failing grade. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of Maple Street own a car.",
      "Some residents of Maple Street drive an electric car.",
      "Some people who own a car do not drive an electric car."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Residents of Maple Street who own cars can include some who drive electric cars (as stated in Statement 2) and some who do not (as stated in Statement 3, which applies to the broader group of car owners, some of whom could be Maple Street residents)."
  },
  {
    "id": "gen-43-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, then it lays blue eggs.",
      "No bird that lays blue eggs is a migratory species.",
      "All robins are migratory species."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically entail that if a bird is a robin, then it is not a migratory species. Statement 3 directly contradicts this conclusion by stating that all robins are migratory species. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-43-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees in the marketing department attended the training.",
      "Some employees who attended the training received a bonus.",
      "No employee in the sales department attended the training.",
      "Some employees who received a bonus work in the sales department."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. While no sales employees attended training (Statement 3), some employees who received a bonus work in sales (Statement 4). This means that some employees who received a bonus did not attend training, which is consistent with 'Some employees who attended the training received a bonus' (Statement 2)."
  },
  {
    "id": "gen-43-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every project approved this quarter required external funding.",
      "No project that required external funding was completed on schedule.",
      "All projects approved this quarter were completed on schedule."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that every project approved this quarter was not completed on schedule. Statement 3 directly asserts that all projects approved this quarter were completed on schedule, creating a contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants submitted their forms on time.",
      "Some applicants who submitted their forms on time were not successful.",
      "All applicants who were interviewed submitted their forms on time.",
      "Some successful applicants were not interviewed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Successful applicants are a subset of those who submitted forms on time. It is possible for some applicants who submitted on time to not be successful (Statement 2). Interviewed applicants also submitted on time (Statement 3). The claim that some successful applicants were not interviewed (Statement 4) is also entirely consistent, as not all successful applicants necessarily need to be interviewed."
  },
  {
    "id": "gen-43-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every mammal has scales.",
      "No animal with scales has fur.",
      "Some creatures with fur are not mammals.",
      "Every mammal has fur."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically lead to the conclusion that every mammal does not have fur. Statement 4 directly contradicts this by claiming that every mammal has fur. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-43-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All senior managers attended the annual conference.",
      "No one who attended the annual conference missed the keynote speech.",
      "Some employees who missed the keynote speech are not senior managers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statements 1 and 2 imply that all senior managers did not miss the keynote speech. Statement 3 states that some who missed the keynote speech are not senior managers, which is perfectly compatible with senior managers not missing the speech."
  },
  {
    "id": "gen-43-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs in this shelter are rescue animals.",
      "Some rescue animals are not dogs in this shelter.",
      "No dog in this shelter has been adopted.",
      "All rescue animals have been adopted."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 4 imply that all dogs in this shelter have been adopted. Statement 3 directly contradicts this by stating that no dog in this shelter has been adopted. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant in the marathon completed the race.",
      "Some participants in the marathon ran a personal best.",
      "All who completed the race crossed the finish line.",
      "Some people who ran a personal best did not complete the race."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statements 1 and 3 imply that every participant in the marathon crossed the finish line. Statement 2 indicates that some participants ran a personal best. Statement 4 allows for people who ran a personal best but were not participants in this particular marathon, and thus did not complete this race, which creates no conflict."
  },
  {
    "id": "gen-44-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the city council are property owners.",
      "Every property owner pays municipal taxes.",
      "No one who pays municipal taxes is exempt from the road levy.",
      "Some members of the city council are exempt from the road levy."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All city council members are property owners, all property owners pay municipal taxes, and no one who pays municipal taxes is exempt from the road levy. This implies that all members of the city council are not exempt from the road levy. Statement 4 directly contradicts this conclusion by asserting that some members are exempt."
  },
  {
    "id": "gen-44-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All bears are mammals.",
      "Some mammals are not bears.",
      "No reptiles are mammals.",
      "All grizzly bears are bears."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Grizzly bears are a type of bear, which are mammals. Some mammals are not bears (e.g., humans), and reptiles are a separate category of animals that are not mammals."
  },
  {
    "id": "gen-44-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "No one with strong leadership skills avoids public speaking.",
      "Every person who excels at public speaking is comfortable with large audiences.",
      "Some successful entrepreneurs are not comfortable with large audiences."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: All successful entrepreneurs have strong leadership skills, all with strong leadership skills engage in public speaking, and everyone who engages in public speaking is comfortable with large audiences. This means all successful entrepreneurs are comfortable with large audiences. Statement 4 directly contradicts this."
  },
  {
    "id": "gen-44-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant needs direct sunlight, it is not a fern.",
      "All plants in this garden are ferns or succulents.",
      "No succulent needs direct sunlight.",
      "Some plants in this garden need direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that ferns do not need direct sunlight. Statement 3 states that succulents do not need direct sunlight. Since Statement 2 says all garden plants are either ferns or succulents, it logically follows that no plant in this garden needs direct sunlight. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-44-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful artists attend workshops regularly.",
      "Some workshop attendees are not successful artists.",
      "No one who attends workshops regularly struggles with inspiration.",
      "Mark struggles with inspiration."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. If Mark struggles with inspiration, then according to Statement 3, he does not attend workshops regularly. This is consistent with Statement 1 (successful artists attend workshops) and Statement 2 (some attendees aren't successful artists)."
  },
  {
    "id": "gen-44-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless a student completes the advanced module, they cannot apply for an internship.",
      "All students who scored above 90% in the course completed the advanced module.",
      "No student is eligible for an internship unless they scored above 90% in the course.",
      "Some students applied for an internship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. If some students applied for an internship (Statement 4), then according to Statement 1, they completed the advanced module, and according to Statement 3, they scored above 90%. Statement 2 confirms that scoring above 90% leads to completing the advanced module, which aligns with these requirements."
  },
  {
    "id": "gen-44-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All research participants completed the consent form.",
      "No one who completed the consent form declined the follow-up survey.",
      "All participants who received compensation declined the follow-up survey.",
      "Some research participants received compensation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all research participants completed the consent form and did not decline the follow-up survey. This means no research participants declined the follow-up survey. However, Statement 4 indicates that some research participants received compensation, and Statement 3 states that all participants who received compensation declined the follow-up survey. This leads to the conclusion that some research participants did decline the follow-up survey, which contradicts the earlier conclusion."
  },
  {
    "id": "gen-44-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds of prey have sharp talons.",
      "No sharp-taloned animal is herbivorous.",
      "Some non-herbivorous animals are not birds of prey.",
      "All eagles are birds of prey."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Eagles are birds of prey, thus have sharp talons and are not herbivorous. Some non-herbivorous animals (like tigers or wolves) are not birds of prey, which is also consistent."
  },
  {
    "id": "gen-44-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A student qualifies for the scholarship only if they maintain a GPA above 3.5.",
      "No student who maintains a GPA above 3.5 participates in fewer than two extracurriculars.",
      "If a student participates in three or more extracurriculars, they receive priority advising.",
      "Some students who qualify for the scholarship participate in fewer than two extracurriculars."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish a chain: If a student qualifies for the scholarship, they maintain a GPA above 3.5, and no student with a GPA above 3.5 participates in fewer than two extracurriculars. This implies all students who qualify for the scholarship participate in two or more extracurriculars. Statement 4 directly contradicts this by stating some scholarship qualifiers participate in fewer than two extracurriculars. Statement 3 is a distractor and does not impact the core contradiction."
  },
  {
    "id": "gen-44-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful mountaineers train in high-altitude conditions.",
      "Every person who trains in high-altitude conditions avoids extreme temperature fluctuations.",
      "No one who avoids extreme temperature fluctuations experiences altitude sickness.",
      "Some successful mountaineers experience altitude sickness."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: All successful mountaineers train in high-altitude conditions; everyone who trains in high-altitude conditions avoids extreme temperature fluctuations; and no one who avoids extreme temperature fluctuations experiences altitude sickness. This leads to the conclusion that all successful mountaineers do not experience altitude sickness. Statement 4 directly contradicts this by claiming some successful mountaineers do experience altitude sickness."
  },
  {
    "id": "gen-45-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a succulent, it requires minimal water.",
      "Every plant in Sarah's garden is a succulent.",
      "No plant that requires minimal water needs daily misting.",
      "Some plants in Sarah's garden need daily misting."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2 (Every plant in Sarah's garden is a succulent), 1 (If a plant is a succulent, it requires minimal water), and 3 (No plant that requires minimal water needs daily misting) combine to imply that no plant in Sarah's garden needs daily misting. Statement 4 directly contradicts this conclusion by asserting that some plants in Sarah's garden do need daily misting."
  },
  {
    "id": "gen-45-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "If a person is a skilled strategist, they enjoy complex puzzles.",
      "Some people who enjoy complex puzzles are not members of the chess club.",
      "Maria is a skilled strategist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all members of the chess club enjoy complex puzzles. Statement 3 confirms that not all people who enjoy complex puzzles are chess club members, which is perfectly compatible. Statement 4 describes an individual who fits into the 'skilled strategists' category, without creating any conflict with other categories or rules."
  },
  {
    "id": "gen-45-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur is a disciplined worker.",
      "No disciplined worker lacks focus.",
      "If someone lacks focus, they struggle with long-term projects.",
      "Some successful entrepreneurs struggle with long-term projects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 (Every successful entrepreneur is a disciplined worker) and 2 (No disciplined worker lacks focus) combine to imply that every successful entrepreneur has focus. The contrapositive of Statement 3 (If someone struggles with long-term projects, they lack focus) means if they have focus, they do not struggle with long-term projects. Therefore, if a person is a successful entrepreneur, they do not struggle with long-term projects. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-45-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it is a fast flyer.",
      "All fast flyers have highly efficient wings.",
      "Some birds with highly efficient wings are not swifts.",
      "Maria saw a swift."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish a chain: if a bird is a swift, then it is a fast flyer, and therefore has highly efficient wings. Statement 3 indicates that there are birds with highly efficient wings that are not swifts, which does not contradict the established chain. Statement 4 simply states that a swift exists, which is consistent with all other statements."
  },
  {
    "id": "gen-45-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only those who pass the final project receive a grade of A.",
      "If a student passes the final project, they must have attended all workshops.",
      "No student who attended all workshops failed the midterm exam.",
      "Some students who received a grade of A failed the midterm exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 (If a student receives a grade of A, then they passed the final project), Statement 2 (If a student passes the final project, they attended all workshops), and Statement 3 (If a student attended all workshops, they did not fail the midterm exam) combine to establish that if a student receives a grade of A, they did not fail the midterm exam. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-45-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless an animal is a predator, it is an herbivore.",
      "All herbivores forage for food.",
      "Some animals that forage for food are predators.",
      "Every animal in the preserve is an herbivore."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means if an animal is not a predator, it is an herbivore. Statements 1 and 2 imply that non-predators forage. Statement 4 implies all preserve animals are herbivores, and thus forage due to Statement 2. Statement 3 allows for predators to also forage, which does not create a conflict with the other statements."
  },
  {
    "id": "gen-45-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "An athlete will compete only if they are fully recovered.",
      "If an athlete is fully recovered, they have passed their medical clearance.",
      "No athlete who passed their medical clearance has any lingering injuries.",
      "Some athletes who have lingering injuries will compete."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 (If an athlete competes, they are fully recovered), 2 (If an athlete is fully recovered, they passed their medical clearance), and 3 (If an athlete passed medical clearance, they have no lingering injuries) combine to establish that if an athlete competes, they have no lingering injuries. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-45-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced seminar, they must have completed the prerequisite course.",
      "Only students who received an A in the prerequisite course are eligible for a scholarship.",
      "No student who received a B in the prerequisite course is eligible for a scholarship.",
      "Some students in the advanced seminar received a B in the prerequisite course.",
      "Maria received an A in the prerequisite course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 sets a requirement for the seminar. Statement 2 defines scholarship eligibility, and Statement 3 reinforces this by disqualifying students with a B, which is consistent. Statement 4 indicates some seminar students received a B, meaning they met the prerequisite but not scholarship criteria. Statement 5 introduces an individual who is eligible for a scholarship. All these conditions can coexist without conflict."
  },
  {
    "id": "gen-45-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a fruit is ripe, it is not sweet.",
      "All fruits that are sweet are appealing to shoppers.",
      "Every fruit placed on display is sweet.",
      "Some fruit on display is not ripe."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Every fruit placed on display is sweet) and the contrapositive of Statement 1 (If a fruit is sweet, it is ripe) combine to imply that every fruit placed on display is ripe. Statement 4 directly contradicts this conclusion by asserting that some fruit on display is not ripe."
  },
  {
    "id": "gen-45-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee submits a travel expense report, they must include all original receipts.",
      "All original receipts are stored digitally for auditing purposes.",
      "No employee who fails to include original receipts will be reimbursed.",
      "Some employees who are reimbursed did not submit a travel expense report."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that travel expense reports require receipts, which are then stored digitally. Statement 3 implies that being reimbursed requires providing original receipts. Statement 4 indicates that some employees are reimbursed even without submitting a travel expense report, which is consistent; they could be reimbursed for other types of expenses that also require receipts, which aligns with Statement 3."
  },
  {
    "id": "gen-46-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every lawyer has passed the bar exam.",
      "No one who passed the bar exam failed law school.",
      "Some lawyers failed law school."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that if someone is a lawyer, they passed the bar. Statement 2 implies that if someone passed the bar, they did not fail law school. Together, these mean that all lawyers did not fail law school. Statement 3 claims some lawyers did fail law school, which directly contradicts this."
  },
  {
    "id": "gen-46-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Sarah trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All professional athletes train daily, but some people who train daily are not athletes. Sarah trains daily, which is consistent with her being either a professional athlete or one of the non-athlete people who train daily. No contradiction arises."
  },
  {
    "id": "gen-46-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a mystery novel, it is a work of fiction.",
      "No work of fiction contains only factual data.",
      "Some mystery novels contain only factual data."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all mystery novels are works of fiction. Statement 2 implies that no work of fiction contains only factual data. Therefore, it must be true that no mystery novel contains only factual data. Statement 3 directly contradicts this by asserting that some mystery novels do contain only factual data."
  },
  {
    "id": "gen-46-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "Some feathered creatures cannot fly.",
      "A penguin is a bird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Since all birds have feathers (Statement 1) and a penguin is a bird (Statement 3), it follows that penguins have feathers. This is consistent with Statement 2, which allows for feathered creatures (like penguins) that cannot fly. No contradiction."
  },
  {
    "id": "gen-46-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members are required to attend the meeting.",
      "Anyone required to attend the meeting must sign the attendance sheet.",
      "Some committee members did not sign the attendance sheet."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 means all committee members must attend. Statement 2 means anyone attending must sign the sheet. Combining these, it follows that all committee members must sign the attendance sheet. Statement 3, however, claims that some committee members did not sign the attendance sheet, creating a contradiction."
  },
  {
    "id": "gen-46-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No students who passed the exam failed the course.",
      "Some students who studied diligently did not pass the exam.",
      "All students who failed the course studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that students who failed the course did not pass the exam. Statement 3 implies that students who failed the course studied diligently. These are consistent with Statement 2, as students who studied diligently could still fail the exam and thus the course. No contradiction."
  },
  {
    "id": "gen-46-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All effective leaders possess strong communication skills.",
      "No one with strong communication skills avoids public speaking.",
      "Every effective leader avoids public speaking."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that effective leaders have strong communication skills. Statement 2 indicates that people with strong communication skills do not avoid public speaking. Therefore, it must be true that effective leaders do not avoid public speaking. Statement 3 directly contradicts this by stating every effective leader avoids public speaking."
  },
  {
    "id": "gen-46-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All flowering plants attract pollinators.",
      "Some plants that attract pollinators are not flowering plants.",
      "The rose bush in my garden is a flowering plant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates all flowering plants attract pollinators. Statement 3 states a rose bush is a flowering plant, so it attracts pollinators. This is consistent with Statement 2, which merely states that some pollinator-attracting plants are not flowering, allowing for others (like the rose bush) to be flowering plants that attract pollinators."
  },
  {
    "id": "gen-46-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All research proposals must pass ethical review.",
      "No project that failed ethical review can receive funding.",
      "Every project that received funding was a research proposal.",
      "Some projects that received funding did not pass ethical review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that any project receiving funding was a research proposal. Statement 1 states all research proposals must pass ethical review. Therefore, any project that received funding must have passed ethical review. Statement 4 directly contradicts this by claiming some projects that received funding did not pass ethical review."
  },
  {
    "id": "gen-46-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student enrolled in a STEM course attended the lab session.",
      "Some students who attended the lab session are not enrolled in a STEM course.",
      "No student who skipped the lab session received a passing grade.",
      "Maria received a passing grade."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 4, Maria received a passing grade. From Statement 3 (contrapositive), anyone who received a passing grade did not skip the lab session, meaning Maria attended the lab session. This is consistent with Statement 1 (Maria could be a STEM student who attended) and Statement 2 (Maria could be a non-STEM student who attended). No contradiction."
  },
  {
    "id": "gen-47-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of this building pay an annual amenity fee.",
      "No resident who pays an annual amenity fee is exempt from parking charges.",
      "If a resident has a disabled parking permit, they are exempt from all parking charges.",
      "Some residents of this building have a disabled parking permit."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 4 indicates that some residents have a disabled parking permit. According to Statement 3, these residents are exempt from parking charges. Statement 2 tells us that anyone exempt from parking charges does not pay an annual amenity fee (by contrapositive). Therefore, some residents do not pay an annual amenity fee. This directly contradicts Statement 1, which asserts that all residents of this building pay an annual amenity fee."
  },
  {
    "id": "gen-47-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a researcher is published, they receive grant funding.",
      "Only researchers who present at the conference receive grant funding.",
      "All researchers who presented at the conference are also published.",
      "Dr. Chen did not present at the conference.",
      "Dr. Chen received grant funding."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 5 tells us Dr. Chen received grant funding. According to Statement 2, a researcher receives grant funding only if they present at the conference. This means Dr. Chen must have presented at the conference. However, Statement 4 explicitly states that Dr. Chen did not present at the conference. This creates a direct contradiction."
  },
  {
    "id": "gen-47-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members who attend the monthly meeting receive a stipend.",
      "No committee member who receives a stipend is reimbursed for travel expenses.",
      "Every committee member who lives out of state is reimbursed for travel expenses.",
      "Some committee members who live out of state attend the monthly meeting."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a committee member attends the monthly meeting, they receive a stipend. From Statement 2, if they receive a stipend, they are not reimbursed for travel expenses. This means all committee members who attend the monthly meeting are not reimbursed for travel expenses. Statement 3 says that every committee member who lives out of state is reimbursed for travel expenses. Therefore, no committee member who lives out of state can also attend the monthly meeting. This contradicts Statement 4, which claims that some committee members who live out of state do attend the monthly meeting."
  },
  {
    "id": "gen-47-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All cars in the showroom have automatic transmission.",
      "No car with automatic transmission has a manual override.",
      "If a car is a sports model, it has a manual override.",
      "Some cars in the showroom are sports models."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all cars in the showroom have automatic transmission. From Statement 2, no car with automatic transmission has a manual override. This means all cars in the showroom do not have a manual override. However, Statement 4 says that some cars in the showroom are sports models. According to Statement 3, if a car is a sports model, it has a manual override. Therefore, some cars in the showroom have a manual override. This contradicts the conclusion that all cars in the showroom do not have a manual override."
  },
  {
    "id": "gen-47-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a patient has condition A, they must be prescribed medication X.",
      "No patient prescribed medication X is allowed to consume alcohol.",
      "All patients who are taking medication Y are allowed to consume alcohol.",
      "Some patients with condition A are taking medication Y."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a patient has condition A, they are prescribed medication X. From Statement 2, if a patient is prescribed medication X, they are not allowed to consume alcohol. This means all patients with condition A are not allowed to consume alcohol. However, Statement 4 says that some patients with condition A are taking medication Y. According to Statement 3, all patients taking medication Y are allowed to consume alcohol. Therefore, some patients with condition A are allowed to consume alcohol. This contradicts the conclusion that all patients with condition A are not allowed to consume alcohol."
  },
  {
    "id": "gen-47-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes the advanced programming course, they are eligible for the internship program.",
      "No student eligible for the internship program has incomplete coursework.",
      "All students who did not complete the advanced programming course have incomplete coursework.",
      "Some students who complete the advanced programming course have incomplete coursework."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, if a student completes the advanced programming course, they are eligible for the internship program. From Statement 2, if a student is eligible for the internship program, they do not have incomplete coursework. This implies that all students who complete the advanced programming course do not have incomplete coursework. This directly contradicts Statement 4, which asserts that some students who complete the advanced programming course do have incomplete coursework."
  },
  {
    "id": "gen-48-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the hiking club own waterproof boots.",
      "No one who owns waterproof boots has wet feet after a hike.",
      "Some members of the hiking club have wet feet after a hike."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no members of the hiking club have wet feet after a hike. This directly contradicts Statement 3, which asserts that some members do have wet feet."
  },
  {
    "id": "gen-48-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful applicants possess a valid driver's license.",
      "Some people who possess a valid driver's license were not successful applicants.",
      "Every successful applicant completed the online training module."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Successful applicants possess a license and completed training, while other licensed individuals exist who were not successful applicants. There is no logical contradiction among these facts."
  },
  {
    "id": "gen-48-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "No animal with retractable claws is a canine.",
      "Some canines are felines."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that if an animal is a feline, it is not a canine. This means no felines are canines, which directly contradicts Statement 3, asserting that some canines are felines."
  },
  {
    "id": "gen-48-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Maria trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true together. Maria could be a professional athlete (consistent with Statement 1) or she could be one of the people who train daily but is not a professional athlete (consistent with Statement 2). No contradictions arise."
  },
  {
    "id": "gen-48-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All committee members attended the annual meeting.",
      "No one who attended the annual meeting was eligible for a bonus.",
      "Some committee members were eligible for a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that no committee members were eligible for a bonus. This conclusion directly conflicts with Statement 3, which claims that some committee members were eligible for a bonus."
  },
  {
    "id": "gen-48-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student in the drama club takes acting lessons.",
      "No one who takes acting lessons is a member of the debate team.",
      "Some students in the drama club are also in the chess club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that no students in the drama club are members of the debate team. Statement 3, about some drama club members also being in the chess club, introduces no contradiction with this or other statements."
  },
  {
    "id": "gen-48-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who receive a promotion get a raise.",
      "No employee who gets a raise works fewer than 40 hours per week.",
      "Some employees who receive a promotion work fewer than 40 hours per week."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together mean that no employees who receive a promotion work fewer than 40 hours per week. This directly contradicts Statement 3, which claims that some promoted employees do work fewer than 40 hours per week."
  },
  {
    "id": "gen-48-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant completed the survey.",
      "If a participant completed the survey, they received a gift card.",
      "Some participants did not redeem their gift card."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically conclude that every participant received a gift card. This is entirely consistent with Statement 3, as receiving a gift card does not mean it must be redeemed."
  },
  {
    "id": "gen-48-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of the building have access to the rooftop garden.",
      "No one with access to the rooftop garden is exempt from paying the maintenance fee.",
      "Some residents of the building are exempt from paying the maintenance fee."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together lead to the conclusion that no residents of the building are exempt from paying the maintenance fee. This directly contradicts Statement 3, which states that some residents are exempt."
  },
  {
    "id": "gen-48-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No one who attended the concert left early.",
      "Some people who attended the concert bought merchandise.",
      "All people who bought merchandise received a discount."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Some concert-goers bought merchandise and received a discount, and these same people could also have remained at the concert for its entirety, consistent with Statement 1."
  },
  {
    "id": "gen-49-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups receive venture capital.",
      "No company that receives venture capital operates without a clear business model.",
      "Every company operating with a clear business model prioritizes long-term growth.",
      "Some successful startups do not prioritize long-term growth."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: All successful startups receive venture capital, which means they operate with a clear business model, which in turn means they prioritize long-term growth. Therefore, all successful startups must prioritize long-term growth. Statement 4, however, claims that some successful startups do not prioritize long-term growth, directly contradicting this conclusion."
  },
  {
    "id": "gen-49-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes maintain a strict training regimen.",
      "Some individuals who maintain a strict training regimen are not professional athletes.",
      "No amateur athlete maintains a strict training regimen.",
      "David is a professional athlete."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. David, being a professional athlete, maintains a strict training regimen according to Statement 1. Statement 2 allows for non-professional athletes to also maintain a strict regimen, which does not conflict. Statement 3 ensures amateur athletes do not have such a regimen, but this does not contradict David's status or the existence of other non-professional athletes with strict regimens."
  },
  {
    "id": "gen-49-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student attends the lecture, they take notes.",
      "All students who take notes pass the course.",
      "Some students did not attend the lecture.",
      "Every student in the program passed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: if a student attends the lecture, they take notes, and thus they pass the course. Statement 4 states that every student in the program passed the course. Combining this with the contrapositive of Statement 2 (if a student did not pass, they did not take notes) and Statement 1 (if a student did not take notes, they did not attend the lecture), it implies that every student must have attended the lecture. This directly contradicts Statement 3, which claims some students did not attend the lecture."
  },
  {
    "id": "gen-49-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All citizens eligible to vote are registered.",
      "No person under eighteen is eligible to vote.",
      "Some registered citizens are not eligible to vote.",
      "Mr. Johnson is a citizen and is over eighteen."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 1 indicates a subset relationship. Statement 2 implies that to be eligible to vote, one must be over eighteen. Statement 3 confirms that registration does not solely depend on voting eligibility. Mr. Johnson, being a citizen over eighteen, could be eligible to vote and registered, or he could be registered for other reasons (e.g., mail lists) without being eligible to vote, consistent with Statement 3."
  },
  {
    "id": "gen-49-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the culinary club must attend the annual gala.",
      "No one who attends the annual gala skips the dessert course.",
      "Some members of the culinary club always skip the dessert course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: if someone is a member of the culinary club, they must attend the annual gala, and therefore they do not skip the dessert course. This implies that no member of the culinary club skips the dessert course. Statement 3 directly contradicts this by stating that some members of the culinary club always skip the dessert course."
  },
  {
    "id": "gen-49-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every book written by a renowned author sells well.",
      "Some books that sell well are not written by renowned authors.",
      "All books on the bestseller list sell well.",
      "Dr. Evans' new novel is on the bestseller list."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Dr. Evans' novel, being on the bestseller list, sells well according to Statement 3. This is consistent with Statement 1 (Dr. Evans might or might not be a renowned author) and Statement 2, which explicitly allows for books that sell well but are not by renowned authors."
  },
  {
    "id": "gen-49-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an athlete trains daily, they excel in their sport.",
      "No athlete who excels in their sport uses performance-enhancing drugs.",
      "All athletes in the national team train daily.",
      "Some athletes in the national team use performance-enhancing drugs."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: all athletes in the national team train daily, which means they excel in their sport, and therefore do not use performance-enhancing drugs. This leads to the conclusion that no athlete in the national team uses performance-enhancing drugs. Statement 4 directly contradicts this conclusion by asserting that some athletes in the national team do use performance-enhancing drugs."
  },
  {
    "id": "gen-49-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees with full benefits work at least 40 hours per week.",
      "Some employees who work at least 40 hours per week do not have full benefits.",
      "No part-time employee has full benefits.",
      "Sarah is an employee who works 30 hours per week."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Since Sarah works 30 hours per week, she does not work at least 40 hours per week. Therefore, by the contrapositive of Statement 1, she cannot have full benefits. This outcome is consistent with Statement 3 (assuming part-time is less than 40 hours) and does not conflict with Statement 2, which allows for employees with 40+ hours but no benefits."
  },
  {
    "id": "gen-49-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A permit is granted only if the applicant submits all required documents.",
      "If an applicant submits all required documents, their application is reviewed by the board.",
      "No application reviewed by the board contains errors.",
      "Every applicant who submitted an application with errors received a permit."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a permit is granted, then the applicant submitted all required documents, which means their application was reviewed by the board, and therefore the application contains no errors. This implies that if a permit is granted, the application contains no errors. Statement 4, however, states that every applicant who submitted an application with errors received a permit, directly contradicting the conclusion that permitted applications have no errors."
  },
  {
    "id": "gen-49-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that migrate south for the winter have distinctive plumage.",
      "Some birds with distinctive plumage do not migrate south for the winter.",
      "No bird that builds nests in tall trees migrates south for the winter.",
      "The robin is a bird with distinctive plumage."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The robin, having distinctive plumage, could be a bird that migrates south (consistent with Statement 1) or a bird that does not migrate south (consistent with Statement 2). Statement 3 describes a different characteristic (nest building location) that doesn't directly contradict any information about the robin or other migrating/non-migrating birds."
  },
  {
    "id": "gen-50-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the advanced seminar, they must complete the prerequisite course.",
      "No student who completes the prerequisite course fails the final project.",
      "Every student in the research group attends the advanced seminar.",
      "Some students in the research group fail the final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all students in the research group attend the advanced seminar. Statement 1 indicates that anyone attending the advanced seminar must complete the prerequisite course. Statement 2 indicates that no student completing the prerequisite course fails the final project. Together, these imply that no student in the research group fails the final project, which directly contradicts Statement 4."
  },
  {
    "id": "gen-50-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups rely on innovative technology.",
      "Some companies that rely on innovative technology are not successful startups.",
      "If a company is a successful startup, it has a clear business model.",
      "No company with a clear business model fails within its first two years."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Successful startups rely on innovative technology, have a clear business model, and do not fail within two years. It is also possible for some companies relying on innovative technology to not be successful startups."
  },
  {
    "id": "gen-50-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every artist who exhibits at the gallery has a unique style.",
      "If an artist has a unique style, their work is always critically acclaimed.",
      "No artist whose work is critically acclaimed struggles financially.",
      "Some artists who exhibit at the gallery struggle financially."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that all artists who exhibit at the gallery have a unique style. Statement 2 indicates that if an artist has a unique style, their work is critically acclaimed. Statement 3 indicates that artists whose work is critically acclaimed do not struggle financially. Taken together, these imply that no artist who exhibits at the gallery struggles financially, which contradicts Statement 4."
  },
  {
    "id": "gen-50-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it is a predator.",
      "All predators possess sharp claws.",
      "Some animals with sharp claws are not felines.",
      "No creature that lives exclusively on plants possesses sharp claws.",
      "All felines are carnivores."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. Felines are predators with sharp claws and are carnivores. The existence of non-felines with sharp claws (like a bear) and plant-eaters without sharp claws (like a rabbit) does not create any contradiction."
  },
  {
    "id": "gen-50-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a government committee holds a session, it produces minutes.",
      "All minutes produced by government committees are publicly accessible.",
      "No publicly accessible minutes ever pertain to a closed session.",
      "Every session held by the ethics committee is a government committee session.",
      "Some sessions held by the ethics committee are closed sessions."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 indicates that ethics committee sessions are government committee sessions. Statement 1 indicates that government committee sessions produce minutes. Statement 2 indicates that all such minutes are publicly accessible. Statement 3 indicates that publicly accessible minutes never pertain to a closed session. Therefore, no ethics committee session can be a closed session, which directly contradicts Statement 5."
  },
  {
    "id": "gen-50-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive annual bonuses work overtime.",
      "No employee who works overtime is eligible for the hardship fund.",
      "If an employee is eligible for the hardship fund, they do not receive an annual bonus.",
      "Some employees work overtime but do not receive annual bonuses."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Employees receiving annual bonuses work overtime and are not eligible for the hardship fund. Statement 3 is the contrapositive of a deduction from Statements 1 and 2, so it's consistent. Statement 4 indicates that not all employees working overtime receive bonuses, which is consistent with Statement 1."
  },
  {
    "id": "gen-50-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate passes the initial screening, they receive an interview invitation.",
      "Every candidate who receives an interview invitation is required to submit a portfolio.",
      "No candidate who submits a portfolio is offered a final position.",
      "Some candidates who pass the initial screening are offered a final position."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that candidates passing the initial screening receive an interview invitation. Statement 2 indicates that all candidates receiving an interview invitation must submit a portfolio. Statement 3 indicates that no candidate who submits a portfolio is offered a final position. Together, these imply that no candidate passing the initial screening is offered a final position, which directly contradicts Statement 4."
  },
  {
    "id": "gen-50-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All advanced drones require a specialized license to operate.",
      "Some drones that require a specialized license are not advanced drones.",
      "If a drone requires a specialized license, it must undergo regular maintenance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Advanced drones require specialized licenses and regular maintenance. There can also exist other types of drones that require a specialized license and regular maintenance but are not considered advanced."
  },
  {
    "id": "gen-50-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project with a critical deadline involves external consultants.",
      "If an external consultant is assigned to a project, they cannot work on any other project simultaneously.",
      "All internal projects are managed by a single team.",
      "No project managed by a single team involves external consultants.",
      "Some internal projects have critical deadlines."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 3 indicates that all internal projects are managed by a single team. Statement 4 indicates that no project managed by a single team involves external consultants. Therefore, no internal project involves external consultants. However, Statement 5 indicates that some internal projects have critical deadlines. Statement 1 indicates that every project with a critical deadline involves external consultants. Taken together, Statements 5 and 1 imply that some internal projects involve external consultants, which directly contradicts the earlier deduction."
  },
  {
    "id": "gen-50-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every active member of the club volunteers at the annual fair.",
      "If someone volunteers at the annual fair, they attend the pre-fair briefing.",
      "No one who attends the pre-fair briefing misses the post-fair debrief.",
      "Some active members of the club miss the post-fair debrief."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that all active members volunteer at the annual fair. Statement 2 indicates that all who volunteer at the annual fair attend the pre-fair briefing. Statement 3 indicates that no one who attends the pre-fair briefing misses the post-fair debrief. Taken together, these imply that no active member of the club misses the post-fair debrief, which directly contradicts Statement 4."
  }
];

export default generatedPuzzles;
