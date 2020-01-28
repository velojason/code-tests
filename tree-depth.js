const depth = (tree) => {
  // Type your solution here
  const len = tree.length;

  if(len === 0 || len === 1) {
    return len;
  }

  const getDepth = (tree, idx) => {
    if (idx >= len || tree[idx] === -1) {
      return 0;
    }

    let left = getDepth(tree, ((idx * 2) + 1));
    let right = getDepth(tree, ((idx * 2) + 2));

    return Math.max(left, right) + 1;
  }

  let idx = 0;
  return getDepth(tree, idx);

};

// depth([1,2,3]);
depth([1,2,3,4,-1,-1,-1]);
