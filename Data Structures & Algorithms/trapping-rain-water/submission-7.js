class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = 0;

        let waterArea = 0;

        // while (left < height.length) {
        while (right < height.length) {
            if (left === right) {
                right++;
            } else if (height[right] < height[left]) {
                right++;
            } else if (height[right] >= height[left]) {
                let middle = left + 1;
                while(middle < right) {
                    waterArea += Math.min(height[right], height[left]) - height[middle];
                    // console.log(waterArea, height[right], height[left], height[middle])
                    middle++;
                }
                left = right;
            }
        }
        const lastLeft = left;
        right--;
        left = right;
        while (lastLeft <= left) {
            if (left === right) {
                left--;
            } else if (height[left] < height[right]) {
                left--;
            } else if (height[left] >= height[right]) {
                let middle = right - 1;
                while(middle > left) {
                    waterArea += Math.min(height[right], height[left]) - height[middle];
                    // console.log(waterArea, height[right], height[left], height[middle])
                    middle--;
                }
                right = left;
            }
        }
        //     if (waterArea === 0) {
        //         let middle = left + 1;
        //         right--;
        //         while(middle < right) {
        //             if (height[middle] < height[right]) {
        //                 waterArea += Math.min(height[right], height[left]) - height[middle];
        //                 // console.log(waterArea, height[right], height[left], height[middle])
        //                 middle++;
        //             } 
        //         }
        //     }
        //     left = left + 1;
        //     right = left;
        // }
        return waterArea
    }
}
