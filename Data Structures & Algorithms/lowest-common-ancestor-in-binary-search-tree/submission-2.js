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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let pNode = root;
        let qNode = root;
        let minNode = root; 
        while (pNode || qNode) {
            if (qNode === pNode) {
                minNode = qNode;
            }

            if (pNode) {
                if (p.val < pNode.val) {
                    pNode = pNode.left;
                } else if (p.val > pNode.val) {
                    pNode = pNode.right;
                } else {
                    pNode = null;
                }
            }

            if (qNode) {
                if (q.val < qNode.val) {
                    qNode = qNode.left;
                } else if (q.val > qNode.val) {
                    qNode = qNode.right;
                } else {
                    qNode = null;
                }
            }
        }

        return minNode;
    }
}
