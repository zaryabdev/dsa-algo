/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;
    while (left < height.length && left !== right) {
        let containerWidth = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let thisArea = containerWidth * minHeight;
        maxArea = Math.max(maxArea, thisArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }
    return maxArea;
};


console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6])); // 36
//                   i                    j
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

