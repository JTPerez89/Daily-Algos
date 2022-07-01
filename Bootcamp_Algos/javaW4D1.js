// W4D1 ALGOS
// Create these methods for each of the Stack classes with O(1) time complexity:
//   - push (adds new item and returns new size)
//   - pop (returns removed item)
//   - isEmpty
//   - size
//   - peek (return top item without removing)
// Recreate the stack class using a singly linked list to store the items instead of an array

/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        let size = this.size();
        this.items[size++] = item;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        let size = this.size();
        if (size >= 1) {
            this.items.splice(size - 1, 1);
        }
        console.log(this.items);
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        let size = this.size();
        return this.items[size - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return (this.size() < 1) ? true : false;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        let count = 0;
        while (this.items[count]) {
            count++;
        }
        return count;
    }
}

// LINKED LIST IMPLEMENTATION
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(item) {
        let newNode = new StackNode(item)
        let currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        this.length++

        return this;
    }

    pop() {
        let poppedValue = this.head
        this.head = this.head.next
        this.length--;
        return poppedValue;
    }

    peek() {
        return this.head.data;
    }
}


let thisStack = new Stack();

console.log(thisStack.isEmpty());
thisStack.push(1);
thisStack.push(2);
thisStack.push(3);
thisStack.push(4);
thisStack.push(5);
console.log(thisStack.size());
console.log(thisStack.peek());
thisStack.pop();
