class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const result = this.map.has(key) ? this.map.get(key) : -1;
        if (result !== -1) {
            this.updateRecentlyUsedQueue(key, result);
        }
        return result;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.currentSize++;
        this.updateRecentlyUsedQueue(key, value);
    }

    updateRecentlyUsedQueue(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.map.size >= this.capacity) {
            const leastRecentlyUsed = this.map.keys().next().value;
            this.map.delete(leastRecentlyUsed); 
        }

        this.map.set(key, value);
    }
}
