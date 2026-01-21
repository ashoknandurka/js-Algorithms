function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

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
