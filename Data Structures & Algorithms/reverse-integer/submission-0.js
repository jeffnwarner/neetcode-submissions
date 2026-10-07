class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;
        const isNegative = x < 0;
        x = Math.abs(x);
        while (x >= 1) {
            const digit = x % 10;
            x -= digit;
            x /= 10;
            result *= 10;
            result += digit;
        }

        if (isNegative) {
            result *= -1;
        }

        if (result >= Math.pow(2, 31) || result < Math.pow(-2, 31)) {
            return 0;
        } 
        return result;
    }
}
