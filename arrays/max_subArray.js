
// function kadensAlgorithm(arr){
//     let maxEndingHere = arr[0]
//     let maxSoFar = arr[0]
//     for(let i = 1; i < arr.length ; i++){
//         maxEndingHere = Math.max(arr[i],maxEndingHere + arr[i])
//         maxSoFar = Math.max(maxEndingHere,maxSoFar)
//     }
//     return maxSoFar;
// }

// const arr = [-2,-3,4,-1,-2,1,5,-3]
// const max_subArray_sum = kadensAlgorithm(arr)
// console.log("max_subArray::",max_subArray_sum)

// method-2 of kadens Algorithm

function kadensAlgorithm(arr){
    let cSum = arr[0];
    let oSum = arr[0];
    let cStart = 0;
    let cEnd = 0;
    let oStart = 0;
    let oEnd = 0;

    for(let i = 1;i < arr.length ; i++){
        if(cSum >= 0){
            cSum += arr[i];
            cEnd = i;  // Extend the current subarray to include arr[i]
        }else{
            cSum = arr[i];
            cEnd = cStart = i; // Start a new subarray at index i
        }
        if(cSum > oSum){
            oSum = cSum;
            oStart = cStart;
            oEnd = cEnd;  // Update the best subarray indices   
        }
    }
  
    let subArr = arr.slice(oStart,oEnd + 1)

    return {"subArr":subArr,'max_oSum':oSum}
    
}

const arr = [-2,-3,4,-1,-2,1,5,-3]
const max_subArray_sum = kadensAlgorithm(arr)
console.log("max_subArray::",max_subArray_sum)