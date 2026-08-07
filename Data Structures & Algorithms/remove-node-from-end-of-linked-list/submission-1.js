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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {        
        let fast = head;
        let slow = head;
        let previous = null;
        let counterFull = 0;
        while (fast && fast.next) {
            if (fast.next) {
                fast = fast.next;
                counterFull++;
            }

            if (fast.next) {
                fast = fast.next;
                counterFull++;
            }
            previous = slow;
            slow = slow.next;
        }

        const removeIndex = counterFull + 1 - n;

        if (removeIndex === 0) {
            return head.next;
        }

        let counter = 0;
        previous = null;
        slow = head;
        while (counter < removeIndex) {
            previous = slow;
            slow = slow.next;
            counter++;
        }
        previous.next = slow.next;
        return head;
    }
}
