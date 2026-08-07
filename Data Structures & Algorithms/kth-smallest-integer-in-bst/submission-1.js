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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let index = 0;

        function dfs(node) {
            if (node && node.left) {
                const left = dfs(node.left);
                if (left) {
                    return left;
                }
            }

            if (node) {
                index++;
                if (index === k) {
                    return node.val;
                }   
            }

            if (node && node.right) {
                const right = dfs(node.right);
                if (right) {
                    return right;
                }
            }
        }

        return dfs(root);
    }
}
