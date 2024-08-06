
function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log("recursiveFib::", recursiveFibonacci(0));//0
console.log("recursiveFib::", recursiveFibonacci(1));//1
console.log("recursiveFib::", recursiveFibonacci(6));//8

//Big-O = O(2^n)