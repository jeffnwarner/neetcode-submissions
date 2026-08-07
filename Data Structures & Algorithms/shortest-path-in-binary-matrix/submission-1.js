class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        let path = -1;
        const queue = [[0, 0, 1]];
        const numRows = grid.length;
        const numCols = grid[0].length;

        if (grid[0][0] === 1) {
            return path;
        }

        while (queue.length) {
            // console.log({queue});
            const [row, col, numVisits] = queue.shift();

            grid[row][col] = 1;
            if (row === numRows - 1 && col === numCols - 1) {
                path = numVisits;
                break;
            }

            if (row > 0 && !grid[row - 1][col]) {
                queue.push([row - 1, col, numVisits + 1]);
                grid[row - 1][col] = 1;
            }

            if (row < numRows - 1 && !grid[row + 1][col]) {
                queue.push([row + 1, col, numVisits + 1]);
                grid[row + 1][col] = 1;
            }

            if (col > 0 && !grid[row][col - 1]) {
                queue.push([row, col - 1, numVisits + 1]);
                grid[row][col - 1] = 1;
            } 

            if (col < numCols - 1 && !grid[row][col + 1]) {
                queue.push([row, col + 1, numVisits + 1]);
                grid[row][col + 1] = 1;
            }

            if (row > 0 && col > 0 && !grid[row - 1][col - 1]) {
                queue.push([row - 1, col - 1, numVisits + 1]);
                grid[row - 1][col - 1] = 1;
            }

            if (row < numRows - 1 && col > 0 && !grid[row + 1][col - 1]) {
                queue.push([row + 1, col - 1, numVisits + 1]);
                grid[row + 1][col - 1] = 1;
            }

            if (row > 0 && col < numCols - 1 && !grid[row - 1][col + 1]) {
                queue.push([row - 1, col + 1, numVisits + 1]);
                grid[row - 1][col + 1] = 1;
            }

            if (row < numRows - 1 && col < numCols - 1 && !grid[row + 1][col + 1]) {
                queue.push([row + 1, col + 1, numVisits + 1]);
                grid[row + 1][col + 1] = 1;
            }
        }

        return path;
    }
}
