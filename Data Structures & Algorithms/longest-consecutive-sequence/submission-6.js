class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }
        const numSet = new Set(nums);
        const sequenceQueue = [];
        let result = 1;

        for (let i = 0; i < nums.length; i++) {
            if (!numSet.has(nums[i] - 1) && numSet.has(nums[i] + 1)) {
                sequenceQueue.push(i);
            } 
        }

        console.log(sequenceQueue);
        console.log(numSet);

        for (let i = 0; i < sequenceQueue.length; i++) {
            let sequentialInt = nums[sequenceQueue[i]];
            let count = 0;
            console.log(sequentialInt);
            console.log(numSet.has(sequentialInt));
            while(numSet.has(sequentialInt)) {
                count++;
                sequentialInt++;
                console.log(sequentialInt, numSet.has(sequentialInt))
            }
            if (count > result) {
                result = count;
            }
        }

        return result;
    }
}
