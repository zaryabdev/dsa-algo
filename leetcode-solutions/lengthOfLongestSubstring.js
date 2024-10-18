/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // let set = new Set();
    // let left = 0;
    // let right = 0;
    // let longestLength = 0;
    // debugger;
    // while (left < s.length) {
    //     let atRight = s[right];
    //     let atLeft = s[left];
    //     let length = right - left;
    //     longestLength = Math.max(length, longestLength);

    //     if (set.has(atRight)) {
    //         left++;
    //         set.delete(atLeft);
    //     } else {
    //         set.add(atRight);
    //         right++;
    //     }
    // }
    // return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring,
// "pwke" is a subsequence and not a substring.;
