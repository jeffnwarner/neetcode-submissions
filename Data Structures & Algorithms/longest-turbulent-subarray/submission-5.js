class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let result = 1;
        let currLen = 1;
        let lastDiff = null;

        for (let i = 0; i < arr.length - 1; i++) {
            const diff = arr[i] - arr[i + 1];

            if (diff < 0 && lastDiff > 0) {
                currLen++;
            } else if (diff > 0 && lastDiff < 0) {
                currLen++;
            } else if (diff === 0) {
                currLen = 1;
            } else {
                currLen = 2;
            }
            
            lastDiff = diff;

            if (currLen > result) {
                result = currLen;
                console.log(arr[i], arr[i + 1], result);
            }
        }

        return result;
    }
}
