
function threeSum(nums) {
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], i);
    }

    let set = new Set();
    debugger;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let expectedNum = -nums[i] - nums[j];
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

    function convertToArray(str = "") {
        let arr = str.split(",");
        return arr.map(Number);
    }

    let result = Array.from(set, convertToArray);

    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]

