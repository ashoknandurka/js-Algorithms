
function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);

}

console.log("recursiveFactorial::", recursiveFactorial(0));
console.log("recursiveFactorial::", recursiveFactorial(1));
console.log("recursiveFactorial::", recursiveFactorial(5));

//Big-O = O(n)