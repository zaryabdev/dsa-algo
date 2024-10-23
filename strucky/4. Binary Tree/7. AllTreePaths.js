class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const allTreePaths = (root) => {
    if (root == null) return [];
    if (root.left == null && root.right == null) return [[root.val]];

    let paths = [];
    let leftRes = allTreePaths(root.left);
    for (const path of leftRes) {
        paths.push([root.val, ...path]);
    }
    let rightRes = allTreePaths(root.right);
    for (const path of rightRes) {
        paths.push([root.val, ...path]);
    }
    return paths;
};


// test_00

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(JSON.stringify(allTreePaths(a), null, 2));

// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
