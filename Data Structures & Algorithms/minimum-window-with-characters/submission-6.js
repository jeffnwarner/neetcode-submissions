class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s === t) {
            return s;
        }

        const sMap = new Map();
        const tMap = new Map();
        const deleteQueue = [];
        let start = null;
        let currStart = null
        let matches = 0;
        let maxMatches = false;
        let end = null;
        let currEnd = null;

        for (let i = 0; i < t.length; i++) {
            let count = tMap.get(t[i]) ?? 0;
            count++;
            tMap.set(t[i], count);
        }

        let j = 0;
        for (let i = 0; i < s.length; i++) {
            if (tMap.has(s[i])) {
                let count = sMap.get(s[i]) ?? 0;
                count++;
                sMap.set(s[i], count);
                if (count === tMap.get(s[i])) {
                    matches++;
                }
                deleteQueue.push(i);
            }
            while (matches === tMap.size) {
                maxMatches = true;
                currStart = deleteQueue[j];
                currEnd = deleteQueue[deleteQueue.length - 1];
                if (start !== null && end !== null && currEnd - currStart < end - start) {
                    start = currStart;
                    end = currEnd;
                } else if (start === null && end === null) {
                    start = currStart;
                    end = currEnd;
                }
                console.log({currStart, start, currEnd, end, j, matches}, currEnd - currStart, end - start);
                let sCount = sMap.get(s[currStart]);
                sCount--;
                sMap.set(s[currStart], sCount);
                let tCount = tMap.get(s[currStart]);
                console.log({sCount, tCount});
                if (sCount + 1 === tCount) {
                    matches--;
                }
                j++;
            }
        }
        
        if (!maxMatches) {
            return '';
        }

        return s.substring(start, end + 1);
    }
}
