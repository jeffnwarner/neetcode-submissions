class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets = [];
        nums.sort((a, b) => a - b);
        // console.log(nums);

        function skipDuplicates(index, comparison, changeIncrement) {
            while (nums[index] === nums[index + comparison]) {
                index = index + changeIncrement;
            }
            return index;
        }

        let i = 0;
        let j = 1;
        let k = nums.length - 1;
        while (i < k) {
            while (j < k) {
                const currSum = nums[j] + nums[k] + nums[i];
                // console.log(nums[i], nums[j], nums[k], triplets, target, currSum);
                if (currSum < 0) {
                    j++;
                } else if (currSum > 0) {
                    k--;
                } else {
                    triplets.push([nums[i], nums[j], nums[k]]);
                    j++;
                    j = skipDuplicates(j, -1, 1);
                }
                // console.log([nums[i], nums[j], nums[k]]);
            }
            i++;
            i = skipDuplicates(i, -1, 1);
            k = nums.length - 1;
            j = i + 1;
        }

        return triplets;
    }
}
