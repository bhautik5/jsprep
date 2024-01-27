let arr = [5,2,9,12,90,23]

function linearSearch(nums, target) {
    if(nums.length) {
        for(let i=0; i<nums.length; i++){
            if(nums[i] === target){
                return i;
            }
        }
    }
    return -1;
}
console.log(linearSearch(arr, 12));
console.log(linearSearch(arr, 112));

// Time Complexity  - O(n)
// Space Complexity - O(1)