const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays'); 

const middle = function(array) {
  let newArr = [];
  if (array.length < 3) {
    return newArr;
  }
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 === 0) {
      // take the (array.length - 1) /2 -->
      let a = (Math.floor((array.length - 1) / 2));
      let b = (array.length / 2);
      newArr = [array[a], array[b]];
      // newArr.push(array[i])
      // } else if (array.length is odd)
    } else {
      let a = (array.length - 1) / 2;
      newArr = [array[a]];
    }
    // push the array[element] into newArr
    // return newArr outside of the element}
  }
  return newArr;
};
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

middle([1, 2, 3, 4, 5]);

module.exports = middle;

