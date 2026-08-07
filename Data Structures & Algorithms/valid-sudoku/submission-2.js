class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowCache = new Array(10).fill(0);
        let areaCache1 = new Array(10).fill(0);
        let areaCache2 = new Array(10).fill(0);
        let areaCache3 = new Array(10).fill(0);
        let colCache = new Array(10).fill().map(() => new Array(10).fill(0));

        function check(row, col, cache) {
            if (board[row][col] === '.') {
                return true;
            }

            if (cache[board[row][col]]) {
                return false;
            }

            cache[board[row][col]]++;
            return true;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (!check(i, j, rowCache)) {
                    console.log('row', {i, j})
                    return false;
                }

                if (j < 3) {
                    if (!check(i, j, areaCache1)) {
                        console.log('areaCache1', {i, j})
                        return false;
                    }
                } else if (j < 6) {
                    if (!check(i, j, areaCache2)) {
                        console.log('areaCache2', {i, j})
                        return false;
                    }
                } else if (j < 9) {
                    if (!check(i, j, areaCache3)) {
                        console.log('areaCache3', {i, j})
                        return false;
                    }
                }

                if (!check(i, j, colCache[j])) {
                    console.log('col', {i, j})
                    return false;
                }
            }
            rowCache = new Array(10).fill(0);
            if (i + 1 === 3 || i + 1 === 6) {
                areaCache1 = new Array(10).fill(0);
                areaCache2 = new Array(10).fill(0);
                areaCache3 = new Array(10).fill(0);
            }
        }

        return true;
    }
}
