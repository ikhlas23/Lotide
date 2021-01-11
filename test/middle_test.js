// const eqArray = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle.js');


// middle(); // => [];
// middle([1, 2, 3, 4, 5]); // => [3];
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

const assert = require('chai').assert;
// 
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it ("return [3] for [1, 2, 3, 4, 5] ", () => {

    const result = middle([1, 2, 3, 4, 5]);
    console.log('Middle result:', result);
    assert.deepEqual(result, [3]);
    
  }); 
  it ("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const result = middle([1, 2, 3, 4, 5, 6]);  
    console.log('Middle result: ', result);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

  });
});
