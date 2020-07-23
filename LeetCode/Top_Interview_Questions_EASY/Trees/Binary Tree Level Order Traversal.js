/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const arr = [];

  function traverse(node, level) {
    if (!node) {
      return;
    }

    if (!arr[level]) {
      arr[level] = [node.val];
    } else {
      arr[level].push(node.val);
    }
  }

  traverse(root, 0);
  return arr;
};
