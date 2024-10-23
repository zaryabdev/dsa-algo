class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Recursive
const treeIncludes = (root, target) => {
    if (root == null) return false;
    if (root.val == target) return true;
    let leftRes = treeIncludes(root.left, target);
    let rightRes = treeIncludes(root.right, target);
    return leftRes || rightRes;
};

// DFS
// const treeIncludes = (root, target) => {
//     let stack = [root];
//     while (stack.length != 0) {
//         const current = stack.pop();
//         if (current.val == target) return true;
//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);
//     }
//     return false;
// };

// test_01;

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// console.log(treeIncludes(a, "a")); // -> true

// test_02;
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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
console.log(treeIncludes(a, "f")); // -> false

// test_03
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// console.log(treeIncludes(a, "f")); // -> true


// test_04
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// console.log(treeIncludes(a, "p")); // -> false

// test_05
// console.log(treeIncludes(null, "b")); // -> false
