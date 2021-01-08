// function takes 2 parameters 
// array to change 
// teh callback 


// this function will return a slice of the array with elements taken from the beginning 
// callback will only be given one value, the item in the array  

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


// const takeUntil = function(array, callback) {
//   // ...
//   // variable results set to empty array 
//   let results = [];
//   // loop through the array using for of 
//   for (item of array) {
//     // console.log('Item Before: ', array);
//     results.push(callback(item)); 
//   }
//   // call our callback function here 
//   // then push the results into the results variable 

//   return results; 
// }
}

const takeUntil = function(array, callBack) {
  let results = [];
  for (item of array) {
    // console.log(item);
    if (!callBack(item)) {
      results.push(item);
    } else {
      return results;
    }
  } 
}



  // callback function will do a slice 

// ACTUAL
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


// EXPECTED OUTPUT
[ 1, 2, 5, 7, 2 ];
// ---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

const result1 = takeUntil(data1, x => x < 0); 
// x is the parameter and item is the argumetn that is being put through
console.log(result1);

const result2 = takeUntil(data2, x => x === ','); 
console.log(result2);