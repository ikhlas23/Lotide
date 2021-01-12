const countOnly = require('../countOnly'); 
const assertEqual = require('../assertEqual'); 

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


