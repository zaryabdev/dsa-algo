// Hashmap Solution:

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const indexMap = new Map();
    const result = new Set();
    const n = nums.length;

    // Build the index map
    for (let i = 0; i < n; i++) {
        indexMap.set(nums[i], i);
    }

    // Iterate over each pair
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const desired = -nums[i] - nums[j];
            if (
                indexMap.has(desired) &&
                indexMap.get(desired) !== i &&
                indexMap.get(desired) !== j
            ) {
                let triplet = [nums[i], nums[j], desired];

                triplet = triplet.sort((a, b) => a - b);

                result.add(triplet.toString());
            }
        }
    }

    const convertToArr = (str) => {
        console.log(str);
        let res = str.split(",").map(Number);
        console.log(res);
        return res;
    };

    const finalArray = Array.from(result, convertToArr);

    return finalArray;
};

function threeSum(nums) {
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], i);
    }

    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let expectedNum = -nums[i] + nums[j];
            if (
                hashMap.has(expectedNum) &&
                i !== hashMap.get(expectedNum) &&
                j !== hashMap.get(expectedNum)
            ) {
                let tuple = [expectedNum, nums[i], nums[j]];

                tuple = tuple.sort((a, b) => a - b);
                set.add(tuple.toString());
            }
        }
    }

    let result = Array.from(set, convertToArray);

    return result;
}

function convertToArray(str = "") {
    let arr = str.split(",");
    return arr.map(Number);
}

// Two Pointer Solution:
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let answer = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let lo = i + 1,
            hi = n - 1;
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (sum === 0) {
                answer.push([nums[i], nums[lo], nums[hi]]);
                lo++;
                hi--;
                while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
                while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
            } else if (sum < 0) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return answer;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
