/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    debugger;
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        }

        if (numbers[left] + numbers[right] == target) {
            return [left + 1, right + 1];
        }
    }
};

console.log(twoSum([1, 2, 3, 4], 6));
