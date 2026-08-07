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
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = [{root, level: 0}];
        const result = [];
        let currLevel = 0;
        let currArr = [];
        for (let i = 0; i < queue.length; i++) {
            const {root: node, level} = queue[i];

            if (!node) {
                continue;
            }

            if (node.left) {
                queue.push({root: node.left, level: level + 1});
            }

            if (node.right) {
                queue.push({root: node.right, level: level + 1});
            }

            if (level !== currLevel) {
                result.push(currArr);
                currArr = [];
                currLevel = level;
            }

            currArr.push(node.val);
        }

        if (currArr.length) {
            result.push(currArr);
        }

        return result;
    }
}
