export default function queenOfSchool(votes) {
  const votesMap = new Map();
  let maxNumOfVotes = 1;

  votes.forEach((name) => {
    if (votesMap.has(name)) {
      const newVotesNum = votesMap.get(name) + 1;

      maxNumOfVotes = newVotesNum > maxNumOfVotes ? newVotesNum : maxNumOfVotes;

      votesMap.set(name, newVotesNum);
      return;
    }

    votesMap.set(name, 1);
  });

  const finalists = [];

  votesMap.forEach((votes, name) => {
    votes === maxNumOfVotes && finalists.push(name);
  });

  const finalistsSorted = finalists.sort();

  return finalistsSorted[finalistsSorted.length - 1];
}

export const testCase = [
  "Laura",
  "Emily",
  "Louise",
  "Natasha",
  "Emily",
  "Lilly",
  "Louise",
  "Laura",
  "Mary",
  "Mary",
];
