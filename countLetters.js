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

// function takes in a string and return a count of each letter in that sentence
const countLetters = function(word) {
  const results = {};
  // for loop to access each word
  for (let letters of word) {
    // print the letters of each word
    // console.log(letters);
    const lowercaseLetters = letters.toLowerCase();
    // changed letters to all lowercase so there are counted as one
    if (lowercaseLetters !== " ") {
      // this will skip the space
      if (results[lowercaseLetters]) {
        results[lowercaseLetters] += 1;
      // if the letter exists, then it will increment
      } else {
        results[lowercaseLetters] = 1;
      // in the first iteration it will default to falsy
      // this will make the first letter a key and its occurence 1
      }
    }
    
    // set the letters to be the key of the results
    

  }
  // if statement to see if that word exists
  //

  return results;
};


