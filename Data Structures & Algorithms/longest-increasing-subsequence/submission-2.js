class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const map = new Map();

        const dfs = (index, lastNum) => {
            if (index === nums.length) {
                return 0;
            }

            if (map.has(`${index} ${lastNum}`)) {
                return map.get(`${index} ${lastNum}`);
            }

            const skip = dfs(index + 1, lastNum);
            let include = Math.max();
            if (nums[index] > lastNum) {
                include = dfs(index + 1, nums[index]) + 1;
            }

            const result = Math.max(skip, include);

            map.set(`${index} ${lastNum}`, result);

            return result;
        }

        return dfs(0, -Infinity);
    }
}
