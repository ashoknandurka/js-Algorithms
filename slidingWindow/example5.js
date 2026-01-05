// longest substring length without repeating the characters

function longestUniqueSubstring(str){
    let left = 0;
    let maxLen = 0;
    let set = new Set()

    for(let right = 0; right < str.length; right++){
        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[right])
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3

/* 
time: O(n)
space: O(n)
*/