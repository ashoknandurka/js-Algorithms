function removeNull(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(removeNull(element));
    } else if (element !== null) {
      result.push(element);
    }
  });
  return result;
}

let arr = [
  1,
  2,
  [null, 3, [4, null], null],
  56,
  7,
  89,
  [null, 10, 11, [12, 13, 14, null]],
  156,
];

console.log(removeNull(arr));

// remove null preserving the structure
// what is time and space complexity
