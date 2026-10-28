class PrefixTree {
    constructor() {
        this.trie = new Map();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let currNode = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!currNode.has(word[i])) {
                return false;
            }
            currNode = currNode.get(word[i]);
        }
        if (currNode.get('')) {
            return true;
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currNode = this.trie;
        for (let i = 0; i < prefix.length; i++) {
            if (!currNode.has(prefix[i])) {
                return false;
            }
            currNode = currNode.get(prefix[i]);
        }
        return true;
    }
}
