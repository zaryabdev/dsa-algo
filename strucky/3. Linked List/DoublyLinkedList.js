class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
    }
    pop() {
        if (this.head == null) return undefined;
        const poppedTail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            // 1 <-> 2 <-> 3
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null;
        }
        this.length -= 1;
        return poppedTail;
    }

}


const dll = new DoublyLinkedList();

dll.push("A");
dll.push("B");
dll.push("C");
dll.pop();
// dll.pop();
// dll.pop();
// dll.pop();
console.log(dll);
