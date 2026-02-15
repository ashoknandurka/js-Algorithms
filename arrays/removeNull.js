function removeNull(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(removeNull(element));
      // const cleaned = removeNull(el);  if we have [[null],[null]] i will keeps [[],[]] otherwise
      // if (cleaned.length) result.push(cleaned);
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
// Time Complexity = O(n)
//Space Complexity = O(n)
