export default function firstDuplicate(a) {
  const arrayValuesSet = new Set();

  let res = -1;

  for (let index = 0; index < a.length; index++) {
    if (arrayValuesSet.has(a[index])) {
      res = a[index];
      return res;
    }

    arrayValuesSet.add(a[index]);
  }

  return res;
}

export const testCase = [1, 2, 3, 4, 5, 4, 3, 2, 1];
