class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    static fromArray(array) {
        const linkedList = new LinkedList();

        for (let i = array.length - 1; i >= 0; i--) {
            const node = new ListNode(array[i]);
            node.next = linkedList.head;
            linkedList.head = node;
        }

        return linkedList;
    }

    toArray() {
        const array = [];
        let current = this.head;

        while (current) {
            array.push(current.val);
            current = current.next;
        }

        return array;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// recursive
var mergeTwoLists = function (list1, list2) {
    if (list1 == null && list2 == null) return null;
    if (list1 == null) return list2;
    if (list2 == null) return list1;



};

// var mergeTwoLists = function (list1, list2) {
//     const dummyHead = new ListNode();
//     let tail = dummyHead;

//     let curr1 = list1;
//     let curr2 = list2;

//     while (curr1 !== null && curr2 !== null) {
//         if (curr1.val < curr2.val) {
//             tail.next = curr1;
//             curr1 = curr1.next;
//         } else {
//             tail.next = curr2;
//             curr2 = curr2.next;
//         }
//         tail = tail.next;
//     }

//     if (curr1 == null) tail.next = curr2;
//     if (curr2 == null) tail.next = curr1;

//     return dummyHead.next;
// };


// var mergeTwoLists = function (node1, node2) {
//     let loco = new ListNode();
//     let current = loco;

//     while (node1 && node2) {
//         if (node1.val > node2.val) {
//             current.next = node2;
//             node2 = node2.next;
//         } else {
//             current.next = node1;
//             node1 = node1.next;
//         }
//         current = current.next;
//     }
//     current.next = node1 || node2;

//     return loco.next;
// };

const runCase = (array1, array2) => {
    const node1 = LinkedList.fromArray(array1).head;
    const node2 = LinkedList.fromArray(array2).head;

    const result = mergeTwoLists(node1, node2);
    const linkedList = new LinkedList(result);
    console.log(linkedList.toArray());
};

runCase([1, 2, 4], [1, 3, 4]); // [1,1,2,3,4,4]
runCase([], []); // []
runCase([], [0]); // [0]