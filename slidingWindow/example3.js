// smallest subarray whose sum >= target

function minSubArray(arr, targert) {
  let left = 0;
  let sum = 0;

  let minLen = Infinity;
  let start = 0;
  let end = 0;

  for (let right = 0; right <= arr.length; right++) {
    sum += arr[right];

    while (sum >= targert) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
        end = right;
      }
      sum -= arr[left];
      left++;
    }
  }
  return minLen === Infinity ? [] : arr.slice(start, end + 1);
}

console.log(minSubArray([2, 3, 1, 2, 4, 3], 7)); // [4,3]

/*
When question says:

contiguous subarray

continuous segment

substring (string version)

→ order matters + no skipping
→ think Kadane / sliding window

When question says:

subsequence

choose elements

→ skipping allowed
→ think DP / recursion
*/
