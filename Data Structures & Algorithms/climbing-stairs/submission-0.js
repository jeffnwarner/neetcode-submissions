class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Array(n).fill(0);
        function dfs(steps) {
            if (steps < 0) {
                return 0;
            }
            if (steps <= 0) {
                cache[steps] = 1;
                return 1;
            }

            if (cache[steps]) {
                return cache[steps];
            }

            const result = dfs(steps - 1) + dfs(steps - 2);

            cache[steps] = result;
            return dfs(steps - 1) + dfs(steps - 2);
        }

        return dfs(n);
    }
}
