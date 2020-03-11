const bribes = (q) => {
  let bribe = 0;

  for (let i = 0, len = q.length; i < len; i++) {

    let pos = q[i];
    let person = i + 1;

    if (pos - person > 2) {
      return 'Too chaotic';
    }
    for (let j = pos - 2; j < i; j++) {
      if (q[j] > pos) {
        bribe += 1;
      }
    }
  }

  return bribe;
}

bribes([ 2, 1, 5, 3, 4 ]); // 3
bribes([ 2, 5, 1, 3, 4 ]); // Too chaotic
bribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7
