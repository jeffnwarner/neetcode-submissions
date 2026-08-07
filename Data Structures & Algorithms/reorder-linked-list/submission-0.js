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
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let previous = null;
        while (slow) {
            let nextNode = slow.next;
            slow.next = previous;
            previous = slow;
            slow = nextNode;
        }

        let start = head;
        let tail = previous;
        while (start !== tail) {
            console.log({start, tail})
            let startNext = start?.next ?? null;
            let tailNext = tail?.next ?? null;
            console.log(start.next, tail);
            if (start && start.next) {
                start.next = tail;
            }
            if (tail && tail.next) {
                tail.next = startNext;
            }
            start = startNext;
            tail = tailNext;
        }

        console.log(head);
    }
}
