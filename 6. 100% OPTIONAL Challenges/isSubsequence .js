// https://leetcode.com/problems/is-subsequence/description/

/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (j < str2.lengh) {

        if (str1[i] == str2[j]) {
            i++;
            j++;
        } else {
            j++;
        }
        if (i == str1.lengh) {
            return true;
        }
    }

    return false;
}

console.log(
    isSubsequence("abc", "ahbgdc")
);
console.log(
    isSubsequence("axc", "ahbgdc")
)

