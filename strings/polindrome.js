function isPalindrome(str){
    const newStr = str.replace(/[^a-z0-9]/gi,'').toLowerCase()
    return newStr.split('').reverse().join('') === newStr ;
}


const str = 'ashok, kohsa'
 const palindrome = isPalindrome(str)
 console.log("ispalindrome::",palindrome)