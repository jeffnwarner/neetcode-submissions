class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            let frequency = numsMap.has(nums[i]) ? numsMap.get(nums[i]) : 0;
            frequency++;
            numsMap.set(nums[i], frequency);
        }

        numsMap.forEach((value, key) => result.push([key, value]));
        result.sort((a, b) => b[1] - a[1]);
        console.log(result);

        return result.map((pair) => pair[0]).slice(0, k);
    }
}
