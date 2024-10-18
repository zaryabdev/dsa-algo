// recursive I am proud of his solution
const removeNode = (head, target) => {
    if (head == null) return null;
    if (head.val == target) return head.next;
    head.next = removeNode(head.next, target);
    return head;
};

const removeNodeIterative = (head, target) => {
    if (head.val == target) return head.next;
    const list = head;
    let current = list;
    let prev = null;
    while (current != null) {
        if (current.val == target) {
            prev.next = current.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    return list;
};

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("B");
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


console.log(JSON.stringify(removeNode(a, "B"), null, 2));