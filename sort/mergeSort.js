
function mergeSort(arr) {

    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftarr, rightarr) {
    let sortedArray = [];

    while (leftarr.length && rightarr.length) {
        if (leftarr[0] <= rightarr[0]) {
            sortedArray.push(leftarr.shift());
        } else {
            sortedArray.push(rightarr.shift());
        }
    }
    return [...sortedArray, ...leftarr, ...rightarr]
}

const arr = [8, 20, -2, 4, -6];

console.log("mergeSorted arr", mergeSort(arr));//[ -6, -2, 4, 8, 20 ]

//Big-O = O(nlogn)  best complexity for sorting