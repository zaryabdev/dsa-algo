/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let longest = 0;

    numSet.forEach((num, idx) => {
        if (!numSet.has(num - 1)) {
            let length = 0;
            while (numSet.has(num + length)) {
                length += 1;
            }
            longest = Math.max(length, longest);
        }
    });

    return longest;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7
