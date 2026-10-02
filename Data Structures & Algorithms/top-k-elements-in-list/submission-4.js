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
            const bucket = sortedMap[value] ?? [];
            bucket.push(key);
            sortedMap[value] = bucket;
        })

        for (let i = sortedMap.length - 1; i >= 0; i--) {
            const bucket = sortedMap[i] ?? [];
            for (let j = 0; j < bucket.length; j++) {
                result.push(bucket[j]);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
