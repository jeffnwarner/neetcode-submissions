class MyStack {
    constructor() {
        this.queue = [];
        this.head = null;
        this.length = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
        this.length++;
        if (!this.head) {
            this.head = 0;
        }
    }

    /**
     * @return {number}
     */
    pop() {
            console.log(this.queue);
        if (this.empty()) {
            return;
        }
        for (let i = 0; i < this.head + this.length - 1; i++) {
            this.queue.push(this.queue[i]);
        }
        const result = this.queue[this.head + this.length - 1];
        this.head = this.head + this.length;
        this.length--;

        return result;
    }

    /**
     * @return {number}
     */
    top() {
        console.log(this.queue);
        console.log(this.head, this.length);
        return this.queue[this.head + this.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
