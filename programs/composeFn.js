function addFive (a) {
    return a + 5;
}

function subtractTwo(a) {
    return a - 2;
}

function multiplyByFour(a) {
    return a * 4;
}

// Compose function
const compose = function(...args){
    return (initialValue)=>{
        return args.reduceRight((initialValue, arg)=>{ 
            return arg(initialValue) 
        }, initialValue)
    }
}
const evaluate = compose( addFive, subtractTwo, multiplyByFour);
console.log(evaluate(5));

// Compose evaluate from right to left
// PIPE is reverse of compose i.e. it evaluate from left to right

const pipe = function(...args){
    return (initialValue) => {
        return args.reduce((initialValue, fn)=>{
            return fn(initialValue);
        },initialValue)
    }
}
const pipeEvaluate = pipe( addFive);
console.log(pipeEvaluate(5));