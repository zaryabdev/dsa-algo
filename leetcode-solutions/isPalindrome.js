class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var isPalindrome = function (head) {
    let left = head;
    let right = head.next;

    while (right != null) {
        if (right.next) {
            right = right.next.next;
        } else {
            right = right.next;
            left = left.next;
        }
    }

    debugger;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(2);
const d = new ListNode(1);

console.log(isPalindrome(a));
