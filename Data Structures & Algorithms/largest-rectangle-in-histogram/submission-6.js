class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // heights.sort((a, b) => a - b);
        /* let maxArea = heights[0];
        let currentWidth = 1;
        let currentHeight = heights[0];
        for (let i = 1; i < heights.length; i++) {
            if (heights[i] < heights[i - 1]) {
                currentWidth = 2;
                const doubleArea = heights[i] * currentWidth;
                if (maxArea < doubleArea) {
                    maxArea = doubleArea;
                }

                currentHeight = heights[i];
            } else {
                currentWidth++;
                const area = currentHeight * currentWidth;

                if (maxArea < area) {
                    maxArea = area;
                }

                const singleArea = heights[i];
                if (maxArea <= singleArea) {
                    maxArea = singleArea;
                    currentWidth = 1;
                    currentHeight = heights[i];
                }
            }
        }

        currentWidth = 1;
        currentHeight = heights[heights.length - 1];
        for (let i = heights.length - 2; i >= 0; i--) {
            if (heights[i] <= currentHeight) {
                currentWidth++;
            } else {
                currentWidth = 1;
            }
            
            currentHeight = heights[i];
            const area = currentHeight * currentWidth;
            if (maxArea < area) {
                maxArea = area;
            }
        }
        */

        const stack = [];
        let maxArea = Math.max();

        for (let i = 0; i < heights.length; i++) {
            let index = i;
            if (stack.length) {
                while (stack.length && heights[i] < stack[stack.length - 1][1]) {
                    let top = stack[stack.length - 1];
                    const currentArea = (i - top[0]) * top[1];
                    if (currentArea > maxArea) {
                        maxArea = currentArea;
                    }
                    index = top[0]
                    stack.pop();
                    top = stack[stack.length - 1]
                }
            }

            stack.push([index, heights[i]]);
        }

        let end = heights.length;
        while (stack.length) {
            let top = stack.pop();
            const currentArea = (end - top[0]) * top[1];
            if (currentArea > maxArea) {
                maxArea = currentArea;
            }
        }

        return maxArea;
    }
}
