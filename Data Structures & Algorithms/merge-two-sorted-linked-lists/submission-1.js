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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let node1 = list1;
        let node2 = list2;
        let newHead = null;
        let currNode = null;
        while (node1 !== null || node2 !== null) {
            if (!newHead) {
                if (node1 === null) {
                    newHead = node2;        
                } else if (node2 === null) {
                    newHead = node1;
                } else {
                    newHead = node1.val < node2.val ? node1 : node2;
                }
                currNode = newHead;
                
                if (newHead === node1) {
                    node1 = node1.next;
                } else if (newHead === node2) {
                    node2 = node2.next;
                }
            } else {
                if (node1 === null) {
                    currNode.next = node2;
                } else if (node2 === null) {
                    currNode.next = node1;
                } else {
                    currNode.next = node1.val < node2.val ? node1 : node2;
                }
                currNode = currNode.next;

                if (node1 && currNode === node1) {
                    node1 = node1.next;
                } else if (node2 && currNode === node2) {
                    node2 = node2.next;
                }
            }
        }

        return newHead;
    }
}
