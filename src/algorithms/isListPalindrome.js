export default function isListPalindrome(l) {
  if (l === null) return;

  const navigateList = (node) => {
    if (node === null) return l;

    const reversedNode = navigateList(node.next);

    if (reversedNode.next === null) return true;

    return !reversedNode || node.value !== reversedNode.value
      ? false
      : reversedNode.next;
  };

  return navigateList(l);
}

export const testCase = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: { value: 2, next: { value: 1, next: null } },
    },
  },
};
