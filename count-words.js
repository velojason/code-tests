const countwords = (arr) => {
  let words = {};
  for (let i = 0, len = arr.length; i < len; i++ ) {
    let w = arr[i].split(' ').map(x => {
      if (words[x]) {
        words[x] += 1;
      } else {
        words[x] = 1;
      }
    });
  }
  return Object.entries(words)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([key, value]) => console.log(`${key}: ${value}`));
};

countwords(['hello world', 'world hello', 'hello', 'howdy', 'foo foo bar', 'foo bar', 'foo foo foo']);
