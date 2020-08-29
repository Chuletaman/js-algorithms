export default function firstNotRepeatingCharacter(s) {
  const noRepeatedChars = new Set();
  const repeatedChars = new Set();

  for (let index = 0; index < s.length; index++) {
    if (repeatedChars.has(s[index])) continue;

    if (noRepeatedChars.has(s[index])) {
      repeatedChars.add(s[index]);
      noRepeatedChars.delete(s[index]);
      continue;
    }

    noRepeatedChars.add(s[index]);
  }

  return noRepeatedChars.size ? Array.from(noRepeatedChars)[0] : "_";
}

export const testCase = "abbbbbca";
