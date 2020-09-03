export default function removeKFromList(l, k) {
  if (!l) return [];

  let listRoot = Object.assign({}, l);

  const navigateLinkedList = (node) => {
    if (node === null) return null;

    node.next = navigateLinkedList(node.next);
    return node.value === k ? node.next : node;
  };

  return navigateLinkedList(listRoot);
}

export const testCase =
  ({
    value: 1,
    next: {
      value: 2,
      next: {
        value: 2,
        next: {
          value: 5,
          next: {
            value: 2,
            next: {
              value: 2,
              next: { value: 2, next: { value: 5, next: null } },
            },
          },
        },
      },
    },
  },
  2);
