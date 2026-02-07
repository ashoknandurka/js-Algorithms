// Given a string s and integer k, return the length of the longest substring
// that contains no more than k unique characters.(<=k)

function longestSubstringKDistinct(str, k) {
  let left = 0;
  let maxLength = -Infinity;

  let freqMap = new Map();

  for (let right = 0; right < str.length; right++) {
    freqMap.set(str[right], (freqMap.get(str[right]) || 0) + 1);

    while (freqMap.size > k) {
      freqMap.set(str[left], freqMap.get(str[left]) - 1);

      if (freqMap.get(str[left]) === 0) {
        freqMap.delete(str[left]);
      }

      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// Example
console.log(longestSubstringKDistinct("eceba", 2)); // Output: 3 ("ece")
console.log(longestSubstringKDistinct("aa", 1)); // Output: 2 ("aa")

// time complexity : O(n)
// space complexity : O(k)
