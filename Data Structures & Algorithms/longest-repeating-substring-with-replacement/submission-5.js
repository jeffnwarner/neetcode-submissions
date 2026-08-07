class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let result = 0;
        let start = 0;
        let maxFreq = 0;

        for (let i = 0; i < s.length; i++) {
            let letterCount = 0;
            if (map.has(s[i])) {
                letterCount = map.get(s[i]);
            } 

            letterCount++;
            map.set(s[i], letterCount);
            if (maxFreq < letterCount) {
                maxFreq = letterCount;
            }

            while (i - start + 1 - maxFreq > k) {
                let reduce = map.get(s[start]);
                reduce--;
                map.set(s[start], reduce);
                start++;
            }

            let current = i - start + 1;
            if (result < current) {
                result = current;
            }
        } 

        return result;
    }
}
