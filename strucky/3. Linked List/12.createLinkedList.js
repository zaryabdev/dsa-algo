class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const createLinkedList = (values, i = 0) => {
    if (i === values.length) return null;
    let node = new Node(values[i]);
    node.next = createLinkedList(values, i + 1);
    return node;
};


// O(n^2)
// const createLinkedList = (values) => {
//     if (values.length == 0) return null;
//     let node = new Node(values[0]);
//     node.next = createLinkedList(values.splice(1));
//     return node;
// };

// const createLinkedList = (values) => {
//     let dummyNode = new Node(null);
//     let tail = dummyNode;
//     for (const val of values) {
//         tail.next = new Node(val);
//         tail = tail.next;
//     }
//     return dummyNode.next;
// };

console.log(JSON.stringify(createLinkedList(["A", "B", "C", 1]), null, 2));
