class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const trie = {
            children: {}
        };
        const result = new Set();
        for (let i = 0; i < words.length; i++) {
            let node = trie;
            let word = words[i]
            for (let j = 0; j < word.length; j++) {
                
                if (!node.children[word[j]]) {
                    node.children[word[j]] = {
                        children: {},
                        end: false
                    }
                }

                node = node.children[word[j]];
            }
            node.end = true;
        }

        let visited = new Set();
        function dfs(row, col, node, word) {
            if (visited.has(`${row} ${col}`)) {
                return;
            }
            visited.add(`${row} ${col}`);
                // console.log({node, row, col, word});
            if (node.end) {
                result.add(word);
            }
            for (let k = 0; k < directions.length; k++) {
                let [di, dj] = directions[k];
                di += row;
                dj += col;
                // console.log({di, dj}, board?.[di]?.[dj]);
                if (di >= 0 && dj >= 0 && di < board.length && dj < board[di].length) {
                    if (node.children[board[di][dj]]) {
                        dfs(di, dj, node.children[board[di][dj]], word + board[di][dj]);
                    }
                }
            }
            visited.delete(`${row} ${col}`);
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (trie.children[board[i][j]]) {
                    dfs(i, j, trie.children[board[i][j]], board[i][j]);
                    visited = new Set();
                }
            }
        }

        return [...result];
    }
}
