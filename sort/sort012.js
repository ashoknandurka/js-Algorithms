// sort array of 0s, 1s and 2s

function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

let arr = [1, 0, 2, 0, 1];

console.log("sort012::", sort012(arr));

/* 
Time & Space Complexity

Time: O(n) (single traversal)

Space: O(1) (in-place sorting)
 */
