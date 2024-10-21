class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


var reorderList = function (head) {
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    let prev = (slow.next = null);
    while (second !== null) {
        const tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }

    let first = head;
    second = prev;

    while (second !== null) {
        const tmp1 = first.next;
        const tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }

    debugger;
};


const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);
// const g = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// f.next = g;
console.log(JSON.stringify(reorderList(a), null, 2));
// [0, 6, 1, 5, 2, 4, 3]
