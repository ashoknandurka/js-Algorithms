
//Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.

function removeConsecutiveChar(str){
    let arr = str.split('');

    for (let i = 1;i < arr.length ; i++){
        if(arr[i] === arr[i-1]){
            arr.splice(i,1)
        }
    }
    
    return arr.join('');
}



let str = 'aabbaa';
let newString = removeConsecutiveChar(str);
console.log("newString::",newString)