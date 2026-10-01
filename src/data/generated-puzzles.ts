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
      "No birds of prey are herbivores.",
      "Some owls are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all owls are birds of prey. Statement 2 says that no birds of prey are herbivores. Together, these imply that no owls are herbivores. Statement 3, however, asserts that some owls are herbivores, which directly contradicts the conclusion drawn from Statement 1 and Statement 2. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-1-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Some musicians are also composers.",
      "All composers are artists.",
      "Some artists are musicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If some musicians are composers (Statement 1) and all composers are artists (Statement 2), then it logically follows that some musicians are artists. Statement 3, 'Some artists are musicians,' is therefore consistent with, and indeed implied by, the first two statements."
  },
  {
    "id": "gen-1-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant requires full sun, it is not a shade-loving plant.",
      "All ferns are shade-loving plants.",
      "Every plant in this garden requires full sun.",
      "Some ferns are in this garden."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 3 imply that no plant in this garden is a shade-loving plant (Garden Plants -> Requires Full Sun -> Not Shade-loving). Statements 2 and 4 imply that some plants in this garden are shade-loving plants (Ferns -> Shade-loving; Some Ferns are in this Garden). These two conclusions directly contradict each other. Removing Statement 4 makes the set consistent, as it would no longer establish that any shade-loving plants are in the garden."
  },
  {
    "id": "gen-1-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All wolves are canids.",
      "Some wild animals are wolves.",
      "Some wild animals are canids."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If all wolves are canids (Statement 1) and some wild animals are wolves (Statement 2), then it logically follows that those wild animals are also canids, meaning some wild animals are canids. Statement 3 is therefore consistent with the other two."
  },
  {
    "id": "gen-1-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are students.",
      "Not all students are members of the chess club.",
      "All members of the chess club are excellent strategists.",
      "No excellent strategists are students."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all members of the chess club are excellent strategists. Statement 4 indicates that no excellent strategists are students. Combining these two means that no members of the chess club are students. This directly contradicts Statement 1, which asserts that all members of the chess club are students. Removing Statement 4 makes the remaining statements consistent, allowing strategists to be students."
  },
  {
    "id": "gen-1-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a fruit is an apple, then it grows on a tree.",
      "Some fruits in this basket are apples.",
      "Some fruits in this basket grow on a tree."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If some fruits in the basket are apples (Statement 2) and all apples grow on trees (Statement 1), then it logically follows that some fruits in the basket grow on trees. Statement 3 is thus consistent with the preceding statements."
  },
  {
    "id": "gen-1-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some marathon runners are professional athletes.",
      "No marathon runners train daily."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all professional athletes train daily. Statement 2 states that some marathon runners are professional athletes. From these two, it logically follows that some marathon runners train daily. This directly contradicts Statement 3, which claims that no marathon runners train daily. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-1-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "All mammals are vertebrates.",
      "Some dogs are vertebrates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If all dogs are mammals (Statement 1) and all mammals are vertebrates (Statement 2), then it must be true that all dogs are vertebrates. Statement 3, 'Some dogs are vertebrates,' is a logical consequence of this and therefore entirely consistent."
  },
  {
    "id": "gen-1-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All red wines are made from dark grapes.",
      "No dark grapes are used for white wines.",
      "Some red wines are sweet wines.",
      "All sweet wines are white wines."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that no red wines are white wines (Red Wine -> Dark Grapes -> Not White Wine). Statements 3 and 4 imply that some red wines are white wines (Some Red Wine is Sweet Wine, and Sweet Wine -> White Wine, so Some Red Wine is White Wine). These two conclusions directly contradict each other. Removing Statement 4 makes the set consistent, as sweet wines would no longer be exclusively white wines."
  },
  {
    "id": "gen-1-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are problem-solvers.",
      "Some executives are not problem-solvers.",
      "Some executives are not engineers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that if someone is an engineer, they are a problem-solver. The contrapositive of this is: if someone is NOT a problem-solver, then they are NOT an engineer. Statement 2 states that some executives are not problem-solvers. Combining these, it logically follows that these executives who are not problem-solvers must also not be engineers. Therefore, Statement 3, 'Some executives are not engineers,' is consistent with the preceding statements."
  },
  {
    "id": "gen-2-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every warbler migrates south for the winter.",
      "No bird that migrates south for the winter can survive freezing temperatures.",
      "Some warblers are known to survive freezing temperatures."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "If every warbler migrates south (Statement 1), and no bird migrating south can survive freezing temperatures (Statement 2), then it follows that no warbler can survive freezing temperatures. This directly contradicts Statement 3, which states that some warblers do survive freezing temperatures."
  },
  {
    "id": "gen-2-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee submits their report late, they will not receive a bonus.",
      "John received a bonus.",
      "Sarah did not submit her report late.",
      "All employees who submitted their report late were reprimanded."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No direct contradiction can be derived. John received a bonus, so he must not have submitted his report late (contrapositive of Statement 1). Sarah did not submit her report late, which is consistent with her either receiving or not receiving a bonus, or being reprimanded or not. Statement 4 adds information about late submitters being reprimanded, which doesn't conflict with the other statements."
  },
  {
    "id": "gen-2-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed pre-calculus.",
      "If a student passes pre-calculus, they must have completed algebra.",
      "No student who has completed algebra has ever failed an advanced course.",
      "Emily failed advanced calculus."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If Emily failed advanced calculus (Statement 4), then she must have enrolled in it. By Statement 1, enrolling in advanced calculus requires passing pre-calculus. By Statement 2, passing pre-calculus requires completing algebra. By Statement 3, no student who has completed algebra has ever failed an advanced course. This implies Emily could not have failed advanced calculus, which contradicts Statement 4."
  },
  {
    "id": "gen-2-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants in the marathon trained for at least six months.",
      "If someone trained for at least six months, they followed a strict diet.",
      "Some people who followed a strict diet did not participate in the marathon.",
      "No one who followed a strict diet completed the marathon in under three hours."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No direct contradiction can be derived. From Statements 1 and 2, all marathon participants followed a strict diet. Statement 3 indicates that not everyone on a strict diet participated, which is consistent. Statement 4 places a condition on those on a strict diet, which also applies to marathon participants, creating no inconsistency."
  },
  {
    "id": "gen-2-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs have a strong work ethic.",
      "If someone has a strong work ethic, they value continuous learning.",
      "No one who values continuous learning considers themselves an expert.",
      "Some successful entrepreneurs consider themselves experts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If someone is a successful entrepreneur (as in Statement 4), then by Statement 1, they have a strong work ethic. By Statement 2, they value continuous learning. By Statement 3, they do not consider themselves an expert. This creates a logical chain leading to the conclusion that no successful entrepreneur considers themselves an expert, which directly contradicts Statement 4."
  },
  {
    "id": "gen-2-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a participant completed the advanced course, they received a certificate.",
      "Sarah received a certificate.",
      "John did not complete the advanced course.",
      "Everyone who received a certificate attended the final workshop."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No direct contradiction can be derived. Sarah received a certificate (Statement 2), so she must have attended the final workshop (Statement 4). Statement 1 implies that if she completed the course, she received a certificate, but not vice versa. John did not complete the advanced course (Statement 3), which is consistent with him either receiving or not receiving a certificate, and attending or not attending the workshop."
  },
  {
    "id": "gen-2-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All terrestrial animals breathe air.",
      "If an animal breathes air, it must have lungs.",
      "No animal with lungs can survive prolonged immersion underwater.",
      "Some terrestrial animals can survive prolonged immersion underwater."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If an animal is a terrestrial animal (as in Statement 4), then by Statement 1, it breathes air. By Statement 2, if it breathes air, it must have lungs. By Statement 3, no animal with lungs can survive prolonged immersion underwater. This forms a chain showing that no terrestrial animal can survive prolonged immersion underwater, which contradicts Statement 4."
  },
  {
    "id": "gen-2-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is a conifer, it produces cones.",
      "All plants that produce cones are evergreens.",
      "Some evergreens are not conifers.",
      "If a plant is an evergreen, it thrives in cold climates.",
      "Some plants that thrive in cold climates do not produce cones."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No direct contradiction can be derived. The statements establish relationships: Conifers produce cones (Statement 1), cone-producers are evergreens (Statement 2), and evergreens thrive in cold climates (Statement 4). Statements 3 and 5 assert particular cases that are entirely consistent with these general rules, for example, an evergreen might not be a conifer, or a cold-climate plant might not produce cones."
  },
  {
    "id": "gen-2-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A musician will perform a solo only if they have memorized the piece.",
      "If a musician has memorized the piece, they have practiced for at least 100 hours.",
      "No musician who has practiced for at least 100 hours makes an unforced error during their solo.",
      "Sarah performed a solo and made an unforced error."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If Sarah performed a solo (Statement 4), then by Statement 1, she must have memorized the piece. By Statement 2, if she memorized the piece, she practiced for at least 100 hours. By Statement 3, no musician who practiced for at least 100 hours makes an unforced error. This chain implies Sarah could not have made an unforced error, which contradicts Statement 4."
  },
  {
    "id": "gen-2-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, then its habitat is protected.",
      "Some endangered species are found in urban areas.",
      "Not all protected habitats are home to endangered species.",
      "No species found in urban areas thrives without human intervention."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "No direct contradiction can be derived. Statement 1 sets a condition for endangered species. Statement 2 means some endangered species have urban habitats, which would imply protected urban habitats. Statement 3 confirms that not all protected habitats contain endangered species, which is consistent with Statement 1. Statement 4 adds a condition for urban species that doesn't conflict with any other statement."
  },
  {
    "id": "gen-3-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All artists are creative.",
      "No creative person is unoriginal.",
      "Some artists are unoriginal."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all artists are creative. Statement 2 says no creative person is unoriginal. It logically follows that no artist is unoriginal. This contradicts Statement 3, which claims some artists are unoriginal."
  },
  {
    "id": "gen-3-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who studies diligently passes the exam.",
      "No one who passes the exam fails the course.",
      "Some students who study diligently fail the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that diligent students pass the exam. Statement 2 states that no one who passes the exam fails the course. Combining these, it must be true that no student who studies diligently fails the course. This directly contradicts Statement 3."
  },
  {
    "id": "gen-3-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All eagles are birds.",
      "Some raptors are eagles.",
      "No raptors are birds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all eagles are birds. Statement 2 says some raptors are eagles. From these two statements, it follows that some raptors are birds. This conclusion directly contradicts Statement 3, which asserts that no raptors are birds."
  },
  {
    "id": "gen-3-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a fruit is ripe, it is sweet.",
      "If a fruit is sweet, it attracts insects.",
      "Some apples are ripe.",
      "No apple attracts insects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that if a fruit is ripe, it attracts insects. Statement 3 affirms that some apples are ripe. Therefore, it must be true that some apples attract insects. This directly contradicts Statement 4."
  },
  {
    "id": "gen-3-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every manager attends the weekly meeting.",
      "Some employees are managers.",
      "No employee attends the weekly meeting."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all managers attend the weekly meeting. Statement 2 establishes that some employees are managers. It logically follows that some employees attend the weekly meeting. This directly contradicts Statement 3."
  },
  {
    "id": "gen-3-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are pets.",
      "Some dogs are not pets."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All dogs are mammals (Statement 1). It is possible for some mammals to be pets (Statement 2) and for some dogs (which are mammals) to not be pets (Statement 3), such as working dogs or wild dogs. These statements can all be true simultaneously."
  },
  {
    "id": "gen-3-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No snakes are furry animals.",
      "Some pets are furry animals.",
      "All pythons are snakes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 tells us pythons are snakes, and Statement 1 states no snakes are furry. So, pythons are not furry animals. Statement 2 simply notes that some pets are furry animals (e.g., cats or dogs), which does not contradict that snakes or pythons are not furry. All statements can be true."
  },
  {
    "id": "gen-3-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a plant needs direct sunlight, it has broad leaves.",
      "Some succulents need direct sunlight.",
      "Some houseplants do not have broad leaves."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that some succulents have broad leaves. Statement 3 indicates that some houseplants do not have broad leaves. These are not contradictory; succulents are a type of plant, and some houseplants might be succulents, while others are not, or they simply do not need direct sunlight and thus don't necessarily have broad leaves. All can be true."
  },
  {
    "id": "gen-3-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All chefs are skilled cooks.",
      "No amateur cooks are skilled cooks.",
      "Some amateur cooks exist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 1 and Statement 2, it can be concluded that no amateur cook is a chef. Statement 3 simply asserts the existence of amateur cooks. These statements are all compatible; there can be amateur cooks who are not skilled and therefore not chefs."
  },
  {
    "id": "gen-3-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds have feathers.",
      "All canaries have feathers.",
      "Some birds are not canaries."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 states a universal truth about birds. Statement 2 specifies that canaries, which are a type of bird, also have feathers. Statement 3 affirms that there are other types of birds besides canaries. All these statements are true and consistent with each other."
  },
  {
    "id": "gen-4-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All residents of the building have a parking permit.",
      "No one with a parking permit is eligible for a street parking sticker.",
      "Every resident of the building is eligible for a street parking sticker."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all residents have a parking permit. Statement 2 says no one with a parking permit is eligible for a street parking sticker. This logically implies that no resident of the building is eligible for a street parking sticker, which directly contradicts Statement 3."
  },
  {
    "id": "gen-4-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Some antique coins are made of silver.",
      "All coins made of silver are valuable.",
      "Some valuable items are not antique coins."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. There could be antique coins made of silver, and these would be valuable. The third statement simply allows for other valuable items that are not antique coins, which is perfectly compatible with the first two."
  },
  {
    "id": "gen-4-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a book is a first edition, then it is highly sought after.",
      "All books by this author are first editions.",
      "No book by this author is highly sought after."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says all books by this author are first editions. Statement 1 says if a book is a first edition, it is highly sought after. Therefore, all books by this author must be highly sought after. This conclusion directly contradicts Statement 3."
  },
  {
    "id": "gen-4-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant needs full sun, it thrives in this garden.",
      "Some plants that thrive in this garden are perennials.",
      "No plant that needs full sun is a perennial."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. There can be plants that need full sun and thrive, but are not perennials. Separately, there can be some plants that thrive in the garden and are perennials, but these perennials do not necessarily need full sun."
  },
  {
    "id": "gen-4-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A dish is served with rice only if it is a main course.",
      "All appetizers are served with rice.",
      "Some appetizers are not main courses."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says all appetizers are served with rice. Statement 1 says a dish is served with rice only if it is a main course, meaning if it's served with rice, it's a main course. Therefore, all appetizers must be main courses. This contradicts Statement 3, which claims some appetizers are not main courses."
  },
  {
    "id": "gen-4-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All expert programmers have strong analytical skills.",
      "All members of the algorithm team have strong analytical skills.",
      "Some senior developers are expert programmers.",
      "No senior developer is a member of the algorithm team."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true. Senior developers who are expert programmers would have strong analytical skills. Members of the algorithm team also have strong analytical skills, but these teams and senior developers are separate groups, which is consistent with all statements."
  },
  {
    "id": "gen-4-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the astronomy club attend stargazing events.",
      "No one who attends stargazing events is afraid of the dark.",
      "Some members of the astronomy club are afraid of the dark."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all astronomy club members attend stargazing events. Statement 2 says no one who attends stargazing events is afraid of the dark. This means no member of the astronomy club is afraid of the dark. This conclusion directly contradicts Statement 3."
  },
  {
    "id": "gen-4-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All new software releases require extensive testing.",
      "Some features from last year's update have not yet been released.",
      "No software update that requires extensive testing is released prematurely."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. New software releases are extensively tested and not premature. The unreleased features from last year's update simply remain unreleased and do not contradict any of the rules about new software releases or premature releases."
  },
  {
    "id": "gen-4-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A plant will not flower unless it receives sufficient sunlight.",
      "All orchids in this collection are flowering.",
      "Some orchids in this collection do not receive sufficient sunlight."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that if a plant is flowering, it must have received sufficient sunlight. Statement 2 says all orchids in this collection are flowering. Therefore, all orchids in this collection must have received sufficient sunlight. This conclusion directly contradicts Statement 3."
  },
  {
    "id": "gen-4-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every participant in the advanced workshop holds a certification.",
      "No one who holds a certification has less than five years of experience.",
      "Some participants in the advanced workshop have less than five years of experience.",
      "All participants in the basic workshop have less than five years of experience."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every participant in the advanced workshop holds a certification. Statement 2 says no one who holds a certification has less than five years of experience. This implies that no participant in the advanced workshop has less than five years of experience. This conclusion directly contradicts Statement 3. Statement 4 is irrelevant to this specific contradiction."
  },
  {
    "id": "gen-5-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All customers who qualify for premium membership have excellent credit scores.",
      "Every customer with an excellent credit score has their application automatically approved.",
      "No application that is automatically approved requires manual review.",
      "All customers whose applications do not require manual review are contacted by phone.",
      "Some customers who qualify for premium membership are not contacted by phone."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 together establish a chain: If a customer qualifies for premium membership (Statement 1), they have an excellent credit score. If they have an excellent credit score (Statement 2), their application is automatically approved. If their application is automatically approved (Statement 3), it does not require manual review. If their application does not require manual review (Statement 4), they are contacted by phone. Therefore, all customers who qualify for premium membership are contacted by phone. Statement 5 contradicts this by asserting that some customers who qualify for premium membership are not contacted by phone."
  },
  {
    "id": "gen-5-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every team member attending the workshop completed the prerequisite training.",
      "If a team member completed the prerequisite training, they received a certificate of completion.",
      "No team member who received a certificate of completion is exempt from the final assessment.",
      "All team members who are exempt from the final assessment are also team leads.",
      "There is at least one team member attending the workshop who is exempt from the final assessment."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 create a logical chain: A team member attending the workshop (Statement 1) completed the prerequisite training. Completing the training (Statement 2) leads to receiving a certificate of completion. Receiving a certificate of completion (Statement 3) means they are not exempt from the final assessment. Thus, any team member attending the workshop is not exempt from the final assessment. Statement 5 contradicts this by stating that at least one team member attending the workshop IS exempt from the final assessment."
  },
  {
    "id": "gen-5-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant is drought-resistant, it does not require daily watering.",
      "All plants that do not require daily watering are suitable for arid climates.",
      "No plant suitable for arid climates can tolerate cold temperatures.",
      "Some plants that are drought-resistant can tolerate cold temperatures."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If a plant is drought-resistant (Statement 1), it does not require daily watering. If it does not require daily watering (Statement 2), it is suitable for arid climates. If it is suitable for arid climates (Statement 3), it cannot tolerate cold temperatures. Therefore, any drought-resistant plant cannot tolerate cold temperatures. Statement 4 contradicts this by claiming that some drought-resistant plants can tolerate cold temperatures."
  },
  {
    "id": "gen-5-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every time the engine overheats, the warning light illuminates.",
      "If the warning light illuminates, the vehicle automatically slows down.",
      "No vehicle that automatically slows down continues at cruising speed.",
      "Some vehicles with an overheating engine continue at cruising speed."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: If the engine overheats (Statement 1), the warning light illuminates. If the warning light illuminates (Statement 2), the vehicle automatically slows down. If the vehicle automatically slows down (Statement 3), it does not continue at cruising speed. Therefore, any vehicle with an overheating engine does not continue at cruising speed. Statement 4 contradicts this by asserting that some vehicles with an overheating engine do continue at cruising speed."
  },
  {
    "id": "gen-5-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All registered voters cast their ballot in person.",
      "No one who casts their ballot in person is permitted to use an absentee ballot.",
      "If a registered voter is over 70 years old, they are permitted to use an absentee ballot.",
      "There is at least one registered voter who is over 70 years old."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all registered voters (from Statement 1) cast their ballot in person, and thus (from Statement 2) are not permitted to use an absentee ballot. Statement 3 states that any registered voter over 70 years old IS permitted to use an absentee ballot. Statement 4 affirms the existence of a registered voter who is over 70 years old. For such a voter, they must both be permitted to use an absentee ballot (from Statement 3) and not permitted to use one (from Statements 1 and 2), which is a contradiction."
  },
  {
    "id": "gen-6-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist participates in casual online games.",
      "Some people who participate in casual online games are members of the chess club."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all chess club members are skilled strategists. Statement 2 says no skilled strategist participates in casual online games. Combining these, if someone is a member of the chess club, then they do not participate in casual online games. This directly contradicts Statement 3, which claims some people who participate in casual online games are members of the chess club."
  },
  {
    "id": "gen-6-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All canines are mammals.",
      "Some domestic animals are canines.",
      "At least one domestic animal is a mammal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "If some domestic animals are canines (Statement 2) and all canines are mammals (Statement 1), it logically follows that at least one domestic animal is a mammal. Statement 3 is consistent with, and indeed a consequence of, the first two statements."
  },
  {
    "id": "gen-6-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every successful candidate has prior experience.",
      "No new hire has prior experience.",
      "Some successful candidates are new hires."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all successful candidates have prior experience. Statement 2 says no new hire has prior experience. This means that anyone with prior experience cannot be a new hire. Therefore, successful candidates, all of whom have prior experience, cannot be new hires. This directly contradicts Statement 3, which asserts that some successful candidates are new hires."
  },
  {
    "id": "gen-6-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All professional athletes maintain a strict diet.",
      "Some active individuals do not maintain a strict diet.",
      "Some active individuals are not professional athletes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all professional athletes maintain a strict diet. Statement 2 says some active individuals do not maintain a strict diet. If an active individual does not maintain a strict diet, then by Statement 1, they cannot be a professional athlete. Therefore, some active individuals are not professional athletes, which is exactly what Statement 3 says. The statements are consistent."
  },
  {
    "id": "gen-6-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a project is approved for funding, it has been reviewed by the committee.",
      "If a project is a research proposal, it is approved for funding.",
      "No project reviewed by the committee is accepted without revision.",
      "Some research proposals are accepted without revision."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 says if a project is a research proposal, it is approved for funding. Statement 1 says if a project is approved for funding, it has been reviewed by the committee. Combining these, if a project is a research proposal, it has been reviewed by the committee. Statement 3 says no project reviewed by the committee is accepted without revision. Therefore, if a project is a research proposal, it cannot be accepted without revision. This directly contradicts Statement 4, which claims some research proposals are accepted without revision."
  },
  {
    "id": "gen-6-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All highly skilled craftspeople possess advanced training.",
      "Some individuals with advanced training work from home.",
      "Some highly skilled craftspeople work from home."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all highly skilled craftspeople possess advanced training. Statement 2 says some individuals with advanced training work from home. It is possible that some of these individuals with advanced training who work from home are also highly skilled craftspeople. Therefore, it is consistent for some highly skilled craftspeople to work from home, as stated in Statement 3."
  },
  {
    "id": "gen-6-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All registered voters are eligible to serve on a jury.",
      "Some community leaders are registered voters.",
      "No community leaders are eligible to serve on a jury."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all registered voters are eligible to serve on a jury. Statement 2 says some community leaders are registered voters. Combining these, it means that some community leaders are eligible to serve on a jury. This directly contradicts Statement 3, which states that no community leaders are eligible to serve on a jury."
  },
  {
    "id": "gen-6-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a document is official, it has a watermark.",
      "Some official documents are not confidential.",
      "Some documents with a watermark are not confidential."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all official documents have a watermark. Statement 2 says some official documents are not confidential. If some official documents are not confidential, and all official documents have a watermark, then those specific official documents that are not confidential must also have a watermark. Therefore, some documents with a watermark are not confidential, making Statement 3 consistent with the others."
  },
  {
    "id": "gen-6-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No red berries are edible.",
      "All poisonous plants are edible.",
      "Some red berries are poisonous plants."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 says all poisonous plants are edible. Statement 1 says no red berries are edible. This means that if something is a red berry, it cannot be a poisonous plant, because all poisonous plants are edible. This conclusion directly contradicts Statement 3, which states that some red berries are poisonous plants."
  },
  {
    "id": "gen-6-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "No birds are mammals.",
      "Some flying creatures are birds.",
      "Some flying creatures are not mammals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says no birds are mammals. Statement 2 says some flying creatures are birds. If some flying creatures are birds, and no birds are mammals, then it logically follows that those flying creatures that are birds are not mammals. Therefore, some flying creatures are not mammals, which makes Statement 3 consistent with the others."
  },
  {
    "id": "gen-7-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All data storage devices used by the team are encrypted.",
      "If a device is encrypted, it meets current security protocols.",
      "Any device that meets current security protocols is approved for remote access.",
      "Some members of the team use data storage devices that are not approved for remote access."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1, Statement 2, and Statement 3 form a chain: All data storage devices used by the team are encrypted, which means they meet current security protocols, which means they are approved for remote access. Therefore, all data storage devices used by the team are approved for remote access. This directly contradicts Statement 4, which claims that some members of the team use devices that are not approved for remote access. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-7-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant who completes the advanced module earns a certificate.",
      "Earning a certificate requires passing the final assessment.",
      "No participant who started the program late passes the final assessment.",
      "Some participants completed the advanced module and also started the program late."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Consider the participants mentioned in Statement 4 who both completed the advanced module and started late. From Statement 1, completing the advanced module means earning a certificate. From Statement 2, earning a certificate means passing the final assessment. Therefore, these participants passed the final assessment. However, Statement 3 states that no participant who started late passes the final assessment. This creates a direct contradiction for the group of participants described in Statement 4. Removing Statement 4 eliminates this group, resolving the inconsistency."
  },
  {
    "id": "gen-7-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a tree produces edible fruit, then its flowers are pollinated exclusively by insects.",
      "All plants pollinated exclusively by insects have flowers with a distinctly sweet fragrance.",
      "No tree with a distinctly sweet fragrance is a type of evergreen.",
      "The specific tree in our garden produces edible fruit.",
      "The specific tree in our garden is an evergreen."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "From Statement 4, the tree in our garden produces edible fruit. From Statement 1, this means its flowers are pollinated exclusively by insects. From Statement 2, all insect-pollinated plants have a sweet fragrance, so the tree in our garden has a sweet fragrance. From Statement 3, no tree with a sweet fragrance is an evergreen, which means the tree in our garden is not an evergreen. This conclusion directly contradicts Statement 5, which states that the tree in our garden IS an evergreen. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-7-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees scheduled for the morning shift must arrive at the office before 7 AM.",
      "If an employee arrives at the office before 7 AM, they are authorized to access the secure server.",
      "Employees who are scheduled for the evening shift are never authorized to access the secure server.",
      "Some employees are scheduled for both the morning shift and the evening shift on the same day."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Consider the employees mentioned in Statement 4 who are scheduled for both morning and evening shifts. From Statement 1, as morning shift employees, they must arrive before 7 AM. From Statement 2, arriving before 7 AM means they are authorized to access the secure server. Thus, these employees are authorized to access the secure server. However, from Statement 3, as evening shift employees, they are never authorized to access the secure server. This creates a direct contradiction for the employees described in Statement 4. Removing Statement 4 eliminates the group that creates this conflict."
  },
  {
    "id": "gen-7-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who achieve a score above 90% on the final exam pass the course.",
      "If a student passes the course, they are automatically eligible for advanced placement.",
      "No student who misses more than two lectures during the semester is eligible for advanced placement.",
      "Every student in this particular study group achieved a score above 90% on the final exam.",
      "Some students in this particular study group missed more than two lectures during the semester."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Consider the students referred to in Statement 5, who are in the study group and missed more than two lectures. According to Statement 4, every student in this study group (including those from Statement 5) achieved a score above 90% on the final exam. From Statement 1, achieving above 90% means passing the course. From Statement 2, passing the course means automatic eligibility for advanced placement. Thus, these students are eligible for advanced placement. However, Statement 3 states that no student who misses more than two lectures is eligible for advanced placement. This creates a direct contradiction for the students described in Statement 5. Removing Statement 5 resolves this contradiction."
  },
  {
    "id": "gen-8-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in the aviary are tropical.",
      "No tropical birds can withstand cold weather.",
      "Some birds in the aviary can withstand cold weather."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no bird in the aviary can withstand cold weather. This is because if all aviary birds are tropical, and no tropical birds can withstand cold weather, then no aviary birds can withstand cold weather. Statement 3 directly contradicts this conclusion by asserting that some birds in the aviary can withstand cold weather. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-8-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All lawyers are members of the bar association.",
      "Some members of the bar association are not lawyers.",
      "Every judge is a lawyer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Judges are lawyers, and all lawyers are members of the bar association. It is also possible for some members of the bar association (e.g., paralegals or retired lawyers) to not be active lawyers. There is no contradiction."
  },
  {
    "id": "gen-8-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a student enrolls in calculus, they must have passed algebra.",
      "Every student who passed algebra is eligible for a scholarship.",
      "Some students enrolled in calculus are not eligible for a scholarship."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a chain: If a student enrolls in calculus, they passed algebra, and if they passed algebra, they are eligible for a scholarship. Therefore, all students enrolled in calculus must be eligible for a scholarship. Statement 3 directly contradicts this by claiming some students enrolled in calculus are not eligible for a scholarship. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-8-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some dogs are excellent swimmers.",
      "Some mammals live in the ocean."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. Dogs are a type of mammal, and some dogs are known to swim well. Separately, some mammals (like whales or dolphins, which are not dogs) live in the ocean. These facts do not conflict with each other."
  },
  {
    "id": "gen-8-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No fruit in this basket is ripe.",
      "Every apple in this basket is a fruit.",
      "Some apples in this basket are ripe."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that no apple in this basket is ripe. This is because every apple in the basket is a fruit, and no fruit in the basket is ripe. Statement 3 directly contradicts this by stating that some apples in the basket are ripe. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-8-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All concert pianists have exceptional hand dexterity.",
      "No amateur musicians have exceptional hand dexterity.",
      "Some concert pianists are also amateur musicians."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combine to show that no concert pianists can be amateur musicians. If all concert pianists have exceptional hand dexterity, and no amateur musicians have exceptional hand dexterity, it follows that concert pianists cannot be amateur musicians. Statement 3 directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-8-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful businesses generate profit.",
      "Some businesses that generate profit are not successful.",
      "Not all businesses are successful."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements are consistent. Statement 1 indicates a necessary condition for successful businesses. Statement 2 clarifies that generating profit isn't a sufficient condition for success, which is compatible with Statement 1. Statement 3 is a general truth that some businesses fail, which also does not conflict."
  },
  {
    "id": "gen-8-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every person invited to the gala is a donor.",
      "No donor lives outside the city.",
      "Someone invited to the gala lives outside the city."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain of logic: If a person is invited to the gala, they are a donor. If a person is a donor, they do not live outside the city. Therefore, no person invited to the gala lives outside the city. Statement 3 directly contradicts this conclusion by stating that someone invited to the gala does live outside the city. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-8-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All registered voters are citizens.",
      "Some citizens are not registered voters.",
      "Every citizen living abroad is a registered voter."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true. All registered voters must be citizens. It is entirely possible for some citizens (e.g., those under voting age or those who choose not to register) to not be registered voters. Separately, a specific subset of citizens—those living abroad—might be universally registered. There is no inherent contradiction among these conditions."
  },
  {
    "id": "gen-8-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who attended the workshop received a certificate.",
      "No one who received a certificate failed the follow-up assessment.",
      "Some employees who attended the workshop failed the follow-up assessment."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a logical chain: If an employee attended the workshop, they received a certificate. If an employee received a certificate, they did not fail the follow-up assessment. Therefore, all employees who attended the workshop did not fail the follow-up assessment. Statement 3 directly contradicts this conclusion. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-9-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All Grade A wines are aged in oak barrels.",
      "No wine aged in oak barrels contains added sulfites.",
      "All wines from the Chateau Cellar contain added sulfites.",
      "Some Grade A wines are from the Chateau Cellar."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that all Grade A wines do not contain added sulfites. Statement 3 asserts that all wines from the Chateau Cellar do contain added sulfites. Statement 4 creates a contradiction by claiming that some wines are both Grade A (and thus have no added sulfites) and from the Chateau Cellar (and thus have added sulfites)."
  },
  {
    "id": "gen-9-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful candidates completed an internship.",
      "No candidate who completed an internship failed the final interview.",
      "Some candidates who failed the final interview are highly qualified.",
      "No highly qualified candidate will be rejected."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful candidates did not fail the final interview (from Statements 1 and 2). The existence of highly qualified candidates who *did* fail the final interview (Statement 3) and will not be rejected (Statement 4) does not create any conflict with the characteristics of successful candidates."
  },
  {
    "id": "gen-9-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an artwork is a sculpture, then it is made of stone or metal.",
      "All artworks made of stone were created before the 20th century.",
      "No artwork created before the 20th century contains synthetic polymers.",
      "Some sculptures contain synthetic polymers.",
      "No artwork made of metal contains synthetic polymers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, 3, and 5 together imply that if an artwork is a sculpture, it cannot contain synthetic polymers. This is because all stone artworks do not contain synthetic polymers (from 2 and 3), and all metal artworks do not contain synthetic polymers (from 5), and sculptures are either stone or metal (from 1). Statement 4 directly contradicts this conclusion by asserting that some sculptures do contain synthetic polymers."
  },
  {
    "id": "gen-9-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful mountaineers have exceptional endurance.",
      "No one with exceptional endurance underestimates the mountain.",
      "Some people who underestimate the mountain are highly skilled.",
      "No highly skilled person will attempt a climb without proper gear."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful mountaineers (from Statements 1 and 2) do not underestimate the mountain. The existence of a separate group of people who *do* underestimate the mountain, are highly skilled (Statement 3), and will attempt climbs with proper gear (Statement 4) does not conflict with the characteristics defined for successful mountaineers."
  },
  {
    "id": "gen-9-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified divers have completed advanced training.",
      "No one who completed advanced training has poor depth perception.",
      "Some individuals with poor depth perception are registered for the deep-sea expedition.",
      "All individuals registered for the deep-sea expedition are qualified divers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all qualified divers do not have poor depth perception. Statement 4 says that all individuals registered for the deep-sea expedition are qualified divers. Therefore, it must be true that no individual registered for the deep-sea expedition has poor depth perception. Statement 3 directly contradicts this by stating that some individuals with poor depth perception are registered for the deep-sea expedition."
  },
  {
    "id": "gen-9-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful authors have a strong work ethic.",
      "No one with a strong work ethic submits work late.",
      "Some authors who submit work late are highly acclaimed.",
      "All highly acclaimed authors secure publishing deals quickly.",
      "Maria secured a publishing deal quickly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Successful authors (from Statements 1 and 2) do not submit work late. It is possible for Maria to have secured a publishing deal quickly (Statement 5) without being a successful author or even a highly acclaimed author. The other statements describe characteristics of specific groups but do not create a contradiction."
  },
  {
    "id": "gen-9-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All valid deductions follow a clear logical structure.",
      "No deduction following a clear logical structure contains equivocation.",
      "Some arguments containing equivocation are considered sound.",
      "All arguments considered sound are valid deductions."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all valid deductions do not contain equivocation. Statement 4 states that all arguments considered sound are valid deductions. Therefore, it must be true that no argument considered sound contains equivocation. Statement 3 directly contradicts this by asserting that some arguments containing equivocation are considered sound."
  },
  {
    "id": "gen-9-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All expert bakers understand fermentation.",
      "No one who understands fermentation uses instant yeast exclusively.",
      "Some bakers who use instant yeast exclusively prefer sourdough.",
      "All bakers who prefer sourdough publish their recipes online."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Expert bakers (from Statements 1 and 2) do not use instant yeast exclusively. The existence of bakers who *do* use instant yeast exclusively (Statement 3), prefer sourdough, and publish recipes online (Statement 4) does not create any contradiction with the characteristics of expert bakers."
  },
  {
    "id": "gen-9-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All premium espresso beans are ethically sourced.",
      "Every ethically sourced coffee bean is strictly monitored for quality.",
      "All coffee beans strictly monitored for quality contain less than 2% defective beans.",
      "No coffee beans containing less than 2% defective beans are sold for industrial use.",
      "Some premium espresso beans are sold for industrial use."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: If coffee beans are premium espresso beans (Statement 1), then they are ethically sourced (Statement 2), then they are strictly monitored for quality (Statement 3), then they contain less than 2% defective beans (Statement 4), and therefore they are not sold for industrial use. This implies that no premium espresso beans are sold for industrial use. Statement 5 directly contradicts this by asserting that some premium espresso beans are sold for industrial use."
  },
  {
    "id": "gen-9-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All classic novels are widely taught in schools.",
      "No book widely taught in schools is obscure.",
      "Some obscure books are bestsellers.",
      "All bestsellers receive critical acclaim."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Classic novels (from Statements 1 and 2) are not obscure. The existence of a separate group of obscure books (Statement 3) that are bestsellers and receive critical acclaim (Statement 4) does not create a conflict with the definition of classic novels."
  },
  {
    "id": "gen-10-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs have a strong work ethic.",
      "If a person has a strong work ethic, they value long-term planning.",
      "No one who values long-term planning makes impulsive decisions.",
      "Some successful entrepreneurs make impulsive decisions."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If statement 1, 2, and 3 are true, then any successful entrepreneur (from Statement 1) has a strong work ethic, which means they value long-term planning (from Statement 2), and therefore do not make impulsive decisions (from Statement 3). This leads to the conclusion that all successful entrepreneurs do not make impulsive decisions. Statement 4 contradicts this by stating that some successful entrepreneurs do make impulsive decisions. Removing Statement 4 resolves this contradiction."
  },
  {
    "id": "gen-10-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle is an electric car, it produces zero emissions.",
      "Every vehicle that produces zero emissions is exempt from city tolls.",
      "Vehicles exempt from city tolls are not subject to congestion charges.",
      "Some electric cars are subject to congestion charges."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If statement 1, 2, and 3 are true, then any electric car (from Statement 1) produces zero emissions, which means it is exempt from city tolls (from Statement 2), and therefore not subject to congestion charges (from Statement 3). This means all electric cars are not subject to congestion charges. Statement 4 contradicts this by asserting that some electric cars are subject to congestion charges. Removing Statement 4 resolves this inconsistency."
  },
  {
    "id": "gen-10-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful software project uses agile methodologies.",
      "If a project uses agile methodologies, its requirements evolve over time.",
      "No project with evolving requirements has a fixed-price contract.",
      "There is at least one successful software project with a fixed-price contract."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "If statements 1, 2, and 3 are true, then any successful software project (from Statement 1) uses agile methodologies, which means its requirements evolve over time (from Statement 2), and therefore it does not have a fixed-price contract (from Statement 3). This leads to the conclusion that all successful software projects do not have fixed-price contracts. Statement 4 contradicts this by affirming that there is at least one successful software project with a fixed-price contract. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-10-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees eligible for the bonus program received a performance review.",
      "No employee who received a performance review was denied an annual raise.",
      "All employees who were denied an annual raise are not eligible for the bonus program.",
      "Some employees eligible for the bonus program were denied an annual raise."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that any employee eligible for the bonus program (from Statement 1) received a performance review, and therefore was not denied an annual raise (from Statement 2). Thus, all employees eligible for the bonus program were not denied an annual raise. Statement 3 also implies this, as its contrapositive is 'If an employee is eligible for the bonus program, they were not denied an annual raise.' Statement 4 contradicts this universal conclusion by stating that some employees eligible for the bonus program were denied an annual raise. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-10-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate performs well in the interview, they are offered a second round.",
      "No candidate offered a second round receives a rejection letter.",
      "All candidates who perform well in the interview do not receive a rejection letter.",
      "Some candidates who performed well in the interview received a rejection letter."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that if a candidate performs well in the interview (from Statement 1), they are offered a second round, and therefore do not receive a rejection letter (from Statement 2). Statement 3 directly states this conclusion: all candidates who perform well in the interview do not receive a rejection letter. Statement 4 contradicts this by stating that some candidates who performed well in the interview received a rejection letter. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-11-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All participants in the study were adults.",
      "No adults were eligible for the children's prize.",
      "Some participants in the study received the children's prize."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all participants were adults. Statement 2 establishes that no adults were eligible for the children's prize. Combining these, it logically follows that no participants were eligible for the children's prize. Statement 3 directly contradicts this conclusion by stating that some participants did receive the children's prize."
  },
  {
    "id": "gen-11-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All members of the hiking club own boots.",
      "Some people who own boots are not members of the hiking club.",
      "No members of the hiking club own sandals."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Statement 1 describes a characteristic of club members. Statement 2 describes a subset of boot owners who are not club members. Statement 3 places another restriction on club members. None of these statements logically contradict each other; a scenario exists where all are true."
  },
  {
    "id": "gen-11-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a book is a novel, then it has a fictional plot.",
      "Every book on the required reading list is a novel.",
      "Some books on the required reading list do not have a fictional plot."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all novels have fictional plots. Statement 2 establishes that all books on the required reading list are novels. Therefore, it must be true that every book on the required reading list has a fictional plot. Statement 3 directly contradicts this conclusion."
  },
  {
    "id": "gen-11-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs enjoy playing fetch.",
      "Some animals that enjoy playing fetch are not dogs.",
      "No cats enjoy playing fetch.",
      "Fido is a dog."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. Statement 1 describes dogs. Statement 2 describes other animals. Statement 3 specifies cats. Statement 4 is a particular instance of statement 1. There is no logical contradiction among them; a scenario exists where all are true."
  },
  {
    "id": "gen-11-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted a complete portfolio.",
      "No candidate who missed the interview was a successful applicant.",
      "All candidates who submitted a complete portfolio were successful applicants.",
      "Some candidates missed the interview but submitted a complete portfolio."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 3 together establish that the set of successful applicants is exactly the same as the set of candidates who submitted a complete portfolio. Statement 4 asserts that some candidates missed the interview and submitted a complete portfolio, meaning some candidates were both successful applicants and missed the interview. However, Statement 2 claims that no candidate who missed the interview was a successful applicant, creating a contradiction."
  },
  {
    "id": "gen-11-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All artists attended the gallery opening.",
      "Some people at the gallery opening were not artists.",
      "Every person who bought a painting was an artist.",
      "No one who bought a painting missed the gallery opening."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. Statement 1 establishes that all artists attended the opening. Statement 2 allows for other attendees. Statement 3 states that all buyers were artists, meaning they also attended the opening by virtue of Statement 1. Statement 4 is a logical consequence of Statements 1 and 3, not a new contradictory claim."
  },
  {
    "id": "gen-11-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam received a distinction.",
      "No student who missed more than three classes received a distinction.",
      "Some students who passed the exam missed more than three classes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies that any student who passed the exam received a distinction. Statement 2 implies that no student who received a distinction missed more than three classes. Therefore, it logically follows that any student who passed the exam did not miss more than three classes. Statement 3 directly contradicts this conclusion by asserting that some students who passed the exam did miss more than three classes."
  },
  {
    "id": "gen-11-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every politician running for office is a registered voter.",
      "Some registered voters are not running for office.",
      "No registered voter is under eighteen years old."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All three statements can be true simultaneously. Statement 1 describes politicians. Statement 2 describes other registered voters. Statement 3 adds an age requirement for registered voters. These conditions can all exist in the same scenario without conflict."
  },
  {
    "id": "gen-11-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful project managers have strong leadership skills.",
      "Every person with strong leadership skills is an effective communicator.",
      "No one who works in isolation is an effective communicator.",
      "Some successful project managers work in isolation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all successful project managers are effective communicators. Statement 3 states that no one who works in isolation is an effective communicator. Therefore, it must be true that no successful project manager works in isolation. Statement 4 directly contradicts this conclusion by stating that some successful project managers do work in isolation."
  },
  {
    "id": "gen-11-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All trees in this forest are deciduous.",
      "Some deciduous trees have broad leaves.",
      "No evergreen tree is deciduous.",
      "There is at least one tree in this forest."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All four statements can be true simultaneously. Statement 1 describes the nature of trees in the forest. Statement 2 provides a characteristic of some deciduous trees. Statement 3 defines evergreen trees as distinct from deciduous ones. Statement 4 simply confirms the existence of trees in the forest. No logical conflicts arise."
  },
  {
    "id": "gen-12-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates are highly skilled.",
      "If a person is highly skilled, they are always diligent.",
      "No diligent person missed the application deadline.",
      "Elena is a successful candidate.",
      "Elena missed the application deadline."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "From Statements 1, 2, and 3, coupled with Statement 4, it is deduced that Elena, being a successful candidate, is highly skilled, diligent, and therefore did not miss the application deadline. This deduction directly contradicts Statement 5, which claims Elena missed the application deadline."
  },
  {
    "id": "gen-12-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All proficient programmers attend advanced workshops.",
      "Some attendees of advanced workshops are not proficient programmers.",
      "Only proficient programmers are considered for promotion.",
      "No one considered for promotion attends basic workshops."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Proficient programmers attend advanced workshops, and some advanced workshop attendees might not be programmers. Those considered for promotion are a subset of proficient programmers and do not attend basic workshops. There is no logical conflict among these conditions."
  },
  {
    "id": "gen-12-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily watering, it has shallow roots.",
      "All plants with shallow roots are vulnerable to drought.",
      "No plant vulnerable to drought can survive direct sunlight.",
      "The desert lily can survive direct sunlight.",
      "The desert lily requires daily watering."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 5, 1, 2, and 3 form a chain: The desert lily requires daily watering, so it has shallow roots, which makes it vulnerable to drought, meaning it cannot survive direct sunlight. This conclusion, that the desert lily cannot survive direct sunlight, directly contradicts Statement 4."
  },
  {
    "id": "gen-12-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All team members present at the meeting supported the proposal.",
      "If a team member supported the proposal, they received a bonus.",
      "Some team members who received a bonus were not present at the meeting.",
      "Maria is a team member who was present at the meeting."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statements 1 and 2, Maria (from Statement 4) supported the proposal and received a bonus. Statement 3 indicates that the group of bonus recipients is larger than just those present at the meeting, which is consistent."
  },
  {
    "id": "gen-12-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All visitors to the museum must purchase a ticket.",
      "No one who purchased a ticket is allowed to bring in outside food.",
      "Some members are visitors to the museum.",
      "All members are allowed to bring in outside food."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 chain together: Some members are visitors, and visitors must purchase tickets, and those who purchase tickets cannot bring in outside food. This means some members are not allowed to bring in outside food, which directly contradicts Statement 4 that all members are allowed to bring in outside food."
  },
  {
    "id": "gen-12-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a dog is a purebred, it has a registration number.",
      "Some dogs with registration numbers are not purebreds.",
      "All dogs with a registration number are vaccinated.",
      "Fido is a purebred."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. Fido (from Statement 4), being a purebred, would have a registration number and be vaccinated (from Statements 1 and 3). Statement 2 simply notes that the category of dogs with registration numbers is broader than just purebreds, which poses no conflict."
  },
  {
    "id": "gen-12-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful negotiation leads to a signed agreement.",
      "No signed agreement lacks a confidentiality clause.",
      "If a document includes a confidentiality clause, it requires legal review.",
      "The latest negotiation was successful.",
      "The latest negotiation did not require legal review."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 4, 1, 2, and 3 create a chain of deductions: The latest negotiation was successful, leading to a signed agreement, which includes a confidentiality clause, and therefore required legal review. This derived conclusion, that the latest negotiation required legal review, directly contradicts Statement 5."
  },
  {
    "id": "gen-12-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All enrolled students have access to the library.",
      "Only students who pay tuition receive a transcript.",
      "Some students with library access do not pay tuition.",
      "Sarah is an enrolled student."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Sarah (from Statement 4), as an enrolled student, has library access (from Statement 1). Statement 3 allows for some students with library access not to pay tuition, meaning they would not receive a transcript (from Statement 2). No contradictions arise."
  },
  {
    "id": "gen-12-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a manuscript is accepted, it undergoes peer review.",
      "No manuscript that undergoes peer review avoids revisions.",
      "Manuscripts with revisions are always challenging to edit.",
      "This manuscript was accepted.",
      "This manuscript was not challenging to edit."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Following the chain from Statements 4, 1, 2, and 3: This manuscript was accepted, so it underwent peer review, which means it did not avoid revisions (i.e., it had revisions), making it challenging to edit. This derived conclusion, that the manuscript was challenging to edit, directly contradicts Statement 5."
  },
  {
    "id": "gen-12-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every member of the board attended the annual conference.",
      "No one who attended the annual conference missed the keynote speech.",
      "Some members of the board are new appointees.",
      "Some new appointees missed the keynote speech."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be consistent. From Statements 1 and 2, all members of the board attended the conference and therefore did not miss the keynote speech. Statement 3 states that some board members are new appointees. Statement 4 only requires that *some* new appointees missed the keynote, which can be true if those specific new appointees were not members of the board or did not attend the conference."
  },
  {
    "id": "gen-13-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are birds of prey.",
      "No birds of prey are vegetarians.",
      "Some owls are vegetarians."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that 'No owls are vegetarians.' This directly contradicts Statement 3, 'Some owls are vegetarians.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All engineers are problem-solvers.",
      "Some problem-solvers are not engineers.",
      "Maria is a problem-solver."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Maria could be an engineer who is a problem-solver, or she could be one of the problem-solvers who is not an engineer. No contradiction arises."
  },
  {
    "id": "gen-13-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every successful entrepreneur is a risk-taker.",
      "No risk-takers are afraid of failure.",
      "Some successful entrepreneurs are afraid of failure."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that 'No successful entrepreneurs are afraid of failure.' This directly contradicts Statement 3, 'Some successful entrepreneurs are afraid of failure.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No politicians are entirely honest.",
      "All people who are entirely honest are trustworthy.",
      "Some trustworthy people are politicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 3 claims some trustworthy people are politicians. Statement 1 clarifies that these politicians are not entirely honest. This does not contradict Statement 2, which only links entirely honest people to trustworthiness without making claims about dishonest people."
  },
  {
    "id": "gen-13-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who studied hard passed the exam.",
      "No student who passed the exam received a failing grade.",
      "Some students who studied hard received a failing grade."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that 'No student who studied hard received a failing grade.' This directly contradicts Statement 3, which states that 'Some students who studied hard received a failing grade.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every cat is a mammal.",
      "Some mammals are not cats.",
      "All mammals have fur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Cats are a subset of mammals, and all mammals have fur. There can exist mammals with fur that are not cats without creating any contradiction."
  },
  {
    "id": "gen-13-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategists play casually.",
      "Every member of the chess club plays casually."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that 'No members of the chess club play casually.' This directly contradicts Statement 3, which asserts that 'Every member of the chess club plays casually.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Some birds can fly.",
      "All penguins are birds.",
      "No penguins can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Penguins are a type of bird that cannot fly. This does not prevent other types of birds from being able to fly, as stated in Statement 1. No contradiction arises."
  },
  {
    "id": "gen-13-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All rare books are valuable.",
      "No valuable items are stored on open shelves.",
      "Some rare books are stored on open shelves."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that 'No rare books are stored on open shelves.' This directly contradicts Statement 3, which asserts that 'Some rare books are stored on open shelves.' Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-13-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "No reptiles are mammals.",
      "Fido is a dog."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Fido is a dog, which means Fido is a mammal. There are other mammals that are not dogs, and reptiles are a separate category from mammals. No contradiction is present."
  },
  {
    "id": "gen-14-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the culinary club are skilled chefs.",
      "No one who is a skilled chef participates in the annual bake-off.",
      "At least one member of the culinary club participates in the annual bake-off."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all culinary club members are skilled chefs. Statement 2 indicates that no skilled chefs participate in the annual bake-off, meaning no culinary club members participate. Statement 3 directly contradicts this by asserting that at least one culinary club member does participate."
  },
  {
    "id": "gen-14-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every feline is a mammal.",
      "Some mammals are aquatic.",
      "No feline is aquatic."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all felines to be mammals, and for no felines to be aquatic. The existence of some aquatic mammals simply means that the set of aquatic creatures overlaps with mammals, but not necessarily with the felines subset."
  },
  {
    "id": "gen-14-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant thrives, it requires abundant sunlight.",
      "Every fern is a plant that thrives.",
      "No plant requiring abundant sunlight can grow in deep shade.",
      "Some ferns can grow in deep shade."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 states that every fern thrives. Statement 1 indicates that thriving plants require abundant sunlight. Therefore, every fern requires abundant sunlight. Statement 3 says no plant requiring abundant sunlight can grow in deep shade, so no fern can grow in deep shade. Statement 4 directly contradicts this by claiming some ferns can grow in deep shade."
  },
  {
    "id": "gen-14-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an animal is a primate, it has opposable thumbs.",
      "All monkeys are primates.",
      "Some animals do not have opposable thumbs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 and Statement 1 imply all monkeys have opposable thumbs. Statement 3 only says some animals lack opposable thumbs. These animals could be non-primates (e.g., birds or fish), which is perfectly consistent with monkeys having thumbs."
  },
  {
    "id": "gen-14-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are risk-takers.",
      "No one who avoids market fluctuations is a risk-taker.",
      "Every new startup founder avoids market fluctuations.",
      "At least one new startup founder is a successful entrepreneur."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, every new startup founder avoids market fluctuations. From Statement 2, anyone who avoids market fluctuations is not a risk-taker. Thus, every new startup founder is not a risk-taker. From Statement 1, all successful entrepreneurs are risk-takers. So, no new startup founder can be a successful entrepreneur. Statement 4 contradicts this."
  },
  {
    "id": "gen-14-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every member of the astronomy club understands astrophysics.",
      "No one who understands astrophysics believes in astrology.",
      "Sarah is a member of the astronomy club."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Sarah is a member of the astronomy club (Statement 3), which means she understands astrophysics (Statement 1). Since no one who understands astrophysics believes in astrology (Statement 2), Sarah does not believe in astrology. All statements are consistent."
  },
  {
    "id": "gen-14-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare gemstones are valuable.",
      "No valuable objects are common.",
      "Some common objects are rare gemstones."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all rare gemstones are valuable. Statement 2 indicates that no valuable objects are common. Therefore, it must be true that no rare gemstones are common. Statement 3 directly contradicts this by stating that some common objects are rare gemstones."
  },
  {
    "id": "gen-14-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Some students are fluent in French.",
      "Not all fluent French speakers are enrolled in the literature course.",
      "All students enrolled in the literature course study poetry."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible that some students are fluent in French. Some of these fluent French speakers might not be in the literature course, while others might be. The students in the literature course study poetry, but this doesn't create a contradiction with the other statements."
  },
  {
    "id": "gen-14-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a fruit is ripe, it is sweet.",
      "All mangoes are ripe fruits.",
      "No sweet fruit has a bitter peel.",
      "At least one mango has a bitter peel."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 says all mangoes are ripe. Statement 1 says if a fruit is ripe, it is sweet. Therefore, all mangoes are sweet. Statement 3 states that no sweet fruit has a bitter peel. This means no mango has a bitter peel. Statement 4 directly contradicts this."
  },
  {
    "id": "gen-14-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All scientists are researchers.",
      "Some researchers are professors.",
      "If a person is a professor, they lecture frequently.",
      "No scientist lectures frequently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All scientists are researchers. Some researchers are professors, and these professors lecture frequently. It is possible for scientists to be a subset of researchers that does not overlap with the researchers who are also professors and lecture frequently. Therefore, no scientist would lecture frequently, which is consistent."
  },
  {
    "id": "gen-15-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is endorsed by the union, they campaign vigorously.",
      "No candidate who campaigns vigorously loses by a wide margin.",
      "Every candidate who wins the primary election is endorsed by the union.",
      "Some candidates who win the primary election lose by a wide margin."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 establishes that if a candidate wins the primary election, they are endorsed by the union. Statement 1 states that if a candidate is endorsed by the union, they campaign vigorously. Statement 2 says that no candidate who campaigns vigorously loses by a wide margin. Therefore, all candidates who win the primary election do not lose by a wide margin. This contradicts Statement 4, which claims that some candidates who win the primary election do lose by a wide margin."
  },
  {
    "id": "gen-15-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes the advanced course, they receive a special certificate.",
      "All students who receive a special certificate are invited to the annual gala.",
      "No student who fails the prerequisite exam completes the advanced course.",
      "Some students who are invited to the annual gala failed the prerequisite exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A student could be invited to the annual gala without having completed the advanced course or received a special certificate (as the statements do not say these are the *only* ways to be invited). Therefore, it is possible for some students invited to the gala to have failed the prerequisite exam, provided they did not complete the advanced course."
  },
  {
    "id": "gen-15-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant receives a five-star review, its chef is renowned.",
      "All renowned chefs prioritize local ingredients.",
      "No restaurant that prioritizes local ingredients serves processed food.",
      "Every restaurant that receives a five-star review serves processed food."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says a five-star review implies a renowned chef. Statement 2 says renowned chefs prioritize local ingredients. Statement 3 says restaurants prioritizing local ingredients do not serve processed food. Chaining these together, a restaurant receiving a five-star review does not serve processed food. This directly contradicts Statement 4, which claims every restaurant with a five-star review serves processed food."
  },
  {
    "id": "gen-15-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups embrace innovation.",
      "If a company embraces innovation, it attracts significant investment.",
      "Some companies that attract significant investment are not successful startups.",
      "No company that fails to attract significant investment embraces innovation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 and 2 imply that successful startups attract significant investment. Statement 3 is consistent with this, as it allows other types of companies (not successful startups) to also attract significant investment. Statement 4 is simply the contrapositive of Statement 2, providing no new information that would lead to a contradiction."
  },
  {
    "id": "gen-15-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it has sharp teeth.",
      "No species that has sharp teeth is entirely herbivorous.",
      "Every species that is not herbivorous consumes meat.",
      "Some carnivorous species do not consume meat."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says carnivorous species have sharp teeth. Statement 2 says species with sharp teeth are not entirely herbivorous. Statement 3 states that every species that is not herbivorous consumes meat. Therefore, any carnivorous species consumes meat. This conclusion contradicts Statement 4, which asserts that some carnivorous species do not consume meat."
  },
  {
    "id": "gen-15-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All citizens eligible to vote are registered.",
      "If a citizen is registered, they can cast a ballot.",
      "Some citizens who can cast a ballot are not eligible to vote.",
      "No citizen who cannot cast a ballot is registered."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 imply that all eligible citizens can cast a ballot. Statement 3 is consistent with this, as it is possible for non-eligible citizens to be registered and cast a ballot, or for them to cast a ballot through other means not defined by these statements. Statement 4 is the contrapositive of Statement 2 and does not introduce a contradiction."
  },
  {
    "id": "gen-15-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the lecture, they take notes.",
      "Every student who takes notes reviews them before the exam.",
      "No student who reviews notes before the exam forgets key concepts.",
      "Some students who attend the lecture forget key concepts."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says students who attend the lecture take notes. Statement 2 says students who take notes review them. Statement 3 says students who review notes do not forget key concepts. Therefore, all students who attend the lecture do not forget key concepts. This contradicts Statement 4, which claims some students who attend the lecture do forget key concepts."
  },
  {
    "id": "gen-15-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive a bonus have met their quarterly targets.",
      "If an employee has met their quarterly targets, they contribute to team success.",
      "Some employees who contribute to team success do not receive a bonus.",
      "Every employee who fails to meet their quarterly targets does not receive a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 imply that employees who receive a bonus contribute to team success. Statement 3 is consistent with this, as it allows other employees (who do not receive a bonus) to also contribute to team success. Statement 4 is the contrapositive of Statement 1 and does not introduce a contradiction."
  },
  {
    "id": "gen-15-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "A building is considered structurally sound only if it passes inspection.",
      "If a building passes inspection, it receives a certificate of occupancy.",
      "No building that receives a certificate of occupancy has major structural flaws.",
      "Some buildings considered structurally sound have major structural flaws."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 means that if a building is structurally sound, it passes inspection. Statement 2 says if a building passes inspection, it receives a certificate of occupancy. Statement 3 states that no building with a certificate of occupancy has major structural flaws. Chaining these, any building considered structurally sound has no major structural flaws. This directly contradicts Statement 4, which claims some structurally sound buildings have major structural flaws."
  },
  {
    "id": "gen-15-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All effective medications have been approved by the health authority.",
      "If a medication has been approved by the health authority, it is widely prescribed.",
      "Some medications that are widely prescribed are not effective.",
      "No medication that is not widely prescribed has been approved by the health authority."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statements 1 and 2 imply that all effective medications are widely prescribed. Statement 3 is consistent with this, as it is possible for non-effective medications to also be widely prescribed. Statement 4 is the contrapositive of Statement 2 and does not introduce a contradiction."
  },
  {
    "id": "gen-16-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All lions are predators.",
      "Every predator is a carnivore.",
      "Some lions are not carnivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all lions are predators, and Statement 2 says every predator is a carnivore. This logically implies that all lions are carnivores. Statement 3, which claims some lions are not carnivores, directly contradicts this conclusion."
  },
  {
    "id": "gen-16-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are skilled problem-solvers.",
      "Some skilled problem-solvers are not engineers.",
      "Lena is an engineer."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for Lena, an engineer, to be a skilled problem-solver as stated in Statement 1. Statement 2 allows for skilled problem-solvers who are not engineers, which does not create a contradiction with Lena's status or Statement 1."
  },
  {
    "id": "gen-16-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a robin, then it can fly.",
      "No bird that eats only seeds can fly.",
      "Every robin eats only seeds."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 3 indicates that every robin eats only seeds. Statement 2 states that no bird that eats only seeds can fly. Together, these imply that no robin can fly. This directly contradicts Statement 1, which says if a bird is a robin, then it can fly."
  },
  {
    "id": "gen-16-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are aquatic creatures.",
      "No aquatic creatures are dogs."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 1 establishes dogs as mammals. Statement 3 confirms aquatic creatures are not dogs. Statement 2 merely states that some mammals (like whales or dolphins) are aquatic creatures, which does not conflict with dogs being mammals or aquatic creatures not being dogs."
  },
  {
    "id": "gen-16-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus attended the annual conference.",
      "No one who attended the annual conference missed the financial report deadline.",
      "Some employees who received a bonus missed the financial report deadline."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all employees who received a bonus attended the annual conference. Statement 2 states that no one who attended the annual conference missed the financial report deadline. This means that any employee who received a bonus did not miss the financial report deadline. Statement 3 directly contradicts this by asserting that some employees who received a bonus did miss the financial report deadline."
  },
  {
    "id": "gen-16-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a rose, it has thorns.",
      "Some roses are not red.",
      "All red plants have thorns."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A rose can have thorns (Statement 1) and not be red (Statement 2). Statement 3, that all red plants have thorns, doesn't contradict the other statements; a red plant could be a red rose, or a different red plant with thorns."
  },
  {
    "id": "gen-16-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who passed the exam studied diligently.",
      "No student who studied diligently failed the course.",
      "Some students failed the course but passed the exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all students who passed the exam studied diligently. Statement 2 says no student who studied diligently failed the course. Combining these, it logically follows that no student who passed the exam failed the course. Statement 3, which claims some students failed the course but passed the exam, directly contradicts this conclusion."
  },
  {
    "id": "gen-16-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "A car will start only if its battery is charged.",
      "Some cars with charged batteries are not driven daily.",
      "No car that is not driven daily will start."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A car might have a charged battery (consistent with Statement 1) but not be driven daily (consistent with Statement 2). According to Statement 3, such a car would not start, which is consistent with Statement 1 (as Statement 1 only states a necessary condition for starting, not a sufficient one)."
  },
  {
    "id": "gen-16-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All committee members are eligible to vote.",
      "Every person eligible to vote has completed the ethics training.",
      "Some committee members have not completed the ethics training."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all committee members are eligible to vote. Statement 2 states that every person eligible to vote has completed the ethics training. From these two statements, it logically follows that all committee members have completed the ethics training. Statement 3, which claims some committee members have not completed the ethics training, directly contradicts this conclusion."
  },
  {
    "id": "gen-16-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "A dish is considered authentic only if it uses local ingredients.",
      "Some dishes made with local ingredients are not authentic.",
      "All authentic dishes are highly praised."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A dish can be authentic (meaning it uses local ingredients and is highly praised). Other dishes could use local ingredients but not be authentic (e.g., they lack other authentic elements), and Statement 3 doesn't apply to them, thus creating no contradiction."
  },
  {
    "id": "gen-17-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who earns an A in the course will be invited to the honors dinner.",
      "No student who misses more than two lectures is invited to the honors dinner.",
      "Some students who missed more than two lectures earned an A in the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a student earns an A in the course, they cannot have missed more than two lectures. Statement 3 directly contradicts this by asserting that some students both earned an A and missed more than two lectures."
  },
  {
    "id": "gen-17-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified, they will pass the screening interview.",
      "All candidates who pass the screening interview are invited for a second interview.",
      "Some candidates who are invited for a second interview are not qualified.",
      "No candidate who fails the screening interview is invited for a second interview."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all qualified candidates are invited for a second interview. Statement 4 means that all candidates invited for a second interview must have passed the screening interview. This is consistent with Statement 3, which indicates that not all candidates invited for a second interview are necessarily qualified."
  },
  {
    "id": "gen-17-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a car is a sedan, it is fuel-efficient.",
      "All fuel-efficient cars have small engines.",
      "No car with a small engine is suitable for towing a large trailer.",
      "Some sedans are suitable for towing a large trailer."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a car is a sedan, then it is fuel-efficient; if it is fuel-efficient, it has a small engine; and if it has a small engine, it is not suitable for towing a large trailer. This implies that no sedan is suitable for towing a large trailer. Statement 4 directly contradicts this by asserting that some sedans are suitable for towing a large trailer."
  },
  {
    "id": "gen-17-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups secured early-stage funding.",
      "Some companies that secured early-stage funding did not become successful startups.",
      "A company's securing early-stage funding is a prerequisite for it becoming a successful startup.",
      "No company that failed to secure early-stage funding became a successful startup."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 3, and 4 all convey the same idea: only companies that secured early-stage funding can become successful startups. Statement 2, which says some funded companies did not become successful, is consistent with this, as securing funding is necessary but not sufficient for success."
  },
  {
    "id": "gen-17-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a classic, it is widely read.",
      "Every widely read book is available in multiple translations.",
      "No book available in multiple translations is out of print.",
      "Some classics are out of print."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a book is a classic, then it is widely read; if it is widely read, it is available in multiple translations; and if it is available in multiple translations, it is not out of print. This implies that no classic book is out of print. Statement 4 directly contradicts this conclusion by stating that some classics are out of print."
  },
  {
    "id": "gen-17-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified applicants possess a master's degree.",
      "Some applicants who possess a master's degree are not qualified.",
      "If an applicant does not possess a master's degree, they are not qualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 is the contrapositive of Statement 1, meaning they express the same logical rule: a master's degree is necessary to be a qualified applicant. Statement 2, indicating that some master's degree holders are not qualified, is entirely consistent with this, as a master's degree is not stated to be a sufficient condition for qualification."
  },
  {
    "id": "gen-17-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is popular, it is often fully booked on weekends.",
      "Every restaurant fully booked on weekends requires reservations at least 24 hours in advance.",
      "No restaurant that requires reservations 24 hours in advance serves walk-in customers.",
      "Some popular restaurants serve walk-in customers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a chain: if a restaurant is popular, it's fully booked; if fully booked, it requires reservations; and if it requires reservations, it does not serve walk-in customers. This implies that no popular restaurant serves walk-in customers. Statement 4 directly contradicts this by claiming some popular restaurants do serve walk-in customers."
  },
  {
    "id": "gen-17-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of this building have access to the gym.",
      "No one without access to the gym can use the swimming pool.",
      "Some individuals who can use the swimming pool are not residents of this building."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all residents have gym access. Statement 2 implies that anyone using the pool must have gym access. Statement 3, claiming some pool users are not residents, is consistent: these non-residents could still have gym access (and therefore pool access) without being building residents."
  },
  {
    "id": "gen-17-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project is under budget, it will be completed ahead of schedule.",
      "No project completed ahead of schedule requires additional resources.",
      "If a project is over budget, it must have required additional resources.",
      "There is at least one project that is under budget and also over budget."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that if a project is under budget, it does not require additional resources. Statement 3 asserts that if a project is over budget, it must have required additional resources. Statement 4 claims there is a project that is both under budget and over budget, which leads to a contradiction: such a project would simultaneously not require additional resources (from 1 & 2) and require additional resources (from 3)."
  },
  {
    "id": "gen-17-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful applicants submitted their forms by the deadline.",
      "No applicant who submitted their forms by the deadline was rejected.",
      "Some applicants who were not rejected were also not successful.",
      "Every successful applicant was not rejected."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all successful applicants were not rejected. Statement 4 reiterates this. Statement 3, which indicates that some applicants who were not rejected were not successful, is consistent, as being not rejected is a necessary but not sufficient condition for being successful."
  },
  {
    "id": "gen-18-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All eagles are birds of prey.",
      "No birds of prey are herbivores.",
      "Some eagles are herbivores."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no eagles are herbivores. Statement 3 directly contradicts this conclusion by asserting that some eagles are herbivores."
  },
  {
    "id": "gen-18-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every lawyer has a law degree.",
      "Some people with law degrees are not lawyers.",
      "Sarah has a law degree."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Sarah, having a law degree, could be a lawyer (consistent with Statement 1) or she could be one of the people with a law degree who is not a lawyer (consistent with Statement 2)."
  },
  {
    "id": "gen-18-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No professional athletes are amateurs.",
      "All Olympic medalists are professional athletes.",
      "Some amateurs are Olympic medalists."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 1 logically imply that no Olympic medalists are amateurs. Statement 3 directly contradicts this conclusion by stating that some amateurs are Olympic medalists."
  },
  {
    "id": "gen-18-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a book is a mystery novel, it has a plot twist.",
      "Some books with plot twists are not mystery novels.",
      "Every book in this series is a mystery novel.",
      "This series has many books with plot twists."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. From Statement 3 and 1, every book in this series has a plot twist, which is consistent with Statement 4. Statement 2 allows for books with plot twists that are not part of this series or not mystery novels, which is also consistent."
  },
  {
    "id": "gen-18-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Companies that prioritize customer satisfaction never lose market share.",
      "Some businesses that are not successful have lost market share.",
      "Every successful business has lost market share."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that no successful business loses market share. Statement 4 directly contradicts this conclusion by asserting that every successful business has lost market share."
  },
  {
    "id": "gen-18-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who passed the exam studied hard.",
      "Some students studied hard but did not pass the exam.",
      "Maria studied hard."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria could be a student who studied hard and passed the exam (consistent with Statement 1), or she could be one of the students who studied hard but did not pass (consistent with Statement 2)."
  },
  {
    "id": "gen-18-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All advanced students submit their assignments on time.",
      "No students who submit assignments on time receive extensions.",
      "Some students who received extensions are advanced students."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no advanced students receive extensions. Statement 3 directly contradicts this by asserting that some advanced students received extensions."
  },
  {
    "id": "gen-18-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every cat enjoys a good nap.",
      "Some animals that enjoy a good nap are not cats.",
      "Fluffy is an animal that enjoys a good nap."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Fluffy, enjoying a nap, could be a cat (consistent with Statement 1) or could be one of the animals that enjoys a nap but is not a cat (consistent with Statement 2)."
  },
  {
    "id": "gen-18-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every popular restaurant is crowded.",
      "No crowded restaurant offers quick service.",
      "Some restaurants that offer quick service are popular."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no popular restaurant offers quick service. Statement 3 directly contradicts this by asserting that some popular restaurants offer quick service."
  },
  {
    "id": "gen-18-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All vegetables are healthy foods.",
      "Some healthy foods are not vegetables.",
      "Broccoli is a healthy food."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Broccoli, being a healthy food, is consistent with Statement 1 (as a vegetable) and does not contradict Statement 2 (which notes that not all healthy foods are vegetables)."
  },
  {
    "id": "gen-19-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All marathon finishers received a medal.",
      "Every participant who ran the marathon in under 4 hours was a finisher.",
      "Some participants who ran the marathon in under 4 hours did not receive a medal."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a chain: if a participant ran in under 4 hours (Statement 2), they were a finisher, and thus they received a medal (Statement 1). This implies that all participants who ran under 4 hours must have received a medal. Statement 3 directly contradicts this by asserting that some participants who ran under 4 hours did not receive a medal."
  },
  {
    "id": "gen-19-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a bird is a raptor, it is a carnivore.",
      "All birds that nest in high cliffs are raptors.",
      "Some birds that nest in high cliffs eat only seeds.",
      "No carnivore eats only seeds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that all birds nesting in high cliffs are carnivores. Statement 4 states that no carnivore eats only seeds. Therefore, birds nesting in high cliffs cannot eat only seeds. Statement 3 directly contradicts this by stating that some birds nesting in high cliffs do eat only seeds."
  },
  {
    "id": "gen-19-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful grant application included a detailed budget.",
      "No grant application that was submitted late was successful.",
      "All grant applications submitted on time included a detailed budget.",
      "Some grant applications submitted late were successful despite lacking a detailed budget."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 4 asserts the existence of grant applications that were submitted late AND were successful AND lacked a detailed budget. This creates two contradictions: it contradicts Statement 2 (no late applications were successful), and it contradicts Statement 1 (every successful application included a detailed budget). Removing Statement 4 resolves both conflicts."
  },
  {
    "id": "gen-19-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in the advanced coding course, they must pass the prerequisite exam.",
      "No student who passed the prerequisite exam failed the final project.",
      "Every student who enrolled in the advanced coding course passed the final project.",
      "Some students failed the final project but successfully completed the advanced coding course."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that if a student enrolls in the advanced coding course, they must pass the prerequisite exam (Statement 1) and thus cannot have failed the final project (Statement 2). Therefore, enrolling in the advanced coding course implies not failing the final project. Statement 4 claims that some students failed the final project while having successfully completed (implying enrolled in) the advanced coding course, which creates a direct contradiction with this derived conclusion."
  },
  {
    "id": "gen-19-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the archaeology society have visited ancient ruins.",
      "No student who completed the advanced history seminar has visited ancient ruins.",
      "Some members of the archaeology society completed the advanced history seminar."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that an individual cannot be both a member of the archaeology society and a student who completed the advanced history seminar (because they would both have visited and not visited ancient ruins). Statement 3 directly contradicts this by asserting that such individuals do exist."
  },
  {
    "id": "gen-19-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a driver attends the advanced safety course, they receive an insurance discount.",
      "No driver who received an insurance discount has had a traffic violation in the past year.",
      "Every driver who has had a traffic violation in the past year is required to attend the advanced safety course.",
      "At least one driver has had a traffic violation in the past year."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a driver has had a traffic violation (Statement 3), they must attend the advanced safety course (Statement 1), which means they receive an insurance discount (Statement 2), and therefore they have not had a traffic violation in the past year. This concludes that if a driver has had a traffic violation, they have not had a traffic violation. Statement 4 confirms that such drivers exist, triggering this contradiction."
  },
  {
    "id": "gen-20-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is highly rated, it receives numerous awards.",
      "Some restaurants that receive numerous awards never achieve high ratings.",
      "Every restaurant that receives numerous awards is considered highly rated."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 3 claims that all restaurants receiving numerous awards are highly rated. Statement 2 claims that some restaurants receiving numerous awards are not highly rated. These two statements are in direct contradiction. Statement 1 is consistent with the other statements but does not resolve the direct contradiction between Statement 2 and Statement 3."
  },
  {
    "id": "gen-20-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified candidates possess advanced degrees.",
      "Some individuals with advanced degrees are not qualified candidates.",
      "No one without an advanced degree is a qualified candidate.",
      "Lisa is a qualified candidate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 and Statement 3 are contrapositives of each other (Qualified candidates must have advanced degrees, and anyone without an advanced degree cannot be a qualified candidate), so they are logically equivalent and consistent. Statement 2 indicates that having an advanced degree does not guarantee qualification, which is consistent. Lisa, as a qualified candidate (Statement 4), must possess an advanced degree according to Statement 1, which is also consistent."
  },
  {
    "id": "gen-20-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents who qualify for the housing subsidy have incomes below the median.",
      "If a resident's income is below the median, they receive priority for available units.",
      "Residents who receive priority for available units are never subject to additional waitlist screening.",
      "Every resident who qualified for the housing subsidy was subject to additional waitlist screening."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statements 1, 2, and 3, we can deduce a chain: if a resident qualifies for the housing subsidy, their income is below median, they receive priority, and therefore are not subject to additional waitlist screening. This means 'No resident who qualified for the housing subsidy was subject to additional waitlist screening.' Statement 4 directly contradicts this by asserting that 'Every resident who qualified for the housing subsidy was subject to additional waitlist screening'."
  },
  {
    "id": "gen-20-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it possesses specialized hunting adaptations.",
      "Species with specialized hunting adaptations rarely consume only plant matter.",
      "All species that consume only plant matter are herbivores.",
      "Some herbivores possess specialized hunting adaptations."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says carnivores have hunting adaptations. Statement 2 implies species with hunting adaptations usually eat more than just plants. Statement 3 defines herbivores. Statement 4 states that some herbivores have hunting adaptations, which is possible (e.g., omnivores with primarily herbivorous diets, or herbivores with defensive adaptations that resemble hunting adaptations). No direct contradiction arises from these statements."
  },
  {
    "id": "gen-20-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful marketing campaigns target specific demographics.",
      "Campaigns that target specific demographics always use data analytics.",
      "No campaign using data analytics relies solely on traditional media.",
      "Some successful marketing campaigns rely solely on traditional media."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statements 1, 2, and 3, we can deduce a chain: if a marketing campaign is successful, it targets specific demographics, it uses data analytics, and therefore it does not rely solely on traditional media. This means 'No successful marketing campaign relies solely on traditional media.' Statement 4 directly contradicts this by asserting that 'Some successful marketing campaigns rely solely on traditional media.'"
  },
  {
    "id": "gen-20-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project managed by Sarah is completed on schedule.",
      "Projects completed on schedule never exceed their budget.",
      "Some projects that exceed their budget are not managed by Sarah.",
      "This project exceeded its budget."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1 and 2, we can infer that any project managed by Sarah is completed on schedule and therefore never exceeds its budget. Statement 3 indicates that there are other projects, not managed by Sarah, that do exceed their budget. Statement 4 simply identifies 'this project' as one that exceeded its budget. This is consistent, as 'this project' could be one of the projects mentioned in Statement 3, not managed by Sarah."
  },
  {
    "id": "gen-20-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is enrolled in the advanced robotics course, they have completed the prerequisite.",
      "No student who has completed the prerequisite failed the diagnostic test.",
      "Every student who did not fail the diagnostic test passed the final project.",
      "Some students enrolled in the advanced robotics course failed the final project."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statements 1, 2, and 3, we can deduce a chain: if a student is enrolled in the advanced robotics course, they completed the prerequisite, did not fail the diagnostic test, and therefore passed the final project. This means 'All students enrolled in the advanced robotics course passed the final project.' Statement 4 directly contradicts this by asserting that 'Some students enrolled in the advanced robotics course failed the final project.'"
  },
  {
    "id": "gen-20-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs that undergo professional training are well-behaved.",
      "Some well-behaved dogs are not house-trained.",
      "No dog that is not house-trained is allowed inside the house.",
      "This dog is well-behaved and allowed inside the house."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 establishes that professionally trained dogs are well-behaved. Statement 2 notes that not all well-behaved dogs are house-trained. Statement 3 implies that any dog allowed inside the house must be house-trained (contrapositive). Statement 4 describes 'this dog' as both well-behaved and allowed inside. From Statement 3's contrapositive, this dog must be house-trained. This is consistent with Statement 2, as Statement 2 only says *some* well-behaved dogs are not house-trained, implying others are. No contradiction exists."
  },
  {
    "id": "gen-20-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every valid deduction relies on sound premises.",
      "If a deduction relies on sound premises, its conclusion is always logically necessitated.",
      "No conclusion that is logically necessitated can be overturned by new evidence.",
      "This deduction is valid, but its conclusion was overturned by new evidence."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statements 1, 2, and 3, we can deduce a chain: if a deduction is valid, it relies on sound premises, its conclusion is logically necessitated, and therefore it cannot be overturned by new evidence. This means 'The conclusion of every valid deduction cannot be overturned by new evidence.' Statement 4 directly contradicts this by asserting that 'This deduction is valid, but its conclusion was overturned by new evidence.'"
  },
  {
    "id": "gen-20-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful public speakers use engaging visuals.",
      "If a speaker uses engaging visuals, they prepare extensively.",
      "No speaker who prepares extensively delivers a monotonous presentation.",
      "Some public speakers deliver monotonous presentations."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statements 1, 2, and 3, we can deduce that all successful public speakers use engaging visuals, prepare extensively, and therefore do not deliver monotonous presentations. Statement 4 simply states that some public speakers do deliver monotonous presentations. This is consistent because those speakers mentioned in Statement 4 would simply fall outside the category of 'successful public speakers' defined by the other statements."
  },
  {
    "id": "gen-21-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are skilled in math.",
      "No one skilled in math struggles with calculus.",
      "Some engineers struggle with calculus."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all engineers do not struggle with calculus. This directly contradicts Statement 3, which claims some engineers do struggle with calculus. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-21-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds have feathers.",
      "Some animals are birds.",
      "Some animals do not have feathers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all birds have feathers. Statement 2 means some animals are birds, so some animals have feathers. Statement 3 suggests there are animals without feathers, which are simply animals that are not birds. All statements can be true simultaneously."
  },
  {
    "id": "gen-21-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student is on the Dean's List, they have a GPA above 3.5.",
      "No student with a GPA above 3.5 failed any course.",
      "Some students on the Dean's List failed a course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together establish that any student on the Dean's List did not fail any course. This conclusion directly contradicts Statement 3, which asserts that some students on the Dean's List did fail a course. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-21-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a fern, it reproduces by spores.",
      "All plants that reproduce by spores are non-flowering.",
      "Some ferns are found in tropical climates.",
      "Some non-flowering plants are not ferns."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all ferns are non-flowering plants. Statement 3 adds that some ferns are in tropical climates, which is compatible. Statement 4 means there are other non-flowering plants besides ferns, which is also consistent. All statements can be true together."
  },
  {
    "id": "gen-21-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All participants in the study were given a placebo.",
      "No one who was given a placebo received active medication.",
      "At least one participant in the study received active medication."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically lead to the conclusion that no participant in the study received active medication. This conclusion is directly contradicted by Statement 3. Removing Statement 3 makes the set of statements consistent."
  },
  {
    "id": "gen-21-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a car is a sedan, it has four doors.",
      "Some cars with four doors are not sedans.",
      "All cars that are sedans are fuel-efficient."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means sedans have four doors. Statement 2 allows for other types of four-door cars that are not sedans. Statement 3 states that all sedans are fuel-efficient. These statements present no logical conflict."
  },
  {
    "id": "gen-21-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Only employees who passed the security check are granted building access.",
      "No one who passed the security check had their background flagged.",
      "Some employees whose background was flagged were granted building access."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 combine to show that if an employee is granted building access, their background was not flagged. This directly contradicts Statement 3, which states that some employees whose background was flagged were granted building access. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-21-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruit bats consume only nectar.",
      "Some mammals are fruit bats.",
      "If an animal consumes only nectar, it is not a predator.",
      "Some mammals are predators."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 together imply that all fruit bats are not predators. Since some mammals are fruit bats (Statement 2), it follows that some mammals are not predators. This is entirely consistent with Statement 4, which says some other mammals are predators. The groups of 'some mammals' can be distinct."
  },
  {
    "id": "gen-21-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every artist in the gallery uses oil paint.",
      "No one who uses oil paint prefers acrylics.",
      "Some artists in the gallery prefer acrylics."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together lead to the conclusion that no artist in the gallery prefers acrylics. This directly contradicts Statement 3, which asserts that some artists in the gallery do prefer acrylics. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-21-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe calls for saffron, it is expensive.",
      "No recipe that is expensive uses only common ingredients.",
      "Some recipes that are expensive do not call for saffron.",
      "Some recipes use only common ingredients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any recipe calling for saffron is expensive and does not use only common ingredients. Statement 3 is consistent because an expensive recipe doesn't have to call for saffron. Statement 4 means there are recipes that use only common ingredients, and by Statement 2, these recipes cannot be expensive. No contradiction is present."
  },
  {
    "id": "gen-22-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird has iridescent plumage, it lives in tropical regions.",
      "All birds that live in tropical regions are fruit-eaters.",
      "No bird that is a fruit-eater has talons.",
      "Some birds with iridescent plumage have talons."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a bird has iridescent plumage, it lives in tropical regions, then it is a fruit-eater, and then it does not have talons. This implies that no bird with iridescent plumage has talons. Statement 4 directly contradicts this conclusion by asserting that some birds with iridescent plumage do have talons."
  },
  {
    "id": "gen-22-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires full sun, it needs daily watering.",
      "All plants that need daily watering thrive in sandy soil.",
      "Some plants thrive in sandy soil but do not require full sun.",
      "My cactus is a plant that requires full sun."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any plant requiring full sun thrives in sandy soil. Statement 3 indicates that there are plants thriving in sandy soil that do not require full sun, which is consistent with the previous implication. Statement 4 describes a specific plant that requires full sun and would therefore thrive in sandy soil, which is also consistent."
  },
  {
    "id": "gen-22-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in advanced calculus, they must have passed linear algebra.",
      "All students who passed linear algebra are eligible for a research grant.",
      "No student eligible for a research grant has incomplete coursework.",
      "Some students enrolled in advanced calculus have incomplete coursework."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if a student enrolls in advanced calculus, they must have passed linear algebra, then they are eligible for a research grant, and then they do not have incomplete coursework. This leads to the conclusion that no student enrolled in advanced calculus has incomplete coursework. Statement 4 directly contradicts this, asserting that some students enrolled in advanced calculus do have incomplete coursework."
  },
  {
    "id": "gen-22-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who finished the marathon completed the training program.",
      "Some participants who completed the training program did not finish the marathon.",
      "If a participant completed the training program, they received a medal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all marathon finishers completed the training. Statement 3 says anyone completing training received a medal. Thus, marathon finishers received medals. Statement 2 says some training completers did not finish the marathon; these individuals would still receive medals according to Statement 3, making the set consistent."
  },
  {
    "id": "gen-22-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a company invests in renewable energy, it qualifies for tax credits.",
      "All companies that qualify for tax credits implement sustainable practices.",
      "No company that implements sustainable practices uses non-recyclable packaging.",
      "Some companies that invest in renewable energy use non-recyclable packaging."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a company invests in renewable energy, it qualifies for tax credits, then it implements sustainable practices, and then it does not use non-recyclable packaging. This implies that no company investing in renewable energy uses non-recyclable packaging. Statement 4 directly contradicts this by stating that some companies investing in renewable energy do use non-recyclable packaging."
  },
  {
    "id": "gen-22-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a musician plays jazz, they understand complex harmonies.",
      "No musician who understands complex harmonies performs only simple melodies.",
      "Some musicians perform only simple melodies.",
      "All musicians who play jazz are highly skilled."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that jazz musicians do not perform only simple melodies. Statement 3 confirms the existence of musicians who perform only simple melodies, which is consistent, as these individuals simply cannot be jazz musicians or understand complex harmonies according to the prior statements. Statement 4 adds an independent characteristic for jazz musicians, which does not create a contradiction."
  },
  {
    "id": "gen-22-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird nests in a rainforest, it has vivid plumage.",
      "All birds with vivid plumage are insectivores.",
      "No insectivore bird migrates long distances.",
      "Some birds that nest in a rainforest migrate long distances."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a bird nests in a rainforest, it has vivid plumage, then it is an insectivore, and then it does not migrate long distances. This implies that no bird nesting in a rainforest migrates long distances. Statement 4 directly contradicts this conclusion by stating that some birds that nest in a rainforest do migrate long distances."
  },
  {
    "id": "gen-22-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "Some people with strong leadership skills are not successful entrepreneurs.",
      "If a person possesses strong leadership skills, they inspire their team.",
      "Maria inspires her team but is not a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 imply that all successful entrepreneurs inspire their team. Statement 2 explicitly allows for people with strong leadership skills who are not entrepreneurs, and these individuals would still inspire their team (from Statement 3). Statement 4 simply describes Maria as one such person, consistent with all prior statements."
  },
  {
    "id": "gen-22-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the debate team are skilled speakers.",
      "No skilled speaker lacks confidence.",
      "If a student is confident, they are persuasive.",
      "Some members of the debate team are not persuasive."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: if a student is a member of the debate team, they are a skilled speaker (from 1), then they are confident (from 2), and then they are persuasive (from 3). This implies that all members of the debate team are persuasive. Statement 4 directly contradicts this conclusion by asserting that some members of the debate team are not persuasive."
  },
  {
    "id": "gen-22-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful politician is an effective public speaker.",
      "If a person is an effective public speaker, they possess charisma.",
      "Some people who possess charisma are not successful politicians.",
      "No one who possesses charisma is dull."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all successful politicians possess charisma. Statement 3 asserts that not all people with charisma are successful politicians, which is consistent because charisma could stem from other factors. Statement 4 adds that charismatic people are not dull, which doesn't contradict the other statements."
  },
  {
    "id": "gen-23-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All runners are athletes.",
      "No athlete is a couch potato.",
      "Some runners are couch potatoes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all runners are athletes. Statement 2 says no athlete is a couch potato. Taken together, these imply that no runner is a couch potato. This directly contradicts Statement 3, which claims some runners are couch potatoes. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-23-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds have wings.",
      "Some creatures with wings can fly.",
      "Some birds cannot fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Birds all have wings. Some creatures with wings (including some birds, but not necessarily all) can fly. Some birds, like penguins, are known not to fly, which is compatible with all birds having wings and some winged creatures being able to fly."
  },
  {
    "id": "gen-23-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful writers have creative minds.",
      "No one with a creative mind struggles with ideas.",
      "Some successful writers struggle with ideas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all successful writers have creative minds. Statement 2 states that no one with a creative mind struggles with ideas. It logically follows that no successful writer struggles with ideas. This conclusion directly contradicts Statement 3, which claims some successful writers struggle with ideas. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-23-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "Some dogs enjoy swimming."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Dogs are a type of mammal. The existence of other mammals (like cats or humans) that are not dogs makes Statement 2 true. Statement 3 describes a characteristic of some dogs, which doesn't conflict with the other statements."
  },
  {
    "id": "gen-23-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every book in the library is cataloged.",
      "No cataloged item is missing.",
      "At least one book in the library is missing."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every book in the library is cataloged. Statement 2 says no cataloged item is missing. Together, these imply that no book in the library is missing. This directly contradicts Statement 3, which asserts that at least one book in the library is missing. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-23-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the exam studied diligently.",
      "Some students who studied diligently did not pass the exam.",
      "Maria studied diligently."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Maria studying diligently means she could be a student who passed the exam (consistent with Statement 1) or a student who studied diligently but did not pass (consistent with Statement 2). There is no contradiction."
  },
  {
    "id": "gen-23-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All rare stamps are valuable.",
      "Some stamps from the 1800s are rare.",
      "No stamps from the 1800s are valuable."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 2 indicates that some stamps from the 1800s are rare. Statement 1 says all rare stamps are valuable. Combining these, it must be true that some stamps from the 1800s are valuable. This conclusion directly contradicts Statement 3, which claims that no stamps from the 1800s are valuable. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-23-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All chefs are cooks.",
      "Some cooks are not chefs.",
      "No cook is an amateur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Chefs are a subset of cooks, meaning Statement 1 is true. There are also cooks who are not chefs (e.g., line cooks, pastry cooks who aren't 'chefs' in title), making Statement 2 true. Statement 3 establishes that the category of 'cooks' (which includes chefs) does not overlap with 'amateurs'. All statements can be simultaneously true."
  },
  {
    "id": "gen-23-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All artists appreciate beauty.",
      "No one who appreciates beauty is indifferent to nature.",
      "Some artists are indifferent to nature."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all artists appreciate beauty. Statement 2 asserts that no one who appreciates beauty is indifferent to nature. From these two statements, it logically follows that no artist is indifferent to nature. This conclusion directly contradicts Statement 3, which claims some artists are indifferent to nature. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-23-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student passed the biology exam.",
      "Some students did not pass the chemistry exam.",
      "No student passed both exams."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. If every student passed the biology exam (Statement 1) and no student passed both exams (Statement 3), then it must be true that every student did not pass the chemistry exam. This implies that some students did not pass the chemistry exam (Statement 2), which is perfectly consistent with all students not passing it."
  },
  {
    "id": "gen-24-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates received an interview.",
      "No candidate who missed the deadline was qualified.",
      "Every candidate who received an interview was given a follow-up assessment.",
      "Some candidates who missed the deadline were given a follow-up assessment."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 indicates that if a candidate missed the deadline, they were not qualified. Statement 1 implies that if a candidate was not qualified, they did not receive an interview. Statement 3 implies that if a candidate did not receive an interview, they were not given a follow-up assessment. Therefore, any candidate who missed the deadline was not given a follow-up assessment. This contradicts Statement 4, which claims some candidates who missed the deadline were given a follow-up assessment."
  },
  {
    "id": "gen-24-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All paintings selected for the exhibition were created by local artists.",
      "No painting created by a local artist used only oil paints.",
      "Some paintings selected for the exhibition did not use only oil paints.",
      "Every painting that used only oil paints was restored last year."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 together imply that all paintings selected for the exhibition did not use only oil paints. Statement 3, 'Some paintings selected for the exhibition did not use only oil paints,' is consistent with this, as 'some' is compatible with 'all'. Statement 4 provides information about paintings that used only oil paints, but since paintings selected for the exhibition did not use only oil paints, Statement 4 simply doesn't apply to them, causing no contradiction."
  },
  {
    "id": "gen-24-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All applicants accepted into the fellowship program submitted a research proposal.",
      "No one who submitted a research proposal had a GPA below 3.5.",
      "Only applicants with a GPA below 3.5 were required to submit letters of recommendation.",
      "Some applicants accepted into the fellowship program were required to submit letters of recommendation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all applicants accepted into the fellowship program had a GPA of 3.5 or higher. Statement 3 indicates that if an applicant was required to submit letters of recommendation, their GPA must have been below 3.5. Statement 4 asserts that some applicants accepted into the fellowship program were required to submit letters of recommendation. This leads to a contradiction: those accepted applicants who submitted letters of recommendation must have had a GPA below 3.5 (from Statement 3), but all accepted applicants had a GPA of 3.5 or higher (from Statements 1 and 2)."
  },
  {
    "id": "gen-24-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All qualified candidates received an interview.",
      "No candidate who missed the deadline was qualified.",
      "Every candidate who received an interview was given a follow-up assessment.",
      "Some candidates who missed the deadline applied to a different position."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 logically lead to the conclusion that no candidate who missed the deadline was given a follow-up assessment. Statement 4 states that some candidates who missed the deadline applied to a different position. This does not contradict the previous conclusion, as those candidates could still have missed the deadline, not been qualified, not received an interview, and therefore not received a follow-up assessment, while also applying to a different position. The statements are consistent."
  },
  {
    "id": "gen-24-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All accepted manuscripts underwent peer review.",
      "No manuscript that underwent peer review contained plagiarized content.",
      "Every manuscript that was published without further revision had a content accuracy score above 90.",
      "Some accepted manuscripts contained plagiarized content."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 logically imply that all accepted manuscripts did not contain plagiarized content. This directly contradicts Statement 4, which claims that some accepted manuscripts contained plagiarized content. Statement 3 is irrelevant to this contradiction."
  },
  {
    "id": "gen-24-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All students enrolled in the honors program completed an advanced research project.",
      "No student who completed an advanced research project received a grade lower than A-.",
      "Some students who were placed on academic probation received a grade lower than A-.",
      "Every student who was placed on academic probation failed to complete an advanced research project."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 indicate that all students in the honors program received a grade of A- or higher. Statement 3 mentions some students on academic probation receiving lower grades, which is consistent with the honors students not being on probation. Statement 4 indicates that students on academic probation did not complete an advanced research project, which is consistent with not being in the honors program. No direct contradiction arises from these statements."
  },
  {
    "id": "gen-24-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful startup company secured venture capital funding.",
      "No company that secured venture capital funding operated without a clear business plan.",
      "Only companies with a strong market niche obtained venture capital funding.",
      "Some successful startup companies operated without a clear business plan."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all successful startup companies operated with a clear business plan. This directly contradicts Statement 4, which claims that some successful startup companies operated without a clear business plan. Statement 3, while descriptive of companies that obtained venture capital funding, does not participate in this specific logical chain to create the contradiction."
  },
  {
    "id": "gen-24-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All experienced programmers are proficient in at least two programming languages.",
      "No intern is proficient in at least two programming languages.",
      "Every project manager works with both experienced programmers and interns.",
      "Some project managers are also experienced programmers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that experienced programmers and interns are mutually exclusive groups (an individual cannot be both). Statement 3 describes project managers' working relationships but does not define who they are. Statement 4 states that some project managers are experienced programmers, which is consistent with project managers being distinct from interns and working with both types of individuals. No contradiction is formed."
  },
  {
    "id": "gen-24-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful sales presentations included a product demonstration.",
      "No sales presentation that included a product demonstration omitted key features.",
      "Only sales presentations that omitted key features used outdated marketing materials.",
      "Some successful sales presentations used outdated marketing materials."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all successful sales presentations did not omit key features. Statement 3 indicates that if a sales presentation used outdated marketing materials, then it must have omitted key features. Statement 4 claims that some successful sales presentations used outdated marketing materials. This leads to a contradiction: those successful sales presentations that used outdated marketing materials (Statement 4) must have omitted key features (from Statement 3), but all successful sales presentations did not omit key features (from Statements 1 and 2)."
  },
  {
    "id": "gen-24-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All antique artifacts require careful handling.",
      "No museum exhibit that requires careful handling is regularly touched by visitors.",
      "Some museum exhibits are regularly touched by visitors.",
      "Every artifact more than 200 years old is an antique artifact."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 together imply that all artifacts more than 200 years old are not regularly touched by visitors. Statement 3 states that some museum exhibits are regularly touched by visitors. This is consistent; it simply means those museum exhibits that are regularly touched by visitors are not antique artifacts and are not more than 200 years old. There is no contradiction."
  },
  {
    "id": "gen-25-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is assigned to Project Alpha, they must attend the Tuesday meeting.",
      "Every student attending the Tuesday meeting will present their progress report.",
      "No student who presents a progress report is exempt from the final written exam.",
      "Only students exempt from the final written exam are eligible for early graduation.",
      "Some students assigned to Project Alpha are eligible for early graduation."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 logically connect: if a student is assigned to Project Alpha, then they attend the Tuesday meeting, then they present a progress report, which means they are not exempt from the final written exam (Project Alpha → Not Exempt from Final Exam). Statement 4 means if a student is eligible for early graduation, they must be exempt from the final written exam (Eligible for Early Graduation → Exempt from Final Exam). Therefore, if a student is assigned to Project Alpha, they cannot be eligible for early graduation (Project Alpha → Not Exempt from Final Exam → Not Eligible for Early Graduation). Statement 5 directly contradicts this by claiming some students assigned to Project Alpha are eligible for early graduation."
  },
  {
    "id": "gen-25-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a restaurant is certified organic, its produce must be locally sourced.",
      "Any restaurant with locally sourced produce participates in the 'Farm-to-Table' initiative.",
      "Restaurants participating in the 'Farm-to-Table' initiative always use seasonal ingredients.",
      "No restaurant that uses seasonal ingredients serves imported exotic fruit.",
      "Some restaurants that are certified organic serve imported exotic fruit."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: if a restaurant is certified organic, then its produce is locally sourced, then it participates in 'Farm-to-Table', then it uses seasonal ingredients, which means it does not serve imported exotic fruit (Certified Organic → Not Serve Imported Exotic Fruit). Statement 5 directly contradicts this derived conclusion by asserting that some certified organic restaurants do serve imported exotic fruit."
  },
  {
    "id": "gen-25-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs in the kennel are fed organic food.",
      "Every animal fed organic food has a shiny coat.",
      "No animal with a shiny coat has skin allergies.",
      "Only animals with skin allergies receive a special supplement.",
      "Some dogs in the kennel receive a special supplement."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 logically connect: if a dog is in the kennel, then it is fed organic food, then it has a shiny coat, which means it does not have skin allergies (Dog in Kennel → Not Skin Allergies). Statement 4 means if an animal receives a special supplement, then it must have skin allergies (Receives Special Supplement → Skin Allergies). Therefore, combining these, if a dog is in the kennel, it cannot receive a special supplement (Dog in Kennel → Not Skin Allergies; and Receives Special Supplement → Skin Allergies, so Dog in Kennel → Not Special Supplement). Statement 5 directly contradicts this by stating some dogs in the kennel do receive a special supplement."
  },
  {
    "id": "gen-25-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a new product launched last quarter, it underwent extensive market research.",
      "Every product that underwent extensive market research received positive customer feedback.",
      "No product with positive customer feedback was subject to a recall.",
      "Only products subject to a recall are immediately removed from shelves.",
      "Some new products launched last quarter were immediately removed from shelves."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 logically connect: if a new product launched last quarter, then it underwent extensive market research, then it received positive customer feedback, which means it was not subject to a recall (Product Launched Last Quarter → Not Subject to Recall). Statement 4 means if a product was immediately removed from shelves, then it must have been subject to a recall (Immediately Removed from Shelves → Subject to Recall). Therefore, combining these, if a product launched last quarter, it could not have been immediately removed from shelves (Product Launched Last Quarter → Not Subject to Recall; and Immediately Removed from Shelves → Subject to Recall, so Product Launched Last Quarter → Not Immediately Removed from Shelves). Statement 5 directly contradicts this by asserting some new products launched last quarter were immediately removed from shelves."
  },
  {
    "id": "gen-25-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a vehicle passes its emissions test, it meets environmental regulations.",
      "Every vehicle that meets environmental regulations qualifies for the tax rebate.",
      "No vehicle that qualifies for the tax rebate is subject to the urban congestion charge.",
      "Only vehicles subject to the urban congestion charge are older than ten years.",
      "Some vehicles that pass their emissions test are older than ten years."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 logically connect: if a vehicle passes its emissions test, then it meets environmental regulations, then it qualifies for a tax rebate, which means it is not subject to the urban congestion charge (Passes Emissions Test → Not Subject to Urban Congestion Charge). Statement 4 means if a vehicle is older than ten years, then it must be subject to the urban congestion charge (Older Than Ten Years → Subject to Urban Congestion Charge). Therefore, combining these, if a vehicle passes its emissions test, it cannot be older than ten years (Passes Emissions Test → Not Subject to Urban Congestion Charge; and Older Than Ten Years → Subject to Urban Congestion Charge, so Passes Emissions Test → Not Older Than Ten Years). Statement 5 directly contradicts this by stating some vehicles that pass their emissions test are older than ten years."
  },
  {
    "id": "gen-26-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All reptiles are cold-blooded animals.",
      "No cold-blooded animal can survive in extreme arctic conditions.",
      "Some animals that can survive in extreme arctic conditions are reptiles."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "From Statement 1, 'All reptiles are cold-blooded animals'. From Statement 3, 'Some animals that can survive in extreme arctic conditions are reptiles'. Combining these, it implies that 'Some animals that can survive in extreme arctic conditions are cold-blooded animals'. This directly contradicts Statement 2, which states 'No cold-blooded animal can survive in extreme arctic conditions'."
  },
  {
    "id": "gen-26-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All trees in the park are deciduous.",
      "Some deciduous trees have red leaves in autumn.",
      "No oak trees have red leaves in autumn.",
      "There are oak trees in the park."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, some deciduous trees (like maples) could have red leaves, while other deciduous trees in the park (like oaks) do not. The existence of oak trees in the park (which are deciduous by Statement 1) that do not have red leaves does not conflict with some other deciduous trees having red leaves."
  },
  {
    "id": "gen-26-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in a summer course, they must pay an additional fee.",
      "All students who pay an additional fee are eligible for financial aid.",
      "No student enrolled in a summer course is eligible for financial aid."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says 'If a student enrolls in a summer course, they must pay an additional fee'. Statement 2 says 'All students who pay an additional fee are eligible for financial aid'. Combining these two implies that 'If a student enrolls in a summer course, they are eligible for financial aid'. This directly contradicts Statement 3, which states 'No student enrolled in a summer course is eligible for financial aid'."
  },
  {
    "id": "gen-26-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds in this aviary are native to North America.",
      "Some birds native to North America are migratory.",
      "No bird that is migratory stays in one place year-round.",
      "There is a bird in this aviary that stays in one place year-round."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statement 4, there is a bird in the aviary that stays year-round. From Statement 3, this means that bird is not migratory. From Statement 1, this non-migratory bird is native to North America. Statement 2, 'Some birds native to North America are migratory', allows for other North American birds (perhaps not in the aviary, or different birds in the aviary) to be migratory."
  },
  {
    "id": "gen-26-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the hiking club owns waterproof boots.",
      "No one who owns waterproof boots has ever complained about wet feet.",
      "Sarah is a member of the hiking club.",
      "Sarah has complained about wet feet after a hike."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, 'Sarah is a member of the hiking club'. From Statement 1, 'Every member of the hiking club owns waterproof boots'. Therefore, Sarah owns waterproof boots. From Statement 2, 'No one who owns waterproof boots has ever complained about wet feet'. This implies that Sarah has never complained about wet feet. This contradicts Statement 4, 'Sarah has complained about wet feet after a hike'."
  },
  {
    "id": "gen-26-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who receive a bonus have met their annual targets.",
      "Some employees who met their annual targets did not receive a bonus.",
      "John received a bonus this year.",
      "John met his annual targets this year."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. John, as stated in Statement 3, received a bonus, and by Statement 1, must have met his annual targets (consistent with Statement 4). Statement 2 allows for other employees who met their targets but did not receive a bonus, which does not contradict John's situation."
  },
  {
    "id": "gen-26-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a student passes the final exam, they will receive a certificate.",
      "Only students who attend all lectures are eligible to receive a certificate.",
      "Some students who did not attend all lectures passed the final exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 says 'Some students who did not attend all lectures passed the final exam'. From Statement 1, 'If a student passes the final exam, they will receive a certificate'. Combining these, it implies that 'Some students who did not attend all lectures received a certificate'. However, Statement 2 says 'Only students who attend all lectures are eligible to receive a certificate', which means any student who received a certificate must have attended all lectures. This creates a direct contradiction."
  },
  {
    "id": "gen-26-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "No one who is afraid to take risks possesses strong leadership skills.",
      "Sarah possesses strong leadership skills.",
      "Sarah is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. From Statement 4, Sarah is a successful entrepreneur. From Statement 1, she possesses strong leadership skills (consistent with Statement 3). From Statement 2, anyone with strong leadership skills is not afraid to take risks, meaning Sarah is not afraid to take risks. These facts are consistent."
  },
  {
    "id": "gen-26-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student invited to the Dean's List reception had a GPA above 3.8.",
      "No student with a GPA above 3.8 failed any course.",
      "Some students who failed at least one course were invited to the Dean's List reception."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 says 'Some students who failed at least one course were invited to the Dean's List reception'. From Statement 1, 'Every student invited to the Dean's List reception had a GPA above 3.8'. From Statement 2, 'No student with a GPA above 3.8 failed any course'. Following this chain, 'Some students who failed at least one course' were 'invited', had a 'GPA above 3.8', and therefore 'did not fail any course'. This creates a direct contradiction, as a student cannot both have 'failed at least one course' and 'not failed any course'."
  },
  {
    "id": "gen-26-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All public beaches are open only during daylight hours.",
      "Some public beaches have lifeguards on duty.",
      "No beach with lifeguards on duty is unsupervised.",
      "Some beaches that are unsupervised are not public beaches."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements are consistent. From Statement 2, some public beaches have lifeguards. From Statement 3, these beaches are not unsupervised. This means some public beaches are supervised. Statement 4 simply states that some unsupervised beaches are not public, which is entirely possible and does not conflict with public beaches being supervised (or open during daylight hours, from Statement 1)."
  },
  {
    "id": "gen-27-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird has blue feathers, it migrates south for winter.",
      "Birds that migrate south for winter never nest in this region.",
      "All robins have blue feathers.",
      "Some robins nest in this region."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that all robins have blue feathers. Statement 1 says that if a bird has blue feathers, it migrates south. Statement 2 states that birds that migrate south never nest in this region. This chain implies that all robins do not nest in this region, which directly contradicts Statement 4."
  },
  {
    "id": "gen-27-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All lawyers are college graduates.",
      "Some college graduates are not lawyers.",
      "Maria is a college graduate.",
      "If someone is a college graduate, they are capable of critical thought."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. Maria could be a college graduate who is either a lawyer or not a lawyer. The statements about critical thought are compatible with the other conditions."
  },
  {
    "id": "gen-27-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Employees receive a bonus only if they exceed their sales quota.",
      "Unless an employee misses their weekly targets, they are eligible for promotion.",
      "No employee who exceeds their sales quota also misses their weekly targets.",
      "Some employees who receive a bonus are not eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 means that if an employee receives a bonus, they exceed their sales quota. Statement 3 implies that if an employee exceeds their sales quota, they do not miss their weekly targets. Statement 2 means that if an employee does not miss their weekly targets, they are eligible for promotion. Therefore, if an employee receives a bonus, they are eligible for promotion, which contradicts Statement 4."
  },
  {
    "id": "gen-27-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All scientists are skilled researchers.",
      "Some skilled researchers are not scientists.",
      "If someone is a skilled researcher, they are good at problem-solving.",
      "No one good at problem-solving is an unskilled worker."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The existence of skilled researchers who are not scientists is compatible with other relationships. The conditions create a chain from scientists to not being unskilled workers, but no contradiction arises."
  },
  {
    "id": "gen-27-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "No business that prioritizes customer satisfaction goes bankrupt.",
      "Some businesses that do not prioritize customer satisfaction thrive.",
      "If a business thrives, it is a successful business."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates that if a business thrives, it is successful. Statement 1 indicates that all successful businesses prioritize customer satisfaction. This means that if a business thrives, it must prioritize customer satisfaction. This contradicts Statement 3, which claims some thriving businesses do not prioritize customer satisfaction."
  },
  {
    "id": "gen-27-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a bestseller, it is frequently discussed.",
      "Some books that are frequently discussed are not bestsellers.",
      "No book that is rarely discussed becomes a classic.",
      "All books that are frequently discussed are available at the library."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The second statement allows for books that are discussed but not bestsellers, which is compatible with the conditional relationships stated."
  },
  {
    "id": "gen-27-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student is late for class, they must report to the office.",
      "Reporting to the office is required only if the student has no valid excuse.",
      "Unless a student has a valid excuse, they are assigned detention.",
      "No student assigned detention is allowed to participate in extracurriculars.",
      "Some students who are late for class are allowed to participate in extracurriculars."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 1 says late for class implies reporting to the office. Statement 2 says reporting to the office implies no valid excuse. Statement 3 says no valid excuse implies assigned detention. Statement 4 says assigned detention implies not allowed to participate in extracurriculars. This forms a chain showing that if a student is late for class, they are not allowed to participate in extracurriculars, which contradicts Statement 5."
  },
  {
    "id": "gen-27-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate is qualified, they are offered an interview.",
      "Not every candidate offered an interview is qualified.",
      "All candidates offered an interview have excellent references.",
      "No candidate with poor references is qualified."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The existence of unqualified candidates who are offered interviews (and thus have excellent references) is consistent with the other conditions. The contrapositive of Statement 4 (if qualified, then has excellent references) is compatible with Statement 1 and 3."
  },
  {
    "id": "gen-27-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is carnivorous, it hunts large prey.",
      "No species that hunts large prey is primarily an herbivore.",
      "Unless a species is primarily an herbivore, it has sharp claws.",
      "All species with sharp claws are also tree-dwelling.",
      "Some carnivorous species are not tree-dwelling."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 1 indicates that if a species is carnivorous, it hunts large prey. Statement 2 indicates that if a species hunts large prey, it is not primarily an herbivore. Statement 3 indicates that if a species is not primarily an herbivore, it has sharp claws. Statement 4 indicates that if a species has sharp claws, it is tree-dwelling. This chain implies that if a species is carnivorous, it is tree-dwelling, which contradicts Statement 5."
  },
  {
    "id": "gen-27-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes all assignments, they receive full credit for the course.",
      "Some students receive full credit for the course without completing all assignments.",
      "Every student who receives full credit for the course also scores highly on the final exam.",
      "No student who fails to score highly on the final exam completes all assignments."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. The statements allow for students who receive full credit without completing all assignments, as long as they score highly on the final exam. The contrapositive of Statement 4 (if completes all assignments, then scores highly on final exam) is consistent with the chain from Statement 1 and Statement 3."
  },
  {
    "id": "gen-28-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All residents of the building have access to the gym.",
      "No one who has access to the gym is allowed in the pool.",
      "Some residents of the building are allowed in the pool."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that 'No resident of the building is allowed in the pool' (since all residents have gym access, and no one with gym access is allowed in the pool). This directly contradicts Statement 3, which claims 'Some residents of the building are allowed in the pool'. Removing Statement 3 resolves this conflict."
  },
  {
    "id": "gen-28-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds in this sanctuary can fly.",
      "Some birds in this sanctuary do not migrate south.",
      "All birds that migrate south can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true simultaneously. For example, some birds in the sanctuary could be non-migratory and fly (consistent with 1 and 2). Other birds could migrate south and also fly (consistent with 1 and 3). There is no logical contradiction."
  },
  {
    "id": "gen-28-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All artists who display their work are members of the gallery.",
      "No gallery member pays a commission on sales.",
      "Some artists who display their work pay a commission on sales."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that 'No artist who displays their work pays a commission on sales' (because all displaying artists are gallery members, and no gallery member pays a commission). This directly contradicts Statement 3, which asserts that 'Some artists who display their work pay a commission on sales'. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-28-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every cat in this shelter has been vaccinated.",
      "Some vaccinated animals are not cats.",
      "No cat in this shelter has a microchip."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. There can be cats that are vaccinated and not microchipped (consistent with 1 and 3). There can also be other animals that are vaccinated but are not cats (consistent with 2). No contradiction arises from these conditions."
  },
  {
    "id": "gen-28-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All hikers who completed the trail used a map.",
      "No hiker who used a map wore improper footwear.",
      "Some hikers completed the trail but wore improper footwear."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that 'No hiker who completed the trail wore improper footwear' (since all who completed used a map, and no one who used a map wore improper footwear). This conclusion directly contradicts Statement 3, which claims 'Some hikers completed the trail but wore improper footwear'. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-28-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students who passed the final exam completed the practice problems.",
      "No student who completed the practice problems scored below 70%.",
      "Some students who scored below 70% did not pass the final exam."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that 'All students who passed the final exam did not score below 70%'. Statement 3, 'Some students who scored below 70% did not pass the final exam', is perfectly consistent with this, as it means the group of students who scored below 70% could only be those who failed the final exam. There is no contradiction."
  },
  {
    "id": "gen-28-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every employee received a bonus this year.",
      "No employee who received a promotion also received a bonus.",
      "Some employees received a promotion this year."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 3 imply that 'Some employees did not receive a bonus' (because some employees received a promotion, and no employee who received a promotion also received a bonus). This conclusion contradicts Statement 1, which states 'Every employee received a bonus this year'. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-28-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful entrepreneurs take calculated risks.",
      "No one who avoids all risks is a successful entrepreneur.",
      "Some successful entrepreneurs did not avoid all risks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 implies that 'All successful entrepreneurs do not avoid all risks'. Statement 3, 'Some successful entrepreneurs did not avoid all risks', is a particular instance that is entirely consistent with this universal truth. Statement 1 describes another characteristic of successful entrepreneurs. No logical contradiction exists among these statements."
  },
  {
    "id": "gen-28-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every bird in the aviary is a parrot or a macaw.",
      "No parrot in the aviary has red feathers.",
      "No macaw in the aviary has red feathers.",
      "At least one bird in the aviary has red feathers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 together imply that 'No bird in the aviary has red feathers'. This is because every bird must be a parrot or a macaw (Statement 1), and neither parrots nor macaws have red feathers (Statements 2 and 3). This conclusion directly contradicts Statement 4, which claims 'At least one bird in the aviary has red feathers'. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-28-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students enrolled in the advanced robotics course are engineering majors.",
      "Some engineering majors are not enrolled in the advanced robotics course.",
      "No student who passed the advanced robotics course is a business major."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Statement 1 establishes a subset relationship. Statement 2 confirms that engineering majors exist outside the advanced robotics course, which is possible. Statement 3 adds a condition about students who pass the course, but it doesn't contradict the other statements. No logical inconsistency is present."
  },
  {
    "id": "gen-29-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All owls are birds.",
      "No birds are mammals.",
      "Some animals that hunt at night are owls.",
      "Every animal that hunts at night is a mammal."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 3, there exists an animal that is both an owl and hunts at night. According to Statement 1, all owls are birds, and Statement 2 states that no birds are mammals. Therefore, this specific animal that hunts at night cannot be a mammal. This conclusion directly contradicts Statement 4, which claims that every animal that hunts at night is a mammal. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-29-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are innovative thinkers.",
      "Some people who start businesses fail.",
      "No innovative thinkers are afraid of risk.",
      "Anyone who fails a business venture is afraid of risk."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. For example, a person could start a business, fail (as per Statement 2), be afraid of risk (as per Statement 4), not be an innovative thinker (as a result of Statement 3), and consequently not be a successful entrepreneur (as a result of Statement 1). This scenario is logically sound and does not present any contradictions."
  },
  {
    "id": "gen-29-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All ancient scrolls are fragile.",
      "No fragile artifacts can be handled without gloves.",
      "Every item requiring gloves for handling is stored in a climate-controlled vault.",
      "Some ancient scrolls are regularly displayed to the public.",
      "No item stored in a climate-controlled vault is ever displayed to the public."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 4 indicates that there is at least one ancient scroll that is regularly displayed to the public. Following Statement 1, this scroll is fragile. Statement 2 then implies that it cannot be handled without gloves, and Statement 3 further implies it must be stored in a climate-controlled vault. Thus, there exists an item that is both displayed to the public and stored in a climate-controlled vault. This directly contradicts Statement 5, which asserts that no item stored in a climate-controlled vault is ever displayed to the public. Removing Statement 5 resolves the inconsistency."
  },
  {
    "id": "gen-29-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All experienced chefs value high-quality ingredients.",
      "Some restaurant owners are not experienced chefs.",
      "No one who values high-quality ingredients compromises on taste.",
      "Some restaurant owners do not compromise on taste."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A restaurant owner who does not compromise on taste (Statement 4) could be an experienced chef who values high-quality ingredients (Statements 1 and 3). Alternatively, they could be a restaurant owner who is not an experienced chef (Statement 2), but still manages to not compromise on taste without necessarily valuing high-quality ingredients, or by valuing them without being an 'experienced chef' in the defined sense. No logical contradiction arises."
  },
  {
    "id": "gen-29-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every student admitted to the honors program has a GPA above 3.8.",
      "No student with a GPA above 3.8 failed the advanced calculus course.",
      "Some students who failed the advanced calculus course were nevertheless admitted to the honors program."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims that some students failed advanced calculus and were admitted to the honors program. However, Statement 1 indicates that all students admitted to the honors program have a GPA above 3.8, and Statement 2 states that no student with a GPA above 3.8 failed the advanced calculus course. Therefore, any student admitted to the honors program must not have failed the advanced calculus course. This directly contradicts Statement 3. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-29-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful product launches involved extensive market research.",
      "Some product launches failed despite extensive market research.",
      "No product launch that failed generated positive media attention.",
      "Every product launch that generated positive media attention involved extensive market research."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. It is possible to have successful launches that involved market research (Statement 1) and generated positive media attention (Statement 4). It is also possible to have failed launches that involved market research (Statement 2) but did not generate positive media attention (Statement 3). The existence of product launches that failed despite market research does not contradict the conditions for successful launches or those generating positive media attention."
  },
  {
    "id": "gen-29-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful marketing campaigns incorporate social media strategies.",
      "Every social media strategy targets a specific demographic.",
      "Some marketing campaigns fail to target a specific demographic."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says that all successful marketing campaigns incorporate social media strategies. Statement 2 says that every social media strategy targets a specific demographic. Logically, this means that all successful marketing campaigns must target a specific demographic. This derived conclusion directly contradicts Statement 3, which claims that some marketing campaigns fail to target a specific demographic. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-29-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All effective public speakers prepare thoroughly.",
      "Some politicians are effective public speakers.",
      "No one who prepares thoroughly relies solely on impromptu remarks.",
      "Some politicians rely solely on impromptu remarks."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. The group of politicians described in Statement 2 (effective public speakers) would prepare thoroughly (Statement 1) and thus not rely on impromptu remarks (Statement 3). The group of politicians described in Statement 4 (rely solely on impromptu remarks) would therefore not prepare thoroughly (from Statement 3) and thus not be effective public speakers (from Statement 1). These are two distinct, non-contradictory groups of politicians."
  },
  {
    "id": "gen-29-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every successful negotiation concludes with a signed agreement.",
      "No signed agreement can be unilaterally rejected without penalty.",
      "Some negotiations that achieved their objectives were unilaterally rejected without penalty.",
      "All negotiations that achieved their objectives were successful negotiations."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates that all negotiations achieving their objectives were successful. Statement 1 states that every successful negotiation concludes with a signed agreement, and Statement 2 says no signed agreement can be unilaterally rejected without penalty. Therefore, it logically follows that no negotiation that achieved its objectives could be unilaterally rejected without penalty. This conclusion directly contradicts Statement 3, which asserts that some negotiations that achieved their objectives were unilaterally rejected without penalty. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-29-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All top-tier universities offer advanced research opportunities.",
      "Some institutions that offer advanced research opportunities are not top-tier universities.",
      "No university without a medical school is considered top-tier.",
      "Some universities with medical schools do not offer advanced research opportunities."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. A university with a medical school (Statement 4) could exist that does not offer advanced research opportunities, and therefore would not be a top-tier university (as per Statement 1). Such a university would also be consistent with Statement 3, since it has a medical school. The existence of institutions offering advanced research opportunities that are not top-tier universities (Statement 2) further supports the possibility of these scenarios without contradiction."
  },
  {
    "id": "gen-30-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the culinary club participate in the annual bake-off.",
      "If a student participates in the annual bake-off, they must pay an entry fee.",
      "No student who pays an entry fee is exempt from the ingredient purchase.",
      "Some members of the culinary club are exempt from the ingredient purchase."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: Members of the culinary club → participate in bake-off → pay entry fee → not exempt from ingredient purchase. Therefore, all members of the culinary club are not exempt from the ingredient purchase. Statement 4 directly contradicts this derived universal conclusion by claiming some members are exempt."
  },
  {
    "id": "gen-30-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a swift, it has long, narrow wings.",
      "All birds with long, narrow wings are excellent fliers.",
      "Some excellent fliers are not swifts.",
      "The bird I saw today was an excellent flier."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all swifts are excellent fliers. Statement 3, that some excellent fliers are not swifts, is consistent with this, as there can be other types of excellent fliers. Statement 4 simply provides a specific instance of an excellent flier, which could be a swift or a non-swift excellent flier."
  },
  {
    "id": "gen-30-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees enrolled in the wellness program receive a discounted gym membership.",
      "If an employee receives a discounted gym membership, they must attend weekly fitness classes.",
      "No employee who attends weekly fitness classes works less than 30 hours per week.",
      "Sarah is an employee enrolled in the wellness program.",
      "Sarah works less than 30 hours per week."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 establish a chain: Sarah is in the wellness program → receives discounted gym membership → attends weekly fitness classes → does not work less than 30 hours per week. This means Sarah does not work less than 30 hours per week. Statement 5, however, asserts that Sarah works less than 30 hours per week, creating a direct contradiction."
  },
  {
    "id": "gen-30-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an event sells out, it will be held in the main auditorium.",
      "The main auditorium has a seating capacity of over 500 people.",
      "Some events held in the main auditorium do not sell out.",
      "Today's concert was held in the main auditorium."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that any event that sells out is held in the main auditorium, which has a capacity over 500. Statement 3 indicates that the main auditorium hosts some events that do not sell out, which is consistent with the conditional. Statement 4 provides a specific instance of an event in the main auditorium, which could be one that sold out or one that did not."
  },
  {
    "id": "gen-30-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs have a strong work ethic.",
      "No one with a strong work ethic avoids difficult challenges.",
      "If someone does not avoid difficult challenges, they are skilled problem-solvers.",
      "John is a successful entrepreneur.",
      "John is not a skilled problem-solver."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 create a logical chain: John is a successful entrepreneur → has a strong work ethic → does not avoid difficult challenges → is a skilled problem-solver. This implies John is a skilled problem-solver. Statement 5 directly contradicts this conclusion by stating John is not a skilled problem-solver."
  },
  {
    "id": "gen-30-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students in the advanced mathematics course passed the entrance exam.",
      "If a student passed the entrance exam, they are eligible for a scholarship.",
      "Some students eligible for a scholarship are not in the advanced mathematics course.",
      "Emily is eligible for a scholarship."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all students in the advanced mathematics course are eligible for a scholarship. Statement 3, that some scholarship-eligible students are not in the advanced mathematics course, is consistent because other students could also be eligible for scholarships. Statement 4 introduces Emily, who could be either an advanced mathematics student or another type of scholarship-eligible student."
  },
  {
    "id": "gen-30-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires daily sunlight, it thrives in a warm climate.",
      "All plants that thrive in a warm climate need rich soil.",
      "No plant that needs rich soil is sensitive to drought.",
      "Some plants that thrive in a warm climate are not sensitive to drought.",
      "This plant requires daily sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 3 chain together to show that any plant requiring daily sunlight is not sensitive to drought. Statement 4, that some plants thriving in a warm climate are not sensitive to drought, is consistent with Statement 3 (which implies ALL such plants are not sensitive to drought). Statement 5 provides a specific plant, which, based on the chain, would not be sensitive to drought, aligning with the other statements."
  },
  {
    "id": "gen-30-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All novels written by this author feature complex characters.",
      "If a novel features complex characters, it receives critical acclaim.",
      "Some critically acclaimed novels were not written by this author.",
      "\"The Silent City\" received critical acclaim."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all novels by this author receive critical acclaim. Statement 3 indicates that not all critically acclaimed novels are by this author, which is consistent. Statement 4 presents a specific critically acclaimed novel, which could be by this author or another."
  },
  {
    "id": "gen-30-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes the advanced module, they are eligible for an internship.",
      "No student eligible for an internship has a GPA below 3.5.",
      "All students with a GPA not below 3.5 receive an academic honor.",
      "David completed the advanced module.",
      "David did not receive an academic honor."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a chain: David completed the advanced module → is eligible for an internship → does not have a GPA below 3.5 → receives an academic honor. This means David received an academic honor. Statement 5 directly contradicts this conclusion by stating David did not receive an academic honor."
  },
  {
    "id": "gen-30-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a country is a member of the trade alliance, it receives preferential tariffs.",
      "All countries receiving preferential tariffs agree to environmental standards.",
      "No country that agrees to environmental standards has unrestricted access to its natural resources.",
      "Country X is a member of the trade alliance.",
      "Country X has unrestricted access to its natural resources."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 establish a chain: Country X is a member of the trade alliance → receives preferential tariffs → agrees to environmental standards → does not have unrestricted access to its natural resources. This means Country X does not have unrestricted access to its natural resources. Statement 5, however, asserts that Country X has unrestricted access to its natural resources, creating a direct contradiction."
  },
  {
    "id": "gen-31-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All poets are writers.",
      "No writer is a mathematician.",
      "Some poets are mathematicians."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all poets are writers. Statement 2 says no writer is a mathematician. Therefore, it must be true that no poet is a mathematician. Statement 3 directly contradicts this conclusion by asserting that some poets are mathematicians."
  },
  {
    "id": "gen-31-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who attended the workshop submitted a report.",
      "No student who submitted a report failed the course.",
      "Maria failed the course.",
      "Maria attended the workshop."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates Maria attended the workshop. Combined with Statement 1, this means Maria submitted a report. Then, combining with Statement 2, this means Maria did not fail the course. This contradicts Statement 3, which says Maria failed the course."
  },
  {
    "id": "gen-31-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful businesses prioritize customer service.",
      "No business that prioritizes customer service ignores customer feedback.",
      "Some businesses that ignore customer feedback are successful."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all successful businesses prioritize customer service. Statement 2 states that no business prioritizing customer service ignores customer feedback. Therefore, it must be true that no successful business ignores customer feedback. Statement 3 contradicts this by claiming some businesses that ignore customer feedback are successful."
  },
  {
    "id": "gen-31-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every cat in this shelter has been vaccinated.",
      "No vaccinated cat requires a booster shot immediately.",
      "Some cats in this shelter require a booster shot immediately."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 implies all cats in this shelter are vaccinated. Statement 2 implies no vaccinated cat requires an immediate booster shot. Therefore, no cat in this shelter requires a booster shot immediately. This directly contradicts Statement 3, which claims some cats in this shelter do require a booster shot immediately."
  },
  {
    "id": "gen-31-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a plant is a fern, it reproduces via spores.",
      "No plant that reproduces via spores produces flowers.",
      "This plant is a fern, and it produces flowers."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that if a plant is a fern, it reproduces via spores. Statement 2 indicates that no plant reproducing via spores produces flowers. Therefore, it must be true that if a plant is a fern, it does not produce flowers. Statement 3 contradicts this by stating that this plant is a fern and it produces flowers."
  },
  {
    "id": "gen-31-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All experienced chefs own a sharp knife set.",
      "Some people who own a sharp knife set are not experienced chefs.",
      "Lisa is an experienced chef."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. If Lisa is an experienced chef (Statement 3), then by Statement 1, she owns a sharp knife set. Statement 2 allows for other individuals who own sharp knife sets but are not experienced chefs, which does not create a contradiction."
  },
  {
    "id": "gen-31-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every bird in this aviary has distinct plumage.",
      "No bird with distinct plumage is camouflaged.",
      "Some camouflaged birds live in the wild."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. The first two statements describe birds in the aviary: they have distinct plumage and are not camouflaged. Statement 3 describes a group of birds that are camouflaged and live in the wild, which does not conflict with the characteristics of aviary birds."
  },
  {
    "id": "gen-31-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a painting is a masterpiece, it is highly valued.",
      "Some highly valued paintings are not masterpieces.",
      "No painting in this gallery is a masterpiece."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Statement 3 means no painting in the gallery is a masterpiece. This does not conflict with Statement 1, as paintings in the gallery would simply not meet the condition to be highly valued due to being a masterpiece. Statement 2 is also consistent, as some highly valued paintings (perhaps from outside this gallery) are not masterpieces, and this is entirely possible."
  },
  {
    "id": "gen-31-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All plants with red leaves require full sun.",
      "Some plants that require full sun do not have red leaves.",
      "This plant has red leaves."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. If 'this plant' has red leaves (Statement 3), then by Statement 1, it requires full sun. Statement 2 simply acknowledges that there are other plants requiring full sun that do not have red leaves, which poses no contradiction."
  },
  {
    "id": "gen-31-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car manufactured after 2020 has a backup camera.",
      "No car with a backup camera is more than ten years old.",
      "Some cars more than ten years old do not have a backup camera."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Combining Statement 1 and Statement 2 implies that no car manufactured after 2020 is more than ten years old, which is factually true. Statement 3 allows for older cars (e.g., from 2005) that lack a backup camera, which does not contradict the other statements about newer cars or those with backup cameras."
  },
  {
    "id": "gen-32-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All residents of this apartment building have access to the gym.",
      "No one who has access to the gym is required to pay extra fees.",
      "If a person pays extra fees, they are not a resident of this apartment building.",
      "Some residents of this apartment building are required to pay extra fees."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all residents of this apartment building have access to the gym and therefore are not required to pay extra fees. This means that every resident of this apartment building is not required to pay extra fees. Statement 4 directly contradicts this by asserting that some residents of this apartment building are required to pay extra fees. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-32-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All engineers on this project have a master's degree.",
      "Some people with a master's degree are not engineers on this project.",
      "If a person has a master's degree, they completed a thesis.",
      "No engineer on this project failed to complete a thesis."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 3 together imply that all engineers on this project completed a thesis. Statement 4 simply reaffirms this. Statement 2 indicates that the group with master's degrees is not exclusively engineers, which is consistent with all engineers having master's degrees. All statements can be true simultaneously."
  },
  {
    "id": "gen-32-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a country is a democracy, its citizens have the right to vote.",
      "No country where citizens have the right to vote restricts freedom of expression.",
      "Every country with free and fair elections is a democracy.",
      "Some countries with free and fair elections restrict freedom of expression."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a chain: if a country has free and fair elections, then it is a democracy; if it is a democracy, its citizens have the right to vote; if citizens have the right to vote, the country does not restrict freedom of expression. This implies that all countries with free and fair elections do not restrict freedom of expression. Statement 4 directly contradicts this by stating some countries with free and fair elections do restrict freedom of expression. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-32-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All paintings from the Renaissance period use oil paints.",
      "Some artworks that use oil paints are not from the Renaissance period.",
      "If an artwork is a portrait, it is a painting.",
      "No painting from the Renaissance period is a landscape."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 specifies that all Renaissance paintings use oil paints. Statement 2 clarifies that some artworks using oil paints are not from the Renaissance period, which is consistent with Statement 1. Statement 3 introduces portraits as a type of painting, and Statement 4 specifies that Renaissance paintings are not landscapes. All statements describe distinct aspects without creating a logical conflict, making the set consistent."
  },
  {
    "id": "gen-32-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All organisms that perform photosynthesis are plants.",
      "No plant can survive without water for long periods.",
      "If an organism lives in the desert, it can survive without water for long periods.",
      "Some organisms that live in the desert perform photosynthesis."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all organisms that perform photosynthesis cannot survive without water for long periods. Statements 3 and 4 together imply that some organisms that perform photosynthesis can survive without water for long periods (because they live in the desert, and organisms living in the desert can survive without water for long periods). This is a direct contradiction. Removing Statement 4 eliminates the part of the chain that leads to the contradiction, making the set consistent."
  },
  {
    "id": "gen-32-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All managers attend the weekly review meeting.",
      "No one who attends the weekly review meeting has an unrestricted travel budget.",
      "If an employee has an unrestricted travel budget, they are a senior executive.",
      "Some senior executives are managers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that no manager has an unrestricted travel budget. Statement 3 implies that anyone with an unrestricted travel budget is a senior executive. Statement 4 suggests that some senior executives are managers, which is perfectly consistent, as these senior executive managers would not have unrestricted travel budgets based on the first two statements. All statements can be true simultaneously."
  },
  {
    "id": "gen-32-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student enrolls in the advanced physics course, they must have completed calculus.",
      "All students who have completed calculus are proficient in algebra.",
      "No student proficient in algebra struggles with geometry.",
      "There is at least one student enrolled in the advanced physics course who struggles with geometry."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: if a student enrolls in advanced physics, they completed calculus; if they completed calculus, they are proficient in algebra; if they are proficient in algebra, they do not struggle with geometry. This implies all students enrolled in advanced physics do not struggle with geometry. Statement 4 directly contradicts this by stating there is at least one student enrolled in the advanced physics course who struggles with geometry. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-32-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees in department X have received training on the new software.",
      "Some employees who received training on the new software are not in department X.",
      "If an employee has received training on the new software, they are eligible for promotion.",
      "No employee eligible for promotion is under probationary status."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 3, and 4 create a chain: employees in department X received training, received training means eligible for promotion, and eligible for promotion means not under probationary status. This implies employees in department X are not under probationary status. Statement 2 is consistent as it simply allows for employees outside department X to also receive training. All statements can be true simultaneously."
  },
  {
    "id": "gen-32-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful negotiation involves compromise from both parties.",
      "No situation involving compromise from both parties is resolved quickly.",
      "If a situation necessitates legal consultation, it is resolved quickly.",
      "Some successful negotiations necessitated legal consultation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that every successful negotiation is not resolved quickly. Statements 3 and 4 together imply that some successful negotiations are resolved quickly (because they necessitated legal consultation, and situations necessitating legal consultation are resolved quickly). This is a direct contradiction. Removing Statement 4 eliminates the part of the chain that leads to the contradiction, making the set consistent."
  },
  {
    "id": "gen-32-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All animals capable of echolocation are nocturnal.",
      "Some nocturnal animals are not capable of echolocation.",
      "If an animal is nocturnal, it relies on senses other than sight.",
      "No animal that relies on senses other than sight is primarily diurnal."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 3, and 4 form a chain: animals with echolocation are nocturnal; if nocturnal, they rely on senses other than sight; if they rely on other senses, they are not primarily diurnal. This implies all animals with echolocation are not primarily diurnal. Statement 2 is consistent as it simply states that not all nocturnal animals use echolocation. All statements can be true simultaneously."
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
    "explanation": "Statements 1 and 2 together imply that if a creature is an owl, then it is a nocturnal bird, and thus it does not hunt during the day. This creates the conclusion that no owls hunt during the day. Statement 3, however, asserts that some owls do hunt during the day, which directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-33-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "No professional athlete is a beginner."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true simultaneously. Professional athletes train daily and are not beginners. There can also be people who train daily but are not professional athletes. These situations are compatible with each other."
  },
  {
    "id": "gen-33-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful entrepreneurs are innovative.",
      "No innovative person avoids risk.",
      "Some successful entrepreneurs avoid risk."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically lead to the conclusion that if a person is a successful entrepreneur, they are innovative, and therefore they do not avoid risk. This means no successful entrepreneurs avoid risk. Statement 3, however, claims that some successful entrepreneurs do avoid risk, directly contradicting this derived conclusion. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-33-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All migratory birds build nests.",
      "Some birds that build nests are not migratory.",
      "No bird that builds a nest is a ground dweller."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true at the same time. Migratory birds build nests and are not ground dwellers. Other birds also build nests (and are not ground dwellers) but are not migratory. This is a consistent scenario."
  },
  {
    "id": "gen-33-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No student who fails the midterm will pass the course.",
      "Every student who completes all assignments will pass the course.",
      "Some students fail the midterm.",
      "All students who fail the midterm complete all assignments."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 4 and 2 together imply that if a student fails the midterm, they complete all assignments, and therefore they will pass the course. This contradicts Statement 1, which states that no student who fails the midterm will pass the course. Since statements 1, 2, and 4 together establish that no student can possibly fail the midterm, Statement 3, which asserts that some students do fail the midterm, creates the inconsistency. Removing Statement 3 resolves the contradiction."
  },
  {
    "id": "gen-33-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "Some skilled strategists are not members of the chess club.",
      "No member of the chess club is a novice player."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Chess club members are skilled strategists and are not novices. The existence of skilled strategists who are not in the club does not create any conflict."
  },
  {
    "id": "gen-33-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No successful politician is dishonest.",
      "Every politician who serves a long term is successful.",
      "Some dishonest politicians serve long terms."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 1 combined logically lead to the conclusion that if a politician serves a long term, they are successful, and therefore they are not dishonest. This means no politician who serves a long term is dishonest. Statement 3, however, claims that some dishonest politicians do serve long terms, which directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-33-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All rare books are valuable.",
      "Some valuable books are not rare.",
      "No book that is not valuable is rare."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 3 is the contrapositive of Statement 1 (If a book is not valuable, then it is not rare, which implies if it is rare, it is valuable), so they are logically equivalent and reinforce each other. Statement 2 describes a subset of valuable books that are not rare, which is entirely compatible with Statement 1 and 3."
  },
  {
    "id": "gen-33-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All plants requiring full sun need daily watering.",
      "No plant needing daily watering thrives in sandy soil.",
      "Some plants requiring full sun thrive in sandy soil."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that if a plant requires full sun, then it needs daily watering, and therefore it does not thrive in sandy soil. This creates the conclusion that no plants requiring full sun thrive in sandy soil. Statement 3, however, asserts that some plants requiring full sun do thrive in sandy soil, which directly contradicts this conclusion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-33-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All research scientists publish papers.",
      "Some people who publish papers are not research scientists.",
      "No research scientist works alone."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements can all be true simultaneously. Research scientists publish papers and do not work alone. There can also be people who publish papers but are not research scientists, and people who work alone (who are not research scientists). These situations are compatible with each other."
  },
  {
    "id": "gen-34-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant is a fern, it requires shade.",
      "All plants that require shade are sensitive to frost.",
      "No plant sensitive to frost can thrive outdoors in winter.",
      "Every fern in my garden thrives outdoors in winter."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain: if a plant is a fern, it requires shade (1), then it is sensitive to frost (2), and thus it cannot thrive outdoors in winter (3). This means every fern in your garden cannot thrive outdoors in winter. Statement 4 directly contradicts this conclusion by asserting that every fern in your garden *does* thrive outdoors in winter. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-34-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus attended the training.",
      "No employee who missed more than two days of work attended the training.",
      "Some employees who received a bonus missed more than two days of work."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all bonus recipients attended training. Statement 2 implies that anyone who attended training did not miss more than two days of work. Therefore, all employees who received a bonus did not miss more than two days of work. Statement 3 directly contradicts this by claiming some employees who received a bonus *did* miss more than two days of work. Removing Statement 3 makes the set consistent."
  },
  {
    "id": "gen-34-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds in this aviary eat seeds.",
      "Some birds in this aviary also eat insects.",
      "No bird that eats insects eats only seeds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. It is possible for all birds in the aviary to eat seeds (Statement 1), for some of those birds to also eat insects (Statement 2), and for those insect-eating birds to not eat *only* seeds (Statement 3), implying they eat seeds and insects, or seeds and other things, but not just seeds. There is no contradiction."
  },
  {
    "id": "gen-34-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every chef at \"The Golden Spoon\" restaurant has won a culinary award.",
      "No one who has won a culinary award has ever trained under Chef Antoine.",
      "Some of the chefs at \"The Golden Spoon\" restaurant trained under Chef Antoine."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish that if someone is a chef at \"The Golden Spoon\", then they have won a culinary award (1), and therefore they have not trained under Chef Antoine (2). This implies no chef at \"The Golden Spoon\" trained under Chef Antoine. Statement 3 directly contradicts this by claiming some chefs at the restaurant *did* train under Chef Antoine. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-34-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student submits their assignment late, their grade is reduced.",
      "No student who attended all review sessions submitted their assignment late.",
      "Sarah attended all review sessions.",
      "Sarah's grade was reduced."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. From Statements 2 and 3, we know Sarah did not submit her assignment late. Statement 1 indicates one specific condition for a grade reduction (late submission), but it does not claim to be the *only* condition. Therefore, Sarah's grade could have been reduced for other reasons (e.g., quality of work), even though she did not submit late. There is no contradiction."
  },
  {
    "id": "gen-34-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups prioritize customer feedback.",
      "No company that prioritizes customer feedback fails to innovate.",
      "Some successful startups do not innovate."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: all successful startups prioritize customer feedback (1), and all companies that prioritize customer feedback innovate (2). Thus, all successful startups innovate. Statement 3 directly contradicts this by stating some successful startups *do not* innovate. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-34-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful businesses offer excellent customer service.",
      "Some businesses that offer excellent customer service are not successful.",
      "No business that offers excellent customer service fails to retain clients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statement 1 means all successful businesses are a subset of those offering excellent customer service. Statement 2 clarifies that not all businesses offering excellent customer service are successful, which is compatible with Statement 1. Statement 3 adds that all businesses with excellent customer service (whether successful or not) retain clients. No contradiction exists among these statements."
  },
  {
    "id": "gen-34-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees eligible for promotion have worked at the company for over five years.",
      "No employee who has worked at the company for over five years has a disciplinary record.",
      "Some employees with a disciplinary record are eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain: all employees eligible for promotion have worked at the company for over five years (1), and no employee who has worked at the company for over five years has a disciplinary record (2). Therefore, no employee eligible for promotion has a disciplinary record. Statement 3 directly contradicts this by claiming some employees with a disciplinary record *are* eligible for promotion. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-34-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All dogs in the kennel are fed organic food.",
      "Some dogs in the kennel are poodles.",
      "No poodle is fed commercial brand dog food."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. All dogs in the kennel are fed organic food (Statement 1). Some of these dogs are poodles (Statement 2). Statement 3, that no poodle is fed commercial brand dog food, is compatible with Statement 1, as organic food is generally not considered commercial brand dog food. There is no contradiction."
  },
  {
    "id": "gen-34-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a building has historical significance, it is protected by preservation laws.",
      "All buildings protected by preservation laws must undergo regular inspections.",
      "The Old Mill building has not undergone regular inspections.",
      "The Old Mill building does not have historical significance."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Statements 1 and 2 logically imply that if a building has historical significance, it must undergo regular inspections. The contrapositive of this is: if a building has not undergone regular inspections, then it does not have historical significance. Statement 3 tells us the Old Mill building has not undergone regular inspections. Following the logical chain, this means the Old Mill building does not have historical significance, which is exactly what Statement 4 asserts. There is no contradiction."
  },
  {
    "id": "gen-35-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All qualified applicants possess a valid license.",
      "Anyone possessing a valid license has completed advanced training.",
      "No one who has completed advanced training will be hired for the junior role.",
      "Some qualified applicants will be hired for the junior role."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically combine to establish a chain: a qualified applicant possesses a valid license, has completed advanced training, and therefore will not be hired for the junior role. This means no qualified applicant will be hired for the junior role. Statement 4 directly contradicts this conclusion."
  },
  {
    "id": "gen-35-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a recipe requires saffron, it is considered gourmet.",
      "Some gourmet recipes are very quick to prepare.",
      "No quick-to-prepare recipe is expensive.",
      "This specific recipe requires saffron."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. This specific recipe requires saffron (Statement 4), making it gourmet (Statement 1). While some gourmet recipes are quick (Statement 2) and thus not expensive (Statement 3), this specific recipe could be a gourmet recipe that is not quick to prepare, and thus its cost is unknown."
  },
  {
    "id": "gen-35-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant in the marathon has run a full marathon before.",
      "No one who has run a full marathon before needs to complete the qualifying race.",
      "If a runner has not completed the qualifying race, they must still register by the early deadline.",
      "At least one participant in this marathon registered after the early deadline."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: every participant has run a full marathon before (Statement 1), so they do not need to complete the qualifying race (Statement 2), which means they must register by the early deadline (Statement 3). This implies all participants registered by the early deadline. Statement 4 directly contradicts this by asserting that at least one participant registered after the early deadline."
  },
  {
    "id": "gen-35-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful startups launched in the last year used crowdfunding.",
      "If a startup used crowdfunding, it raised significant capital.",
      "Some startups that raised significant capital were not successful.",
      "Company X is a successful startup launched in the last year."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Company X (Statement 4) is a successful startup from the last year, so it used crowdfunding (Statement 1) and raised significant capital (Statement 2). Statement 3, indicating some startups with significant capital were not successful, does not contradict Company X's success, as it allows for others to be successful."
  },
  {
    "id": "gen-35-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All members of the research team completed their ethics training.",
      "Anyone who completed ethics training submitted their project proposal on time.",
      "If a project proposal was submitted on time, it qualified for initial funding.",
      "No project that qualified for initial funding used experimental methods.",
      "Some members of the research team used experimental methods."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, 3, and 4 form a logical chain: a research team member completed ethics training (Statement 1), submitted their proposal on time (Statement 2), qualified for initial funding (Statement 3), and therefore did not use experimental methods (Statement 4). This implies no research team member used experimental methods. Statement 5 directly contradicts this."
  },
  {
    "id": "gen-35-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a region experiences heavy rainfall, its rivers will swell.",
      "Swollen rivers always cause downstream flooding.",
      "Some downstream areas are currently experiencing flooding.",
      "The local region has not experienced heavy rainfall."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. While the local region hasn't had heavy rainfall (Statement 4), other regions might have, leading to swollen rivers (Statement 1) and downstream flooding (Statement 2). The flooding mentioned in Statement 3 could be in these other areas, or from another source entirely not covered by the statements."
  },
  {
    "id": "gen-35-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student athlete maintains a minimum GPA of 3.0.",
      "No student with a GPA below 3.0 is eligible for scholarships.",
      "If a student is eligible for scholarships, they are not on academic probation.",
      "Some student athletes are on academic probation."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 2, and 1 combine to form a contradiction. If a student is on academic probation (contrapositive of Statement 3), they are not eligible for scholarships. If they are not eligible for scholarships (contrapositive of Statement 2), they must have a GPA below 3.0. This means any student on academic probation has a GPA below 3.0. However, Statement 1 indicates every student athlete maintains a minimum GPA of 3.0. Therefore, no student athlete can be on academic probation. Statement 4 directly contradicts this."
  },
  {
    "id": "gen-35-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer feedback.",
      "Some businesses that prioritize customer feedback are small enterprises.",
      "No small enterprise has more than fifty employees.",
      "Company Z is a successful business with over a hundred employees."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Company Z (Statement 4) is a successful business, so it prioritizes customer feedback (Statement 1). Since Company Z has over a hundred employees, it is not a small enterprise (consistent with Statement 3). Statement 2 only says *some* businesses that prioritize feedback are small, leaving room for large businesses like Company Z."
  },
  {
    "id": "gen-35-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a species is endangered, it is protected by conservation laws.",
      "No species protected by conservation laws can be hunted.",
      "All animals in the local wildlife reserve are endangered species.",
      "Some animals in the local wildlife reserve are routinely hunted."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 establish a logical chain: all animals in the local wildlife reserve are endangered (Statement 3), therefore they are protected by conservation laws (Statement 1), and thus cannot be hunted (Statement 2). This implies no animal in the local wildlife reserve can be hunted. Statement 4 directly contradicts this by stating some animals in the reserve are routinely hunted."
  },
  {
    "id": "gen-35-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every participant who finished the race received a medal.",
      "If a participant received a medal, they were applauded by the crowd.",
      "Some participants were applauded by the crowd but did not finish the race.",
      "Sarah was applauded by the crowd."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "This set of statements is consistent. Sarah (Statement 4) was applauded by the crowd. According to Statement 3, some participants were applauded but did not finish, so Sarah could be one of these. Alternatively, Sarah could have finished the race, received a medal (Statement 1), and therefore been applauded (Statement 2)."
  },
  {
    "id": "gen-36-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who passed the final project completed all assignments.",
      "No student who completed all assignments failed the course.",
      "Some students who passed the final project failed the course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all students who passed the final project completed all assignments. Statement 2 indicates that no student who completed all assignments failed the course. Therefore, it must be true that no student who passed the final project failed the course. This contradicts Statement 3, which claims some students who passed the final project failed the course."
  },
  {
    "id": "gen-36-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All engineers are skilled in mathematics.",
      "Some engineers are also skilled in physics.",
      "Every person skilled in physics is skilled in mathematics."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all engineers are skilled in mathematics. Statement 3 states that everyone skilled in physics is also skilled in mathematics. Statement 2 claims some engineers are skilled in physics. This scenario is entirely possible; engineers skilled in physics would also be skilled in mathematics, aligning with all given conditions."
  },
  {
    "id": "gen-36-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a bird is a robin, then it lays blue eggs.",
      "All birds that build nests in oak trees are robins.",
      "Some birds that lay blue eggs do not build nests in oak trees.",
      "No bird that lays blue eggs builds nests in oak trees."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 2 implies that if a bird builds a nest in an oak tree, it is a robin. Statement 1 states that if a bird is a robin, it lays blue eggs. Combining these, it follows that any bird that builds a nest in an oak tree lays blue eggs. Statement 4 claims that no bird that lays blue eggs builds nests in oak trees, which directly contradicts the conclusion derived from Statements 1 and 2."
  },
  {
    "id": "gen-36-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every lawyer has passed the bar exam.",
      "Some people who have passed the bar exam are not lawyers.",
      "All people who have passed the bar exam are licensed to practice law.",
      "No one licensed to practice law is an intern."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 says all lawyers passed the bar. Statement 2 says some bar-passers aren't lawyers, which is consistent. Statement 3 says all bar-passers are licensed. Statement 4 says licensed people aren't interns. There's no contradiction: lawyers pass the bar, are licensed, and aren't interns. Some non-lawyers also pass the bar, are licensed, and aren't interns."
  },
  {
    "id": "gen-36-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruits rich in Vitamin C are citrus fruits.",
      "No citrus fruit is considered a berry.",
      "Some berries are fruits rich in Vitamin C."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 claims that all fruits rich in Vitamin C are citrus fruits. Statement 2 asserts that no citrus fruit is a berry. Taken together, these statements imply that no fruit rich in Vitamin C can be a berry. Statement 3, however, states that some berries are fruits rich in Vitamin C, which directly contradicts this conclusion."
  },
  {
    "id": "gen-36-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student enrolled in Advanced History has completed Introduction to History.",
      "Some students who have completed Introduction to History are not enrolled in Advanced History.",
      "No student who has not completed Introduction to History is permitted in Advanced History."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 asserts that all students in Advanced History completed Introduction to History. Statement 3 essentially reiterates this by saying only those who completed Introduction to History can be in Advanced History. Statement 2 states that some students who completed Introduction to History are not in Advanced History. All three statements are logically consistent with a scenario where Advanced History is a subset of Introduction to History completers."
  },
  {
    "id": "gen-36-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All paintings in the West Wing are from the Impressionist period.",
      "Some Impressionist paintings are not in the West Wing.",
      "No painting from the Impressionist period is more than 150 years old.",
      "At least one painting in the West Wing is more than 150 years old."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 establishes that all West Wing paintings are Impressionist. Statement 3 states that no Impressionist painting is more than 150 years old. Combined, these imply that no painting in the West Wing can be more than 150 years old. Statement 4 directly contradicts this conclusion by claiming at least one West Wing painting is more than 150 years old."
  },
  {
    "id": "gen-36-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every member of the hiking club owns waterproof boots.",
      "Some people who own waterproof boots are not members of the hiking club.",
      "No member of the hiking club enjoys rock climbing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 indicates that all hiking club members own waterproof boots. Statement 2 notes that the group of waterproof boot owners is larger than just hiking club members, which is consistent. Statement 3 adds that no hiking club members enjoy rock climbing. All these conditions can simultaneously exist, as there is no logical conflict between owning boots, being a member or not, and enjoying or not enjoying rock climbing."
  },
  {
    "id": "gen-36-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All applicants for the scholarship achieved a GPA of 3.8 or higher.",
      "No one who achieved a GPA of 3.8 or higher submitted an essay.",
      "Some applicants for the scholarship submitted an essay."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all scholarship applicants had a GPA of 3.8 or higher. Statement 2 asserts that anyone with a GPA of 3.8 or higher did not submit an essay. Therefore, it must be true that no scholarship applicant submitted an essay. Statement 3 directly contradicts this conclusion by claiming some applicants did submit an essay."
  },
  {
    "id": "gen-36-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a restaurant is highly rated, it receives many reservations.",
      "Not all restaurants that receive many reservations are highly rated.",
      "Some restaurants that receive many reservations are fully booked on weekends.",
      "No highly rated restaurant is fully booked on weekends."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 suggests highly rated restaurants get many reservations. Statement 2 clarifies that some restaurants get many reservations without being highly rated. Statement 4 states that highly rated restaurants are not fully booked on weekends. Statement 3, claiming some restaurants with many reservations are fully booked on weekends, is consistent; these fully booked restaurants would simply be among the ones mentioned in Statement 2 (those with many reservations but not highly rated)."
  },
  {
    "id": "gen-37-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful candidates demonstrate strong communication skills.",
      "If a person has strong communication skills, they excel in team settings.",
      "No one who excels in team settings avoids collaborative projects.",
      "Some successful candidates avoid collaborative projects."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: Successful candidates demonstrate strong communication skills, which means they excel in team settings, and thus do not avoid collaborative projects. Therefore, all successful candidates do not avoid collaborative projects. Statement 4 contradicts this conclusion by claiming some successful candidates do avoid collaborative projects."
  },
  {
    "id": "gen-37-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "All animals with retractable claws are skilled hunters.",
      "Some skilled hunters are not felines.",
      "No feline is a skilled hunter that lacks retractable claws."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all felines have retractable claws and are skilled hunters. Statement 3 indicates that not all skilled hunters are felines, which is consistent. Statement 4 simply reaffirms that felines possess retractable claws and are skilled hunters, adding no new information that creates a contradiction."
  },
  {
    "id": "gen-37-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every effective leader fosters a culture of accountability.",
      "If a leader fosters a culture of accountability, they delegate tasks frequently.",
      "No leader who delegates tasks frequently micromanages their team members.",
      "At least one effective leader micromanages their team members."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: Effective leaders foster accountability, which means they delegate tasks frequently, and therefore they do not micromanage their team members. This implies that all effective leaders do not micromanage. Statement 4 directly contradicts this by asserting that some effective leaders do micromanage their team members."
  },
  {
    "id": "gen-37-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All planets in our solar system orbit the Sun.",
      "If a celestial body orbits the Sun, it has a defined path.",
      "Some celestial bodies with defined paths are not planets.",
      "Pluto is a celestial body with a defined path."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 logically conclude that all planets in our solar system have a defined path. Statement 3 is consistent, as there are non-planet celestial bodies (like asteroids) that have defined paths. Statement 4 is also consistent, as Pluto can be a celestial body with a defined path without necessarily being classified as a planet, fitting into the group described in Statement 3."
  },
  {
    "id": "gen-37-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful software project involves thorough testing.",
      "If a project involves thorough testing, it reduces deployment risks.",
      "No project that reduces deployment risks bypasses security audits.",
      "Some successful software projects bypass security audits."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a chain of logic: Successful software projects involve thorough testing, which reduces deployment risks, and therefore do not bypass security audits. This means all successful software projects do not bypass security audits. Statement 4 contradicts this conclusion by stating that some successful software projects do bypass security audits."
  },
  {
    "id": "gen-37-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee receives a promotion, they completed advanced training.",
      "All employees who completed advanced training are eligible for bonuses.",
      "Some employees who completed advanced training did not receive a promotion.",
      "No employee eligible for bonuses failed to complete advanced training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that receiving a promotion implies completing advanced training and being eligible for bonuses. Statement 3 is consistent, as completing advanced training does not guarantee a promotion. Statement 4 states that eligibility for bonuses requires advanced training, which is consistent with the preceding statements."
  },
  {
    "id": "gen-37-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in the honors program maintain a high GPA.",
      "If a student maintains a high GPA, they qualify for scholarships.",
      "No student who qualifies for scholarships carries a heavy course load.",
      "Some students enrolled in the honors program carry a heavy course load."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: Students in the honors program maintain a high GPA, which means they qualify for scholarships, and therefore they do not carry a heavy course load. This implies all students in the honors program do not carry a heavy course load. Statement 4 directly contradicts this conclusion by claiming some students in the honors program do carry a heavy course load."
  },
  {
    "id": "gen-37-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a raptor, it has sharp talons.",
      "All birds with sharp talons are carnivorous.",
      "Some carnivorous birds do not have sharp talons.",
      "Eagles are carnivorous birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all raptors have sharp talons and are carnivorous. Statement 3 is consistent, as there can be carnivorous birds that do not have sharp talons (e.g., certain scavenger birds). Statement 4 is also consistent, as eagles are a type of raptor, fitting within the established rules."
  },
  {
    "id": "gen-37-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every successful athlete trains consistently.",
      "If an athlete trains consistently, they follow a strict diet.",
      "No athlete who follows a strict diet consumes processed sugars.",
      "There is at least one successful athlete who consumes processed sugars."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: Successful athletes train consistently, which means they follow a strict diet, and thus do not consume processed sugars. Therefore, all successful athletes do not consume processed sugars. Statement 4 contradicts this conclusion by asserting that at least one successful athlete does consume processed sugars."
  },
  {
    "id": "gen-37-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All ancient civilizations developed complex writing systems.",
      "If a civilization developed a complex writing system, it recorded its history.",
      "Some civilizations that recorded their history were not ancient.",
      "No civilization that recorded its history failed to develop a complex writing system."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all ancient civilizations developed complex writing systems and recorded their history. Statement 3 is consistent, as modern civilizations also record their history. Statement 4 reinforces that recording history implies having a complex writing system, which is consistent with the previous statements and allows for civilizations beyond ancient ones to record history."
  },
  {
    "id": "gen-38-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students are scholarship recipients.",
      "No scholarship recipients are part-time employees.",
      "Some students are part-time employees."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, 'All students are scholarship recipients', and Statement 2, 'No scholarship recipients are part-time employees', it logically follows that 'No students are part-time employees'. Statement 3, 'Some students are part-time employees', directly contradicts this conclusion."
  },
  {
    "id": "gen-38-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students are degree candidates.",
      "Every degree candidate is enrolled in a seminar.",
      "Some athletes are students.",
      "No athletes are enrolled in a seminar."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, 'All students are degree candidates', and Statement 2, 'Every degree candidate is enrolled in a seminar', it follows that 'All students are enrolled in a seminar'. Combined with Statement 3, 'Some athletes are students', this means 'Some athletes are enrolled in a seminar', which directly contradicts Statement 4, 'No athletes are enrolled in a seminar'."
  },
  {
    "id": "gen-38-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All musicians are artists.",
      "Some artists are not teachers.",
      "No teachers are musicians."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all musicians to be a subset of artists, and for no teachers to be musicians (meaning musicians and teachers are disjoint). This allows for artists to include musicians, and also include some artists who are not teachers, without contradiction."
  },
  {
    "id": "gen-38-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits are sweet.",
      "Some apples are fruits.",
      "No apples are sweet."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 2, 'Some apples are fruits', and Statement 1, 'All fruits are sweet', it follows that 'Some apples are sweet'. Statement 3, 'No apples are sweet', directly contradicts this conclusion."
  },
  {
    "id": "gen-38-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All birds are vertebrates.",
      "Some vertebrates are not creatures with feathers.",
      "All creatures with feathers are birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "If all creatures with feathers are birds (Statement 3), and all birds are vertebrates (Statement 1), then all creatures with feathers are vertebrates. Statement 2, 'Some vertebrates are not creatures with feathers', simply means that there are other types of vertebrates (like reptiles or fish) that do not have feathers, which is consistent."
  },
  {
    "id": "gen-38-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If a person is an engineer, they are a problem solver.",
      "All problem solvers are managers.",
      "Some team leaders are engineers.",
      "No team leaders are managers."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "From Statement 1, 'If a person is an engineer, they are a problem solver', and Statement 2, 'All problem solvers are managers', it follows that 'If a person is an engineer, they are a manager'. Combined with Statement 3, 'Some team leaders are engineers', this means 'Some team leaders are managers', which directly contradicts Statement 4, 'No team leaders are managers'."
  },
  {
    "id": "gen-38-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All fruits are healthy.",
      "Some healthy foods are not fruits.",
      "Some citrus are fruits.",
      "All citrus are healthy."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all fruits to be healthy, and for citrus to be a type of fruit, which would also make all citrus healthy. There can also be other healthy foods that are not fruits, such as vegetables, without creating a contradiction."
  },
  {
    "id": "gen-38-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All plants are green.",
      "No green things are edible.",
      "Some edible things are plants."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, 'All plants are green', and Statement 2, 'No green things are edible', it follows that 'No plants are edible'. Statement 3, 'Some edible things are plants', (meaning some plants are edible) directly contradicts this conclusion."
  },
  {
    "id": "gen-38-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All dogs are mammals.",
      "Some mammals are not dogs.",
      "Some pets are dogs.",
      "Some mammals are not pets."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for dogs to be a type of mammal, and for some mammals to not be dogs (e.g., cats). It is also consistent for some pets to be dogs, and for some mammals (e.g., wild animals) to not be pets."
  },
  {
    "id": "gen-38-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All students are scholarship holders.",
      "Every scholarship holder attends evening classes.",
      "Some students do not attend evening classes.",
      "All students take an exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "From Statement 1, 'All students are scholarship holders', and Statement 2, 'Every scholarship holder attends evening classes', it follows that 'All students attend evening classes'. Statement 3, 'Some students do not attend evening classes', directly contradicts this conclusion."
  },
  {
    "id": "gen-39-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "Every skilled strategist enjoys analytical puzzles.",
      "Some members of the chess club are also on the debate team.",
      "No one on the debate team enjoys analytical puzzles."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 imply that all members of the chess club enjoy analytical puzzles. Statement 3 asserts that some members of the chess club are also on the debate team. This means that some members of the debate team enjoy analytical puzzles. This directly contradicts Statement 4, which claims that no one on the debate team enjoys analytical puzzles. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-39-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All reptiles lay eggs.",
      "Every creature that lays eggs is cold-blooded.",
      "Some reptiles are birds.",
      "No bird is cold-blooded."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all reptiles are cold-blooded. Statement 3 claims that some reptiles are birds. Therefore, some birds must be cold-blooded. This directly contradicts Statement 4, which asserts that no bird is cold-blooded. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-39-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every member of the mountaineering club has trained in alpine conditions.",
      "All who have trained in alpine conditions are skilled in rope work.",
      "Some members of the mountaineering club have never used ice axes.",
      "No one skilled in rope work has never used ice axes."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all members of the mountaineering club are skilled in rope work. Statement 3 claims that some members of the mountaineering club have never used ice axes. This means some people who are skilled in rope work have never used ice axes. This directly contradicts Statement 4, which asserts that no one skilled in rope work has never used ice axes (i.e., all skilled in rope work have used ice axes). Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-39-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the city council supported the new library project.",
      "No one who supported the new library project voted against the school referendum.",
      "Every city council member voted against the school referendum.",
      "Some city council members are also on the school board."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 together imply that all members of the city council did not vote against the school referendum. However, Statement 3 explicitly states that every city council member voted against the school referendum. This creates a direct contradiction. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-39-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All individuals approved for the special program have passed the advanced exam.",
      "Every person who passed the advanced exam has completed an internship.",
      "No one who completed an internship is under eighteen years old.",
      "Some individuals approved for the special program are under eighteen years old."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 together imply that all individuals approved for the special program have completed an internship. Statement 3 further states that no one who completed an internship is under eighteen years old. Therefore, all individuals approved for the special program must not be under eighteen years old. This directly contradicts Statement 4, which claims that some individuals approved for the special program are under eighteen years old. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-40-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an employee receives a bonus, they have met their quarterly targets.",
      "All employees who meet their quarterly targets are eligible for promotion.",
      "No employee eligible for promotion is considered for a raise this year.",
      "Sarah received a bonus, and Sarah is being considered for a raise this year."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 establish a chain: If an employee receives a bonus, they have met their quarterly targets, and thus are eligible for promotion. Statement 4 indicates Sarah received a bonus, therefore Sarah is eligible for promotion. Statement 3 claims that no employee eligible for promotion is considered for a raise this year, which means Sarah should not be considered for a raise. This contradicts Statement 4, which states Sarah is being considered for a raise."
  },
  {
    "id": "gen-40-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds in this aviary eat berries.",
      "If an animal eats berries, it can digest seeds.",
      "Some animals that can digest seeds are not birds.",
      "No animal that cannot digest seeds is allowed in this aviary."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 imply that all birds in this aviary can digest seeds. Statement 4 implies that any animal in this aviary must be able to digest seeds, which is consistent. Statement 3 merely suggests that there are animals other than birds that can digest seeds, which does not contradict any of the other statements or the conclusions drawn from them."
  },
  {
    "id": "gen-40-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every politician who supports the new infrastructure bill is considered fiscally responsible.",
      "No politician considered fiscally responsible will vote to increase taxes.",
      "Senator Jenkins supports the new infrastructure bill.",
      "Senator Jenkins will vote to increase taxes."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statements 1 and 3 establish that Senator Jenkins supports the new infrastructure bill and is therefore considered fiscally responsible. Statement 2 asserts that no fiscally responsible politician will vote to increase taxes, which means Senator Jenkins will not vote to increase taxes. However, Statement 4 claims Senator Jenkins will vote to increase taxes, creating a direct contradiction."
  },
  {
    "id": "gen-40-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Members are only permitted to enter the lounge if they have a valid ID.",
      "No one with a valid ID is barred from accessing the main library.",
      "Sarah has a valid ID, but she is not a member.",
      "Some people who are barred from accessing the main library are members."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 means that entering the lounge as a member requires a valid ID. Statement 2 means that anyone with a valid ID is not barred from the library. Statement 3 provides facts about Sarah which are consistent. Statement 4 indicates that some members are barred from the main library; according to Statement 2, these members cannot have a valid ID. This is consistent as not having a valid ID would prevent them from entering the lounge (by the contrapositive of Statement 1) and being barred from the library (by Statement 2)."
  },
  {
    "id": "gen-40-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who receive special training pass the certification exam.",
      "No employee passes the certification exam unless they have at least five years of experience.",
      "Every employee with at least five years of experience is eligible for promotion.",
      "There are employees who received special training but are not eligible for promotion."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a logical chain: All employees who receive special training pass the certification exam, which means they have at least five years of experience, and thus are eligible for promotion. This implies that all employees who receive special training are eligible for promotion. Statement 4 directly contradicts this conclusion by asserting that some employees who received special training are not eligible for promotion."
  },
  {
    "id": "gen-40-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a plant requires direct sunlight, it is not suitable for indoor cultivation.",
      "All plants suitable for indoor cultivation thrive in humid environments.",
      "Some plants that thrive in humid environments require direct sunlight.",
      "No plant suitable for indoor cultivation requires direct sunlight."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that plants suitable for indoor cultivation do not require direct sunlight, which is consistent with Statement 4. Statements 1 and 2 indicate that all indoor plants thrive in humid environments and do not require direct sunlight. Statement 3 notes the existence of plants that thrive in humid environments and require direct sunlight; these plants cannot be suitable for indoor cultivation according to Statement 1, making all statements consistent."
  },
  {
    "id": "gen-40-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an artwork is from the Renaissance period, it uses oil paints.",
      "All artworks that use oil paints are displayed in the main gallery.",
      "No artwork displayed in the main gallery requires climate-controlled storage.",
      "This specific Renaissance artwork requires climate-controlled storage."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and the first part of Statement 4 (This specific Renaissance artwork) establish a chain: This artwork is from the Renaissance period, so it uses oil paints, and thus is displayed in the main gallery. Statement 3 claims that no artwork displayed in the main gallery requires climate-controlled storage. This means the artwork does not require climate-controlled storage. This contradicts the second part of Statement 4, which states that this artwork does require climate-controlled storage."
  },
  {
    "id": "gen-40-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "No one with strong leadership skills avoids public speaking.",
      "Some people who avoid public speaking are not successful entrepreneurs.",
      "John is a successful entrepreneur."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1, 2, and 4 establish that John is a successful entrepreneur, possesses strong leadership skills, and therefore does not avoid public speaking. Statement 3 simply states that there exist individuals who avoid public speaking and are not successful entrepreneurs. This is entirely consistent with the other statements, as John is a successful entrepreneur and does not avoid public speaking."
  },
  {
    "id": "gen-40-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a project is delayed, the budget is exceeded.",
      "All projects with an exceeded budget must undergo a review.",
      "No project that undergoes a review is approved for immediate launch.",
      "The Mars Rover project was not delayed, but it was approved for immediate launch.",
      "Only projects that are delayed are approved for immediate launch."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statement 5 establishes that for a project to be approved for immediate launch, it must have been delayed. However, Statement 4 asserts that the Mars Rover project was approved for immediate launch but was not delayed. This creates a direct contradiction: the Mars Rover project must have been delayed (from Statement 4 and 5) and was not delayed (from Statement 4)."
  },
  {
    "id": "gen-40-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No customer is eligible for a discount unless they are a loyal member.",
      "All loyal members receive regular updates.",
      "Some customers who receive regular updates are not eligible for a discount.",
      "Maria is a customer and receives regular updates."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that any customer eligible for a discount is a loyal member and thus receives regular updates. Statement 3 asserts that some customers receive regular updates but are not eligible for a discount, which is consistent with the idea that not all customers who receive updates are necessarily eligible for a discount or are loyal members. Statement 4 provides specific information about Maria, which is also consistent with the possibility that she is either a loyal member eligible for a discount or a customer who receives updates for other reasons."
  },
  {
    "id": "gen-41-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All students who complete the advanced course receive a special certificate.",
      "No student who receives a special certificate is eligible for the basic course.",
      "Some students who complete the advanced course are eligible for the basic course."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all advanced course completers get a special certificate. Statement 2 says no one with a special certificate is eligible for the basic course. Therefore, it must be true that no student who completes the advanced course is eligible for the basic course. This directly contradicts Statement 3, which claims some advanced course completers are eligible for the basic course."
  },
  {
    "id": "gen-41-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All lions are carnivores.",
      "Some carnivores do not eat fish.",
      "No house cats are lions.",
      "All animals that eat fish are house cats."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. For example, lions are carnivores that do not eat fish. Other carnivores might also not eat fish. All fish-eating animals are house cats, and no house cats are lions. This setup has no logical contradictions."
  },
  {
    "id": "gen-41-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful applicants submitted their forms on time.",
      "Every person who submitted their form on time received a confirmation email.",
      "Some applicants who received a confirmation email were not successful.",
      "No successful applicant received a confirmation email."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 states that all successful applicants submitted their forms on time. Statement 2 states that every person who submitted their form on time received a confirmation email. Therefore, it must be true that all successful applicants received a confirmation email. This directly contradicts Statement 4, which claims no successful applicant received a confirmation email."
  },
  {
    "id": "gen-41-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If an instrument is a violin, it has strings.",
      "All instruments with strings require tuning.",
      "Some instruments that require tuning are not violins.",
      "No wind instrument has strings."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies violins have strings. Statement 2 implies all stringed instruments need tuning, so violins need tuning. Statement 3 claims some instruments requiring tuning are not violins (e.g., a piano or a guitar), which is possible. Statement 4 states wind instruments lack strings (e.g., a flute), which is also possible. No contradiction arises from these statements."
  },
  {
    "id": "gen-41-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "If a recipe uses cilantro, it is a savory dish.",
      "No dish that is savory contains berries.",
      "Every dish that is a dessert contains berries.",
      "There is at least one recipe that uses cilantro and is a dessert."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says if a recipe uses cilantro, it's savory. Statement 2 says no savory dish contains berries. Together, these imply that any recipe using cilantro does not contain berries. Statement 4 claims there is at least one recipe that uses cilantro and is a dessert. If such a recipe exists, it must not contain berries (from the combination of Statement 1 and 2). However, according to Statement 3, every dessert must contain berries, which means this cilantro dessert recipe must contain berries. This creates a direct contradiction."
  },
  {
    "id": "gen-41-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs are risk-takers.",
      "Some risk-takers are not wealthy.",
      "All wealthy people pay taxes.",
      "All successful entrepreneurs pay taxes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be simultaneously true. Successful entrepreneurs are risk-takers and pay taxes. It is possible for some risk-takers (including some entrepreneurs, or other risk-takers) to not be wealthy. Also, all wealthy individuals paying taxes does not create a conflict with successful entrepreneurs also paying taxes."
  },
  {
    "id": "gen-41-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student who takes Calculus also takes Physics.",
      "No student who takes Physics avoids the lab requirement.",
      "Some students who take Calculus do not meet the lab requirement."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says every student taking Calculus also takes Physics. Statement 2 says no student taking Physics avoids the lab requirement, meaning every student taking Physics meets the lab requirement. Therefore, every student taking Calculus must meet the lab requirement. This directly contradicts Statement 3, which asserts that some students taking Calculus do not meet the lab requirement."
  },
  {
    "id": "gen-41-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Unless a car is an antique, it has modern safety features.",
      "All cars with modern safety features pass the annual inspection.",
      "Some cars that pass the annual inspection are not antiques."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 implies that any car that is not an antique has modern safety features. Statement 2 states that all cars with modern safety features pass the annual inspection. Therefore, any car that is not an antique passes the annual inspection. Statement 3 simply affirms that some cars passing inspection are not antiques, which is perfectly consistent with the deductions from the first two statements."
  },
  {
    "id": "gen-41-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who attend the workshop are managers.",
      "No manager receives overtime pay.",
      "Some employees who do not receive overtime pay did not attend the workshop.",
      "Every employee who attends the workshop receives overtime pay."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 asserts that all employees who attend the workshop are managers. Statement 2 claims that no manager receives overtime pay. Therefore, it must be true that no employee who attends the workshop receives overtime pay. This directly contradicts Statement 4, which states that every employee who attends the workshop receives overtime pay."
  },
  {
    "id": "gen-41-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds that can fly have feathers.",
      "Some birds with feathers do not migrate south for winter.",
      "No bird that is flightless has feathers.",
      "All birds that migrate south for winter can fly."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 3 implies that any bird with feathers must be able to fly. Combined with Statement 1 (All birds that can fly have feathers), this means a bird has feathers if and only if it can fly. Statement 4 (All birds that migrate south can fly) is consistent because these birds would also have feathers. Statement 2 (Some birds with feathers do not migrate south for winter) is also consistent, as some flying birds with feathers might not migrate. All conditions can hold true simultaneously."
  },
  {
    "id": "gen-42-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who enroll in advanced calculus must have passed pre-calculus.",
      "No student who passed pre-calculus ever failed basic algebra.",
      "Some students who enroll in advanced calculus failed basic algebra."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that enrolling in advanced calculus requires passing pre-calculus. Statement 2 implies that passing pre-calculus means passing basic algebra. This forms a chain: if a student enrolls in advanced calculus, they must have passed basic algebra. Statement 3 contradicts this by claiming some students who enroll in advanced calculus failed basic algebra. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-42-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees with perfect attendance received a bonus.",
      "No employee who received a bonus was denied their preferred vacation dates.",
      "Some employees with perfect attendance were denied their preferred vacation dates."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that perfect attendance leads to a bonus. Statement 2 means receiving a bonus guarantees vacation dates are not denied. Together, these imply that employees with perfect attendance are not denied their preferred vacation dates. Statement 3 directly contradicts this conclusion by stating that some employees with perfect attendance were denied their preferred vacation dates. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-42-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All employees who work remotely attend the daily stand-up meeting.",
      "If an employee attends the daily stand-up meeting, they update their status board.",
      "No employee who updates their status board fails to log their hours.",
      "Some employees who work remotely fail to log their hours."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if an employee works remotely, they attend the daily stand-up meeting; then they update their status board; and consequently, they log their hours. This implies that all remote employees log their hours. Statement 4 contradicts this by asserting that some employees who work remotely fail to log their hours. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Unless a report is finalized, it cannot be submitted.",
      "All reports that are finalized must pass a quality check.",
      "No report that passes a quality check contains unverified data.",
      "Some reports are submitted and contain unverified data."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 implies that if a report is submitted, it must be finalized. Statement 2 states that all finalized reports pass a quality check. Statement 3 asserts that no report passing a quality check contains unverified data. This creates a chain: if a report is submitted, it is finalized, passes a quality check, and therefore contains no unverified data. Statement 4 directly contradicts this by stating that some submitted reports do contain unverified data. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-42-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All paintings in the exhibition were created by local artists.",
      "If an artist is local, their work uses natural pigments.",
      "No painting that uses natural pigments can be restored with synthetic compounds.",
      "Some paintings in the exhibition can be restored with synthetic compounds."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: if a painting is in the exhibition, it was created by a local artist; if by a local artist, it uses natural pigments; if it uses natural pigments, it cannot be restored with synthetic compounds. This means no painting in the exhibition can be restored with synthetic compounds. Statement 4 directly contradicts this by claiming some paintings in the exhibition can be restored with synthetic compounds. Removing Statement 4 resolves the inconsistency."
  },
  {
    "id": "gen-43-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees who attend the monthly briefing are aware of the new policy.",
      "Every employee aware of the new policy has completed the required training.",
      "Some employees who attend the monthly briefing have not completed the required training."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that all employees who attend the monthly briefing have completed the required training. Statement 3 directly contradicts this conclusion by asserting that some of those employees have not. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All professional athletes engage in regular training.",
      "Some people who engage in regular training are not professional athletes.",
      "Lisa engages in regular training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all professional athletes to train regularly, some non-athletes also train regularly, and Lisa could be one of those non-athletes who train regularly."
  },
  {
    "id": "gen-43-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No student who fails the midterm will pass the course.",
      "Every student who enrolls in the advanced seminar passes the course.",
      "Some students enrolled in the advanced seminar failed the midterm."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 3 claims there is a student who is enrolled in the advanced seminar AND failed the midterm. From Statement 2, this student must pass the course. However, from Statement 1, any student who failed the midterm will not pass the course. Thus, this student both passes and does not pass the course. Removing Statement 3 resolves this contradiction."
  },
  {
    "id": "gen-43-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All books published by Horizon Press are historical fiction.",
      "Some historical fiction books are not popular.",
      "If a book is popular, it receives positive reviews.",
      "No book published by Horizon Press receives positive reviews."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 3 and 4 imply that no book published by Horizon Press is popular. This is consistent with Statement 1 (Horizon Press books are historical fiction) and Statement 2 (some historical fiction books are not popular, which could include Horizon Press books)."
  },
  {
    "id": "gen-43-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "If an item is handmade, it is expensive.",
      "All items sold at the craft fair are handmade.",
      "No expensive item is mass-produced.",
      "Some items sold at the craft fair are mass-produced."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 2, 1, and 3 form a logical chain: if an item is sold at the craft fair, then it is handmade, which means it is expensive, and therefore it is not mass-produced. This implies that no item sold at the craft fair is mass-produced. Statement 4 directly contradicts this conclusion. Removing Statement 4 makes the set consistent."
  },
  {
    "id": "gen-43-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All successful marketing campaigns target a specific demographic.",
      "Some campaigns that target a specific demographic are not digital.",
      "If a campaign is digital, it uses social media."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for successful campaigns to target demographics, some of those demographic-targeted campaigns not to be digital, and for digital campaigns to use social media. There is no logical conflict among these statements."
  },
  {
    "id": "gen-43-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every participant in the marathon completed the qualifying race.",
      "No one who completed the qualifying race missed more than five training sessions.",
      "Some marathon participants missed more than five training sessions."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no marathon participant missed more than five training sessions. Statement 3 directly contradicts this conclusion by asserting that some participants did miss more than five training sessions. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All members of the photography club own a camera.",
      "Some people who own a camera are not members of the photography club.",
      "If someone owns a camera, they enjoy taking pictures."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is consistent for all club members to own cameras, some camera owners to not be club members, and for camera owners to enjoy taking pictures. These statements describe compatible situations."
  },
  {
    "id": "gen-43-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "No modern art piece depicts realistic landscapes.",
      "Every painting in the new collection is a modern art piece.",
      "Some paintings in the new collection depict realistic landscapes."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 2 and 1 logically imply that no painting in the new collection depicts realistic landscapes. Statement 3 directly contradicts this conclusion by asserting that some paintings in the new collection do depict realistic landscapes. Removing Statement 3 resolves the inconsistency."
  },
  {
    "id": "gen-43-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All effective medications have undergone clinical trials.",
      "Some medications that have undergone clinical trials are not available over-the-counter.",
      "If a medication is available over-the-counter, it does not require a prescription."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Effective medications undergoing trials does not conflict with some trial-tested medications not being over-the-counter. The rule about over-the-counter medications and prescriptions is also compatible with the other statements."
  },
  {
    "id": "gen-44-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the finance committee are eligible for a bonus.",
      "No employee eligible for a bonus has a salary exceeding $100,000.",
      "Every senior executive is a member of the finance committee.",
      "At least one senior executive has a salary exceeding $100,000."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every senior executive is a member of the finance committee. Statement 1 states that all members of the finance committee are eligible for a bonus. Statement 2 specifies that no employee eligible for a bonus has a salary exceeding $100,000. Combining these, every senior executive must not have a salary exceeding $100,000. This directly contradicts Statement 4, which claims at least one senior executive has a salary exceeding $100,000."
  },
  {
    "id": "gen-44-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All birds can fly.",
      "Some animals that can fly are not birds.",
      "No animal that cannot fly has feathers.",
      "Penguins are birds."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 4 indicates penguins are birds. Statement 1 states all birds can fly, so penguins can fly. Statement 2 allows for flying animals that are not birds (e.g., bats). Statement 3 implies that any animal with feathers must be able to fly, which is consistent with birds (who have feathers) being able to fly, as established by Statement 1."
  },
  {
    "id": "gen-44-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful entrepreneurs possess strong leadership skills.",
      "No one who avoids public speaking possesses strong leadership skills.",
      "Some venture capitalists avoid public speaking.",
      "Every venture capitalist is a successful entrepreneur."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates that every venture capitalist is a successful entrepreneur. Statement 1 states that all successful entrepreneurs possess strong leadership skills. Therefore, every venture capitalist possesses strong leadership skills. However, Statement 3 says some venture capitalists avoid public speaking, and Statement 2 says no one who avoids public speaking possesses strong leadership skills. This implies some venture capitalists do not possess strong leadership skills, creating a contradiction with the earlier conclusion."
  },
  {
    "id": "gen-44-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant has blue flowers, it requires alkaline soil.",
      "This garden contains plants that do not require alkaline soil.",
      "No plant with red flowers has blue flowers.",
      "Every plant in this garden that requires alkaline soil has blue flowers."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 (blue flowers imply alkaline soil) and Statement 4 (garden plants requiring alkaline soil have blue flowers) establish a relationship where in this garden, blue flowers are both a condition and a result of requiring alkaline soil. Statement 2 allows for plants in the garden that do not require alkaline soil, and by the contrapositive of Statement 1, these plants would not have blue flowers, which is consistent. Statement 3 (red flowers imply no blue flowers) also poses no contradiction, as plants can have either red or blue flowers, or neither, or require or not require alkaline soil, without creating a conflict."
  },
  {
    "id": "gen-44-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a student enrolls in the advanced calculus course, they must have passed the prerequisite exam.",
      "No student who passed the prerequisite exam failed the introductory statistics course.",
      "Every student who did not complete the summer internship failed the introductory statistics course.",
      "Some students enrolled in the advanced calculus course did not complete the summer internship."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says advanced calculus enrollment requires passing the prerequisite exam. Statement 2 says passing that exam means not failing introductory statistics. This establishes that all advanced calculus students did not fail introductory statistics. The contrapositive of Statement 3 is that if a student did not fail introductory statistics, they completed the summer internship. Therefore, all advanced calculus students completed the summer internship. This conclusion directly contradicts Statement 4, which claims some advanced calculus students did not complete the summer internship."
  },
  {
    "id": "gen-44-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "A book is considered a bestseller only if it sells over 100,000 copies.",
      "Unless a book is reviewed by a major critic, it will not sell over 100,000 copies.",
      "Some books reviewed by major critics are not bestsellers.",
      "Every book in this collection has sold over 100,000 copies."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 2 implies that for a book to sell over 100,000 copies, it must be reviewed by a major critic. Statement 4 indicates all books in this collection sold over 100,000 copies, so all books in this collection were reviewed by a major critic. Statement 1 defines a bestseller as needing to sell over 100,000 copies, but does not state the reverse. Statement 3 allows for books reviewed by major critics to exist without being bestsellers, which is consistent with the other statements."
  },
  {
    "id": "gen-44-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All healthy adult trees have deep root systems.",
      "No tree with a deep root system is susceptible to wind damage.",
      "Some trees on this hillside are susceptible to wind damage.",
      "Every tree on this hillside is a healthy adult tree."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 4 indicates that every tree on this hillside is a healthy adult tree. Statement 1 states that all healthy adult trees have deep root systems. Statement 2 specifies that no tree with a deep root system is susceptible to wind damage. Combining these, every tree on this hillside must not be susceptible to wind damage. This directly contradicts Statement 3, which claims some trees on this hillside are susceptible to wind damage."
  },
  {
    "id": "gen-44-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All employees with perfect attendance receive a bonus.",
      "Some employees who receive a bonus do not have perfect attendance.",
      "No employee who was late more than twice has perfect attendance.",
      "All employees in the marketing department were late more than twice.",
      "Sarah is an employee in the marketing department."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 5 indicates Sarah is in the marketing department. Statement 4 says all marketing department employees were late more than twice. Statement 3 implies that any employee late more than twice does not have perfect attendance. Therefore, Sarah does not have perfect attendance. Statement 1 states employees with perfect attendance receive a bonus. Statement 2 allows for employees who receive a bonus without perfect attendance, so Sarah could still receive a bonus, and all statements can be simultaneously true."
  },
  {
    "id": "gen-44-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All members of the chess club are skilled strategists.",
      "No skilled strategist ever loses to a novice player.",
      "Every person who practices daily is a member of the chess club.",
      "Alice practices daily, but sometimes loses to novice players."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 3 indicates that every person who practices daily is a member of the chess club. Statement 1 states that all members of the chess club are skilled strategists. Statement 2 specifies that no skilled strategist ever loses to a novice player. Combining these, any person who practices daily must never lose to a novice player. Statement 4 asserts that Alice practices daily, which implies she never loses to a novice player, but then immediately states she sometimes loses to novice players. This creates a direct contradiction within the puzzle."
  },
  {
    "id": "gen-44-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All cars that have a hybrid engine are fuel-efficient.",
      "Some fuel-efficient cars do not have a hybrid engine.",
      "No car without an automatic transmission is fuel-efficient.",
      "Every car with a hybrid engine has an automatic transmission."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that cars with hybrid engines are fuel-efficient. Statement 3 implies that all fuel-efficient cars have an automatic transmission. Therefore, all cars with hybrid engines are fuel-efficient and have an automatic transmission, which is consistent with Statement 4. Statement 2 allows for fuel-efficient cars that are not hybrid, which is also consistent with the other statements."
  },
  {
    "id": "gen-45-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student completes all assignments, they pass the course.",
      "Every student who passes the course receives an excellent grade.",
      "No student who skipped more than two lectures received an excellent grade.",
      "Some students skipped more than two lectures but completed all assignments."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1 and 2 establish that completing all assignments leads to an excellent grade (CA → P → EG, so CA → EG). Statement 3 states that skipping more than two lectures means no excellent grade (SML → ~EG). Statement 4 describes students who are both SML and CA. For such a student, from the chain CA → EG, they must receive an excellent grade. But from SML → ~EG, they must not receive an excellent grade. This is a direct contradiction. Removing Statement 4 removes the assertion that such a student exists, making the rest consistent."
  },
  {
    "id": "gen-45-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs that bark frequently are territorial.",
      "Every territorial dog is alert.",
      "Some alert dogs do not bark frequently.",
      "No dog that is not territorial is alert."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all dogs that bark frequently are territorial and alert (BF → T → A, so BF → A). Statement 4 states that no dog that is not territorial is alert (~T → ~A), which means all alert dogs are territorial (A → T). Combining Statement 2 (T → A) and Statement 4 (A → T) means that being territorial and being alert are equivalent (T ↔ A). The combined chain becomes BF → T ↔ A. Statement 3 (Some A are ~BF) means there are alert dogs that do not bark frequently, which is entirely consistent with BF → A (not all alert dogs need to bark frequently)."
  },
  {
    "id": "gen-45-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a device is a smartphone, it runs on a proprietary operating system.",
      "Every device that runs on a proprietary operating system requires frequent security patches.",
      "No device requiring frequent security patches is entirely immune to software vulnerabilities.",
      "Some smartphones are entirely immune to software vulnerabilities."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: If a device is a smartphone, it runs on a proprietary operating system, which requires frequent security patches, and therefore is not entirely immune to software vulnerabilities (S → POS → FSP → ~ISV). This means all smartphones are not entirely immune to software vulnerabilities. Statement 4 asserts that some smartphones are entirely immune to software vulnerabilities. These two conclusions directly contradict each other. Removing Statement 4 eliminates the conflicting assertion."
  },
  {
    "id": "gen-45-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All committee members attend the monthly meetings.",
      "No one who attends the monthly meetings ever misses a quarterly report deadline.",
      "Some people who miss quarterly report deadlines are not committee members.",
      "If someone is a committee member, they prepare a quarterly report."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all committee members attend monthly meetings and never miss a quarterly report deadline (CM → MM → ~MRD, so CM → ~MRD). Statement 3 states that some people who miss deadlines are not committee members (Some MRD are ~CM), which is perfectly consistent with committee members not missing deadlines – it implies there are other people who miss deadlines, and they are not committee members. Statement 4 introduces another characteristic of committee members (CM → PQR) which does not conflict with any other statement. The set is consistent."
  },
  {
    "id": "gen-45-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All participants who completed the survey received a prize.",
      "Every participant who received a prize was randomly selected.",
      "No participant who was randomly selected provided personal contact details.",
      "Some participants who completed the survey provided personal contact details."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 form a chain: If a participant completed the survey, they received a prize, were randomly selected, and therefore did not provide personal contact details (CS → P → RS → ~PCD). This implies that all participants who completed the survey did not provide personal contact details. Statement 4 directly contradicts this by asserting that some participants who completed the survey did provide personal contact details. Removing Statement 4 resolves the contradiction."
  },
  {
    "id": "gen-45-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All successful businesses prioritize customer satisfaction.",
      "Every business that prioritizes customer satisfaction invests in employee training.",
      "Some businesses invest in employee training but are not successful businesses.",
      "No business that neglects customer satisfaction invests in employee training."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 link successful businesses to employee training (SB → CS → ET, so SB → ET). Statement 4 states that no business neglecting customer satisfaction invests in employee training (~CS → ~ET), which means all businesses that invest in employee training also prioritize customer satisfaction (ET → CS). Combining Statement 2 (CS → ET) and Statement 4 (ET → CS) means prioritizing customer satisfaction and investing in employee training are equivalent (CS ↔ ET). The overall implication is SB → CS ↔ ET. Statement 3 (Some ET are ~SB) is consistent; it means there are businesses that invest in employee training (and thus prioritize customer satisfaction) but are not successful, which is possible within the established logic."
  },
  {
    "id": "gen-45-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who submit their essays on time receive bonus points.",
      "No student who receives bonus points fails the assignment.",
      "Every student who prepares extensively for the assignment submits their essay on time.",
      "Some students who prepared extensively for the assignment failed it."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 3, 1, and 2 form a logical chain: If a student prepares extensively, they submit their essay on time, receive bonus points, and therefore do not fail the assignment (PE → OT → BP → ~FA). This implies that all students who prepared extensively for the assignment did not fail it. Statement 4 directly contradicts this by asserting that some students who prepared extensively for the assignment did fail it. Removing Statement 4 eliminates the conflicting assertion."
  },
  {
    "id": "gen-45-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an email is spam, it contains suspicious links.",
      "No email containing suspicious links is from a trusted sender.",
      "Some emails from trusted senders do not contain suspicious links.",
      "Every email that is not spam is from a trusted sender."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 (S → SL) and 2 (SL → ~TS) establish that if an email is spam, it contains suspicious links and is not from a trusted sender (S → SL → ~TS). Statement 4 states that every email not spam is from a trusted sender (~S → TS), which is equivalent to 'no trusted sender emails are spam' (TS → ~S) or 'all spam emails are not from trusted senders' (S → ~TS). This means an email is spam if and only if it is not from a trusted sender (S ↔ ~TS). Statement 2 (SL → ~TS) and the derived S ↔ ~TS imply SL ↔ S (an email has suspicious links if and only if it's spam). Statement 3 (Some TS are ~SL) is consistent; since TS ↔ ~S and S ↔ SL, it means TS ↔ ~SL. So, all emails from trusted senders do not contain suspicious links, which makes 'some' true."
  },
  {
    "id": "gen-45-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a product is eco-friendly, it uses recycled materials.",
      "Every product using recycled materials has a reduced carbon footprint.",
      "No product with a reduced carbon footprint requires excessive energy for production.",
      "Some eco-friendly products require excessive energy for production."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 create a logical chain: If a product is eco-friendly, it uses recycled materials, which has a reduced carbon footprint, and therefore does not require excessive energy for production (EF → RM → RCF → ~EEP). This implies that all eco-friendly products do not require excessive energy for production. Statement 4 directly contradicts this by asserting that some eco-friendly products do require excessive energy for production. Removing Statement 4 eliminates the conflicting assertion."
  },
  {
    "id": "gen-45-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a book is a mystery novel, it features a detective character.",
      "Every book featuring a detective character includes a surprising twist.",
      "Some books that include a surprising twist are not mystery novels.",
      "No book that does not feature a detective character includes a surprising twist."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 1 and 2 establish that all mystery novels feature a detective character and include a surprising twist (MN → DC → ST, so MN → ST). Statement 4 states that no book that does not feature a detective character includes a surprising twist (~DC → ~ST), which means all books with a surprising twist feature a detective character (ST → DC). Combining Statement 2 (DC → ST) and Statement 4 (ST → DC) means that featuring a detective character and including a surprising twist are equivalent (DC ↔ ST). The overall implication is MN → DC ↔ ST. Statement 3 (Some ST are ~MN) is consistent; it means there are books with surprising twists (and thus detective characters) that are not mystery novels, which is possible within the established logic."
  },
  {
    "id": "gen-46-1",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All birds can fly.",
      "No animal that can fly is a reptile.",
      "Some reptiles are birds."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that all birds are not reptiles. Statement 3 asserts that some reptiles are birds, which means some birds are reptiles. This creates a direct contradiction."
  },
  {
    "id": "gen-46-2",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All employees who received a bonus attended the annual conference.",
      "Some employees who attended the annual conference did not receive a bonus.",
      "No employee who missed the keynote speech received a bonus.",
      "Alice received a bonus."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 4, Alice received a bonus. Statement 1 implies she attended the conference. Statement 3 implies she did not miss the keynote speech. Statement 2 is consistent with Statement 1, indicating some attendees didn't get a bonus. All statements can be true simultaneously."
  },
  {
    "id": "gen-46-3",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All team members participated in the group brainstorming session.",
      "No one who participated in the group brainstorming session was allowed to submit individual ideas.",
      "Every team member submitted individual ideas."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no team member submitted individual ideas. Statement 3 asserts that every team member submitted individual ideas. This creates a direct contradiction."
  },
  {
    "id": "gen-46-4",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All documents requiring executive approval are signed by the CEO.",
      "Some documents signed by the CEO do not require executive approval.",
      "No document without a confidentiality clause is signed by the CEO.",
      "The quarterly report requires executive approval."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "From Statement 4, the quarterly report requires executive approval. Statement 1 implies it is signed by the CEO. Statement 3, by contrapositive, implies that any document signed by the CEO has a confidentiality clause. Statement 2 is consistent with Statement 1. All statements can be true simultaneously."
  },
  {
    "id": "gen-46-5",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every student in the honors program received a scholarship.",
      "No student who received a scholarship failed the qualifying exam.",
      "Some students in the honors program failed the qualifying exam."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no student in the honors program failed the qualifying exam. Statement 3 asserts that some students in the honors program did fail the qualifying exam. This creates a direct contradiction."
  },
  {
    "id": "gen-46-6",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All laptops come with a standard warranty.",
      "Some devices with a standard warranty are not laptops.",
      "No device purchased on sale has an extended warranty.",
      "My new laptop came with an extended warranty."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "My new laptop came with an extended warranty (Statement 4). Statement 1 implies it also came with a standard warranty. Statement 3 implies my laptop was not purchased on sale. Statement 2 is consistent with Statement 1. All statements can be true simultaneously."
  },
  {
    "id": "gen-46-7",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All customers who ordered online chose home delivery.",
      "No customer who chose home delivery lives outside the city.",
      "At least one customer who ordered online lives outside the city."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no customer who ordered online lives outside the city. Statement 3 asserts that at least one customer who ordered online lives outside the city. This creates a direct contradiction."
  },
  {
    "id": "gen-46-8",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every car with an active recall needs immediate inspection.",
      "Some cars needing immediate inspection do not have an active recall.",
      "No car parked in this lot has an active recall.",
      "My car needs immediate inspection."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "My car needs immediate inspection (Statement 4). It could be one of the cars that needs immediate inspection but doesn't have an active recall (consistent with Statement 2). If my car is parked in this lot, it would simply mean it is one of the cars in this lot that doesn't have an active recall. All statements are consistent."
  },
  {
    "id": "gen-46-9",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "All fruits rich in Vitamin C are citrus fruits.",
      "No citrus fruit is consumed by people with certain allergies.",
      "Some people with certain allergies regularly consume fruits rich in Vitamin C."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 imply that no fruit rich in Vitamin C is consumed by people with certain allergies. Statement 3 asserts that some people with certain allergies regularly consume fruits rich in Vitamin C. This creates a direct contradiction."
  },
  {
    "id": "gen-46-10",
    "difficulty": "medium",
    "category": "syllogism",
    "statements": [
      "Every manager attended the quarterly review meeting.",
      "Some employees who attended the quarterly review meeting are not managers.",
      "No employee who left early spoke during the meeting.",
      "Sarah is a manager."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Sarah is a manager (Statement 4). Statement 1 implies she attended the quarterly review meeting. She might have spoken during the meeting or not. Statement 3 means if she left early, she did not speak. Statement 2 is consistent with Statement 1. All statements can be true simultaneously."
  },
  {
    "id": "gen-47-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every project approved for funding must present its findings.",
      "If a project presents its findings, it must submit a final report.",
      "No project that submits a final report fails to achieve its objectives.",
      "Some projects that did not achieve their objectives were approved for funding."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says all funded projects present findings (F -> P). Statement 2 says projects presenting findings submit a report (P -> R). Statement 3 states that projects submitting reports achieve their objectives (R -> O). Chaining these, all funded projects must achieve their objectives (F -> O). This directly contradicts Statement 4, which claims that some funded projects did not achieve their objectives (F AND not O)."
  },
  {
    "id": "gen-47-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students who complete the advanced course receive a certificate.",
      "If a student receives a certificate, they are eligible for the internship program.",
      "Some students are eligible for the internship program even though they did not complete the advanced course.",
      "No student who did not complete the advanced course received a certificate."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 (AC -> C) and Statement 4 (not AC -> not C, which means C -> AC) together establish that completing the advanced course is equivalent to receiving a certificate (AC <-> C). Statement 2 (C -> I) means that receiving a certificate makes a student eligible for an internship. Combining these, if a student completes the advanced course, they are eligible for an internship (AC -> I). Statement 3 describes students who are eligible for an internship (I) but did not complete the advanced course (not AC). This is consistent because while AC leads to I, I does not necessarily lead to AC; there could be other paths to internship eligibility not specified."
  },
  {
    "id": "gen-47-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every attendee who registers early gets access to the exclusive workshop.",
      "If an attendee has access to the exclusive workshop, they must also attend the keynote speech.",
      "No attendee who missed the keynote speech submitted their feedback form.",
      "At least one attendee who registered early did not submit their feedback form."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statement 1 says early registrants get workshop access (RE->EW). Statement 2 says workshop access requires keynote attendance (EW->KS). Chaining these, all early registrants attend the keynote (RE->KS). Statement 3, 'No attendee who missed the keynote speech submitted their feedback form,' means that if someone did not submit feedback, they must have missed the keynote (not FF -> not KS). Statement 4 describes an attendee who registered early (RE) but did not submit feedback (not FF). For this attendee, RE implies they attended the keynote, but not FF implies they missed the keynote, a contradiction."
  },
  {
    "id": "gen-47-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a candidate performs well in the interview, they will be invited for a second round.",
      "All candidates invited for a second round have strong references.",
      "Some candidates who did not perform well in the interview still have strong references.",
      "No candidate with weak references is invited for a second round."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 1 (IW -> SR) and Statement 2 (SR -> HR) combine to show that performing well in the interview implies having strong references (IW -> HR). Statement 4 (not HR -> not SR) is simply the contrapositive of Statement 2, so it adds no new logical constraint. Statement 3 claims that some candidates did not perform well in the interview (not IW) but still have strong references (HR). This is entirely possible, as IW -> HR does not mean that not IW implies not HR. A candidate could have strong references independently of their interview performance."
  },
  {
    "id": "gen-47-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every employee who completes the advanced training program is eligible for promotion.",
      "If an employee is eligible for promotion, they receive increased benefits.",
      "No employee who receives increased benefits is overlooked for a promotion.",
      "Some employees who are eligible for promotion did not complete the advanced training program.",
      "All employees who receive increased benefits completed the advanced training program."
    ],
    "isConsistent": false,
    "answerIndex": 1,
    "explanation": "Statement 4 claims some employees are eligible for promotion (P) but did not complete advanced training (not ATP). Statements 1 (ATP -> P), 3 (B -> P), and 5 (B -> ATP) combine to show that if an employee receives increased benefits, they must have completed the advanced training and be eligible for promotion (B -> ATP and B -> P). Without Statement 2 (P -> B), it is possible for an employee to be eligible for promotion without receiving increased benefits. Such an employee could be eligible for promotion (P) but not have completed advanced training (not ATP) without contradiction."
  },
  {
    "id": "gen-47-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a feature is fully implemented, it undergoes rigorous testing.",
      "All features that pass rigorous testing are included in the next release.",
      "Some features included in the next release were not fully implemented.",
      "No feature included in the next release bypasses rigorous testing."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 2 (RT -> NR) and 4 (NR -> RT, meaning that if a feature is in the next release, it underwent rigorous testing) establish that rigorous testing is equivalent to being included in the next release (RT <-> NR). Statement 1 (FI -> RT) indicates that fully implemented features undergo rigorous testing. Combining these, fully implemented features are included in the next release (FI -> NR). Statement 3 claims some features are included in the next release (NR) but were not fully implemented (not FI). This is consistent, as FI -> NR does not mean NR -> FI; features can be included in the next release without necessarily having been fully implemented."
  },
  {
    "id": "gen-47-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every researcher who secures a grant must publish their findings.",
      "If a researcher publishes their findings, they present at the annual symposium.",
      "Only researchers permitted to publish their findings also present at the annual symposium.",
      "No researcher who did not secure a grant is permitted to publish their findings.",
      "Some researchers who did not secure a grant presented at the annual symposium."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 5 claims some researchers presented at the symposium (S) but did not secure a grant (not G). Statements 1 (G->P), 2 (P->S), and 4 (not G->not P, which means P->G) establish a chain: P->S and P->G. If a researcher presents at the symposium (S5), then by Statement 3 (S->P), they must have published findings (P). If they published findings (P), then by Statement 4 (P->G), they must have secured a grant (G). This means presenting at the symposium implies securing a grant (S->G). This directly contradicts Statement 5's claim that some researchers are S AND not G. Removing Statement 3 breaks the link S->P, thus breaking the full chain S->G."
  },
  {
    "id": "gen-47-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All students enrolled in the advanced robotics course passed the final project.",
      "If a student passed the final project, they are invited to the campus innovation fair.",
      "Some students invited to the campus innovation fair were not enrolled in the advanced robotics course.",
      "No student who did not pass the final project is invited to the campus innovation fair."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statement 2 (PFP -> CIF) and Statement 4 (not PFP -> not CIF, which means CIF -> PFP) together establish that passing the final project is equivalent to being invited to the campus innovation fair (PFP <-> CIF). Statement 1 (ARC -> PFP) indicates that students in the advanced robotics course pass the final project. This implies that if a student is in ARC, they are also invited to the fair (ARC -> CIF). Statement 3 describes students who are invited to the fair (CIF) but were not in ARC. This is consistent, as ARC -> CIF does not mean CIF -> ARC; there can be other ways to be invited to the fair besides being in the advanced robotics course."
  },
  {
    "id": "gen-47-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every new product design must undergo usability testing.",
      "If a product undergoes usability testing, it gathers customer feedback.",
      "No product that gathers customer feedback fails to meet market demand.",
      "At least one product that met market demand did not undergo usability testing.",
      "All products that meet market demand must be new product designs."
    ],
    "isConsistent": false,
    "answerIndex": 0,
    "explanation": "Statement 4 claims there is a product that met market demand (MMD) but did not undergo usability testing (not UT). Statements 2 (UT->CF) and 3 (CF->MMD) show that if a product undergoes usability testing, it will meet market demand (UT->MMD). Statements 5 (MMD->NPD) and 1 (NPD->UT) show that if a product meets market demand, it must have been a new product design, and therefore must have undergone usability testing (MMD->NPD->UT). Together, these chains establish that undergoing usability testing is equivalent to meeting market demand (UT <-> MMD). Thus, a product cannot be MMD AND not UT. Removing Statement 1 breaks the link MMD->NPD->UT, allowing for products that meet market demand without necessarily having undergone usability testing."
  },
  {
    "id": "gen-47-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an athlete qualifies for the national championship, they participate in a rigorous training camp.",
      "All athletes who participate in a rigorous training camp achieve peak performance.",
      "Some athletes who achieved peak performance did not qualify for the national championship.",
      "No athlete who achieved peak performance avoids participating in a rigorous training camp."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "Statements 2 (RTC -> PP) and 4 (PP -> RTC, meaning that if an athlete achieved peak performance, they participated in a rigorous training camp) establish that participating in a rigorous training camp is equivalent to achieving peak performance (RTC <-> PP). Statement 1 (NC -> RTC) indicates that qualifying for the national championship means participating in a rigorous training camp. Combining these, qualifying for the championship means achieving peak performance (NC -> PP). Statement 3 claims some athletes achieved peak performance (PP) but did not qualify for the championship (not NC). This is consistent, as NC -> PP does not mean PP -> NC; athletes can achieve peak performance through other means or simply not qualify for the championship despite their performance."
  },
  {
    "id": "gen-48-1",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All owls are nocturnal predators.",
      "No nocturnal predators are plant-eaters.",
      "Some owls are plant-eaters."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 says all owls are nocturnal predators. Statement 2 says no nocturnal predators are plant-eaters. Therefore, it must be true that no owls are plant-eaters. This directly contradicts Statement 3, which claims some owls are plant-eaters."
  },
  {
    "id": "gen-48-2",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every student who submitted their essay received a grade.",
      "Some students did not receive a grade.",
      "No student who submitted their essay failed the course.",
      "All students who passed the course received a grade."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that submission guarantees a grade. Statement 2 means some students (presumably those who did not submit their essay, consistent with Statement 1) did not get a grade. Statement 3 ensures submitted essays don't lead to failure, and Statement 4 confirms passing students get a grade. There is no contradiction among these conditions."
  },
  {
    "id": "gen-48-3",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All employees in department A received safety training.",
      "No employee who received safety training missed the fire drill.",
      "Some employees who missed the fire drill are in department A."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 establishes that all employees in department A received safety training. Statement 2 states that no one with safety training missed the fire drill. This logically implies that no employee in department A missed the fire drill, which directly contradicts Statement 3."
  },
  {
    "id": "gen-48-4",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every mystery novel has a twist ending.",
      "Some books with a twist ending are not mystery novels.",
      "No non-fiction book is a mystery novel.",
      "\"The Silent Killer\" has a twist ending."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. \"The Silent Killer\" having a twist ending (Statement 4) is compatible with it being a mystery novel (which would then have a twist ending per Statement 1) or a non-mystery novel with a twist ending (consistent with Statement 2). Statement 3 simply defines non-fiction's relationship to mystery novels, which doesn't create conflict."
  },
  {
    "id": "gen-48-5",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All attendees with VIP tickets received a complimentary drink.",
      "No one who received a complimentary drink entered through the main gate.",
      "Some attendees who entered through the main gate had VIP tickets."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "According to Statement 1, all VIP ticket holders received a complimentary drink. Statement 2 indicates that no one who received a complimentary drink entered through the main gate. Combining these, it must be true that no VIP ticket holder entered through the main gate. This contradicts Statement 3, which asserts that some attendees who entered through the main gate had VIP tickets."
  },
  {
    "id": "gen-48-6",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every car model with advanced navigation includes a sunroof.",
      "Some car models with a sunroof do not have advanced navigation.",
      "This specific car model has advanced navigation."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 implies that if a car has advanced navigation, it has a sunroof. Statement 3 says a specific car has advanced navigation, so it must have a sunroof, which aligns with Statement 1. Statement 2 allows for sunroofs on cars without advanced navigation, which does not contradict the other statements."
  },
  {
    "id": "gen-48-7",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All plants that bloom in spring have vibrant flowers.",
      "No plant with vibrant flowers is susceptible to frost.",
      "Some plants susceptible to frost bloom in spring."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 states that all spring-blooming plants have vibrant flowers. Statement 2 says that no plant with vibrant flowers is susceptible to frost. Therefore, it logically follows that no plant that blooms in spring is susceptible to frost. This conclusion directly conflicts with Statement 3."
  },
  {
    "id": "gen-48-8",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "Every restaurant with a perfect health score passes inspection.",
      "Some restaurants that pass inspection do not have a perfect health score.",
      "All restaurants that serve organic ingredients have a perfect health score.",
      "\"The Green Bistro\" serves organic ingredients."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. From Statement 4 and Statement 3, \"The Green Bistro\" must have a perfect health score. From Statement 1, a perfect health score means it passes inspection. Statement 2 allows for other restaurants to pass inspection without a perfect health score, which doesn't create a conflict."
  },
  {
    "id": "gen-48-9",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All club members attended the annual gala.",
      "No attendee of the annual gala missed the keynote speech.",
      "Some club members missed the keynote speech."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statement 1 indicates that all club members attended the annual gala. Statement 2 states that no attendee of the annual gala missed the keynote speech. Combining these two, it means no club member missed the keynote speech. This conclusion directly contradicts Statement 3, which claims some club members missed the keynote speech."
  },
  {
    "id": "gen-48-10",
    "difficulty": "medium",
    "category": "quantifier",
    "statements": [
      "All customers who bought a premium subscription received a bonus gift.",
      "Some customers received a bonus gift even though they did not buy a premium subscription.",
      "Ms. Thompson bought a premium subscription."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 establishes that premium subscribers get a bonus gift. Statement 3 means Ms. Thompson is a premium subscriber, so she receives a bonus gift, which is consistent with Statement 1. Statement 2 simply notes that the bonus gift isn't exclusive to premium subscribers, which doesn't contradict any other information."
  },
  {
    "id": "gen-49-1",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "Every researcher attending the conference has published a peer-reviewed article.",
      "Anyone who has published a peer-reviewed article is familiar with ethical guidelines.",
      "No one familiar with ethical guidelines would intentionally misrepresent data.",
      "At least one researcher attending the conference has intentionally misrepresented data."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a researcher attends the conference, then they would not intentionally misrepresent data. Statement 4 directly contradicts this conclusion by asserting that at least one researcher attending the conference has intentionally misrepresented data."
  },
  {
    "id": "gen-49-2",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All managers are employees.",
      "Some employees are not managers.",
      "No entry-level staff are managers.",
      "Some entry-level staff are employees."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true simultaneously. Managers can be a subset of employees, with some employees not being managers. Entry-level staff can be employees without being managers, and some entry-level staff may or may not be managers, consistent with the other statements."
  },
  {
    "id": "gen-49-3",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a substance is a metal, it conducts electricity.",
      "Every substance that conducts electricity can be drawn into a wire.",
      "No substance that can be drawn into a wire is brittle.",
      "Some metals are brittle."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that if a substance is a metal, then it is not brittle. Statement 4 directly contradicts this conclusion by asserting that some metals are brittle."
  },
  {
    "id": "gen-49-4",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All musicians are artists.",
      "Some artists are also writers.",
      "No writers are musicians.",
      "Every musician practices daily."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "It is possible for all these statements to be true. Musicians are a type of artist who practice daily. Some artists are also writers, and these writers are not musicians, allowing for all conditions to be met without contradiction."
  },
  {
    "id": "gen-49-5",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All rare gemstones are valuable.",
      "No valuable items are considered common.",
      "Some common items are rare gemstones."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 logically imply that no rare gemstone is considered common. Statement 3 directly contradicts this conclusion by stating that some common items are rare gemstones."
  },
  {
    "id": "gen-49-6",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If an animal is a feline, it has retractable claws.",
      "Not all animals with retractable claws are felines.",
      "All animals with retractable claws are hunters.",
      "Some hunters are not felines."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Felines are a subset of animals with retractable claws, and all animals with retractable claws are hunters. This means there can be hunters who are not felines (e.g., non-feline animals with retractable claws, or even other types of hunters without retractable claws)."
  },
  {
    "id": "gen-49-7",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "If a plant thrives in the desert, it requires little water.",
      "Any plant that requires little water can tolerate extreme heat.",
      "All cacti are plants that thrive in the desert.",
      "Some cacti cannot tolerate extreme heat."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that all cacti can tolerate extreme heat. Statement 4 directly contradicts this by asserting that some cacti cannot tolerate extreme heat."
  },
  {
    "id": "gen-49-8",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All successful startups offer innovative solutions.",
      "Some companies that offer innovative solutions are not startups.",
      "Every company offering innovative solutions attracts investors.",
      "No startup is unattractive to investors."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "These statements are consistent. Successful startups are a type of startup that offers innovative solutions and attracts investors. Other companies can also offer innovative solutions and attract investors. It's also possible for startups that are not 'successful' to still attract investors."
  },
  {
    "id": "gen-49-9",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All licensed drivers possess valid insurance.",
      "No one with valid insurance has an expired registration.",
      "Every vehicle on the road is operated by a licensed driver.",
      "Some vehicles on the road have an expired registration."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and 3 logically imply that no vehicle on the road has an expired registration. Statement 4 directly contradicts this by asserting that some vehicles on the road do have an expired registration."
  },
  {
    "id": "gen-49-10",
    "difficulty": "hard",
    "category": "syllogism",
    "statements": [
      "All professional athletes train daily.",
      "Some people who train daily are not professional athletes.",
      "No professional athlete has a sedentary lifestyle.",
      "Some people with a sedentary lifestyle are not professional athletes."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "All statements can be true. Professional athletes are a subset of people who train daily and do not have sedentary lifestyles. It is consistent that some people who train daily are not professional athletes, and that some people with a sedentary lifestyle are not professional athletes (as professional athletes cannot have sedentary lifestyles anyway)."
  },
  {
    "id": "gen-50-1",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a student attends the lecture, they will understand the material.",
      "Every student who understands the material passes the exam.",
      "Some students did not pass the exam.",
      "All students attended the lecture."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1, 2, and 4 together imply that all students attended the lecture (Statement 4), then understood the material (Statement 1), and subsequently passed the exam (Statement 2). This forms a chain (attended lecture → understood material → passed exam) showing that all students passed the exam. Statement 3, however, asserts that some students did not pass the exam, directly contradicting the conclusion that all students passed."
  },
  {
    "id": "gen-50-2",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All lawyers are college graduates.",
      "Some college graduates are not lawyers.",
      "Maria is a college graduate.",
      "If someone is a lawyer, they earn a high salary."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Maria is a college graduate; she could be a lawyer who earns a high salary, or she could be one of the college graduates who are not lawyers. Nothing in the statements forces a contradiction."
  },
  {
    "id": "gen-50-3",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every car sold at this dealership comes with a premium warranty.",
      "No car with a premium warranty requires frequent servicing.",
      "Some cars sold at this dealership require frequent servicing."
    ],
    "isConsistent": false,
    "answerIndex": 2,
    "explanation": "Statements 1 and 2 create a chain of implication: if a car is sold at this dealership, it comes with a premium warranty (Statement 1), and then it does not require frequent servicing (Statement 2). This means any car sold at this dealership does not require frequent servicing. Statement 3 directly contradicts this by stating that some cars sold at this dealership *do* require frequent servicing."
  },
  {
    "id": "gen-50-4",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a bird is a robin, then it has a red breast.",
      "All birds with a red breast migrate south for winter.",
      "Some birds that migrate south for winter are not robins.",
      "This specific bird is a robin."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If this specific bird is a robin (Statement 4), then it has a red breast (Statement 1) and migrates south for winter (Statement 2). The existence of other birds that migrate south but are not robins (Statement 3) does not contradict this specific bird's characteristics."
  },
  {
    "id": "gen-50-5",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If a painting is a genuine masterpiece, it commands a high price.",
      "No painting that commands a high price is readily available for purchase.",
      "Every painting that is not readily available for purchase is housed in a private collection.",
      "This painting is a genuine masterpiece.",
      "This painting is not housed in a private collection."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 1, 2, and 3 establish a logical chain: if a painting is a genuine masterpiece, it commands a high price (1), then it is not readily available for purchase (2), and consequently, it is housed in a private collection (3). This implies that a genuine masterpiece must be housed in a private collection (GM → HP → ~RA → PC). Statement 4 identifies 'this painting' as a genuine masterpiece. Therefore, 'this painting' must be housed in a private collection. Statement 5, however, declares that 'this painting' is not housed in a private collection, directly contradicting the conclusion."
  },
  {
    "id": "gen-50-6",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All dogs enjoy playing in the park.",
      "Some animals that enjoy playing in the park are not dogs.",
      "No animal that enjoys playing in the park dislikes squirrels.",
      "Max is a dog."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If Max is a dog (Statement 4), then Max enjoys playing in the park (Statement 1) and does not dislike squirrels (Statement 3). The fact that some park-playing animals are not dogs (Statement 2) is a general observation that does not conflict with Max's specific attributes."
  },
  {
    "id": "gen-50-7",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "Every student who passed the advanced logic course submitted all assignments.",
      "No student who submitted all assignments received a grade below 'B'.",
      "If a student received a grade below 'B', they did not earn a distinction.",
      "All students who did not earn a distinction passed the advanced logic course.",
      "There is at least one student who received a grade below 'B'."
    ],
    "isConsistent": false,
    "answerIndex": 4,
    "explanation": "Statements 3, 4, 1, and 2 form a continuous logical chain when applied to a student who received a grade below 'B'. If a student received a grade below 'B' (Statement 3), then they did not earn a distinction. If they did not earn a distinction (Statement 4), they passed the advanced logic course. If they passed the advanced logic course (Statement 1), they submitted all assignments. And if they submitted all assignments (Statement 2), they did not receive a grade below 'B'. Thus, assuming a student received a grade below 'B' ultimately leads to the conclusion that they did *not* receive a grade below 'B'. Statement 5 directly initiates this contradiction by asserting that at least one student *did* receive a grade below 'B'."
  },
  {
    "id": "gen-50-8",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "No one who supports higher taxes is a proponent of deregulation.",
      "All proponents of deregulation favor smaller government.",
      "Some people who favor smaller government do not support higher taxes.",
      "If a person supports higher taxes, they will vote for the current administration."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. Statement 1 indicates that supporters of higher taxes are not proponents of deregulation. Statement 2 implies that proponents of deregulation favor smaller government. Statement 3 confirms that some people who favor smaller government do not support higher taxes, which is consistent with the preceding statements, as not all people who favor smaller government must be proponents of deregulation. Statement 4 provides an additional conditional link for supporters of higher taxes that does not conflict with the other information."
  },
  {
    "id": "gen-50-9",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "All birds in this sanctuary are native species.",
      "No native species requires supplemental feeding.",
      "Every bird that is banded has received supplemental feeding.",
      "Some birds in this sanctuary are banded."
    ],
    "isConsistent": false,
    "answerIndex": 3,
    "explanation": "Statements 1, 2, and the contrapositive of 3 create a logical chain: all birds in this sanctuary are native species (1), no native species requires supplemental feeding (2), and if a bird does not require supplemental feeding, then it is not banded (contrapositive of 3). This means any bird in the sanctuary does not require supplemental feeding, and therefore cannot be banded (BS → NS → ~SF → ~B). Statement 4, however, asserts that some birds in this sanctuary *are* banded, which directly contradicts the conclusion that no bird in the sanctuary can be banded."
  },
  {
    "id": "gen-50-10",
    "difficulty": "hard",
    "category": "conditional",
    "statements": [
      "If an experiment is successful, it is repeatable.",
      "Some repeatable experiments involve complex machinery.",
      "No experiment involving complex machinery is inexpensive.",
      "This specific experiment is not inexpensive."
    ],
    "isConsistent": true,
    "answerIndex": null,
    "explanation": "The statements are consistent. If an experiment is successful, it is repeatable (Statement 1). Some repeatable experiments use complex machinery (Statement 2), which are not inexpensive (Statement 3). The fact that a specific experiment is not inexpensive (Statement 4) is perfectly consistent, as it could be one of the repeatable experiments using complex machinery, or it could be not inexpensive for other reasons without conflicting with any other statement."
  }
];

export default generatedPuzzles;
