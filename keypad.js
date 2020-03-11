/*
 * Given a string, figure out the sequence of inputs
 * needed to move along the keypad in order to print
 * out the string.
 *
 */

const KEYPAD = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p'],
  ['q', 'r', 's', 't'],
  ['u', 'v', 'w', 'x'],
  ['y', 'z', ' '],
];

const getSequence = (str) => {
  const strArray = str.split('');
  let pos = [0,0];
  let directions = [];

  strArray.forEach(s => {
    for (let i = 0, len = KEYPAD.length; i < len; i++) {
      let idx = KEYPAD[i].indexOf(s);
      if (idx !== -1) {
        let x = i - pos[0];
        let y = idx - pos[1];
        let xDir = x > 0 ? 'D' : 'U';
        let yDir = y > 0 ? 'R' : 'L';
        let vert = Math.abs(x);
        let horz = Math.abs(y);
        let move = [].concat(
          Array(vert).fill(xDir),
          Array(horz).fill(yDir),
          'ENTER'
        );
        directions.push(...move);
        pos = [i, idx];
        return;
      }
    }
  });
  return directions.join(',');

}


getSequence('hi');
// 'D,R,R,R,ENTER,D,L,L,L,ENTER'
getSequence('iheart');
// 'D,D,ENTER,U,R,R,R,ENTER,L,L,L,ENTER,U,ENTER,D,D,D,D,R,ENTER,R,R,ENTER'
