class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = 0;
        let result = 0;

        for (let i = 0; i < piles.length; i++) {
            if (max < piles[i]) {
                max = piles[i];
            }
        }

        let minK = Math.min();

        let left = 1;
        let right = max;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            let currHours = 0;
            for (let i = 0; i < piles.length; i++) {
                currHours += Math.ceil(piles[i] / mid);
            }
            if (currHours > h) {
                left = mid + 1;
            } else {
                result = mid;
                right = mid - 1;
            }
        }

        return result;
    }
}
