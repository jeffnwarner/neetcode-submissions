class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split(/[^a-zA-Z0-9]/).join("");
        s = s.toLowerCase();
        let start = 0;
        let end = s.length - 1;
        while (start <= end) {
            if (s[start] !== s[end]) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
