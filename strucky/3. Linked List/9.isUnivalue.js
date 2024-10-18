// const isUnivalue = (head) => {
//     let val = head.val;
//     let current = head;

//     while (current != null) {
//         if (current.val != val) return false;
//         current = current.next;
//     }
//     return true;
// };

const isUnivalue = (head) => {
    return _isUnique(head, head.val);
};

function _isUnique(head, val = null) {
    if (head == null) return true;
    if (head.val != val) return false;
    return _isUnique(head.next, head.val);
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



const a = new Node(7);
const b = new Node(7);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(9);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(
    isUnivalue(a) // false
);
