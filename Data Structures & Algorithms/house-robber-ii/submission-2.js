class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let cache = new Array(nums.length).fill(0);
        if (nums.length === 1) {
            return nums[0];
        }
        function dp(index, end) {
            if (index >= end) {
                return 0;
            }

            if (index === end - 1) {
                cache[index] = nums[index];
                return cache[index];
            }

            if (cache[index]) {
                return cache[index];
            }

            const method1 = dp(index + 2, end) + nums[index];
            const method2 = dp(index + 1, end);

            cache[index] = Math.max(method1, method2);
            return cache[index];
        }
        const start = dp(0, nums.length - 1);
        cache = new Array(nums.length).fill(0)
        const end = dp(1, nums.length)

        return Math.max(start, end);
    }
}
