/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative
 * positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde"
 * while "aec" is not).
 */

var isSubsequence = function (s, t) {
    let i = 0, j = 0;

    while (j < t.length) {
        if (s[i] == t[j]) {
            i++;
        } else {

        }
        j++;
    }

    return i == s.length ? true : false;

};

console.log(isSubsequence("abc", "ahbgdc"));
//                           i       j
