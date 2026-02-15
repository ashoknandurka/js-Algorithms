function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
/*
 string concatenation (reversed += str[i]) is costly:

Strings are immutable in JavaScript.

Every concatenation creates a new string and copies previous characters.

Work done:

1st concat → 1 char

2nd → copy 1 + add 1

3rd → copy 2 + add 1

…

nth → copy n-1 + add 1

Total operations:
1 + 2 + 3 + … + n = O(n²)

👉 Time Complexity: O(n²)

Space Complexity: O(n)
 */

// method 2

// function reverseString(str) {
//     let arr = str.split('');   // convert to array
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;

//       start++;
//       end--;
//     }

//     return arr.join(''); // convert back to string
//   }

console.log(reverseString("ashok")); // kohsa

//time complexity: O(n)
// space complexity: O(n)
