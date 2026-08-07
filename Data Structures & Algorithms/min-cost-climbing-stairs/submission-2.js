class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Array(cost.length).fill(-1);

        function dp(index, currCost = 0) {
            if (index >= cost.length) {
                return currCost;
            }

            if (cache[index] > -1) {
                return cache[index];
            }

            const nextCost = index < 0 ? currCost : cost[index] + currCost;
            const cost1 = dp(index + 1);
            const cost2 = dp(index + 2);
            const finalCost = Math.min(cost1, cost2) + cost[index];

            if (index < 0) {
                return Math.min(cost1, cost2);
            }
            cache[index] = finalCost;
            return finalCost;
        }

        return dp(-1, 0);
    }
}
