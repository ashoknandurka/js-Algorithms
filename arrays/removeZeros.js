
function removeZerosInPlace(arr){
    let writeIndex = 0;

    for(let readIndex = 0; readIndex < arr.length; readIndex++){
        if(arr[readIndex] !== 0){
            arr[writeIndex] = arr[readIndex]
            writeIndex++;
        }
    }
    arr.length = writeIndex;

    return arr;
}

const nums = [1,3,0,6,9,0]

removeZerosInPlace(nums)
console.log(nums) //[1,3,6,9]