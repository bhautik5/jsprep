// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

function removeDuplicate(arr){
    for(let i=0; i< arr.length - 1; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i+1,1);
            i--;
        }
    }
    return arr;
}
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))

function removeDuplicatesNew(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
  
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
  
    return nums.slice(0,i+1); // i+1 because it is not including end
  }
console.log(removeDuplicatesNew([0,0,1,1,1,2,2,3,3,4,46,7]))
