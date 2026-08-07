class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = new Map();
        
        function dp(index, currAmount, currCoins) {
            // console.log(currCoins);
            if (currAmount < 0) {
                return Infinity;
            } 

            if (currAmount === 0) {
                return 0;
            }

            if (index >= coins.length) {
                return Infinity;
            }

            if (cache.has(`${index} ${currAmount}`)) {
                // console.log(coins[index], currAmount, cache.get(`${index} ${currAmount}`))
                return cache.get(`${index} ${currAmount}`);
            }

            currCoins.push(coins[index]);
            const method1 = dp(index, currAmount - coins[index], currCoins) + 1;
            currCoins.pop();
            const method2 = dp(index + 1, currAmount, currCoins);
            const minCoins = Math.min(method1, method2);
            cache.set(`${index} ${currAmount}`, minCoins);
            // console.log({minCoins, currAmount, index});
            return minCoins;
        }

        const result = dp(0, amount, [])
        return result === Infinity ? -1 : result;
    }
}
