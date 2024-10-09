
//https://medium.com/algorithms-digest/largest-rectangle-in-histogram-234004ecd15a

var largestRectangleArea = function (heights) {
    let length = heights.length;
    let maxArea = new Array(length).fill(0);

    debugger;
    for (let i = 0; i < length; i++) {
        const thisHeight = heights[i];

        let leftBars = i;
        let leftMinIndex = i;
        let leftMinHeight = thisHeight;

        let rightBars = length - (i + 1);
        let rightMinIndex = i;
        let rightMinHeight = thisHeight;
        debugger;
        for (let j = leftBars; j > 0; j--) {
            if (heights[j] < leftMinHeight) {
                leftMinIndex = j;
                break;
            } else {
                leftMinIndex--;
            }
        }

        for (let j = i + 1; j < rightBars; j++) {
            if (heights[j] < rightMinHeight) {
                rightMinIndex = j;
                break;
            } else {
                rightMinIndex++;
            }
        }
        debugger;
    }
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10




// chatgpt o n*2
function largestRectangleArea(heights) {
    let maxArea = 0;
    const n = heights.length;

    for (let i = 0; i < n; i++) {
        let minHeight = heights[i];
        for (let j = i; j < n; j++) {
            minHeight = Math.min(minHeight, heights[j]);
            const area = minHeight * (j - i + 1);
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
}
