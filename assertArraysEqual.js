const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; 
    // loop to loop through the elements 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
     return false
    } 
  }
  return true; 
  // at the end of the array, nothing is false 
  // return true 
  }

  const assertArraysEqual = function(actual, expected) {
    // return actual === expected;
    // console.assert(actual === expected);
    if (eqArrays(actual, expected)) {
      // taking the elements from the array 
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  assertArraysEqual([1,2,3], [1,2,3]);
  assertArraysEqual([1,2,3], [1,2,2]);
