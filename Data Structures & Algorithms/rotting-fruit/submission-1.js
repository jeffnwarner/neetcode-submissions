class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let result = -1;
        let numBananas = 0;
        const numRows = grid.length;
        const numCols = grid[0].length;
        const queue = [];
        const positions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j, 0]);
                }

                if (grid[i][j] === 1) {
                    numBananas++;
                }
            }
        }

        if (numBananas === 0) {
            return 0;
        }

        while (queue.length) {
            // console.log({queue});
            const [row, col, minutes] = queue.shift();

            if (minutes > result) {
                result = minutes;
            }

            positions.forEach((position) => {
                const [pr, pc] = position;
                const newR = row + pr;
                const newC = col + pc;

                if (newR >= 0 && newR < numRows && newC >= 0 && newC < numCols) {
                    if (grid[newR][newC] === 1) {
                        grid[newR][newC] = 2;
                        numBananas--;
                        queue.push([newR, newC, minutes + 1]);
                    }
                }
            })
        }

        if (numBananas > 0) {
            return -1;
        }
        return result;
    }
}
