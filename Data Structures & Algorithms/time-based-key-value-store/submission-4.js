class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const store = this.keyStore.get(key) ?? [];
        store.push([timestamp, value]);
        this.keyStore.set(key, store);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const store = this.keyStore.get(key) ?? []

        let left = 0;
        let right = store.length - 1;
        let minTimestamp = -1;
        // console.log({left, right});
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // console.log({left: store[left], mid: store[mid], right: store[right]})
            if (timestamp > store[mid][0]) {
                minTimestamp = mid
                left = mid + 1;
            } else if (timestamp < store[mid][0]) {
                right = mid - 1;
            } else {
                return store[mid][1];
            }
        }

        if (minTimestamp >= 0 && store[minTimestamp][0] < timestamp) {
            return store[minTimestamp][1];
        }
        
        return '';
    }
}
