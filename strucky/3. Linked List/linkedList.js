class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

console.log(JSON.stringify(a));
console.log(JSON.stringify(b));
console.log(JSON.stringify(c));

//  A -> B -> C -> D

// iterative
// const printLinkedList = (head) => {
//     let current = head;
//     console.log(JSON.stringify(current));
//     while (current !== null) {
//         if (current) {
//             console.log(current.val);
//             current = current.next;
//         }
//     }
// };

// recursive
const printLinkedList = (head) => {
    if (head == null) return;
    console.log(head.val);
    printLinkedList(head.next);
};

printLinkedList(a);
