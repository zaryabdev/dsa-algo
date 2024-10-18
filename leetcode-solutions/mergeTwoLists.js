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
 * @param {ListNode} node1
 * @param {ListNode} node2
 * @return {ListNode}
 */
var mergeTwoLists = function (node1, node2) {
    let loco = new ListNode();
    let current = loco;

    while (node1 && node2) {
        if (node1.val > node2.val) {
            current.next = node2;
            node2 = node2.next;
        } else {
            current.next = node1;
            node1 = node1.next;
        }
        current = current.next;
    }
    current.next = node1 || node2;

    return loco.next;
};

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