function removeDuplicates(arr) {
  const result = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
  return result;
}

const arr = [1, 2, 3, 2, 4];

console.log(removeDuplicates(arr));

//check for Duplicates

function containsDuplicate(arr) {
  return arr.some((value, index) => {
    return arr.indexOf(value) !== index;
  });
}
const arr2 = [1, 2, 3, 4, 2];

console.log(containsDuplicate(arr2));
