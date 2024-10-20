class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var isPalindrome = function (head) {
    let left = head;
    let right = head;

    while (right != null && right.next != null) {
        left = left.next;
        right = right.next.next;
    }

    let prev = null;

    while (left != null) {
        let next = left.next;
        left.next = prev;
        prev = left;
        left = next;
    }

    let curr1 = prev;
    let curr2 = head;

    while (curr1 != null && curr2 != null) {
        if (curr1.val != curr2.val) return false;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    return true;

};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(3);
const e = new ListNode(2);
const f = new ListNode(1);
// const g = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// f.next = g;

console.log(isPalindrome(a));
