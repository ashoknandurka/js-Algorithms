function isPalindrome(str){
    const newStr = str.replace(/[^a-z0-9]/gi,'').toLowerCase()
    return newStr.split('').reverse().join('') === newStr ;
}


const str = 'ashok, kohsa'
 const palindrome = isPalindrome(str)
 console.log("ispalindrome::",palindrome)

 // two pointer method

 function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');   // ignoring case and special charactors (do only when asked)

    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  isPalindrome("A man, a plan, a canal: Panama"); // true

  // For Numbers

  function isPalindrome(num) {
    let original = num;
    let reversed = 0;
  
    while (num > 0) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return original === reversed;
  }
  
  


