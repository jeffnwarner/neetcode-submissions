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

        const stack = [];

        let node = root;

        while (stack.length > 0 || node !== null) {
            while (node !== null) {
                stack.push(node);
                node = node.left;
            }

            node = stack.pop();
            index++;
            if (index === k) {
                return node.val;
            }

            node = node.right;
        }



        // function dfs(node) {
        //     if (node && node.left) {
        //         const left = dfs(node.left);
        //         if (left) {
        //             return left;
        //         }
        //     }

        //     if (node) {
        //         index++;
        //         if (index === k) {
        //             return node.val;
        //         }   
        //     }

        //     if (node && node.right) {
        //         const right = dfs(node.right);
        //         if (right) {
        //             return right;
        //         }
        //     }
        // }

        return dfs(root);
    }
}
