class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map();
        const s2Map = new Map();
        let start = 0;
        let matches = 0;
        for (let i = 0; i < s1.length; i++) {
            let count = 0;
            if (s1Map.has(s1[i])) {
                count = s1Map.get(s1[i]);
            }
            count++;
            s1Map.set(s1[i], count);
        }

        for (let i = 0; i < s2.length; i++) {
            let count = 0;
            if (s2Map.has(s2[i])) {
                count = s2Map.get(s2[i]);
            }
            count++;
            s2Map.set(s2[i], count);
            if (s2Map.get(s2[i]) === s1Map.get(s2[i])) {
                matches++;
            } else if (s2Map.get(s2[i]) === s1Map.get(s2[i]) + 1) {
                matches--;
            } 


            if (i - start  + 1 > s1.length) {
                let reduce = s2Map.get(s2[start]);
                reduce--;
                s2Map.set(s2[start], reduce);
                if (s2Map.get(s2[start]) === s1Map.get(s2[start])) {
                    matches++;
                } else if (s2Map.get(s2[start]) === s1Map.get(s2[start]) - 1) {
                    matches--;
                }

                start++;
            }
            console.log({matches}, s1Map.size, s2[i])

            if (matches === s1Map.size) {
                return true;
            }
        }

        return false;
    }
}
