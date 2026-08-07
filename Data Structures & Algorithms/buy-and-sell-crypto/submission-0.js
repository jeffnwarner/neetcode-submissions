class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0;
        let lowestPos = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[lowestPos] > prices[i]) {
                lowestPos = i;
            }

            if (result < prices[i] - prices[lowestPos]) {
                result = prices[i] - prices[lowestPos];
            }
        }

        return result;
    }
}
