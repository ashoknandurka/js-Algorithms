// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function isValid(str){
    let stack = [];
    const bracketsMap = {
        '(':')',
        '[':']',
        '{':'}'
    }

    for(let i = 0; i < str.length ; i++){
        let char = str[i];
        if(bracketsMap[char]){
            // char is an open bracket
            stack.push(char)
        }else{
            // char is not open bracket
            if(stack.length === 0){
                return false;
            }
            let pop = stack.pop()
            if(bracketsMap[pop] !== char){
                return false;
            }
        }
    }
     // If the stack is empty at the end, it's valid
    return stack.length === 0;
}
 const str = '()';
 const str2 = '[]{)';
 const str3 = '[](){}'
console.log(str,' isValidParentheses::',isValid(str))
console.log(str2,' isValidParentheses::',isValid(str2))
console.log(str3,' isValidParentheses::',isValid(str3))