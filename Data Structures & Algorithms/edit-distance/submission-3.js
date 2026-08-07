class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let result = 0;
        let largestWord = '';
        let smallestWord = '';
        if (word1.length < word2.length) {
            largestWord = word2;
            smallestWord = word1;
        } else {
            largestWord = word1;
            smallestWord = word2;
        }

        // while (largestWord.length ) {
        //     console.log({largestWord, smallestWord});
        //     if (largestWord === smallestWord) {
        //         break;
        //     }

        //     if (largestWord[0] === smallestWord[0]) {
        //         largestWord = largestWord.substring(1)
        //         smallestWord = smallestWord.substring(1);
        //     } else if (largestWord.length > smallestWord.length) {
        //         result++;
        //         largestWord = largestWord.substring(1)
        //     } else {
        //         result++;
        //         largestWord = largestWord.substring(1)
        //         smallestWord = smallestWord.substring(1);
        //     }
        // }

        // return result;
        
        const cache = new Map();
        const dfs = (str1, str2) => {
            console.log({str1, str2});
            if (str1 === str2) {
                return 0;
            }

            if (str1.length === 0 && str2.length > 0) {
                return str2.length;
            }

            if (cache.has(str1 + str2)) {
                return cache.get(str1 + str2);
            }

            let result = 0;
            let same = Math.min();
            let deleteLetter = Math.min();
            let replaceLetter = Math.min();
            let insertLetter = Math.min();
            if (str1[0] === str2[0]) {
                same = dfs(str1.substring(1), str2.substring(1));
            } else {
                deleteLetter = 1 + dfs(str1.substring(1), str2);

                replaceLetter = 1 + dfs(str1.substring(1), str2.substring(1));

                // insertLetter = 1 + dfs(str1, str2.substring(1));
            }

            result = Math.min(same, deleteLetter, replaceLetter, insertLetter);
            cache.set(str1 + str2, result);
            return result;
        }

        return dfs(largestWord, smallestWord);
    }
}
