class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];

        const dfs = (subset, index) => {
            if (index === nums.length) {
                result.push(subset);
                return;
            }

            dfs([...subset], index + 1);
            subset.push(nums[index]);
            dfs([...subset], index + 1);

            return;
        }

        dfs([], 0);

        return result;
    }
}
