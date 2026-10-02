class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const result = [];
        const sortedMap = [];

        for (let i = 0; i < nums.length; i++) {
            let count = map.get(nums[i]) ?? 0;
            count++;
            map.set(nums[i], count);
        }

        map.forEach((value, key) => {
            sortedMap.push([key, value]);
        })

        sortedMap.sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            result.push(sortedMap[i][0]);
        }

        return result;
    }
}
