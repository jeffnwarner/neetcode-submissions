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
    isValidBST(root) {
        let prev = Math.max();

        const dfs = (node) => {
            let valid = true;
            if (node.left) {
                valid = dfs(node.left);
                if (!valid) {
                    return valid;
                }
            }

            if (prev >= node.val) {
                return false;
            }
            prev = node.val;

            if (node.right) {
                valid = dfs(node.right);
                if (!valid) {
                    return valid;
                }
            }

            return true;
        }

        return dfs(root);
    }
}
