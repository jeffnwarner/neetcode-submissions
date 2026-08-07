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
     * @return {number[]}
     */
    postorderTraversal(root) {
        if (!root) {
            return [];
        }

        const result = [];
        const stack = [[root, false]];

        while (stack.length > 0) {
            const [node, visited] = stack.pop();

            if (!visited) {
                stack.push([node, true]);
            
                if (node.right) {
                    stack.push([node.right, false]);
                }

                if (node.left) {
                    stack.push([node.left, false]);
                }
            } else {
                result.push(node.val);
            }
        }

        return result;
    }
}
