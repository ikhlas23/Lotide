const eqArrays = (arr1, arr2) => {
if (arr1.length !== arr2.length) return false; 
  let result = []; 
  // loop to loop through the elements 
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
   return false
  } 
}
return true; 
}

// if arguments for eqArray are equal --> true 
// then compares true to true 
// this will evaluate to true 

module.exports = eqArrays;


