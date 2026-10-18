class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0; 
        let right = nums.length - 1;

        let count = 10;
        while (left <= right && count < 20) {
            count++;
            const mid = Math.ceil((right + left) / 2); // 0 1 2 3 4 5
            console.log({left, mid, right});
            if (nums[mid] < target) {
                left = mid;
            } else if (nums[mid] > target) {
                right = mid - 1
            } else {
                return mid;
            }
        } 

        return -1;
    }
}
