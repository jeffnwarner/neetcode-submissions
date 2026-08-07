class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let currentMax = -Infinity; 
        const allMaxes = [];
        let left = 0;

        for (let i = 0; i < k; i++) {
            if (nums[i] > currentMax) {
                currentMax = nums[i];
                left = i;
            }
        }
        allMaxes.push(currentMax);

        for (let i = k; i < nums.length; i++) {
            if (nums[i] > currentMax) {
                currentMax = nums[i];
                left = i;
            } 

            if (left !== i && i - left === k) {
                console.log({i, left, k});
                let newMax = -Infinity;
                for (let j = left + 1; j <= i; j++) {
                    if (nums[j] > newMax) {
                        newMax = nums[j];
                        left = j;
                    }
                }
                currentMax = newMax;
            }
            console.log({currentMax, left, i});
            allMaxes.push(currentMax);
        }

        return allMaxes;
    }
}
