/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let start = 1; 
        let end = n;
        while (start < end) {
            const middle = Math.floor((start + end) /2);
            let myGuess = guess(middle);
            if (myGuess === 1) {
                start = middle + 1;
            } else if (myGuess === -1) {
                end = middle - 1;
            } else {
                return middle;
            }
        }

        return start;
    }
}
