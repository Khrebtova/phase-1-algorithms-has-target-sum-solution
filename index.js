
  function hasTargetSum(array, target) {
    // create new object
    const seenNumbers = {};
    //itarate through an array
    //O(n)
    for (const number of array) {
      // calcilate complement number O(n)
      const complement = target - number;
      // look for complement number in new object, if found return TRUE O(n)
      if (seenNumbers[complement]) return true;
      // if not fount add number to new object O(n)
      seenNumbers[number] = true;
    }
    //for number matching complement number is not found return FALSE O(1)
    return false;
  }

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  create and object of seen/already checked elements
  iterate through every element of and array,
  then find a complement numbet for every element to meet the target 
  check if new object has element what matches complement number, if not add element to new object., if yes, return TRUE.
  after all array iteration if new object dont have elements matching taget input, returt FALSE

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
