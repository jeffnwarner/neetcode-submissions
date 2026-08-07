class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        const result = [];
        const subset = [];

        const dfs = (i) => {
            if (i >= nums.length) {
                result.push([...subset]);
                return;
            }
            subset.push(nums[i]);
            dfs(i + 1);
            subset.pop();
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            dfs(i + 1);
        }

        dfs(0);

        return result;
    }
}
