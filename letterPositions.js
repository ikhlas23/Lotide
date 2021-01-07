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
  console.log(actual ,expected);
  // shows you what actual and expected
  if (eqArrays(actual, expected)) {
    // passing the values from actual and expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// returns all the indexes of the letters in the string
/*
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    let letter = sentence[i];
    let array = [];
    let finalResult;
    if (results[letter]) {
    
      // add the index/position of the letter to key
      finalResult = results[letter];
      finalResult.push(i);
      // finalResult.push(index);
      // console.log(results[letter])
      
      // adding one to the results letter key
    } else {
      array.push(i);
      results[letter] = array;
      // console.log('results: ', results[letter]);
    }

  }

  // for (letter of sentence) {
    
  //   let index = sentence.indexOf(letter);
  //   console.log(index);
    

  // }
  console.log(results);
  return results;
};

/* DEFINE OBJECT STRUCTURE TO RETURN
 */
letterPositions('hello');
assertArraysEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4]});