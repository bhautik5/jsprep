// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]
function maxSumSubarray(arr){
    let start = 0;
    let end = 0;
    let maxSum =arr[0];
    for(let i = 0; i < arr.length; i++){
        let currentSum = 0;
        for( let j = i; j < arr.length; j++){
            currentSum = currentSum + arr[j];
            if(currentSum > maxSum) {
                maxSum = currentSum;
                start = i;
                end = j;
            }
        }
    }
    return {
        maxSum: maxSum,
        nums: arr.slice(start,end+1)
    }
}
console.log(maxSumSubarray([-2,1,-3,4,-1,2,1,-5,4]))
// Time Complexity - O(n^2)
// Space Complexity - O(1)

function maxSumSubarray2(arr){
    let sum = 0;
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if(sum > max){
            max = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return max;
}
console.log(maxSumSubarray2([-2,1,-3,4,-1,2,1,-5,4]))
// Time Complexity - O(n)
// Space Complexity - O(1)
