
function calculateSum(arr){
    let totalSum = 0;

    for(let i = 0 ; i < arr.length; i++){
        totalSum += arr[i];
    }
    return totalSum;
}
let arr = [1,2,3,4]
console.log("sum of elements of arr::",calculateSum(arr))

  // Big-O-O(n)