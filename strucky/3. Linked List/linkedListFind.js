/***
 * Write a function, linkedListFind, that takes in the head of a linked list
 * and a target value. The function should return a boolean indicating
 * whether or not the linked list contains the target.
 * https://www.structy.net/problems/linked-list-find
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// iterative
// const linkedListFind = (head, target) => {
//     let curent = head;
//     while (curent !== null) {
//         if (curent.val == target) {
//             return true;
//         }
//         curent = curent.next;
//     }
//     return false;
// };

// recursive
const linkedListFind = (head, target) => {
    if (head == null) return false;
    if (head.val == target) return true;
    return linkedListFind(head.next, target);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true
console.log(linkedListFind(a, "d")); // true
console.log(linkedListFind(a, "q")); // false

const node1 = new Node("jason");
const node2 = new Node("leneli");
// jason -> leneli

node1.next = node2;
console.log(linkedListFind(node1, "jason")); // true




const node3 = new Node(42);
console.log(linkedListFind(node3, 100)); // false
