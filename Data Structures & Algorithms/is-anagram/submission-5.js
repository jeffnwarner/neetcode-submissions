class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], 1);
            } else {
                let count = map.get(s[i]);
                count++;
                map.set(s[i], count);
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!map.has(t[i])) {
                return false;
            } else {
                let count = map.get(t[i]);
                if (count < 1) {
                    return false;
                }
                count--;
                map.set(t[i], count);
            }
        }
        return true;
    }
}
