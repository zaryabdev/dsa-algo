/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    debugger;
    if (nums.length == 0) return 0;

    let closestPos = undefined;
    let closestNeg = undefined;

    for (const num of nums) {
        if (num == 0) {
            return 0;
        }

        if (num > 0) {
            if (!closestPos) {
                closestPos = num;
            } else {
                closestPos = num < closestPos ? num : closestPos;

            }
        }

        if (num < 0) {
            if (!closestNeg) {
                closestNeg = num;
            } else {
                closestNeg = num > closestNeg ? num : closestNeg;

            }
        }

    }


    if (closestPos && closestNeg) {
        if (closestPos == Math.abs(closestNeg)) return closestPos;
        return closestPos < Math.abs(closestNeg) ? closestPos : closestNeg;
    }

    if (!closestPos) return closestNeg;
    if (!closestNeg) return closestPos;

    debugger;


};

console.log(
    findClosestNumber([-4, -2, 1, 4, 8])
);
console.log(
    findClosestNumber([2, -1, 1])
);
