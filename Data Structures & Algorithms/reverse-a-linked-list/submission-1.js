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
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) {
            return head;
        }

        let previous = null;
        let node = head;

        while (node !== null) {
            let nextNode = node.next;
            node.next = previous;
            console.log({previous, node, nextNode});
            previous = node;
            node = nextNode;
            console.log({previous, node, nextNode});
        }
        
        return previous;
    }
}
