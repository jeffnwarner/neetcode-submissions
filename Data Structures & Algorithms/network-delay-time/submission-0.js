class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const network = new Map();
        const minSignal = new Map();
        for (let i = 0; i < times.length; i++) {
            const node = network.get(times[i][0]) ?? new Map();
            node.set(times[i][1], times[i][2]);
            network.set(times[i][0], node);
        }
        // console.log({network});

        const queue = [[network.get(k), 0, k]];
        for (let i = 0; i < queue.length; i++) {
            const [nextNodes, cost, node] = queue[i];
            const min = minSignal.get(node) ?? Math.min();
            if (cost < min) {
                minSignal.set(node, cost);
            } else {
                continue;
            }
            if (!nextNodes) {
                continue;
            }
            
            const entries = [...nextNodes];
            entries.forEach(([nextNode, nextCost]) => {
                // console.log({nextKey});
                queue.push([network.get(nextNode), nextCost + cost, nextNode]);
            })
            // console.log({queue, keys, nextKey, nextNodes, cost, node});
        }

        if (minSignal.size < n) {
            return -1;
        }
        // console.log({minSignal})
        const values = [...minSignal.values()];
        // console.log(values);
        return Math.max(...values);
    }
}
