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
        const result = [];
        if (root === null) {
            return result;
        }
        
        let currGroup = [];
        let currLevel = 0;

        const queue = [[root, currLevel]];

        for (let i = 0; i < queue.length; i++) {
            const [node, level] = queue[i];
            if (node === null) {
                continue;
            }
            if (currLevel < level) {
                result.push(currGroup);
                currGroup = [];
                currLevel = level;
            }

            queue.push([node.left, currLevel + 1], [node.right, currLevel + 1]);
            currGroup.push(node.val);
        }

        result.push(currGroup);
        return result;
    }
}
