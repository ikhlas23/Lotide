// takes in an object and a callback
// scan the object
// return teh first kehy for whcih the callback returns a truthy value
// if no key is found then return undefined

// this function will return a slice of the array with elements taken from the beginning
// callback will only be given one value, the item in the array

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

const findKey = function(object, callBack) {
  let results;
  // loop through the object
  for (const star in object) {
    // console.log('star: ', star);
    // console.log('value: ', object[star]['stars']);
    // for (value in stars)
    if (callBack(object[star])) {
      // console.log('Inside if statement:');
      // console.log('star: ', star);
      // console.log(object[star]['stars']);
      // push the corresponsing star to the results array
      // results.push(star);
      results = star;
      break;
    }
    // return object.key that applies
  
  }
  // console.log(results);
  // return results;
  return results;
};
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

// const results2 = findKey({
//   "Blue Hill": { stars: 8 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 5 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 1 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "[]"


assertEqual(results1, 'noma');