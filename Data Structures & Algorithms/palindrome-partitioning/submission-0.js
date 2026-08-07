class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];

        function dp(i, arr) {
            if (i === s.length) {
                result.push([...arr]);
                return;
            }

            for (let j = i; j < s.length; j++) {
                if (checkPalindrome(i, j)) {
                    arr.push(s.substring(i, j + 1));
                    dp(j + 1, [...arr]);
                    arr.pop();
                }
            }
        }

        function checkPalindrome(start, end) {
            while (start < end) {
                if (s[start] !== s[end]) {
                    return false;
                }
                start++;
                end--;
            }

            return true;
        }

        dp(0, []);

        return result;
    }
}
