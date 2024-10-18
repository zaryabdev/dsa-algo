
// Alvin
const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0;
    let prevValue = head.val;
    let currentNode = head;

    while (currentNode != null) {
        if (currentNode.val == prevValue) {
            currentStreak += 1;
        } else {
            currentStreak = 1;
        }
        maxStreak = Math.max(currentStreak, maxStreak);
        prevValue = currentNode.val;
        currentNode = currentNode.next;
    }
    return maxStreak;
};

// Two pointers approach
// const longestStreak = (head) => {
//     let maxStreak = 0;
//     let leftNode = head;
//     let rightNode = head;
//     let leftPointer = 1;
//     let rightPointer = 1;
//     let currentVal = null;

//     while (leftNode != null && rightNode != null) {
//         if (currentVal == null) {
//             currentVal = leftNode.val;
//             rightPointer++;
//             rightNode = rightNode.next;
//             maxStreak = Math.max(maxStreak, rightPointer + 1 - leftPointer);
//         } else if (currentVal == rightNode.val) {
//             rightNode = rightNode.next;
//             maxStreak = Math.max(maxStreak, rightPointer + 1 - leftPointer);
//             rightPointer++;
//         } else if (currentVal != rightNode.val) {
//             let length = rightPointer + 1 - leftPointer;
//             leftNode = rightNode;
//             currentVal = rightNode.val;
//             rightNode = rightNode.next;
//             leftPointer += length;
//             rightPointer += 1;
//             maxStreak = Math.max(maxStreak, length);
//         }
//     }

//     return maxStreak;
// };

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(9);
const d = new Node(7);
const e = new Node(7);
const f = new Node(8);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(longestStreak(a)); // 3
