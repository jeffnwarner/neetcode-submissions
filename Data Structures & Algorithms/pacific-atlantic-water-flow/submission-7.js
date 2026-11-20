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

        const dfs = (row, col) => {
            const visitedMap = new Array(heights.length).fill().map(() => new Array(heights[0].length).fill(false));

            const nextLevel = (nextRow, nextCol, maxHeight) => {
                // console.log({nextRow, nextCol, maxHeight});
                if (nextRow < 0 || nextCol < 0) {
                    return [true, false]
                }

                if (nextRow === heights.length || nextCol === heights[0].length) {
                    return [false, true]
                }

                if (heights[nextRow][nextCol] > maxHeight) {
                    return [false, false];
                }

                if (solutionMap.has(`${nextRow} ${nextCol}`)) {
                    return solutionMap.get(`${nextRow} ${nextCol}`);
                }

                if (visitedMap[nextRow][nextCol] === true) {
                    return [false, false]
                }

                visitedMap[nextRow][nextCol] = true;

                let pacific = false;
                let atlantic = false;

                const up = nextLevel(nextRow - 1, nextCol, heights[nextRow][nextCol]);
                const left = nextLevel(nextRow, nextCol - 1, heights[nextRow][nextCol]);
                const down = nextLevel(nextRow + 1, nextCol, heights[nextRow][nextCol]);
                const right = nextLevel(nextRow, nextCol + 1, heights[nextRow][nextCol]);

                pacific = up[0] || left[0] || down[0] || right[0];
                atlantic = up[1] || left[1] || down[1] || right[1];
                

                return [pacific, atlantic];
            }

            const result = nextLevel(row, col, Infinity);

            // console.log({row, col, result});
                solutionMap.set(`${row} ${col}`, result);

            return result[0] && result[1];
        }

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (dfs(i, j)) {
                    result.push([i, j]);
                }
            }
        }

        return result;
    }
}
