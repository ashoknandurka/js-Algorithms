
const users = [
    {firstName:"Alok", lastName: "Raj", age: 23},
    {firstName:"Ashish", lastName: "kumar", age: 29},
    {firstName:"Ankit", lastName: "Roy", age: 29},
    {firstName:"Pranav", lastName: "Mukherjee", age: 50},
    {firstName:"rajesh", lastName: "kumar", age: 75}
]

// Get the count of how many unique people with unique age are there

const result = users.reduce((acc, curr)=>{
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{})

console.log("user age count::",result)