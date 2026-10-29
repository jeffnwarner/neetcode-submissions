class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const map = new Map();
        const dfs = (i, leftOver) => {
            if (leftOver === 0) {
                return 1;
            } else if (leftOver < 0) {
                return 0;
            } else if (map.has(`${i} ${leftOver}`)) {
                const cached = map.get(`${i} ${leftOver}`);
                return cached;
            }

            const pathOne = dfs(i, leftOver - coins[i]);
            const pathTwo = i + 1 < coins.length ? dfs(i + 1, leftOver) : 0;
            const sum = pathOne + pathTwo;
            map.set(`${i} ${leftOver}`, sum);
            return sum;
        }

        return dfs(0, amount);
    }
}
