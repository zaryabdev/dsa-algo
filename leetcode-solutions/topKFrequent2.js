/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * O(N)
 */
const topKFrequent = function (nums, k) {
    let hashMap = {};
    let freqCount = Array.from({ length: nums.length + 1 }, () => []);
    let result = [];

    for (const num of nums) {
        hashMap[num] = (hashMap[num] || 0) + 1;
    }

    for (const key in hashMap) {
        const value = hashMap[key];
        freqCount[value].push(parseInt(key));
    }

    for (let i = nums.length; i > 0; i--) {
        for (const value of freqCount[i]) {
            result.push(value);

            if (result.length == k) {
                return result;
            }
        }
    }
};

console.log(topKFrequent([10, 10, 10, 20, 20, 20, 30, 30, 40], 2));
