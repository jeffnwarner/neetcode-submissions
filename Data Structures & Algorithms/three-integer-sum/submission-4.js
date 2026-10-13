class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        console.log(nums);
        const result = [];
        let i = 0; 
        let j = 1;
        let k = nums.length - 1;

        while (nums[i] <= 0) {
            j = i + 1;
            k = nums.length - 1;
            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    console.log({i: nums[i], j: nums[j], k: nums[k]}, 'sum is 0');
                    result.push([nums[i], nums[j], nums[k]])

                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                    // console.log({i: nums[i], j: nums[j], k: nums[k]}, 'after push');
                } else {
                    if (sum > 0) {
                        // console.log({i: nums[i], j: nums[j], k: nums[k]}, 'sum is greater');
                        k--;
                        while (k > 0 && nums[k] === nums[k + 1]) {
                            k--;
                        }
                        // console.log({i: nums[i], j: nums[j], k: nums[k]}, 'after subtract');
                    } else {
                        // console.log({i: nums[i], j: nums[j], k: nums[k]}, 'sum is less');
                        j++;
                        while (j < k && nums[j] === nums[j - 1]) {
                            j++;
                        }
                        // console.log({i: nums[i], j: nums[j], k: nums[k]}, 'after add j');
                    }
                }
            }
            i++;
            while (i < nums.length && nums[i] === nums[i - 1]) {
                i++;
            }
        }

        return result;
    }
}
// -4 -1 -1 0 1 2