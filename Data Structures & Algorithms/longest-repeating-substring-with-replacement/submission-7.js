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
        let maxLetter = '';

        for (let i = 0; i < s.length; i++) {
            let count = map.get(s[i]) ?? 0;
            // console.log({count}, 'initial');
            count++;
            map.set(s[i], count);
            let maxCount = map.get(maxLetter) ?? 0;
            // console.log({maxCount, maxLetter}, 'initial');
            if (maxCount < count) {
                maxLetter = s[i];
                maxCount = count;
            }

            let leftOver = (i - left + 1) - maxCount;
            // console.log({count, maxCount, maxLetter, leftOver, left, result}, 'before while')
            while (leftOver > k) {
                let leftCount = map.get(s[left]);
                leftCount--;
                map.set(s[left], leftCount);
                left++;
                leftOver = (i - left + 1) - maxCount;
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
