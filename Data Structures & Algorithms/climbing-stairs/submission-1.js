class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const map = new Map();

        const dfs = (numStairs) => {
            if (numStairs === 0) {
                return 1;
            } else if (numStairs < 0) {
                return 0;
            }

            if (map.has(numStairs)) {
                return map.get(numStairs);
            }

            let count = 0;

            count += dfs(numStairs - 2);
            count += dfs(numStairs - 1);

            map.set(numStairs, count);

            return count;
        }

        return dfs(n);
    }
}
