// Auto-generated puzzles — do not edit manually.
// Run: npx tsx scripts/generate-puzzles.mts

import { Puzzle } from '@/types';

const generatedPuzzles: Puzzle[] = [
  {
    "id": "gen-1-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful authors write every day.",
      "No one who writes every day struggles with writer's block.",
      "Some successful authors struggle with writer's block."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all successful authors write every day. Statement 2 says no one who writes every day struggles with writer's block. Combining these, it logically follows that no successful author struggles with writer's block. This directly contradicts Statement 3, which claims some successful authors do struggle with writer's block."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every cat enjoys a warm sunny spot.",
      "Some animals that enjoy warm sunny spots are not cats.",
      "Fido is an animal that enjoys a warm sunny spot."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 states a characteristic of all cats. Statement 2 clarifies that this characteristic is not exclusive to cats. Fido, an animal that enjoys warm sunny spots, could be a cat or one of the non-cat animals mentioned in Statement 2, so no contradiction arises."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a restaurant serves authentic Italian food, its chefs are from Italy.",
      "No chef from Italy uses frozen ingredients.",
      "The Bella Napoli restaurant serves authentic Italian food.",
      "The chefs at Bella Napoli use some frozen ingredients."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that Bella Napoli serves authentic Italian food. From Statement 1, this means Bella Napoli's chefs are from Italy. Statement 2 then dictates that no chef from Italy uses frozen ingredients. Therefore, Bella Napoli's chefs must not use frozen ingredients, which directly contradicts Statement 4."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "Some animals with feathers cannot fly.",
      "Penguins are birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Since penguins are birds (Statement 3) and all birds have feathers (Statement 1), penguins must have feathers. Statement 2 allows for some feathered animals to be unable to fly, which is consistent with penguins being birds that cannot fly."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of Sector 7 have a green access card.",
      "No one with a green access card is permitted in the high-security zone.",
      "Some individuals permitted in the high-security zone are residents of Sector 7."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all residents of Sector 7 have a green access card. Statement 2 says that no one with a green access card is permitted in the high-security zone. This implies that no resident of Sector 7 is permitted in the high-security zone. However, Statement 3 asserts that some residents of Sector 7 are permitted in the high-security zone, creating a contradiction."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful politician understands public opinion.",
      "Some individuals who understand public opinion are not politicians.",
      "Maya understands public opinion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 describes a characteristic of successful politicians. Statement 2 clarifies that understanding public opinion is not exclusive to politicians. Maya, who understands public opinion, could be a successful politician or one of the individuals mentioned in Statement 2, so no contradiction exists."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a vehicle is an electric car, it produces no emissions.",
      "All vehicles that produce no emissions are subject to a special tax.",
      "Some electric cars are not subject to a special tax."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that electric cars produce no emissions. Statement 2 states that all vehicles producing no emissions are subject to a special tax. Combining these, it follows that all electric cars are subject to a special tax. This conclusion directly contradicts Statement 3, which claims some electric cars are not subject to a special tax."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruit bats eat only fruit.",
      "Some animals that eat only fruit are not bats.",
      "A particular species of bird eats only fruit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 describes the diet of fruit bats. Statement 2 states that eating only fruit is not unique to bats. Statement 3 presents a species of bird that fits this description, which is entirely consistent with Statement 2."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful mountaineer has trained in high altitudes.",
      "No one who has trained in high altitudes suffers from acute altitude sickness.",
      "Some people who suffer from acute altitude sickness are successful mountaineers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every successful mountaineer has trained in high altitudes. Statement 2 says no one who has trained in high altitudes suffers from acute altitude sickness. Together, these imply that no successful mountaineer suffers from acute altitude sickness. This directly contradicts Statement 3, which claims some successful mountaineers do suffer from acute altitude sickness."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional artists have a unique style.",
      "Some people with a unique style are not professional artists.",
      "David has a unique style."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 describes a characteristic of professional artists. Statement 2 indicates that having a unique style is not exclusive to professional artists. David, who has a unique style, could be a professional artist or one of the individuals mentioned in Statement 2, so no contradiction arises."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lions are carnivores.",
      "No carnivores are herbivores.",
      "Some lions are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all lions are carnivores. Statement 2 says no carnivores are herbivores. This implies that no lions are herbivores. However, Statement 3 claims that some lions are herbivores, which directly contradicts the conclusion from Statements 1 and 2."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All teachers attend faculty meetings.",
      "Some faculty meeting attendees are not teachers.",
      "No students attend faculty meetings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all teachers to attend faculty meetings, for some non-teachers (e.g., administrators) to also attend, and for no students to attend. There is no contradiction among these statements."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird has blue feathers, it can sing.",
      "No birds that can sing are flightless.",
      "Some birds with blue feathers are flightless."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that birds with blue feathers can sing. Statement 2 states that no birds that can sing are flightless. Together, these imply that no birds with blue feathers are flightless. This directly contradicts Statement 3, which claims some birds with blue feathers are flightless."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful authors have published at least one book.",
      "Some people who have published at least one book are not successful authors.",
      "No successful authors write science fiction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is entirely possible that all successful authors have published books, that some non-successful authors have also published books, and that successful authors focus on genres other than science fiction. These statements can all be true simultaneously."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every project approved by the committee receives funding.",
      "All projects that receive funding must submit quarterly reports.",
      "Some projects started last year were approved by the committee.",
      "No projects started last year submitted quarterly reports."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says approved projects receive funding, and Statement 2 says funded projects submit quarterly reports. This chain implies that all projects approved by the committee must submit quarterly reports. Statement 3 claims some projects started last year were approved by the committee, which means some projects started last year must submit quarterly reports. This contradicts Statement 4, which states that no projects started last year submitted quarterly reports."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who attended the workshop improved their grades.",
      "Some students who improved their grades did not attend the workshop.",
      "All students who improved their grades also studied more."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Students could improve grades either by attending the workshop or by other means (e.g., studying more without attending the workshop). All scenarios described are plausible at the same time."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs enjoy playing in the park.",
      "No animals that enjoy playing in the park are afraid of squirrels.",
      "Some animals that are afraid of squirrels are dogs."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all dogs enjoy playing in the park. Statement 2 says no animals that enjoy playing in the park are afraid of squirrels. Combined, these statements imply that no dogs are afraid of squirrels. Statement 3, however, asserts that some dogs are afraid of squirrels, creating a direct contradiction."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants completed the survey.",
      "Some people who completed the survey did not participate.",
      "If a person did not complete the survey, they did not receive a reward."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Participants completed the survey. Other individuals (non-participants) could also complete the survey. The last statement simply sets a condition for receiving a reward, which doesn't conflict with the other statements."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "Every plant with thorns requires careful handling.",
      "Some plants that require careful handling are not roses.",
      "No plant that is a rose requires careful handling."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says if a plant is a rose, it has thorns. Statement 2 says every plant with thorns requires careful handling. These two statements logically imply that if a plant is a rose, it requires careful handling. Statement 4 directly contradicts this conclusion by stating that no plant that is a rose requires careful handling."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful.",
      "If a business is successful, it invests in employee training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A business can be successful by prioritizing customer satisfaction and investing in training. Other businesses can prioritize customer satisfaction without being successful. No contradictions arise."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All poets are dreamers.",
      "No dreamers are realists.",
      "Some artists are realists.",
      "All artists are poets."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 together imply that all artists are not realists (All artists are poets → All poets are dreamers → No dreamers are realists). This conclusion directly contradicts Statement 3, which claims some artists are realists."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals have fur.",
      "Some animals with fur are not mammals.",
      "No reptiles have fur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. For example, some animals with fur could be insects or other non-mammalian creatures, which is consistent with all mammals having fur and reptiles having no fur."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant needs direct sunlight, it has bright flowers.",
      "All plants with bright flowers attract hummingbirds.",
      "Some plants that attract hummingbirds do not need direct sunlight.",
      "Every plant in this garden needs direct sunlight.",
      "No plant in this garden attracts hummingbirds."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, and 2 chain together to imply that every plant in this garden attracts hummingbirds (Every plant in this garden needs direct sunlight → Every plant has bright flowers → Every plant attracts hummingbirds). This conclusion directly contradicts Statement 5, which asserts that no plant in this garden attracts hummingbirds."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups began with a strong vision.",
      "Some companies with a strong vision did not become successful startups.",
      "If a company lacked funding, it could not become a successful startup.",
      "Many companies with a strong vision also lacked funding."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Some companies with a strong vision might not succeed due to factors like lack of funding, which is consistent with all successful startups needing both vision and funding."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "No one who studied diligently failed the course.",
      "Some students who passed the exam failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all students who passed the exam did not fail the course (All students who passed the exam studied diligently → No one who studied diligently failed the course). This conclusion directly contradicts Statement 3, which states that some students who passed the exam failed the course."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every chef has a passion for food.",
      "Some people with a passion for food are not chefs.",
      "No one who dislikes cooking is a chef.",
      "All people who dislike cooking lack a passion for food."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. It is possible for chefs to have a passion for food, for others to have a passion for food without being chefs, and for those who dislike cooking to lack passion for food and thus not be chefs."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird builds a nest in a tree, it lays blue eggs.",
      "No bird that lays blue eggs is a ground-nesting bird.",
      "All sparrows build nests in trees.",
      "Some sparrows are ground-nesting birds."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 together imply that all sparrows are not ground-nesting birds (All sparrows build nests in trees → All sparrows lay blue eggs → No sparrows are ground-nesting birds). This conclusion directly contradicts Statement 4, which claims some sparrows are ground-nesting birds."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful athletes train rigorously.",
      "Some people who train rigorously are not successful athletes.",
      "If an athlete uses prohibited substances, they are not a successful athlete.",
      "Many people who train rigorously also use prohibited substances."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true. Some rigorous trainers might not be successful athletes for various reasons, including the use of prohibited substances, which would prevent them from being considered successful athletes per Statement 3."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All candidates who pass the first interview are invited to a second.",
      "No candidate invited to a second interview is rejected solely on their resume.",
      "If a candidate has prior experience, they pass the first interview.",
      "Every candidate for this position has prior experience.",
      "This company rejects all candidates solely on their resume."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 3, 1, and 2 chain together to imply that no candidate for this position is rejected solely on their resume (Every candidate has prior experience → Every candidate passes the first interview → Every candidate is invited to a second interview → No candidate is rejected solely on their resume). This conclusion directly contradicts Statement 5, which asserts that this company rejects all candidates solely on their resume."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All items in the sale section are discounted.",
      "Some discounted items are not in the sale section.",
      "All items purchased with a coupon are discounted."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Items can be discounted because they are in the sale section, or because a coupon was used, or both. There can also be discounted items that are neither in the sale section nor purchased with a coupon (e.g., clearance items)."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it requires shade.",
      "Any plant that requires shade cannot tolerate direct sunlight.",
      "Plants that cannot tolerate direct sunlight are sensitive to heat.",
      "If a plant is sensitive to heat, it must be watered daily.",
      "Some ferns do not need to be watered daily."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a chain: If a plant is a fern, then it requires shade, cannot tolerate direct sunlight, is sensitive to heat, and thus must be watered daily. This implies that all ferns must be watered daily. Statement 5 claims that some ferns do not need to be watered daily, which directly contradicts the conclusion derived from the other statements."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful ventures involved careful planning.",
      "No project that lacked proper funding was a successful venture.",
      "If a project had careful planning, it secured proper funding.",
      "Some projects with careful planning were not successful ventures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (Successful Venture → Careful Planning) and Statement 3 (Careful Planning → Proper Funding) combine to imply that all successful ventures secured proper funding, which is consistent with Statement 2 (Successful Venture → Proper Funding). Statement 4 (Some Careful Planning → Not Successful Venture) is consistent with Statement 1, as it is possible for some projects with careful planning not to be successful ventures."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a chef uses locally sourced ingredients, their restaurant is highly rated.",
      "No restaurant with a high rating serves frozen desserts.",
      "All restaurants that do not serve frozen desserts participate in the annual food festival.",
      "Some chefs who use locally sourced ingredients do not participate in the annual food festival."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If a chef uses locally sourced ingredients, their restaurant is highly rated, which means it does not serve frozen desserts, and therefore participates in the annual food festival. This implies that all chefs who use locally sourced ingredients participate in the annual food festival. Statement 4 claims that some chefs who use locally sourced ingredients do not participate in the annual food festival, which contradicts this conclusion."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a bestseller, it is widely reviewed.",
      "No book that is widely reviewed fails to appear on literary award lists.",
      "Some books on literary award lists are not bestsellers.",
      "All books that are widely reviewed are also bestsellers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 4 together establish that a book is a bestseller if and only if it is widely reviewed. Statement 2 indicates that all widely reviewed books appear on literary award lists. Therefore, all bestsellers appear on literary award lists. Statement 3 is consistent with this, as books can appear on award lists without being bestsellers (e.g., non-bestselling but critically acclaimed books)."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every member of the hiking club participates in the annual trail maintenance event.",
      "No one who participates in the annual trail maintenance event dislikes outdoor work.",
      "If a club member dislikes outdoor work, they are not eligible for club leadership.",
      "All club leaders are members of the hiking club.",
      "Some club leaders dislike outdoor work."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, and 2 form a logical chain: All club leaders are members of the hiking club, meaning they participate in the annual trail maintenance event, and therefore do not dislike outdoor work. This implies that no club leader dislikes outdoor work. Statement 5 directly contradicts this conclusion by asserting that some club leaders dislike outdoor work."
  },
  {
    "id": "gen-5-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All effective leaders are skilled communicators.",
      "No skilled communicator avoids public speaking.",
      "If someone avoids public speaking, they are not an effective leader.",
      "Some people who are skilled communicators are not effective leaders."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 imply that all effective leaders are skilled communicators and engage in public speaking. Statement 3 is the contrapositive of 'If a leader is effective, they engage in public speaking,' making it consistent with the combined implication of 1 and 2. Statement 4 is also consistent with Statement 1, as it is possible for some skilled communicators not to be effective leaders."
  },
  {
    "id": "gen-5-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a raptor, it is a hunter.",
      "All hunters have strong talons.",
      "No bird with strong talons is a ground-nesting species.",
      "Unless a bird is a raptor, it is a ground-nesting species.",
      "Some raptors are ground-nesting species."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 form a chain: If a bird is a raptor, it is a hunter, has strong talons, and therefore is not a ground-nesting species. This implies that no raptor is a ground-nesting species. Statement 5 claims that some raptors are ground-nesting species, which directly contradicts this derived conclusion."
  },
  {
    "id": "gen-5-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a substance is an acid, its pH is less than 7.",
      "All substances with a pH greater than 7 are bases.",
      "No substance with a pH of exactly 7 is an acid.",
      "Some bases have a pH greater than 7."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 defines a characteristic of acids. Statement 2 defines bases by their pH. Statement 3 clarifies that neutral substances are not acids, which is compatible with Statement 1. Statement 4 simply provides an instance of the definition given in Statement 2. There are no contradictions between these facts."
  },
  {
    "id": "gen-5-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee who completes the advanced training receives a bonus.",
      "No employee who receives a bonus has outstanding performance issues.",
      "If an employee is eligible for advanced training, they must complete it.",
      "If an employee has outstanding performance issues, they are not eligible for advanced training.",
      "Some employees are eligible for advanced training but have outstanding performance issues."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 3 and 1 form a chain: If an employee is eligible for advanced training, they must complete it, and therefore they receive a bonus. Statement 2 then indicates that an employee who receives a bonus has no outstanding performance issues. Combining these, if an employee is eligible for advanced training, they have no outstanding performance issues. This means if an employee has outstanding performance issues, they are not eligible for advanced training, which is exactly Statement 4. However, Statement 5 claims that some employees are eligible for advanced training AND have outstanding performance issues, directly contradicting Statement 4 and the combined conclusion."
  },
  {
    "id": "gen-5-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All sculptures from the Renaissance era feature religious themes.",
      "No artwork featuring religious themes uses abstract forms.",
      "If a sculpture uses abstract forms, it is not from the Renaissance era.",
      "Some sculptures that do not use abstract forms are not from the Renaissance era."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 combine to imply that if a sculpture is from the Renaissance era, it does not use abstract forms. Statement 3 is the contrapositive of this implication, making it consistent. Statement 4 is also consistent; while Renaissance sculptures do not use abstract forms, there can also be many other types of sculptures (e.g., ancient, modern) that do not use abstract forms and are also not from the Renaissance era."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the final exam received a certificate.",
      "No student who received a certificate missed more than three classes.",
      "Some students who passed the final exam missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all students who passed the final exam did not miss more than three classes (Passed Exam → Received Certificate → Did Not Miss More Than Three Classes). Statement 3 asserts that some students who passed the final exam did miss more than three classes, which directly contradicts this inference. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs have strong leadership skills.",
      "Some people with strong leadership skills are not entrepreneurs.",
      "Maria has strong leadership skills."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Statement 1 describes a characteristic of entrepreneurs. Statement 2 indicates that the set of people with strong leadership skills is larger than or different from the set of entrepreneurs. Statement 3 introduces Maria, who could fit into either category (an entrepreneur or a non-entrepreneur) while still possessing strong leadership skills."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every bird in the aviary has a colored band.",
      "No bird with a colored band is permitted outside the aviary.",
      "Some birds permitted outside the aviary are currently in the aviary."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no bird in the aviary is permitted outside the aviary (In Aviary → Has Colored Band → Not Permitted Outside). Statement 3 asserts that some birds permitted outside the aviary are currently in the aviary, directly contradicting this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it has delicate roots.",
      "Some plants with delicate roots do not require daily watering.",
      "The rosebush in my garden requires daily watering."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true at the same time. Statement 1 establishes a conditional relationship. Statement 2 indicates that the condition in Statement 1 is not reversible. Statement 3 provides a specific example of a plant that fits the antecedent of Statement 1, and thus also its consequent, without contradicting Statement 2."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All valid tickets display a barcode.",
      "No ticket with a barcode is eligible for a refund.",
      "All tickets eligible for a refund are valid tickets.",
      "At least one ticket is eligible for a refund."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 together imply that no ticket can be eligible for a refund (Eligible for Refund → Valid Ticket → Displays Barcode → Not Eligible for Refund). This means that the existence of any ticket eligible for a refund is logically impossible. Statement 4, however, asserts that at least one ticket is eligible for a refund, creating a direct contradiction. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees with management roles attend weekly meetings.",
      "Some employees who attend weekly meetings do not have management roles.",
      "Sarah attends weekly meetings.",
      "Sarah does not have a management role."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. Statement 1 establishes a rule for employees with management roles. Statement 2 clarifies that attending weekly meetings does not necessarily imply a management role. Statements 3 and 4 describe Sarah, who fits perfectly into the category described in Statement 2 (an employee who attends weekly meetings but does not have a management role), without contradicting Statement 1."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All eligible voters are registered citizens.",
      "Every registered citizen has a valid ID card.",
      "No one with a valid ID card is barred from voting.",
      "Some eligible voters are barred from voting."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that no eligible voter is barred from voting (Eligible Voter → Registered Citizen → Has Valid ID Card → Not Barred from Voting). Statement 4 asserts that some eligible voters are barred from voting, directly contradicting this derived conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All highly venomous spiders are black.",
      "No black spider is harmless.",
      "Some harmless spiders are not highly venomous."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Statement 1 describes a characteristic of highly venomous spiders. Statement 2 explains a property of black spiders, which together with Statement 1 implies that highly venomous spiders are not harmless. Statement 3 simply states that there are harmless spiders that are not highly venomous (e.g., a brown spider that is harmless), which is entirely consistent with the first two statements."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the choir sings alto or tenor.",
      "No one who sings alto is also a tenor.",
      "All tenors are proficient in sight-reading.",
      "Some members of the choir are not proficient in sight-reading.",
      "No member of the choir sings alto."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 5 combined imply that every member of the choir sings tenor (Choir Member → (Alto or Tenor) AND (Not Alto) → Tenor). Statement 3 states that all tenors are proficient in sight-reading. Therefore, it follows that every member of the choir is proficient in sight-reading. Statement 4 directly contradicts this conclusion by asserting that some members of the choir are not proficient in sight-reading. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All licensed divers have completed advanced training.",
      "Some individuals who have completed advanced training are not licensed divers.",
      "Mark has completed advanced training.",
      "Mark is a licensed diver."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. Statement 1 establishes a prerequisite for licensed divers. Statement 2 clarifies that advanced training does not guarantee one is a licensed diver. Statements 3 and 4 describe Mark, who is an example of a licensed diver who has completed advanced training, which is entirely consistent with the other statements."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All orchids are delicate plants.",
      "If a plant is delicate, it requires constant humidity.",
      "No plant that requires constant humidity can thrive in dry climates.",
      "This greenhouse contains orchids that thrive in dry climates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: All orchids are delicate plants (1), delicate plants require constant humidity (2), and plants requiring constant humidity cannot thrive in dry climates (3). This means all orchids cannot thrive in dry climates. Statement 4 directly contradicts this by asserting that some orchids in the greenhouse *do* thrive in dry climates. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-7-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs have strong problem-solving skills.",
      "Some people with strong problem-solving skills are not entrepreneurs.",
      "Maria has strong problem-solving skills.",
      "If someone is a successful entrepreneur, they are highly motivated."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Maria might be a successful entrepreneur, in which case she has strong problem-solving skills (1) and is highly motivated (4). Alternatively, Maria might simply be someone with strong problem-solving skills who is not an entrepreneur, which is consistent with Statement 2. No logical contradiction arises."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every athlete on the university team trains daily.",
      "No student who trains daily ever misses a class.",
      "All students who lose their scholarship have missed a class.",
      "At least one athlete on the university team lost their scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 create a chain: Every athlete trains daily (1), and no student who trains daily misses a class (2). Thus, no athlete misses a class. Statement 3 indicates that anyone who lost their scholarship must have missed a class. Statement 4 claims that at least one athlete lost their scholarship; if an athlete lost their scholarship, then by Statement 3 they must have missed a class, which contradicts the conclusion that no athlete misses a class. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-7-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a falcon, it is a predator.",
      "Some predators are not falcons.",
      "All birds of prey are predators.",
      "This forest has birds of prey that are not falcons."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. For example, eagles are birds of prey (3) and predators (3), but are not falcons (consistent with 2 and 4). Statement 1 establishes a rule for falcons, which does not conflict with the existence of other types of predators or birds of prey. No logical contradiction arises."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the marathon completed the race.",
      "Everyone who completed the race crossed the finish line.",
      "If a runner crossed the finish line, they received a medal.",
      "Some participants in the marathon did not receive a medal."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: All marathon participants completed the race (1), everyone who completed the race crossed the finish line (2), and anyone who crossed the finish line received a medal (3). Therefore, all participants in the marathon received a medal. Statement 4 directly contradicts this conclusion by stating that some participants did not receive a medal. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-7-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced course, they must have passed the prerequisite.",
      "All students who passed the prerequisite received a high score on the placement test.",
      "Some students who received a high score on the placement test did not enroll in the advanced course.",
      "No student enrolled in the advanced course failed to receive a high score on the placement test."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 2 establish that all students in the advanced course received a high score on the placement test (AC -> PR -> PT_High), which is reinforced by Statement 4. Statement 3 simply allows for the possibility of students with high placement test scores who chose not to enroll in the advanced course, which does not contradict any other statement. No logical contradiction arises."
  },
  {
    "id": "gen-7-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees in the marketing department attend the weekly meeting.",
      "If an employee attends the weekly meeting, they submit a progress report.",
      "No employee who submits a progress report works remotely.",
      "Sarah works remotely and is an employee in the marketing department."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: All marketing department employees attend the weekly meeting (1), anyone attending the weekly meeting submits a progress report (2), and no one submitting a progress report works remotely (3). This implies that no employee in the marketing department works remotely. Statement 4 directly contradicts this by stating that Sarah, an employee in the marketing department, works remotely. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-7-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful politician is an excellent debater.",
      "Some excellent debaters are not successful politicians.",
      "All excellent debaters engage in public speaking.",
      "John is a successful politician who enjoys public speaking."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 3 together imply that all successful politicians are excellent debaters and engage in public speaking. Statement 4 describes John, who fits this description. Statement 2 allows for excellent debaters who are not politicians, which does not create any conflict. No logical contradiction arises."
  },
  {
    "id": "gen-7-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All cars parked illegally will be towed.",
      "If a car is towed, it will incur a fine.",
      "No car that incurs a fine is released without payment.",
      "The red sedan was parked illegally, but it was released without payment."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: Cars parked illegally are towed (1), towed cars incur a fine (2), and cars incurring a fine are not released without payment (3). This means any car parked illegally will not be released without payment. Statement 4 directly contradicts this by asserting that the red sedan, which was parked illegally, was released without payment. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-7-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with a management role have access to the executive lounge.",
      "Some employees with access to the executive lounge do not have a management role.",
      "If an employee has access to the executive lounge, they require a special key card.",
      "Lisa is an employee who requires a special key card."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Statements 1 and 3 imply that employees with a management role require a special key card. Statement 2 allows for other employees (without a management role) to also have executive lounge access and thus a special key card. Lisa (Statement 4) could be either a manager, or another employee with executive lounge access, or an employee requiring a special key card for an entirely different, unstated reason, without contradicting any of the other statements. No logical contradiction arises."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are nocturnal birds.",
      "No nocturnal birds hunt during the day.",
      "Some owls hunt during the day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that if a creature is an owl, it is a nocturnal bird, and therefore does not hunt during the day. This leads to the conclusion that no owls hunt during the day. Statement 3 directly contradicts this conclusion, making it the one to remove."
  },
  {
    "id": "gen-8-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All bears hibernate.",
      "Some animals that hibernate are not bears.",
      "Some animals that do not hibernate are not bears."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all bears to hibernate, for there to be other hibernating animals that are not bears, and for there to be animals that do not hibernate and are also not bears."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student enrolls in the advanced course, they must pass the prerequisite.",
      "No student who passed the prerequisite failed the final exam.",
      "Every student in this program enrolled in the advanced course.",
      "Some students in this program failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Every student in this program enrolled in the advanced course (3), which means they must pass the prerequisite (1), and no one who passed the prerequisite failed the final exam (2). Therefore, every student in this program did not fail the final exam. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-8-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits contain seeds.",
      "Not all plant parts that contain seeds are fruits.",
      "Some plant parts that do not contain seeds are edible."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all fruits to contain seeds, for some plant parts with seeds not to be fruits (e.g., bell peppers), and for some plant parts without seeds to be edible (e.g., lettuce)."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds eat only insects.",
      "All birds that fly south for winter eat only insects.",
      "Some birds fly south for winter."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 2 and 3 together imply that some birds eat only insects (those that fly south for winter). Statement 1 asserts that no birds eat only insects, which directly contradicts the conclusion drawn from Statements 2 and 3."
  },
  {
    "id": "gen-8-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a dog is a terrier, it is energetic.",
      "All energetic dogs are good at agility.",
      "No dogs good at agility are lazy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. They establish a chain where if a dog is a terrier, it is energetic, good at agility, and not lazy. This chain holds without contradiction."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every employee attended the mandatory meeting.",
      "No employee who attended the mandatory meeting received a bonus.",
      "Some employees did not receive a bonus.",
      "Every employee received a bonus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that every employee attended the mandatory meeting, and no one who attended received a bonus. This means every employee did not receive a bonus. Statement 4, which states every employee received a bonus, directly contradicts this conclusion."
  },
  {
    "id": "gen-8-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful entrepreneurs embrace risk.",
      "No one who embraces risk avoids failure.",
      "Some successful entrepreneurs avoid failure."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply a chain: all successful entrepreneurs embrace risk, and no one who embraces risk avoids failure. Therefore, no successful entrepreneurs avoid failure. Statement 3, which claims some successful entrepreneurs avoid failure, directly contradicts this conclusion."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All politicians are public speakers.",
      "No public speakers are shy.",
      "Some politicians are shy."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that if someone is a politician, they are a public speaker, and therefore not shy. This leads to the conclusion that no politicians are shy. Statement 3 directly contradicts this, making it the one to remove."
  },
  {
    "id": "gen-8-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a painting is famous, it is valuable.",
      "Some valuable paintings are not famous.",
      "No famous paintings are new."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A painting can be famous (and thus valuable and not new), or valuable but not famous (and potentially new or old), or new (and thus not famous, and potentially valuable or not)."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All researchers who publish frequently receive grants.",
      "No one who receives a grant struggles to find funding.",
      "Every senior researcher publishes frequently.",
      "Some senior researchers struggle to find funding."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that every senior researcher publishes frequently. Statement 1 indicates that all who publish frequently receive grants. Statement 2 states that no one who receives a grant struggles to find funding. Therefore, it must be true that no senior researcher struggles to find funding. This contradicts Statement 4, which claims that some senior researchers struggle to find funding."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional musicians have excellent hearing.",
      "Some people with excellent hearing are not professional musicians.",
      "Every person who teaches music theory has excellent hearing.",
      "Some people who teach music theory are not professional musicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Professional musicians are a subset of people with excellent hearing (Statement 1). There are indeed people with excellent hearing who are not musicians (Statement 2). Music theory teachers are also a group with excellent hearing (Statement 3), and some of these teachers might not be professional musicians (Statement 4), which aligns with the existence of non-musicians within the 'excellent hearing' group."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a candidate is well-prepared, they will answer all questions correctly.",
      "No candidate who answered all questions correctly failed the interview.",
      "Every candidate who studied diligently was well-prepared.",
      "At least one candidate failed the interview, despite studying diligently."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that all candidates who studied diligently were well-prepared. Statement 1 indicates that well-prepared candidates answer all questions correctly. Statement 2 states that candidates who answered all questions correctly did not fail the interview. Therefore, it must be true that no candidate who studied diligently failed the interview. This contradicts Statement 4, which claims at least one candidate failed the interview despite studying diligently."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All buildings constructed before 1900 lack modern insulation.",
      "No building with modern insulation consumes excessive energy.",
      "Some buildings constructed after 1900 consume excessive energy.",
      "Some buildings constructed before 1900 do not consume excessive energy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 identifies pre-1900 buildings as lacking modern insulation. Statement 2 links modern insulation to not consuming excessive energy, but it doesn't state that *only* modern insulation prevents excessive energy use. Statement 3 confirms some post-1900 buildings consume excessive energy, which is possible. Statement 4 suggests that lacking modern insulation (from Statement 1) does not necessarily lead to excessive energy consumption, which is also possible (e.g., due to other energy-saving factors). No direct contradiction is formed."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who completed the extra credit assignment passed the course.",
      "No student who failed the final exam passed the course.",
      "Every student who attended all review sessions completed the extra credit assignment.",
      "Some students attended all review sessions but failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every student who attended all review sessions completed the extra credit assignment. Statement 1 states that every student who completed the extra credit assignment passed the course. Therefore, every student who attended all review sessions passed the course. However, Statement 4 identifies some students who attended all review sessions but failed the final exam. Statement 2 clarifies that no student who failed the final exam passed the course. This creates a contradiction: the students identified in Statement 4 both passed the course (via the chain from Statement 3 and 1) and did not pass the course (via Statement 4 and 2)."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that can fly have feathers.",
      "Some creatures with feathers cannot fly.",
      "No creature that lives in Antarctica can fly.",
      "Some creatures that live in Antarctica have feathers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 sets a condition for flying birds. Statement 2 confirms that having feathers does not guarantee flight (e.g., penguins). Statement 3 indicates that no Antarctic creatures can fly. Statement 4 points out that some Antarctic creatures have feathers (like penguins), which is fully consistent with them being unable to fly (Statement 3) and with the idea that some feathered creatures cannot fly (Statement 2)."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the gardening club own a shovel.",
      "No one who owns a shovel struggles to dig holes.",
      "Every person who grows prize-winning tomatoes is a member of the gardening club.",
      "Some people who grow prize-winning tomatoes struggle to dig holes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 means all people who grow prize-winning tomatoes are members of the gardening club. Statement 1 says all gardening club members own a shovel. Statement 2 indicates that no one who owns a shovel struggles to dig holes. Therefore, no person who grows prize-winning tomatoes struggles to dig holes. This directly contradicts Statement 4, which asserts that some people who grow prize-winning tomatoes struggle to dig holes."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every employee who works overtime receives a bonus.",
      "No employee who misses more than two shifts receives a bonus.",
      "Some employees receive a bonus without working overtime.",
      "Some employees who miss more than two shifts do not work overtime."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 says all overtime workers get a bonus. Statement 2 says employees missing shifts don't get a bonus. This implies no employee can simultaneously work overtime and miss more than two shifts. Statement 3 suggests that there are other ways to earn a bonus, which doesn't contradict Statement 1. Statement 4 indicates that some employees who miss shifts are not overtime workers, which is perfectly plausible and doesn't create an inconsistency with the other rules."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All vegetables grown in this region are organic.",
      "No organic produce has been treated with synthetic pesticides.",
      "Every farmer market vendor sells only vegetables grown in this region.",
      "At least one farmer market vendor sells produce that has been treated with synthetic pesticides."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every farmer market vendor sells only vegetables grown in this region. Statement 1 states that all vegetables grown in this region are organic. Statement 2 clarifies that no organic produce has been treated with synthetic pesticides. Therefore, every farmer market vendor sells only produce that has not been treated with synthetic pesticides. This directly contradicts Statement 4, which claims at least one farmer market vendor sells produce that has been treated with synthetic pesticides."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, it has received critical acclaim.",
      "No book that receives critical acclaim is ignored by major literary awards.",
      "Some books that are ignored by major literary awards are not bestsellers.",
      "Some books have received critical acclaim but are not bestsellers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 means all bestsellers have critical acclaim. Statement 2 means books with critical acclaim are recognized by awards. From these, all bestsellers are recognized by awards. Statement 3 (some ignored by awards are not bestsellers) is consistent with bestsellers being recognized. Statement 4 (some acclaimed books are not bestsellers) is consistent because Statement 1 only states a condition for bestsellers, not that critical acclaim *only* applies to bestsellers."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies diligently, they will pass the comprehensive exam.",
      "Every student who passes the comprehensive exam receives a full scholarship.",
      "Students with a full scholarship never have to pay tuition.",
      "All students enrolled in this program study diligently.",
      "Some students enrolled in this program pay tuition."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 establish that all students in the program study diligently, pass the exam, and receive a full scholarship. If Statement 3 were true, this would mean no student in the program pays tuition. However, Statement 5 claims that some students in the program do pay tuition, creating a contradiction. Removing Statement 3 resolves this conflict by allowing scholarship recipients to pay tuition."
  },
  {
    "id": "gen-10-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate has excellent public speaking skills, they will perform well in the debate.",
      "Anyone who performs well in the debate will gain significant voter support.",
      "No candidate who gains significant voter support will lose the election.",
      "Candidate X has excellent public speaking skills.",
      "Candidate X lost the election."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 establish that Candidate X has excellent public speaking skills, will perform well in the debate, and will gain significant voter support. If Statement 3 were true, this would mean Candidate X would win the election. However, Statement 5 asserts that Candidate X lost the election, which is a direct contradiction. Removing Statement 3 resolves this by allowing a candidate to gain significant voter support yet still lose the election."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All lions are carnivores.",
      "Some carnivores are not lions.",
      "If an animal is a carnivore, it eats meat.",
      "Not all animals that eat meat are lions."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates all lions are carnivores. Statement 2 allows for carnivores that are not lions, which is compatible with Statement 1. Statement 3 establishes that all carnivores eat meat. From this, it follows that any carnivore that is not a lion (as per Statement 2) would be an animal that eats meat but is not a lion, which is precisely what Statement 4 affirms. There is no contradiction."
  },
  {
    "id": "gen-10-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless the alarm sounds, the gate remains open.",
      "If the gate remains open, then the security system is offline.",
      "The security system is never offline when the lights are on.",
      "The alarm did not sound.",
      "The lights are on."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 establish that since the alarm did not sound, the gate remains open, and therefore the security system is offline. Statement 5 indicates that the lights are on. If Statement 3 were true, the security system could not be offline while the lights are on, creating a contradiction with the conclusion that the system is offline. Removing Statement 3 allows the security system to be offline even when the lights are on, resolving the inconsistency."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful athletes train intensely.",
      "Some people who train intensely are not successful athletes.",
      "If an athlete trains intensely, they maintain a strict diet.",
      "Maria maintains a strict diet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that successful athletes train intensely. Statement 2 allows for individuals who train intensely but are not successful athletes, which is compatible. Statement 3 connects intense training to maintaining a strict diet. Maria maintaining a strict diet (Statement 4) does not create a contradiction; she could be a successful athlete, a non-successful athlete who trains intensely, or even someone who maintains a strict diet for reasons unrelated to athletic training, none of which are precluded by the other statements."
  },
  {
    "id": "gen-10-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A valid passport is necessary for international travel.",
      "If someone has a valid passport, they can board any international flight.",
      "Boarding an international flight requires a visa for the destination country.",
      "Mr. Smith is traveling internationally.",
      "Mr. Smith does not have a visa for his destination country."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 establish that Mr. Smith is traveling internationally, has a valid passport, and can board an international flight. If Statement 3 were true, Mr. Smith would be required to have a visa for his destination country. However, Statement 5 asserts that Mr. Smith does not have a visa, creating a direct contradiction. Removing Statement 3 resolves this by allowing someone to board an international flight without requiring a visa for the destination country."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All effective leaders possess strong communication skills.",
      "Some individuals with strong communication skills are not effective leaders.",
      "If a person possesses strong communication skills, they frequently influence group decisions.",
      "Not all individuals who frequently influence group decisions are effective leaders."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that all effective leaders have strong communication skills. Statement 2 allows for individuals with strong communication skills who are not effective leaders, which is compatible. Statement 3 establishes that possessing strong communication skills leads to frequently influencing group decisions. From Statements 2 and 3, it follows that some individuals who are not effective leaders but have strong communication skills will frequently influence group decisions, thereby affirming Statement 4. No contradiction arises."
  },
  {
    "id": "gen-10-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All senior engineers were involved in the project launch.",
      "Anyone involved in the project launch attended the strategy workshop.",
      "No one who attended the strategy workshop missed their annual review.",
      "Some senior engineers missed their annual review."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that all senior engineers were involved in the project launch and attended the strategy workshop. If Statement 3 were true, it would mean that no senior engineer missed their annual review. However, Statement 4 asserts that some senior engineers did miss their annual review, creating a direct contradiction. Removing Statement 3 resolves this by allowing attendees of the strategy workshop to miss their annual review."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an applicant scored above 90%, they were offered an interview.",
      "Not all applicants offered an interview scored above 90%.",
      "Every applicant who was offered an interview possesses strong references.",
      "Sarah scored 88% on the application.",
      "Sarah possesses strong references."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates scoring above 90% leads to an interview. Statement 2 confirms that an interview can be offered even without scoring above 90%, which is compatible. Statement 3 establishes that anyone offered an interview possesses strong references. Sarah scored 88% (Statement 4), so Statement 1 doesn't guarantee her an interview. However, she could still have been offered an interview (due to Statement 2's allowance), which would mean she has strong references (per Statement 3). Alternatively, she could have strong references (Statement 5) without having been offered an interview, as Statement 3 does not state that strong references are *only* obtained by interviewees. No contradiction exists."
  },
  {
    "id": "gen-10-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "The team will achieve its quota unless there's a major production delay.",
      "If the team achieves its quota, they will receive a bonus.",
      "The company awards bonuses only if all performance metrics are met.",
      "There was no major production delay.",
      "Not all performance metrics were met this quarter."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 establish that since there was no major production delay, the team achieved its quota and received a bonus. If Statement 3 were true, receiving a bonus would mean that all performance metrics were met. However, Statement 5 asserts that not all performance metrics were met, creating a direct contradiction. Removing Statement 3 resolves this by allowing the company to award bonuses even if not all performance metrics are met."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All musicians attend the annual festival.",
      "No one who attends the annual festival enjoys loud noises.",
      "Some musicians enjoy loud noises."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all musicians attend the annual festival. Statement 2 says no one who attends the annual festival enjoys loud noises. Taken together, these imply that no musician enjoys loud noises. This directly contradicts Statement 3, which claims some musicians enjoy loud noises."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that migrate travel south for winter.",
      "Some birds that travel south for winter are not songbirds.",
      "Every bird in the aviary is a songbird."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. Birds in the aviary are songbirds. Some birds that travel south are not songbirds, meaning not all birds that travel south are in the aviary or are songbirds. Birds that migrate could be songbirds or non-songbirds, as long as they travel south. No logical contradiction arises."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant needs full sun, it cannot be kept indoors.",
      "All plants with colorful leaves need full sun.",
      "Every plant in this nursery is kept indoors.",
      "There is at least one plant in this nursery with colorful leaves."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates there is at least one plant in the nursery with colorful leaves. Statement 2 says all plants with colorful leaves need full sun. Statement 1 says if a plant needs full sun, it cannot be kept indoors. Therefore, there is at least one plant in this nursery that cannot be kept indoors. This contradicts Statement 3, which claims every plant in the nursery is kept indoors."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No one who attended the meeting arrived late.",
      "Some employees arrived late.",
      "All managers are employees.",
      "No manager attended the meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. The employees who arrived late (Statement 2) could be non-managers and did not attend the meeting, thus not contradicting Statement 1. Statement 3 and 4 are consistent with this possibility."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members are required to read the full report.",
      "No one who reads the full report supports the proposal.",
      "Some committee members support the proposal."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 asserts that all committee members read the full report. Statement 2 states that no one who reads the full report supports the proposal. From these, it logically follows that no committee member supports the proposal. This directly contradicts Statement 3, which claims some committee members support the proposal."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "No student who studied diligently failed the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It's possible for a student to study diligently, not pass the exam (Statement 2), but also not fail the course (Statement 3), perhaps by receiving a passing but non-exceptional grade. Statement 1 simply states a condition for passing the exam."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses cilantro, it is a savory dish.",
      "All savory dishes pair well with white wine.",
      "No dish that pairs well with white wine contains cilantro."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a recipe uses cilantro, it is savory. Statement 2 says all savory dishes pair well with white wine. Therefore, any recipe that uses cilantro pairs well with white wine. Statement 3, however, says no dish that pairs well with white wine contains cilantro. This means no dish that pairs well with white wine can be a cilantro dish. These two conclusions directly contradict each other if any dish contains cilantro."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work from home use a company laptop.",
      "Some employees who use a company laptop do not work from home.",
      "If an employee uses a company laptop, they have access to the secure network.",
      "Every employee who works from home has access to the secure network."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 4 is logically implied by combining Statement 1 (employees who work from home use a company laptop) and Statement 3 (employees who use a company laptop have access to the secure network). Statement 2 simply notes that using a company laptop is not exclusive to working from home."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All customers who purchased a standard ticket attended the show.",
      "No one who attended the show requested a refund.",
      "Some customers who purchased a standard ticket requested a refund."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all customers who bought a standard ticket attended the show. Statement 2 states that no one who attended the show requested a refund. Combining these, it must be true that no customer who purchased a standard ticket requested a refund. This directly contradicts Statement 3, which claims some customers who purchased a standard ticket requested a refund."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, it is displayed prominently in the store.",
      "No book displayed prominently in the store remains unpurchased for long.",
      "Every novel published this year is a bestseller.",
      "Some novels published this year remain unpurchased for long."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that every novel published this year is a bestseller. Statement 1 says if a book is a bestseller, it is displayed prominently. Statement 2 states that no book displayed prominently remains unpurchased for long. Taken together, these imply that every novel published this year does not remain unpurchased for long. This conclusion contradicts Statement 4, which claims some novels published this year remain unpurchased for long."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a Venus Flytrap, it requires moist soil.",
      "Any plant that requires moist soil must be watered daily.",
      "All plants in the conservatory are Venus Flytraps.",
      "Some plants in the conservatory do not need to be watered daily."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates all plants in the conservatory are Venus Flytraps. From Statement 1, all Venus Flytraps require moist soil. From Statement 2, any plant requiring moist soil must be watered daily. Therefore, all plants in the conservatory must be watered daily. This directly contradicts Statement 4, which claims some plants in the conservatory do not need to be watered daily."
  },
  {
    "id": "gen-12-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the lecture, they will understand the material.",
      "No student who understands the material will fail the exam.",
      "Some students did not attend the lecture.",
      "Some students failed the exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that if a student attends the lecture, they will not fail the exam. The contrapositive means that if a student fails the exam, they did not attend the lecture. Statement 4 says some students failed the exam, and Statement 3 says some students did not attend the lecture. It is consistent for the students who failed the exam (as per Statement 4) to be among those who did not attend the lecture (as per Statement 3), thus creating no contradiction."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for the scholarship, they must have a GPA above 3.5.",
      "No student with a GPA above 3.5 has ever failed a course.",
      "Some students in the advanced seminar are eligible for the scholarship.",
      "Every student in the advanced seminar has failed at least one course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that some students in the advanced seminar are eligible for the scholarship. From Statement 1, these students must have a GPA above 3.5. Statement 2 dictates that no student with a GPA above 3.5 has ever failed a course. This leads to the conclusion that some students in the advanced seminar have not failed any course, which directly contradicts Statement 4, claiming every student in the advanced seminar has failed at least one course."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All valid permits are issued by the city council.",
      "If a permit is issued by the city council, it has an expiration date.",
      "Some permits have an expiration date but were not issued by the city council.",
      "Some permits are not valid."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all valid permits are issued by the city council and have an expiration date. Statement 3 describes permits that have an expiration date but were not issued by the city council; by Statement 1, these permits cannot be valid. Statement 4 simply states that some permits are not valid, which is consistent with the existence of the permits described in Statement 3. No contradiction arises."
  },
  {
    "id": "gen-12-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "No animal with opposable thumbs is a reptile.",
      "Every animal in the zoo's new exhibit is a reptile.",
      "Some animals in the zoo's new exhibit are primates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that some animals in the new exhibit are primates. From Statement 1, these primates must have opposable thumbs. Statement 2 then states that no animal with opposable thumbs is a reptile. Therefore, some animals in the zoo's new exhibit are not reptiles. This directly contradicts Statement 3, which claims every animal in the zoo's new exhibit is a reptile."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is a sedan, it is fuel-efficient.",
      "All trucks are not fuel-efficient.",
      "Some fuel-efficient cars are not sedans.",
      "No trucks are sedans."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says sedans are fuel-efficient. Statement 2 says trucks are not fuel-efficient. Statement 3 allows for other types of cars (not sedans) to also be fuel-efficient, which is consistent with Statement 1. Statement 4 correctly states that trucks are not sedans, which is also consistent given that sedans are fuel-efficient and trucks are not. No contradiction is formed."
  },
  {
    "id": "gen-12-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document is confidential, it requires approval for viewing.",
      "All documents requiring approval for viewing are stored in the secure vault.",
      "No document stored in the secure vault can be accessed remotely.",
      "Some confidential documents can be accessed remotely."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates that some confidential documents can be accessed remotely. From Statement 1, these confidential documents require approval for viewing. Statement 2 clarifies that all documents requiring approval are stored in the secure vault. Finally, Statement 3 states that no document in the secure vault can be accessed remotely. This forms a chain showing that some confidential documents cannot be accessed remotely, which directly contradicts Statement 4."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a musician plays an instrument, they read sheet music.",
      "Every musician in the orchestra plays an instrument.",
      "Some musicians do not read sheet music.",
      "Some musicians are not in the orchestra."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that every musician in the orchestra reads sheet music. Statement 3 mentions some musicians do not read sheet music; by the contrapositive of Statement 1 (if they don't read sheet music, they don't play an instrument), these musicians cannot be in the orchestra. Statement 4 simply confirms that some musicians are not in the orchestra, which is consistent with the existence of the musicians from Statement 3 and does not create a conflict."
  },
  {
    "id": "gen-12-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A flight will depart on time only if there is no mechanical delay.",
      "If a flight departs on time, then all passengers will make their connections.",
      "No flight with a mechanical delay allows passengers to make their connections.",
      "Some flights departing this afternoon had passengers who made their connections.",
      "Every flight departing this afternoon had a mechanical delay."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 states that some flights departing this afternoon had passengers who made their connections. From Statement 3, no flight with a mechanical delay allows passengers to make their connections. The contrapositive of Statement 3 means that if passengers made their connections, there was no mechanical delay. Therefore, some flights departing this afternoon had no mechanical delay. This directly contradicts Statement 5, which claims every flight departing this afternoon had a mechanical delay."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every book in the library's rare collection is protected by a special cover.",
      "If a book has a special cover, it must be handled with gloves.",
      "Some books handled with gloves are not in the rare collection.",
      "Some books in the general collection are protected by a special cover."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all books in the rare collection are handled with gloves. Statement 3 indicates that other books outside the rare collection are also handled with gloves, which is consistent. Statement 4 specifies that some books in the general collection have special covers; by Statement 2, these books would also need to be handled with gloves. No contradiction is present in these statements."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All rare birds have distinctive plumage.",
      "No bird with distinctive plumage is found in urban areas.",
      "Some rare birds are found in urban areas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all rare birds have distinctive plumage. Statement 2 says that no bird with distinctive plumage is found in urban areas. Therefore, it must be true that no rare birds are found in urban areas. This directly contradicts Statement 3, which asserts that some rare birds are found in urban areas. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful companies prioritize customer service.",
      "Some companies that prioritize customer service are not large.",
      "No large company fails."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for a company to be successful and prioritize customer service (Statement 1). Some companies prioritizing customer service could be small (Statement 2). And large companies, which may or may not be successful, do not fail (Statement 3). A small, successful company that prioritizes customer service and does not fail would satisfy all conditions."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who passed the exam received a commendation.",
      "No student who received a commendation attended fewer than ten lectures.",
      "Some students who passed the exam attended fewer than ten lectures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all students who passed the exam received a commendation. Statement 2 establishes that no student who received a commendation attended fewer than ten lectures. Together, these statements imply that no student who passed the exam attended fewer than ten lectures. This conclusion directly conflicts with Statement 3, which claims that some students who passed the exam did attend fewer than ten lectures. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All scientists are curious individuals.",
      "Some curious individuals are not scientists.",
      "Every person who invents something is curious."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Scientists are a subset of curious individuals (Statement 1), and there can be curious individuals who are not scientists (Statement 2). It is also possible for people who invent things to be curious (Statement 3), whether they are scientists or not. For example, an inventor could be a curious individual who is not a scientist."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every politician supports lower taxes.",
      "No one who supports lower taxes also supports increased public spending.",
      "Some politicians support increased public spending."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that every politician supports lower taxes. Statement 2 states that no one who supports lower taxes also supports increased public spending. Therefore, it logically follows that no politician supports increased public spending. This directly contradicts Statement 3, which claims that some politicians do support increased public spending. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits contain seeds.",
      "Some edible plants do not contain seeds.",
      "No fruit is inedible."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Fruits are a type of edible plant that contains seeds (Statement 1 and 3). There can also be other edible plants, like leafy greens, that do not contain seeds (Statement 2). This scenario allows all statements to be true simultaneously."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every member of the choir sings alto.",
      "No one who sings alto is also a tenor.",
      "Some members of the choir are tenors."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all members of the choir sing alto. Statement 2 asserts that no one who sings alto is also a tenor. Together, these imply that no member of the choir is a tenor. This directly contradicts Statement 3, which states that some members of the choir are tenors. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All books on philosophy are challenging to read.",
      "Some challenging books are not on philosophy.",
      "No book that is not challenging to read is considered a classic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Books on philosophy are a subset of challenging books (Statement 1). There can be challenging books that are not philosophy (Statement 2). Statement 3 indicates that for a book to be a classic, it must be challenging. All these conditions can hold true at the same time, for example, a classic challenging book could be on philosophy, or not."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All artists are creative individuals.",
      "No creative individual is afraid of new ideas.",
      "Some artists are afraid of new ideas.",
      "Every person afraid of new ideas lacks vision."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all artists are creative individuals. Statement 2 states that no creative individual is afraid of new ideas. From these two, it logically follows that no artist is afraid of new ideas. This directly contradicts Statement 3, which claims that some artists are afraid of new ideas. Statement 4 does not participate in this specific contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional musicians practice daily.",
      "Some people who practice daily are not professional musicians.",
      "Every person who excels at their craft practices daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Professional musicians are a group within those who practice daily (Statement 1). There are also other people who practice daily but are not professional musicians (Statement 2). People who excel at their craft are also part of the group that practices daily (Statement 3), and they could be professional musicians or not. For example, a professional athlete excels and practices daily but is not a professional musician."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All skilled carpenters are meticulous craftsmen.",
      "No meticulous craftsman ever rushes a project.",
      "Every member of the construction crew is a skilled carpenter.",
      "At least one member of the construction crew rushes projects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Every member of the construction crew is a skilled carpenter) combined with Statement 1 (All skilled carpenters are meticulous craftsmen) implies that every member of the construction crew is a meticulous craftsman. Statement 2 (No meticulous craftsman ever rushes a project) then implies that no member of the construction crew rushes projects. This directly contradicts Statement 4 (At least one member of the construction crew rushes projects)."
  },
  {
    "id": "gen-14-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds that nest in trees produce offspring in spring.",
      "Some birds that produce offspring in spring do not nest in trees.",
      "The bluebirds in our park produce offspring in spring.",
      "No bluebirds in our park nest in trees."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 states that birds nesting in trees produce offspring in spring. Statement 4 indicates that bluebirds in the park do not nest in trees. This means Statement 1 does not apply to bluebirds. Statement 3 (bluebirds produce offspring in spring) is consistent with Statement 2, which allows for some birds that produce offspring in spring not to nest in trees. The bluebirds could be an example of such birds."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant needs daily sunlight, it thrives in warm climates.",
      "No plant that thrives in warm climates can tolerate cold snaps.",
      "Every plant in the conservatory needs daily sunlight.",
      "Some plants in the conservatory can tolerate cold snaps."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Every plant in the conservatory needs daily sunlight) implies that all plants in the conservatory thrive in warm climates (from Statement 1). This then implies that no plants in the conservatory can tolerate cold snaps (from Statement 2). This directly contradicts Statement 4 (Some plants in the conservatory can tolerate cold snaps)."
  },
  {
    "id": "gen-14-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every member of the chess club owns a digital clock.",
      "Some people who own digital clocks are not members of the chess club.",
      "No member of the chess club owns an analog clock.",
      "David owns an analog clock."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 states that no chess club member owns an analog clock. Statement 4 says David owns an analog clock, which means David cannot be a member of the chess club. This is consistent with Statement 1 (members own digital clocks, which David might or might not also own) and Statement 2 (there are non-members who own digital clocks, David could be one of them or not)."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful artists exhibit their work in galleries.",
      "No artist who exhibits in galleries works exclusively from home.",
      "Some artists who work exclusively from home are successful artists."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims 'Some artists who work exclusively from home are successful artists.' If we combine this with Statement 1, 'All successful artists exhibit their work in galleries,' we can conclude that some artists who work exclusively from home exhibit their work in galleries. However, Statement 2 clearly states 'No artist who exhibits in galleries works exclusively from home,' which directly contradicts this conclusion."
  },
  {
    "id": "gen-14-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees with a management position attend the annual leadership retreat.",
      "No one who attends the annual leadership retreat has access to the confidential client database.",
      "Every senior project lead has a management position.",
      "Some senior project leads have access to the confidential client database."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Every senior project lead has a management position) combined with Statement 1 (All employees with a management position attend the annual leadership retreat) implies that every senior project lead attends the annual leadership retreat. Statement 2 (No one who attends the annual leadership retreat has access to the confidential client database) then implies that no senior project lead has access to the confidential client database. This directly contradicts Statement 4 (Some senior project leads have access to the confidential client database)."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals have hair or fur.",
      "Some animals with hair or fur are not mammals.",
      "No animal that lays eggs has hair or fur.",
      "Some mammals do not lay eggs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all mammals have hair or fur. Statement 3 (No animal that lays eggs has hair or fur) means that any animal that lays eggs cannot have hair or fur. Since mammals have hair or fur (Statement 1), it logically follows that no mammal lays eggs. Statement 4, 'Some mammals do not lay eggs,' is therefore entirely consistent with the fact that no mammals lay eggs."
  },
  {
    "id": "gen-14-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All reliable bicycles have reinforced frames.",
      "If a bicycle has a reinforced frame, it is not prone to flats.",
      "Every bicycle designed for racing is a reliable bicycle.",
      "Some bicycles designed for racing are prone to flats."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Every bicycle designed for racing is a reliable bicycle) combined with Statement 1 (All reliable bicycles have reinforced frames) implies that every bicycle designed for racing has a reinforced frame. Statement 2 (If a bicycle has a reinforced frame, it is not prone to flats) then implies that no bicycle designed for racing is prone to flats. This directly contradicts Statement 4 (Some bicycles designed for racing are prone to flats)."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All fruits that are red contain antioxidants.",
      "Some fruits that contain antioxidants are not red.",
      "No fruit that is green contains antioxidants.",
      "Some red fruits are not sweet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says red fruits contain antioxidants. Statement 2 says some antioxidant-containing fruits are not red, which is perfectly possible (e.g., blueberries are not red but contain antioxidants). Statement 3 says green fruits do not contain antioxidants. All of these are consistent. Statement 4 (Some red fruits are not sweet) introduces a new characteristic (sweetness) and is entirely compatible with the other statements, as there is no information to suggest all red fruits must be sweet."
  },
  {
    "id": "gen-14-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful public speakers use effective visuals.",
      "No one who uses effective visuals speaks in monotone.",
      "Every motivational coach is a successful public speaker.",
      "Some motivational coaches speak in monotone."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 (Every motivational coach is a successful public speaker) combined with Statement 1 (All successful public speakers use effective visuals) implies that every motivational coach uses effective visuals. Statement 2 (No one who uses effective visuals speaks in monotone) then implies that no motivational coach speaks in monotone. This directly contradicts Statement 4 (Some motivational coaches speak in monotone)."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who completes the advanced course receives a diploma.",
      "No student receives a diploma unless they pass the final exam.",
      "Anyone who passes the final exam has diligently studied.",
      "Some students completed the advanced course but did not diligently study."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a student completes the advanced course, they receive a diploma; if they receive a diploma, they pass the final exam; and if they pass the final exam, they have diligently studied. This means all students who complete the advanced course must have diligently studied. Statement 4 contradicts this by claiming some students completed the advanced course but did not diligently study."
  },
  {
    "id": "gen-15-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a canary, it sings beautifully.",
      "All birds that sing beautifully are often mistaken for nightingales.",
      "Some birds are often mistaken for nightingales, but are not canaries.",
      "Not all birds that sing beautifully are canaries."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all canaries sing beautifully and are often mistaken for nightingales. Statement 3 suggests that other birds, not just canaries, might also be mistaken for nightingales, which is possible. Statement 4 affirms that not all birds that sing beautifully are canaries, allowing for other beautiful singers. All statements can be true simultaneously."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend the weekly video conference.",
      "If an employee attends the weekly video conference, they have access to the shared drive.",
      "No employee has access to the shared drive unless their manager approves it.",
      "Some employees work remotely, but their manager has not approved shared drive access."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if an employee works remotely, they attend the video conference; if they attend, they have shared drive access; and if they have access, their manager approved it. Therefore, all remote employees must have manager-approved shared drive access. Statement 4 contradicts this by asserting that some remote employees do not have this approval."
  },
  {
    "id": "gen-15-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful business expands its market reach.",
      "Businesses that expand their market reach always invest in new technology.",
      "Some businesses invest in new technology, but are not successful.",
      "Not every business that invests in new technology expands its market reach."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful businesses expand their market reach and invest in new technology. Statement 3 is consistent because businesses that are not successful could still invest in technology. Statement 4 is also consistent, as some businesses might invest in technology without expanding their market reach. All statements can be true simultaneously."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "If a person is a skilled strategist, they spend many hours practicing.",
      "No one who spends many hours practicing is interested in quick games.",
      "Every member of the chess club is interested in quick games."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: all chess club members are skilled strategists; skilled strategists spend many hours practicing; and those who spend many hours practicing are not interested in quick games. This means all chess club members are not interested in quick games. Statement 4 directly contradicts this by asserting that every member of the chess club is interested in quick games."
  },
  {
    "id": "gen-15-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only qualified instructors lead advanced workshops.",
      "All qualified instructors have completed specialized training.",
      "Some people who have completed specialized training do not lead advanced workshops.",
      "Every instructor who leads an advanced workshop is highly experienced."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all instructors who lead advanced workshops are qualified and have completed specialized training. Statement 3 is consistent, as some individuals with specialized training might choose not to lead advanced workshops. Statement 4 adds an independent characteristic that does not conflict with the other conditions. All statements can be true simultaneously."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "The factory production line operates at full capacity only if all safety checks are passed.",
      "If all safety checks are passed, then no maintenance issues are present.",
      "Unless the factory production line operates at full capacity, there are major delays.",
      "Some maintenance issues are present, but there are no major delays."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that if the production line operates at full capacity, no maintenance issues are present. This means if maintenance issues are present, the line is not at full capacity. Statement 3 states that if the line is not at full capacity, there are major delays. Therefore, if maintenance issues are present, there must be major delays. Statement 4 contradicts this by saying some maintenance issues are present, but there are no major delays."
  },
  {
    "id": "gen-15-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All plants in the garden require daily watering.",
      "If a plant requires daily watering, it has delicate roots.",
      "Some plants with delicate roots are not in the garden.",
      "No plant with delicate roots is drought-tolerant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 show that all plants in the garden require daily watering and have delicate roots. Statement 3 is consistent, as some plants with delicate roots may simply not be located in this particular garden. Statement 4 introduces a characteristic of delicate-rooted plants which does not conflict with any other statement. All statements can be true simultaneously."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful entrepreneur possesses strong leadership skills.",
      "An individual possesses strong leadership skills only if they inspire confidence in others.",
      "People who inspire confidence in others never work in isolation.",
      "Some successful entrepreneurs work in isolation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: all successful entrepreneurs have strong leadership skills; those with strong leadership skills inspire confidence; and those who inspire confidence never work in isolation. This implies that all successful entrepreneurs never work in isolation. Statement 4 directly contradicts this conclusion by stating that some successful entrepreneurs do work in isolation."
  },
  {
    "id": "gen-15-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a creature is a mammal, it has fur or hair.",
      "All creatures with fur or hair are warm-blooded.",
      "Some warm-blooded creatures do not have fur or hair.",
      "No creature that is not warm-blooded is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all mammals have fur or hair, and all creatures with fur or hair are warm-blooded, which means all mammals are warm-blooded. Statement 3 is consistent, as other types of warm-blooded creatures might exist without fur or hair. Statement 4 is simply the contrapositive of the combined implication from statements 1 and 2, making it logically consistent. All statements can be true simultaneously."
  },
  {
    "id": "gen-16-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All musicians are artists.",
      "No artist is a scientist.",
      "Some musicians are scientists."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all musicians are artists. Statement 2 says no artist is a scientist. Together, these imply that no musician is a scientist. This directly contradicts Statement 3, 'Some musicians are scientists'."
  },
  {
    "id": "gen-16-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy walks.",
      "Some pets are dogs.",
      "No cat enjoys walks.",
      "Felix is a cat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all statements to be true. For example, Felix is a cat that does not enjoy walks, and some dogs are pets that do enjoy walks. These scenarios do not create any logical contradictions."
  },
  {
    "id": "gen-16-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies diligently, they pass the course.",
      "No student who fails the course graduates.",
      "Some graduating students did not study diligently."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 implies that if a student graduates, they must have passed the course. Statement 1 contrapositively means if a student did not pass the course, they did not study diligently. Thus, a graduating student must have passed and therefore must have studied diligently. This contradicts Statement 3, 'Some graduating students did not study diligently'."
  },
  {
    "id": "gen-16-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "Some animals that have feathers cannot fly.",
      "No insect has feathers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. For example, birds have feathers, and some birds like ostriches have feathers but cannot fly. Insects, as a distinct category of animals, consistently do not have feathers, which is consistent with the other statements."
  },
  {
    "id": "gen-16-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All executives attend the weekly meeting.",
      "No one who attends the weekly meeting misses the budget deadline.",
      "Some executives missed the budget deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all executives attend the weekly meeting. Statement 2 says no one who attends the weekly meeting misses the budget deadline. Combining these, it logically follows that no executive missed the budget deadline. This directly contradicts Statement 3, 'Some executives missed the budget deadline'."
  },
  {
    "id": "gen-16-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses garlic, it is a savory dish.",
      "Some savory dishes are vegetarian.",
      "No dessert recipe uses garlic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be simultaneously true. A dish using garlic is savory. Some savory dishes are vegetarian, but not necessarily all, nor does it imply anything about garlic use in vegetarian dishes. Dessert recipes consistently do not use garlic. No logical contradiction arises."
  },
  {
    "id": "gen-16-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All valid arguments have true conclusions.",
      "Some arguments with true conclusions are not valid.",
      "Every argument presented in class is a valid argument.",
      "At least one argument presented in class has a false conclusion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every argument presented in class is a valid argument. Statement 1 states that all valid arguments have true conclusions. Therefore, it logically follows that every argument presented in class must have a true conclusion. This directly contradicts Statement 4, which claims at least one argument presented in class has a false conclusion."
  },
  {
    "id": "gen-16-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Unless a plant receives sunlight, it will not grow.",
      "Some plants grow in partial shade.",
      "All plants that grow in partial shade receive some sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Statement 1 means a plant needs sunlight to grow. Statement 3 clarifies that plants growing in partial shade still receive some sunlight, which is consistent with the requirement of Statement 1 for growth. Statement 2 simply notes that some plants thrive in these conditions."
  },
  {
    "id": "gen-16-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All items in the lost-and-found bin are clearly labeled.",
      "All clearly labeled items are eventually donated.",
      "Some items in the lost-and-found bin are never donated."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all items in the lost-and-found bin are clearly labeled. Statement 2 says all clearly labeled items are eventually donated. Combining these, it logically follows that all items in the lost-and-found bin are eventually donated. This directly contradicts Statement 3, 'Some items in the lost-and-found bin are never donated'."
  },
  {
    "id": "gen-16-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a first edition, it is valuable.",
      "Some valuable books are not first editions.",
      "No book printed after 2000 is a first edition.",
      "All books printed before 1900 are valuable."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. A first edition is valuable. Other books can also be valuable (Statement 2). Books printed after 2000 are not first editions (Statement 3). Books printed before 1900 can be valuable, fitting within the broader category of valuable books. There are no logical inconsistencies."
  },
  {
    "id": "gen-17-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a document is confidential, it requires a secure password.",
      "All documents requiring a secure password are encrypted.",
      "Any document that is encrypted cannot be stored on a public server.",
      "Some confidential documents are stored on a public server."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a document is confidential, it requires a secure password; if it requires a secure password, it is encrypted; if it is encrypted, it cannot be stored on a public server. This implies that all confidential documents cannot be stored on a public server. Statement 4 directly contradicts this by asserting that some confidential documents *are* stored on a public server."
  },
  {
    "id": "gen-17-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified candidates have a strong resume.",
      "Some candidates with strong resumes are not qualified.",
      "No candidate who has a weak resume will be interviewed.",
      "Every interviewed candidate is qualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all statements to be true simultaneously. For example, some qualified candidates (who have strong resumes) could be interviewed. Some candidates with strong resumes might not be qualified, and thus would not be interviewed (consistent with Statement 4's contrapositive: if not qualified, then not interviewed). No candidate with a weak resume is interviewed, which is consistent with all interviewed candidates being qualified and thus having strong resumes."
  },
  {
    "id": "gen-17-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car with an active recall has a faulty brake system.",
      "If a car has a faulty brake system, it cannot pass inspection.",
      "All cars that fail inspection must be repaired immediately.",
      "Some cars with an active recall do not require immediate repair."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if a car has an active recall, it has a faulty brake system; if it has a faulty brake system, it cannot pass inspection; if it cannot pass inspection, it must be repaired immediately. This implies that all cars with an active recall must require immediate repair. Statement 4 directly contradicts this by asserting that some cars with an active recall do not require immediate repair."
  },
  {
    "id": "gen-17-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the optional workshop, they receive extra credit.",
      "No student who missed more than two lectures received extra credit.",
      "Some students who attended the optional workshop missed more than two lectures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that attending the optional workshop implies receiving extra credit. The contrapositive of Statement 2 is that receiving extra credit implies not having missed more than two lectures. Therefore, attending the optional workshop implies not having missed more than two lectures. Statement 3 directly contradicts this by stating that some students attended the optional workshop *and* missed more than two lectures."
  },
  {
    "id": "gen-17-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful artists have a distinctive style.",
      "Some artists with a distinctive style are not successful.",
      "If an artist lacks a distinctive style, they struggle to gain recognition.",
      "No artist who struggles to gain recognition is successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that success implies a distinctive style. The contrapositive of Statement 1 is \"If an artist lacks a distinctive style, they are not successful.\" Statements 3 and 4 together imply the same conclusion: \"If an artist lacks a distinctive style, they struggle to gain recognition, and if they struggle to gain recognition, they are not successful.\" Statement 2 describes a group of artists whose existence is not precluded by any of the other rules."
  },
  {
    "id": "gen-17-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project approved by the board receives adequate funding.",
      "No project that receives adequate funding faces significant delays.",
      "If a project does not face significant delays, it meets its deadline.",
      "Some projects approved by the board fail to meet their deadline."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a project is approved by the board, it receives adequate funding; if it receives adequate funding, it does not face significant delays; if it does not face significant delays, it meets its deadline. This implies that all projects approved by the board meet their deadline. Statement 4 directly contradicts this by claiming that some projects approved by the board *fail* to meet their deadline."
  },
  {
    "id": "gen-17-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All endangered species require habitat protection.",
      "No species that requires habitat protection can thrive in urban environments.",
      "Some species thrive in urban environments.",
      "All species that thrive in urban environments are robust."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, it follows that no endangered species can thrive in urban environments. Statement 3 confirms the existence of some species that thrive in urban environments; these species must therefore not be endangered. Statement 4 adds that all such species are robust, which is also consistent with the previous statements."
  },
  {
    "id": "gen-17-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant offers outdoor seating, it has a patio.",
      "All restaurants with a patio serve brunch on weekends.",
      "Some restaurants that serve brunch on weekends do not offer outdoor seating.",
      "No restaurant that serves brunch on weekends has a small kitchen."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Restaurants with outdoor seating must have a patio and therefore serve brunch on weekends (from Statements 1 and 2). Such restaurants would also not have a small kitchen (from Statement 4). Statement 3 indicates that there are restaurants that serve brunch but lack outdoor seating, which is entirely possible and does not contradict other statements."
  },
  {
    "id": "gen-17-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every package sent by express delivery arrives within 24 hours.",
      "If a package arrives within 24 hours, it is handled by the premium service.",
      "No package handled by the premium service is subject to customs inspection.",
      "Some packages sent by express delivery are subject to customs inspection."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a package is sent by express delivery, it arrives within 24 hours; if it arrives within 24 hours, it is handled by the premium service; if it is handled by the premium service, it is not subject to customs inspection. This implies that all packages sent by express delivery are not subject to customs inspection. Statement 4 directly contradicts this by stating that some packages sent by express delivery *are* subject to customs inspection."
  },
  {
    "id": "gen-17-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus also receive a pay raise.",
      "No employee who receives a pay raise works part-time.",
      "Some employees work full-time and receive a bonus.",
      "Some employees who work part-time do not receive a pay raise."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, it follows that any employee receiving a bonus also receives a pay raise and therefore does not work part-time (meaning they work full-time). Statement 3 confirms the existence of full-time employees who receive a bonus, which aligns with this deduction. Statement 4 describes part-time employees who do not receive a pay raise, and thus also do not receive a bonus (from the contrapositive of Statement 1), which is entirely consistent."
  },
  {
    "id": "gen-18-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey eat berries.",
      "Some owls eat berries."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 indicate that all owls are birds of prey, and no birds of prey eat berries. This implies that no owls eat berries. Statement 3 directly contradicts this by asserting that some owls do eat berries."
  },
  {
    "id": "gen-18-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All engineers are problem-solvers.",
      "Some problem-solvers are not engineers.",
      "Every person on the team is a problem-solver."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that all engineers are a subset of problem-solvers. The team can consist of engineers and problem-solvers who are not engineers, and Maria could be either."
  },
  {
    "id": "gen-18-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "No student who failed basic geometry passed algebra.",
      "Every student in this class enrolled in advanced calculus.",
      "Some students in this class failed basic geometry."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that if a student enrolls in advanced calculus, they must have passed basic geometry. Statement 3 indicates that every student in the class enrolled in advanced calculus, meaning every student in the class passed basic geometry. Statement 4 contradicts this by claiming some students in the class failed basic geometry."
  },
  {
    "id": "gen-18-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "Some innovative thinkers are not successful entrepreneurs.",
      "Maria is an innovative thinker."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that successful entrepreneurs are a subset of innovative thinkers. Maria could be an innovative thinker who is also a successful entrepreneur, or she could be an innovative thinker who is not a successful entrepreneur."
  },
  {
    "id": "gen-18-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professors are researchers.",
      "No researchers are good at public speaking.",
      "Some professors are good at public speaking."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a chain: all professors are researchers, and no researchers are good at public speaking. This leads to the conclusion that no professors are good at public speaking. Statement 3 directly contradicts this by stating that some professors are good at public speaking."
  },
  {
    "id": "gen-18-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club know how to play chess.",
      "Some people who know how to play chess are not members of the chess club.",
      "No one who plays checkers is a member of the chess club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that members of the chess club are a subset of people who know how to play chess. There can be people who play checkers but are not in the chess club, and these people might or might not know how to play chess."
  },
  {
    "id": "gen-18-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful politician is an effective public speaker.",
      "No effective public speaker avoids tough questions.",
      "Some politicians who avoid tough questions are not successful.",
      "All successful politicians avoid tough questions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 form a chain: every successful politician is an effective public speaker, and no effective public speaker avoids tough questions. This implies that no successful politician avoids tough questions. Statement 4 directly contradicts this by asserting that all successful politicians avoid tough questions."
  },
  {
    "id": "gen-18-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a mammal, it has fur.",
      "All animals that have fur are warm-blooded.",
      "Some animals are mammals.",
      "Not all animals are warm-blooded."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all mammals are warm-blooded. Statement 3 confirms the existence of mammals (and thus warm-blooded animals). Statement 4 means there are some cold-blooded animals, which are simply not mammals, consistent with the other statements."
  },
  {
    "id": "gen-18-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds that live in the desert eat fish.",
      "All birds that eat fish have webbed feet.",
      "Some birds with webbed feet live in the desert.",
      "All birds that live in the desert have webbed feet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 imply that birds living in the desert have webbed feet but do not eat fish. Statement 2 means any bird that eats fish must have webbed feet. Statement 3 is consistent, as birds that live in the desert could have webbed feet and not eat fish."
  },
  {
    "id": "gen-18-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants in the marathon finished the race.",
      "No one who finished the race felt completely rested.",
      "Some people who felt completely rested participated in the marathon."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: all marathon participants finished the race, and no one who finished felt completely rested. This means no marathon participants felt completely rested. Statement 3 contradicts this by claiming that some people who felt completely rested participated in the marathon."
  },
  {
    "id": "gen-19-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur is a skilled negotiator.",
      "No skilled negotiator lacks strong financial acumen.",
      "If someone attends the seminar, they become a successful entrepreneur.",
      "Some attendees of the seminar do not have strong financial acumen."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: seminar attendees become successful entrepreneurs (3), who are skilled negotiators (1), who have strong financial acumen (2). This means all seminar attendees have strong financial acumen. Statement 4 directly contradicts this by asserting that some attendees do not."
  },
  {
    "id": "gen-19-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All elected officials must file an ethics report.",
      "No one who files an ethics report is allowed to accept corporate gifts.",
      "Some city council members are elected officials.",
      "Every city council member is allowed to accept corporate gifts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that all elected officials are not allowed to accept corporate gifts. Statement 3 tells us some city council members are elected officials. Therefore, some city council members are not allowed to accept corporate gifts. This contradicts statement 4, which says every city council member is allowed to accept corporate gifts."
  },
  {
    "id": "gen-19-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant requires full sun, it thrives in this climate.",
      "Some plants that thrive in this climate are not native species.",
      "No plant that requires full sun is a native species.",
      "All plants that thrive in this climate require full sun."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 4 indicate that requiring full sun and thriving in this climate are equivalent conditions. From statement 1 and 3, all plants requiring full sun are not native species. From the equivalence, all plants thriving in this climate are not native species, which is consistent with statement 2. No contradictions arise."
  },
  {
    "id": "gen-19-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every dog in this kennel is a trained retriever.",
      "No trained retriever has less than two years of experience.",
      "Some animals in this kennel have less than two years of experience.",
      "All animals in this kennel are dogs."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a chain: every animal in the kennel is a dog (4), which is a trained retriever (1), and therefore has at least two years of experience (2). This means all animals in the kennel have at least two years of experience. Statement 3 contradicts this by claiming some animals in the kennel have less than two years of experience."
  },
  {
    "id": "gen-19-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful writers have a strong grasp of grammar.",
      "Some people with a strong grasp of grammar are not successful writers.",
      "If someone writes a best-selling novel, they are a successful writer.",
      "Some people who write best-selling novels also have a strong grasp of grammar."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that anyone who writes a best-selling novel has a strong grasp of grammar. Statement 4 is consistent with this, as it only claims some such people do. Statement 2 simply clarifies that having a strong grasp of grammar is not exclusive to successful writers. No contradictions arise."
  },
  {
    "id": "gen-19-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All cars in the lot are sedans.",
      "No sedan has more than two doors.",
      "Some cars in the lot have more than two doors."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that all cars in the lot are sedans (1), and no sedan has more than two doors (2). Therefore, no car in the lot has more than two doors. Statement 3 directly contradicts this by stating some cars in the lot do have more than two doors."
  },
  {
    "id": "gen-19-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the astronomy club own a telescope.",
      "No one who owns a telescope is afraid of heights.",
      "If someone is afraid of heights, they do not participate in stargazing.",
      "Some members of the astronomy club participate in stargazing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all members of the astronomy club are not afraid of heights. The contrapositive of statement 3 means that anyone who participates in stargazing is not afraid of heights. Statement 4 says some members of the astronomy club participate in stargazing. All these conditions are consistent, as participating in stargazing is compatible with not being afraid of heights. No contradictions arise."
  },
  {
    "id": "gen-19-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird is a falcon, it is a raptor.",
      "All raptors have sharp talons.",
      "No bird with sharp talons is a vegetarian.",
      "Some falcons are vegetarians."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: falcons are raptors (1), raptors have sharp talons (2), and no bird with sharp talons is a vegetarian (3). This means all falcons are not vegetarians. Statement 4 directly contradicts this by asserting that some falcons are vegetarians."
  },
  {
    "id": "gen-19-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful politician is an eloquent speaker.",
      "Some eloquent speakers are not successful politicians.",
      "If a person is charismatic, they are an eloquent speaker.",
      "Not all charismatic people are successful politicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says successful politicians are a subset of eloquent speakers. Statement 2 confirms that eloquent speakers can be non-politicians. Statement 3 places charismatic people as a subset of eloquent speakers. Statement 4 is consistent with this, as charismatic people (who are eloquent speakers) do not all have to be successful politicians. No contradictions arise."
  },
  {
    "id": "gen-19-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All paintings in the gallery were created by renowned artists.",
      "No renowned artist uses only acrylics.",
      "Some paintings in the gallery use only acrylics.",
      "Every painting in the gallery is valuable."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: paintings in the gallery were created by renowned artists (1), and no renowned artist uses only acrylics (2). This means no painting in the gallery uses only acrylics. Statement 3 directly contradicts this by claiming some paintings in the gallery use only acrylics."
  },
  {
    "id": "gen-20-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses saffron, it is expensive.",
      "No expensive recipe is quick to prepare.",
      "Recipes that use turmeric are always quick to prepare.",
      "Every recipe using curry powder also uses saffron.",
      "There are some recipes that use both curry powder and turmeric."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 5 describes a recipe that uses both curry powder and turmeric. Statements 4, 1, and 2 together logically lead to the conclusion that any recipe using curry powder cannot be quick to prepare. However, Statement 3 asserts that any recipe using turmeric must be quick to prepare. This creates a contradiction for the specific recipe, as it would have to be both quick and not quick to prepare. Removing Statement 3 resolves this by breaking the chain that forces the recipe to be quick."
  },
  {
    "id": "gen-20-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is well-qualified, they will be offered the position.",
      "No candidate who lacked experience was offered the position.",
      "All candidates with excellent references are well-qualified.",
      "Some candidates who lacked experience had excellent references."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 identifies a candidate who both lacked experience and had excellent references. Statements 3 and 1 logically lead to this candidate being well-qualified and subsequently offered the position. However, Statement 2 states that no candidate who lacked experience was offered the position. This creates a direct contradiction, as the candidate would be both offered the position and not offered the position. Removing Statement 3 breaks the logical pathway that leads to the candidate being offered the position."
  },
  {
    "id": "gen-20-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A store sells vintage records only if it also sells used books.",
      "No store that sells used books carries new CDs.",
      "Every store that sells new CDs also sells posters.",
      "If a store sells posters, it must also sell vintage records.",
      "Some stores sell new CDs."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 indicates that some stores sell new CDs. Following Statements 3, 4, 1, and 2 in sequence, a store that sells new CDs must logically also not sell new CDs. This creates a direct contradiction within the set of statements. Removing Statement 4 breaks the crucial link from selling posters to selling vintage records, thereby resolving the inconsistency."
  },
  {
    "id": "gen-20-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates for the scholarship submit a compelling essay.",
      "No one who submits a compelling essay misses the deadline.",
      "Every student who is currently enrolled submits a compelling essay.",
      "If a student misses the deadline, they are not currently enrolled.",
      "Some candidates for the scholarship miss the deadline."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 5 indicates that some scholarship candidates miss the deadline. However, Statements 1 and 2 logically require that any scholarship candidate must submit a compelling essay and therefore cannot miss the deadline. This creates a contradiction for such a student, who would both miss and not miss the deadline. Removing Statement 1 allows for the possibility that a scholarship candidate could miss the deadline without having submitted a compelling essay, thus resolving the inconsistency."
  },
  {
    "id": "gen-20-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it has sharp claws.",
      "No animal with sharp claws is a strict herbivore.",
      "All strict herbivores are large mammals.",
      "If an animal is a large mammal, it is carnivorous.",
      "Some animals are strict herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 asserts the existence of strict herbivores. However, a logical chain can be formed using Statements 3, 4, 1, and 2, which dictates that any strict herbivore must logically be classified as not being a strict herbivore. This creates a direct contradiction for such an animal. Removing Statement 4 breaks the crucial link from being a large mammal to being carnivorous, thereby resolving the inconsistency."
  },
  {
    "id": "gen-21-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All owls are birds.",
      "No birds are mammals.",
      "Some owls are mammals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all owls are birds. Statement 2 says that no birds are mammals. Combining these, it must be true that no owls are mammals. This directly contradicts Statement 3, which asserts that some owls are mammals. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-21-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All architects are creative.",
      "Some engineers are creative.",
      "No architects are engineers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Architects form one group of creative individuals, and engineers form another, possibly overlapping, group. The two groups (architects and engineers) are distinct, as per Statement 3, but both can contain creative people."
  },
  {
    "id": "gen-21-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend the daily standup.",
      "If an employee attends the daily standup, they have access to the project server.",
      "Some employees do not have access to the project server.",
      "Every employee works remotely."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 says every employee works remotely. Statement 1 says all employees who work remotely attend the daily standup. Combining these, it means every employee attends the daily standup. Then, Statement 2 says if an employee attends the daily standup, they have access to the project server. This leads to the conclusion that every employee has access to the project server, which contradicts Statement 3 that some employees do not have access to the project server. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-21-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club know how to play chess.",
      "Some members of the chess club also play checkers.",
      "No one who plays checkers is a member of the debate team.",
      "Sarah is a member of the chess club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Sarah, as a chess club member, knows how to play chess (Statement 1). She may or may not play checkers (Statement 2 allows for some to play checkers). If she plays checkers, she is not on the debate team (Statement 3). If she doesn't play checkers, her debate team status is unknown. No contradictions arise."
  },
  {
    "id": "gen-21-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All residents of this building have a parking permit.",
      "Everyone who has a parking permit owns a car.",
      "Some residents of this building do not own a car."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all residents have a parking permit. Statement 2 states that everyone with a parking permit owns a car. From these two statements, it logically follows that all residents of this building own a car. This conclusion directly contradicts Statement 3, which claims that some residents of this building do not own a car. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-21-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in advanced calculus, they have already passed pre-calculus.",
      "John has not passed pre-calculus.",
      "John is a student.",
      "Some students enroll in advanced calculus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 implies that if John enrolled in advanced calculus, he would have passed pre-calculus. Since Statement 2 says John has not passed pre-calculus, it means he cannot have enrolled in advanced calculus. This does not contradict Statement 4, which simply says some students enroll in advanced calculus; John is just not one of them."
  },
  {
    "id": "gen-21-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All musicians are artists.",
      "No artists are scientists.",
      "Some scientists are musicians."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all musicians are artists. Statement 2 states that no artists are scientists. Combining these, it logically follows that no musicians are scientists. This conclusion directly contradicts Statement 3, which asserts that some scientists are musicians (meaning some musicians are scientists). Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-21-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a sparrow, it has brown feathers.",
      "All birds with brown feathers build nests in trees.",
      "Some birds that build nests in trees are not sparrows."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 and Statement 2 combine to imply that all sparrows build nests in trees. However, this does not mean that only sparrows build nests in trees. Therefore, Statement 3, which says some birds that build nests in trees are not sparrows, is perfectly consistent with the other two statements."
  },
  {
    "id": "gen-21-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative.",
      "No innovative person fears failure.",
      "John is a successful entrepreneur.",
      "John fears failure."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all successful entrepreneurs are innovative. Statement 2 says no innovative person fears failure. Combining these, it means no successful entrepreneur fears failure. Statement 3 tells us John is a successful entrepreneur. Therefore, it must be true that John does not fear failure. This conclusion contradicts Statement 4, which says John fears failure. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-21-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All tigers are striped.",
      "Some striped animals are not tigers.",
      "No animals that are not striped have whiskers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 means all tigers have stripes. Statement 2 means there are striped animals that are not tigers (e.g., zebras), which is consistent with Statement 1. Statement 3 means that if an animal has whiskers, it must be striped. None of these statements contradict each other, allowing for a consistent scenario."
  },
  {
    "id": "gen-22-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies diligently, they will pass the exam.",
      "Anyone who prepares for the final project will succeed in the course.",
      "No one who passed the exam succeeded in the course.",
      "Some students both study diligently and prepare for the final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts the existence of students who both study diligently and prepare for the final project. From Statement 1 and 3, any such student would not succeed in the course. However, from Statement 2, any such student would succeed in the course, which is a contradiction."
  },
  {
    "id": "gen-22-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members voted on the proposal.",
      "No one who voted on the proposal supported the amendment.",
      "Only committee members are eligible to support the amendment.",
      "Some people supported the amendment."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 posits that some people supported the amendment. From Statement 3, these people must be committee members. From Statement 1 and 2, committee members who voted on the proposal (which all do) could not have supported the amendment. This directly contradicts Statement 4."
  },
  {
    "id": "gen-22-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend the weekly virtual meeting.",
      "No employee who attends the weekly virtual meeting travels for business.",
      "Some employees who travel for business do not work remotely."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Employees who work remotely attend the weekly virtual meeting and therefore do not travel for business. Statement 3 simply states that some employees who travel for business do not work remotely, which aligns perfectly with the other statements."
  },
  {
    "id": "gen-22-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe uses chili powder, it also requires cumin.",
      "No recipe that requires cumin uses smoked paprika.",
      "Every recipe that uses smoked paprika is a vegetarian dish.",
      "Some vegetarian dishes use chili powder.",
      "All recipes that use chili powder use smoked paprika."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts the existence of vegetarian dishes that use chili powder. From Statement 5, any recipe using chili powder must also use smoked paprika. However, from Statement 1 and 2, any recipe using chili powder must also require cumin, and thus cannot use smoked paprika. This is a direct contradiction regarding smoked paprika."
  },
  {
    "id": "gen-22-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only artists who paint landscapes display their work at the gallery.",
      "Artists who paint portraits never use oil paints.",
      "Some artists who use oil paints do not display their work at the gallery.",
      "No artist who paints landscapes paints portraits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Artists displaying work paint landscapes, and such artists do not paint portraits. Artists who use oil paints do not paint portraits. Statement 3 states that some artists who use oil paints do not display their work at the gallery, which is entirely possible if, for example, they paint still lifes or abstracts, which are not landscapes, and therefore do not get displayed."
  },
  {
    "id": "gen-22-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a musician performs rock music, they use an electric guitar.",
      "All musicians who use an electric guitar have a powerful amplifier.",
      "Some musicians who have a powerful amplifier do not perform rock music.",
      "No musician who performs rock music plays classical violin."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Musicians performing rock music use an electric guitar and have a powerful amplifier. Statement 3 indicates that some musicians with powerful amplifiers do not perform rock music, which is entirely possible (e.g., they might play jazz fusion). Statement 4 also introduces a new, non-conflicting fact about rock musicians."
  },
  {
    "id": "gen-22-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in advanced calculus are engineering majors.",
      "No student who is an engineering major is also an art history minor.",
      "Every student with an art history minor has taken a philosophy course.",
      "Some students enrolled in advanced calculus are art history minors."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts the existence of students who are both enrolled in advanced calculus and are art history minors. From Statement 1, any student in advanced calculus must be an engineering major. From Statement 2, no engineering major can be an art history minor. This directly contradicts the premise that these students are art history minors."
  },
  {
    "id": "gen-22-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a mystery novel, it is a paperback.",
      "No paperback book is a bestseller.",
      "All historical fiction novels are bestsellers.",
      "Some historical fiction novels are not mystery novels."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Mystery novels are paperbacks and are not bestsellers. Historical fiction novels are bestsellers. Statement 4 indicates that some historical fiction novels are not mystery novels, which is entirely consistent with the other facts presented."
  },
  {
    "id": "gen-22-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Only employees with management training can supervise new hires.",
      "All employees who attend the leadership workshop receive management training.",
      "No employee who has received management training is eligible for the sabbatical program.",
      "Some employees eligible for the sabbatical program supervise new hires."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 posits the existence of employees who are eligible for the sabbatical program and supervise new hires. From Statement 1, any employee supervising new hires must have management training. From Statement 3, no employee with management training is eligible for the sabbatical program. This contradicts the initial premise that these employees are eligible for the sabbatical program."
  },
  {
    "id": "gen-22-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a painting is a portrait, it was completed before 1900.",
      "No painting completed before 1900 uses synthetic pigments.",
      "Paintings that use synthetic pigments are never exhibited outdoors.",
      "Some paintings exhibited outdoors are portraits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Portraits were completed before 1900 and do not use synthetic pigments. Paintings exhibited outdoors also do not use synthetic pigments. Statement 4, positing some paintings exhibited outdoors are portraits, fits within these rules as such paintings would not use synthetic pigments."
  },
  {
    "id": "gen-23-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who receive a bonus have exceeded their sales targets.",
      "Every new hire receives a bonus.",
      "Some new hires take unscheduled leave.",
      "No employee who has exceeded their sales targets takes unscheduled leave."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 logically imply that all new hires do not take unscheduled leave. Statement 1 (Bonus → Exceeded Sales), Statement 2 (New Hire → Bonus), and Statement 4 (Exceeded Sales → No Unscheduled Leave) combine to show that every new hire does not take unscheduled leave. This directly contradicts Statement 3, which claims some new hires do take unscheduled leave."
  },
  {
    "id": "gen-23-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful writers read extensively.",
      "Some people who read extensively are not successful writers.",
      "No one who reads extensively struggles with vocabulary.",
      "Every person who struggles with vocabulary has difficulty understanding complex texts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Successful writers read extensively and do not struggle with vocabulary. There can be others who read extensively but are not successful writers. People who struggle with vocabulary have difficulty with complex texts, but this group does not include those who read extensively, maintaining consistency."
  },
  {
    "id": "gen-23-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All rare books are stored in a climate-controlled vault.",
      "No books stored in a climate-controlled vault are handled without gloves.",
      "Some books on display in the library are rare books.",
      "All books on display in the library are handled without gloves."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that some books on display in the library are not handled without gloves. If some books on display are rare (Statement 3), and all rare books are in a vault (Statement 1), and no vault books are handled without gloves (Statement 2), then some books on display are not handled without gloves. This directly contradicts Statement 4, which asserts that all books on display are handled without gloves."
  },
  {
    "id": "gen-23-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs in this park are on a leash.",
      "No dogs on a leash are permitted to enter the pond.",
      "Some dogs in this park are not permitted to enter the pond."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. If all dogs in the park are on a leash (Statement 1), and no leashed dogs can enter the pond (Statement 2), then it logically follows that all dogs in the park are not permitted to enter the pond. Statement 3, claiming that some dogs in the park are not permitted to enter the pond, is perfectly consistent with this universal conclusion."
  },
  {
    "id": "gen-23-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees in the marketing department have attended the new training.",
      "No employee who attended the new training is eligible for the promotion this year.",
      "Every senior manager is an employee in the marketing department.",
      "Some senior managers are eligible for the promotion this year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that no senior manager is eligible for the promotion this year. If every senior manager is in the marketing department (Statement 3), and all marketing employees attended the training (Statement 1), and no one who attended the training is eligible for promotion (Statement 2), then no senior manager is eligible. This directly contradicts Statement 4, which claims some senior managers are eligible."
  },
  {
    "id": "gen-23-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All reptiles are cold-blooded creatures.",
      "No cold-blooded creatures regulate their body temperature internally.",
      "Some snakes are reptiles."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. If all reptiles are cold-blooded (Statement 1) and no cold-blooded creatures regulate their temperature internally (Statement 2), then it follows that no reptiles regulate their temperature internally. Statement 3, that some snakes are reptiles, is consistent with this, implying those snakes also do not regulate their temperature internally."
  },
  {
    "id": "gen-23-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants in the marathon completed the full course.",
      "Every person who completed the full course received a finisher's medal.",
      "Some participants in the marathon did not receive a finisher's medal.",
      "No person who received a finisher's medal was disqualified."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that every participant in the marathon received a finisher's medal. If all participants completed the course (Statement 1), and everyone who completed the course received a medal (Statement 2), then all participants received a medal. This directly contradicts Statement 3, which claims some participants did not receive a medal."
  },
  {
    "id": "gen-23-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All plants in this greenhouse require daily watering.",
      "No plant that requires daily watering is drought-tolerant.",
      "Some drought-tolerant plants are grown outdoors.",
      "The orchids in this greenhouse are plants that require daily watering."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Plants in the greenhouse, including orchids, require daily watering and are therefore not drought-tolerant. There can still be some drought-tolerant plants that exist and are grown outdoors, without contradicting the conditions for greenhouse plants."
  },
  {
    "id": "gen-23-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the city council attend public hearings.",
      "Every local activist is a member of the city council.",
      "No one who attends public hearings supports the new budget proposal.",
      "Some local activists support the new budget proposal."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statements 1, 2, and 3 logically imply that no local activist supports the new budget proposal. If every local activist is a city council member (Statement 2), and all city council members attend public hearings (Statement 1), and no one who attends public hearings supports the budget (Statement 3), then no local activist supports the budget. This contradicts Statement 4, which claims some local activists support the budget."
  },
  {
    "id": "gen-23-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All wild foxes are skilled hunters.",
      "No skilled hunters rely solely on scavenging for food.",
      "Some animals that rely solely on scavenging for food are found in suburban areas.",
      "Every fox in this forest is a wild fox.",
      "Not all animals found in suburban areas are wild foxes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Foxes in this forest are wild foxes, skilled hunters, and do not rely on scavenging. Some scavenging animals exist in suburban areas, and not all suburban animals are wild foxes, which introduces no conflict with the conditions specified for wild foxes."
  },
  {
    "id": "gen-24-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified applicants have extensive experience.",
      "No one with extensive experience lacks communication skills.",
      "Every person who lacks communication skills will be rejected.",
      "Some rejected applicants were qualified."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all qualified applicants have communication skills. Since having communication skills means not lacking them, and Statement 3 asserts that anyone lacking communication skills is rejected, it follows that all qualified applicants will not be rejected. Statement 4 directly contradicts this by claiming that some rejected applicants were qualified."
  },
  {
    "id": "gen-24-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every member of the hiking club owns a compass.",
      "No one who owns a compass has ever been lost on a trail.",
      "Some people who own a compass are not members of the hiking club.",
      "Not all members of the hiking club own a tent."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that no member of the hiking club has ever been lost on a trail. Statement 3 is consistent, as some compass owners might not be club members. Statement 4 simply indicates that owning a tent is not a universal requirement for club members. All statements can be true simultaneously."
  },
  {
    "id": "gen-24-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the finance committee are experienced investors.",
      "Every experienced investor attends quarterly briefings.",
      "No one who attends quarterly briefings ever misses the annual review.",
      "Every member of the finance committee misses the annual review."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that all members of the finance committee do not miss the annual review. Statement 4 directly contradicts this by claiming that every member of the finance committee misses the annual review."
  },
  {
    "id": "gen-24-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All highly-rated restaurants serve fresh ingredients.",
      "Every restaurant serving fresh ingredients prioritizes customer satisfaction.",
      "Some restaurants that prioritize customer satisfaction are not highly-rated.",
      "No restaurant prioritizes customer satisfaction unless it has well-trained staff."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all highly-rated restaurants prioritize customer satisfaction. Statement 3 is consistent with this, as it allows for restaurants that prioritize customer satisfaction but are not highly-rated. Statement 4 adds a condition about well-trained staff, which does not create a contradiction with the other statements."
  },
  {
    "id": "gen-24-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an artwork is valuable, it is displayed in a public gallery.",
      "No artwork displayed in a public gallery is privately owned.",
      "All privately owned artworks are unique pieces.",
      "Some artworks that are not unique pieces are valuable.",
      "Every valuable artwork is privately owned."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1 and 2 logically imply that all valuable artworks are not privately owned. Statement 5 directly contradicts this by asserting that every valuable artwork is privately owned."
  },
  {
    "id": "gen-24-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have published at least one novel.",
      "No one who has published at least one novel has avoided literary criticism.",
      "Some individuals who have not avoided literary criticism are not successful authors.",
      "John is a successful author."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful authors have not avoided literary criticism. Statement 3 is consistent, as it allows for individuals who have not avoided literary criticism but are not successful authors. Statement 4 asserts John is a successful author, which means he also has not avoided literary criticism according to the first two statements. All facts can coexist."
  },
  {
    "id": "gen-24-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every athlete who wins an Olympic medal trains rigorously.",
      "No one who trains rigorously avoids a strict diet.",
      "All athletes who do not avoid a strict diet compete in amateur leagues.",
      "Some athletes who win Olympic medals compete in amateur leagues.",
      "No athlete who competes in amateur leagues wins an Olympic medal."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 logically imply that all athletes who win an Olympic medal compete in amateur leagues. Statement 5 contradicts this by stating that no athlete who competes in amateur leagues wins an Olympic medal, which means no athlete who wins an Olympic medal competes in amateur leagues."
  },
  {
    "id": "gen-24-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups have innovative technology.",
      "No business with innovative technology fails to secure funding.",
      "Some businesses that secure funding are not successful startups.",
      "If a business fails to secure funding, it will be acquired by a larger company."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful startups secure funding. Statement 3 is consistent, as there can be businesses that secure funding without being successful startups. Statement 4 introduces a consequence for businesses that fail to secure funding, which does not conflict with the other statements."
  },
  {
    "id": "gen-24-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every musician who performs at the festival has rehearsed extensively.",
      "No one who has rehearsed extensively struggles with stage fright.",
      "All musicians who struggle with stage fright prefer solo acts.",
      "Some musicians who perform at the festival prefer solo acts.",
      "No musician who prefers solo acts performs at the festival."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all musicians who perform at the festival do not struggle with stage fright. Since Statement 3 claims that all who struggle with stage fright prefer solo acts (meaning those who do not struggle with stage fright do not prefer solo acts), it follows that all musicians performing at the festival do not prefer solo acts. Statement 4 directly contradicts this by claiming that some musicians who perform at the festival prefer solo acts."
  },
  {
    "id": "gen-24-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of the old town district live in historic buildings.",
      "Every person living in a historic building pays higher property taxes.",
      "Some people who pay higher property taxes are not residents of the old town district.",
      "No resident of the old town district pays lower property taxes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all residents of the old town district pay higher property taxes. Statement 3 is consistent, as it allows for others outside the district to also pay higher property taxes. Statement 4 reinforces that residents pay higher, not lower, taxes, which is consistent with the derived conclusion. All statements can be true simultaneously."
  },
  {
    "id": "gen-25-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a cat, it enjoys napping.",
      "All animals that enjoy napping are domesticated.",
      "No domesticated animal is ever truly wild.",
      "Some cats are wild animals."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if an animal is a cat, it enjoys napping; if it enjoys napping, it is domesticated; if it is domesticated, it is not wild. Therefore, if an animal is a cat, it is not wild. Statement 4 directly contradicts this by asserting that some cats are wild animals."
  },
  {
    "id": "gen-25-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student studies hard, they will pass the exam.",
      "No student who passes the exam fails the course.",
      "Some students do not study hard.",
      "Every student who fails the course must retake it."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If a student studies hard, they pass the exam and do not fail the course. If a student fails the course, they retake it. Statement 3 indicates that some students don't study hard, which leaves open the possibility that they might fail and retake the course, without contradicting the rules for those who do study hard."
  },
  {
    "id": "gen-25-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a flight is delayed, passengers receive a voucher.",
      "No passenger who receives a voucher misses their connection.",
      "Every passenger on a delayed flight will miss their connection."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that if a flight is delayed, passengers receive a voucher, and therefore those passengers will not miss their connection. This means that if a flight is delayed, passengers will not miss their connection. Statement 3 directly contradicts this by stating that every passenger on a delayed flight will miss their connection."
  },
  {
    "id": "gen-25-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work weekends receive bonus pay.",
      "If an employee receives bonus pay, they are eligible for promotion.",
      "Some employees are eligible for promotion but do not work weekends.",
      "No employee who is eligible for promotion is ever denied a raise."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 establish that working weekends leads to bonus pay and promotion eligibility. Statement 3 indicates that there are other paths to promotion eligibility that do not involve working weekends, which does not contradict the established chain. Statement 4 adds a condition for those eligible for promotion, which also fits without contradiction."
  },
  {
    "id": "gen-25-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who attends the workshop improves their grades.",
      "If a student improves their grades, they receive a scholarship.",
      "No student who receives a scholarship is eligible for tutoring.",
      "All students attending the workshop are eligible for tutoring."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a student attends the workshop, they improve their grades; if they improve their grades, they receive a scholarship; if they receive a scholarship, they are not eligible for tutoring. Therefore, if a student attends the workshop, they are not eligible for tutoring. Statement 4 directly contradicts this by asserting that all students attending the workshop are eligible for tutoring."
  },
  {
    "id": "gen-25-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All fruits that grow on trees are picked by hand.",
      "No fruit that is picked by hand is sold in a vending machine.",
      "Some fruits sold in a vending machine do not grow on trees."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 imply that if a fruit grows on a tree, it is not sold in a vending machine. Statement 3 states that some fruits sold in a vending machine do not grow on trees. This is compatible, as the chain only describes tree-grown fruits, leaving open the possibility of vending machine fruits that are not tree-grown."
  },
  {
    "id": "gen-25-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a mystery novel, it has a plot twist.",
      "No book with a plot twist is predictable.",
      "Every book published this year is a mystery novel.",
      "Some books published this year are predictable."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a book was published this year, it is a mystery novel; if it is a mystery novel, it has a plot twist; if it has a plot twist, it is not predictable. Therefore, if a book was published this year, it is not predictable. Statement 4 directly contradicts this by asserting that some books published this year are predictable."
  },
  {
    "id": "gen-25-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in advanced calculus are engineering majors.",
      "If a student is an engineering major, they must complete an internship.",
      "Some students complete internships even if they are not engineering majors.",
      "No student who completes an internship is exempt from their senior thesis."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 create a path where advanced calculus students are engineering majors and complete internships. Statement 3 introduces other students who complete internships without being engineering majors, which does not contradict the prior statements. Statement 4 adds a condition for all students completing internships, which is also consistent."
  },
  {
    "id": "gen-25-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified, they will be interviewed.",
      "No candidate who is interviewed is denied access to the facility.",
      "Every candidate who is not qualified is denied access to the facility.",
      "Some candidates are not denied access to the facility, but they are also not qualified."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that if a candidate is qualified, they are not denied access to the facility. Statement 3 implies that if a candidate is not qualified, they are denied access to the facility. Taken together, these mean that a candidate is not denied access to the facility if and only if they are qualified. Statement 4 directly contradicts this by asserting that some candidates are not denied access to the facility yet are also not qualified."
  },
  {
    "id": "gen-25-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups receive venture capital.",
      "If a company receives venture capital, it expands rapidly.",
      "Some companies that expand rapidly are not successful startups.",
      "No company that expands rapidly faces immediate bankruptcy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 create a chain where successful startups receive venture capital and expand rapidly. Statement 3 explains that rapid expansion can occur even without being a successful startup, which is compatible. Statement 4 adds a general condition about rapidly expanding companies, which does not conflict with any other statement."
  },
  {
    "id": "gen-26-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dolphins are mammals.",
      "No mammals are fish.",
      "Some dolphins are fish."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (All dolphins are mammals) and Statement 2 (No mammals are fish) logically imply that no dolphins are fish. Statement 3 (Some dolphins are fish) directly contradicts this conclusion."
  },
  {
    "id": "gen-26-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in the advanced course, they must pass the prerequisite.",
      "Some students have enrolled in the advanced course.",
      "Some students who passed the prerequisite did not enroll in the advanced course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for some students to take the advanced course (and pass the prerequisite), while other students pass the prerequisite but choose not to enroll in the advanced course."
  },
  {
    "id": "gen-26-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student is in the advanced class, they must attend the weekly seminar.",
      "Every student who excels in calculus is in the advanced class.",
      "No one who attends the weekly seminar can miss the final project deadline.",
      "Some students who excel in calculus miss the final project deadline."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 (Every student who excels in calculus is in the advanced class) and Statement 1 (If a student is in the advanced class, they must attend the weekly seminar) imply that every student who excels in calculus attends the weekly seminar. This combined with Statement 3 (No one who attends the weekly seminar can miss the final project deadline) means no student who excels in calculus can miss the final project deadline. Statement 4 (Some students who excel in calculus miss the final project deadline) directly contradicts this."
  },
  {
    "id": "gen-26-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "All pigeons have feathers.",
      "Some birds are not pigeons."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Pigeons are a type of bird, so they all have feathers. There are also other types of birds that are not pigeons, which also have feathers. All statements can be true simultaneously."
  },
  {
    "id": "gen-26-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative.",
      "If a project is groundbreaking, it requires significant funding.",
      "No project requiring significant funding is innovative.",
      "Some groundbreaking projects are led by successful entrepreneurs."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 (If a project is groundbreaking, it requires significant funding) and Statement 3 (No project requiring significant funding is innovative) imply that no groundbreaking project is innovative. Since Statement 1 states all successful entrepreneurs are innovative, it follows that no groundbreaking project can be led by a successful entrepreneur. Statement 4 (Some groundbreaking projects are led by successful entrepreneurs) directly contradicts this."
  },
  {
    "id": "gen-26-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not pets.",
      "Fido is a dog.",
      "Fido is a pet."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Fido can be a dog, which is a mammal and a pet. Some other mammals might be wild and therefore not pets. All statements can be true."
  },
  {
    "id": "gen-26-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the board supports the new policy.",
      "No one who supports the new policy is concerned about budget overruns.",
      "At least one member of the board is concerned about budget overruns."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (Every member of the board supports the new policy) and Statement 2 (No one who supports the new policy is concerned about budget overruns) logically imply that no member of the board is concerned about budget overruns. Statement 3 (At least one member of the board is concerned about budget overruns) directly contradicts this conclusion."
  },
  {
    "id": "gen-26-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a cat, then it is a feline.",
      "Some felines are not cats.",
      "Every cat is an animal.",
      "Whiskers is a feline."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Whiskers could be a cat (and thus a feline and an animal). Other felines (like lions) might not be cats. All statements can be true simultaneously."
  },
  {
    "id": "gen-26-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant has large leaves, it needs a lot of water.",
      "If a plant needs a lot of water, it should be kept in shade.",
      "Some plants with large leaves should not be kept in shade."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 (If a plant has large leaves, it needs a lot of water) and Statement 2 (If a plant needs a lot of water, it should be kept in shade) logically imply that all plants with large leaves should be kept in shade. Statement 3 (Some plants with large leaves should not be kept in shade) directly contradicts this conclusion."
  },
  {
    "id": "gen-26-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an employee receives a promotion, they get a raise.",
      "No employee who receives a promotion works part-time.",
      "Some employees who get a raise work part-time."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent that some employees who receive a raise (but not necessarily a promotion) work part-time, while promoted employees (who get a raise) do not work part-time. The statements do not conflict."
  },
  {
    "id": "gen-27-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for the scholarship, their GPA is above 3.5.",
      "No student with a GPA above 3.5 has any disciplinary infractions.",
      "Maria is eligible for the scholarship.",
      "Maria has a disciplinary infraction."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, Maria is eligible for the scholarship. From Statement 1, her GPA must be above 3.5. From Statement 2, any student with a GPA above 3.5 has no disciplinary infractions. This implies Maria has no disciplinary infractions, which contradicts Statement 4."
  },
  {
    "id": "gen-27-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant needs full sun, it is not a fern.",
      "Some plants that are not ferns do not need full sun.",
      "Every plant that thrives in shade is a fern.",
      "Some plants thrive in shade."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statement 4 and 3 imply that some ferns thrive in shade, which is consistent with Statement 1 that full-sun plants are not ferns. Statement 2 describes non-fern plants that don't need full sun, which is also possible."
  },
  {
    "id": "gen-27-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have perfect attendance.",
      "No employee with perfect attendance misses the monthly meeting.",
      "Every employee who worked overtime received a bonus.",
      "Some employees who worked overtime missed the monthly meeting."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, all employees who worked overtime received a bonus. From Statement 1, all who received a bonus have perfect attendance. From Statement 2, no one with perfect attendance misses the monthly meeting. Therefore, all employees who worked overtime did not miss the monthly meeting, which contradicts Statement 4."
  },
  {
    "id": "gen-27-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a first edition, its value exceeds $100.",
      "Some books with a value exceeding $100 are not first editions.",
      "This particular book's value does not exceed $100.",
      "This particular book is not a first edition."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From the contrapositive of Statement 1, if a book's value does not exceed $100, then it is not a first edition. Statements 3 and 4 are consistent with this. Statement 2 merely states there are other valuable books, which is also possible."
  },
  {
    "id": "gen-27-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle is a truck, it has a heavy-duty engine.",
      "All vehicles with a heavy-duty engine require special maintenance.",
      "No vehicle requiring special maintenance can be driven by a standard license holder.",
      "Some trucks can be driven by a standard license holder."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all trucks have heavy-duty engines. From Statement 2, all vehicles with heavy-duty engines require special maintenance. From Statement 3, no vehicle requiring special maintenance can be driven by a standard license holder. This chain implies that all trucks cannot be driven by a standard license holder, which contradicts Statement 4."
  },
  {
    "id": "gen-27-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No student who scores below 70 is eligible for the advanced course.",
      "If a student is eligible for the advanced course, they must have completed the prerequisite.",
      "Some students have completed the prerequisite but did not score below 70.",
      "Not all students who scored below 70 failed the prerequisite."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 mean that students eligible for the advanced course completed the prerequisite and did not score below 70. Statement 3 describes a group of students consistent with this. Statement 4 is also possible; a student scoring below 70 might still have passed the prerequisite."
  },
  {
    "id": "gen-27-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All plants that have thorns require careful handling.",
      "No plant requiring careful handling is suitable for small children.",
      "Some roses are suitable for small children."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all roses have thorns. From Statement 2, all plants with thorns require careful handling. From Statement 3, no plant requiring careful handling is suitable for small children. This implies that all roses are not suitable for small children, which contradicts Statement 4."
  },
  {
    "id": "gen-27-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No animal that migrates lays its eggs in the arctic.",
      "If an animal lays its eggs in the arctic, it has thick feathers.",
      "Some animals with thick feathers do not migrate.",
      "All animals with thick feathers can withstand cold temperatures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Statements 1 and 2 indicate that animals laying eggs in the arctic have thick feathers and do not migrate. Statement 3 is consistent with this. Statement 4 adds a characteristic to animals with thick feathers, which does not create a contradiction."
  },
  {
    "id": "gen-27-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees assigned to project Alpha receive additional training.",
      "If an employee receives additional training, they must complete an advanced course.",
      "No employee who completes an advanced course is eligible for project Beta.",
      "Not all employees assigned to project Alpha are ineligible for project Beta."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all employees on Project Alpha receive additional training. From Statement 2, all receiving additional training complete an advanced course. From Statement 3, no one completing an advanced course is eligible for Project Beta. This implies all employees on Project Alpha are ineligible for Project Beta, which contradicts Statement 4 (meaning some Project Alpha employees are eligible for Project Beta)."
  },
  {
    "id": "gen-27-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a robin, it builds a nest in a tree.",
      "No bird that builds a nest in a tree is a ground feeder.",
      "All birds that are ground feeders have strong talons.",
      "Some robins have strong talons."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statements 1 and 2, robins build nests in trees and are not ground feeders. Statement 3 states that ground feeders have strong talons, but this does not imply that only ground feeders have strong talons. Therefore, it is consistent for some robins to have strong talons, even though they are not ground feeders."
  },
  {
    "id": "gen-28-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs in the park are leashed.",
      "Some dogs in the park are playing fetch.",
      "No leashed animal is playing fetch."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 1 says all dogs in the park are leashed. Statement 3 says no leashed animal is playing fetch. Together, these imply that no dogs in the park are playing fetch, which directly contradicts Statement 2, 'Some dogs in the park are playing fetch.'"
  },
  {
    "id": "gen-28-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "Some risk-takers are not successful entrepreneurs.",
      "David is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. David, as a successful entrepreneur, is a risk-taker according to Statement 1. Statement 2 simply notes that the group of risk-takers includes people who are not successful entrepreneurs, which does not conflict with David's status or Statement 1."
  },
  {
    "id": "gen-28-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No birds that migrate south have red feathers.",
      "All birds in this aviary have red feathers.",
      "Some birds in this aviary migrate south."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 indicates that all birds in the aviary have red feathers. According to Statement 1, no birds with red feathers migrate south (contrapositive of 'No birds that migrate south have red feathers' means 'If a bird has red feathers, it does not migrate south'). This means no birds in the aviary migrate south, which contradicts Statement 3, 'Some birds in this aviary migrate south.'"
  },
  {
    "id": "gen-28-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "Sarah trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes that all professional athletes train daily. Statement 2 allows for individuals like Sarah to train daily without being professional athletes, which is perfectly compatible with the other statements."
  },
  {
    "id": "gen-28-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No fruit that grows on trees is also a berry.",
      "All strawberries are berries.",
      "Some strawberries grow on trees."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says all strawberries are berries. Statement 1 implies that no berries grow on trees (contrapositive of 'No fruit that grows on trees is also a berry' means 'If a fruit is a berry, it does not grow on trees'). Therefore, no strawberries grow on trees, which directly contradicts Statement 3, 'Some strawberries grow on trees.'"
  },
  {
    "id": "gen-28-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful artist has a unique style.",
      "Some people with a unique style are not successful artists.",
      "Julia has a unique style."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Julia, having a unique style, could either be a successful artist (in line with Statement 1) or one of the people with a unique style who are not successful artists (in line with Statement 2)."
  },
  {
    "id": "gen-28-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees in department A use specific software.",
      "No employee who uses specific software attends the general meeting.",
      "Some employees in department A attend the general meeting."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all employees in department A use specific software. Statement 2 says no employee who uses specific software attends the general meeting. Combining these, it means no employees in department A attend the general meeting. This conclusion directly contradicts Statement 3, 'Some employees in department A attend the general meeting.'"
  },
  {
    "id": "gen-28-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No scientist believes in pure chance.",
      "Some individuals who believe in pure chance are artists.",
      "Dr. Evelyn is a scientist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Dr. Evelyn, being a scientist, does not believe in pure chance according to Statement 1. Statement 2 simply indicates that some people who believe in pure chance are artists, which does not conflict with Dr. Evelyn's beliefs or the truth of Statement 1."
  },
  {
    "id": "gen-28-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who registered late has to pay an extra fee.",
      "No student who passed the early bird deadline had to pay an extra fee.",
      "Some students who registered late passed the early bird deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all students who registered late paid an extra fee. Statement 2 implies that anyone who paid an extra fee did not pass the early bird deadline (contrapositive of 'No student who passed the early bird deadline had to pay an extra fee'). Therefore, all students who registered late did not pass the early bird deadline, which contradicts Statement 3, 'Some students who registered late passed the early bird deadline.'"
  },
  {
    "id": "gen-28-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All books with a blue cover are fiction.",
      "Some fiction books are not popular.",
      "The book 'The Azure Mystery' has a blue cover."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. According to Statement 1, 'The Azure Mystery' is a fiction book because it has a blue cover. Statement 2 merely states that not all fiction books are popular, which allows for 'The Azure Mystery' to be either popular or not popular without creating a contradiction."
  },
  {
    "id": "gen-29-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant thrives, it requires abundant sunlight.",
      "Any plant that needs abundant sunlight is not suited for indoor growing.",
      "All tropical plants thrive.",
      "Some indoor plants are tropical."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, all tropical plants thrive. From Statement 1, thriving plants require abundant sunlight. From Statement 2, plants needing abundant sunlight are not suited for indoor growing. This implies that no tropical plant is suited for indoor growing. Statement 4, however, asserts that some indoor plants are tropical, creating a direct contradiction."
  },
  {
    "id": "gen-29-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional musicians practice daily.",
      "Some people who practice daily are not professional musicians.",
      "No one who practices daily is a novice.",
      "Maya is a professional musician."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Maya, as a professional musician, practices daily and is not a novice, which is consistent with the rules. The existence of people who practice daily but are not professional musicians (and thus not novices) also fits the criteria without contradiction."
  },
  {
    "id": "gen-29-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "No chef working in this restaurant uses frozen ingredients.",
      "Every chef who wins a culinary award is working in this restaurant.",
      "Chef Benoit won a culinary award.",
      "Chef Benoit uses frozen ingredients."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, Chef Benoit won a culinary award. From Statement 2, every chef who wins a culinary award works in this restaurant. From Statement 1, no chef working in this restaurant uses frozen ingredients. This implies Chef Benoit does not use frozen ingredients. Statement 4, however, claims Chef Benoit uses frozen ingredients, which is a direct contradiction."
  },
  {
    "id": "gen-29-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Some businesses that prioritize customer satisfaction are not successful.",
      "If a business has a high employee turnover rate, it is not successful.",
      "Company X prioritizes customer satisfaction."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Company X prioritizing customer satisfaction is consistent. Company X could be a successful business, or it could be one of the customer-satisfaction-focused businesses that is not successful. The turnover rate rule does not introduce a contradiction."
  },
  {
    "id": "gen-29-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All mammals have fur.",
      "Some animals that lay eggs are mammals.",
      "No animal that lays eggs has fur."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "From Statement 2, some animals that lay eggs are mammals. From Statement 1, all mammals have fur. Therefore, some animals that lay eggs must have fur. Statement 3, however, explicitly states that no animal that lays eggs has fur, creating a direct contradiction."
  },
  {
    "id": "gen-29-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every painting displayed in the main gallery is a landscape.",
      "Some landscapes are not displayed in the main gallery.",
      "If a painting is a portrait, it is not displayed in the main gallery.",
      "This particular painting is a landscape."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This particular painting being a landscape is consistent. It could be displayed in the main gallery, or it could be one of the landscapes not displayed there. Portraits being excluded from the main gallery does not create any conflict with these statements."
  },
  {
    "id": "gen-29-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who passed the advanced logic module received a certificate.",
      "No student who received a certificate failed the final project.",
      "Some students who failed the final project passed the advanced logic module."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, all students who passed the advanced logic module received a certificate. From Statement 2, no student who received a certificate failed the final project. This implies that no student who passed the advanced logic module failed the final project. Statement 3, however, asserts that some students who failed the final project passed the advanced logic module, creating a direct contradiction."
  },
  {
    "id": "gen-29-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every animal native to this island is nocturnal.",
      "If an animal is nocturnal, it avoids direct sunlight.",
      "Some animals that avoid direct sunlight are not native to this island."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The first two statements establish that all native island animals avoid direct sunlight. The third statement indicates that some animals that avoid direct sunlight are not native, which is consistent, as the native animals are not the only ones that might avoid sunlight."
  },
  {
    "id": "gen-29-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds in this aviary are exotic species.",
      "No exotic species in this aviary can mimic human speech.",
      "Some birds that can mimic human speech are found in this aviary."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, all birds in this aviary are exotic species. From Statement 2, no exotic species in this aviary can mimic human speech. This implies that no bird in this aviary can mimic human speech. Statement 3, however, states that some birds that can mimic human speech are found in this aviary, creating a direct contradiction."
  },
  {
    "id": "gen-29-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Unless a painting is an original, it cannot be insured for over a million dollars.",
      "Every painting in the exhibition is insured for over a million dollars.",
      "Some original paintings are not in the exhibition."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The first two statements combined indicate that every painting in the exhibition is an original. The third statement, that some original paintings are not in the exhibition, is consistent with this, as not all originals must be part of the exhibition."
  },
  {
    "id": "gen-30-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate has extensive public service experience, they receive a preferential interview slot.",
      "No candidate who receives a preferential interview slot is subject to a background check.",
      "All candidates for this position must undergo a background check.",
      "Every candidate for this position has extensive public service experience.",
      "Some candidates are applying for this position."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 indicates that some candidates exist. According to Statement 4, every candidate for this position has extensive public service experience. Statement 1 states that extensive public service experience leads to a preferential interview slot. Statement 2 dictates that no one with a preferential interview slot undergoes a background check. Therefore, these candidates are not subject to a background check. This contradicts Statement 3, which requires all candidates to undergo a background check. Removing Statement 4 breaks the initial link, allowing candidates to exist without necessarily having public service experience, thus avoiding the contradiction."
  },
  {
    "id": "gen-30-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful product launches involve extensive market research.",
      "Some products that underwent extensive market research were not successful launches.",
      "If a product launch is successful, it ensures high customer satisfaction.",
      "No product that ensures high customer satisfaction is subsequently discontinued within a year."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful product launches lead to extensive market research (Statement 1) and high customer satisfaction (Statement 3), which in turn prevents discontinuation (Statement 4). Statement 2 simply notes that not all market research leads to successful launches, which doesn't contradict the other statements; some products might undergo research but fail for other reasons. All statements can simultaneously be true."
  },
  {
    "id": "gen-30-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "No plant that thrives in direct sunlight is a tropical species.",
      "Every plant in the greenhouse thrives in direct sunlight.",
      "Some plants in the greenhouse require daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 4 indicates there are plants in the greenhouse that require daily watering. According to Statement 1, these plants must be tropical species. However, Statement 3 says every plant in the greenhouse thrives in direct sunlight. Statement 2 asserts that no plant thriving in direct sunlight is a tropical species. This means the plants from Statement 4 are both tropical (from Statement 1) and not tropical (from Statements 3 and 2). Removing Statement 2 resolves this by allowing plants thriving in direct sunlight to be tropical species."
  },
  {
    "id": "gen-30-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All research papers submitted for the conference must be peer-reviewed.",
      "If a research paper is peer-reviewed, it receives editorial feedback.",
      "Maria's research paper was submitted for the conference.",
      "Not all research papers that receive editorial feedback are submitted for the conference."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Maria's paper, being submitted for the conference (Statement 3), must be peer-reviewed (Statement 1), and thus receives editorial feedback (Statement 2). Statement 4 merely indicates that some papers receiving feedback might not be conference submissions, which does not contradict Maria's situation or any other statement."
  },
  {
    "id": "gen-30-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends all lectures, they are eligible for the honor society.",
      "Only students who complete all assignments are eligible for the honor society.",
      "No student who completes all assignments fails the final exam.",
      "Every student who fails the final exam attended all lectures.",
      "Some students failed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 5 confirms that some students failed the final exam. According to Statement 4, these students must have attended all lectures. Statement 1 indicates that attending all lectures makes a student eligible for the honor society. Statement 2 specifies that only students who complete all assignments are eligible for the honor society, implying these students completed all assignments. Finally, Statement 3 dictates that completing all assignments means a student did not fail the final exam. This creates a contradiction: these students both failed the final exam and did not fail it. Removing Statement 4 breaks the initial link, allowing students to fail the final exam without having attended all lectures, preventing the contradiction."
  },
  {
    "id": "gen-30-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a quarterly bonus meet their performance targets.",
      "If an employee meets their performance targets, they are eligible for promotion.",
      "Some employees eligible for promotion do not receive a quarterly bonus.",
      "Maria received a quarterly bonus this quarter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Maria receiving a bonus (Statement 4) means she met her targets (Statement 1) and is eligible for promotion (Statement 2). Statement 3, indicating some eligible employees do not receive bonuses, is consistent because eligibility for promotion can come from meeting targets, which does not exclusively require a bonus."
  },
  {
    "id": "gen-30-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a building uses solar power, it qualifies for a green certification.",
      "Buildings that qualify for a green certification are exempt from certain energy regulations.",
      "No building exempt from energy regulations has an average monthly utility bill above $500.",
      "The new city hall building uses solar power.",
      "The new city hall building has an average monthly utility bill above $500."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 indicates the new city hall uses solar power. According to Statement 1, this means it qualifies for a green certification. Statement 2 adds that buildings with green certification are exempt from certain energy regulations. Statement 3 specifies that buildings exempt from energy regulations do not have an average monthly utility bill above $500. Therefore, the new city hall's utility bill must not be above $500. This directly contradicts Statement 5. Removing Statement 5 makes the set consistent by removing the direct claim that conflicts with the derived conclusion."
  },
  {
    "id": "gen-30-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All candidates for the senior analyst position must have a master's degree.",
      "No candidate with a master's degree lacks prior industry experience.",
      "If a candidate lacks prior industry experience, they will not be invited for an interview.",
      "Some candidates for the senior analyst position will not be invited for an interview."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and 2, all senior analyst candidates have a master's degree and prior industry experience. This means they do not lack prior industry experience, so Statement 3's condition for not being invited for an interview is not met for them through this chain. However, Statement 4 simply states that some senior analyst candidates will not be invited, which is consistent, as there could be other unstated reasons for not being invited for an interview, even if they possess all stated qualifications."
  },
  {
    "id": "gen-30-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a company invests heavily in research and development, it introduces innovative products.",
      "No company that introduces innovative products is losing market share.",
      "Every company losing market share is undergoing a financial audit.",
      "Some companies undergoing a financial audit invest heavily in research and development.",
      "All companies undergoing a financial audit are losing market share."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 indicates that some companies undergoing a financial audit also invest heavily in research and development. According to Statement 1, these companies introduce innovative products. Statement 2 asserts that companies introducing innovative products are not losing market share. Therefore, these companies are not losing market share. However, Statement 5 claims that all companies undergoing a financial audit (which these companies are) are losing market share. This creates a contradiction. Removing Statement 5 resolves this by allowing companies undergoing a financial audit to exist without necessarily losing market share."
  },
  {
    "id": "gen-30-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered delegates receive a conference badge.",
      "If a person has a conference badge, they have access to the main hall.",
      "Some people who have access to the main hall are not registered delegates.",
      "No one without a conference badge has access to the main hall."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Registered delegates receive badges (Statement 1) and thus have main hall access (Statement 2). Statement 4 is the contrapositive of Statement 2, providing no new information. Statement 3 confirms that some people may gain main hall access without being registered delegates, which is consistent with the other rules; it doesn't state that *only* registered delegates get badges or main hall access, just that registered delegates do."
  },
  {
    "id": "gen-31-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All rare books are valuable.",
      "No valuable item is found in the discard bin.",
      "Some books in the discard bin are rare."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no rare books are found in the discard bin. Statement 3 asserts that some books in the discard bin are rare, which directly contradicts this conclusion."
  },
  {
    "id": "gen-31-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are canines.",
      "Some canines are not dogs.",
      "Fido is a canine."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Fido could be a dog (and thus a canine), or Fido could be one of the canines that are not dogs. There is no contradiction."
  },
  {
    "id": "gen-31-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a robin, it lays blue eggs.",
      "All birds that lay blue eggs build nests in trees.",
      "Some robins do not build nests in trees."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that if a bird is a robin, it builds its nest in trees. Statement 3 contradicts this by asserting that some robins do not build nests in trees."
  },
  {
    "id": "gen-31-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "This plant has thorns.",
      "Some plants with thorns are not roses."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. This plant could be a rose, or it could be one of the plants with thorns that are not roses. No contradiction arises."
  },
  {
    "id": "gen-31-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All athletes train daily.",
      "No one who trains daily skips their warm-up.",
      "Some athletes skip their warm-up."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no athlete skips their warm-up. Statement 3 claims that some athletes skip their warm-up, which directly contradicts this conclusion."
  },
  {
    "id": "gen-31-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All chefs are excellent cooks.",
      "Emily is an excellent cook.",
      "Some excellent cooks are not chefs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Emily could be a chef, or she could be one of the excellent cooks who are not chefs. No contradiction is forced."
  },
  {
    "id": "gen-31-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who attend the workshop receive a bonus.",
      "No employee who received a bonus was absent from the closing ceremony.",
      "Some employees who attended the workshop were absent from the closing ceremony."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no employee who attended the workshop was absent from the closing ceremony. Statement 3 contradicts this by stating that some employees who attended the workshop were absent from the closing ceremony."
  },
  {
    "id": "gen-31-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No tigers are native to Europe.",
      "All lions are native to Africa.",
      "Some African animals are tigers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Tigers that are African animals would not be native to Europe, which is consistent with Statement 1. Lions being native to Africa does not create any conflict."
  },
  {
    "id": "gen-31-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the choir can read music.",
      "If someone can read music, they have perfect pitch.",
      "Maria is a member of the choir, but she does not have perfect pitch."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that every member of the choir has perfect pitch. Statement 3 contradicts this by describing Maria, a choir member, who does not have perfect pitch."
  },
  {
    "id": "gen-31-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student studies daily, they will pass the exam.",
      "Mark did not pass the exam.",
      "Some students did not study daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 1 and Statement 2, we can infer that Mark did not study daily. This is consistent with Statement 3, which indicates that some students (Mark potentially being one of them) did not study daily."
  },
  {
    "id": "gen-32-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every expert in the field attends the annual conference.",
      "Anyone who attends the annual conference registers online.",
      "If a person registers online, they must pay a registration fee.",
      "Some experts in the field are exempt from paying any registration fee."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: If a person is an expert, they attend the conference; if they attend, they register online; if they register online, they pay a fee. This means all experts pay a fee. Statement 4 claims that some experts are exempt from paying any registration fee, which directly contradicts the conclusion that all experts pay a fee. Removing Statement 4 resolves this conflict."
  },
  {
    "id": "gen-32-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful authors have published at least one critically acclaimed novel.",
      "No one who has published a critically acclaimed novel has ever failed to meet their deadlines.",
      "If an author consistently meets their deadlines, they will eventually be considered for the prestigious Literary Award.",
      "Some authors who are successful have never been considered for the prestigious Literary Award."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If an author is successful, they have published a critically acclaimed novel. If they have published a critically acclaimed novel, they have met their deadlines. If they have met their deadlines, they will be considered for the Literary Award. This implies that all successful authors will be considered for the Literary Award. Statement 4 contradicts this by claiming that some successful authors have never been considered for the award. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-32-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered attendees receive a conference badge.",
      "Every person with a conference badge is permitted access to the plenary sessions.",
      "If a person is permitted access to the plenary sessions, they are considered a participant in the workshop.",
      "Some registered attendees are not considered participants in the workshop."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If a person is a registered attendee, they receive a conference badge. If they have a conference badge, they are permitted access to the plenary sessions. If they are permitted access to the plenary sessions, they are considered a participant in the workshop. This implies that all registered attendees are considered participants in the workshop. Statement 4 contradicts this by asserting that some registered attendees are not considered participants in the workshop. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-32-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No applicant is accepted unless they achieve a top score on the entrance exam.",
      "If an applicant achieved a top score on the entrance exam, they must have attended the advanced preparation course.",
      "All applicants who attended the advanced preparation course are offered a scholarship.",
      "Some applicants who were accepted were not offered a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If an applicant is accepted, they achieved a top score. If they achieved a top score, they attended the advanced preparation course. If they attended the advanced preparation course, they are offered a scholarship. This implies that all accepted applicants are offered a scholarship. Statement 4 contradicts this by stating that some accepted applicants were not offered a scholarship. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-32-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced coding module, they must have completed the prerequisite course.",
      "All students who completed the prerequisite course passed the midterm exam.",
      "No student who passed the midterm exam failed the final project.",
      "Some students who enrolled in the advanced coding module failed the final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If a student enrolls in the advanced coding module, they completed the prerequisite course. If they completed the prerequisite course, they passed the midterm exam. If they passed the midterm exam, they did not fail the final project (meaning they passed it). This implies that all students who enroll in the advanced coding module passed the final project. Statement 4 contradicts this by stating that some students who enrolled in the advanced coding module failed the final project. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-33-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are nocturnal birds.",
      "No nocturnal birds hunt during the day.",
      "Some owls hunt during the day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no owls hunt during the day. If all owls are nocturnal birds (1), and no nocturnal birds hunt during the day (2), then it must be true that no owls hunt during the day. This directly contradicts Statement 3, which claims some owls hunt during the day."
  },
  {
    "id": "gen-33-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional chefs have culinary training.",
      "Some people with culinary training are not professional chefs.",
      "Marco has culinary training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Marco having culinary training is consistent with him being a professional chef (as per Statement 1), or with him being one of the people with culinary training who are not professional chefs (as per Statement 2). All three statements can simultaneously be true."
  },
  {
    "id": "gen-33-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an athlete is competing in the finals, they must have qualified in the semi-finals.",
      "All athletes from Team Alpha are competing in the finals.",
      "Some athletes from Team Alpha did not qualify in the semi-finals."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 tells us that all athletes from Team Alpha are competing in the finals. Combined with Statement 1, which states that all athletes competing in the finals must have qualified in the semi-finals, this means all athletes from Team Alpha must have qualified in the semi-finals. This conclusion contradicts Statement 3, which asserts that some athletes from Team Alpha did not qualify in the semi-finals."
  },
  {
    "id": "gen-33-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No reptiles are warm-blooded.",
      "Some pets are reptiles.",
      "All mammals are warm-blooded."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that no reptiles are warm-blooded. Statement 2 means some pets are reptiles, and thus some pets are not warm-blooded. Statement 3 says all mammals are warm-blooded. These statements are consistent; there can be pets that are reptiles (not warm-blooded) and mammals that are warm-blooded, without contradiction."
  },
  {
    "id": "gen-33-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No classical musicians enjoy pop music.",
      "Some people who play the cello are classical musicians.",
      "Every person who plays the cello enjoys pop music."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 1 combine to imply that some people who play the cello do not enjoy pop music. If some cellists are classical musicians (2), and no classical musicians enjoy pop music (1), then those specific cellists do not enjoy pop music. This directly contradicts Statement 3, which claims every person who plays the cello enjoys pop music."
  },
  {
    "id": "gen-33-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant requires full sun, it cannot thrive in shade.",
      "Some plants in my garden require full sun.",
      "All plants in my garden are drought-tolerant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and 2, we know that some plants in the garden cannot thrive in shade. Statement 3 states that all plants in the garden are drought-tolerant. These facts are fully consistent; there can be drought-tolerant plants that require full sun and cannot thrive in shade, as well as others that might thrive in shade."
  },
  {
    "id": "gen-33-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits contain seeds.",
      "All berries are fruits.",
      "Some berries do not contain seeds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 1 establish that all berries contain seeds. If all berries are fruits (2), and all fruits contain seeds (1), then it logically follows that all berries contain seeds. This conclusion directly contradicts Statement 3, which claims some berries do not contain seeds."
  },
  {
    "id": "gen-33-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful startups receive venture capital.",
      "Some new businesses are successful startups.",
      "No government grants are venture capital."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, it is implied that some new businesses receive venture capital. Statement 3 indicates that government grants are distinct from venture capital. These statements can all be true simultaneously; there is no logical conflict."
  },
  {
    "id": "gen-33-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a painting is a masterpiece, it is highly valued.",
      "No highly valued paintings are offered for free.",
      "Some paintings offered for free are masterpieces."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 lead to the conclusion that no masterpieces are offered for free. If a painting is a masterpiece, it is highly valued (1), and no highly valued paintings are offered for free (2), then no masterpieces can be offered for free. This directly contradicts Statement 3, which asserts that some paintings offered for free are masterpieces."
  },
  {
    "id": "gen-33-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every politician attends public debates.",
      "Not every person who attends public debates is a politician.",
      "Some politicians are excellent debaters."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Every politician attending public debates (1) is consistent with some non-politicians also attending debates (2). Statement 3, about some politicians being excellent debaters, describes a subset of politicians who attend debates, which does not conflict with the other statements. All three can be true."
  },
  {
    "id": "gen-34-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified applicants have submitted a complete resume.",
      "No applicant who submitted a complete resume has neglected the cover letter.",
      "Every applicant selected for an interview is a qualified applicant.",
      "There is at least one applicant selected for an interview who neglected the cover letter."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that every applicant selected for an interview must have submitted a cover letter. Statement 4 directly contradicts this by asserting that some applicants selected for an interview neglected their cover letter."
  },
  {
    "id": "gen-34-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have published at least one bestseller.",
      "Some published authors have never written a bestseller.",
      "No author who has never written a bestseller is considered successful.",
      "Laura is a published author."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. Statements 1 and 3 are logically equivalent, establishing that successful authors must have written a bestseller. Statement 2 indicates that some published authors exist who are not successful, which is consistent. Laura, as a published author, could be one of these non-bestselling authors or a bestselling one, without violating any rules."
  },
  {
    "id": "gen-34-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every car with an active warranty has passed its safety inspection.",
      "No car that has passed its safety inspection has any outstanding recalls.",
      "Some cars with outstanding recalls are still under active warranty."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that any car with an active warranty must have no outstanding recalls. Statement 3 claims that there are some cars with outstanding recalls that are still under active warranty, which directly contradicts the conclusion derived from statements 1 and 2."
  },
  {
    "id": "gen-34-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates possess strong communication skills.",
      "Some job applicants who possess strong communication skills are not qualified candidates.",
      "No candidate lacking strong communication skills will be hired.",
      "Our top applicant will be hired."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. Statements 3 and 4 imply that the top applicant must possess strong communication skills. Statement 1 indicates that qualified candidates have these skills, and statement 2 clarifies that some with strong communication skills are not qualified. It's possible for the top applicant to have strong communication skills and be hired, whether or not they are a qualified candidate."
  },
  {
    "id": "gen-34-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful politician has a strong public image.",
      "No politician with a strong public image avoids challenging debates.",
      "Some politicians who avoid challenging debates are successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that any successful politician must engage in challenging debates. Statement 3 directly contradicts this conclusion by stating that some successful politicians avoid challenging debates."
  },
  {
    "id": "gen-34-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All highly rated restaurants employ award-winning chefs.",
      "Some restaurants employ award-winning chefs but are not highly rated.",
      "No restaurant lacking an award-winning chef is considered highly rated.",
      "\"The Gourmet Grotto\" is a highly rated restaurant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. Statements 1 and 3 are logically equivalent, establishing that highly rated restaurants always employ award-winning chefs. Statement 2 permits the existence of restaurants with award-winning chefs that are not highly rated. Statement 4 simply applies the rule to \"The Gourmet Grotto,\" meaning it must employ an award-winning chef, which is consistent."
  },
  {
    "id": "gen-34-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a book is a bestseller, it has received critical acclaim.",
      "No book that receives critical acclaim is ignored by major literary awards.",
      "Every book that is considered for a major literary award is a bestseller.",
      "There exists at least one book that is a bestseller but is ignored by major literary awards."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together create a logical loop, implying that a book is a bestseller if and only if it receives critical acclaim, and if and only if it is considered for a major literary award. Therefore, all bestsellers must be considered for major literary awards. Statement 4 directly contradicts this by stating that some bestsellers are ignored by major literary awards."
  },
  {
    "id": "gen-34-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who complete the advanced course score highly on the final exam.",
      "Some students who score highly on the final exam did not complete the advanced course.",
      "No student who scores highly on the final exam struggled with the material.",
      "Emily completed the advanced course and scored highly on the final exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. Statement 1 establishes a condition for high scores, while statement 2 allows for other ways to achieve high scores. Statement 3 adds a characteristic of high scorers. Emily completing the advanced course and scoring highly is consistent with all conditions, as she would then logically not have struggled with the material according to statement 3."
  },
  {
    "id": "gen-34-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful product launches were preceded by extensive market research.",
      "No product launch preceded by extensive market research received negative press.",
      "Every product that received negative press was a commercial failure.",
      "Some product launches were successful, but also commercial failures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that any successful product launch must not have received negative press, and therefore cannot be a commercial failure (since any product receiving negative press was a commercial failure). Thus, all successful product launches must not be commercial failures. Statement 4 directly contradicts this by asserting that some successful product launches were also commercial failures."
  },
  {
    "id": "gen-34-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All effective managers delegate tasks efficiently.",
      "Some managers who delegate tasks efficiently are not effective.",
      "No manager who delegates tasks efficiently fails to motivate their team.",
      "Lisa is a manager who motivates her team."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements can all be true simultaneously. Statement 1 describes effective managers. Statement 2 broadens the category of efficient delegators beyond just effective managers. Statement 3 connects efficient delegation to team motivation. Lisa, as a manager who motivates her team, could achieve this through efficient delegation (making her an effective or non-effective manager), or through other means entirely, all without contradicting any statement."
  },
  {
    "id": "gen-35-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a fern, it requires shade.",
      "No plant that requires shade can thrive in direct sunlight.",
      "All plants grown in the greenhouse are ferns.",
      "Some plants grown in the greenhouse thrive in direct sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all plants in the greenhouse are ferns. Statement 1 says that if a plant is a fern, it requires shade. Statement 2 states that no plant requiring shade can thrive in direct sunlight. This forms a chain: All greenhouse plants are ferns, which require shade, and thus cannot thrive in direct sunlight. This directly contradicts Statement 4, which claims some greenhouse plants thrive in direct sunlight."
  },
  {
    "id": "gen-35-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee who received a bonus also attended the training.",
      "If an employee attended the training, they completed the annual review.",
      "Every employee who completed the annual review met their quotas.",
      "Some employees who received a bonus failed to meet their quotas."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "According to Statement 1, every employee who received a bonus attended the training. Statement 2 says that employees who attended training completed their annual review. Statement 3 asserts that all employees who completed their annual review met their quotas. This chain implies that every employee who received a bonus met their quotas. This contradicts Statement 4, which claims some employees who received a bonus failed to meet their quotas."
  },
  {
    "id": "gen-35-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed algebra.",
      "Every student who passed algebra passed the geometry exam.",
      "Some students in advanced calculus failed the geometry exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that students in advanced calculus must have passed algebra. Statement 2 indicates that every student who passed algebra also passed the geometry exam. Therefore, it logically follows that all students in advanced calculus passed the geometry exam. This directly contradicts Statement 3, which claims some students in advanced calculus failed the geometry exam."
  },
  {
    "id": "gen-35-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every vehicle parked in lot C requires a special permit.",
      "If a vehicle has a special permit, it is registered with campus security.",
      "Every vehicle registered with campus security has a valid registration.",
      "Some vehicles parked in lot C have an expired registration."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that all vehicles in Lot C require a special permit. Statement 2 says that vehicles with special permits are registered with campus security. Statement 3 states that all vehicles registered with campus security have a valid registration. This forms a chain: All vehicles in Lot C require a special permit, are registered, and therefore have a valid registration. This contradicts Statement 4, which claims some vehicles in Lot C have an expired registration (which implies not having a valid registration)."
  },
  {
    "id": "gen-35-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All fruits that are red contain antioxidants.",
      "If a fruit contains antioxidants, it is beneficial for health.",
      "No fruit that is beneficial for health should be avoided by diabetics.",
      "Some red fruits should be avoided by diabetics."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that all red fruits contain antioxidants. Statement 2 links antioxidants to being beneficial for health. Statement 3 states that fruits beneficial for health should not be avoided by diabetics. This creates a chain: All red fruits contain antioxidants, are beneficial for health, and therefore should not be avoided by diabetics. This directly contradicts Statement 4, which claims some red fruits should be avoided by diabetics."
  },
  {
    "id": "gen-36-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members voted in favor of the proposal.",
      "No one who voted in favor supported the counter-amendment.",
      "At least one committee member supported the counter-amendment."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all committee members voted in favor. Statement 2 says no one who voted in favor supported the counter-amendment. Therefore, it must be true that no committee member supported the counter-amendment. This directly contradicts Statement 3, which claims at least one committee member did support the counter-amendment."
  },
  {
    "id": "gen-36-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students enrolled in advanced calculus are engineering majors.",
      "Some students enrolled in advanced calculus also take a music elective.",
      "Some engineering majors do not take a music elective."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means that the group of students in advanced calculus is a subset of engineering majors. Statement 2 means that within this subset, some also take a music elective. This implies that some engineering majors take a music elective, which is entirely consistent with Statement 3 that some engineering majors do not take a music elective; there can be different groups of engineering majors."
  },
  {
    "id": "gen-36-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an employee completed the safety training, they are eligible for promotion.",
      "No employee eligible for promotion works in the maintenance department.",
      "Every employee in the maintenance department completed the safety training."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 indicates that every employee in the maintenance department completed the safety training. Statement 1 states that anyone who completed the safety training is eligible for promotion. Therefore, it must be true that every employee in the maintenance department is eligible for promotion. This directly contradicts Statement 2, which says no employee eligible for promotion works in the maintenance department (meaning no employee in maintenance is eligible for promotion)."
  },
  {
    "id": "gen-36-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a traveler requires a visa, they must present a valid passport.",
      "All visitors from outside the continent require a visa.",
      "Some tourists entering the country do not present a valid passport."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 implies that all visitors from outside the continent require a visa. Statement 1 indicates that anyone who requires a visa must present a valid passport. So, all visitors from outside the continent must present a valid passport. Statement 3 claims some tourists do not present a valid passport; these tourists could be from within the continent or citizens, and thus do not need to be visitors from outside the continent, making the set consistent."
  },
  {
    "id": "gen-36-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mangoes grow on trees.",
      "All berries do not grow on trees.",
      "Some mangoes are berries."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that anything that is a mango grows on a tree. Statement 2 establishes that anything that is a berry does not grow on a tree. This means that nothing can be both a mango and a berry. This conclusion directly contradicts Statement 3, which claims some mangoes are berries."
  },
  {
    "id": "gen-36-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the orchestra are skilled musicians.",
      "Some performers in the concert are not skilled musicians.",
      "Some members of the orchestra are performers in the concert."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 tells us there are some individuals who are both orchestra members and concert performers. Statement 1 indicates that all orchestra members are skilled musicians. Therefore, these individuals (orchestra members who are also performers) are skilled musicians. This is consistent with Statement 2, which suggests that other performers in the concert might not be skilled musicians, as not all performers are necessarily orchestra members."
  },
  {
    "id": "gen-36-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a project is submitted on time, it will be reviewed by the board.",
      "No project reviewed by the board receives an immediate budget approval.",
      "Some new projects are submitted on time.",
      "All new projects receive an immediate budget approval."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 indicates that projects submitted on time are reviewed by the board. Statement 2 says that projects reviewed by the board do not receive immediate budget approval. Combining these, it means any project submitted on time will not receive immediate budget approval. Statement 3 tells us some new projects are submitted on time, meaning some new projects will not receive immediate budget approval. This contradicts Statement 4, which claims all new projects receive an immediate budget approval."
  },
  {
    "id": "gen-36-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a historical novel, it is well-researched.",
      "If a book is well-researched, it receives positive reviews.",
      "Some books in the library are historical novels.",
      "Some books in the library do not receive positive reviews."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that if a book is a historical novel, it receives positive reviews. Statement 3 confirms there are some historical novels in the library, meaning some library books receive positive reviews. This is consistent with Statement 4, which says some other library books (which are not necessarily historical novels) do not receive positive reviews. The two 'some' groups can exist simultaneously."
  },
  {
    "id": "gen-36-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who work remotely attend the weekly virtual meeting.",
      "Some software developers work remotely.",
      "No software developer attends the weekly virtual meeting."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 tells us that there is at least one software developer who works remotely. Statement 1 states that any employee who works remotely attends the weekly virtual meeting. Therefore, this specific software developer must attend the weekly virtual meeting. This conclusion directly contradicts Statement 3, which asserts that no software developer attends the weekly virtual meeting."
  },
  {
    "id": "gen-36-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No animals with wings are fish.",
      "Some pets are animals with wings.",
      "All goldfish are fish."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 indicates that some pets are animals with wings. Statement 1 states that no animals with wings are fish. This means those specific pets that have wings are not fish. Statement 3, about all goldfish being fish, introduces a category of animals (goldfish) that are fish, which is consistent with the existence of other animals (winged pets) that are not fish."
  },
  {
    "id": "gen-37-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it has broad leaves.",
      "No plant with delicate roots has broad leaves.",
      "All plants that grow in dry climates have delicate roots.",
      "Some plants that require daily watering grow in dry climates."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 indicates some plants requiring daily watering also grow in dry climates. From Statement 3, all plants growing in dry climates have delicate roots. From Statement 2, no plant with delicate roots has broad leaves. This creates a chain: plants requiring daily watering → grow in dry climates → have delicate roots → do not have broad leaves. This contradicts Statement 1, which claims that if a plant requires daily watering, it has broad leaves."
  },
  {
    "id": "gen-37-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All professional athletes train daily.",
      "If someone trains daily, they have high stamina.",
      "Some people with high stamina are not professional athletes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all professional athletes have high stamina. Statement 3 suggests that there are individuals with high stamina who are not professional athletes, which is entirely consistent with the first two statements. Having high stamina is not exclusive to professional athletes."
  },
  {
    "id": "gen-37-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is endorsed by the union, they will win the primary.",
      "Every candidate who wins the primary receives public funding.",
      "No candidate who receives public funding has to fundraise extensively.",
      "Some candidates endorsed by the union must fundraise extensively."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a candidate is endorsed by the union, they win the primary; if they win the primary, they receive public funding; if they receive public funding, they do not have to fundraise extensively. Therefore, all candidates endorsed by the union do not have to fundraise extensively. This directly contradicts Statement 4, which claims some candidates endorsed by the union must fundraise extensively."
  },
  {
    "id": "gen-37-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every novel with a complex plot is a bestseller.",
      "No bestseller is short.",
      "Some short novels are not bestsellers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that every novel with a complex plot is not short. Statement 3 claims some short novels are not bestsellers. This is consistent; there can be short novels that are not bestsellers (e.g., simple plot novels that don't sell well), and complex plot novels that are bestsellers and not short."
  },
  {
    "id": "gen-37-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All scientists are highly analytical.",
      "No highly analytical person enjoys abstract art.",
      "Some scientists enjoy abstract art."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, all scientists are highly analytical. From Statement 2, no highly analytical person enjoys abstract art. This implies that no scientists enjoy abstract art. Statement 3, however, asserts that some scientists do enjoy abstract art, creating a direct contradiction."
  },
  {
    "id": "gen-37-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student earns an A, they understand the material.",
      "All students who understand the material pass the course.",
      "Some students who earn an A also pass the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically imply that if a student earns an A, they pass the course. Therefore, it necessarily follows that all students who earn an A pass the course. Statement 3, which claims some students who earn an A also pass the course, is entirely consistent with this conclusion, as 'some' is implied by 'all'."
  },
  {
    "id": "gen-37-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents who live downtown commute by train.",
      "If a resident works at the tech park, they live downtown.",
      "No one who commutes by train owns a car.",
      "Some residents who work at the tech park own a car."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2, 1, and 3 form a logical chain: if a resident works at the tech park, they live downtown; if they live downtown, they commute by train; if they commute by train, they do not own a car. Thus, all residents who work at the tech park do not own a car. This directly contradicts Statement 4, which claims some residents who work at the tech park own a car."
  },
  {
    "id": "gen-37-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All rare books are valuable.",
      "Some valuable items are not rare books.",
      "No valuable item is easy to acquire.",
      "Some easy-to-acquire items are not rare books."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that all rare books are valuable and not easy to acquire. Statement 2 is consistent because other items besides rare books can be valuable. Statement 4 is also consistent because many items are easy to acquire and are not rare books, such as common paperbacks."
  },
  {
    "id": "gen-37-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate attends the debate, they are well-prepared.",
      "No candidate who is well-prepared avoids answering difficult questions.",
      "Every candidate who avoids answering difficult questions is evasive.",
      "Some candidates who attend the debate are evasive."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a candidate attends the debate, they are well-prepared; if they are well-prepared, they do not avoid answering difficult questions. The contrapositive of Statement 3 is: if a candidate is not evasive, they do not avoid answering difficult questions. Thus, candidates who attend the debate are well-prepared and do not avoid answering difficult questions, meaning they are not evasive. Therefore, all candidates who attend the debate are not evasive. This contradicts Statement 4, which claims some candidates who attend the debate are evasive."
  },
  {
    "id": "gen-37-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a mammal, it has fur.",
      "All animals that lay eggs do not have fur.",
      "Some animals that are mammals do not lay eggs.",
      "All animals that have fur are warm-blooded."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all mammals do not lay eggs, as mammals have fur (S1) and no animals with fur lay eggs (contrapositive of S2). Statement 3, 'Some animals that are mammals do not lay eggs,' is consistent with this. Statement 4 further implies that all mammals are warm-blooded (M → F → W), but this does not contradict any other statement."
  },
  {
    "id": "gen-38-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who receive a bonus completed their annual training.",
      "No employee who missed the annual review completed their annual training.",
      "Some employees who received a bonus missed the annual review."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that any employee receiving a bonus must have completed their annual training. Statement 2 implies that any employee who completed their annual training did not miss the annual review. Therefore, any employee receiving a bonus must not have missed the annual review. Statement 3 contradicts this by asserting that some employees received a bonus and also missed the annual review."
  },
  {
    "id": "gen-38-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All mathematicians are logical thinkers.",
      "Some logical thinkers are not mathematicians.",
      "No historians are logical thinkers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. Mathematicians are a subset of logical thinkers. Some logical thinkers are not mathematicians, which is consistent with the first statement. Historians are a separate group, distinct from logical thinkers, which also creates no conflict."
  },
  {
    "id": "gen-38-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in this aviary eats seeds.",
      "No bird that eats seeds also eats fruit.",
      "Some birds in this aviary do not eat fruit.",
      "Some birds in this aviary eat fruit."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says every bird eats seeds. Statement 2 says no bird that eats seeds also eats fruit. Together, these imply that no bird in this aviary eats fruit. Statement 4 directly contradicts this conclusion by stating that some birds in this aviary do eat fruit."
  },
  {
    "id": "gen-38-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who attended the lecture signed the attendance sheet.",
      "Some students who signed the attendance sheet did not attend the lecture.",
      "All students who completed the assignment attended the lecture."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Students who completed the assignment would have attended the lecture and signed the sheet. There could be other students who signed the sheet but did not attend, and those who attended but did not complete the assignment. No inherent contradiction exists."
  },
  {
    "id": "gen-38-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a candidate passed the first interview, they were invited for a second one.",
      "No candidate invited for a second interview was rejected.",
      "Every candidate who applied was rejected.",
      "Some candidates who applied passed the first interview."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies passing the first interview leads to a second invitation. Statement 2 implies a second invitation means not being rejected. So, passing the first interview means not being rejected. Statement 3 implies that if a candidate applied, they were rejected, which means if they were not rejected, they did not apply. Combining these, if a candidate passed the first interview, they were not rejected, and therefore they did not apply. Statement 4 directly contradicts this by stating some candidates who applied also passed the first interview."
  },
  {
    "id": "gen-38-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All registered voters have a valid ID.",
      "Some people with a valid ID are not registered voters.",
      "No person under 18 can vote."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true together. A person under 18 cannot vote and thus cannot be a registered voter. Some people might have a valid ID but choose not to register to vote, or are not eligible to vote. Registered voters are a subset of those with a valid ID. All these conditions can hold simultaneously."
  },
  {
    "id": "gen-38-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a book is overdue, it incurs a fine.",
      "All books borrowed this month are overdue.",
      "No book that incurs a fine was borrowed this month."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says overdue books incur a fine. Statement 2 says all books borrowed this month are overdue. Together, these imply that all books borrowed this month incur a fine. Statement 3, however, states that no book that incurs a fine was borrowed this month. This creates a direct contradiction with the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-38-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every chef in the restaurant received a positive review.",
      "Some kitchen staff are not chefs.",
      "No one who received a positive review was later dismissed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. Chefs received positive reviews and were not dismissed. Some kitchen staff could be chefs, while others are not, and this does not conflict with chefs' review status. There is no contradiction."
  },
  {
    "id": "gen-38-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All concert attendees purchased a ticket.",
      "No one who purchased a ticket was denied entry.",
      "Some people who were denied entry were concert attendees."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all concert attendees purchased a ticket. Statement 2 states that no one who purchased a ticket was denied entry. Therefore, it must be true that no concert attendee was denied entry. Statement 3 directly contradicts this conclusion by stating that some concert attendees were denied entry."
  },
  {
    "id": "gen-38-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits contain seeds.",
      "Some vegetables contain seeds.",
      "No vegetable is a fruit."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, an apple (fruit) contains seeds. A bell pepper (vegetable) contains seeds, but it is not a fruit. There is no contradiction between these facts."
  },
  {
    "id": "gen-39-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student who attended the advanced seminar submitted a final project.",
      "No student who submitted a final project received a failing grade.",
      "All students who did not attend the advanced seminar did not receive a failing grade.",
      "At least one student received a failing grade."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that any student who attended the advanced seminar did not receive a failing grade. Statement 3 implies that any student who did not attend the advanced seminar also did not receive a failing grade. Since every student either attended or did not attend the advanced seminar, these three statements combined logically establish that no student received a failing grade. Statement 4 directly contradicts this conclusion by asserting that at least one student received a failing grade."
  },
  {
    "id": "gen-39-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates received an interview.",
      "Some candidates who received an interview were not offered a position.",
      "No candidate who was not offered a position was deemed qualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 combined indicate that all qualified candidates received an interview (from Statement 1) and were offered a position (from the contrapositive of Statement 3: if a candidate was qualified, then they were offered a position). Statement 2 describes candidates who received an interview but were not offered a position. For this to be consistent, these candidates simply cannot be qualified. This scenario is entirely possible."
  },
  {
    "id": "gen-39-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every research study funded by the institute involved human participants.",
      "No study involving human participants can be approved without ethical review.",
      "All studies that undergo ethical review are published in peer-reviewed journals.",
      "Some research studies funded by the institute were not published in peer-reviewed journals."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a study was funded by the institute (Statement 1), then it involved human participants. If it involved human participants (Statement 2), then it underwent ethical review. If it underwent ethical review (Statement 3), then it was published in peer-reviewed journals. Therefore, every research study funded by the institute was published in peer-reviewed journals. Statement 4 directly contradicts this conclusion by stating that some research studies funded by the institute were not published in peer-reviewed journals."
  },
  {
    "id": "gen-39-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All premium subscribers have access to exclusive content.",
      "Some users with access to exclusive content are not premium subscribers.",
      "No user who paid an annual fee is denied access to exclusive content.",
      "All premium subscribers paid an annual fee."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. For instance, premium subscribers (Statement 1) paid an annual fee (Statement 4) and thus have exclusive content (Statement 3). The users described in Statement 2 (exclusive content, not premium subscriber) could be, for example, non-premium members who paid an annual fee for some other benefit that also grants exclusive content, or who received a promotional free trial. All statements can coexist in such a scenario."
  },
  {
    "id": "gen-39-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who attend the monthly meeting receive a productivity report.",
      "No employee who receives a productivity report is eligible for flexible hours.",
      "All employees who participate in the wellness program are eligible for flexible hours.",
      "Some employees who attend the monthly meeting participate in the wellness program."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 create a chain: If an employee attends the monthly meeting, they receive a productivity report, and therefore they are not eligible for flexible hours. Thus, attending the monthly meeting implies not being eligible for flexible hours. Statement 3 states that participating in the wellness program implies being eligible for flexible hours. Statement 4 describes an employee who attends the monthly meeting AND participates in the wellness program. For such an employee, the chain from Statements 1 and 2 implies they are NOT eligible for flexible hours, while Statement 3 implies they ARE eligible for flexible hours. This is a direct contradiction."
  },
  {
    "id": "gen-39-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare artifacts are protected by national heritage laws.",
      "No item protected by national heritage laws can be exported without special permission.",
      "Some items requiring special permission for export are not rare artifacts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 combine to imply that all rare artifacts are protected by national heritage laws and therefore require special permission for export. Statement 3 says that some items requiring special permission for export are not rare artifacts. This is consistent; the set of items requiring special permission for export can be larger than, and include, the set of rare artifacts."
  },
  {
    "id": "gen-39-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful startup company implemented a disruptive technology.",
      "No company that implemented a disruptive technology operated without significant venture capital.",
      "All companies that operated with significant venture capital entered the global market within five years.",
      "Some successful startup companies did not enter the global market within five years."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: If a company is a successful startup (Statement 1), then it implemented a disruptive technology. If it implemented a disruptive technology (Statement 2), then it operated with significant venture capital. If it operated with significant venture capital (Statement 3), then it entered the global market within five years. Therefore, every successful startup company entered the global market within five years. Statement 4 directly contradicts this conclusion by claiming that some successful startup companies did not enter the global market within five years."
  },
  {
    "id": "gen-39-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All executives attending the conference registered online.",
      "Some attendees who registered online did not submit a workshop proposal.",
      "No executive attending the conference submitted a workshop proposal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statement 1 and 3 establish that executives attending the conference registered online and did not submit workshop proposals. Statement 2 describes some attendees who registered online but did not submit a workshop proposal. These attendees could either be executives (consistent with 1 and 3) or non-executives who also registered online and chose not to submit a proposal. There is no contradiction."
  },
  {
    "id": "gen-39-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students enrolled in advanced placement courses are eligible for university credit.",
      "No student eligible for university credit is required to take the introductory exam.",
      "Every student who completed a prerequisite course is enrolled in an advanced placement course.",
      "Some students who completed a prerequisite course are required to take the introductory exam."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: If a student completed a prerequisite course (Statement 3), then they are enrolled in an advanced placement course. If they are enrolled in an advanced placement course (Statement 1), then they are eligible for university credit. If they are eligible for university credit (Statement 2), then they are not required to take the introductory exam. Therefore, any student who completed a prerequisite course is not required to take the introductory exam. Statement 4 directly contradicts this conclusion by stating that some students who completed a prerequisite course are required to take the introductory exam."
  },
  {
    "id": "gen-39-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees with full-time contracts receive health benefits.",
      "Some employees who receive health benefits do not have full-time contracts.",
      "No employee working less than 30 hours per week receives health benefits.",
      "Every employee with a full-time contract works at least 30 hours per week."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statements 1 and 4 indicate that employees with full-time contracts receive health benefits and work at least 30 hours per week. Statement 3 means that anyone receiving health benefits must work at least 30 hours per week (contrapositive). Statement 2 describes employees who receive health benefits but don't have full-time contracts; these employees must still work at least 30 hours per week (from Statement 3's implication), which is entirely possible for certain part-time roles or contractors."
  },
  {
    "id": "gen-40-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds of prey are carnivores.",
      "If an animal is a carnivore, it has sharp talons.",
      "No bird with sharp talons feeds exclusively on seeds.",
      "The aviary's newest resident is a bird of prey that feeds exclusively on seeds."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims the newest resident is a bird of prey. From Statement 1, all birds of prey are carnivores, and from Statement 2, all carnivores have sharp talons. Thus, the newest resident must have sharp talons. However, Statement 3 says no bird with sharp talons feeds exclusively on seeds, which contradicts Statement 4's claim that the resident feeds exclusively on seeds. Removing Statement 4 resolves this by removing the specific entity that creates the contradiction."
  },
  {
    "id": "gen-40-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research project with a large budget requires external funding.",
      "If a project requires external funding, it must undergo peer review.",
      "No project that undergoes peer review avoids public disclosure.",
      "Some research projects avoid public disclosure.",
      "Project X has a large budget."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Project X, having a large budget (Statement 5), must require external funding (Statement 1), undergo peer review (Statement 2), and therefore not avoid public disclosure (Statement 3). This is consistent. The existence of some projects that avoid public disclosure (Statement 4) implies they do not undergo peer review, and thus do not require external funding, and do not have a large budget. This is entirely possible, as not all projects are Project X or have a large budget."
  },
  {
    "id": "gen-40-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful writers have a unique voice.",
      "If someone has a unique voice, they will attract dedicated readers.",
      "No writer who attracts dedicated readers struggles with obscurity.",
      "John is a writer who has a unique voice but struggles with obscurity."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 claims John has a unique voice. According to Statement 2, if John has a unique voice, he will attract dedicated readers. According to Statement 3, no writer who attracts dedicated readers struggles with obscurity. Therefore, John cannot struggle with obscurity. This contradicts Statement 4's assertion that John struggles with obscurity. Removing Statement 4 resolves the conflict by removing the specific individual that creates the contradiction."
  },
  {
    "id": "gen-40-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have met their targets.",
      "If an employee meets their targets, they are eligible for promotion.",
      "Some employees are eligible for promotion even if they do not receive a bonus.",
      "Mark received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Mark received a bonus (Statement 4), which means he met his targets (Statement 1) and is eligible for promotion (Statement 2). This is consistent. Statement 3 suggests there are employees eligible for promotion who didn't receive a bonus. This is also consistent, as meeting targets (and thus eligibility for promotion) does not necessarily imply receiving a bonus; a bonus might have additional criteria beyond just meeting targets."
  },
  {
    "id": "gen-40-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful politician supports campaign finance reform.",
      "No one who supports campaign finance reform accepts corporate donations.",
      "Maria accepts corporate donations.",
      "If a politician does not accept corporate donations, they are honest.",
      "Maria is a successful politician."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 5 indicates Maria is a successful politician. According to Statement 1, every successful politician supports campaign finance reform, and from Statement 2, no one who supports campaign finance reform accepts corporate donations. Therefore, Maria cannot accept corporate donations. This directly contradicts Statement 3, which claims Maria accepts corporate donations. Removing Statement 3 resolves the inconsistency. Statement 4 is irrelevant to this contradiction."
  },
  {
    "id": "gen-40-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All professional athletes train daily.",
      "If someone trains daily, they have high stamina.",
      "Some people with high stamina are not professional athletes.",
      "Some professional athletes also work part-time jobs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, it follows that all professional athletes train daily and thus have high stamina. Statement 3, that some people with high stamina are not professional athletes, is consistent with this, simply implying that the group of people with high stamina is larger than just professional athletes. Statement 4, that some professional athletes work part-time, is also consistent as it does not contradict their daily training or high stamina. All statements can be true simultaneously."
  },
  {
    "id": "gen-40-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, its habitat is protected.",
      "No protected habitat permits commercial logging.",
      "All areas where commercial logging is permitted are accessible by paved roads.",
      "The natural preserve for the rare tree frog is endangered.",
      "The natural preserve for the rare tree frog permits commercial logging."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 states the preserve for the rare tree frog is endangered. According to Statement 1, its habitat must be protected. From Statement 2, no protected habitat permits commercial logging. Therefore, the natural preserve cannot permit commercial logging. This directly contradicts Statement 5, which claims the preserve permits commercial logging. Removing Statement 5 resolves the inconsistency. Statement 3 is not part of the contradictory chain."
  },
  {
    "id": "gen-40-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All artists who exhibit at the gallery must submit a portfolio.",
      "If an artist submits a portfolio, their work is reviewed by a panel.",
      "Some artists whose work is reviewed by a panel receive immediate payment.",
      "Clara is an artist who exhibits at the gallery."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Clara exhibits at the gallery (Statement 4), so she must submit a portfolio (Statement 1) and her work is reviewed by a panel (Statement 2). This is consistent. Statement 3, that some artists whose work is reviewed receive immediate payment, means it's possible for Clara to be one of them or not. There is no contradiction inherent in these statements."
  },
  {
    "id": "gen-40-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a student completes the advanced module, they cannot graduate with honors.",
      "All students who complete the advanced module are required to write a thesis.",
      "No student who writes a thesis submits their work late.",
      "Emily is a student who graduated with honors.",
      "Emily submitted her thesis work late."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 says Emily graduated with honors. From Statement 1, this means she must have completed the advanced module. According to Statement 2, all students who complete the advanced module are required to write a thesis. From Statement 3, no student who writes a thesis submits their work late. Therefore, Emily could not have submitted her thesis work late. This contradicts Statement 5. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-40-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All products certified organic contain no artificial preservatives.",
      "If a product contains no artificial preservatives, it has a shorter shelf life.",
      "Some products with a shorter shelf life are not certified organic.",
      "The new juice blend contains artificial preservatives."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1, if a product contains artificial preservatives (like the new juice blend in Statement 4), it cannot be certified organic. This is consistent. From Statement 2, if a product contains artificial preservatives, it does not necessarily mean it has a longer or shorter shelf life, as the condition 'no artificial preservatives' is required for a shorter shelf life, not 'artificial preservatives.' Statement 3, that some products with a shorter shelf life are not organic, is also consistent as the set of products with a shorter shelf life is not exclusive to organic products. All statements can be true simultaneously."
  },
  {
    "id": "gen-41-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who registered for the workshop received a confirmation email.",
      "No one who received a confirmation email missed the first session.",
      "Some students who registered for the workshop missed the first session."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all registered students received an email. Statement 2 says no one who received an email missed the first session. These two statements together imply that all registered students did not miss the first session. This directly contradicts Statement 3, which claims some registered students did miss the first session."
  },
  {
    "id": "gen-41-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted their portfolios on time.",
      "Some applicants who submitted their portfolios on time were not successful.",
      "Maria is a successful applicant."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Maria, being a successful applicant, must have submitted her portfolio on time (from Statement 1). Statement 2 merely allows for other applicants who submitted on time but were not successful, which does not conflict with Maria's situation or the general rule."
  },
  {
    "id": "gen-41-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every participant who completed the survey received a prize.",
      "No participant who answered inaccurately received a prize.",
      "Some participants both completed the survey and answered inaccurately."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that anyone who completed the survey received a prize. Statement 2 states that no one who answered inaccurately received a prize. Therefore, a participant cannot both complete the survey (and get a prize) and answer inaccurately (and not get a prize). Statement 3 claims that some participants did both, which creates a contradiction."
  },
  {
    "id": "gen-41-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird builds a nest in a tree, it will lay eggs.",
      "All robins are birds that build nests in trees.",
      "Some birds that lay eggs are not robins."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statement 1 and 2, it follows that all robins will lay eggs. Statement 3 simply asserts that there are other types of birds besides robins that lay eggs, which is entirely possible and does not conflict with the other two statements."
  },
  {
    "id": "gen-41-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members approved the budget proposal.",
      "No one who approved the budget proposal raised objections.",
      "Some committee members raised objections."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that all committee members approved the budget. Statement 2 says that anyone who approved the budget did not raise objections. Therefore, it must be true that no committee member raised objections. This directly contradicts Statement 3, which asserts that some committee members did raise objections."
  },
  {
    "id": "gen-41-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2010 has an anti-lock braking system.",
      "Some cars with anti-lock braking systems were manufactured before 2010.",
      "The red sedan was manufactured in 2012."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements are consistent. The red sedan, manufactured in 2012, would have an anti-lock braking system (from Statement 1). Statement 2 simply means that having an anti-lock braking system is not exclusive to newer cars, which does not create any conflict."
  },
  {
    "id": "gen-41-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a dog is a terrier, it is a playful animal.",
      "No animal that is kept indoors all day is a playful animal.",
      "Fido is a terrier and is kept indoors all day."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all terriers are playful animals. Statement 2 states that no animal kept indoors all day is a playful animal. Combined, this means that no terrier can be kept indoors all day. Statement 3, however, asserts that Fido is both a terrier and is kept indoors all day, which is a contradiction."
  },
  {
    "id": "gen-41-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful chess players study strategy.",
      "Some people who study strategy are not successful chess players.",
      "If a person studies strategy, they might win tournaments."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 and 2 are consistent, as it's possible for all successful players to study strategy while some who study strategy are not successful. Statement 3 uses the word 'might,' indicating possibility rather than certainty, and therefore does not create a conflict."
  },
  {
    "id": "gen-41-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every employee who attended the training received a certificate.",
      "All employees who received a certificate were eligible for promotion.",
      "Some employees who attended the training were not eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 tells us that all employees who attended the training received a certificate. Statement 2 says that all employees who received a certificate were eligible for promotion. Together, these statements imply that all employees who attended the training were eligible for promotion. This directly contradicts Statement 3, which claims some employees who attended the training were not eligible for promotion."
  },
  {
    "id": "gen-41-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All mammals are vertebrates.",
      "No fish are mammals.",
      "Whales are mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. From Statement 3 and Statement 1, it follows that whales are vertebrates. From Statement 3 and Statement 2, it follows that whales are not fish. None of these implications create any contradictions among the given statements."
  },
  {
    "id": "gen-42-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a performer receives a standing ovation, they are eligible for the 'Star of the Show' award.",
      "No performer who forgot their lines is eligible for the 'Star of the Show' award.",
      "Every performer in the festival received a standing ovation.",
      "Some performers in the festival forgot their lines."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, every performer in the festival received a standing ovation. From Statement 1, anyone receiving a standing ovation is eligible for the 'Star of the Show' award. Therefore, every performer in the festival is eligible for the award. However, Statement 4 claims some performers in the festival forgot their lines, and Statement 2 says no one who forgot their lines is eligible for the award. This leads to the conclusion that some performers in the festival are NOT eligible for the award, which contradicts the earlier conclusion. Removing Statement 4 resolves this contradiction by removing the assertion that some performers forgot their lines."
  },
  {
    "id": "gen-42-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All healthy adult monarch butterflies migrate south for the winter.",
      "If a monarch butterfly migrates south, it must feed on milkweed plants during its larval stage.",
      "Some monarch butterflies feed on milkweed plants during their larval stage.",
      "Some monarch butterflies are not healthy adults."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, all healthy adult monarch butterflies migrate south and therefore feed on milkweed plants. Statement 3 confirms that some monarch butterflies feed on milkweed, which could include the healthy adults. Statement 4 indicates that not all monarch butterflies are healthy adults, which is also consistent; the monarch butterflies mentioned in Statement 3 could be either healthy adults or not healthy adults, and there is no information that forces a contradiction."
  },
  {
    "id": "gen-42-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is valuable, it is kept in a secure vault.",
      "No artwork displayed publicly is kept in a secure vault.",
      "All artworks kept in a secure vault are insured.",
      "The Emerald Idol is a valuable artwork displayed publicly."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts that 'The Emerald Idol' is both a valuable artwork and displayed publicly. From Statement 1, if it is valuable, 'The Emerald Idol' must be kept in a secure vault. However, from Statement 2, if it is displayed publicly, 'The Emerald Idol' cannot be kept in a secure vault. This creates a contradiction: 'The Emerald Idol' cannot both be kept in a secure vault and not be kept in a secure vault simultaneously. Removing Statement 4, which makes the specific assertion about 'The Emerald Idol' having both properties, resolves the inconsistency. Statement 3 is irrelevant to this specific contradiction."
  },
  {
    "id": "gen-42-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All research papers submitted for the conference undergo peer review.",
      "If a research paper contains novel findings, it is published in a journal.",
      "Some research papers published in a journal do not undergo peer review.",
      "Every research paper submitted for the conference contains novel findings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 4 and 2, any paper submitted for the conference contains novel findings and is thus published in a journal. Statement 1 indicates that these papers also undergo peer review. Statement 3 notes that some published papers do not undergo peer review; these papers are simply not among those submitted for the conference, which is entirely consistent with the other statements."
  },
  {
    "id": "gen-42-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of the Oakwood neighborhood own at least one pet.",
      "If a household owns a pet, it subscribes to the local veterinary service.",
      "No household that subscribes to the local veterinary service is eligible for municipal garden subsidies.",
      "Some residents of the Oakwood neighborhood are eligible for municipal garden subsidies."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all residents of the Oakwood neighborhood own a pet. From Statement 2, all households that own a pet subscribe to the local veterinary service. From Statement 3, no household subscribing to the local veterinary service is eligible for municipal garden subsidies. This chain implies that all residents of the Oakwood neighborhood are NOT eligible for municipal garden subsidies. Statement 4 directly contradicts this, claiming that some residents ARE eligible. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the city council attend public hearings.",
      "If someone attends public hearings, they are informed about local issues.",
      "Some people informed about local issues are not members of the city council.",
      "Every person informed about local issues attends public hearings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statement 1 and 2, all city council members attend public hearings and are informed about local issues. Statement 4 states that everyone informed about local issues attends public hearings, which, combined with Statement 2, implies that attending public hearings and being informed about local issues are equivalent conditions. Statement 3 merely states that some people informed about local issues are not city council members, which is consistent; there can be informed individuals who are not part of the council."
  },
  {
    "id": "gen-42-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A musician performs in the orchestra only if they passed the audition.",
      "Unless a musician performs in the orchestra, they do not receive a stipend.",
      "Every musician who passed the audition receives a stipend.",
      "Some musicians who did not pass the audition receive a stipend."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 means that if a musician performs in the orchestra, they passed the audition. Statement 2 means that if a musician receives a stipend, they perform in the orchestra. Statement 3 means that if a musician passed the audition, they receive a stipend. Together, these imply that passing the audition, performing in the orchestra, and receiving a stipend are all equivalent conditions. Therefore, if a musician did NOT pass the audition, they do NOT receive a stipend. Statement 4 directly contradicts this by asserting that some musicians who did not pass the audition DO receive a stipend. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs possess a strong risk tolerance.",
      "If a person has a strong risk tolerance, they are comfortable with uncertainty.",
      "Some people comfortable with uncertainty are not successful entrepreneurs.",
      "No one who is comfortable with uncertainty avoids taking risks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, all successful entrepreneurs possess a strong risk tolerance and are therefore comfortable with uncertainty. Statement 3 asserts that some people comfortable with uncertainty are not successful entrepreneurs, which is consistent; the group of people comfortable with uncertainty is not necessarily limited to successful entrepreneurs. Statement 4 states that all people comfortable with uncertainty take risks, which adds an additional consistent attribute."
  },
  {
    "id": "gen-42-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds native to this region nest in deciduous trees.",
      "If a bird nests in a deciduous tree, it eats primarily insects.",
      "No bird that eats primarily insects migrates in winter.",
      "Some birds that migrate in winter are native to this region."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, all birds native to this region nest in deciduous trees. From Statement 2, all birds that nest in deciduous trees eat primarily insects. From Statement 3, no bird that eats primarily insects migrates in winter. This chain implies that all birds native to this region do NOT migrate in winter. Statement 4, however, states that some birds that migrate in winter ARE native to this region. This means some birds native to this region both migrate and do not migrate in winter, which is a contradiction. Removing Statement 4 resolves this by removing the assertion that some migratory birds are native to the region."
  },
  {
    "id": "gen-42-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses invest in employee training.",
      "If a business invests in employee training, it prioritizes innovation.",
      "Some businesses that prioritize innovation are not successful businesses.",
      "Every business that prioritizes innovation is well-managed."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. From Statements 1 and 2, all successful businesses invest in employee training and thus prioritize innovation. Statement 3 acknowledges that some businesses that prioritize innovation are not successful, which is consistent; prioritizing innovation does not guarantee success. Statement 4 adds that all businesses prioritizing innovation are well-managed, which further refines the category of 'businesses that prioritize innovation' without creating a conflict."
  },
  {
    "id": "gen-43-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All musicians are artists.",
      "No artist is a scientist.",
      "Some musicians are scientists."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all musicians are artists. Statement 2 says no artist is a scientist. This implies that no musician is a scientist. Statement 3 directly contradicts this, claiming some musicians are scientists. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every cat enjoys playing with string.",
      "Some animals that enjoy playing with string are not cats.",
      "No dog is a cat."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all cats to enjoy string, for other animals (like ferrets) to also enjoy string but not be cats, and for dogs to not be cats. No logical contradiction arises."
  },
  {
    "id": "gen-43-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a bird is a robin, then it lays blue eggs.",
      "No bird that lays blue eggs is a migratory bird.",
      "All robins are migratory birds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that robins lay blue eggs. Statement 2 states that birds laying blue eggs are not migratory. This logically leads to the conclusion that robins are not migratory birds. This conclusion directly contradicts Statement 3, which asserts all robins are migratory birds. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students in the class submitted their homework.",
      "Some students in the class also presented a project.",
      "No student who presented a project failed the course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible for all students to submit homework, for a subset of those students to also present projects, and for none of the project-presenting students to fail the course. The students who did not present projects could have passed or failed without creating a contradiction."
  },
  {
    "id": "gen-43-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every employee who received an award attended the gala.",
      "No one who attended the gala missed the congratulatory speech.",
      "Some employees who received an award missed the congratulatory speech."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all award recipients attended the gala. Statement 2 states that no one who attended the gala missed the congratulatory speech. Therefore, it must be true that no employee who received an award missed the congratulatory speech. Statement 3 directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of the building have a parking permit.",
      "Some residents of the building also have a bicycle.",
      "No one who has a bicycle is eligible for a motorcycle permit.",
      "All residents with a parking permit are eligible for a motorcycle permit."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "From Statement 1, all residents have a parking permit. From Statement 4, all residents with a parking permit are eligible for a motorcycle permit. Combining these, all residents are eligible for a motorcycle permit. However, Statement 2 says some residents have a bicycle, and Statement 3 says no one with a bicycle is eligible for a motorcycle permit. Combining these means some residents are not eligible for a motorcycle permit. This contradicts the earlier conclusion. Removing Statement 2 resolves the inconsistency, as there would then be no residents with bicycles to prevent eligibility."
  },
  {
    "id": "gen-43-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants in the study were over 30 years old.",
      "Some participants in the study had prior medical conditions.",
      "No one with prior medical conditions was allowed to take the new medication.",
      "The new medication was only given to participants over 30 years old."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. All participants are over 30 (Statement 1). Some of these participants have medical conditions (Statement 2) and are not allowed the medication (Statement 3). Other participants, also over 30, do not have medical conditions and could be allowed the medication. Statement 4 simply reiterates a condition already met by all participants."
  },
  {
    "id": "gen-43-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "Every animal that barks is a dog.",
      "There is an animal that barks but is not a mammal."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every animal that barks is a dog. Statement 1 indicates that all dogs are mammals. Combining these, it logically follows that every animal that barks is a mammal. This directly contradicts Statement 4, which claims there is an animal that barks but is not a mammal. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All teachers attended the faculty meeting.",
      "Some faculty members do not teach.",
      "No one who attended the faculty meeting was absent from campus for the entire day.",
      "Some teachers were absent from campus for part of the day."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Teachers attended the meeting, meaning they were present on campus for at least part of the day. Therefore, they were not absent for the entire day, satisfying Statement 3. It's possible for some teachers to be present for the meeting and then leave, being absent for part of the day, without having been absent for the *entire* day. Other faculty members might not be teachers. All statements can simultaneously be true."
  },
  {
    "id": "gen-43-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who passed the exam studied diligently.",
      "No student who studied diligently failed the course.",
      "Some students passed the exam, but failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that students who passed the exam studied diligently. Statement 2 states that students who studied diligently did not fail the course. Therefore, it must be true that students who passed the exam did not fail the course. Statement 3 directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-44-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All owls hunt at night.",
      "No animal that hunts at night is awake during the day.",
      "At least one animal that is awake during the day is an owl."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls hunt at night. Statement 2 says no animal that hunts at night is awake during the day. This logically implies that no owl is awake during the day. However, Statement 3 asserts that at least one animal awake during the day is an owl, which directly contradicts the conclusion that no owl is awake during the day."
  },
  {
    "id": "gen-44-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur has a strong work ethic.",
      "Some people with a strong work ethic are not successful entrepreneurs.",
      "Not all people with a strong work ethic become wealthy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes a necessary condition for successful entrepreneurs. Statement 2 clarifies that the condition is not sufficient. Statement 3 indicates that having a strong work ethic does not guarantee wealth. These conditions can all be true simultaneously."
  },
  {
    "id": "gen-44-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All plants with thorns require direct sunlight.",
      "No plant that requires direct sunlight can grow in shade.",
      "Some roses can grow in shade."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a plant is a rose, it has thorns (1); if it has thorns, it requires direct sunlight (2); if it requires direct sunlight, it cannot grow in shade (3). This means that no rose can grow in shade. Statement 4, however, claims that some roses can grow in shade, which directly contradicts this conclusion."
  },
  {
    "id": "gen-44-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "Not all students who received a good grade studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 indicates a characteristic of students who passed. Statement 2 specifies that studying diligently is not a guarantee of passing. Statement 3 implies that good grades can be achieved without diligent study. There is no logical contradiction among these claims."
  },
  {
    "id": "gen-44-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful author is a disciplined writer.",
      "No disciplined writer submits messy manuscripts.",
      "Some authors who submit messy manuscripts are also successful authors."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: if an author is successful, they are a disciplined writer (1), and no disciplined writer submits messy manuscripts (2). Therefore, no successful author submits messy manuscripts. Statement 3, however, asserts that some authors who submit messy manuscripts are successful authors, which directly contradicts this derived conclusion."
  },
  {
    "id": "gen-44-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All effective leaders inspire confidence.",
      "Some individuals who inspire confidence are not effective leaders.",
      "Inspiring confidence is necessary for strong team cohesion."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 sets a characteristic of effective leaders. Statement 2 shows that the characteristic is not unique to them. Statement 3 establishes a prerequisite for team cohesion. These conditions can coexist without contradiction; for example, someone could inspire confidence and team cohesion without being an effective leader."
  },
  {
    "id": "gen-44-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful managers are excellent communicators.",
      "No excellent communicator struggles with public speaking.",
      "Every manager with poor team morale struggles with public speaking.",
      "Some successful managers have poor team morale."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all successful managers do not struggle with public speaking. Statement 4 indicates that there is at least one successful manager who also has poor team morale. For this manager, according to Statement 3, they must struggle with public speaking. This creates a contradiction: a successful manager both struggles and does not struggle with public speaking."
  },
  {
    "id": "gen-44-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid arguments have true premises.",
      "Some arguments with true premises are not valid.",
      "No argument with a false conclusion is a valid argument."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 defines a property of valid arguments. Statement 2 clarifies that having true premises is not sufficient for an argument to be valid. Statement 3 indicates that a valid argument cannot lead to a false conclusion. There is no logical conflict among these definitions and conditions."
  },
  {
    "id": "gen-44-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every resident of the building has a parking permit.",
      "No one with a parking permit parks on the street.",
      "If someone parks in the visitor lot, they do not have a parking permit.",
      "Some residents of the building park in the visitor lot."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Let's consider a resident who parks in the visitor lot, as specified by Statement 4. According to Statement 1, every resident has a parking permit. So, this resident has a parking permit. However, Statement 3 states that if someone parks in the visitor lot, they do not have a parking permit. This means the resident in question both has and does not have a parking permit, which is a direct contradiction."
  },
  {
    "id": "gen-44-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All plants that thrive in drought conditions have deep root systems.",
      "Some plants with deep root systems do not thrive in drought conditions.",
      "If a plant has a deep root system, it conserves water effectively.",
      "Not every plant that conserves water effectively has deep root systems."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 identifies a characteristic of drought-thriving plants. Statement 2 clarifies that deep roots are not exclusive to drought-thriving plants. Statement 3 describes an advantage of deep root systems. Statement 4 indicates that water conservation is not solely dependent on deep root systems. No contradiction arises from these conditions."
  },
  {
    "id": "gen-45-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified, they pass the interview.",
      "A candidate passes the interview only if they receive a recommendation.",
      "Every qualified candidate lacks a recommendation."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that if a candidate is qualified, they pass the interview. Statement 2 means that if a candidate passes the interview, they receive a recommendation. Together, these imply that if a candidate is qualified, they receive a recommendation. Statement 3, however, states that every qualified candidate lacks a recommendation, which directly contradicts this derived conclusion."
  },
  {
    "id": "gen-45-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All owls hunt at night.",
      "If an animal hunts at night, it has excellent night vision.",
      "Some animals with excellent night vision are not owls.",
      "No animal with excellent night vision hunts during the day."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all owls have excellent night vision. Statement 3 is consistent, as it is possible for some animals with excellent night vision to not be owls. Statement 4 provides an additional characteristic of animals with excellent night vision, which is not contradicted by any other statement. All statements can be true simultaneously."
  },
  {
    "id": "gen-45-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "All plants with thorns require careful handling.",
      "Some plants that require careful handling are not roses.",
      "There is at least one rose that does not require careful handling."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that if a plant is a rose, it has thorns. Statement 2 says that all plants with thorns require careful handling. Together, these imply that all roses require careful handling. Statement 4, however, states that there is at least one rose that does not require careful handling, which directly contradicts this conclusion."
  },
  {
    "id": "gen-45-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless an item is fragile, it is shipped by standard mail.",
      "If an item is shipped by standard mail, it is not insured.",
      "Some fragile items are insured.",
      "No item is both fragile and not insured."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that if an item is not fragile, it is not insured. The contrapositive of this means that if an item is insured, it is fragile. Statement 4 means that if an item is fragile, it must be insured. Therefore, an item is fragile if and only if it is insured. Statement 3 (Some fragile items are insured) is perfectly consistent with this relationship. All statements can be true simultaneously."
  },
  {
    "id": "gen-45-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All engineers on the team attended the leadership summit.",
      "If an engineer attended the leadership summit, they submitted a project proposal.",
      "No engineer who submitted a project proposal was denied promotion.",
      "Some engineers on the team were denied promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that all engineers on the team attended the leadership summit. Statement 2 says that if an engineer attended the leadership summit, they submitted a project proposal. Statement 3 says that no engineer who submitted a project proposal was denied promotion. Together, these imply that all engineers on the team were not denied promotion. Statement 4, however, claims that some engineers on the team were denied promotion, which directly contradicts this conclusion."
  },
  {
    "id": "gen-45-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for the scholarship, they have a GPA of 3.8 or higher.",
      "All students with a GPA of 3.8 or higher have completed at least 60 credits.",
      "Some students who have completed at least 60 credits are not eligible for the scholarship.",
      "No student eligible for the scholarship has completed fewer than 60 credits."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all students eligible for the scholarship have completed at least 60 credits. Statement 4 reiterates this point, which is consistent. Statement 3 allows for students who completed 60+ credits but are not scholarship-eligible, which is also consistent with the overall logic. All statements can be true simultaneously."
  },
  {
    "id": "gen-45-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants submitted a strong portfolio.",
      "No applicant who failed to meet the language requirement submitted a strong portfolio.",
      "Some applicants who met the language requirement were unsuccessful.",
      "Every applicant who was successful also failed to meet the language requirement."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that all successful applicants submitted a strong portfolio. Statement 2 means that if an applicant submitted a strong portfolio, they met the language requirement. Together, these imply that every successful applicant met the language requirement. Statement 4, however, claims that every applicant who was successful also failed to meet the language requirement, which directly contradicts this conclusion."
  },
  {
    "id": "gen-45-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a movie is a classic, it is widely acclaimed.",
      "Every movie that is widely acclaimed also has a high IMDb rating.",
      "Some movies with a high IMDb rating are not classics.",
      "No movie that is a classic lacks a high IMDb rating."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all classic movies have a high IMDb rating. Statement 4 reiterates this point, which is consistent. Statement 3 indicates that there are some movies with a high IMDb rating that are not classics, which is also consistent with the general principle that the category of movies with high IMDb ratings can be broader than just classic movies. All statements can be true simultaneously."
  },
  {
    "id": "gen-45-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All citizens eligible to vote are registered.",
      "If a citizen is registered, they possess a valid ID.",
      "No citizen who possesses a valid ID is unable to cast a ballot.",
      "Some citizens eligible to vote are unable to cast a ballot."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says that all citizens eligible to vote are registered. Statement 2 says that if a citizen is registered, they possess a valid ID. Statement 3 says that no citizen who possesses a valid ID is unable to cast a ballot. Together, these imply that all citizens eligible to vote are able to cast a ballot. Statement 4, however, states that some citizens eligible to vote are unable to cast a ballot, which directly contradicts this conclusion."
  },
  {
    "id": "gen-45-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a substance is a metal, it conducts electricity.",
      "All substances that conduct electricity are solids at room temperature.",
      "Some solids at room temperature are not metals.",
      "No metal is a liquid at room temperature."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all metals are solids at room temperature. Statement 3 is consistent, as it means the group of solids at room temperature can include substances other than metals. Statement 4 provides an additional characteristic of metals, which does not contradict any other statement and is consistent with metals being solids at room temperature. All statements can be true simultaneously."
  },
  {
    "id": "gen-46-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy chasing squirrels.",
      "No animal that enjoys chasing squirrels is afraid of cats.",
      "Some dogs are afraid of cats."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that all dogs are not afraid of cats. Statement 3, which claims some dogs are afraid of cats, directly contradicts this conclusion."
  },
  {
    "id": "gen-46-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires daily watering, it is a tropical species.",
      "All ferns are tropical species.",
      "Some plants that do not require daily watering are ferns."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Ferns are tropical, and some might not need daily watering, which is consistent with the rule that plants requiring daily watering are tropical (but not all tropical plants require daily watering)."
  },
  {
    "id": "gen-46-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the hiking club owns a backpack.",
      "No one who owns a backpack is afraid of heights.",
      "Sarah is a member of the hiking club.",
      "Sarah is afraid of heights."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that Sarah is not afraid of heights. Statement 4, which claims Sarah is afraid of heights, directly contradicts this conclusion."
  },
  {
    "id": "gen-46-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "Lisa passed the exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Lisa passed the exam, so she studied diligently. It is also consistent that some other students studied diligently but did not pass."
  },
  {
    "id": "gen-46-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "No animal that has opposable thumbs is a rodent.",
      "Some primates are rodents."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no primates are rodents. Statement 3, which claims some primates are rodents, directly contradicts this conclusion."
  },
  {
    "id": "gen-46-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds can fly.",
      "Some creatures that can fly are not birds.",
      "No birds are mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, bats can fly but are not birds, consistent with Statements 1 and 2. Statement 3 is also consistent with birds being distinct from mammals."
  },
  {
    "id": "gen-46-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful entrepreneur has strong leadership skills.",
      "Anyone with strong leadership skills is an excellent communicator.",
      "Some successful entrepreneurs are not excellent communicators."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that every successful entrepreneur is an excellent communicator. Statement 3, which claims some successful entrepreneurs are not excellent communicators, directly contradicts this conclusion."
  },
  {
    "id": "gen-46-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "No mammals have feathers.",
      "Some animals with feathers are not birds.",
      "Some mammals can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For instance, birds have feathers, mammals don't. Insects could be animals with feathers that are not birds. Bats are mammals that can fly, and they do not have feathers, consistent with the other statements."
  },
  {
    "id": "gen-46-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All reptiles are cold-blooded animals.",
      "Some cold-blooded animals are not reptiles.",
      "Some reptiles live in deserts."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, fish are cold-blooded animals but not reptiles. Some reptiles, being cold-blooded, can live in deserts."
  },
  {
    "id": "gen-46-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a mystery novel, it has a thrilling plot.",
      "All books with a thrilling plot are popular among readers.",
      "No historical fiction books are popular among readers.",
      "Some mystery novels are also historical fiction."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that all mystery novels are popular among readers. If statement 4 is true, then some historical fiction books are mystery novels and thus popular. However, statement 3 claims no historical fiction books are popular, creating a direct contradiction."
  },
  {
    "id": "gen-47-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every research paper submitted before the deadline receives initial feedback.",
      "No paper receiving initial feedback is automatically accepted.",
      "Papers that are not automatically accepted always require a secondary review.",
      "If a paper requires a secondary review, its authors must attend an oral defense.",
      "Some research papers submitted before the deadline never require authors to attend an oral defense."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 create a chain of implications: if a paper is submitted before the deadline, then it receives initial feedback, then it is not automatically accepted, then it requires a secondary review, and therefore its authors must attend an oral defense. This implies all papers submitted before the deadline require an oral defense. Statement 5 contradicts this by claiming some of these papers do not require an oral defense. Removing Statement 5 resolves this direct contradiction."
  },
  {
    "id": "gen-47-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student passes the final exam, they receive a course certificate.",
      "No student who missed more than three classes received a course certificate.",
      "Every student enrolled in this program passed the final exam.",
      "Some students enrolled in this program missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3 and 1 together imply that every student in the program received a course certificate. Statement 2 implies that no student who missed more than three classes received a course certificate. Statement 4 indicates that some students in the program did miss more than three classes. For these specific students, the logic leads to a contradiction: they both received a certificate and did not receive a certificate. Removing Statement 4 makes the set consistent, as the group of students causing the contradiction is no longer asserted to exist."
  },
  {
    "id": "gen-47-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle is a car, it has four wheels.",
      "Vehicles with four wheels are always registered.",
      "No registered vehicle is exempt from road tax.",
      "Every vehicle in the company fleet is a car.",
      "At least one vehicle in the company fleet is exempt from road tax."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 create a chain of implications: every vehicle in the company fleet is a car, therefore has four wheels, is registered, and is not exempt from road tax. This means all vehicles in the company fleet are not exempt from road tax. Statement 5 directly contradicts this by asserting that at least one vehicle in the company fleet *is* exempt from road tax. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-47-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the alarm sounds, the security system is active.",
      "If the security system is active, all entry points are locked.",
      "No entry point with a triggered sensor is ever locked.",
      "The alarm sounded earlier today.",
      "At least one entry point sensor was triggered earlier today."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 4 together imply that since the alarm sounded, the security system is active and therefore all entry points are locked. Statement 3 asserts that any entry point with a triggered sensor is not locked. Statement 5 states that at least one entry point sensor was triggered. This leads to a contradiction: that specific entry point must be both locked (from the alarm sounding) and not locked (from its sensor being triggered). Removing Statement 5 resolves this by removing the assertion of a triggered sensor."
  },
  {
    "id": "gen-47-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A permit is issued only if the application is complete.",
      "If an application is complete, all supporting documents are attached.",
      "No supporting documents are attached unless they are officially stamped.",
      "A permit was issued for Project Alpha.",
      "Not all supporting documents for Project Alpha were officially stamped."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 form a chain of implications: since a permit was issued for Project Alpha, its application was complete, therefore all supporting documents were attached, and thus all those documents were officially stamped. This leads to the conclusion that all supporting documents for Project Alpha were officially stamped. Statement 5 directly contradicts this by stating that not all supporting documents for Project Alpha were officially stamped. Removing Statement 5 resolves the contradiction."
  },
  {
    "id": "gen-48-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who scored above 90% received a commendation.",
      "No student who received a commendation also received a penalty.",
      "Some students who scored above 90% received a penalty."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no student who scored above 90% received a penalty. Statement 3 directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lawyers are fluent in at least two languages.",
      "Some people fluent in at least two languages are not lawyers.",
      "All professors are lawyers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates all lawyers are fluent in at least two languages. Statement 2 says some people fluent in at least two languages are not lawyers, which is consistent. Statement 3 asserts all professors are lawyers. These statements can all be true simultaneously. There is no contradiction."
  },
  {
    "id": "gen-48-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All participants who completed the survey received a gift voucher.",
      "Some participants did not receive a gift voucher.",
      "Every participant completed the survey."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 3 together imply that every participant received a gift voucher. Statement 2 directly contradicts this conclusion by asserting that some participants did not receive a gift voucher. Removing Statement 2 resolves the inconsistency."
  },
  {
    "id": "gen-48-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds lay eggs.",
      "Some animals that lay eggs can fly.",
      "Some birds can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that all birds lay eggs. Statement 2 confirms that some animals that lay eggs can fly. It is entirely possible for some birds (which are egg-laying animals) to be among those that can fly, making Statement 3 consistent with the others. There is no contradiction."
  },
  {
    "id": "gen-48-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a document contains classified information, it must be stored in a secure vault.",
      "No document stored in a secure vault is ever accessible to the public.",
      "Some documents containing classified information are accessible to the public."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a document contains classified information, it is not accessible to the public. Statement 3 directly contradicts this conclusion by stating that some documents containing classified information are accessible to the public. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All scientists are researchers.",
      "Some researchers are not academics.",
      "All engineers are academics."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All scientists are researchers. Some researchers are not academics. All engineers are academics. These statements can all be true simultaneously. For example, some researchers who are not academics might be scientists, or they might be a different group of researchers. Engineers, being academics, are distinct from those non-academic researchers. There is no logical contradiction."
  },
  {
    "id": "gen-48-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every vehicle parked in this lot requires a permit.",
      "No vehicle with a permit is allowed to stay overnight.",
      "At least one vehicle in this lot is allowed to stay overnight."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that no vehicle parked in this lot is allowed to stay overnight. Statement 3 directly contradicts this by claiming that at least one vehicle in this lot is allowed to stay overnight. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No musicians are athletes.",
      "Some artists are musicians.",
      "Some artists are not athletes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 specifies that no musicians are athletes. Statement 2 indicates that some artists are musicians. It logically follows from these two statements that those artists who are musicians must also not be athletes, which means Statement 3, \"Some artists are not athletes,\" is a direct consequence and thus consistent with the other statements."
  },
  {
    "id": "gen-48-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an animal is a feline, it is a predator.",
      "All predators have sharp claws.",
      "Some felines do not have sharp claws."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all felines have sharp claws. Statement 3 directly contradicts this conclusion by asserting that some felines do not have sharp claws. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-48-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All doctors have medical degrees.",
      "No one with a medical degree is unqualified to practice.",
      "Some doctors are qualified to practice."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all doctors are qualified to practice. Statement 3, which asserts that some doctors are qualified to practice, is a logical consequence of the conclusion that all doctors are qualified to practice (assuming there are doctors). Therefore, all three statements are consistent with each other."
  },
  {
    "id": "gen-49-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes are required to undergo regular medical check-ups.",
      "No one who undergoes regular medical check-ups is permitted to use performance-enhancing drugs.",
      "Some individuals on the national cycling team use performance-enhancing drugs.",
      "Every member of the national cycling team is a professional athlete."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 establish a chain: every member of the national cycling team is a professional athlete, who must undergo medical check-ups, and therefore cannot use performance-enhancing drugs. This implies no member of the national cycling team uses performance-enhancing drugs. Statement 3 directly contradicts this conclusion by asserting some members do use them. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-49-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups offer a unique product or service.",
      "No company that fails to attract significant investment is a successful startup.",
      "Some companies with a unique product or service do not attract significant investment.",
      "Every company that attracts significant investment eventually becomes a successful startup."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. It is possible for some companies with a unique product or service to not attract significant investment, and thus not become successful startups, while still allowing all successful startups to have a unique product and attract investment. The statements describe different subsets of companies without creating a necessary contradiction."
  },
  {
    "id": "gen-49-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird migrates south for the winter, it builds a nest in a warm climate.",
      "No bird that builds a nest in a warm climate remains in the region for the summer.",
      "Every bird that hatches its young in the region for the summer also migrates south for the winter.",
      "Some birds that hatch their young in the region for the summer do remain in the region for the summer."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: if a bird hatches its young in the region for the summer, it migrates south for the winter; if it migrates south, it builds a nest in a warm climate; if it builds a nest in a warm climate, it does not remain in the region for the summer. This chain implies that no bird that hatches its young in the region for the summer remains in the region for the summer. Statement 4 directly contradicts this conclusion by claiming some birds that hatch their young in the region for the summer do remain in the region for the summer. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-49-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A student is eligible for the advanced seminar only if they have completed the prerequisite course.",
      "No student who has completed the prerequisite course has failed the placement test.",
      "Unless a student passes the placement test, they cannot enroll in the advanced seminar.",
      "Some students who passed the placement test have not completed the prerequisite course."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. It is possible for some students to pass the placement test without having completed the prerequisite course, as these students would simply not be eligible for the advanced seminar according to Statement 1. The other statements establish conditions for advanced seminar eligibility that do not conflict with this possibility."
  },
  {
    "id": "gen-49-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have a vivid imagination.",
      "No one with a vivid imagination writes strictly factual non-fiction.",
      "Every author who writes strictly factual non-fiction is a successful author.",
      "Some authors who do not write strictly factual non-fiction lack a vivid imagination.",
      "Alice writes strictly factual non-fiction."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 5, 3, 1, and 2 form a logical chain: Alice writes strictly factual non-fiction, which means she is a successful author. All successful authors have a vivid imagination, and no one with a vivid imagination writes strictly factual non-fiction. This chain concludes that Alice does not write strictly factual non-fiction. This directly contradicts Statement 5, which asserts Alice does write strictly factual non-fiction. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-49-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus completed their annual training.",
      "No employee who completed their annual training missed more than two workdays.",
      "More than 10% of employees received a bonus.",
      "Some employees who missed more than two workdays did not receive a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. The chain formed by Statements 1 and 2 indicates that any employee receiving a bonus did not miss more than two workdays. Statement 4, which states that some employees who missed more than two workdays did not receive a bonus, is entirely compatible with this, as it is a direct consequence that if an employee missed more than two workdays, they could not have received a bonus."
  },
  {
    "id": "gen-49-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique musical instruments are made of wood.",
      "No instrument made of wood contains synthetic components.",
      "Some valuable musical instruments contain synthetic components.",
      "Every valuable musical instrument is an antique musical instrument."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4, 1, and 2 form a logical chain: every valuable musical instrument is an antique musical instrument, which is made of wood, and therefore contains no synthetic components. This implies that no valuable musical instrument contains synthetic components. Statement 3 directly contradicts this conclusion by asserting some valuable musical instruments do contain synthetic components. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-49-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful marketing campaigns incorporate social media engagement.",
      "No marketing campaign that incorporates social media engagement is without a clear target audience.",
      "Not all marketing campaigns with a clear target audience are successful.",
      "Some unsuccessful marketing campaigns do not incorporate social media engagement."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1 and 2 establish that all successful marketing campaigns incorporate social media engagement and have a clear target audience. Statement 3 simply allows for marketing campaigns with a clear target audience that are not successful. Statement 4 allows for unsuccessful campaigns that do not incorporate social media engagement, which does not contradict the requirement for successful campaigns to do so."
  },
  {
    "id": "gen-49-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a restaurant is highly rated, it receives at least one Michelin star.",
      "No restaurant that receives a Michelin star offers exclusively casual dining.",
      "Every restaurant that has an award-winning chef offers exclusively casual dining.",
      "Some highly rated restaurants have an award-winning chef."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 4, 3, and 2 create a chain: some highly rated restaurants have an award-winning chef, and every such chef works at a restaurant that offers exclusively casual dining. No restaurant offering exclusively casual dining receives a Michelin star. Therefore, some highly rated restaurants do not receive a Michelin star. This conclusion directly contradicts Statement 1, which asserts that all highly rated restaurants receive at least one Michelin star. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-49-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All effective public speakers prepare extensively.",
      "No one who prepares extensively avoids using visual aids.",
      "Unless a public speaker uses visual aids, they are not an effective public speaker.",
      "Some public speakers who do not prepare extensively are not effective public speakers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statements 1, 2, and 3 establish that effective public speakers prepare extensively and use visual aids. Statement 4 merely notes that some public speakers who do not prepare extensively are also not effective, which aligns with the logical consequence that a lack of preparation can lead to ineffectiveness, without contradicting any other rules."
  },
  {
    "id": "gen-50-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is eligible for a scholarship, they must have a GPA above 3.5.",
      "All students with a GPA above 3.5 completed the advanced thesis.",
      "No student who completed the advanced thesis failed the final project.",
      "Some students eligible for a scholarship failed the final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, scholarship eligibility requires a GPA above 3.5. From Statement 2, a GPA above 3.5 implies completing the advanced thesis. From Statement 3, completing the advanced thesis means passing the final project. Therefore, any student eligible for a scholarship must have passed the final project. This directly contradicts Statement 4, which claims some scholarship-eligible students failed the final project."
  },
  {
    "id": "gen-50-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete qualifies for the national competition, they train daily.",
      "Every athlete who trains daily has a strict diet plan.",
      "Some athletes with a strict diet plan do not qualify for the national competition.",
      "Maria trains daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and Statement 2, any athlete who qualifies for the national competition trains daily and has a strict diet plan. Statement 3 asserts that some athletes with a strict diet plan do not qualify, which is entirely possible as having a strict diet plan does not guarantee qualification. Statement 4 simply states Maria's training habits, which is consistent with all previous statements; she could be an athlete who trains daily and has a strict diet but does not qualify for the national competition."
  },
  {
    "id": "gen-50-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is classified as a rare edition, it must be kept in the secure archive.",
      "All books kept in the secure archive are scanned digitally.",
      "No book scanned digitally is available for public loan.",
      "Every book in the recent acquisition is available for public loan.",
      "Some books in the recent acquisition are classified as rare editions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, 2, and 3, any book classified as a rare edition is kept in the secure archive, scanned digitally, and therefore not available for public loan. Statement 5 indicates that some books in the recent acquisition are rare editions, meaning some books in the recent acquisition are not available for public loan. This directly contradicts Statement 4, which claims every book in the recent acquisition is available for public loan."
  },
  {
    "id": "gen-50-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is endorsed by the union, they receive campaign funding.",
      "Only candidates who receive campaign funding run televised advertisements.",
      "Some candidates who run televised advertisements are not endorsed by the union.",
      "No candidate endorsed by the union has run a negative ad campaign."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and Statement 2, any candidate endorsed by the union receives campaign funding and runs televised advertisements. Statement 3 indicates that some candidates running televised advertisements are not endorsed by the union, which is consistent; the implication is one-way. Statement 4 adds information about union-endorsed candidates and negative ad campaigns, but this does not create any contradiction with the other statements."
  },
  {
    "id": "gen-50-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with a gold key card can access the restricted data servers.",
      "If an employee has access to the restricted data servers, they are required to undergo weekly security audits.",
      "No employee required to undergo weekly security audits is exempt from the mandatory privacy training.",
      "Every employee in the executive leadership team is exempt from the mandatory privacy training.",
      "Some employees in the executive leadership team have a gold key card."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, 2, and 3, any employee with a gold key card is able to access restricted data servers, must undergo weekly security audits, and therefore is not exempt from mandatory privacy training. Statement 5 indicates that some employees in the executive leadership team have a gold key card, which means some executive leadership team members are not exempt from mandatory privacy training. This directly contradicts Statement 4, which claims every employee in the executive leadership team is exempt from mandatory privacy training."
  },
  {
    "id": "gen-50-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant thrives in dry soil, it requires minimal watering.",
      "All plants requiring minimal watering are suitable for desert landscapes.",
      "Some plants suitable for desert landscapes do not thrive in dry soil.",
      "This succulent is suitable for a desert landscape."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and Statement 2, any plant that thrives in dry soil requires minimal watering and is suitable for desert landscapes. Statement 3 confirms that the category of plants suitable for desert landscapes is broader than those that thrive in dry soil, which is consistent. Statement 4 introduces a specific succulent, which fits into the consistent framework."
  },
  {
    "id": "gen-50-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device requires calibration, it operates with optical sensors.",
      "All devices with optical sensors are susceptible to electromagnetic interference.",
      "No device susceptible to electromagnetic interference is certified for hazardous environments.",
      "Every device manufactured in the new facility is certified for hazardous environments.",
      "Some devices manufactured in the new facility require calibration."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, 2, and 3, any device requiring calibration operates with optical sensors, is susceptible to electromagnetic interference, and therefore cannot be certified for hazardous environments. Statement 5 indicates that some devices manufactured in the new facility require calibration, which means some devices from the new facility are not certified for hazardous environments. This directly contradicts Statement 4, which claims every device manufactured in the new facility is certified for hazardous environments."
  },
  {
    "id": "gen-50-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a volunteer completes advanced training, they lead a team.",
      "All volunteers who lead a team submit weekly reports.",
      "All volunteers who submit weekly reports volunteer more than 10 hours a month.",
      "Some volunteers who complete advanced training volunteer more than 10 hours a month.",
      "Sarah leads a team."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1, 2, and 3, any volunteer who completes advanced training leads a team, submits weekly reports, and therefore volunteers more than 10 hours a month. Statement 4 simply states that some volunteers who complete advanced training volunteer more than 10 hours a month, which is consistent with the derived conclusion that all of them do. Statement 5 introduces Sarah, who can consistently exist within this framework as a team leader."
  },
  {
    "id": "gen-50-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a research grant is awarded, the principal investigator must submit quarterly progress reports.",
      "No investigator who submits quarterly progress reports uses open-source data exclusively.",
      "All new research grants require the principal investigator to use open-source data exclusively.",
      "Some awarded research grants are new research grants."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1 and Statement 2, if a research grant is awarded, the principal investigator must submit quarterly progress reports and therefore does not use open-source data exclusively. Statement 4 indicates that some awarded research grants are new research grants. Combining these, it means some new research grants do not use open-source data exclusively. This directly contradicts Statement 3, which claims all new research grants require the principal investigator to use open-source data exclusively."
  },
  {
    "id": "gen-50-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an event is open to the public, it must be held in the main auditorium.",
      "All events held in the main auditorium require security personnel.",
      "Some events requiring security personnel are not open to the public.",
      "The annual charity gala is open to the public.",
      "All events requiring security personnel are ticketed events."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and Statement 2, any event open to the public is held in the main auditorium and requires security personnel. Statement 3 notes that some events requiring security personnel are not open to the public, which is consistent, as the implication is one-way. Statement 4 places the annual charity gala within the 'open to the public' category, which means it also requires security personnel. Statement 5 extends the chain, stating that events requiring security personnel are ticketed, which is also consistent with the prior statements."
  }
];

export default generatedPuzzles;
