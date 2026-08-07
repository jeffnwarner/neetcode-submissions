class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const combination = [];
        let numCalls = 0;

        const dfs = (i, sum) => {
            numCalls++;
            if (numCalls >= 1000) {
                return;
            }
            // console.log('start', {combination, sum})
            if (sum < 0 || i >= nums.length) {
                // console.log('too much', {combination, sum});
                return;
            } else if (sum === 0) {
                result.push([...combination]);
                // console.log('just right', {result, sum});
                return;
            }
            combination.push(nums[i]);
            // console.log('push', {combination, sum});
            dfs(i, sum - nums[i]);
            // console.log('dfs', {combination, sum});
            combination.pop();
            // console.log('pop', {combination, sum});
            dfs(i + 1, sum);
            // console.log('second dfs', {combination, sum});
        }

        dfs(0, target);

        return result;
    }
}
