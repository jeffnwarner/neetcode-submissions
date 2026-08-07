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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = new Map();
        inorder.forEach((node, index) => map.set(node, index));

        let preI = 0;
        function dfs(parentPos) {
            const node = preI < preorder.length ? new TreeNode(preorder[preI]) : null;
            console.log({node, preI});
            if (!node) {
                return node;
            }


            const inOrderPos = map.get(node.val);
            let nextVal = map.get(preorder[preI + 1]);
            console.log({nextVal, inOrderPos});
            if (nextVal < inOrderPos) {
                preI++;
                node.left = dfs(inOrderPos);
            }
            
            if (node.left) {
                nextVal = map.get(preorder[preI + 1]);
            }
            
            if (nextVal > inOrderPos && nextVal < parentPos) {
                preI++;
                node.right = dfs(parentPos);
            }

            return node;
        }

        return dfs(inorder.length);
    }
}
