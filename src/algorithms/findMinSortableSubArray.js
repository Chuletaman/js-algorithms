export default function findMinSortableSubArray(unsortedArray) {
  const subArrayStartData = { index: null, number: null };
  const subArrayEndData = { index: null, number: null };
  let minErrorNumber = NaN;
  let maxErrorNumber = 0;

  for (let index = 0; index < unsortedArray.length; index++) {
    if (
      unsortedArray[index] > unsortedArray[index + 1] &&
      isNaN(minErrorNumber)
    )
      minErrorNumber = unsortedArray[index + 1];

    if (minErrorNumber > unsortedArray[index])
      minErrorNumber = unsortedArray[index];
  }

  for (let index = 0; index < unsortedArray.length; index++) {
    if (
      unsortedArray[index] > minErrorNumber &&
      subArrayStartData.index === null
    ) {
      subArrayStartData.index = index;
      subArrayStartData.number = unsortedArray[index];
    }

    if (unsortedArray[index] > maxErrorNumber)
      maxErrorNumber = unsortedArray[index];

    if (
      unsortedArray[index] < subArrayStartData.number ||
      maxErrorNumber > unsortedArray[index]
    ) {
      subArrayEndData.index = index;
      subArrayEndData.number = unsortedArray[index];
    }
  }

  return `Index inicio : ${subArrayStartData.index} | Index Fin : ${subArrayEndData.index}`;
}

export const testCase = [1, 1, 3, 2, 9, 5, 9, 2, 10, 12];
