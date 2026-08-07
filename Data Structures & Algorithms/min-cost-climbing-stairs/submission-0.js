class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Array(cost.length).fill(-1);

        function dp(index, currCost) {
            if (index >= cost.length) {
                return currCost;
            }
            const nextCost = index < 0 ? currCost : cost[index] + currCost;
            const cost1 = dp(index + 1, nextCost);
            const cost2 = dp(index + 2, nextCost);

            return Math.min(cost1, cost2);
        }

        return dp(-1, 0);
    }
}
