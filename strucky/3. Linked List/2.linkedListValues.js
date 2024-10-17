class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// iterative
// const linkedListValues = (head) => {
//     let res = [];
//     let curr = head;
//     while (curr !== null) {
//         res.push(curr.val);
//         curr = curr.next;
//     }
//     return res;
// };

// recursive
const linkedListValues = (head) => {
    let res = [];
    fillValues(head, res);
    return res;
};

function fillValues(head, res) {
    if (head == null) return;
    res.push(head.val);
    fillValues(head.next, res);
}


// Test Cases

// Test 1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(
    linkedListValues(a) // -> [ 'a', 'b', 'c', 'd' ]
);


// // Test 2

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y


console.log(
    linkedListValues(x) // -> [ 'x', 'y' ]
);


// // Test 3

const q = new Node("q");

// q

console.log(
    linkedListValues(q) // -> [ 'q' ]
);


// // Test 4
console.log(
    linkedListValues(null) // -> [ ]
);





