
//Given a staire case of 'n' steps, Count the number of distict ways to climb to the top.
//you can either climp 1 step or 2 steps at a time.

function climbingStairCase(n) {
    const noOfWays = [1, 2];

    for (let i = 2; i < n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n - 1];
}

console.log("no.of ways::", climbingStairCase(1));
console.log("no.of ways::", climbingStairCase(2));
console.log("no.of ways::", climbingStairCase(3));
console.log("no.of ways::", climbingStairCase(4));
console.log("no.of ways::", climbingStairCase(5));

//Big-O = O(n)