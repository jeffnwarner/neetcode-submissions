class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = [null, nums[0]];
        this.k = k;
        for (let i = 1; i < nums.length; i++) {
            this.minHeap.push(nums[i]);
            this.percolate();
            if (this.minHeap.length > this.k + 1) {
                this.reverse();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        this.percolate();
        if (this.minHeap.length > this.k + 1) {
            this.reverse();
        }
        console.log(this.minHeap);
        return this.minHeap[1];
    }

    percolate() {
        let i = this.minHeap.length - 1;
        let half = Math.ceil(i / 2);
        while (this.minHeap[i] < this.minHeap[half]) {
            const temp = this.minHeap[i];
            this.minHeap[i] = this.minHeap[half];
            this.minHeap[half] = temp;
            i = half;
            half = Math.ceil(i / 2);
        }
    }

    reverse() {
        let i = 1;
        const popped = this.minHeap.pop();
        this.minHeap[1] = popped;
        while (i * 2 < this.minHeap.length) {
            let right = Math.min();
            if (i * 2 + 1 < this.minHeap.length) {
                right = this.minHeap[i * 2 + 1];
            }
            let left = this.minHeap[i * 2];
            const temp = this.minHeap[i];
            if (left < right) {
                this.minHeap[i] = left;
                this.minHeap[i * 2] = temp;
                i = i * 2;
            } else {
                this.minHeap[i] = right;
                this.minHeap[i * 2 + 1] = temp;
                i = i * 2 + 1;
            }
        }
    }
}
