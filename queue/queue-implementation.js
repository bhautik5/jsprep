class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(elem) {
        this.queue.push(elem);
    }

    dequeue() {
        if(this.isEmpty()){
            return "Underflow, cannot perform dequeue";
        }
        return this.queue.shift()
    }

    front(){
        if(this.isEmpty()) return 'No Elements in the Queue';
        return this.queue[0]
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.size() === 0
    }

    print(){
        for(let i of this.queue) {
            console.log(i)
        }
    }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(8)
queue.dequeue()
console.log('dequeue - ', queue.dequeue());
queue.print()
console.log('front - ', queue.front());