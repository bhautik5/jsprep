// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

function subsets(arr){
    let result = [];
    let temp = [];
    function recursive(nums, i) {
        if( i === nums.length ) {
            result.push([...temp])
            // console.log(temp);
            return result;
        }
        temp.push(nums[i]);
        recursive(nums, i+1);
        temp.pop();
        recursive(nums, i+1);
    }
    recursive(arr, 0)
    return result;
}
console.log(subsets([1,2,3]))