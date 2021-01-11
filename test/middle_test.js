// const eqArray = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle.js');


middle([1, 2]); // => [];
middle([1, 2, 3, 4, 5]); // => [3];
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]