class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            console.log({left: nums[left], mid: nums[mid], right: nums[right]});
            if (target === nums[mid]) {
                return mid;
            } else if (nums[left] > nums[right]) {
                if (target < nums[mid]) {
                    if (target < nums[left] && nums[left] <= nums[mid]) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                } else {
                    if (target > nums[right] && nums[right] >= nums[mid]) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
                // 0 1 2 3 4
                // 1 2 3 4 0
                // 2 3 4 0 1
                // 3 4 0 1 2
                // 4 0 1 2 3
            } else {
                if (target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }
}