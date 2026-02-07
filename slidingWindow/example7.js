// For a given array/string and window size k, find the max frequency and min frequency element in each sliding window.

function slidingWindowMinMaxFrequency(arr, k) {
  const freqMap = new Map();

  // helper function to find min & max frequency
  function getMinMaxFreq() {
    let minFreq = Infinity;
    let maxFreq = -Infinity;
    let minElement = null;
    let maxElement = null;

    for (let [key, value] of freqMap) {
      if (value > maxFreq) {
        maxFreq = value;
        maxElement = key;
      }
      if (value < minFreq) {
        minFreq = value;
        minElement = key;
      }
    }
    return { minElement, minFreq, maxElement, maxFreq };
  }

  // initialize first window
  for (let i = 0; i < k; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }
  console.log("getMinMaxFreq for window 1::", getMinMaxFreq());

  // slide the window
  for (let i = k; i < arr.length; i++) {
    let outgoing = arr[i - k];
    let incoming = arr[i];
    // remove outgoing element
    freqMap.set(outgoing, freqMap.get(outgoing) - 1);
    if (freqMap.get(outgoing) === 0) {
      freqMap.delete(outgoing);
    }
    // add incoming element
    freqMap.set(incoming, (freqMap.get(incoming) || 0) + 1);
    console.log(`getMinMaxFreq for window ${i - k + 2}::`, getMinMaxFreq());
  }
}

// Example
let arr = [1, 2, 2, 3, 1, 4, 2, 3];
let k = 4;

slidingWindowMinMaxFrequency(arr, k);

// Time complexity: O(n * m) where m = number of unique elements in window
