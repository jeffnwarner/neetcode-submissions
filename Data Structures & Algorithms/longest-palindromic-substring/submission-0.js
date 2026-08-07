class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = '';

        function check(start, end) {
            let currMax = '';

            while (start >= 0 && end < s.length) {
                if (s[start] === s[end]) {
                    currMax = s.substring(start, end + 1);
                } else {
                    break;
                }
                start--;
                end++;
            }
            if (currMax.length > result.length) {
                result = currMax;
            }
        }
        for (let i = 0; i < s.length; i++) {
            check(i, i);
        }

        for (let i = 0; i < s.length; i++) {
            check(i, i + 1);
        }

        return result;
    }
}
