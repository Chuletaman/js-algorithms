export default function sumInRange(nums, queries) {
  const sumsMap = new Map();
  const module = 1000000007;
  let sumOfElements = 0;

  nums.forEach((number, index) => {
    sumOfElements += number;
    sumsMap.set(index, sumOfElements);
  });

  sumOfElements = 0;
  queries.forEach((query) => {
    sumOfElements += sumsMap.get(query[1]) - (sumsMap.get(query[0] - 1) || 0);
  });

  return sumOfElements < 0 ? sumOfElements + module : sumOfElements % module;
}

export const testCase =
  ([3, 0, -2, 6, -3, 2],
  [
    [0, 2],
    [2, 5],
    [0, 5],
  ]);
