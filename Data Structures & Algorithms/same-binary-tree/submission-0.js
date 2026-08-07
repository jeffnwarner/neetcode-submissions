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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const qStack = [];
        const pStack = [];

        let pNode = p;
        let qNode = q;

        while (qStack.length > 0 || pStack.length > 0 || pNode || qNode) {
            while (pNode || qNode) {
                if (pNode) {
                    pStack.push(pNode);
                    pNode = pNode.left;
                }

                if (qNode) {
                    qStack.push(qNode);
                    qNode = qNode.left;
                }
            }

            if (qStack.length !== pStack.length) {
                return false;
            }

            pNode = pStack.pop();
            qNode = qStack.pop();


            if (pNode.val !== qNode.val) {
                return false;
            }

            pNode = pNode.right;
            qNode = qNode.right;
        }

        return true;
    }
}
