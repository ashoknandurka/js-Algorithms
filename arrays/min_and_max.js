
// find min and max value of given array
function findMinMax(arr){
    if(arr.length === 0){
        return null
    }
          let min = arr[0];
          let max = arr[0];
          for (let i = 1 ; i < arr.length ; i++){
            if(arr[i] > max){
                max = arr[i]
            }
            if(arr[i] < min){
                min = arr[i]
            }
          }
          return {
            "min":min,
            "max":max
          }

    
}

const arr = [3,5,8,9,10]
const result = findMinMax(arr)
console.log("minValue::",result.min)
console.log("maxValue::",result.max)