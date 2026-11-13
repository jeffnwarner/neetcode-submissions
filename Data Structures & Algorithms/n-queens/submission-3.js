class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const colSet = new Set();
        const posDiagSet = new Set();
        const negDiagSet = new Set();

        const dfs = (row, col, subset, numQueens) => {
            if (col === n) {
                return;
            }
            if (row === n && numQueens === n) {
                for (let i = 0; i < subset.length; i++) {
                    subset[i] = subset[i].join('');
                }
                result.push(subset);
                return;
            }

            let continued = false;
            const above = colSet.has(col);
            const posDiag = posDiagSet.has(row - col);
            const negDiag = negDiagSet.has(col + row); 
            // console.log({row, col, colSet, posDiagSet, negDiagSet});
            if (above || posDiag || negDiag) {
                // dfs(row, col + 1, [...subset], numQueens);
                continued = true;
            }
            
            dfs(row, col + 1, [...subset], numQueens);

            if (!continued) {
                const set = [];
                for (let i = 0; i < n; i++) {
                    if (i === col) {
                        set.push('Q');
                    } else {
                        set.push('.');
                    }
                }
                subset.push(set);
                colSet.add(col);
                posDiagSet.add(row - col);
                negDiagSet.add(col + row);
                dfs(row + 1, 0, [...subset], numQueens + 1);
                colSet.delete(col);
                posDiagSet.delete(row - col);
                negDiagSet.delete(col + row);
            }


            return;
        }

        dfs(0, 0, [], 0);

        return result;
    }
}
". . . Q",
"Q . . .",
". . Q .",
". Q . ."

