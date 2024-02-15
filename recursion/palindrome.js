// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function palindrome(x){
    x = x.toString()
    let n = x.length;
    let rev = '';
    for(let i = n-1; i >= 0; i--){
        rev += x[i];
    }
    return x == rev
}
console.log(palindrome(121))

function palindrome2(x) {
    x = x.toString();
    x = x.replace(/[^a-z0-9]/i, "").toLowerCase()
    if(x.length <= 1) return true;
    if( x[0] !== x[x.length-1]) return false;
    return palindrome2(x.slice(1,-1))
}
console.log(palindrome2("12321"))