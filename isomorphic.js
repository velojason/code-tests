const isomorphic = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let map = {};

  for (let i = 0, len = str1.length; i < len; i++) {
    if (!map[str1[i]]) {
      map[str1[i]] = str2[i];
      continue;
    }

    if (map[str1[i]] !== str2[i]) {
      return false;
    }

    for (let prop in map) { 
      if (
        map[prop] === str2[i]
        && str1[i] !== prop
      ) {
        return false;
      }
    }
  }

  return true;
}

isomorphic('yNaEnsMQdHwmxhYj', 'yNaEnsMQdHwmxhYj');
isomorphic('cbatcc', 'tgcatt');
