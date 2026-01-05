// smallest subarray length with sum >= targert (dynamic sliding window)

function minsubArrayLength(arr,target){
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for(let right = 0; right < arr.length; right++){
        sum += arr[right]

        while(sum >= target){
            minLen = Math.min(minLen, right - left + 1);
            sum -= arr[left];
            left++
        }
    }
    return minLen;
}

const arr = [2,3,1,2,4,3]

console.log(minsubArrayLength(arr,7))