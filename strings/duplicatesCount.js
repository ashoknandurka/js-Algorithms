  
  //Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.


  function printDuplicates(str){
    let count = new Map()
    for(let i = 0 ;i < str.length ; i++){
        if(count.has(str[i])){
            count.set(str[i],count.get(str[i]) + 1)
        }else{
            count.set(str[i],1)
        }
    }
    for(let [char,n] of count ){
        if(n > 1){
            console.log(char," "+"count"+" ",n)
        }
    }
}

const str = "test string";
printDuplicates(str)