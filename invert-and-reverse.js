// Implement a function that will flip and mirror an image,
// represented by an array of bits.
const flipFlop = (arr) => {
  const out = arr.map(item => {
    item.reverse();
    const inv = item.map(i => i === 0 ? 1 : 0);
    return inv;
  });
  
  return out;
}

flipFlop([[1, 1, 0],[1, 0, 1],[0, 0, 0]]); // [[1, 0, 0], [0, 1, 0], [1, 1, 1]]

// Shorter:
const flipAndInvertImage = function(arr) {
    return arr.map(image => image.reverse().map( b => b === 0 ? 1 : 0));
};
