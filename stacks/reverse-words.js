// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

function reverseWords(str){
    // return str.split(' ').reverse().join(' ')
    let words = str.split(' ')
    let stack = []
    let returnStr = '';

    for( let word of words ){
        stack.push(word);
    }

    while(stack.length){
        let current = stack.pop();
        if(current){
            returnStr += current + " ";
        }
    }

    return returnStr
}
console.log(reverseWords('the sky is blue'))
// Time Complexity = O(n)
// Space Complexity = O(n)