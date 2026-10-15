class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        const map = new Map();
        let start = 0;
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                const newStart = map.get(s[i]) + 1;
                // console.log({start, newStart})
                if (start < newStart) {
                    start = map.get(s[i]) + 1;
                }
            }
            map.set(s[i], i);
            const currMax = i - start + 1;
            if (max < currMax) {
                max = currMax;
            }
        }

        return max;
    }
}
