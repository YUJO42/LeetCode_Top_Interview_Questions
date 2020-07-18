/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthFromEnd(head, n) {
  let curr = head;
  let mark = head;

  while (n--) {
    mark = mark.next;
  }

  while (mark && mark.next) {
    curr = curr.next;
    mark = mark.next;
  }

  if (!mark) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }

  return head;
}
