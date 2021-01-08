/* map function takes in 2 arguments
* 1. an array to map
* 2. a callback function
* map function returns new array based on the results of the callback function */

const words = ["ground", "control", "to", "major", "tom"];

// writing out the function 
function map (array, callBack) {
  let results = []; 
  // console.log('array:', array); 
  // console.log('callback:', callback);
  // this prints out the array and the callback funciton below 
  
  for (let item of array) {
    // console.log('item BEFORE:', item); 
    // console.log('item After:', callBack(item))
    results.push(callBack(item));
    // calls the call back function
    // call back function returns the first letter of each word 
  }

  return results; 
}
const results1 = map(words, word => word[0]);
// find teh first letter of eac
// using the function in this line


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
    console.log(actual ,expected);
    // shows you what actual and expected 
    if (eqArrays(actual, expected)) {
      // passing the values from actual and expected 
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

console.log(results1); 

assertArraysEqual(results1, ["g", "c", "t", "m", "t"])