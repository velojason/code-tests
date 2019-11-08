// One Dimensional Kingdoms -
// https://www.codechef.com/problems/ONEKING

const bombs = (num, arr) => {
  let min = Number.NEGATIVE_INFINITY;
  let count = 0;
  
  for (let i = 0; i < num; i++) {
    arr[i].sort((a, b) => a - b);
    if (min < arr[i][0]) {
      min = arr[i][1];
      count += 1;
    }
  }
  
  return count;
}

bombs(3, [[1, 3], [2, 5], [6, 9]]);
