/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * O(N∗Log(N))
 */
var topKFrequent = function (nums, k) {
    let fc = {};
    for (const num of nums) {
        fc[num] = (fc[num] || 0) + 1;
    }

    let result = [];
    let i = 0;
    while (i < k) {
        let maxVlue = 0;
        let maxKey = undefined;
        for (const [key, value] of Object.entries(fc)) {
            if (value > maxVlue) {
                maxVlue = value;
                maxKey = key;
            }
        }
        result.push(parseInt(maxKey));
        delete fc[maxKey];
        i++;
    }

    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
