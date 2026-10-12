class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            // console.log(stack);
            const newHeight = {
                index: i,
                height: heights[i]
            }
            let index = i;
            while (stack.length && heights[i] < stack[stack.length - 1].height) {
                const popped = stack.pop();
                index = popped.index;
                const area = popped.height * (i - popped.index);
                if (max < area) {
                    max = area;
                }
                // console.log({popped, i, index})
            }
            newHeight.index = index;
            stack.push(newHeight);
        }

        const lastIndex = heights.length - 1;
        // console.log(stack);
        while (stack.length) {
            const popped = stack.pop();
            const area = popped.height * (lastIndex - popped.index + 1);
            if (max < area) {
                max = area;
            }
            // console.log(lastIndex, popped);
        }

        return max;
    }
}
