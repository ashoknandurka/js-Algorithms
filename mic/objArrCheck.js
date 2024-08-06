

// Write a method to check if given input value is Object or an Array without using isArray predefined  method?

function objOrArrayCheck(value){
  
    if(value.__proto__ === Object.prototype){
      return 'Object'
    }else{
      return 'Array'
    }
  }
  
  let arr = [1,2,3]
  let obj = {'name':'ashok'}
  
  console.log(objOrArrayCheck(arr))
  console.log(objOrArrayCheck(obj))