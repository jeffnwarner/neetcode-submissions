class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const set = new Set();

        const dfs = (index, count, subset) => {
            if (count === nums.length) {
                result.push(subset);
                return;
            }
            if (index === nums.length) {
                return;
            }

            dfs(index + 1, count, [...subset]);
            
            if (!set.has(nums[index])) {
                set.add(nums[index]);
                subset.push(nums[index]);
                dfs(0, count + 1, [...subset]);
                set.delete(nums[index]);
            }

            return;
        }

        dfs(0, 0, []);

        return result;
    }
}
