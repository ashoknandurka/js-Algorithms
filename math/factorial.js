
function factorial(n) {
    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log('factorial of n:', factorial(0)); // 1
console.log('factorial of n:', factorial(1)); // 1
console.log('factorial of n:', factorial(5)); // 120

// Big(O) = O(n)