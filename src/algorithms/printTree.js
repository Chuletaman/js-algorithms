import Queue from "../tools/queue";

export default function treePrint(tree) {
  const printQueue = new Queue();

  const printBranchValue = (branch) => {
    branch.value && console.log(branch.value);
  };

  const treeNavigation = () => {
    const branch = printQueue.pop();

    if (branch === undefined) return;

    printBranchValue(branch);

    branch.l && printQueue.push(branch.l);
    branch.r && printQueue.push(branch.r);

    treeNavigation();
  };

  printQueue.push(tree);
  treeNavigation();
}

export const testCase = {
  value: 1,
  l: {
    value: 2,
    l: {
      value: 4,
      l: { value: 8, l: null, r: null },
      r: { value: 9, l: null, r: null },
    },
    r: {
      value: 5,
      l: { value: 10, l: null, r: null },
      r: { value: 11, l: null, r: null },
    },
  },
  r: {
    value: 3,
    l: { value: 6, l: null, r: { value: 13, l: null, r: null } },
    r: { value: 7, l: { value: 14, l: null, r: null }, r: null },
  },
};
