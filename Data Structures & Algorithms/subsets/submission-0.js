class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const subset = [];

        const dfs = (i, subset) => {
            if (i >= nums.length) {
                result.push([...subset]);
                return;
            }
            subset.push(nums[i]);
            dfs(i + 1, subset);
            subset.pop();
            dfs(i + 1, subset);
        }

        dfs(0, subset);
        
        return result;
    }
}
