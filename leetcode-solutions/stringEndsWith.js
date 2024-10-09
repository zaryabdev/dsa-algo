
function stringEndsWith(str, ending) {
    debugger;
    let lengthOfEnding = ending.length;
    if (str.lenght < lengthOfEnding) return false;

    let spliceFrom = str.length - lengthOfEnding;
    let endOfFirstString = str.slice(spliceFrom);

    return ending == endOfFirstString ? true : false;
}

function stringEndsWith(str, ending) {
    return ending == str.slice(str.length - ending.length);
}



console.log(stringEndsWith('abc', 'bc')); // true
// console.log(stringEndsWith('abc', 'd')); // false

