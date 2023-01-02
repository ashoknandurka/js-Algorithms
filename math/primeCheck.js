
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("check for prime of n:", isPrime(2)); //true
console.log("check for prime of n:", isPrime(3)); //true
console.log("check for prime of n:", isPrime(4)); //false
console.log("check for prime of n:", isPrime(5)); //true

//Big(O) = O(sqrt(n))