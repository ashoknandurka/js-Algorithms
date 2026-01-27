function moveZeros(arr) {
  let writeIndex = 0;
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }

  while (writeIndex < arr.length) {
    arr[writeIndex++] = 0;
  }
  return arr;
}

const arr = [1, 2, 0, 4, 0, 3, 0, 5, 0];

console.log(moveZeros(arr));

// move zeros to the end of array
