/**
 * @param {string} s
 * @param {string} c
 * @return {boolean}
 */

/*
traverse the string from front and back
skip non-alphanumeric chars and only compare lowercase
 return true if all match
return false if there's a mismatch
*/

var isAlphaNumeric = function (code) {
    return (
        (code > 47 && code < 58) || // numbers
        (code > 64 && code < 91) || // upperAlpha
        (code > 96 && code < 123)
    ); // lowerAlpha
};

var convertToLowerAlpha = function (code) {
    if ((code > 47 && code < 58) || (code > 96 && code < 123)) {
        return code;
    }
    if (code > 64 && code < 91) {
        return 97 + (code - 65); // return lowercase version
    }
};

// var isPalindrome = function (s) {
//     // s = s.toLowerCase();
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         while (left < right && !isAlphaNumeric(s.charCodeAt(left))) {
//             left++;
//         }
//         while (left < right && !isAlphaNumeric(s.charCodeAt(right))) {
//             right--;
//         }
//         // console.log("compare", s[left], s[right]);
//         if (
//             convertToLowerAlpha(s.charCodeAt(left)) !=
//             convertToLowerAlpha(s.charCodeAt(right))
//         ) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// };

var isPalindrome = function (s) {
    s = Array.from(s)
        .filter((x) => isAlphaNumeric(x))
        .map((x) => convertToLowerAlpha(x));
    // console.log(s);
    // console.log(String.fromCharCode(...s));
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // console.log(s[left], s[right]);
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

isPalindrome("Was it a car or a cat I saw?");
//            i                          j
