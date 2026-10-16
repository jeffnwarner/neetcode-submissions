class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        const s1Map = new Map();
        let s2Map = new Map();

        for (let i = 0; i < s1.length; i++) {
            let count = s1Map.get(s1[i]) ?? 0;
            count++;
            s1Map.set(s1[i], count);
        }

        for (let i = 0; i < s2.length; i++) {
            let s2Count = s2Map.get(s2[i]) ?? {count: 0, index: i};
            s2Count.count++;
            const s1Count = s1Map.get(s2[i]) ?? 0;
            s2Map.set(s2[i], s2Count);
            while (s1Count < s2Count.count) {
                // console.log({i, left, s1Count, s2Count, si: s2[i]});
                let leftCount = s2Map.get(s2[left]);

                leftCount.count--;
                s2Map.set(leftCount);
                s2Count = s2Map.get(s2[i]);
                left++;
            }

            if (i - left + 1 === s1.length) {
                // console.log({i, left})
                return true;
            }

        }

        return false;
    }
}
