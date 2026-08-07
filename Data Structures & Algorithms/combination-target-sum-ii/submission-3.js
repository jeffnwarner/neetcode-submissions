class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const set = new Set();
        candidates.sort((a, b) => a - b);
        function dp(arr, sum, index) {
            console.log({arr, sum});
            if (sum === target) {
                if (set.has(`${arr}`)) {
                    return;
                }
                result.push([...arr]);
                set.add(`${arr}`);
                return;
            }
            if (index >= candidates.length) {
                return;
            }

            if (sum > target) {
                return;
            }

            arr.push(candidates[index]);
            dp([...arr], sum + candidates[index], index + 1);

            arr.pop();
            dp([...arr], sum, index + 1);
        }
        dp([], 0, 0);
        return result;
    }
}
