class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        const dfs = (left, right, string) => {
            if (left === n && right === n) {
                result.push(string);
                return;
            }

            if (left < n) {
                dfs(left + 1, right, `${string}(`)
            }

            if (right < n && left > right) {
                dfs(left, right + 1, `${string})`);
            }

            return;
        }

        dfs(0, 0, '');

        return result;
    }
}
