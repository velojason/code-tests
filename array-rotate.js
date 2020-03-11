const rotateLeft = (a, d) => {
  for (let i = 0; i < d; i++) {
    let shift = a.shift();
    a.push(shift);
  }
  return a;
}


// One liner:
const rotateLeft2 = (a, d) => {
  return [].concat(a.splice(d), a);
}

rotateLeft([ 1, 2, 3, 4, 5 ], 4);
rotateLeft([ 41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51 ], 10);
rotateLeft([ 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97 ], 13);
