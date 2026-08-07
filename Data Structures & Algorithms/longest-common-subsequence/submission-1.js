class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const cache = new Array(text1.length).fill().map(() => new Array(text2.length).fill(-1));

        const dfs = (letter1, letter2) => {
            if (letter1 >= text1.length || letter2 >= text2.length) {
                // console.log({letter1, letter2, cache}, 'too far');
                return 0;
            }

            if (cache[letter1][letter2] !== -1) {
                // console.log({letter1, letter2, cache}, 'already cached');
                return cache[letter1][letter2];
            }

            // console.log(letter1, text1[letter1], letter2, text2[letter2]);
            if (text1[letter1] === text2[letter2]) {
                cache[letter1][letter2] = 1 + dfs(letter1 + 1, letter2 + 1);
                // console.log({letter1, letter2, cache}, 'done1');
            } else {
                cache[letter1][letter2] = Math.max(dfs(letter1 + 1, letter2), dfs(letter1, letter2 + 1));
                // console.log({letter1, letter2, cache}, 'done2');
            }

            return cache[letter1][letter2];
        }

        return dfs(0, 0);
    }
}
