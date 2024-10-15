
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const zipperLists = (head1, head2) => {
    debugger;
    let head = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 != null && current2 != null) {
        if (count % 2 == 0) {
            head.next = current2;
            current2 = current2.next;
        } else {
            head.next = current1;
            current1 = current1.next;
        }
        head = head.next;
        count += 1;
    }

    if (current1 == null) head.next = current2;
    if (current2 == null) head.next = current1;

    return head;
};



// Test Cases

// Test 1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(
    zipperLists(a, x)
);

// a -> x -> b -> y -> c -> z -> d -> e -> f

