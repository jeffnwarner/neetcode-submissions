class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const cache = new Array(s.length).fill().map(() => new Array(t.length).fill(-1));
        const dfs = (i, j, string) => {
            if (string.join('') === t) {
                return 1;
            }

            if (i >= s.length || j >= t.length) {
                return 0;
            }

            if (cache[i][j] !== -1) {
                return cache[i][j];
            }
            
            cache[i][j] = dfs(i + 1, j, [...string]);
            if (s[i] === t[j]) {
                string.push(s[i]);
                cache[i][j] += dfs(i + 1, j + 1, [...string]);
            }

            return cache[i][j];
        }

        return dfs(0, 0, [], []);
    }
}
