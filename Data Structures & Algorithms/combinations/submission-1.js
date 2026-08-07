class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const result = [];
        const combination = [];

        const dfs = (i, len) => {
            // console.log('start', {i, len, k, combination});
            if (len >= k) {
                result.push([...combination]);
                // console.log('long enough', {result});
                return;
            }

            for (let j = i; j <= n; j++) {
                // console.log('loop', {j, i, combination});
                combination.push(j);
                dfs(j + 1, len + 1);
                combination.pop();
            }
        }

        dfs(1, 0);

        return result;
    }
}
