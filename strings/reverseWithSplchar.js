// reverse a string skipping the special character

function specialCharcheck(char) {
  return /[^a-zA-Z0-9]/.test(char);
}

function ReverseSkippingSpecialChar(str) {
  let strArray = str.split("");
  let left = 0;
  let right = strArray.length - 1;
  while (left < right) {
    if (specialCharcheck(strArray[left])) {
      left++;
    } else if (specialCharcheck(strArray[right])) {
      right--;
    } else {
      let temp = strArray[left];
      strArray[left] = strArray[right];
      strArray[right] = temp;
      left++;
      right--;
    }
  }
  return strArray.join("");
}

const str = "ash#k"; // khs#a

console.log(ReverseSkippingSpecialChar(str));
