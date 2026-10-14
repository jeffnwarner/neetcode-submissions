class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0; 
        let leftMax = height[left]
        let right = height.length - 1;
        let rightMax = height[right];
        let water = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                let difference = leftMax - height[left];
                difference = difference < 0 ? 0 : difference;
                water += difference;
                if (leftMax < height[left]) {
                    leftMax = height[left];
                }
                left++;
            } else {
                let difference = rightMax - height[right];
                difference = difference < 0 ? 0 : difference;
                water += difference;
                if (rightMax < height[right]) {
                    rightMax = height[right];
                }
                right--;
            }
        }

        return water;
    }
}
