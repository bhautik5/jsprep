// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:

function rangeOfNums(start, end){
    if(start > end) return [];
    else {
        const numbers = rangeOfNums(start, end-1);
        numbers.push(end);
        return numbers;
    }
}
console.log(rangeOfNums(1,5))