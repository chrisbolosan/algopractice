//given an array of integer, determine if 3 integers add up to the sum.  Output is the numbers in the array if adds up to it. If does not, return nothing. 

// function arrayThreeSum(array, sum) {
  // orokana mesoddo ga oso sugiru mugen ruupu ga teigi sa rete imasen
  
  // for (let i=0;i<=array.length;i++) {
  //   //nested loops to go thru array
  //   for (let j=i+1;j<=array.length;j++) {
  //     for (let k = j+1;j<=array.length;k++) {
  //       //determine if iterations add up to the target sum
  //       if ( array[i]+array[j]+array[k]=== sum) {
  //         //return numbers in the array
  //         return [array[i],array[j],array[k]]

  //       }
  //     }
  //   }
  // }
  // //if nothing matches up, return an empty array to represent nothing
  // return []
// }

  //nested array use previous problem such as pairsum
  function arrayThreeSum(array, sum) {
    //to make the iterations work with this method we must first sort the array to help us determine control flow of markers
    array = array.sort(function(a, b) { return a - b })
    // console.log(array)
    //solution possibilities 
    const results = []
    //loop thru with 1 iteration
    for (let i = 0; i <= array.length - 2; i++) {
      //other 2 we can set markers 
      //left marker outside initial
      let leftMarker = i + 1
      //right marker will be end of array
      let rightMarker = array.length - 1
      //set a value that totals the first iterative loop plus the 2 markers
      //  console.log('imfirst',array[i])
      //  console.log('imsecond',array[leftMarker])
      //  console.log('imlast', array[rightMarker])
      //control flow markers
      while (leftMarker < rightMarker) {
        let currentCount = array[i] + array[leftMarker] + array[rightMarker]
        //  console.log('currentCount',currentCount)
        //conditionals evaluating the current total value against the sum
        if (currentCount === sum) {
          //true returns array and both markers will keep moving to finish the marker control flow and check more options
          //push possibilites into results array
          results.push([array[i], array[leftMarker], array[rightMarker]])
          //keep moving to find all other possibilities in the array
          leftMarker++
          rightMarker--
          //if current value is smaller move left marker
        } else if (currentCount < sum) {
          //increment left 
          leftMarker++
          //if current value is larger move right value
        } else if (currentCount > sum) {
          rightMarker--
        }
      }
    }
    return results
  }
  
  console.log('testCase1',arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)) 
  console.log('testCase2',arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35))   
  console.log('testCase3',arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)) 
