class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        const sequenceQueue = [];
        let result = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i] - 1)) {
                sequenceQueue.push(i);
            } 
            map.set(nums[i], i);
        }

        console.log(sequenceQueue);
        console.log(map);

        for (let i = 0; i < sequenceQueue.length; i++) {
            if (map.has(nums[sequenceQueue[i]] - 1)) {
                console.log('has - 1', sequenceQueue[i], sequenceQueue[i] - 1);
                continue;
            } 

            let sequentialInt = nums[sequenceQueue[i]];
            let count = 0;
            console.log(sequentialInt);
            console.log(map.has(sequentialInt));
            while(map.has(sequentialInt)) {
                count++;
                sequentialInt++;
                console.log(sequentialInt, map.has(sequentialInt))
            }
            if (count > result) {
                result = count;
            }
        }

        return result;
    }
}
