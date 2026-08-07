class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.capacity = capacity;
        this.lastIndex = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.lastIndex === this.capacity) {
            this.resize();
        }

        this.arr[this.lastIndex] = n;
        this.lastIndex++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.lastIndex--;
        const result = this.arr[this.lastIndex];
        this.arr[this.lastIndex] = undefined;
        return result; 
    }

    /**
     * @returns {void}
     */
    resize() {
        this.arr.push(...new Array(this.capacity));
        this.capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.lastIndex;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
