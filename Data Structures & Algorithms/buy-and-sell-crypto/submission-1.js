class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = prices[0];
        let highest = prices[0];
        let result = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < lowest) {
                const currProfit = highest - lowest;
                if (result < currProfit) {
                    result = currProfit;
                }
                lowest = prices[i];
                highest = prices[i];
            } else if (prices[i] > highest) {
                highest = prices[i];
            }
            // console.log({price: prices[i], lowest, highest, result})
        }

        const currProfit = highest - lowest;
        if (result < currProfit) {
            result = currProfit;
        }

        return result;
    }
}
