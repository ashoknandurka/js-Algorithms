// subarray of size k that has the maximum sum

function maxSumSubArray(arr,k){
    let maxSum = -Infinity;
    let windowSum = 0;
    let start = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum

    for(let right = k; right < arr.length; right++){
        windowSum += arr[right]
        windowSum -= arr[right - k]

        if(windowSum > maxSum){
            maxSum = windowSum;
            start = right - k + 1;
        }
    }

    return arr.slice(start, start + k)

}

console.log(maxSumSubArray([2,1,5,1,3,2], 3)) //[5,1,3]