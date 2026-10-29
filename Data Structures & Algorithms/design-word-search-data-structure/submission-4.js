class WordDictionary {
    constructor() {
        this.trie = new Map();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currNode = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!currNode.has(word[i])) {
                currNode.set(word[i], new Map());
            }
            currNode = currNode.get(word[i]);
        }
        currNode.set('', 1);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        const dfs = (i, node) => {
            if (i === word.length) {
                // console.log({node})
                if (node !== 1 && node.get('')) {
                    return true;
                }    
                return false;
            }

            if (word[i] === '.') {
                const nodeIterator = node.keys();
                let key = nodeIterator.next()
                // console.log(key);
                while (!key.done) {
                    const result = dfs(i + 1, node.get(key.value));
                    if (result) {
                        return result;
                    }
                    key = nodeIterator.next();
                }
            } else {
                if (node.has(word[i])) {
                    const result = dfs(i + 1, node.get(word[i]));
                    if (result) {
                        return result;
                    }
                }
            }
            return false;
        }

        return dfs(0, this.trie);
    }
}
