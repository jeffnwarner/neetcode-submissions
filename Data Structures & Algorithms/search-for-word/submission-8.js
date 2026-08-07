class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const visited = new Set();
        function search(row, col, letter) {
            console.log(board[row][col], letter);
            console.log(visited);
            if (word.length === letter) {
                return true;
            }
            visited.add(`${[row, col]}`);

            for (let j = 0; j < directions.length; j++) {
                let [dr, dc] = directions[j];
                dr += row;
                dc += col;
                    
                if (dr < board.length && dr >= 0 && dc < board[0].length && dc >= 0 && board[dr][dc] === word[letter] && !visited.has(`${[dr, dc]}`)) {
                    if (search(dr, dc, letter + 1)) {
                        return true;
                    }
                }
            }
            visited.delete(`${[row, col]}`);
            return false;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === word[0]) {
                    if (search(i, j, 1)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
