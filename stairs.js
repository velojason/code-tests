/*** 
 * You are climbing a stair case with n steps.
 * Each time you can climb 1, 2, or 3 steps. 
 * How many distinct ways can you climb to the top?
 */
 
const stairs = (steps) => {
  let memo = [...[], ...Array(steps - 1)].map(i => 0);
  memo[0] = 1;

  for (let i = 1; i < steps + 1; i++) {
    memo[i] = 0;
    for (let j = 1; j <= 3 && j <= i; j++) {
      memo[i] += memo[(i - j)];
    }
  }
  
  return memo[steps];
}

stairs(3);

// Display an ascii staircase with n steps.

const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    let blanks = [ ...[], ...Array(n - i)].map(x => ' ');
    let hashes = [ ...[], ...Array(n - (n - i))].map(x => '#');
    console.log([
      ...blanks,
      ...hashes
    ].join(''));
  }
}

staircase(3);
//   #
//  ##
// ###
