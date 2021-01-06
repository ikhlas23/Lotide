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

// given an array and an object
// it will return an object that contains counts of everything
// the array lists a letter and the object has the letter as pair with either false or true
// you return object that counts the number of trues
// don't return the falses

// allItems: an array of strings that we need to look through
// itemsToCount: an object tellig us what to count

// const countOnly = function(allItems, itemsToCount) {
//   let result = {};
//   // loop through the itemsToCount
//   for (let key of allItems) {
//     if (itemsToCount[key]) {
//       // if itemsToCount[a] (which is the object) is equal true
//       if (result[key]){
//         // checking to if result[key] already exists
//         result[key] += 1;
//         // if it does exist, we're adding +1
//       } else {
//         result[key] = 1;
//         // if it doesn't exist we're making it equal to one
//       }
//     }
//     // console.log('keys:', keys);
//     // console.log('values:', itemsToCount[keys]);
//   //bc its an object use for in
  
// }
// return result;

// }

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
      // if this element of allItems exists
      // if results[item] exists or if item === true
        results[item] += 1;
      // creating value pair item: 1 and increment it
      } else {
        results[item] = 1;
      // creating value pair item: 1 no increment added
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);

assertEqual(result1["Jason"], 1);
// jason shows up once on the list
assertEqual(result1["Karima"], undefined);
// on the first test it was undefined and this is because the property didn't exist and your comparing undefined to undefined
assertEqual(result1["Fang"], 2);
// fang shows up twice on the list
assertEqual(result1["Agouhanna"], undefined);
// Agouhanna is never on the list
// on the first test it was undefined and this is because the property didn't exist and your comparing undefined to undefined



/* assertEqual can only compare primitve values
that's why we can't compare the array and teh object directluy*/