class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const t9 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
        const result = [];
        const combination = [];

        if (!digits) {
            return result;
        }

        const combine = (i) => {
            if (combination.length >= digits.length) {
                result.push(combination.join(''));
                return;
            }
            
            const letters = t9[parseInt(digits[i]) - 2];
            for (let j = 0; j < letters.length; j++) {
                combination.push(letters[j]);
                combine(i + 1);
                combination.pop();
            }
        }

        combine(0);

        return result;
    }
}
