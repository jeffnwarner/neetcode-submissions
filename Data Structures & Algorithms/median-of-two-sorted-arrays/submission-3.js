class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const smaller = nums1.length <= nums2.length ? nums1 : nums2;
        const bigger = nums1.length > nums2.length ? nums1 : nums2; 
        const halfBoth = Math.floor((smaller.length + bigger.length) / 2);
        const fullLength = smaller.length + bigger.length;

        let left1 = 0;
        let right1 = smaller.length - 1;
        while (left1 <= right1 || left1 > right1) {
            let median1 = Math.floor((left1 + right1) / 2);
            let median2 = halfBoth - 2 - median1;
            const nextSmall = smaller[median1 + 1] ?? Math.min();
            const nextBigger = bigger[median2 + 1] ?? Math.min();
            const currSmall = smaller[median1] ?? Math.max();
            const currBigger = bigger[median2] ?? Math.max();
            // console.log({nextSmall, nextBigger, currSmall, currBigger});
            if (currSmall <= nextBigger && currBigger <= nextSmall) {
                const minMed = Math.min(nextSmall, nextBigger);
                if (fullLength % 2 === 1) {
                    return minMed;
                } else {
                    const maxMed = Math.max(currSmall, currBigger);
                    return (maxMed + minMed) / 2
                }
            } else if (currSmall > nextBigger) {
                right1 = median1 - 1;
            } else {
                left1 = median1 + 1;
            }
        }

        return -1;
    }
}
