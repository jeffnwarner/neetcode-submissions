class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length - 1;

        while (start < end) {
            let middle = Math.floor((start + end) / 2);
            console.log(nums[start], nums[middle], nums[end]);
            if (nums[end] < nums[middle]) {
                start = middle + 1;
            } else if (nums[start] > nums[middle]) {
                end = middle;
            } else {
                end = middle - 1;
            }
        }

        return nums[start];
    }
}
