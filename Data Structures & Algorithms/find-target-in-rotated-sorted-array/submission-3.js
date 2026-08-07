class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        
        while (start < end) {
            const middle = Math.floor((start + end) / 2);
            console.log(nums[start], nums[middle], nums[end]);
            if (nums[middle] > nums[end]) {
                start = middle + 1;
            } else if (nums[start] > nums[middle]) {
                end = middle;
            } else {
                end = middle - 1;
            }
        }

        // start is now Array minimum
        console.log(start, nums[start]);
        if (target > nums[nums.length - 1]) {
            end = start - 1;
            start = 0;
        } else {
            end = nums.length - 1;
        }
        while (start <= end) {
            const middle = Math.floor((start + end) / 2);
            console.log(nums[start], nums[middle], nums[end]);
            if (nums[middle] === target) {
                return middle;
            } else if (nums[middle] < target) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }

        return -1;
    }
}
