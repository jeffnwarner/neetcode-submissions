class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set();

        const dfs = (row, col, letterIndex) => {
            if (letterIndex === word.length) {
                return true;
            }
            if (row < 0 || row >= board.length || col < 0 || col >= board[0].length
                || visited.has(`${row} ${col}`) || board[row][col] !== word[letterIndex]) {
                return false;
            }

            visited.add(`${row} ${col}`)

            const up = dfs(row - 1, col, letterIndex + 1);
            const down = dfs(row + 1, col, letterIndex + 1);
            const left = dfs(row, col - 1, letterIndex + 1);
            const right = dfs(row, col + 1, letterIndex + 1);

            if (up || down || left || right) {
                return true;
            }

            visited.delete(`${row} ${col}`)

            return false;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
