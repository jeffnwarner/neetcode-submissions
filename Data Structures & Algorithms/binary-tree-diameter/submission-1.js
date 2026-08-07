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
    diameterOfBinaryTree(root) {
        let max = 0;

        function dfs(node) {
            if (!node) {
                return 0;
            }

            if (!node.left && !node.right) {
                return 1;
            }

            const leftPath = dfs(node.left);
            const rightPath = dfs(node.right);

            console.log(node.val, {leftPath, rightPath})
            if (max < leftPath + rightPath) {
                max = leftPath + rightPath;
            }

            return Math.max(leftPath, rightPath) + 1;
        }

        dfs(root);

        return max;
    }
}
