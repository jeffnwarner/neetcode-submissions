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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let numString1 = '';
        let numString2 = '';

        while (l1 || l2) {
            if (l1) {
                numString1 = l1.val + numString1;
                l1 = l1.next
            }

            if (l2) {
                numString2 = l2.val + numString2;
                l2 = l2.next;
            }
        }
        const sum = parseInt(numString1) + parseInt(numString2) + '';

        const result = {
            val: sum[sum.length - 1],
            next: null
        }
        let node = result;
        let i = sum.length - 1;
        while (node && i > 0) {
            i--;
            const nextNode = {
                val: sum[i],
                next: null
            }
            node.next = nextNode;
            node = nextNode;
        }

        return result;
    }
}
