/***
 * Implement an abbreviate() function.
 * It should abbreviate words in the following format:
 *
 * "accessibility" => "a11y"
 * "internationalization" => "i18n"
 * 
 * It should also handle words:
 * "keep commerce human" => "k2p c6e h3n"
 */
const abbreviate = (str) => {
  if (typeof str === 'undefined') {
    return '';
  }

  if (str.length < 4) {
    return str;
  }

  const newStr = str.split(' ');
  if (newStr.length !== 1) {
    return newStr.map(word => abbreviate(word)).join(' ');
  }

  const arr = str.split('');
  const first = arr.shift();
  const last = arr.pop();
  const length = arr.length;

  const abbrev = `${first}${length}${last}`;
  return abbrev;
}

abbreviate('internationalization'); // i18n
