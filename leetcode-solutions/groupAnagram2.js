const groupAnagrams = function (strs) {
    const ans = {};
    for (const str of strs) {
        const count = Array(26).fill(0);
        for (const c of str) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        const key = count.join("_");
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(str);
    }
    return Object.values(ans);
};

console.log(groupAnagrams(["", ""]));
//                        [["bat"],["nat","tan"],["ate","eat","tea"]]
