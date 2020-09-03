export default function singleNumber(nums) {
  const numsSet = new Set();

  nums.forEach((element) => {
    if (numsSet.has(element)) {
      numsSet.delete(element);
      return;
    }

    numsSet.add(element);
  });

  return Array.from(numsSet)[0];
}

export const testCase = [4, 1, 2, 1, 2];
