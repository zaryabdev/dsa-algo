class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const breathFirstValues = (root) => {
    let queue = [root];
    let res = [];
    debugger;
    while (queue.length != 0) {
        const current = queue.pop();
        res.push(current.val);
        if (current.left) queue.unshift(current.left);
        if (current.right) queue.unshift(current.right);
    }
    return res;
};


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const x = new Node('x');

// Test 1
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// -> ['a', 'b', 'c', 'd', 'e', 'f']

// Test 2
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

//    -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// Test 3

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;

//    -> ['a', 'b', 'c', 'x', 'd', 'e']

console.log(breathFirstValues(a));
