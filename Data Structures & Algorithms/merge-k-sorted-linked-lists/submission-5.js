/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let unmerged = lists;
        let merged = [];

        while (unmerged.length > 1) {
            let nodeA = unmerged.pop();
            let nodeB = unmerged.pop();
            // console.log({nodeA, nodeB});

            let newHead = null;
            let node = null;

            const assignNodes = () => {
                let nextNode = null;
                // console.log({nodeA, nodeB})
                if (nodeA === null && nodeB === null) {
                    return null;
                } else if (nodeA === null) {
                    nextNode = nodeB;
                    nodeB = nodeB.next;
                } else if (nodeB === null) {
                    nextNode = nodeA;
                    nodeA = nodeA.next;
                } else {
                    if (nodeA.val < nodeB.val) {
                        nextNode = nodeA;
                        nodeA = nodeA.next;
                    } else {
                        nextNode = nodeB;
                        nodeB = nodeB.next;
                    }
                }
                // console.log({nodeA, nodeB, nextNode});
                return nextNode;
            }

            node = assignNodes();
            newHead = node;

            while (nodeA !== null || nodeB !== null) {
                node.next = assignNodes();
                // console.log({nodeA, nodeB, node});
                node = node.next;
                // console.log({next: node});
            }

            merged.push(newHead);
            // console.log({merged})
            if (unmerged.length <= 1) {
                const lastNode = unmerged.pop();
                if (lastNode) {
                    merged.push(lastNode);
                }
                // console.log({unmerged, merged})
                unmerged = merged;
                merged = [];
            }
        }

        return unmerged.pop() ?? null;
    }
}
