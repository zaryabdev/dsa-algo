/**
 * @param {number[]} nums
 * @return {string[]}
 * Return the smallest sorted list of ranges that cover all the numbers
 *  in the array exactly. That is, each element of nums is covered by
 * exactly one of the ranges, and there is no integer x such that x
 * is in one of the ranges but not in nums.
 */
var summaryRanges = function (nums) {
    let ans = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];


    }

    return ans;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
//                         i  j
console.log(
    summaryRanges(
        [0, 1, 2, 4, 5, 7]
    )
); // ["0->2","4->5","7"]

