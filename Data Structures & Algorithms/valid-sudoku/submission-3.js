class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill().map(() => new Set());
        const cols = new Array(9).fill().map(() => new Set());
        let box1 = new Set();
        let box2 = new Set();
        let box3 = new Set();

        for (let i = 0; i < 9; i++) {
            if (i === 3 || i === 6) {
                box1 = new Set();
                box2 = new Set();
                box3 = new Set();
            }
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    continue;
                }
                const num = board[i][j];
                // console.log(rows);

                if (rows[i].has(num)) {
                    // console.log('false row', rows[i], board[i][j], {i, j})
                    return false;
                }
                if (cols[j].has(num)) {
                    // console.log('false cols', cols[i], board[i][j])
                    return false;
                }
                if (j < 3) {
                    if (box1.has(num)) {
                        // console.log('false box1', box1, board[i][j])
                        return false;
                    } else {
                        box1.add(num)
                    }
                } else if (j < 6) {
                    if (box2.has(num)) {
                        // console.log('false box2', box2, board[i][j])
                        return false;
                    } else {
                        box2.add(num)
                    }
                } else if (j < 9) {
                    if (box3.has(num)) {
                        // console.log('false box3', box3, board[i][j])
                        return false;
                    } else {
                        box3.add(num)
                    }
                }

                rows[i].add(num);
                cols[j].add(num);
            }
        }

        return true;
    }
}
