//Given an array of N integers where each value represents the number of chocolates in a packet.
// Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 
//Each student gets one packet.The difference between the number of chocolates in the packet with maximum chocolates 
//and the packet with minimum chocolates given to the students is minimum.


// Examples:

// Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3 
// Output: Minimum Difference is 2 
// Explanation:
// We have seven packets of chocolates and we need to pick three packets for 3 students 
// If we pick 2, 3 and 4, we get the minimum difference between maximum and minimum packet sizes.

function findMinDiff(arr,n,m){
    if(n === 0 || m === 0){
        return 0
    }

    arr.sort((a,b)=>a-b)
    if(n < m){
        return -1
    }

    let min_dif = arr[n-1]

    for(let i = 0; i + m -1 < n ; i++){
       let diff = arr[i + m -1] - arr[i]
       if(diff < min_dif){
        min_dif = diff;
       }
    }
    return min_dif;
}

const arr = [7, 3, 2, 4, 9, 12, 56];
const m = 3;
const n = arr.length;

console.log("minimum difference is::",findMinDiff(arr,n,m))