// Find the intersection of two arrays.
const findIntersection = (arr1, arr2) => {
  let arr3 = [];
  const dict = arr2.reduce((obj, val) => { return {[val]: true, ...obj} }, {});
  
  arr1.forEach(item => {
    if (dict[item] === true) {
      arr3.push(item);
    }
  });
  
  return arr3;
}

console.log(findIntersection([3,4,1,2], [5,6,1,4])); // [4,1] [1,4]
