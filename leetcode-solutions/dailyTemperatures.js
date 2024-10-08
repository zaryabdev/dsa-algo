
// neetcode
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = []; // pair: [temp, index]

    for (let index = 0; index < temperatures.length; index++) {
        const thisTemp = temperatures[index];

        while (stack.length > 0 && thisTemp > stack[stack.length - 1][0]) {
            let [_, thisIndex] = stack.pop();
            res[thisIndex] = index - thisIndex;
        }
        stack.push([thisTemp, index]);
    }
    return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); //[1,1,4,2,1,1,0,0]
