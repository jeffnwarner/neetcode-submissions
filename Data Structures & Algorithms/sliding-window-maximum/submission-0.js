class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let currentMax = -Infinity; 
        const allMaxes = [];

        for (let i = 0; i < k; i++) {
            if (nums[i] > currentMax) {
                currentMax = nums[i];
            }
        }

        allMaxes.push(currentMax);
        let left = 0;

        for (let i = k; i < nums.length; i++) {
            if (nums[i] > currentMax) {
                currentMax = nums[i];
            } else if (nums[left] === currentMax) {
                let newMax = -Infinity;
                for (let j = left + 1; j <= i; j++) {
                    if (nums[j] > newMax) {
                        newMax = nums[j];
                    }
                }
                currentMax = newMax;
            }
            allMaxes.push(currentMax);
            left++;
        }

        return allMaxes;
    }
}
