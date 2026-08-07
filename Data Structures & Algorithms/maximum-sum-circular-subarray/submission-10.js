class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let maxSum = -Infinity;
        let minSum = Infinity;
        let currSum = 0;
        let total = 0;
        let currMin = 0;

        for (let i = 0; i < nums.length; i++) {
            currSum += nums[i];
            currMin += nums[i];
            total += nums[i];
            if (maxSum < currSum) {
                maxSum = currSum;
            }
            if (minSum > currMin) {
                minSum = currMin;
            }
            if (currSum < 0) {
                currSum = 0;
            }
            if (currMin > 0) {
                currMin = 0;
            }
            console.log({maxSum, minSum, total});
        }


        return Math.max(maxSum, total !== minSum ? total - minSum : -Infinity);
    }
}
