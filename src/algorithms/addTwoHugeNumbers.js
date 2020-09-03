export default function addTwoHugeNumbers(a, b) {
  const arrayA = [];
  const arrayB = [];
  const resArray = [];

  const navigateList = (l, array) => {
    if (l === null) return;
    navigateList(l.next, array);
    array.push(l.value);
  };

  navigateList(a, arrayA);
  navigateList(b, arrayB);

  const largestArrayLength =
    arrayA.length > arrayB.length ? arrayA.length : arrayB.length;

  let extra = 0;

  for (let index = 0; index < largestArrayLength; index++) {
    let partialSum = (arrayA[index] || 0) + (arrayB[index] || 0) + extra;
    extra = 0;

    if (partialSum > 9999) {
      partialSum -= 10000;
      extra = 1;
    }

    resArray.push(partialSum);
  }

  if (extra) resArray.push(extra);

  return resArray.reverse();
}

export const testCase =
  ({
    value: 9876,
    next: {
      value: 5432,
      next: {
        value: 1999,
        next: null,
      },
    },
  },
  {
    value: 1,
    next: {
      value: 8001,
      next: null,
    },
  });
