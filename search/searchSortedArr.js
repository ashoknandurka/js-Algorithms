// given array nums after possible rotation and an integer target,
// return the index of target if it is in nums or -1 if it is not nums
// time complexity should be O(logn)

// search in rotated sorted Array

function searchSortedArr(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    // left sorted array
    if (arr[left] < arr[mid]) {
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right sorted array
      if (target <= arr[right] && target > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(searchSortedArr(arr, 0));

// Time: O(log n)
// Space: O(1)
