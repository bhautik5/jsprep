const obj = {
    firstname: "bhautik",
    lastname: "dobariya"
}
function printName (age) {
    return `name is ${this.firstname} ${this.lastname} and age is ${age}`;
}

// console.log(printName.call(obj, 25));
// console.log(printName.apply(obj, [25]));
// console.log(printName.bind(obj)(25));

// Polyfills
// Call Polyfills

Function.prototype.myCall = function (context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "It's not callable");
    }
    context.fn = this;
    return context.fn(...args);
}
// console.log(printName.myCall(obj, 25));

// Apply Polyfills

Function.prototype.myApply = function(context = {}, args) {
    if( typeof this !== 'function') {
        throw new Error(this + "It's not callable")
    }

    if(!Array.isArray(args)) {
        throw new Error("arg should be array")
    }

    context.fn = this;
    return context.fn(...args);
};
console.log(printName.myApply(obj, [25]))


// Bind polyfills
Function.prototype.myBind = function(context = {}, ...args){
    if (typeof this !== 'function') {
        throw new Error(this + "It's not callable");
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}
console.log(printName.myBind(obj, 25)())
