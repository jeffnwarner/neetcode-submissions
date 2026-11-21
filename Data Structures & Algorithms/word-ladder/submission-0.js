class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let inList = false;
        for (let i = 0; i < wordList.length; i++) {
            if (endWord === wordList[i]) {
                inList = true;
            }
        }
         
        if (!inList) {
            return 0;
        }

        let queue = [[beginWord, 1]];
        let insert = [];

        const set = new Set();

        while (queue.length > 0) {
            const [currWord, steps] = queue.pop();
            
            if (currWord === endWord) {
                return steps;
            }

            for (let i = 0; i < wordList.length; i++) {
                let diff = 0;
                for (let j = 0; j < wordList[i].length; j++) {
                    if (currWord[j] !== wordList[i][j]) {
                        diff++;
                    }

                }
                if (diff === 1 && !set.has(`${currWord} ${wordList[i]}`)) {
                    insert.push([wordList[i], steps + 1]);
                    set.add(`${currWord} ${wordList[i]}`);
                    set.add(`${wordList[i]} ${currWord}`);
                }
            }

            if (queue.length === 0) {
                queue = insert;
                insert = [];
            }
        }

        
        return 0;
    }
}
