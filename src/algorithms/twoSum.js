var twoSum = function (nums, target) {
  const numsMap = new Map();

  nums.forEach((number, index) => {
    numsMap.set(number, index);
  });

  let secondNumIndex = null;

  for (let index = 0; index < nums.length; index++) {
    secondNumIndex = numsMap.get(target - nums[index]);

    if (secondNumIndex === index) continue;
    if (secondNumIndex !== undefined) return [index, secondNumIndex];
  }
};

export default twoSum;
