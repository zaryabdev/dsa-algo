function maxSubarraySum(arr, length) {
    if (arr.length == 0) return null;
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < length; i++) {
        const element = arr[i];
        currentSum += element;
    }

    maxSum = currentSum;

    let i = 1;
    let j = i + length - 1;
    while (i < arr.length - length && j < arr.length) {
        currentSum = currentSum - arr[i - 1] + arr[j];
        maxSum = Math.max(currentSum, maxSum);
        i++;
        j++;
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
//                             i        j
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
