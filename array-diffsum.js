// Brute force approach. Fails for large values for n.
const diffsum = (n, queries) => {
  let arr = Array(n).fill(0);

  queries.forEach((q) => {
    let left = q[0] - 1;
    let right = q[1] - 1;
    let num = q[2];
    for (left; left <= right; left++) {
      arr[left] += num;
    }
  });
  return Math.max(...arr);
}

diffsum(5, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]);
diffsum(10, [ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ]);
diffsum(10, [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ]);

// Using difference and prefix sum array.
const arm = (n, queries) => {
  // Initialize array with n+2 elements to protect against oob.
  let arr = Array(n+2).fill(0);

  // Traverse queries and create difference array.
  queries.forEach((q) => {
    let left = q[0];
    let right = q[1] + 1;
    arr[left] += q[2];
    arr[right] -= q[2];
  });

  // Prefix sum array. Using reduce:
  let max = arr.reduce((tally, x) => {
    // Store running tally and max value.
    tally[0] += x;
    tally[1] = Math.max(tally[0], tally[1]);
    return tally;
  }, [0, 0]);

  return max[1];

  // Using map:
  // arr = arr.map((x, i, a) => {
  //   if (i > 0) {
  //     return x += a[i-1];
  //   }
  //   return x;
  // });
  // return Math.max(...arr);
}

arm(5, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]);
arm(10, [ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ]);
arm(10, [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ]);
