export default function sumOfTwo(a, b, v) {
  const numbersSet = new Set(a);

  for (let index = 0; index < b.length; index++) {
    if (numbersSet.has(v - b[index])) {
      return true;
    }
  }

  return false;
}

export const testCase = ([1, 2, 3], [10, 20, 30, 40], 42);
