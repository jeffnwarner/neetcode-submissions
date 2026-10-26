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
        let newHead = null;

        const traverseList = (node) => {
            if (node === null || node.next === null) {
                newHead = node;
            // console.log({node})
                return node;
            }

            const nextNode = traverseList(node.next);
            nextNode.next = node;
            // console.log({node, nextNode});
            return nextNode.next;
        }

        const tail = traverseList(head);
        if (tail !== null) {
            tail.next = null;
        }

        return newHead;
    }
}
