class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const map = new Map();

        const dfs = (index1, index2) => {
            if (index1 === word1.length) {
                return word2.length - index2;
            }

            if (index2 === word2.length) {
                return word1.length - index1;
            }

            if (map.has(`${index1} ${index2}`)) {
                return map.get(`${index1} ${index2}`);
            }

            let result = 0;
            if (word1[index1] === word2[index2]) {

                result = dfs(index1 + 1, index2 + 1);
            } else {
                const replace = 1 + dfs(index1 + 1, index2 + 1);
                const del = 1 + dfs(index1, index2 + 1);
                const insert = 1 + dfs(index1 + 1, index2);

                result = Math.min(del, insert, replace);
            }

            map.set(`${index1} ${index2}`, result);
            return result;
        }

        return dfs(0, 0);
    }
}
