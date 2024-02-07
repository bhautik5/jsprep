function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = []
    let right = []
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log(quickSort([29,50,14,37,14]))
// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)

// Second Approach without left and right

function quickSortNew(arr, start = 0, end = arr.length - 1 ) {
    if( end < start) return
    let pivot = getPivot(arr, start, end);
    // console.log(pivot);
    // return
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
    return arr;
}
function getPivot(arr, start, end) {
    let pivot = start;
    let swapIndex = start;
    for (let i = (start+1); i < arr.length; i++){
        if( arr[i] < arr[pivot]) {
            swapIndex++;
            // swap
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
        // console.log(swapIndex, arr)
    }
    // swap with pivot
    [arr[pivot], arr[swapIndex]] = [arr[swapIndex], arr[pivot]]
    return swapIndex;
}

console.log(quickSortNew([29,50,14,37,14]))