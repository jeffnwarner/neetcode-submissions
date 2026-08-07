class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = 0;

        for (let i = 0; i < piles.length; i++) {
            if (piles[i] > max) {
                max = piles[i];
            }
        }
        
        let result = max;

        let start = 1;
        let end = max;

        while (start <= end) {
            const middle = Math.floor((start + end) / 2);
            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / middle);
            }
            if (hours <= h) {
                end = middle - 1;
                result = middle;
            } else {
                start = middle + 1
            }
        }

        return result;
    }
}
