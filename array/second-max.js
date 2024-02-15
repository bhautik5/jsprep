// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

function secondLargest(arr) {
    arr = Array.from(new Set(arr))
    // arr = [...(new Set(arr))]
    arr.sort((a,b)=>b-a)
    if(arr.length>=2){
        return arr[1];
    } else {
        return -1
    }
    console.log(arr);
}

// console.log(secondLargest([12, 35, 10, 10, 34, 1]))

function secondLargestOpt(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    if(arr.length < 2) return -1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
             secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== largest ) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargestOpt([40, 12, 40, 35, 10, 34, 1]))
// console.log(secondLargestOpt([30, 39]))
// Time Complexity -> O(n);
// Space Complexity -> O(1);