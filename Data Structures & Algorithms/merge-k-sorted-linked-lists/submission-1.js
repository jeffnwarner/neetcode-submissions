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
        const mergedLists = [...lists];
        if (mergedLists.length < 1) {
            return null;
        }
        let j = 0;
        for (let i = 0; i < mergedLists.length; i += 2) {
            let p1 = mergedLists[i];
            let p2 = mergedLists[i + 1];

            if (!p1 || !p2) {
                continue;
            }

            const newHead = {
                val: null,
                next: null
            }
            let newNode = newHead;

            while (p1 || p2) {
                if (!p2 || (p1 && p1.val <= p2?.val)) {
                    newNode.val = p1.val;
                    p1 = p1.next;
                } else if (p2) {
                    newNode.val = p2.val;
                    p2 = p2.next;
                }
                
                if (p1 || p2) {
                    const nextNode = {
                        val: null,
                        next: null
                    }
                    newNode.next = nextNode;
                    newNode = nextNode;
                }
                j++;
            }
            mergedLists.push(newHead);
        }

        return mergedLists[mergedLists.length - 1];
    }
}
