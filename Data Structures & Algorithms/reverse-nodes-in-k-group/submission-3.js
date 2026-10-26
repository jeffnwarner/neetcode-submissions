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
        const stack = [];

        let nextNode = head;
        let newHead = null;
        let prevTail = null;
        while (nextNode !== null) {
            stack.push(nextNode);
            nextNode = nextNode.next;

            if (stack.length === k) {
                let reverseNode = stack.pop();
                if (newHead === null) {
                    newHead = reverseNode;
                }
                if (prevTail !== null) {
                    prevTail.next = reverseNode;
                }
                while(stack.length) {
                    let nextReverse = stack.pop();
                    reverseNode.next = nextReverse;
                    reverseNode = nextReverse;
                }
                reverseNode.next = nextNode;
                prevTail = reverseNode;
            }
        }

        return newHead;
    }
}
