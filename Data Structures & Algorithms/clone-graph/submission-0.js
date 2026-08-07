/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }
        const newNode = new Node(node.val);
        const visited = new Map();

        function dfs(currNode, copyNode) {
            visited.set(copyNode.val, copyNode);

            for (let i = 0; i < currNode.neighbors.length; i++) {
                const currNeighbor = currNode.neighbors[i];
                if (!visited.has(currNeighbor.val)) {
                    const newNeighbor = new Node(currNeighbor.val);
                    dfs(currNeighbor, newNeighbor);
                    copyNode.neighbors.push(newNeighbor);
                } else {
                    copyNode.neighbors.push(visited.get(currNeighbor.val));
                }
            }

            return copyNode;
        }

        return dfs(node, newNode);
    }
}
