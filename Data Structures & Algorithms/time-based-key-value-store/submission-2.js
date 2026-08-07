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
        const values = this.keyStore.has(key) ? this.keyStore.get(key) : [];
        values.push({value, timestamp});
        this.keyStore.set(key, values);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.has(key) ? this.keyStore.get(key) : [];
        if (values.length === 0) {
            return "";
        }

        const index = this.findIndex(values, timestamp);
        console.log({index});

        if (values[index].timestamp <= timestamp) {
            return values[index].value;
        }

        return "";
    }

    findIndex(values, timestamp) {
        let start = 0; 
        let end = values.length - 1;
        while (start < end) {
            const mid = Math.ceil((start + end) / 2);
            console.log({start, mid, end, timestamp}, values[start], values[mid], values[end]);
            if (values[mid].timestamp <= timestamp) {
                start = mid;
            } else {
                end = mid - 1;
            }
        }

        return start;
    }
}
