// Split a number into an array of its digits.
const digits = (arr) => {
  // Could be:
  return `${arr}`.split('').map(x => parseFloat(x));

  // Or:
  return String(arr).split('').map(x => Number(x));
}

digits(1234); // [1, 2, 3, 4]

// Find the largest sum of n adjacent elements in an array.
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

// Find the largest sum of two adjacent elements in an array.
const twos = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;

  for (let i = 0, l = arr.length - 1; i < l; i++) {
    let current = arr[i] + arr[i + 1];
    largest = Math.max(current, largest);
  }
  return largest;
}

twos([-2, 1,-3, 4, 3,-2, 1,-5, 4, 4]); // 8
