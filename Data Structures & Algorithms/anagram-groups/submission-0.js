class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const sorted = [];
        for (let i = 0; i < strs.length; i++) {
           sorted.push(strs[i].split('').sort().join(''));
        }
        
        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            if (map.has(sorted[i])) {
                const anagrams = map.get(sorted[i]);
                anagrams.push(strs[i]);
                map.set(sorted[i], anagrams);
            } else {
                map.set(sorted[i], [strs[i]]);
            }
        }
        map.forEach((value) => result.push(value));
        return result;
    }
}
