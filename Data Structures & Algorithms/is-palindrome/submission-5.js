class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let newS = '';
        const a = 'a'.charCodeAt(0);
        const z = 'z'.charCodeAt(0);
        const zero = '0'.charCodeAt(0);
        const nine = '9'.charCodeAt(0);
        for (let i = 0; i < s.length; i++) {
            const charCode = s.charCodeAt(i);
            if (charCode >= a && charCode <= z) {
                newS = `${newS}${s[i]}`;
            }

            if (charCode >= zero && charCode <= nine) {
                newS = `${newS}${s[i]}`;
            }
        }
        let start = 0;
        let end = newS.length - 1;

        while (start <= end) {
            if (newS[start] !== newS[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
