function isSubsequence(str1, str2) {
    debugger;
    if (str1.length === 0) return true;

    if (str2.length === 0) return false;


    if (str2[0] === str1[0]) {

        let aplice1 = str1.slice(1);
        let aplice2 = str2.slice(1);
        debugger;
        return isSubsequence(aplice1, aplice2);
    }


    let aplice1 = str2.slice(1);

    return isSubsequence(str1, aplice1);
}

console.log(
    isSubsequence("abc", "ahbgdc")
);
// console.log(
//     isSubsequence("axc", "ahbgdc")
// )

