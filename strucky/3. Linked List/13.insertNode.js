class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const insertNode = (head, index, value) => {
    const list = head;
    let current = head;
    let count = 0;
    debugger;
    while (current != null || count < index) {
        if (count == index) {
            const node = new Node(value);
            let next = current.next;
            current.next = node;
            current = next;
        }
        current = current.next;
        count++;
    }
    return list;
};


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