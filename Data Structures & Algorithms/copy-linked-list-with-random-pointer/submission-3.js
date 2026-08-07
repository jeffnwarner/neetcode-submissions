// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const nodeMap = new Map();
        if (head === null) {
            return null;
        }
        const newHead = {
            val: head.val,
            next: null,
            random: null
        }
        let newNode = newHead;
        let node = head;
        while (newNode) {
            nodeMap.set(node, newNode);
            const newNext = node.next ? {
                val: node.next.val,
                next: null,
                random: null,
            } : null;
            newNode.next = newNext;
            newNode = newNext;
            node = node.next;
        }

        newNode = newHead;
        while (newNode) {
            if (head.random) {
                newNode.random = nodeMap.get(head.random); 
            }
            newNode = newNode.next;
            head = head.next;
        }

        return newHead;
    }
}
