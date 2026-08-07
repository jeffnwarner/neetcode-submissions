class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const squareSet = new Set();
        const rowSet = new Set();
        const colSet = new Set();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') {
                    continue;
                }

                if (rowSet.has(`${i}${board[i][j]}`)) {
                    console.log('rowSet', board[i][j], `${i}${board[i][j]}`);
                    return false;
                }
                rowSet.add(`${i}${board[i][j]}`);

                if (colSet.has(`${j}${board[i][j]}`)) {
                    return false
                }
                colSet.add(`${j}${board[i][j]}`);

                const blockRow = i - (i % 3);
                const blockCol = j - (j % 3);
                console.log({blockRow, blockCol});
                console.log(`${i}${board[i][j]}`);
                console.log(`${blockRow}${blockCol}${board[i][j]}`);
                if (squareSet.has(`${blockRow}${blockCol}${board[i][j]}`)) {
                    console.log('squareSet', board[i][j], `${blockRow}${blockCol}${board[i][j]}`);
                    return false;
                }
                squareSet.add(`${blockRow}${blockCol}${board[i][j]}`)
            }
        }

        return true;
    }
}
