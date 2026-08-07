class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let visited = new Set();
        const queue = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j, 0]);
                }
            }
        }
            // if (grid[row][col] === -1) {
            //     return -1;
            // }

            // if (grid[row][col] === 0) {
            //     return 0;
            // }

            // if (grid[row][col] < 2147483647 && !doubleCheck) {
            //     return grid[row][col];
            // }

            // let minDistance = grid[row][col];
            // grid[row][col] = -1;
            // for (let i = 0; i < directions.length; i++) {
            //     let [dr, dc] = directions[i];
            //     dr += row;
            //     dc += col;

            //     if (dr >= 0 && dc >= 0 && dr < grid.length && dc < grid[dr].length) {
            //         const distance = dfs(dr, dc, false);
            //         if (distance >= 0 && minDistance > distance + 1) {
            //             minDistance = distance + 1;
            //         }
            //         // if (row === 0 && col === 1) {
            //         //     console.log({distance, minDistance, dr, dc});
            //         // }
            //     }
            // }
            // grid[row][col] = minDistance;
            // // console.log(grid, {row, col});
            // return minDistance;

            for (let i = 0; i < queue.length; i++) {
                const [r, c, steps] = queue[i];
                console.log(queue);

                if (grid[r][c] < 2147483647 && grid[r][c] > 0) {
                    continue;
                }

                // visited.add(`${r} ${c}`)
                grid[r][c] = steps;
                
                for (let j = 0; j < directions.length; j++) {
                    let [dr, dc] = directions[j];
                    dr += r;
                    dc += c;

                    console.log(grid[dr]?.[dc]);
                    if (dr >= 0 && dc >= 0 && dr < grid.length && dc < grid[dr].length && grid[dr][dc] === 2147483647) {
                        queue.push([dr, dc, steps + 1]);
                    }
                }
            }

        return grid;
    }
}
