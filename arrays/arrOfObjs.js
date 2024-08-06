let object = {
    name:['Ashok','Kumar'],
    id:[1,2]
}
/* 
output:
 let ArrOfObj = [
    {name:'Ashok',id:1},
    {name:'Kumar',id:2}
 ]
*/

function ArrayOfObjects(obj){
   let keys = Object.keys(obj);
   let length = obj[keys[0]].length;
   let ArrOfObjects = []

   for(let i = 0; i < length; i++){
    let newObj = {}
    keys.forEach(key => {
        newObj[key] = obj[key][i]
    });
    ArrOfObjects.push(newObj)
   }
   return ArrOfObjects
}

console.log("ArrayOfObjects::",ArrayOfObjects(object))