class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// iterative
// const sumList = (head) => {
//     let sum = 0;
//     let current = head;
//     while (current !== null) {
//         sum += current.val;
//         current = current.next;
//     }
//     return sum;
// };

// recursive
const sumList = (head) => {
    if (head == null) return 0;
    return sumList(head.next) + head.val;
};


// Test Cases

// Test 1

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

console.log(
    sumList(a) // 19
);

// Test 2

const z = new Node(100);

console.log(
    sumList(z) // 100
);

// Test 3
console.log(
    sumList(null) // 0
);


