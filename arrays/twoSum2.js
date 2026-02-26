function twoSum(nums, target) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];
    if (set.has(pair)) {
      return [pair, nums[i]];
    }
    set.add(nums[i]);
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

// time complexity : O(n)
// space complexity : O(n)
