class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        const digits = [];
        if (x < 0) {
            return false;
        }
        while (x >= 1) {
            const digit = x % 10;
            x -= digit;
            x /= 10;
            digits.push(digit);
        }

        console.log(digits);

        for (let i = 0; i < digits.length/2; i++) {
            if (digits[i] !== digits[digits.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}
