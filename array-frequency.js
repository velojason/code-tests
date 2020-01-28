const least = (numbers) => {
  const freq = numbers.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let min = Object.keys(freq)[0];
  let rarest = [];

  for (let key in freq) {
    if (freq[key] < freq[min]) {
      min = key;
      rarest = [key];
    } else if (freq[min] == freq[key]) {
      rarest.push(key);
    }
  }

  return rarest.sort();
}

least([-5,1,1,2,2,2,3,3,3,5]);
