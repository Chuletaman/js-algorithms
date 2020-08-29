export default function checkForPairs(input) {
  const stack = [];

  for (const iterator of input) {
    if (
      (iterator === ")" && stack[stack.length - 1] === "(") ||
      (iterator === "]" && stack[stack.length - 1] === "[") ||
      (iterator === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    } else {
      stack.push(iterator);
    }
  }

  return stack.length;
}

export const testCase = "{()(){}[[[()]]]{({})}}";
