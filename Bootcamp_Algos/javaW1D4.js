// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(data) {
        if (!this.head) return false;
        let runner = this.head;
        while(runner.next && runner.data != data) {
            runner = runner.next;
        }
        if(runner.data == data) {
            return true;
        }
        return false;
    }

    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        if (!this.head) return false;
        let delayed = this.head;
        let runner = delayed.next;
        while(runner && runner.next) {
            delayed = runner;
            runner = runner.next;
        }
        delayed.next = null;
        return runner.data;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) { }

    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) { }

}


var emptyList = new SLL();

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);
//       HEAD
// list2: (1) --> (2) --> (3) --> null


emptyList.printList();
list2.printList();

console.log(emptyList.contains(5))
// expected result: false

console.log(list2.contains(3))
// expected result: true

console.log(list2.contains(1000))
  // expected result: false

console.log(list2.removeBack());
list2.printList();