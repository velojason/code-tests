// Find the intersection of two arrays.
const findIntersection = (arr1, arr2) => {
  const dict = arr2.reduce((obj, val) => { return {[val]: true, ...obj} }, {});
  
  const arr3 = arr1.reduce((arr, item) => {
    if (dict[item] === true) {
      return [...arr, item];
    }
    return arr;
  }, []);
  
  return arr3;
}

findIntersection([3,4,1,2], [5,6,1,4]); // [4,1]
