class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const solutionMap = new Map();
        const result = [];

        const bfs = (row, col) => {
            const visitedMap = new Array(heights.length).fill().map(() => new Array(heights[0].length).fill(false));

            let queue = [[row, col, Infinity]];
            let insert = [];

            let pacific = false;
            let atlantic = false;

            while (queue.length > 0) {
                const [nextRow, nextCol, maxHeight] = queue.pop();
                
                if (queue.length === 0) {
                    queue = insert;
                    insert = [];
                }

                if (nextRow < 0 || nextCol < 0) {
                    pacific = true;
                    continue;
                }

                if (nextRow === heights.length || nextCol === heights[0].length) {
                    atlantic = true;
                    continue;
                }

                if (pacific && atlantic) {
                    break;
                }

                if (heights[nextRow][nextCol] > maxHeight) {
                    continue;
                }

                if (solutionMap.has(`${nextRow} ${nextCol}`)) {
                    const [solPacific, solAtlantic] = solutionMap.get(`${nextRow} ${nextCol}`);
                    pacific = pacific || solPacific;
                    atlantic = atlantic || solAtlantic;
                    continue;
                }

                if (visitedMap[nextRow][nextCol] === true) {
                    continue;
                }

                visitedMap[nextRow][nextCol] = true;

                insert.push([nextRow - 1, nextCol, heights[nextRow][nextCol]]);
                insert.push([nextRow, nextCol - 1, heights[nextRow][nextCol]]);
                insert.push([nextRow + 1, nextCol, heights[nextRow][nextCol]]);
                insert.push([nextRow, nextCol + 1, heights[nextRow][nextCol]]);

                if (queue.length === 0) {
                    queue = insert;
                    insert = [];
                }
            }
            const result = pacific && atlantic;
            solutionMap.set(`${row} ${col}`, [pacific, atlantic]);
            return result;
        }

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (bfs(i, j)) {
                    result.push([i, j]);
                }
            }
        }

        return result;
    }
}
