//prompt implement a function that takes an array that contains names of people that like something.
/* examples 
[]                                -->  "no one likes this"
["Michael"]                         -->  "Peter likes this"
["Manny", "Alfred"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alfred", "Michael", "Manny", "Max"]  -->  "Alex, Jacob and 2 others like this"*/
// function likes(names){
//     // namae nashi
//     if (names.length===0) {
//         return 'No one likes this'
//     //tan itsu no namae
//     } if (names.length ===1) {
//         return `${names[0]} likes this`
//     //to de ketsugo sa reta 2 tsu no namae
//     } if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this}`
//     //to de ketsugo sa reta 3 tsu no namae
//     } if (names.length ===3) {
//         return `${names[0]}, ${names[1]}, and ${names[2]} like this`
//     //saisho no 2tsu ga ando to number de tsudzura rete iru 4 tsu no namae
//     } if (names.length >3) {
//         return `${names[0]}, ${names[1]}, and $({names.length}-2) like this`
// }

//case method much cleaner
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'No one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this}`;
      break;
    case 3:
      return `${names[0]}, ${names[1]}, and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]}, and $({names.length}-2) like this`;
      break;
  }
}
console.log(likes([]));
console.log(likes(['Michael']));
console.log(likes(['Manny', 'Alfred']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alfred', 'Michael', 'Manny', 'Max']));
