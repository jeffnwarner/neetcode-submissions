class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length).fill(1);
        const suffix = new Array(nums.length).fill(1);
        const result = new Array(nums.length);
        let product = 1;
        prefix[0] = nums[0];
        suffix[nums.length - 1] = nums[nums.length - 1];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i] * prefix[i - 1]; 
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = nums[i] * suffix[i + 1];
        }

        result[0] = suffix[1];
        result[nums.length - 1] = prefix[nums.length - 2];
        // console.log({result});
        for (let i = 1; i < nums.length - 1; i++) {
            result[i] = prefix[i - 1] * suffix[i + 1];
            // console.log({result});
        }
        return result;
    }
}
