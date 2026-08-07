class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = [];
        if (nums.length > 0) {
            this.nums.push(nums[0]);
        }
        for (let i = 1; i < nums.length; i++) {
            const num = nums[i]
            this.insert(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.insert(val);
        return this.nums[this.nums.length - this.k];
    }

    insert(num) {
        let start = 0;
        let end = this.nums.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (num < this.nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        this.nums.splice(start, 0, num);
    }
}
