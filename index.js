
var dailyTemperatures = function (temperatures) {
    let res = [];
    debugger;

    for (let i = 0; i < temperatures.length; i++) {
        let j = i + 1;
        let tempAtJ = temperatures[j];
        let days = 0;

        while (j < temperatures.length) {
            if (tempAtJ > temperatures[i]) {
                days++;
                break;
            } else {
                j++;
                days++;
            }

        }

        res[i] = days;
    }

    return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
//                              i   j