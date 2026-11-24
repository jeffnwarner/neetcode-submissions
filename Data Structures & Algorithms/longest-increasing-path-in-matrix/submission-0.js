class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const visited = new Map();

        const dfs = (row, col, previous) => {
            if (row < 0 || col < 0 || row === matrix.length || col === matrix[0].length) {
                return 0;
            }

            if (visited.has(`${row} ${col} ${previous}`)) {
                return visited.get(`${row} ${col} ${previous}`);
            }

            if (previous >= matrix[row][col]) {
                return 0;
            }

            const up = dfs(row - 1, col, matrix[row][col]);
            const down = dfs(row + 1, col, matrix[row][col]);
            const left = dfs(row, col - 1, matrix[row][col]);
            const right = dfs(row, col + 1, matrix[row][col]);

            const result = 1 + Math.max(up, down, left, right);

            visited.set(`${row} ${col} ${previous}`, result)

            return result;
        }

        let max = -1;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                const path = dfs(i, j, -1);
                if (max < path) {
                    max = path;
                }
            }
        }

        return max;
    }
}
