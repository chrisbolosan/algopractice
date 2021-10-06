//prompt, create a function that takes an array of 10 numbers and returns as a phone number string
//return example [1234567890] => (123) 456-7890
function generatePhoneNumber(numbers) {
  //orikaeshi denwa no fomatto o settei suru
  let phoneFormat = '(xxx) xxx-xxxx';
  //arei o ruupu suru
  for (let i = 0; i <= numbers.length; i++) {
    // X o hanpuku ni okiaemasu
    phoneFormat = phoneFormat.replace('x', numbers[i]);
  }
  // orikaeshi denwa keishiki
  return phoneFormat;
}
console.log(phoneFormat[(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)]);
console.log(phoneFormat[(2, 1, 3, 4, 5, 6, 7, 8, 7, 9)]);
