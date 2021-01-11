const assertEqual = require('./assertEqual');


// return everythign except the first element
const tail = function(arg1) {
  return arg1.slice(1);
};

module.exports = tail;

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!