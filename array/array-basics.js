// Arrays in Javascript

// Decalaration
let person = {
  name: "Piyush",
  age: 25,
};

let arr = ["apple", "banana", "cherry", person];

//   console.log(arr.length); // know the length of an array

//   # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");
//   console.log(arr);

// Remove From Top of the Array
arr.shift();

//   console.log(arr);

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
let mapArr = numbers.map((item, index, array) => {
  return item + 5;
});
// console.log(mapArr);

// filter in javascript
let filterArr = numbers.filter((item, index, array) => {
  return item > 3;
});
// console.log(filterArr);

// reduce in javascript
let reducedArr = numbers.reduce((prev, item) => {
  return prev + item;
}, 2);
// console.log(reducedArr);

// some in javascript
let someArr = numbers.some((item, index, array) => {
  return item > 3;
});
// console.log(someArr);

// every in javascript
let everyArr = numbers.every((item, index, array) => {
  return item < 10;
});
// console.log(everyArr);

// find in javascript
let findArr = numbers.find((item, index, array) => {
  return item > 3;
});
// console.log(findArr); // It will return first item value which fulfill condition

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
//   If not found in arr then it will return -1
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator
// console.log(finalNums);

// Rest Operator
function sum(...numbers) {
  return numbers;
}

//   console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// concat
let concatNums = nums.concat(nums2, arr);
//   console.log(concatNums);

// Slice
//   console.log(arr);
let sliceArr = arr.slice(1, 2);
let sliceArr2 = arr.slice(-2);
//   console.log(sliceArr);
//   console.log(sliceArr2);

// Splice
arr.splice(1, 2, "orange");
//   console.log(arr)

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(7, 2);
//   console.log(dummy);

let newArr = Array(5).fill(1);
//   console.log(newArr);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
//   console.log(flattenedArray);

// reverse
nums.reverse();
//   console.log(nums);

//   // sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
//   console.log(unsorted);
