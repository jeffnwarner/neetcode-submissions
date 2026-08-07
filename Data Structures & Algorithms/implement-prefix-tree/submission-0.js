class PrefixTree {
    constructor() {
        this.root = {
            val: '',
            children: {},
            end: false 
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currNode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!currNode.children[word[i]]) {
                currNode.children[word[i]] = {
                    val: word[i],
                    children: {},
                    end: i === word.length - 1
                }
            } 
            currNode = currNode.children[word[i]];
        }
        currNode.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currNode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!currNode.children[word[i]]) {
                return false;
            }

            currNode = currNode.children[word[i]];
        }

        if (!currNode.end) {
            return false;
        }

        return true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!currNode.children[prefix[i]]) {
                return false;
            }

            currNode = currNode.children[prefix[i]];
        }

        return true;
    }
}
