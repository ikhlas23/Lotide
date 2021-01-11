const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; 
    let result = []; 
    // loop to loop through the elements 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
     return false;
    } 
  }
  return true; 
  }

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// function takes in 2 objects 
// returns true or false based on if its a perfert match 
const eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
    return false;
  }
  for (number of Object.keys(object1)) {
    
    if (Array.isArray(object1[number]) && Array.isArray(object2[number])){
  
      if (!eqArrays(object1[number], object2[number])){
        return false;
      }; 
    }
    if (!object2[number]) {
  
      return false;
      
    }
  }
  // console.log(object2);
  return true;
  
  };


// TESTING A FUNCTION THAT RETURNS OBJECTS 
const assertObjectsEqual = function(actual, expected) {
  // when we test without the above we get [object Object]
  // use utl librarys inspect funciton so we import the library so that the functino can use it
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
// assertEqual(eqObjects(ab, ba), true); 

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false); 

const ab = { 
  a: "1", 
  b: 2 
};

const ba = { 
  b: 2, 
  a: "1" };

  const results1 = eqObjects(ab, ba);
  console.log(true);
  assertObjectsEqual(results1, true); // => true



// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

