/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return [];
  const arr: number[] = [];

  while (head.next) {
    arr.push(head.val);
    head = head.next;
  }

  arr.sort((a, b) => a - b);

  const newHead = new ListNode(0);
  const result = newHead;
  for (let val of arr) {
    newHead.next = new ListNode(val);
  }

  return result.next;
}
