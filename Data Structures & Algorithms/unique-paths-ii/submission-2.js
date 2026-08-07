class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const numRows = grid.length;
        const numCols = grid[0].length;

        const dfs = (row, col) => {
            if (grid[row][col] === 1) {
                return 0;
            }

            if (row === numRows - 1 && col === numCols - 1) {
                return -1;
            }

            if (grid[row][col] < 0) {
                return grid[row][col];
            }

            let down = 0;
            let right = 0;
            if (row < numRows - 1 && grid[row + 1][col] !== 1) {
                down = dfs(row + 1, col);
            }

            if (col < numCols - 1 && grid[row][col + 1] !== 1) {
                right = dfs(row, col + 1);
            }
            let path = down + right;
            grid[row][col] = path;
            console.log({row, col, path});
            return path;
        }
        let result = dfs(0, 0);
        result = result < 0 ? (-1 * result) : 0;

        return result;
    }
}
