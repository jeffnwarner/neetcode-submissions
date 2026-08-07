class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currentMax = 0;
        let max = Math.max();

        for (let i = 0; i < nums.length; i++) {
            currentMax += nums[i];
            if (currentMax > max) {
                max = currentMax;
            } 
            
            if (currentMax < 0) {
                currentMax = 0;
            }
        }

        return max;
    }
}
