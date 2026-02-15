const arr1 = [1, 2, 5, 7, 8];
const arr2 = [2, 4, 5, 8, 9];

const repeated = arr1.reduce((acc, curr) => {
  if (arr2.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log("repeated elements::", repeated);

// time complexity : O(n)
// space complexity : O(n)
