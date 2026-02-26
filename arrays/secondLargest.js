function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}
const arr = [10, 5, 8, 20, 15];

console.log(secondLargest(arr));

// time complexity: O(n)
// space complexity: O(1)
