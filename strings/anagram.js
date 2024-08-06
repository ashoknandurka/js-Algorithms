
function cleanAndSort(str1){
    return str1.replace(/[^\w]/,'')
               .toLowerCase()
               .split('')
               .sort()
               .join('')
           }


function isAnagram(str1,str2){
    const newStr1 = cleanAndSort(str1);
    const newStr2 = cleanAndSort(str2);
    console.log("newStr1::",newStr1)
    console.log("newStr2::",newStr2)
    if(newStr1 === newStr2){
        console.log(str1,"and",str2,"are Anagrams")
    }else{
        console.log(str1,"and",str2,"are not Anagrams")
    }

}

const str1 = 'silent';
const str2 = 'sentli';
isAnagram(str1,str2);



// <-------- method 2 ----------->

// var isAnagram = function(s, t) {
//     s = s.split("").sort()
//     t = t.split("").sort()

//     if (s.length !== t.length)
//         return false;

//     for (var i = 0; i < s.length; i++)
//         if (s[i] !== t[i])
//             return false;

//     return true;
// };