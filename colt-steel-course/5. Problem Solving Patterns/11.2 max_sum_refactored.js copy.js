function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {

    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;


}
console.log(
  //                       i
  maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
);