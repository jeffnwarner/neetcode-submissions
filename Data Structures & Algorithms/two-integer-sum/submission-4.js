class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        map.set(nums[0], 0);

        for (let i = 1; i < nums.length; i++) {
            const checkMap = map.get(target - nums[i]);
            console.log(checkMap);
            if (checkMap >= 0) {
                return [checkMap, i];
            }
            map.set(nums[i], i);
        }
    }
}
