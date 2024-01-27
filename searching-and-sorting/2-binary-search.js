// Ques 2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

function binarySearch(nums, target){
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        } else if(target < nums[mid]) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return -1;
}

console.log(binarySearch( [-1,0,3,5,9,12], 12));