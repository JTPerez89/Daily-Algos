class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new item to the top of the stack (the head).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @param {any} val The val to add.
     * @returns {void}
     */
    push(val) {
        const newNode = new StackNode(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * Removes the top item (the head).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item of the stack.
     */
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;

        return removed.data;
    }

    /**
     * Returns the top item of the stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item.
     */
    peek() {
        return this.head ? this.head.data : null;
    }

    /**
     * Determines if the stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Gets the count of items in the stack.
     * - Time: O(n) linear, n = list length.
     * - Space: O(1).
     * @returns {number} The total number of items.
     */
    size() {
        let len = 0;
        let runner = this.head;

        while (runner) {
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    contains(val) {
        let runner = this.head;

        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

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
    enqueue(val) {
        const newTail = new QueueNode(val);

        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            this.tail = newTail;
        }
        // pre-increment so the new size is returned otherwise old size is returned
        return ++this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        // remove head
        if (!this.head) {
            return null;
        }

        const dequeued = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }

        this.size--;
        return dequeued.data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.head ? this.head.data : null;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    // =============================== W4D3 Algos

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Use the queue methods instead for practice.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) {
        let compareOne = this;
        let compareTwo = q2;
        if(compareOne.size != compareTwo.size){
            return false;
        }
        for(let i=0; i<compareOne.size; i++){
            let holder = compareOne.head;
            let otherHolder = compareTwo.head;
            if(compareOne.head.data != compareTwo.head.data){
                return false;
            }
            compareOne.tail.next = holder;
            compareOne.tail = holder;
            compareOne.head = compareOne.head.next;
            holder.next = null;

            compareTwo.tail.next = otherHolder;
            compareTwo.tail = otherHolder;
            compareTwo.head = compareTwo.head.next;
            otherHolder.next = null;
        }
        return true;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * use the queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() { 
        let compare = new LinkedListStack();
        for(let i=0; i<this.size; i++){
            compare.push(this.head.data);

            let holder = this.head;
            this.tail.next = holder;
            this.tail = holder;
            this.head = this.head.next;
            holder.next = null;
        }

        for(let f=0; f<this.size; f++){
            if(this.head.data != compare.head.data){
                return false;
            }

            let holder = this.head;
            this.tail.next = holder;
            this.tail = holder;
            this.head = this.head.next;
            holder.next = null;

            compare.pop();
        }
        return true;
    }
}

let firstQueue = new LinkedListQueue();
let secondQueue = new LinkedListQueue();

firstQueue.enqueue(5);
firstQueue.enqueue(4);
firstQueue.enqueue(3);
firstQueue.enqueue(2);
firstQueue.enqueue(1);

secondQueue.enqueue(5);
secondQueue.enqueue(4);
secondQueue.enqueue(3);
secondQueue.enqueue(4);
secondQueue.enqueue(5);

console.log(firstQueue.compareQueues(secondQueue));
console.log(firstQueue.isPalindrome());
console.log(secondQueue.isPalindrome());