const reverseString = (str) => {
    if (str.length == 0) return "";
    return reverseString(str.slice(1)) + str[0];
};

console.log(reverseString("zaryab")); // => bayraz
// '' > b > ba > bay > bayr > bayra > bayraz