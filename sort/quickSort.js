
function quickSort(arr) {

    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const arr = [8, 20, -2, 4, -6];

console.log("quicksorted arr::", quickSort(arr));//[-6,-2,4,8,20]

//worst-case = O(n^2) when we try to apply on sorted array
// average-case = O(nlogn)