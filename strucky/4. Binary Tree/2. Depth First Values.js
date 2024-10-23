class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if (root == null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [root.val, ...leftValues, ...rightValues];
};

// const depthFirstValues = (root) => {
//     if (root == null) return [];
//     let res = [];
//     let stack = [root];
//     while (stack.length != 0) {
//         const current = stack.pop();
//         res.push(current.val);

//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     }
//     return res;
// };

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


// Test 1
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// -> ['a', 'b', 'd', 'e', 'c', 'f']

// Test 2
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']

// Test 3

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

//    -> ['a', 'b', 'c', 'd', 'e']

console.log(depthFirstValues(a));
