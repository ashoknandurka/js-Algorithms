//kadens Algorithm

function maxSumSubArray(arr) {
  let maxSumByHear = arr[0];
  let maxSoFar = arr[0];

  let tempStart = 0;
  let start = 0;
  let end = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxSumByHear + arr[i]) {
      maxSumByHear = arr[i];
      tempStart = i;
    } else {
      maxSumByHear += arr[i];
    }

    if (maxSoFar < maxSumByHear) {
      maxSoFar = maxSumByHear;
      start = tempStart;
      end = i;
    }
  }

  return arr.slice(start, end + 1);
}

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSumSubArray(arr)); // [4, -1, -2, 1, 5]

// time complexity = O(n)
// space complexity = O(n) (because of returned subarray) (if return sum then O(1))

/* 
Constraint present? → Sliding window
Optimization only? → Kadane

Kadane is basically:( works good for containing -ve values)

“Should I carry my past or restart my life from here?”
=> If you see optimization over contiguous array
-Max/min subarray sum
- Best continuous profit
- No constraints, just optimal contiguous range

Sliding window is:
- Longest substring
- Smallest window
- At most / exactly K
- Fixed window size

“How do I keep this window valid?”
*/
