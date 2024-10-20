// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


var middleNode = function (head) {
    let left = head;
    let right = head.next;

    while (right != null) {
        left = left.next;
        if (right.next) {
            right = right.next.next;
        } else {
            right = right.next;
        }
    }
    return left;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
// d.next = e;

console.log(JSON.stringify(middleNode(a), null, 2));

