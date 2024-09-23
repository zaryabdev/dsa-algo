/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    debugger;
    const result = [];
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }
    debugger;

    for (let i = nums.length; i >= 0; i--) {
        postfix = postfix * nums[i];
        result[i] = result[i] * postfix;
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
//                          [0,-6,0,0,0]
