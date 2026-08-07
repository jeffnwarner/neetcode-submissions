class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = [];

        const generator = (leftNum, rightNum, string) => {
            if (leftNum > 0) {
                generator(leftNum - 1, rightNum, `${string}(`);
            } 

            if (rightNum > leftNum) {
                generator(leftNum, rightNum - 1, `${string})`);
            }

            if (leftNum === 0 && rightNum === 0) {
                results.push(string);
            }
        }

        generator(n, n, '');

        return results;
    }
}
