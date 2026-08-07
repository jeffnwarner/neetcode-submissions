class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const map = new Map();

        function dp(index, money) {
            if (money < 0) {
                return 0;
            }
            if (money === 0) {
                map.set(`${index} ${money}`, 1);
                return 1;
            }
            if (index >= coins.length) {
                return 0;
            }
            if (map.has(`${index} ${money}`)) {
                return map.get(`${index} ${money}`);
            }
            const method2 = dp(index, money - coins[index]);
            const method1 = dp(index + 1, money);
            map.set(`${index} ${money}`, method1 + method2);
            return method1 + method2;
        }

        return dp(0, amount);
    }
}
