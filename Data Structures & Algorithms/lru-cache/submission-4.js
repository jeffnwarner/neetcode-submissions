class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map;
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // console.log({key, map: this.cache});
        const value = this.cache.get(key);
        if (value) { 
            this.cache.delete(key);
            this.cache.set(key, value);
            // console.log({key, map: this.cache});
            return this.cache.get(key);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.cache.has(key) && this.cache.size + 1 > this.capacity) {
            const firstKey = this.cache.keys().next();
            this.cache.delete(firstKey.value);
        }
        this.cache.delete(key);
        this.cache.set(key, value);
        // console.log({size: this.cache.size, map: this.cache});
        // console.log({key: this.cache.keys().next()});
    }
}
