//write a function that will take a string input and return hash
//example 'a=2, b=5,c=6,d=1'
//output should be { a: 2, b: 5, c: 6, d: 1 }

function hashIt(str) {
  const map = {};
  if (str.length > 0) {
    let items = str.split(', ');
    items.forEach((item) => {
      const [key, value] = item.split('=');
      map[key] = +value;
    });
  }
  return map;
}
console.log(hashIt('a=2, b=5, c=6, d=1'));
