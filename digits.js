// Split a number into an array of its digits.
const digits = (arr) => {
  // Could be:
  return `${arr}`.split('').map(x => parseFloat(x));
  
  // Or:
  return String(arr).split('').map(x => Number(x));
}

// Find the largest sum elements in an array.
const subarray = (arr) => {
  let accumulator = 0;
  let largest = Number.NEGATIVE_INFINITY;
  
  for (let i = 0, l = arr.length; i < l; i++) {
    accumulator = Math.max(arr[i], arr[i] + accumulator);
    largest = Math.max(accumulator, largest);
  }
  return largest;
}

subarray([-2, 1, -3, 4, 3, -2, 1, -5, 4]); // 7
