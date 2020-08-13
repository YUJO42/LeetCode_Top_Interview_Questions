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

// @@@ soulution 1 @@@

// function zigzagLevelOrder(root: TreeNode | null): number[][] {
// 	let result: number[][] = [];
// 	if (!root) return result;

// 	let queue = [root];
// 	let depth = 0;

// 	while (queue.length > 0) {
// 		const size = queue.length;
// 		const level = [];

// 		for (let i = 0; i < size; i++) {
// 			const node = queue.shift();
// 			if (depth % 2 == 0) level.push(node.val);
// 			else level.unshift(node.val);

// 			if (node.left) queue.push(node.left);
// 			if (node.right) queue.push(node.right);
// 		}
// 		result.push(level);
// 		depth++;
// 	}

// 	return result;
// };

// @@@ solution 2

function zigzagLevelOrder(root: TreeNode | null): number[][] {
	let result : number[][] = [];
	recursive(root, 0, result);
	return result;
}

function recursive(node : TreeNode | null, level : number, result : number[][]) : void {
	if (!node) return ;

	if (result[level] == null) {
		result.push([]);
	}

	if (level % 2 === 0) {
		result[level].push(node.val);
	}else {
		result[level].unshift(node.val);
	}

	recursive(node.left, level + 1, result);
	recursive(node.right, level + 1, result);
}
