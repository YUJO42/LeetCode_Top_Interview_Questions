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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const arr: number[] = [];

  while (l1) {
    arr.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr.push(l2.val);
    l2 = l2.next;
  }

  arr.sort((x, y) => x - y);

  let dummy = new ListNode(0);
  let result = dummy;
  for (let i = 0; i < arr.length; i++) {
    dummy.next = new ListNode(arr[i]);
    dummy = dummy.next;
  }

  return result.next;
}
