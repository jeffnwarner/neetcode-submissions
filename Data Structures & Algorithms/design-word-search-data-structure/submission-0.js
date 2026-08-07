class WordDictionary {
    constructor() {
        this.root = {
            children: {},
            end: false
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = {
                    children: {},
                    end: false
                }
            }

            node = node.children[word[i]];
        }

        node.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const queue = [[this.root, 0]];
        for (let i = 0; i < queue.length; i++) {
            const [node, j] = queue[i];
            console.log({node, j}, word[j]);
            if (j === word.length && node.end) {
                return true;
            }
            if (word[j] === '.') {
                for (let letter in node.children) {
                    queue.push([node.children[letter], j + 1]);
                }
            } else if (node.children[word[j]]) {
                queue.push([node.children[word[j]], j + 1]);
            }
        }
        return false;
    }
}
