const assertEqual = function(actual, expected) {
  // return actual === expected;
  // console.assert(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
if (arr1.length !== arr2.length) return false; 
  let result = []; 
  // loop to loop through the elements 
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    result.push(false); 
    // if arr[i] element doesn't equal to arr2[i] --> return false
  }
  result.push(true);
  // return true
  // otherwise return true 
}
// const hasFalseValue = result.includes(false); 
// checks to see if there is a false value in the result array 
// will return true if tehere is a false result 
// stores it in the variable 

const filteredResult = result.filter(boolean => boolean === false); 
// checks to see if there is fales values in result 
return filteredResult.length === 0; 


// return !hasFalseValue;
// the negative of hasFalseValue is the proper eqArray 
// eqArray is asking if any items are not equivalent 
// hasFalseValue is aksing if there is a false result 
// these are opposite objectives 
// inorder to make them equal you have to reverse hasFalseValue

// if there is a false in array
// result.includes makes it true
}
eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// if arguments for eqArray are equal --> true 
// then compares true to true 
// this will evaluate to true 

eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);