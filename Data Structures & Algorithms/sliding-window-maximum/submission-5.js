class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        let max = Math.max();
        let localStart = 0;
        const localMaxes = [max];
        // console.log({result, localMaxes});
        for (let i = 0; i < k; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }

            while (localMaxes.length > localStart && nums[i] > localMaxes[localMaxes.length - 1]) {
                localMaxes.pop()
            }
            localMaxes.push(nums[i]);
            // console.log({result, localMaxes});
        }
        result.push(max)

        let left = 0; 
        for (let i = k; i < nums.length; i++) {
            if (nums[left] === localMaxes[localStart]) {
                localStart++;
            }

            
            left++;

            while (localMaxes.length > localStart && nums[i] > localMaxes[localMaxes.length - 1]) {
                localMaxes.pop()
            }
            localMaxes.push(nums[i]);

            result.push(localMaxes[localStart]);
            // console.log({localMaxes, localStart});
        }

        return result;
    }
}
