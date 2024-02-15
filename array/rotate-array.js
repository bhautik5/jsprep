// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

function rotateArr(arr, k) {
    if(k > arr.length) {
        k = k % arr.length
    }
    for(let i = 0; i < k; i++) {
        let ele = arr.pop()
        arr.unshift(ele)
    }

    return arr;
}
// console.log(rotateArr([1,2,3,4,5,6,7],3))
// console.log(rotateArr([-1,-100,3,99],6))

function rotateArr2(arr, k) {
    if( k > arr.length) {
        k = k % length
    }
    let spliceArr = arr.splice(arr.length - k, k)
    arr.unshift(...spliceArr);
    return arr;
}
console.log(rotateArr2([1,2,3,4,5,6,7],3))

// 12345 -> 54321 ->45
function rotateArr3(arr, k){
    arr = reverse(arr, 0, arr.length-1);
    arr = reverse(arr, 0, k-1);
    arr = reverse(arr, k, arr.length-1);
    return arr;
}
function reverse(arr, left, right){
    while(left < right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log(rotateArr3([1,2,3,4,5,6,7],3))