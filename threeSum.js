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
//   function arrayThreeSum(array, sum) {
//     //Kono mesoddo de hanpuku o kino sa seru ni wa, saisho ni hairetsu o narabe kaete, makka no seigyo furou o kettei dekiru yo ni suru hitsuyou ga arimasu
//     array = array.sort(function(a, b) { return a - b })
//     // console.log(array)
//     //soryoushon no kanoosei 
//     const results = []
//     //hairetsu o ruupu suru
//     for (let i = 0; i <= array.length - 2; i++) {
//       //hairetsu o tsuiseki suru tame no makkaa o settei suru
//       //inisharu no sotogawa no hidari makkaa
//       let leftMarker = i + 1
//       //migi no maakkaa wa hairetsu no owari ni narimasu
//       let rightMarker = array.length - 1
//       //saisho no hanpuku ruupu to 2 tsu no maakka o goukei suru atai o settei shimasu
//       //  console.log('saisho ni imu',array[i])
//       //  console.log('imusekando',array[leftMarker])
//       //  console.log('saigo ni', array[rightMarker])
//       //seigyo furomaakkaa
//       while (leftMarker < rightMarker) {
//         let currentCount = array[i] + array[leftMarker] + array[rightMarker]
//         //  console.log('currentCount',currentCount)
//         //conditionals evaluating the current total value against the sum
//         if (currentCount === sum) {
//           //gokei ni taishite genzai no gokei-chi o hyoka suru joken
//           //kanousei o kekka hairetsu ni pusshu shimasu
//           results.push([array[i], array[leftMarker], array[rightMarker]])
//           //Hairetsu nai no ta no subette no kanousei o mitsukeru tame ni ugoki tsudzukemasu
//           leftMarker++
//           rightMarker--
//           //genzai no atai ga chīsai baai wa, makkaa o hidari ni idou shimasu
//         } else if (currentCount < sum) {
//           //hidari ni inkurimento
//           leftMarker++
//           //Genzai no atai ga okkii baai wa migi ni idou shimasu
//         } else if (currentCount > sum) {
//           rightMarker--
//         }
//       }
//     }
//     return results
//   }
    //Mappingu hohou, hairetsu wa sooto sa rete imasen
function arrayThreeSum(array, sum) { 
    //modori-chi no atai o pusshu suru yoo ni sutoreji o settei shimasu
        let results=[]
    //shoki ruupu o settei suru
        for (let i=0;i<array.length-1;i++) {
    //ki to atai no pea o kakunou suru tame no mappu o settei suru
        let map={};
        // y= gokei wa tagetto no goukei, x wa hanpuku o arawashimasu
        const target = sum - array[i]
    //moichido ruupu suru 
        for (let j=i +1;j<array.length;j++) {
    //mappi ni sonzai suru ka doo ka o kakunin shimasu
            if (map[target-array[j]]) {
    //moshi sonara, chi o pusshu shimasu
            results.push([array[i],target-array[j],array[j]])
            } else {
    //sodenai baai wa, chi o settei shimasu
            map[array[j]] = true
            }
        }
    }
    //modori chi
    return results
}
    
  console.log('testCase1',arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)) 
  console.log('testCase2',arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35))   
  console.log('testCase3',arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)) 
