// takes in an object and a callback
// scan the object
// return teh first kehy for whcih the callback returns a truthy value
// if no key is found then return undefined

// this function will return a slice of the array with elements taken from the beginning
// callback will only be given one value, the item in the array

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callBack) {
  let result;
  for (let star in object) {
    if (callBack(object[star])) {
      // results.push(star);
      result = star;
      break;
    }
  }
  return result;
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


