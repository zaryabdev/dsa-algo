const groupAnagrams = function (strs) {
    debugger;
    let hashMap = new Map();
    let groupAnagrams = [];

    for (let i = 0; i < strs.length; i++) {
        let val = strs[i];
        if (hashMap.has(val)) {
            console.log(val);
        } else {
            let anagrams = new Set();

            for (let j = i + 1; j < strs.length; j++) {
                let isAnagram = checkAnagram(strs[i], strs[j]);
                debugger;
                if (isAnagram) {
                    if (!hashMap.has(strs[i])) {
                        hashMap.set(strs[i]);
                    }

                    if (!hashMap.has(strs[j])) {
                        hashMap.set(strs[j]);
                    }
                    anagrams.add(strs[i]);
                    anagrams.add(strs[j]);
                }
            }

            if (anagrams.size == 0) {
                anagrams.add(val);
            }

            groupAnagrams.push([...anagrams]);
        }
    }

    return groupAnagrams;
};

// console.log(groupAnagrams(["", ""]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//                        [["bat"],["nat","tan"],["ate","eat","tea"]]
