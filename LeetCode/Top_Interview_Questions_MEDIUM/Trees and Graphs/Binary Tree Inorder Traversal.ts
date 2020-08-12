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

function helper(root: TreeNode | null, arr: number[]): void {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, arr);
    }
    arr.push(root.val);
    if (root.right !== null) {
      helper(root.right, arr);
    }
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const arr: number[] = new Array();

  helper(root, arr);
  return arr;
}
