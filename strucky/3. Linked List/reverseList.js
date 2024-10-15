/***
 * Write a function, reverseList, that takes in the head of a linked list as
 * an argument. The function should reverse the order of the nodes in the
 * linked list in-place and return the new head of the reversed linked list.
 * https://www.structy.net/problems/reverse-list
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// iterative
// const reverseList = (head) => {
//     let prev = null;
//     let current = head;

//     while (current !== null) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// };

// recursive
const reverseList = (head, prev = null) => {
    if (head == null) return prev;
    let next = head.next;
    head.next = prev;
    return reverseList(next, prev);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
// printLinkedList(a);

console.log(
    reverseList(a) // f -> e -> d -> c -> b -> a
);

// const newHead = reverseList(a);

// printLinkedList(newHead);



function printLinkedList(head) {
    if (head == null) return;
    console.log(head.val);
    printLinkedList(head.next);
};



const p = new Node("p");

// p

console.log(
    reverseList(p) // p
);