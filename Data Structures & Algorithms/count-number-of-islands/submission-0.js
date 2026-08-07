class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let result = 0;

        const numRows = grid.length;
        const numCols = grid[0].length;

        const dfs = (row, col) => {
            if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
                return;
            }
            
            if (grid[row][col] === "0") {
                return;
            }

            grid[row][col] = "0";
            dfs(row + 1, col); // down
            dfs(row, col + 1); // right
            dfs(row - 1, col); // up
            dfs(row, col - 1); // left
        } 

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    result++;
                    dfs(i, j)
                }
            }
        }

        return result;
    }
}
