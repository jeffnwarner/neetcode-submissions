class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Array(cost.length).fill(-1);

        function dp(index) {
            if (index >= cost.length) {
                return 0;
            }

            if (cache[index] > -1) {
                return cache[index];
            }

            const cost1 = dp(index + 1);
            const cost2 = dp(index + 2);
            const finalCost = Math.min(cost1, cost2) + cost[index];
            console.log({index, finalCost})

            if (index < 0) {
                return Math.min(cost1, cost2);
            }
            cache[index] = finalCost;
            return finalCost;
        }

        return dp(-1, 0);
    }
}
