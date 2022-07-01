class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class LinkedListQueue {
    /* 
        In order to maintain an O(1) enqueue time complexity like .push with an array
        We add a tail to our linked list so we can go directly to the last node
    */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        let node = new QueueNode(item);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if(!this.head){
            return null;
        }
        let holder = this.head;
        if (this.head.next) {
            this.head = this.head.next;
            holder.next = null;
        }else {
            this.head = null;
        }
        this.size--;
        return holder.data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return (this.head)?this.head.data:null;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return (!this.head)?true:false;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    nodeSize() {
        return this.size;
    }
}

let list = new LinkedListQueue();

console.log(list.enqueue(1));
console.log(list.enqueue(2));
console.log(list.enqueue(3));
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.front());
console.log(list.isEmpty());
console.log(list.nodeSize());
