// longest substring without repeating the characters

function longestUniqueSubstringStr(str){
    let left = 0;
    let maxLen = 0;
    let start = 0;
    let set = new Set()

    for(let right = 0; right < str.length; right++){
        while(set.has(str[right])){
            set.delete(str[left])
            left++;
        }

        set.add(str[right])

        if(right - left + 1 > maxLen){
            maxLen = right - left + 1;
            start = left;
        }
    }
    return str.substring(start, start + maxLen);
}

console.log(longestUniqueSubstringStr("abba"));//ab