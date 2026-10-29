class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const map = new Map();
        const dfs = (i, leftOver) => {
            if (leftOver === 0) {
                return 0;
            } else if (leftOver < 0) {
                return -1;
            } else if (map.has(`${i}${leftOver}`)) {
                // console.log(map.get(leftOver));
                return map.get(`${i}${leftOver}`);
            }

            const pathOne = 1 + dfs(i, leftOver - coins[i]);
            const pathTwo = i + 1 < coins.length ? dfs(i + 1, leftOver) : -1;
            // if (pathOne === 35 || pathTwo === 35) {
            //     console.log({i, leftOver, pathOne, pathTwo});
            // }
            if (pathOne > 0 && pathTwo >= 0) {
                const minCoins = Math.min(pathOne, pathTwo);
                map.set(`${i}${leftOver}`, minCoins)
                return minCoins;
            } else if (pathOne > 0) {
                map.set(`${i}${leftOver}`, pathOne);
                return pathOne;
            } else {
                map.set(`${i}${leftOver}`, pathTwo);
                return pathTwo;
            }
        }

        return dfs(0, amount, 0);
    }
}
