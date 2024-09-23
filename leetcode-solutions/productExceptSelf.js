/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    debugger;
    let result = [];
    let prefix = [];
    let postfix = [];

    for (let i = 0; i < nums.length; i++) {
        if (prefix.length == 0) {
            prefix[i] = nums[i];
        } else {
            prefix[i] = prefix[i - 1] * nums[i];
        }
    }
    debugger;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (postfix.length == 0) {
            postfix[i] = nums[i];
        } else {
            postfix[i] = postfix[i + 1] * nums[i];
        }
    }

    debugger;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let prefixValue = i == 0 ? 1 : prefix[i - 1];
        let postfixValue = i == nums.length - 1 ? 1 : postfix[i + 1];

        result[i] = prefixValue * postfixValue;
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 0, 1, 2, 3]));
//                          [0,-6,0,0,0]
