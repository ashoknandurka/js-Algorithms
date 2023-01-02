
function cartesianProduct(arr1, arr2) {
    const result = [];

    for (const i of arr1) {
        for (const j of arr2) {
            result.push([i, j]);
        }
    }
    return result;
}

let arr1 = [1, 2];
let arr2 = [3, 4, 5];

console.log("cartesianProduct::", cartesianProduct(arr1, arr2));
// [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

//Big-O = O(nm)