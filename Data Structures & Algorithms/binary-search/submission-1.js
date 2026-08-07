class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left < right) {
            const mid = Math.ceil((left + right) / 2);
            if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid;
            } 
        }

        if (nums[left] === target) {
            return left;
        } 

        return -1;
    }
}
