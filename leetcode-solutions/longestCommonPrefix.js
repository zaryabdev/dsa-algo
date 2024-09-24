/**
 * @param {string[]} strs
 * @return {string}
 * Write a function to find the longest common prefix string
 * amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";
    let minStrLength = Infinity;
    strs.forEach(str => minStrLength = Math.min(minStrLength, str.length));
    let i = 0;
    let firstStr = strs[0];
    while (i < minStrLength) {
        for (const str of strs) {
            if (firstStr[i] !== str[i]) {
                return firstStr.substring(0, i);
            }
        }
        i++;
    }
    return firstStr.substring(0, minStrLength);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
// console.log(longestCommonPrefix(["a", "ac"])); // "a"
