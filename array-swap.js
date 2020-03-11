
const minSwaps = (arr) => {
  let swaps = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    let here = arr[i];
    let right = i + 1;

    // If the current number doesn't match what should be here...
    if (here !== right) {
      // Get the index of the number that should be here.
      let idx = arr.indexOf(right, i);

      // Swap the two.
      arr[idx] = here;
      arr[i] = right;

      // Increment that a swap happened.
      swaps += 1;
    }
  }
  return swaps;
}

minSwaps([4,3,1,2]); // 3
