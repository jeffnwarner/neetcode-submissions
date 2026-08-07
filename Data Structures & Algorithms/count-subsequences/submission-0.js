class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const cache = new Set();
        const dfs = (i, j, string, tracker) => {
            let result = 0;
            // console.log({i, j, string});
            if (string.join('') === t) {
                // console.log({i, j, string, tracker}, 'match')
                if (cache.has(JSON.stringify(tracker))) {
                    return 0;
                }

                cache.add(JSON.stringify(tracker));
                return 1;
            } 

            if (i >= s.length || j >= t.length) {
                // console.log({i, j, string, tracker}, 'too long');
                return 0;
            }
            
            if (s[i] === t[j]) {
                string.push(s[i]);
                tracker.push([i, j]);
                result = dfs(i + 1, j + 1, [...string], [...tracker]);
            } else {
                result = dfs(i + 1, j, [...string], [...tracker]);
            }

            // console.log({i, j, string, result}, 'first dfs');

            string.pop();
            tracker.pop();
            // console.log({string}, 'popped');
            result += dfs(i + 1, j, [...string], [...tracker]);
            // console.log({i, j, string, result}, 'second dfs');

            return result;
        }

        return dfs(0, 0, [], []);
    }
}
