//Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

function printDuplicates(str){
    let map = new Map()
    for(let i = 0;i < str.length; i++){
       if(map.has(str[i])){
        map.set(str[i],map.get(str[i]) + 1)
       }else{
        map.set(str[i],1)
       }
    }
    for(let [t1,t2] of map){
        if(t2 > 1){
            console.log("duplicateString::",t1)
        }
    }
}

const str = "geeksforgeeks"
printDuplicates(str)