function maxSubarraySum(arr, num) {

  if (arr.length == 0) return 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum = sum + arr[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;

}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
//               i

