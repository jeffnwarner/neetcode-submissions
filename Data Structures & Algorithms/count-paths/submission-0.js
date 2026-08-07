class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let paths = 0;

        const dfs = (row, col) => {
            if (row === m - 1 && col === n - 1) {
                paths++;
                return;
            }

            if (row + 1 < m) {
                dfs(row + 1, col);
            }

            if (col + 1 < n) {
                dfs(row, col + 1);
            }
        }

        dfs(0, 0);

        return paths;
    }
}
