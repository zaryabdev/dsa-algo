
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length > 0) {
            let [temp, index] = stack.pop();

            if (temp > temperatures[i]) {
                res[i] = index;
            }

        } else {
            stack.push([temperatures[i], i]);
        }
    }


    return res;

};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); //[1,1,4,2,1,1,0,0]
