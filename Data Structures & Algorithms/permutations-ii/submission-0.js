class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let result = [[]];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            const newPermutations = [];
            const set = new Set();
            for (let j = 0; j < result.length; j++) {
                const currPermutation = result[j];
                for (let k = 0; k <= currPermutation.length; k++) {
                    const nextPermutation = currPermutation.slice();
                    
                    nextPermutation.splice(k, 0, nums[i]);
                    if (!set.has(`${nextPermutation}`)) {
                        set.add(`${nextPermutation}`);
                        newPermutations.push(nextPermutation);
                    }
                }
            }
            console.log(newPermutations);
            result = newPermutations;
        }

        return result;
    }
}
