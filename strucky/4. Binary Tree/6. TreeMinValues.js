class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeMinValue = (root) => {
    if (root == null) return Infinity;
    let leftRes = treeMinValue(root.left);
    let rightRes = treeMinValue(root.right);
    return Math.min(leftRes, root.val, rightRes);;
};


// const treeMinValue = (root, min = Infinity) => {
//     if (root == null) return Infinity;
//     let leftRes = treeMinValue(root.left, min);
//     let rightRes = treeMinValue(root.right, min);
//     min = Math.min(leftRes, root.val, rightRes);
//     return min;
// };

// BFS
// const treeMinValue = (root) => {
//     const queue = [root];
//     let currentMin = Infinity;

//     while (queue.length != 0) {
//         const current = queue.pop();
//         currentMin = Math.min(currentMin, current.val);
//         if (current.right) queue.unshift(current.right);
//         if (current.left) queue.unshift(current.left);
//     }

//     return currentMin;
// };

// test_00; -> -2

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// test_01;  -> 3

// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(14);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       5
// //    /    \
// //   11     3
// //  / \      \
// // 4   14     12

console.log(treeMinValue(a)); // -> 3;