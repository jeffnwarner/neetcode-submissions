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
        const map = {};

        for (let i = 0; i < s.length; i++) {
            if (map[s[i]]) {
                map[s[i]]++;
            } else {
                map[s[i]] = 1;
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (map[t[i]] > 0) {
                map[t[i]]--;
            } else {
                return false;
            }
        }

        return true;
    }
}
