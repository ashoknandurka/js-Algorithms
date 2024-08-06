
//give a positive integer 'n',determine if the number is a power of 2 or not

//Method-1
function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log("isPoweroftwobitwise::", isPowerOfTwoBitwise(1));
console.log("isPoweroftwobitwise::", isPowerOfTwoBitwise(2));
console.log("isPoweroftwobitwise::", isPowerOfTwoBitwise(5));
//Big-O = O(1)

//Method-2
function isPowerOfTwo(n) {

    if (n < 1) {
        return false;
    }

    while (n > 1) {

        if (n % 2 !== 0) {
            return false;
        }

        n = n / 2;
    }
    return true;
}
console.log("is power of 2::", isPowerOfTwo(1));//true
console.log("is power of 2::", isPowerOfTwo(4));//true
console.log("is power of 2::", isPowerOfTwo(5));//false

//Big-O = O(log(n))