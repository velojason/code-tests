const exists = (haystack, needle) => {
  return haystack.some(h => {
    let len = h.length == needle.length;
    let ind = h.every((value, index) => needle[index] === value);
    return len && ind;
  });
};
/*
 * Given a 2-dimensional array of bits, where 1 is an
 * obstruction and 0 is a usable space, determine if there
 * is an unobstructed path from top to bottom. Valid moves
 * may only be up, down, left, or right and NOT diagonal.
 */

const flow = (pot) => {
  const potlen = pot.length;
  if (potlen === 1) {
    return pot[0] === 0 || pot[0][0] === 0;
  }

  const queue = pot[0].reduce((starts, curr, idx) => {
    if (curr === 0) {
      return [...starts, [0, idx]];
    }
    return starts;
  }, []);

  let flow = false;
  let visited = {};

  while (queue.length > 0) {
    let here = queue.shift();

    if (visited[here] === 1) {
      continue;
    }
    visited[here] = 1;

    if (here[0] === (potlen - 1)) {
      console.log('bingo!');
      flow = true;
      break;
    }

    let locations = [
      [here[0], (here[1] + 1)],
      [here[0], (here[1] - 1)],
      [(here[0] + 1), here[1]],
      [(here[0] - 1), here[1]]
    ];

    locations.forEach(location => {
      if (pot[location[0]] && pot[location[0]][location[1]] === 0) {
        queue.push(location);
      }
    });
  }

  return flow;
};

flow([0]);
flow([[0],[0]])
flow([[1,1],[1,0]]);
flow([[1,0], [1,0]]);
flow([[1,0,0,1,1],[1,1,0,1,1],[1,0,0,1,1],[1,0,1,1,0],[1,0,0,0,0]]);
flow([[1,0,0,1,1],[1,1,0,1,1],[1,0,1,1,1],[1,0,1,1,0],[1,1,0,0,0]]);
