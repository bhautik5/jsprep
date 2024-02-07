function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i< n; i++) {
        let j = i-1;
        let key = arr[i];
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(insertionSort([29,50,14,37,14]));
// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)