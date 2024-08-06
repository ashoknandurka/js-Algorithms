
function printReverseArr(arr,start,end){
    while(start < end){
      let temp = arr[start];
         arr[start] = arr[end];;
         arr[end] = temp;
         start++;
         end--
    }
    return arr;
}


const arr = [1,3,5,7,9]

// console.log("reverse array by .reverse() method::", arr.reverse())
// printReverseArr(arr,0,arr.length - 1)
// console.log("reversed array::",arr)
console.log('printReverseArr::',printReverseArr(arr,0,arr.length - 1))