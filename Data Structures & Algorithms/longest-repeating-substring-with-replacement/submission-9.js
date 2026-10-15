class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let left = 0;
        let result = 0;
        let maxCount = 0;

        for (let i = 0; i < s.length; i++) {
            let count = map.get(s[i]) ?? 0;
            // console.log({count}, 'initial');
            count++;
            map.set(s[i], count);
            // console.log({maxCount, maxLetter}, 'initial');
            if (maxCount < count) {
                maxCount = count;
            }

            let leftOver = (i - left + 1) - maxCount;
            // console.log({count, maxCount, maxLetter, leftOver, left, result}, 'before while')
            if (leftOver > k) {
                let leftCount = map.get(s[left]);
                leftCount--;
                map.set(s[left], leftCount);
                left++;
            } 

            const currWindow = i - left + 1;
            // console.log({count, maxCount, maxLetter, leftOver, left, result, currWindow}, 'after while')
            if (result < currWindow) {
                result = currWindow;
            }
        }

        return result;
    }
}
