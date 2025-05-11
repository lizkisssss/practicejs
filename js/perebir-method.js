const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.sort((a, b) => a - b);
console.log(ascendingScores);
const scores1 = [61, 19, 74, 35, 92, 56];
const descendingScores = scores1.sort((a, b) => b - a);
console.log(descendingScores);

const students1 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students1.sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); 

const inReversedOrder = students1.sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);