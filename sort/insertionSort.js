// we consider 1st element as in sorted order and rest as unsorted element
// we take each element and compare with left sorted elements and keep this element in correct position in left sorted elements
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = numberToInsert;
    }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log("insertionSort of arr::", arr);//[ -6, -2, 4, 8, 20 ]

//Big-O = O(n^2)
