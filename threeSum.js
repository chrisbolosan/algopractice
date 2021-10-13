//given an array of integer, determine if 3 integers add up to the sum.  Output is the numbers in the array if adds up to it. If does not, return nothing.

// function arrayThreeSum(array, sum) {
// for (let i=0;i<=array.length;i++) {
//   for (let j=i+1;j<=array.length;j++) {
//     for (let k = j+1;j<=array.length;k++) {
//       if ( array[i]+array[j]+array[k]=== sum) {
//         return [array[i],array[j],array[k]]
//       }
//     }
//   }
// }
// return []
// }

//nested array use previous problem such as pairsum
//   function arrayThreeSum(array, sum) {
//     array = array.sort(function(a, b) { return a - b })
//     // console.log(array)
//     const results = []
//     for (let i = 0; i <= array.length - 2; i++) {
//       let leftMarker = i + 1
//       let rightMarker = array.length - 1
//       while (leftMarker < rightMarker) {
//         let currentCount = array[i] + array[leftMarker] + array[rightMarker]
//         //  console.log('currentCount',currentCount)
//         if (currentCount === sum) {
//           results.push([array[i], array[leftMarker], array[rightMarker]])
//           leftMarker++
//           rightMarker--
//         } else if (currentCount < sum) {
//           leftMarker++
//         } else if (currentCount > sum) {
//           rightMarker--
//         }
//       }
//     }
//     return results
//   }
function arrayThreeSum(array, sum) {
  let results = [];
  for (let i = 0; i < array.length - 1; i++) {
    let map = {};
    const target = sum - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (map[target - array[j]]) {
        results.push([array[i], target - array[j], array[j]]);
      } else {
        map[array[j]] = true;
      }
    }
  }
  return results;
}

console.log('testCase1', arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log('testCase2', arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35));
console.log('testCase3', arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10));
