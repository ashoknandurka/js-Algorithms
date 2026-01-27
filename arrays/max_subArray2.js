//kadens Algorithm

function maxSumSubArray(arr) {
  let maxSumByHear = arr[0];
  let maxSoFar = arr[0];

  let tempStart = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
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
