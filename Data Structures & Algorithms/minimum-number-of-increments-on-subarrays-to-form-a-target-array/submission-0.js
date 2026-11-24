class Solution {
    /**
     * @param {number[]} target
     * @return {number}
     */
    minNumberOperations(target) {
        let result = 0;

        // let min = Infinity;

        // for (let i = 0; i < target.length; i++) {
        //     if (target[i] < min) {
        //         min = target[i];
        //     }
        // } 

        // result = min;

        if (target[0] > result) {
            result = target[0];
        }

        for (let i = 1; i < target.length; i++) {
            if (target[i] > target[i - 1]) {
                result += target[i] - target[i - 1];
            }
        }

        return result;
    }
}
