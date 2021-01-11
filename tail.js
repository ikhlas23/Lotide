const assertEqual = require('./assertEqual');


// return everythign except the first element
const tail = function(arg1) {
  return arg1.slice(1);
};

// console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = tail;

// Test Case: Check the original array
