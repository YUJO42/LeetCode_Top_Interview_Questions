class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let flag: number = 0;
  let head: ListNode | null = null;
  let temp: ListNode | null = null;
  while (l1 || l2) {
    let sum: number = flag;
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    let obj: ListNode | null = new ListNode(sum % 10);
    if (head === null) {
      head = obj;
      temp = obj;
    } else {
      temp.next = obj;
      temp = obj;
    }
    flag = 0;
    if (sum >= 10) {
      flag = 1;
    }
  }
  if (flag === 1) {
    let obj: ListNode | null = new ListNode(1);
    temp.next = obj;
    temp = obj;
  }
  return head;
}
