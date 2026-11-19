class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
       let result = 0;

       let queue = [];
       let insert = [];

       const bfs = (row, col) => {
            if (grid[row][col] === '0') {
                return;
            }

            result++;

            queue.push([row, col])

            while (queue.length > 0) {
                const [nextRow, nextCol] = queue.pop();

                if (nextRow >= 0 && nextRow < grid.length 
                    && nextCol >= 0 && nextCol < grid[0].length 
                    && grid[nextRow][nextCol] === '1') {
                        grid[nextRow][nextCol] = '0';
                        insert.push([nextRow - 1, nextCol]);
                        insert.push([nextRow + 1, nextCol]);
                        insert.push([nextRow, nextCol - 1]);
                        insert.push([nextRow, nextCol + 1]);
                }

                if (queue.length === 0) {
                    queue = insert;
                    insert = [];
                }
            }
       }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                bfs(i, j);
            }
        }

        return result;
    }
}
