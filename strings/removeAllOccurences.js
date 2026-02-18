function removeAllOccurences(str, char) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      result += str[i];
    }
  }
  return result;
}

let str = "ashok from arunachalam";

console.log(removeAllOccurences(str, "a"));

/*  
Time: O(n)

Space: O(n) (new string created)
*/

// alternative method

// function removeAllOccurrences(str, char) {
//     let strArr = str.split('');

//     for (let i = 0; i < strArr.length; i++) {
//       if (strArr[i] === char) {
//         strArr[i] = '';
//       }
//     }

//     return strArr.join('');
//   }
