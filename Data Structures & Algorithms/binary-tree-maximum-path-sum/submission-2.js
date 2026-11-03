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
        let result = Math.max();

        const dfs = (node) => {
            if (node === null) {
                return 0;
            }

            let left = dfs(node.left);
            left = left < 0 ? 0 : left;

            let right = dfs(node.right);
            right = right < 0 ? 0 : right;

            if (node.val + left + right > result) {
                result = node.val + left + right;
            }

            return Math.max(left, right) + node.val;
        }

        dfs(root);

        return result;
    }
}
