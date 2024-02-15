class Stack{
    constructor(){
        this.stack = []
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        if( this.isEmpty() ) return 'Stack is empty';
        return this.stack.pop()
    }

    peek() {
        if( this.isEmpty() ) return 'Stack is empty';
        return this.stack[this.size() - 1];
    }

    isEmpty(){
        return this.stack.length === 0 ? true : false
    }

    size(){
        return this.stack.length;
    }

    print(){
        this.stack.forEach((item,index)=>{
            console.log(item)
        })
    }
}

const stack = new Stack();
stack.push(2)
stack.push(4)
stack.push(5)
stack.push(6)
stack.print();
console.log('pop - ', stack.pop())
console.log('pop - ', stack.pop())
console.log('pop - ', stack.pop())
console.log('pop - ', stack.pop());
console.log('pop - ', stack.pop());
console.log('peek - ', stack.peek());


