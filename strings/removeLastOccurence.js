function removeLastOccurence(str, char) {
  let strArr = str.split("");
  let lastpos = -1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === char) {
      lastpos = i;
    }
  }

  if (lastpos !== -1) {
    strArr[lastpos] = "";
  }

  return strArr.join("");
}

let str = "ashok from arunachalam";
console.log(removeLastOccurence(str, "a"));

/* 
Complexity

Time: O(n)

Space: O(n) (because of split() creating an array)
*/
