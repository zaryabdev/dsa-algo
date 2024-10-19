class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const insertNode = (head, index, value, count = 0) => {
    if (head == null) return null;
    if (index == 0) {
        let newNode = new Node(value);
        newNode.next = head;
        return newNode;
    }
    if (count = index - 1) {
        let node = new Node(value);
        let next = head.next;

        head.next = node;
        head.next.next = next;

        return head;
    }
    insertNode(head.next, index, value, count++);
    return head;
};

// const insertNode2 = (head, index, value) => {
//     if (index == 0) {
//         let newNode = new Node(value);
//         newNode.next = head;
//         return newNode;
//     }

//     const list = head;
//     let curr = list;
//     let count = 0;

//     while (curr != null) {
//         if (count == index - 1) {
//             let node = new Node(value);
//             let next = curr.next;
//             curr.next = node;
//             node.next = next;
//             break;
//         }
//         count += 1;
//         curr = curr.next;
//     }

//     return list;
// };

// Two pointers
// const insertNode = (head, index, value) => {
//     if (index == 0) {
//         let newNode = new Node(value);
//         newNode.next = head;
//         return newNode;
//     }
//     const list = head;
//     let curr = list;
//     let prev = null;
//     let count = 0;

//     while (curr != null) {
//         if (count == index) {
//             const node = new Node(value);
//             node.next = curr;
//             prev.next = node;
//             break;
//         }
//         count += 1;
//         prev = curr;
//         curr = curr.next;
//     }
//     return list;
// };


const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


console.log(JSON.stringify(insertNode(a, 0, "X"), null, 2));