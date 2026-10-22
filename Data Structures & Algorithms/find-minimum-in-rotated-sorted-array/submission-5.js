class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length - 1;
        let result = Math.min();
        // let count = 0;
        while (start <= end) {
            // count++;
            const mid = Math.floor((start + end) / 2);
            if (result > nums[mid]) {
                result = nums[mid];
            }
            // console.log({start, mid, end, result});
            if (nums[mid] > nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return result;
    }
}
