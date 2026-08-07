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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let newHead = null;

        let start = head;
        let node = head;
        let previous = null;
        while (node) {
            let nextStart = node;
            let reverseNode = null;
            for (let i = k; i > 0; i--) {
                if (!node) {
                    let lastNode = node;
                    for (let j = i; j < k; j++) {
                        const next = previous.next;
                        previous.next = node;
                        node = previous;
                        previous = next;
                        reverseNode = node;
                    }
                    node = lastNode;
                    break;
                }
                
                const next = node.next;
                node.next = previous;
                previous = node;
                node = next;
            }
            if (!newHead) {
                if (reverseNode) {
                    return head;
                }
                newHead = previous;
            }

            if (!node && start === nextStart) {
                start.next = node;
            } else if (reverseNode) {
                start.next = reverseNode;
            } else {
                start.next = previous;
            }

            start = nextStart;

            previous = null;
        }
        return newHead;
    }
}
