class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);
            const str = strs[i];
            for (let j = 0; j < str.length; j++) {
                count[str.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
            const joined = count.join(',');
            let subset = map.get(joined) ?? [];
            subset.push(str);
            map.set(joined, subset);
        }
        map.forEach((value, key) => {
            result.push(value);
        })

        return result;
    }
}