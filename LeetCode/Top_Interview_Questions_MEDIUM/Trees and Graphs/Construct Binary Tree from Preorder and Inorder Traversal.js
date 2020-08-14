/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function buildTree(preorder, inorder) {
  const recursive = (start, end) => {
    if (start > end) return null;
    let val = preorder.shift();
    let root = new TreeNode(val);
    root.left = recursive(start, inorder.indexOf(val) - 1);
    root.right = recursive(inorder.indexOf(val) + 1, end);

    return root;
  };

  return recursive(0, inorder.length - 1);
}
