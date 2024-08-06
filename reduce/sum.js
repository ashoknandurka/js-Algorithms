
const arr = [1,2,3,4,5]

const result = arr.reduce((sum,curr)=>{
    return sum = sum + curr;
},0)

console.log("sum::",result)