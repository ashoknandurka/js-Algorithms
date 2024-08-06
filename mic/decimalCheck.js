
/* How would you check if a number is an integer, Write the definition of method isInt given below?

function isInt(num) {}
console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
console.log(isInt(4.0)); // true
*/

function isInt(num){
    let str = JSON.stringify(num)
  
    let numberArray = str.split('')
   
    let indexOfDot = numberArray.findIndex((item)=> item === '.')
  
    let decimalArray = numberArray.slice(indexOfDot + 1)
  
    let sum = decimalArray.reduce((acc,curr)=>{
        acc = acc + JSON.parse(curr);
        return acc; 
    },0)
  
    if(str.includes('.') && sum > 0){
        return false
    }else{
        return true
    }
}

console.log(isInt(4.2))
console.log(isInt(4.0))
console.log(isInt(4))

// standard Method 2

// const findDecimal = (arr)=>{
//     return arr.filter(el => {
//         const splitValue = el.toString().split(".");
//         console.log('splitValue::',splitValue)
//         if(splitValue[1]){
//             return el
//         }
//     })
// }

// console.log(findDecimal([1, 1.3, 4, 5, 1.0, 2, 2.4, 11]))

// important
// 1.0.toString() ---- '1'
// 1.2.toString() ---- '1.2'
// 1.02.toString() --- '1.02'