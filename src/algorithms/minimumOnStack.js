export default function minimumOnStack(operations) {
  const stack = [];
  const res = [];

  operations.forEach((operation) => {
    const operationName = operation.split(" ")[0];
    const operationValue = Number(operation.split(" ")[1]);
    const currentMin = stack[stack.length - 1];

    switch (operationName) {
      case "push":
        stack.push(currentMin < operationValue ? currentMin : operationValue);
        break;

      case "pop":
        stack.pop();
        break;

      case "min":
        res.push(currentMin);
        break;

      default:
        break;
    }
  });

  return res;
}

export const testCase = [
  "push 10",
  "min",
  "push 5",
  "min",
  "push 8",
  "min",
  "pop",
  "min",
  "pop",
  "min",
];
