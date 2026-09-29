class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        if (s.length !== t.length) {
            return false;
        }
        
        for (let i = 0; i < s.length; i++) {
            let count = map.get(s[i]) ?? 0;
            count++;
            map.set(s[i], count);
        }

        for (let i = 0; i < t.length; i++) {
            let count = map.get(t[i]) ?? 0;
            if (count < 1) {
                return false;
            }
            count--;
            map.set(t[i], count);
        }

        return true;
    }
}
