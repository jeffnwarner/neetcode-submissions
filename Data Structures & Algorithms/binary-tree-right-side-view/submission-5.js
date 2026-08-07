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
    rightSideView(root) {
        if (!root) {
            return [];
        }
        
        const result = [];
        const queue = [[root, 0]];
        console.log({root});
        let currLevel = 0;
        let currArr = [];

        for (let i = 0; i < queue.length; i++) {
            const [node, level] = queue[i];

            if (!node) {
                continue;
            }

            if (node.left) {
                queue.push([node.left, level + 1]);
            }

            if (node.right) {
                queue.push([node.right, level + 1]);
            }

            if (level !== currLevel) {
                result.push(currArr[currArr.length - 1]);
                currArr = [];
                currLevel = level;
            }

            currArr.push(node.val);
        }

        if (currArr.length) {
            result.push(currArr[currArr.length - 1]);
        }

        return result;
    }
}
