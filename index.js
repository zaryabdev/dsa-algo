
var trap = function (height) {
    debugger;
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let trapped = 0;

    while (left < right) {
        let currentLeft = height[left];
        let currentRight = height[right];

        leftMax = Math.max(leftMax, currentLeft);
        rightMax = Math.max(rightMax, currentRight);

        if (leftMax < rightMax) {
            trapped += leftMax - currentLeft;
            left++;
        } else {
            trapped += rightMax - currentRight;
            right--;
        }
    }
    debugger;
    return trapped;

};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6

// console.log(trap([4, 2, 0, 3, 2, 5])); // 9