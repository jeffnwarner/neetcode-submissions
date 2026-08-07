class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [[]];

        for (let i = 0; i < nums.length; i++) {
            const resLength = result.length;
            const nextPermutations = [];
            console.log(nums[i])
            for (let j = 0; j < resLength; j++) { 
                const permutation = result[j];    
                console.log({permutation});
                for (let k = 0; k <= permutation.length; k++) {
                    const newPerm = permutation.slice();
                    newPerm.splice(k, 0, nums[i]);
                    nextPermutations.push(newPerm);
                    console.log({newPerm});
                }
            }
            console.log({result, nextPermutations});
            result = nextPermutations;
        }

        return result;
    }
}
