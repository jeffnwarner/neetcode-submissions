class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let index1 = 0;
        let index2 = numbers.length - 1;

        while (numbers[index1] + numbers[index2] !== target && index1 < index2) {
            let currSum = numbers[index1] + numbers[index2];
            if (currSum < target) {
                index1++;
            } else {
                index2--;
            }
            console.log({index1, index2}, numbers[index1] + numbers[index2], target, numbers.length);
        }

        return [index1 + 1, index2 + 1];
    }
}
