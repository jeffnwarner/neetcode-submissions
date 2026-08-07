class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.hashtable = {};
        this.size = 0;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        const hashedKey = key % this.capacity;
        if (this.hashtable[hashedKey]) {
            const index = this.hashtable[hashedKey].findIndex((pair) => pair[0] === key);
            if (index !== -1) {
                this.hashtable[hashedKey][index] = [key, value];
            } else {
                this.hashtable[hashedKey].push([key, value]);
            }

        } else {
            this.hashtable[hashedKey] = [[key, value]];
        }
        // this.hashtable[hashedKey] = [key, value]
        this.size++;

        if (this.size >= this.capacity / 2) {
            this.resize();
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const hashedKey = key % this.capacity;
        if (!this.hashtable[hashedKey]) {
            return -1;
        }
        const index = this.hashtable[hashedKey].findIndex((pair) => pair[0] === key);
        return index === -1 ? index : this.hashtable[hashedKey][index][1];
        // return this.hashtable[hashedKey][1];
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        const hashedKey = key % this.capacity;
        // if (this.hashtable[hashedKey]) {
        //     delete this.hashtable[hashedKey];
        //     this.size--;
        //     return true;
        // }
        if (this.hashtable[hashedKey]) {
            const index = this.hashtable[hashedKey].findIndex((pair) => pair[0] === key);
            if (index !== -1) {
                this.size--;
                if (this.hashtable[hashedKey].length === 1) {
                    delete this.hashtable[hashedKey];
                    return true;
                } else {
                    this.hashtable[hashedKey].splice(index, 1);
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        this.capacity *= 2;
        const originalTable = this.hashtable;
        this.hashtable = {};
        this.size = 0;

        for (let hashedKey in originalTable) {
            const pairs = originalTable[hashedKey];
            console.log(pairs);
            pairs.forEach((pair) => this.insert(pair[0], pair[1]));
            // const [key, value] = originalTable[hashedKey];
            // this.insert(key, value);
        }
        console.log(this.hashtable, originalTable);
    }
}
