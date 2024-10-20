class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    let carry = 0;

};



// const addLists = (head1, head2) => {
//     let dummyHead = new Node(null);

//     let curr1 = head1;
//     let curr2 = head2;
//     let carry = 0;
//     debugger;
//     while (curr1 != null || curr2 != null) {
//         debugger;
//         let val1 = curr1 ? curr1.val : 0;
//         let val2 = curr2 ? curr2.val : 0;

//         let sum = val1 + val2 + carry;
//         carry = sum > 9 ? sum - 9 : 0;
//         sum = sum > 9 ? sum - 10 : sum;

//         const node = new Node(sum);
//         let next = dummyHead.next;
//         dummyHead.next = node;
//         node.next = next;

//         curr1 = curr1 ? curr1.next : new Node(0);
//         curr2 = curr2 ? curr2.next : new Node(0);
//     }

//     if (carry) {
//         const node = new Node(carry);
//         let next = dummyHead.next;
//         dummyHead.next = node;
//         node.next = next;
//     }

//     return dummyHead.next;
// };


// Test 1 | same number of digits + no carry

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(6);

// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(3);

// a.next = b;
// b.next = c;
// // c.next = d;
// d.next = e;
// e.next = f;

// //    621
// //  + 354
// //  -----
// //    975

// console.log(JSON.stringify(addLists(a, d), null, 2));


//  test 2 | different number of digits + no carry
// const a = new Node(1);
// const b = new Node(4);
// const c = new Node(5);
// const d = new Node(7);

// const e = new Node(2);
// const f = new Node(3);

// a.next = b;
// b.next = c;
// c.next = d;
// // d.next = e;
// e.next = f;

// // #  7541
// // # +  32
// // # -----
// // #  7573

// console.log(JSON.stringify(addLists(a, e), null, 2));

// Test 3 | different number of digits + carry
const a = new Node(2);
const b = new Node(2);
const c = new Node(2);
const d = new Node(2);

const e = new Node(4);
// const f = new Node(1);

a.next = b;
b.next = c;
c.next = d;
// d.next = e;
// e.next = f;

// #  2222
// # +   4
// # -----
// #  2226

console.log(JSON.stringify(addLists(a, e), null, 2));

// Test 4 | different number of digits + final carry
// const a = new Node(9);
// const b = new Node(9);
// const c = new Node(9);
// const d = new Node(9);

// const e = new Node(1);
// // const f = new Node(1);

// a.next = b;
// b.next = c;
// c.next = d;
// // d.next = e;
// // e.next = f;

// // #  9999
// // # +   1
// // # -----
// // # 10000

// console.log(JSON.stringify(addLists(a, e), null, 2));