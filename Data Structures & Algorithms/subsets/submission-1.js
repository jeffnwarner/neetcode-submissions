class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // subsets(nums) {
    //     const result = [];
    //     const subset = [];

    //     const dfs = (i, subset) => {
    //         console.log('start', {subset});
    //         if (i >= nums.length) {
    //             result.push([...subset]);
    //             console.log({result});
    //             return;
    //         }
    //         subset.push(nums[i]);
    //         console.log('push', {subset});
    //         dfs(i + 1, subset);
    //         console.log('dfs', {subset, result});
    //         subset.pop();
    //         console.log('pop', {subset});
    //         dfs(i + 1, subset);
    //         console.log('second dfs', {subset, result});
    //     }

    //     dfs(0, subset);
        
    //     return result;
    // }

    subsets(nums) {
        const result = [[]];

        function dfs(index, currentArr) {
            for (let i = index; i < nums.length; i++) {
                const newArr = [...currentArr, nums[i]];
                result.push(newArr);
                dfs(i + 1, newArr);
            }
        }

        dfs(0, []);

        return result;
    }
}
