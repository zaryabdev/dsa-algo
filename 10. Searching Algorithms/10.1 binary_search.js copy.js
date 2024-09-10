const search = function (nums, target) {
    debugger;
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((right + left) / 2);

    while (left <= right && nums[mid] != target) {
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((right + left) / 2);

        if (nums[mid] == target) return mid;
    }

    if (nums[mid] == target) return mid;

    return -1;
};

console.log(search([-1, 0, 2, 3, 4, 6, 8], 0));
//                   i        m        j
