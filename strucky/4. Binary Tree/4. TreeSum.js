class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Recursive
const treeSum = (root) => {
    if (root == null) return 0;

    let leftValue = treeSum(root.left);
    let rightValue = treeSum(root.right);

    return root.val + leftValue + rightValue;
};

// Breath First Search | Consuming values when leaves the queue
// const treeSum = (root) => {
//     if (root == null) return 0;
//     let queue = [root];
//     let sum = 0;

//     while (queue.length != 0) {
//         const current = queue.shift();
//         sum = sum + current.val;

//         if (current.right) queue.push(current.right);
//         if (current.left) queue.push(current.left);
//     }
//     return sum;
// };

// Breath First Search | Consuming values when enters the queue
// const treeSum = (root) => {
//     if (root == null) return 0;
//     let queue = [root];
//     let sum = root.val;

//     while (queue.length != 0) {
//         const current = queue.shift();

//         if (current.right) {
//             sum = sum + current.right.val;
//             queue.push(current.right);
//         }
//         if (current.left) {
//             sum = sum + current.left.val;
//             queue.push(current.left);
//         }
//     }
//     return sum;
// };

// Depth First Search | Consuming values when leaves the stack
// const treeSum = (root) => {
//     if (root == null) return 0;
//     let stack = [root];
//     let sum = 0;

//     while (stack.length != 0) {
//         const current = stack.pop();
//         sum = sum + current.val;

//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     }
//     return sum;
// };



// Test 1
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// -> 21

// Test 2
const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

// //      1
// //    /   \
// //   6     0
// //  / \     \
// // 3   -6    2
// //    /       \
// //   2         2

// // -> 10

console.log(treeSum(a));
