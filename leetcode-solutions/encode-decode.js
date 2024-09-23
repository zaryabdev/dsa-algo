function encode(strs) {
    let result = "";
    for (const word of strs) {
        result += `${word.length}$${word}`;
    }

    return result;
}

// https://neetcode.io/problems/string-encode-and-decode

function decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
        let j = i;
        while (str[j] !== "$") {
            j++;
        }
        let length = parseInt(str.substring(i, j), 10);

        i = j + 1; // skip $ sign
        j = length + i; // since substring is exclusive of 2nd parameter we added + 1
        let part = str.substring(i, j);
        result.push(part);
        i = j;
    }

    return result;
}

console.log(encode(["i am new here && WOW!!", "makes", ":", "waste"]));
console.log(decode(encode(["i am new here && WOW!!", "makes", ":", "waste"])));
