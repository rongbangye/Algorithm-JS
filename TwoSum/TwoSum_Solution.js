function twoNumberSum(array, targetSum) {
  // Write your code here.
  // solution of using two for loop and the run in O of n sequared time
  let arraySize = array.length;
  for (let i in array) {
    let firstNum = array[i];
    for (let j in array) {
      let secondNum = array[j];
      if (i !== j && firstNum + secondNum === targetSum) {
        console.log([firstNum, secondNum]);
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
