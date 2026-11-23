class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const map = new Map();
        
        const dfs = (index, sum) => {
            if (index === nums.length) {
                if (sum === target) {
                    return 1;
                } 
                return 0;
            } 

            if (map.has(`${index} ${sum}`)) {
                return map.get(`${index} ${sum}`);
            }

            const left = dfs(index + 1, sum + nums[index]);
            const right = dfs(index + 1, sum - nums[index]);

            map.set(`${index} ${sum}`, left + right);

            return left + right;
        }

        return dfs(0, 0);
    }
}
