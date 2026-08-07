class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0; 
        let end = matrix.length - 1;
        while (start < end) {
            const middle = Math.floor((start + end) / 2);
            if (target <= matrix[middle][matrix[middle].length - 1] && target >= matrix[middle][0]) {
                start = middle;
                end = middle;
            } else if (target < matrix[middle][0]) {
                end = middle - 1;
            } else if (target > matrix[middle][matrix[middle].length - 1]) {
                start = middle + 1;
            }
        }
        let arr = matrix[start];
        start = 0;
        end = arr.length - 1;
        
        while (start < end) {
            const middle = Math.floor((start + end) / 2);

            if (target < arr[middle]) {
                end = middle - 1;
            } else if (target > arr[middle]) {
                start = middle + 1;
            } else {
                start = middle;
                end = middle;
            }
        }

        return arr[start] === target;
    }
}


// start: 0, end: 2, middle: 1
// start: 1, end: 2, middle: 1
// 