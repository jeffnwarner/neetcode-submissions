class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return "";
        }

        let result = '';
        const tMap = new Map();
        const sMap = new Map();
        let matches = 0;
        let numTLetters = 0;
        for (let i = 0; i < t.length; i++) {
            let tCount = tMap.get(t[i]) ?? 0;
            tCount++;
            tMap.set(t[i], tCount);
            if (tCount === 1) {
                numTLetters++;
            }
        }

        for (let i = 0; i < t.length; i++) {
            let sCount = sMap.get(s[i]) ?? 0;
            sCount++;
            sMap.set(s[i], sCount);

            if (tMap.get(s[i]) === sMap.get(s[i])) {
                matches++;
            }
        }

        if (matches === numTLetters) {
            result = s.substring(0, t.length);
        }
        // console.log(matches, s.substring(0, t.length))

        let left = 0;
        for (let i = t.length; i < s.length; i++) {

            let sCount = sMap.get(s[i]) ?? 0;
            sCount++;
            sMap.set(s[i], sCount);
            if (tMap.has(s[i]) && tMap.get(s[i]) === sCount) {
                matches++;
            }
            // console.log({matches}, s[i]);
            while (matches === numTLetters) {
                let substr = s.substring(left, i + 1);
                // console.log({result, substr})
                if (!result || substr.length < result.length) {
                    result = substr;
                }
                let leftCount = sMap.get(s[left]);
                // console.log({leftCount});
                leftCount--;
                sMap.set(s[left], leftCount);
                // console.log({left, i, matches, s: s[left]});
                // console.log(tMap.has(s[left]), tMap.get(s[left]), leftCount, tMap.get(s[left]) > leftCount);
                if (tMap.has(s[left]) && tMap.get(s[left]) > leftCount) {
                    matches--;
                }
                left++;
            }
        }

        // console.log({result, left});
        return result;
    }
}
