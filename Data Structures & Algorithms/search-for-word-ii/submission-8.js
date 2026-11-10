class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const result = new Set();
        const trie = new Map();

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            let node = trie;
            for (let j = 0; j < word.length; j++) {
                let nextNode = node.get(word[j]) ?? new Map();
                node.set(word[j], nextNode);
                node = nextNode;
            }
            node.set('', 1);
        }
        // console.log(trie);

        const dfs = (row, col, node, word, visitedSet) => {
            visitedSet.add(`${row} ${col}`);
            // console.log({row, col, node, word});
            if (!node) {
                visitedSet.delete('${row} ${col}');
                return;
            }

            if (node.has('')) {
                result.add(word);
            }

            let nextLetter;
            if (row > 0) {
                nextLetter = board[row - 1][col];
                if (node.has(nextLetter) && !visitedSet.has(`${row - 1} ${col}`)) {
                    dfs(row - 1, col, node.get(nextLetter), `${word}${nextLetter}`, visitedSet);
                }
            }

            if (row < board.length - 1) {
                nextLetter = board[row + 1][col];
                // console.log({nextLetter}, 'row + 1')
                if (node.has(nextLetter) && !visitedSet.has(`${row + 1} ${col}`)) {
                    dfs(row + 1, col, node.get(nextLetter), `${word}${nextLetter}`, visitedSet)
                }
            }
            
            if (col > 0) {
                nextLetter = board[row][col - 1];
                // console.log({nextLetter}, 'col - 1');
            if (word === 'hkl') {
                console.log('help');
                console.log({nextLetter, node, row, col, visitedSet})
            }
                if (node.has(nextLetter) && !visitedSet.has(`${row} ${col - 1}`)) {

                    dfs(row, col - 1, node.get(nextLetter), `${word}${nextLetter}`, visitedSet)
                }
            }

            if (col < board[0].length - 1) {
                nextLetter = board[row][col + 1];
                if (node.has(nextLetter) && !visitedSet.has(`${row} ${col + 1}`)) {
                    dfs(row, col + 1, node.get(nextLetter), `${word}${nextLetter}`, visitedSet)
                }
            }
            visitedSet.delete(`${row} ${col}`);
            // console.log({row, col, word, visitedSet});
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (trie.has(board[i][j])) {
                    dfs(i, j, trie.get(board[i][j]), board[i][j], new Set());
                }
            }
        }

        return Array.from(result);
    }
}
