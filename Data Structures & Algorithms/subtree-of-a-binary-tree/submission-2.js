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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root || !subRoot) {
            return false;
        }
        
        function compareTree(node, subNode) {
            if (node === null && subNode === null) {
                return true;
            }
            
            if (node?.val !== subNode?.val) {
                return false;
            }

            if (!compareTree(node.left, subNode.left)) {
                return false;
            }

            if (!compareTree(node.right, subNode.right)) {
                return false;
            }

            return true;
        }

        function dfs(node, subNode) {
            if (node === null && subNode === null) {
                return true;
            }

            if (!node || !subNode) {
                return false;
            }

            const compare = compareTree(node, subNode);
            const left = node.left ? dfs(node.left, subNode) : false;
            const right = node.right ? dfs(node.right, subNode) : false;
            return (compare || left || right);
        }

        return dfs(root, subRoot);
    }
}
