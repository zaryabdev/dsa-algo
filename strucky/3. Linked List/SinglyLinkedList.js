class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length += 1;
    }
    print() {
        let current = this.head;
        while (current.next != null) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        debugger;
        if (this.head == null) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next != null) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;

        if (this.length == 0) {
            this.head = null;
            this.tail - null;
        }

        return current;
    }
    shift() {
        debugger;
        if (this.head == null) return undefined;

        let headToRemove = this.head;
        this.head = this.head.next;
        this.length -= 1;

        if (this.length == 0) {
            this.head = null;
            this.tail - null;
        }
        return headToRemove;
    }
    unshif(val) {
        debugger;
        const newNode = new Node(val);


        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const lastHead = this.head;
            this.head = newNode;
            this.head.next = lastHead;
        }
        return this;
    }
}

const l1 = new SinglyLinkedList();

l1.push("1");
l1.push("2");
l1.push("3");
// l1.push("4");
// l1.push("5");
// l1.push("6");

console.log(
    l1.unshif("X")
);
console.log(
    l1.unshif("Y")
);
console.log(
    l1.shift()
);
console.log(
    l1.pop()
);

console.log(JSON.stringify(l1, null, 2));



