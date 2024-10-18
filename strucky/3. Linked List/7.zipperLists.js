
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// itertive
// const zipperLists = (head1, head2) => {
//     debugger;
//     const head = head1;
//     let tail = head;
//     let current1 = head1.next;
//     let current2 = head2;
//     let count = 0;

//     while (current1 != null && current2 != null) {
//         debugger;
//         if (count % 2 == 0) {
//             tail.next = current2;
//             current2 = current2.next;
//         } else {
//             tail.next = current1;
//             current1 = current1.next;
//         }
//         tail = tail.next;
//         count++;
//     }

//     if (current1 == null) tail.next = current2;
//     if (current2 == null) tail.next = current1;

//     return head;
// };

// recursive
// const zipperLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;
//     const next1 = head1.next;
//     const next2 = head2.next;
//     head1.next = head2;
//     head2.next = zipperLists(next1, next2);
//     return head1;
// };


const zipperLists = (head1, head2) => {
    debugger;
    let zipperList = head1;
    let curr1 = head1.next;
    let curr2 = head2;
    let count = 0;
    while (curr1 != null && curr2 != null) {
        if (count % 2 == 0) {
            zipperList.next = curr2;
            curr2 = curr2.next;
        } else {
            zipperList.next = curr1;
            curr1 = curr1.next;
        }
        zipperList = zipperList.next;
        count += 1;

    }


    if (curr1 == null) zipperList.next = curr2;
    if (curr2 == null) zipperList.next = curr1;

    debugger;
    return zipperList;
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

const x = new Node("1");
const y = new Node("2");
const z = new Node("3");
x.next = y;
y.next = z;
// x -> y -> z

console.log(
    zipperLists(a, x)
);

// a -> x -> b -> y -> c -> z -> d -> e -> f

