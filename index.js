const compress = (s) => {



};


console.log(compress("ccaaatsss")); // 2c3at3s
// console.log(compress("ssssbbz")); // 4s2bz
// console.log(compress("ppoppppp")); // 2po5p
// console.log(compress("nnneeeeeeeeeeeezz")); // 3n12e2z
// console.log(compress("z")); // z
// console.log(compress("2z")); // zz

function isInteger(s) {
    let code = s.charCodeAt();
    if (code <= 57 && code >= 48) {
        return true;
    }
    return false;
}