class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;
        let matrixLength = matrix[0].length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            console.log({left, mid, right});
            if (target > matrix[mid][matrixLength - 1]) {
                left = mid + 1;
            } else if (target < matrix[mid][0]) {
                right = mid - 1;
            } else {
                left = mid;
                break;
            }
        }

        let foundRow = left;
        if (foundRow < 0 || foundRow >= matrix.length) {
            return false;
        }
        left = 0;
        right = matrixLength - 1;
        console.log({foundRow});

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            // console.log({left, mid, right});
            if (target > matrix[foundRow][mid]) {
                left = mid + 1;
            } else if (target < matrix[foundRow][mid]) {
                right = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
