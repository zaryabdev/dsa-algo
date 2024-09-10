/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = [];
    let total = 0;

    for (const num of nums) {
        total += num;
        prefix.push(total);
    }

    debugger;
};

console.log(productExceptSelf([1, 2, 5, 10]));
//                          [100,50,20, 10]
