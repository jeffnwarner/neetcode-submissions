class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length < s3) {
            return false;
        }

        const cache = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill(null));
        // const queue = [[0, 0, 0]];
        // while (queue.length) {
        //     // console.log(queue);
        //     let [i, j, k] = queue.shift();
        //     // console.log(s3.substring(0, k), s1.substring(i, s1.length), s2.substring(j, s2.length));
        //     if (k === s3.length && i === s1.length && j === s2.length) {
        //         return true;
        //     }

        //     if (s1[i] && s3[k] && s1[i] === s3[k]) {
        //         queue.push([i + 1, j, k + 1]);
        //     }

        //     if (s2[j] && s3[k] && s2[j] === s3[k]) {
        //         queue.push([i, j + 1, k + 1]);
        //     }
        // }

        // return false;

        const dfs = (i, j, k) => {
            // console.log(s3.substring(0, k), s1.substring(i, s1.length), s2.substring(j, s2.length));
            // console.log({i, j, k}, s1.length, s2.length, s3.length);
            if (k >= s3.length) {
                if (i < s1.length || j < s2.length) {
                    return false;
                }
                return true;
            }

            if (cache[i][j] !== null) {
                // console.log('cache', cache[i][j]);
                return cache[i][j];
            }

            let result = false;
            if (s1[i] && s3[k] && s1[i] === s3[k]) {
                result = dfs(i + 1, j, k + 1);
                if (result) {
                    return true;
                }
            } 
            if (s2[j] && s3[k] && s2[j] === s3[k]) {
                result = dfs(i, j + 1, k + 1);
                if (result) {
                    return true;
                }
            }
            // console.log('didnt work');
            cache[i][j] = result;
            return result;
        }

        return dfs(0, 0, 0);
    }
}
