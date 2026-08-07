class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let currentArea = 0;

        const numRows = grid.length;
        const numCols = grid[0].length;

        const dfs = (row, col) => {
            if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
                return;
            }

            if (grid[row][col] === 0) {
                return;
            }

            grid[row][col] = 0;
            currentArea++; 
            dfs(row - 1, col);
            dfs(row + 1, col);
            dfs(row, col - 1);
            dfs(row, col + 1);
        }

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                if (grid[i][j] === 1) {
                    dfs(i, j);
                    if (currentArea > maxArea) {
                        maxArea = currentArea;
                    }
                    currentArea = 0;
                }
            }
        }

        return maxArea;
    }
}
