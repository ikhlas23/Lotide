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
/* 2 objects are equal:  
* when they have the same number of keys 
* the value in each key in one object is the same as the value of each key in the other object*/
//
if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
  /* object.keys returns an array of the keys 
  * we use the length of this to determine if these 2 objects have the same number of key value pairs
  * if they don't get rid of it */
  return false; 
  
}
for (number of Object.keys(object1)) {
  // looping through object1 keys 
  // console.log(number); 
  // // this object1 keys 
  
  // console.log(object2[number]); 
  // // this object2 values 
  // console.log(object1[number]);
  // console.log(object2[number]);
  
  if (Array.isArray(object1[number]) && Array.isArray(object2[number])){

    // checks to see if object1 value is an array
    // check to see if object2 value is an array
    if (!eqArrays(object1[number], object2[number])){
      return false;
    }; 

  }
  if (!object2[number]) {
    /* it first passes the key 'a' to see if it exists in the second object 
   */  
    // console.log('inside if statement');
    // console.log(object2[number]); 

    // console.log(number); 
    return false;
    
/* the purpose of the for loop is to loop through the first objects keys 
* then check to see if object2's values exist with the object1's keys  
* if they don't return false 
*/ 

  }
}
// console.log(object2);
return true;

};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
// assertEqual(eqObjects(ab, ba), true); 

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

assertEqual(eqObjects(cd, cd2),false); // => false

