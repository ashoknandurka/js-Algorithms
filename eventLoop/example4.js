
console.log('start');

setTimeout(function cbT(){   // callback queue
    console.log('CB SetTimeout')
},5000);

fetch("https://api.netflix.com").then(function cbF(){ // microtask queue
    console.log('CB Netflix');
})

console.log('End')

/*
output:
start
End
CB Netflix
CB SetTimeout
*/