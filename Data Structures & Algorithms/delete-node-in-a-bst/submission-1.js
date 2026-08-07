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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) {
            console.log('root null');
            return null;
        }
        console.log(root.left, root.val, root.right, 'start');

        if (root.val === key) {
            if (root.right && root.left) {
                let min;
                let node = root.right;
                while (node) {
                    min = node.val;
                    node = node.left;
                }        

                root.val = min;
                root.right = this.deleteNode(root.right, min);
            } else if (root.right) {
                console.log('return root.right');
                return root.right;
            } else if (root.left) {
                console.log('return root.left');
                return root.left;
            } else {
                console.log('return null');
                return null;
            }
        } else {
            if (key < root.val) {
                root.left = this.deleteNode(root.left, key);
            } else {
                root.right = this.deleteNode(root.right, key);
            }
        }
        console.log(root.left, root.val, root.right, 'end');
        return root;
    }
}
