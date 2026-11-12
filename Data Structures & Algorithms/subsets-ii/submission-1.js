class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];

        nums.sort((a, b) => a - b);

        const dfs = (subset, index) => {
            if (index === nums.length) {
                result.push(subset);
                return;
            }

            let skipIndex = index + 1;
            while (skipIndex < nums.length && nums[skipIndex] === nums[index]) {
                skipIndex++;
            }

            dfs([...subset], skipIndex);
            subset.push(nums[index]);

            dfs([...subset], index + 1);

            return;
        }

        dfs([], 0);

        return result;
    }
}
