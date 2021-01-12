// given an array and an object
// it will return an object that contains counts of everything
// the array lists a letter and the object has the letter as pair with either false or true
// you return object that counts the number of trues
// don't return the falses

// allItems: an array of strings that we need to look through
// itemsToCount: an object tellig us what to count


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
      // if this element of allItems exists
      // if results[item] exists or if item === true
        results[item] += 1;
      // creating value pair item: 1 and increment it
      } else {
        results[item] = 1;
      // creating value pair item: 1 no increment added
      }
    }
  }
  return results;
};

module.exports = countOnly;

