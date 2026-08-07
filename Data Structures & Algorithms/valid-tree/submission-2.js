class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const map = new Map();

        for (let i = 0; i < edges.length; i++) {
            const [node1, node2] = edges[i];
            const neighbors1 = map.get(node1) ?? [];
            const neighbors2 = map.get(node2) ?? [];
            
            neighbors1.push(node2);
            neighbors2.push(node1);
            map.set(node1, neighbors1);
            map.set(node2, neighbors2);
        }

        
            const visited = new Set();
            function dfs(node, prev) {
                if (visited.has(node)) {
                    return false;
                }
                visited.add(node);

                const neighbors = map.get(node) ?? [];
                console.log({node, prev, visited, neighbors});
                for (let j = 0; j < neighbors.length; j++) {
                    console.log(j);
                    if (neighbors[j] === prev) {
                        continue;
                    }
                    if (!dfs(neighbors[j], node)) {
                        return false;
                    }
                }

                map.set(node, []);
                return true;
            }

            if (!dfs(0, null)) {
                return false;
            }

            if (visited.size !== n) {
                return false;
            }

        return true;
    }
}
