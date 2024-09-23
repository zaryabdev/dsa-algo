/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 *
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order
 * starting with word1. If a string is longer than the other, append the additional letters
 * onto the end of the merged string.
 * Return the merged string.
 * https://leetcode.com/problems/merge-strings-alternately/description/
 */
var mergeAlternately = function (word1, word2) {
    debugger;
    let length = word1.length > word2.length ? word1.length : word2.length;
    let str = "";

    for (let i = 0; i < length; i++) {
        if (word1[i]) {
            str += word1[i];
        }
        if (word2[i]) {
            str += word2[i];
        }
    }
    return str;
};

console.log(
    mergeAlternately("abc", "xyzlmnop")
    //                   i
);
