class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((total, num) => num + total, 0);
        if (sum % 2 === 1) {
            return false;
        }

        const half = sum / 2;
        const map = new Map();

        const dfs = (currSum, index) => {
            if (currSum === half) {
                map.set(`${currSum} ${index}`, true);
                return true;
            }

            if (map.has(`${currSum} ${index}`)) {
                return map.get(`${currSum} ${index}`, true);
            }

            if (index === nums.length || currSum > half) {
                map.set(`${currSum} ${index}`, false);
                return false;
            }

            if (dfs(currSum, index + 1)) {
                map.set(`${currSum} ${index}`, true);
                return true;
            }

            if (dfs(currSum + nums[index], index + 1)) {
                map.set(`${currSum} ${index}`, true);
                return true;
            }

            map.set(`${currSum} ${index}`, false);

            return false;
        }

        return dfs(0, 0);
    }
}
