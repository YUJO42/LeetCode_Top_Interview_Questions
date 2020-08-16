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

function kthSmallest(root, k) {
	let s = 0;
	let result = 0;

	const recursive = (root, previous) => {
		if (s === k) {
			result = previous.val;
			return ;
		}

		if (!root) return ;
		if (result) return ;

		recursive(root.left, root);
		s++;
		recursive(root.right, root);
	}

	recursive(root, null);
	return result;
};
