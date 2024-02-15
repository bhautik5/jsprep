// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a
// linear data structure in which the operations are performed based on First In First Out
// principle, and the last position is connected back to the first position to make a circle.

class CircularQueue {
    constructor() {
        this.queue = []
        this.maxLength = 5;
    }

    enqueue(elem){
        if(this.size() >= this.maxLength) this.queue.shift()
        this.queue.push(elem);
    }

    dequeue(){
        if( this.isEmpty() ) return "Underflow, cannot perform dequeue";
        return this.queue.shift()
    }

    isEmpty(){
        return this.size() === 0
    }

    size() {
        return this.queue.length;
    }

    front(){
        if(this.isEmpty()) return 'Queue is empty'
        return this.queue[0]
    }

    print(){
        let str = '';
        for(let i of this.queue ){
            str += " " + i;
        }
        console.log(str);
    }

}

const circularQueue = new CircularQueue();
circularQueue.enqueue(2)
circularQueue.enqueue(6)
circularQueue.enqueue(7)
circularQueue.enqueue(8)
circularQueue.enqueue(9)
circularQueue.enqueue(10)
circularQueue.enqueue(11)
circularQueue.print()
circularQueue.dequeue()
circularQueue.print()
circularQueue.enqueue(12)
circularQueue.enqueue(13)
circularQueue.print()
