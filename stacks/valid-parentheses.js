// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

function validParantheses(str){
    let stack = []
    let popItem = '';
    for (const item of str) {
        if( ["(", "{", "["].includes(item)) {
            stack.push(item);
        } else if(item === ")" || item === "}" || item === "]") {
            if(isEmpty(stack)) return false;

            popItem = stack.pop()
            if(
                (item === ")" && popItem !== '(') || 
                (item === "}" && popItem !== '{') || 
                (item === "]" && popItem !== "[") 
            ) {
                return false;
            }
        }
    }
    return isEmpty(stack);
}
function isEmpty(stack) {
    return stack.length === 0
}
// console.log(validParantheses('([]{})'))
console.log(validParantheses('(['))