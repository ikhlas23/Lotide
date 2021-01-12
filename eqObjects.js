// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// function takes in 2 objects 
// returns true or false based on if its a perfert match 
const eqObjects = function(object1, object2) {
if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
  return false;
}
for (number of Object.keys(object1)) {
  
  if (Array.isArray(object1[number]) && Array.isArray(object2[number])){

    if (!eqArrays(object1[number], object2[number])){
      return false;
    }; 
  }
  if (!object2[number]) {

    return false;
    
  }
}
// console.log(object2);
return true;

};

module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

assertEqual(eqObjects(cd, cd2),false); // => false
