//find the index of the first appearance of one string inside of another string
function indexOf(stringA, stringB) {
  if (stringA.length > stringB) {
    return -1;
  }
  let found = -1;
  for (let i = 0; i <= stringB.length; i++) {
    if (stringB[i] === stringA[0]) {
      found = i;
      for (let j = 0; j < stringA.length; j++) {
        if (stringA[j] !== stringB[i + j]) {
          found = -1;
          break;
        }
        if (j === stringA.length - 1) {
          return found;
        }
      }
    }
  }
  return found;
}

console.log(indexOf('or', 'hello world'));
console.log(indexOf('hello world', 'or'));
console.log(indexOf('howdy', 'hello world'));
console.log(indexOf('oox', 'ooboxoooxo'));
