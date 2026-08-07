/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        if (!root) {
            return null;
        }

        let max = -Infinity;

        function dfs(node, currMax) {
            currMax += node.val;

            if (max < currMax) {
                max = currMax;
            }

            if (currMax < 0) {
                currMax = 0;
            }

            let pathLeft = 0;
            if (node.left) {
                pathLeft = dfs(node.left, currMax) + node.val;
                if (max < pathLeft) {
                    max = pathLeft;
                }
            }

            let pathRight = 0;
            if (node.right) {
                pathRight = dfs(node.right, Math.max(pathLeft, currMax, node.val)) + node.val;
                if (max < pathRight) {
                    max = pathRight;
                }
            }

            if (max < node.val) {
                max = node.val;
            }
            // console.log(node.val, {currMax, pathLeft, pathRight, max});
            return Math.max(pathLeft, pathRight, node.val, 0);
        }

        dfs(root, 0);

        return max;
    }
}
