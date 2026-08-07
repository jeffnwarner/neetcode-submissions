class MinStack {
    constructor() {
        this.stack = [];
        this.minimum = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minimum.length < 1 || val <= this.minimum[this.minimum.length - 1]) {
            this.minimum.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.minimum[this.minimum.length - 1] === this.top()) {
            this.minimum.pop();
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimum[this.minimum.length - 1];
    }
}
