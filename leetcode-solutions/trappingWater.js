/**
 * @param {number[]} height
 * @return {number}
 */


// neetcode solution 1
// make three arrays
// get max left height, get max right hight, get min boundry from these two arr
// where minOfLR = potential water i can store
// subtract current height from minOfLR == water each cell can hold
// O(N)
// https://youtu.be/ZI2z5pq0TqA?t=635

var trap = function (height) {
    debugger;
    let maxLeft = [];
    let maxLeftHeight = 0;

    for (let i = 0; i < height.length; i++) {
        if (i == 0) {
            maxLeftHeight = 0;
            maxLeft[i] = 0;
        } else {
            maxLeftHeight = Math.max(maxLeftHeight, height[i - 1]);
            maxLeft[i] = maxLeftHeight;
        }
    }


    let maxRight = [];
    let maxRightHeight = 0;
    debugger;

    for (let i = height.length - 1; i >= 0; i--) {
        if (i == height.length - 1) {
            maxRightHeight = 0;
            maxRight[i] = 0;
        } else {
            maxRightHeight = Math.max(maxRightHeight, height[i + 1]);
            maxRight[i] = maxRightHeight;
        }
    }


    let minLeftRight = [];

    for (let i = 0; i < height.length; i++) {
        let min = Math.min(maxLeft[i], maxRight[i]);
        minLeftRight[i] = min;
    }

    let trappedWater = [];

    for (let i = 0; i < height.length; i++) {
        let waterTrappedCell = minLeftRight[i] - height[i];
        if (waterTrappedCell > 0) {
            trappedWater[i] = waterTrappedCell;
        } else {
            trappedWater[i] = 0;

        }
    }


    const totalWater = trappedWater.reduce((prev, curr) => prev + curr);
    return totalWater;

};


// algomap
var trap = function (height) {
    const n = height.length;
    const maxLeft = Array(n).fill(0);
    const maxRight = Array(n).fill(0);

    let lWall = 0, rWall = 0;

    for (let i = 0; i < n; i++) {
        const j = n - i - 1;
        maxLeft[i] = lWall;
        maxRight[j] = rWall;
        lWall = Math.max(lWall, height[i]);
        rWall = Math.max(rWall, height[j]);
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        const pot = Math.min(maxLeft[i], maxRight[i]);
        sum += Math.max(0, pot - height[i]);
    }

    return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6

// console.log(trap([4, 2, 0, 3, 2, 5])); // 9


// neetcode |  2 pointers
var trap = function (height) {
    if (!height || height.length === 0) {
        return 0;
    }

    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let res = 0;
    while (l < r) {
        if (leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            res += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }
    return res;
};

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