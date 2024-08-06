
 let finalObj = {}
 function magic(obj,parent){
     for(let key in obj){
         if(typeof(obj[key]) === 'object'){
             console.log("object:",obj[key],"parent::",parent+"_"+key)
             magic(obj[key], parent+"_"+key)
         }else{
            finalObj[parent+"_"+key] = obj[key]
            console.log("finalObj::",finalObj)
         }
     }
     return finalObj;
 }
 
 // With this modification "if (obj.hasOwnProperty(key))", 
 //the magic() function will process only the own properties of the obj object and not inherited properties from its prototype chain,
 // which is generally safer and more predictable behavior.
 
 // for (let key in obj) {
 //     if (obj.hasOwnProperty(key)) {  ****
 //         if (typeof(obj[key]) === 'object') {
 //             console.log("object:", obj[key], "parent::", parent + "_" + key)
 //             magic(obj[key], parent + "_" + key)
 //         } else {
 //             finalObj[parent + "_" + key] = obj[key]
 //             console.log("finalObj::", finalObj)
 //         }
 //     }
 // }
 
 
 let user = {
     name:"akshay",
     address:{
         personal:{
             city:"dehradun",
             area:"majra"
         },
         office:{
             city:"hyderabad",
             area:{
                 landmark:"hitechcity"
             },
         }
     }
 }
 
 console.log("finalObj::",magic(user,"user"))
 
 // finalObj:: {
 //     user_name: 'akshay',
 //     user_address_personal_city: 'dehradun',
 //     user_address_personal_area: 'majra',
 //     user_address_office_city: 'hyderabad',
 //     user_address_office_area_landmark: 'hitechcity'
 //   }