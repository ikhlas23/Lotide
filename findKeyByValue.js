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


// takes in an object and a value 
// scan the object 
// return the first key which contains the given value 
// if no key with that value is found it it should return undefined 

// give a tv show, return a genre 

const findKeyByValue = function(tvShowsByGenre, tvShowTitle){
  // loop through the object 
  for (let genre in tvShowsByGenre) {
    // we print the key 
    console.log('property key:' , genre);
    // print the value of the
    console.log('value:', tvShowsByGenre[genre]);
    // if statement the value === tvShowTitle
    if (tvShowsByGenre[genre] === tvShowTitle){
      return genre;
      // give us the propertyName of this genre
    }
    
  }

}; 
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// the purpose: your given the value; now send the key 

// rewrite using teh generic 
// tvShowByGenre --> object
// tvShowTitle --> value 
// 