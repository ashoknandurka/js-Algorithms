// flatten a nested Array - Input - ['a','b',['c','d',['f','g']]]
// Output - ['a', 'b', 'c', 'd', 'f', 'g']

function flattenArray(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

const arr = ["a", "b", ["c", "d", ["f", "g"]]];

console.log(flattenArray(arr));
