class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0; 
        let right = 1;
        let water = 0;

        while (right < height.length) {
            if (height[left] === 0) {
                left++;
                right = left + 1;
            } else {
                if (height[left] > height[right] ) {
                    right++;
                } else {
                    let walkBack = right - 1;
                    while (walkBack > left) {
                        water += height[left] - height[walkBack];
                        walkBack--;
                    }
                    left = right;
                    right = left + 1;
                }
            }
        }
        right = height.length -1;
        let leftover = right - 1;
        while (leftover >= left) {
            if (height[right] === 0) {
                right--;
                leftover = right - 1;
            } else {
                if (height[right] > height[leftover] ) {
                    leftover--;
                } else {
                    let walkBack = leftover + 1;
                    while (walkBack < right) {
                        water += height[right] - height[walkBack];
                        walkBack++;
                    }
                    right = leftover;
                    leftover = right - 1;
                }
            }
        }

        return water;
    }
}
