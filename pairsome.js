//PROMPT

//GIVEN AN ARRAY AND A TARGET NUMBER, DETERMIne if 2 numbers in the array add up to the given target number


//EXAMPLES
 
// pairSum([2,3,5,7],8) , true 
// pairSum([1,-3,5,9,0],6), true
// pairSum([0,2,5,3]4), false
console.log(pairSum([1, 1, 2, 3, 4, 5], 7)) 
console.log(pairSum([1, 2, 3, 4, 5], 10))
console.log(pairSum([-1, 2, 3, 4, 7], 6))

/*nested iteration loop option but is slower time and space
    double loop
    conditional to determine if the iterations of each loop do equal to the target
    otherwise exit false
*/

//nest loop option space o(n^2), time o(1)
// function pairSum(array,sum) {
//     // double loop
//     for (let i =0;i<=array.length;i++) {
//         //loop thru the same array but this time the iteration will start outside of the first loop marker
//         for (let j=i+1;j<=array.length;j++) {
//         //add both iterations
//         if (array[i] +array[j] ===sum) {
//             return true
//         }
//         }
//     }
//     //goes thru whole array and nothing adds to sum
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
  
//   //compare subtotal to sum target
//   if (subtotal === sum) {
//     return true
//     //if the total does not equal to sum, move the markers
  
//   } else if (subtotal <sum) {
//     //increment left marker
//     left ++
//   } else if(subtotal >sum) {
//     //decrement left marker
//     right --
//   }
//   }
//   return false
//   }

//key/value mapping method time O(n) space O(1)
function pairSum(array,sum) {
//set object for key/value pair
    let map ={}
    //iterate thru array
    for (let i=0; i<=array.length;i++) {
    // y = sum -x   y is target total, x represents the iteration
    //thus if x + y equals the sum, returns true
    const target = sum-array[i] 
    // if exists in map just return true
        if (map[array[i]]) {
        return true
        } else {
        //if does not exist set new key value pair 
        map[target] = true
        }
    }
    //if flowed thru entire array and no matches, exit false
    return false
}


