class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];

        const used = new Array(strs.length).fill(0);

        for (let i = 0; i < strs.length; i++) {
            if (used[i]) {
                continue;
            }
            const subset = [strs[i]];
            used[i] = 1;
            
            for (let j = i + 1; j < strs.length; j++) {
                if (used[j] || strs[i].length !== strs[j].length) {
                    continue;
                }
                const map = new Map(); 
                for (let k = 0; k < strs[i].length; k++) {
                    let count = map.get(strs[i][k]) ?? 0;
                    count++;
                    map.set(strs[i][k], count);
                }
                let isAnagram = true;
                for (let k = 0; k < strs[j].length; k++) {
                    let count = map.get(strs[j][k]);
                    if (!map.has(strs[j][k]) || count < 1) {
                        isAnagram = false;
                        break;
                    }
                    count--;
                    map.set(strs[j][k], count);
                }
                // console.log(map, isAnagram);
                if (isAnagram) {
                    subset.push(strs[j]);
                    used[j] = 1;
                }
            }
            result.push(subset);
        }

        return result;
    }
}
