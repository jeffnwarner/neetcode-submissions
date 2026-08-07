class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = new Array(nums.length).fill(1);
        const backwards = new Array(nums.length).fill(1);
        let currentProduct = 1;
        for (let i = 1; i < nums.length; i++) {
            currentProduct *= nums[i - 1];
            products[i] = currentProduct;
        }

        currentProduct = 1;
        console.log(currentProduct);
        for (let i = nums.length - 2; i >= 0; i--) {
            currentProduct *= nums[i + 1];
            backwards[i] = currentProduct;
        }

        console.log(nums);
        console.log(products);
        console.log(backwards);

        const result = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(products[i] * backwards[i]);
        }
        return result;
    }
}
