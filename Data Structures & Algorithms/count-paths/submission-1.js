class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let paths = 0;
        const grid = new Array(m);
        for (let i = 0; i < m; i++) {
            grid[i] = new Array(n).fill(0);
        }

        const dfs = (row, col) => {
            if (grid[row][col]) {
                return grid[row][col];
            }

            let num = 0;
            let down = 0;
            let right = 0;
            if (row === m - 1 && col === n - 1) {
                paths++;
                return 1;
            }

            if (row + 1 < m) {
                down = dfs(row + 1, col);
            }

            if (col + 1 < n) {
                right = dfs(row, col + 1);
            }
            
            num = down + right;
            grid[row][col] = num;

            // console.log({row, col, down, right, num});
            return num;
        }

        return dfs(0, 0);
    }
}
