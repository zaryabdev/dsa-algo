/***
 * https://www.structy.net/problems/compress
 * Write a function, compress, that takes in a string as an argument.
 * The function should return a compressed version of the string where
 * consecutive occurrences of the same characters are compressed into the
 * number of occurrences followed by the character. Single character
 * occurrences should not be changed.
 */

const compress = (s) => {
    let i = 0, j = 0;
    let res = [];
    while (i < s.length) {
        if (s[i] == s[j]) {
            j++;
        } else {
            if (j - i == 1) {
                res.push(s[i]);
            } else {
                res.push(j - i, s[i]);
            }
            i = j;
        }
    }
    return res.join("");
};


console.log(compress("ccaaatsss")); // 2c3at3s
console.log(compress("ssssbbz")); // 4s2bz
console.log(compress("ppoppppp")); // 2po5p
console.log(compress("nnneeeeeeeeeeeezz")); // 3n12e2z
console.log(compress("z")); // z
console.log(compress("2z")); // zz
