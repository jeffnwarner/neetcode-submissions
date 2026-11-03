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
        let result = true;
        const dfs = (node) => {
            if (node === null) {
                return 0;
            }

            const left = dfs(node.left);
            const right = dfs(node.right);
            // console.log({left, right})

            if (Math.abs(left - right) > 1) {
                result = false;
            }

            return Math.max(left, right) + 1;
        }

        dfs(root);

        return result;
    }
}
