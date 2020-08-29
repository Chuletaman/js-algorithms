export default function checkForBiggestPali(input) {
  const charsSet = new Set();
  const charsWithPair = [];

  for (const iterator of input) {
    if (charsSet.has(iterator)) {
      charsSet.delete(iterator);
      charsWithPair.push(iterator);
      continue;
    }

    charsSet.add(iterator);
  }

  const reversedCharsWithPair = Array.from(charsWithPair).reverse();

  const middleChar = Array.from(charsSet)[0];
  middleChar && charsWithPair.push(middleChar);

  return charsWithPair.concat(reversedCharsWithPair);
}

export const testCase = "asdafsd";
