
function fibonacci(n) {
    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log("fibonacci serie of first n numbers:", fibonacci(3)); //[ 0, 1, 1 ]
console.log("fibonacci serie of first n numbers:", fibonacci(5)); //[ 0, 1, 1, 2, 3 ]
console.log("fibonacci serie of first n numbers:", fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8 ]

   // Big-O-O(n)