/*
 *
 * Given a 6x6 (2d) array of numbers, calculate the sums of
 * all the hourglass shapes contained within the array and
 * return the largest sum.
 *
 */
const hourglassSum = (arr) => {
  // Use an array if we want to store all values...
  let hourglasses = [];
  // Otherwise, initialize a placeholder of the largest sum.
  // let hourglass = Number.NEGATIVE_INFINITY;

  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let glass = 0;
      glass += arr[row][col];
      glass += arr[row][col + 1];
      glass += arr[row][col + 2];
      glass += arr[row + 1][col + 1];
      glass += arr[row + 2][col];
      glass += arr[row + 2][col + 1];
      glass += arr[row + 2][col + 2];

      hourglasses.push(glass);

      // hourglass = hourglass < glass ? glass : hourglass;
    }
  }

  return hourglasses.length > 0 ? Math.max(...hourglasses) : 0;
  // return hourglass;
}

hourglassSum([ [ 1, 1, 1, 0, 0, 0 ],[ 0, 1, 0, 0, 0, 0 ],[ 1, 1, 1, 0, 0, 0 ],[ 0, 0, 2, 4, 4, 0 ],[ 0, 0, 0, 2, 0, 0 ],[ 0, 0, 1, 2, 4, 0 ] ]); // 19
hourglassSum([ [ 1, 1, 1, 0, 0, 0 ],[ 0, 1, 0, 0, 0, 0 ],[ 1, 1, 1, 0, 0, 0 ],[ 0, 9, 2, -4, -4, 0 ],[ 0, 0, 0, -2, 0, 0 ],[ 0, 0, -1, -2, -4, 0 ] ]); // 13
hourglassSum([ [ -9, -9, -9, 1, 1, 1 ],[ 0, -9, 0, 4, 3, 2 ],[ -9, -9, -9, 1, 2, 3 ],[ 0, 0, 8, 6, 6, 0 ],[ 0, 0, 0, -2, 0, 0 ],[ 0, 0, 1, 2, 4, 0 ] ]); // 28
