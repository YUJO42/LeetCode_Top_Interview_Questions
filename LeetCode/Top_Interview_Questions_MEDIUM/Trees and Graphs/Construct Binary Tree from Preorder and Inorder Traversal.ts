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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const recursive = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;
    let val: number = preorder.shift();
    let root: TreeNode | null = new TreeNode(val);
    root.left = recursive(start, inorder.indexOf(val) - 1);
    root.right = recursive(inorder.indexOf(val) + 1, end);

    return root;
  };

  return recursive(0, inorder.length - 1);
}
