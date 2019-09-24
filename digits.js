// Split a number into an array of its digits.

const digits = (arr) => {
  // Could be:
  return `${arr}`.split('').map(x => parseFloat(x));
  
  // Or:
  return String(arr).split('').map(x => Number(x));
}

// Find the largest sum of two digits in a number.
// TODO: add function.
