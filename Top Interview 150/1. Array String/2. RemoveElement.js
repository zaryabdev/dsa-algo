// Source : https://leetcode.com/problems/remove-element
/***************************************************************************************
 *
 * Given an array and a value, remove all instances of that value in place and return
 * the new length.
 *
 * Do not allocate extra space for another array, you must do this in place with
 * constant memory.
 *
 * The order of elements can be changed. It doesn't matter what you leave beyond the
 * new length.
 *
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 *
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */



// First try | 0(n), O(
var removeElement = function (nums, val) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) {
        if (nums[0] != val) return 1;
        return 0;
    }

    let left = 0, right = nums.length - 1;

    while (left != right && left < nums.length) {
        if (nums[left] == val) {
            const rightVal = nums[right];
            nums[right] = nums[left];
            nums[left] = rightVal;
            right--;
        } else {
            left++;
        }

    }


    if (left == nums.length) return;

    let k = 0;
    while (nums[k] != val) {
        k++;
    }
    return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 2, [0,1,4,0,3,_,_,_]
console.log(removeElement([3, 2, 2, 3], 3)); // 2, [2,2,_,_]
console.log(removeElement([], 0)); // 2, [2,2,_,_]
console.log(removeElement([3], 2)); // 2, [2,2,_,_]

