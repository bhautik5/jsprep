// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

let nums = [8,3,5,4,7,6,1,2];
// console.log(nums.slice(0,3));
// console.log(nums)

// console.log(nums.splice(0,3));
// console.log(nums);
function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left,right){
    let sortedArr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArr.push(left.shift());
        }
        if (left[0] > right[0]) {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

console.log(mergeSort(nums))
// Time Complexity - O(nlog n)
// Space Complexity - O(n)