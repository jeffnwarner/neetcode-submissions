class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const grid = new Array(n).fill().map(() => new Array(n).fill('.'));
        const result = [];

        function dp(index) {
            if (index >= n) {
                const gridCopy = [];
                for (let i = 0; i < n; i++) {
                    gridCopy.push(grid[i].join(''));
                }
                result.push(gridCopy);
                return;
            }
            // console.log({index, grid});
            for (let j = 0; j < grid[index].length; j++) {
                if (checkQueens(index - 1, j)) {
                    grid[index][j] = 'Q';
                    dp(index + 1);
                    grid[index][j] = '.';
                }
            }
        }

        function checkQueens(i, j) {
            let steps = 1;
            while (i >= 0) {
                if (grid[i][j] === 'Q') {
                    return false;
                } else if (j - steps >= 0 && grid[i][j - steps] === 'Q') {
                    return false;
                } else if (j + steps < n && grid[i][j + steps] === 'Q') {
                    return false;
                } 
                i--;
                steps++;
            }

            return true;
        }

        dp(0);

        return result;
    }
}
