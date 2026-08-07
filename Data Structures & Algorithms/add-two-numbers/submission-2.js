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
        const result = {
            val: null,
            next: null
        }
        let node = result;
        let carry = 0;
        while (l1 || l2) {
            let val1 = 0;
            let val2 = 0;
            if (l1) {
                val1 = l1.val;
                l1 = l1.next
            }

            if (l2) {
                val2 = l2.val;
                l2 = l2.next;
            }
            let sum = carry + val1 + val2;
            if (sum >= 10) {
                carry = 1;
                sum -= 10;
            } else {
                carry = 0;
            }
            node.val = sum;
            let nextNode = {
                val: null,
                next: null
            }
            
            if (carry && !l1 && !l2) {
                nextNode.val = carry;
            }
            node.next = nextNode.val || l1 || l2 ? nextNode : null;
            node = nextNode;
        }

        return result;
    }
}
