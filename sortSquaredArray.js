//Create a function that takes in an array of sorted integers, and the output will be same length of the array but squared and sorted.
function sortedSquaredArray(array) {
  let squared = [];
  for (let i = 0; i <= array.length; i++) {
    squared.push(Math.pow(array[i], 2));
  }
  return squared.sort((a, b) => a - b);
}
//test cases [2,5,7,8,10] => [4,25,49,64,100]
