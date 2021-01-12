const assertEqual = require('../assertEqual'); 
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

assertEqual(eqObjects(cd, cd2),false); // => false