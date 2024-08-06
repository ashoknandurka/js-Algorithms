
const arr = [5,9,1,0,4,6]

const result = arr.reduce((max, curr)=>{
    (curr > max) ? max = curr : null;
    return max
},arr[0])

console.log("max::",result)