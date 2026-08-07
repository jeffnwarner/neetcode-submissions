class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                break;
            }
        }

        let slower = 0;
        while (true) {
            slow = nums[slow];
            slower = nums[slower];
            if (slow === slower) {
                return slow;
            }
        }
    }
}
