function twoNumberSum(array, targetSum) {
  // Write your code here.
  // use hash table and iterate array with a for lop
  let numObject = {};
  for (let num in array) {
    // create an empty object

    // let num2 = target - num1 (num2 is the number we want to look up at the object)
    const otherNum = targetSum - array[num];

    if (otherNum in numObject) {
      console.log([otherNum, array[num]]);
      return [otherNum, array[num]];
    } else {
      numObject[array[num]] = array[num];
    }
  }
  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
