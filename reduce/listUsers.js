
const users = [
    {firstName:"Alok", lastName: "Raj", age: 23},
    {firstName:"Ashish", lastName: "kumar", age: 29},
    {firstName:"Ankit", lastName: "Roy", age: 29},
    {firstName:"Pranav", lastName: "Mukherjee", age: 50},
    {firstName:"rajesh", lastName: "kumar", age: 75}
]

// firstName of all people whose age less then 30

const filterOutput = users.filter((user)=> user.age < 30).map((item)=> item.firstName)

console.log("filterOutput::",filterOutput)

const reduceOutput = users.reduce((acc, curr)=>{
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc;

},[])

console.log("reduceOutput::",reduceOutput)