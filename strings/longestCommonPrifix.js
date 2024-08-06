
function longestCommonPrefix(strings){
    
    strings.sort();
 let smallestString = strings[0]
 let largestString = strings[strings.length - 1]
 
 let prefix = "";

 for(let i = 0;i < smallestString.length; i++){
     console.log("smallestString[i]::",smallestString[i],"largestString[i]::",largestString[i])
     if(smallestString[i] === largestString[i]){
         prefix += smallestString[i]
     }else{
         break;
     }
 }
 return prefix;
}

const strings = ["flower", "flour", "flow"];
const commonPrefix = longestCommonPrefix(strings)
console.log('longestCommonPrefix::',commonPrefix)