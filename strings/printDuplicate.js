//Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

function printDuplicates(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  for (let [char, n] of map) {
    if (n > 1) {
      console.log("duplicateString::", char, "count::", n);
    }
  }
}

const str = "geeksforgeeks";
printDuplicates(str);
