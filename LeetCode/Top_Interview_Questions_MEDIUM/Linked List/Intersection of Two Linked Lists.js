/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// @@@ TRY 1 : FAIL @@@

// var getIntersectionNode = function(headA, headB) {
// 	const arrA = [];
// 	const arrB = [];

// 	while (headA) {
// 		arrA.push(headA.val);
// 		headA = headA.next;
// 	}
// 	while (headB) {
// 		arrB.push(headB.val);
// 		headB = headB.next;
// 	}

// 	const set = new Set([arrA]);

// 	for (let val of arrB) {
// 		if (set.has(val)) {
// 			return val;
// 		}
// 		set.add(val);
// 	}

// 	return null;
// };

// @@@ TRY 2 : SUCSESS @@@

var getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) return null;

	let dummyA = headA;
	let dummyB = headB;

	while (dummyA !== dummyB) {
		if (dummyA.next) {
			dummyA = dummyA.next;
		} else {
			if (!dummyB.next) {
				dummyA = null;
				dummyB = null;
				break;
			}
			dummyA = headB;
		}

		if (dummyB.next) {
			dummyB = dummyB.next;
		} else {
			dummyB = headA;
		}
	}

	return dummyB;
};
