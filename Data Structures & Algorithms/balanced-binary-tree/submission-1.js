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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(node) {
            if (!node) {
                return {height: 0, balanced: true};
            }

            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);

            console.log(node.val, {leftHeight, rightHeight});
            if (!leftHeight.balanced || !rightHeight.balanced || Math.abs(leftHeight.height - rightHeight.height) > 1) {
                return {height: 0, balanced: false};
            } 


            return {height: Math.max(leftHeight.height, rightHeight.height) + 1, balanced: true};
        }

        const result = dfs(root);

        return result.balanced;
    }
}
