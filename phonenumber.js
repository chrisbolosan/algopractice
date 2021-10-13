//prompt, create a function that takes an array of 10 numbers and returns as a phone number string
//return example [1234567890] => (123) 456-7890
function generatePhoneNumber(numbers) {
  let phoneFormat = '(xxx) xxx-xxxx';
  for (let i = 0; i <= numbers.length; i++) {
    phoneFormat = phoneFormat.replace('x', numbers[i]);
  }
  return phoneFormat;
}
console.log(phoneFormat[(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)]);
console.log(phoneFormat[(2, 1, 3, 4, 5, 6, 7, 8, 7, 9)]);
