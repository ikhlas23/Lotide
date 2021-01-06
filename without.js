const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  // loop to loop through the elements
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  // at the end of the array, nothing is false
  // return true
};

const assertArraysEqual = function(actual, expected) {
  // return actual === expected;
  // console.assert(actual === expected);
  let same = eqArrays(actual, expected);
  // we are passing the same arguments from assertArraysEqual
  if (same) {
    // taking the elements from the array
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//without function is given an array, removing unwanted elements
// funciton takes in source array and itemsToRemove array
// returnss a new array with only elments that aren't inthe items to Remove Array
const without = (source, itemsToRemove) => {
  let newArr = [];
  // loop through source to see the elements
  for (let i = 0; i < source.length; i++) {
    // if (!itemsToRemove.includes(source element))
    if (!itemsToRemove.includes(source[i])) {
      //push items into new array
      newArr.push(source[i]);

    }
  }
  console.log(newArr);
  return newArr;
  
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]