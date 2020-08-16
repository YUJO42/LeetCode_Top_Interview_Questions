/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
	let s : number = 0;
	let result : number = 0;

	function recursive(root : TreeNode | null, previous : TreeNode | null): TreeNode | null {
		if (s === k) {
			result = previous.val;
			return ;
		}
		if (!root) return;
		if (result) return;

		recursive(root.left, root);
		s++;
		recursive(root.right, root);
	}

	return result;
};
