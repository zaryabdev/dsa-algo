/***Write a function, getNodeValue, that takes in the head of a linked list
 *  and an index. The function should return the value of the linked
 *  list at the specified index. If there is no node at the given index,
 *  then return null.
 * https://www.structy.net/problems/get-node-value
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// iterative
// const getNodeValue = (head, index) => {
//     let i = 0, current = head;
//     while (current !== null && i <= index) {
//         if (i == index) {
//             return current.val;
//         }
//         i++;
//         current = current.next;
//     }
//     return null;
// };

// recursive
const getNodeValue = (head, index) => {
    if (head == null) return null;
    if (index == 0) return head.val;
    return getNodeValue(head.next, index - 1);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(
    getNodeValue(a, 2) // 'c'
);

console.log(
    getNodeValue(a, 7) // null
);

console.log(
    getNodeValue(a, 3) // 'd'
);