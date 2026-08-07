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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) {
            return '[]';
        }

        let result = '';
        const queue = [root];

        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node) {
                queue.push(node.left, node.right);
            }

            result = `${result}${node?.val ?? null},`;
        }

        result = `[${result.substring(0, result.length - 1)}]`

        return result;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) {
            return null;
        }

        const noParen = data.substring(1, data.length - 1);

        if (noParen.length === 0) {
            return null;
        }

        const tree = noParen.split(',');


        if (tree[0] === 'null') {
            return null;
        }

        const root = new TreeNode(parseInt(tree[0]));
        const queue = [root];

        let treeIndex = 1;

        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (treeIndex < tree.length && tree[treeIndex] !== 'null') {
                node.left = new TreeNode(parseInt(tree[treeIndex]));
                queue.push(node.left);
            }
            treeIndex++;
            if (treeIndex < tree.length && tree[treeIndex] !== 'null') {
                node.right = new TreeNode(parseInt(tree[treeIndex]));
                queue.push(node.right);
            }
            treeIndex++;
        }

        return root;
    }
}
