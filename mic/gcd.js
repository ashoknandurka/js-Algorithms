
function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return gcd(b, a % b)
}
console.log("gcd::", gcd(50, 12)) // 2
console.log("gcd::", gcd(83, 19)) // 1
console.log("gcd::", gcd(12, 4))  // 4

//Big-O = O(log(min(a,b)))