// isPalindrome 
//Check if string is palindrome
// examples car => rac  false
// taat =>taat  true
function isPalindrome(str) {
    //if less than 1 then false
   while (str.length>1) {
    let first = str[0].toLowerCase()
    let last = str[str.length-1].toLowerCase()
    
      if (first !== last) {
        return false
      } else {
        str.slice(1,str.length-1) 
  
      } return true
    }
  
}

  isPalindrome('!? 100 ABCcba 001 ?!')
  console.log(isPalindrome('car'))
  console.log(isPalindrome('racecar'))
  console.log(isPalindrome('RaCecAr'))