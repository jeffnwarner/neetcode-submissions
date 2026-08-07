class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const stringSet = new Set();
        let result = 0;
        let left = 0;

        for (let i = 0; i < s.length; i++) {
            console.log(i, s[i]);
            if (stringSet.has(s[i])) {
                if (i - left > result) {
                    result = i - left;
                }

                while (stringSet.has(s[i])) {
                    stringSet.delete(s[left]);
                    left++;
                    console.log(stringSet, left);
                }
            }

            stringSet.add(s[i]);
        }

        if (result < stringSet.size) {
            return stringSet.size;
        }

        return result;
    }
}
