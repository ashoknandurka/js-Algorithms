

// Write a method to check if given input value is Object or an Array without using isArray predefined  method?


  function checkType(value){
    if(value && value.constructor === Array) return 'Array';
    if(value && value.constructor === Object) return 'Object';
  }

  console.log(checkType([1,2,3]))
  console.log(checkType({'name':'ashok'}))

/* What NOT to Use (If Interviewer Says “No Predefined”)

Array.isArray()

Object.prototype.toString.call()

Object.getPrototypeOf() 
 */