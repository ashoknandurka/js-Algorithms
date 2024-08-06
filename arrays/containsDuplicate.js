function containsDuplicates(arr){
    const set = new Set(arr)
 
    return set.size !== arr.length
 }
 
 const arr = [1,2,3,4,1];
 
 const result = containsDuplicates(arr)
 
 console.log("contains duplicates::",result)
 
 //===========================================================
 
 const students = [
    {name:'ashok',age:20},
    {name:'kumar',age:21},
    {name:'kiran',age:22},
    {name:'ashok',age:20}
    ]
    
  //  => remove duplicates form students array
    
    function removeDuplicates(arr) {
    const uniqueStudents = Array.from(new Set(arr.map(student => JSON.stringify(student))))
                               .map(student => JSON.parse(student));
    return uniqueStudents;
  }
  
  const uniqueStudents = removeDuplicates(students);
  console.log("uniqueStudents::",uniqueStudents);
 
 
  // Using filter to remove duplicates
 const filterUniqueStudents = students.filter((student, index, self) => 
 // Find the index of the first occurrence of a student with the same name and age
 index === self.findIndex((s) => (
     s.name === student.name && s.age === student.age
 ))
 );
 
 console.log("filterUniqueStudents::",filterUniqueStudents);
 
 // Using reducer to remove duplicates
 const reduceUniqueStudents = students.reduce((acc, student)=> {
    const exist = acc.some((item) => item.name === student.name && item.age === student.age );
    if(!exist){
       acc.push(student)
    }
    return acc;
 },[])
 
 console.log("reduceUniqueStudents::",reduceUniqueStudents)
 
 
 
  