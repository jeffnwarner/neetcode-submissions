class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0; 
        let right = nums.length - 1;

        // if (nums[left] === target) {
        //     return left;
        // } else if (nums[right] === target) {
        //     return right;
        // }

        while (left <= right) {
            const mid = Math.floor((right + left) / 2); // 0 1 2 3 4 5
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1
            } else {
                return mid;
            }
        } 

        return -1;
    }
}
