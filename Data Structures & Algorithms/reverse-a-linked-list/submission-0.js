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
        console.log({head});
        if (head === null) {
            return head;
        }
        const stack = []
        let node = head;
        while (node !== null) {
            stack.push(node);
            node = node.next;
        }

        node = stack.pop();
        let newHead = node;
        while (stack.length > 0) {
            let nextNode = stack.pop();
            node.next = nextNode;
            console.log({node, nextNode});
            node = nextNode;
        }
        console.log({node});
        node.next = null;

        return newHead;
    }
}
