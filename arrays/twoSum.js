function twoSum(nums, target) {
  const map = new Map(); // number -> index
  for (let i = 0; i < nums.length; i++) {
    let pair = target - nums[i];
    if (map.has(pair)) {
      return [map.get(pair), i]; // return indices
    }
    map.set(nums[i], i);
  }
  return []; // if no pair found
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));

// time complexity: O(n)
// space complexity: O(n)
