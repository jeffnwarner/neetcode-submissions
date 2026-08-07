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
        const pStack = [];
        const qStack = [];

        let pNode = root;
        let qNode = root;
        while (pNode || qNode) {
            console.log(pNode?.val, qNode?.val);
            if (pNode) {
                pStack.push(pNode);
                if (p.val < pNode.val) {
                    pNode = pNode.left;
                } else if (p.val > pNode.val) {
                    pNode = pNode.right;
                } else {
                    pNode = null;
                }
            }

            console.log(pNode?.val, qNode?.val);
            if (qNode) {
                qStack.push(qNode);
                if (q.val < qNode.val) {
                    qNode = qNode.left;
                } else if (q.val > qNode.val) {
                    qNode = qNode.right;
                } else {
                    qNode = null;
                }
            }
            console.log(pNode?.val, qNode?.val);
        }

        let minNode = root; 

        for (let i = 0; i < qStack.length && i < pStack.length; i++) {
            console.log(qStack[i].val, pStack[i].val);
            if (qStack[i] === pStack[i]) {
                minNode = qStack[i];
            }
        }

        return minNode;
    }
}
