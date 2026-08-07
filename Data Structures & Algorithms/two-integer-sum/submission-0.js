class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        const result = [];
        nums.forEach((num, index) => {
            if (map.get(target - num) >= 0) {
                result[0] = map.get(target - num);
                result[1] = index;
            }

            map.set(num, index);
        });

        return result;
    }
}
