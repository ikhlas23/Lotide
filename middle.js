

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  // loop to loop through the elements
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // return actual === expected;
  // console.assert(actual === expected);
  console.log(actual ,expected);
  // shows you what actual and expected
  if (eqArrays(actual, expected)) {
    // passing the values from actual and expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// middle function takes an array and only returns the middle elements of the array
// the length of the returned elements could vary
// if the length is 1 or 2 it should return an empty array
// for arrays with an odd number of elements it should return an array with 1 number
// for arrays with an even number of elements it should return an array with 2 numbers
const middle = function(array) {
  let newArr = [];
  // get the length of the array
  // if (array.length < 3)
  if (array.length < 3) {
    // return newArr
    return newArr;
  }
  // for go through each element of array
  for (let i = 0; i < array.length; i++) {
  // console.log(array[i]);
  // if (array.length is even) {
    if (array.length % 2 === 0) {
      // take the (array.length - 1) /2 -->
      let a = (Math.floor((array.length - 1) / 2) - 1);
      // the math is array.length - 1 --> gives index of last element 
      // divide the index by 2 which gives us the half way poitn 
      // subtract one to get the number before it 
      // round it up to access index of the first middle number 
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
  console.log(newArr);
};
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

module.exports = middle;

