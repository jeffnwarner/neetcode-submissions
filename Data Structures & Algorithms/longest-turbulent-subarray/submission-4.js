class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let result = 1;
        let currLen = 1;
        let lastDiff = null;
        function checkTurbulence(i) {
            if (startEven && arr[i] > arr[i + 1] && i % 2 === 0) {
                return true;
            } else if (startEven && arr[i] < arr[i + 1] && i % 2 === 1) {
                return true;
            } else if (!startEven && arr[i] > arr[i + 1] && i % 2 === 1) {
                return true;
            } else if (!startEven && arr[i] < arr[i + 1] && i % 2 === 0) {
                return true;
            }

            return false;
        }

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
