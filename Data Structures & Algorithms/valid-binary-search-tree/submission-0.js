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
        let currValue = -Infinity;
        const stack = [];
        let node = root;

        while (node || stack.length > 0) {
            while (node) {
                stack.push(node);
                node = node.left;
            }

            node = stack.pop();
            if (currValue < node.val) {
                currValue = node.val;
            } else {
                return false;
            }
            node = node.right;
        }

        return true;
    }
}
