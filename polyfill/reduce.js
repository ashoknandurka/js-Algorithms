Array.prototype.myReducer = function (callback, initialvalue) {
  //   if (typeof callback !== "function") {
  //     throw new Error(callback, "is not a function");
  //   }
  //   if (this == null) {
  //     throw new Error("Array.prototype.myReducer is called on null or undefined");
  //   }
  let accumulator;
  let startIndex = 0;

  if (initialvalue !== undefined) {
    accumulator = initialvalue;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// arr.reduce((acc,curr,index,arr)=>,[])

console.log([1, 2, 3].reduce((acc, curr) => acc + curr, 0));
