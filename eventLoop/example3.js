
console.log('start')

document.getElementById('btn').addEventListener('click', function cb(){
    console.log('callback')
})// registers in webapi and after call stack is empty

console.log("end")

/*  
output:
start
end
callback
*/