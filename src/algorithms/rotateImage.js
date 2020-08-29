export default function rotateImage(a) {
  const arrayEnd = a.length - 1;
  let maxCicles = Math.floor(a.length / 2);
  let temp = null;

  for (let cicle = 0; cicle < maxCicles; cicle++) {
    let rotationCicles = a.length - cicle - 1;

    for (let index = 0; index < rotationCicles - cicle; index++) {
      temp = a[cicle][index + cicle];

      a[cicle][index + cicle] = a[arrayEnd - index - cicle][cicle];

      a[arrayEnd - index - cicle][cicle] =
        a[arrayEnd - cicle][arrayEnd - index - cicle];

      a[arrayEnd - cicle][arrayEnd - index - cicle] =
        a[cicle + index][arrayEnd - cicle];

      a[cicle + index][arrayEnd - cicle] = temp;
    }
  }

  return a;
}

export const testCase = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
