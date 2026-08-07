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
    goodNodes(root) {
        let count = 0;

        function dfs(node, currMax) {
            if (!node) {
                return;
            }

            console.log(node.val, currMax);
            if (node.val >= currMax) {
                count++;
            }

            currMax = Math.max(node.val, currMax);
            dfs(node.left, currMax);
            dfs(node.right, currMax)
        }

        dfs(root, -Infinity);

        return count;
    }
}
