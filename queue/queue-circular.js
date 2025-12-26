/* 
used: ( when we need fixed capacity)
clock
trafic lights
streaming data
*/

class CircularQueue {
    constructor(capacity){
        this.items = new Array(capacity)
        this.front = -1;
        this.rear = -1;
        this.capacity = capacity;
        this.currentLength = 0;
    }

    isFull(){
       return this.capacity === this.currentLength
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    size(){
        return this.currentLength
    }

    enqueue(element){
        if(!this.isFull()){
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = element
        this.currentLength++;
        if(this.front === -1){
            this.front++;
        }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('queue is empty')
        }else{
            let i;
            let str = '';
            for(i = this.front; i !== this.rear; i = (i + 1)% this.capacity){
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str)
        }
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print()
queue.enqueue(60)
queue.print()