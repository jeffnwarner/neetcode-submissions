class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Array(nums.length).fill(0);

        function dp(index) {
            console.log({index});
            if (index >= nums.length) {
                return 0;
            }

            if (index === nums.length - 1) {
                cache[index] = nums[index];
                return cache[index];
            }

            if (cache[index]) {
                return cache[index];
            }

            const method1 = dp(index + 2) + nums[index];
            const method2 = dp(index + 1);

            console.log({method1, method2, index});
            cache[index] = Math.max(method1, method2);
            return cache[index];
        }

        return dp(0, 0);
    }
}
