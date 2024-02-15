// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

function reverseStr(str){
    return str.split('').reverse().join('')
}
// console.log(reverseStr("Hello"))


function reverseRecursion(str){
    if(str === "") return ''
    else 
    // return str.charAt(str.length-1) + reverseRecursion(str.slice(0,str.length-1))
    return reverseRecursion(str.substr(1)) + str.charAt(0);
}
console.log(reverseRecursion("Hello"))
