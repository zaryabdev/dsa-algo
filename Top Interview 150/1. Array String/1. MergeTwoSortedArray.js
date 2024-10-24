// Source : https://oj.leetcode.com/problems/merge-sorted-array/

/**********************************************************************************
 *
 * Given two sorted integer arrays A and B, merge B into A as one sorted array.
 *
 * Note:
 *   You may assume that A has enough space (size that is greater or equal to m + n)
 *   to hold additional elements from B. The number of elements initialized in A and B
 *   are m and n respectively.
 *
 **********************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// Greg Hogg | O(m+n), O(1)
var mergeSortedArray = function (nums1, m, nums2, n) {
    let x = m - 1;
    let y = n - 1;
    let z = m + n - 1;

    while (z >= 0) {
        if (x < 0) {
            nums1[z] = nums2[y];
            y--;
        } else if (y < 0) {
            break;
        } else if (nums1[x] > nums2[y]) {
            nums1[z] = nums1[x];
            x--;
        } else {
            nums1[z] = nums2[y];
            y--;
        }
        z--;
    }
};


// neetcode | O (m + n) | O(1)
// var mergeSortedArray = function (nums1, m, nums2, n) {
//     let k = m + n - 1;
//     m -= 1;
//     n -= 1;

//     while (m >= 0 && n >= 0) {
//         if (nums1[m] > nums2[n]) {
//             nums1[k] = nums1[m];
//             m--;
//         } else {
//             nums1[k] = nums2[n];
//             n--;
//         }
//         k--;
//     }

//     while (n >= 0) {
//         nums1[n] = nums2[n];
//         n--;
//     }
// };

// Dean Sai | similar to neetcode
// var mergeSortedArray = function (nums1, m, nums2, n) {
//     let i = m - 1;      // num1 pointer | compare
//     let j = n - 1;      // num2 pointer | compare
//     let k = m + n - 1;  // num1 pointer | replace

//     while (i >= 0 && j >= 0) {
//         nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
//     }

//     while (j >= 0) {
//         nums1[k--] = nums2[j--];
//     }
// };

// Test case
var m = [4, 5, 6, 0, 0, 0];
//             x        z
var n = [1, 2, 3];
//             y
mergeSortedArray(m, 3, n, 3);

console.log(m.toString() === '1,2,3,4,5,6'); // true
console.log(
    mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);