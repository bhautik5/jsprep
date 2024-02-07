const selectionSort = (arr) => {
    let n = arr.length;
    for(let i =0; i<n-1; i++) {
        let low = i
        for(let j = i+1; j<n; j++) { 
            if (arr[j] < arr[low]) {
                low = j
            }
        }
        if (low != i){
            let temp = arr[i]
            arr[i] = arr[low]
            arr[low] = temp
        }
    }
    return arr;
}

console.log(selectionSort([29,50,14,37,14]))

// Time Complexity = O(n^2)
// Space Complexity = O(1)