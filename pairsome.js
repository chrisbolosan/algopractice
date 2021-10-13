//PROMPT

//GIVEN AN ARRAY AND A TARGET NUMBER, DETERMIne if 2 numbers in the array add up to the given target number

//EXAMPLES

// pairSum([2,3,5,7],8) , true
// pairSum([1,-3,5,9,0],6), true
// pairSum([0,2,5,3]4), false
console.log(pairSum([1, 1, 2, 3, 4, 5], 7));
console.log(pairSum([1, 2, 3, 4, 5], 10));
console.log(pairSum([-1, 2, 3, 4, 7], 6));

// function pairSum(array,sum) {
//     for (let i =0;i<=array.length;i++) {
//         //loop thru the same array but this time the iteration will start outside of the first loop marker
//         for (let j=i+1;j<=array.length;j++) {
//         //add both iterations
//         if (array[i] +array[j] ===sum) {
//             return true
//         }
//         }
//     }
//     return false
//   }

//Marker method slightly faster than nested method
// function pairSum(array,sum) {
//     //using markers
//   let left = 0
//   //end of array
//   let right = array.length-1
//   //control flow
//   while (left<right) {
//     //marker subtotal
//     const subtotal = array[left] +array[right]

//   if (subtotal === sum) {
//     return true
//   } else if (subtotal <sum) {
//     left ++
//   } else if(subtotal >sum) {
//     right --
//   }
//   }
//   return false
//   }

function pairSum(array, sum) {
  let map = {};
  for (let i = 0; i <= array.length; i++) {
    const target = sum - array[i];
    if (map[array[i]]) {
      return true;
    } else {
      map[target] = true;
    }
  }
  return false;
}
