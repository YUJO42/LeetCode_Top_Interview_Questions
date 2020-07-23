/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, min = null, max = null) {
  // base case: Root is null (valid BST)
  if (root === null) {
    return true;
  }

  // Root is lesser than min.lower bound value, hence not a BST
  if (min !== null && min >= root.val) {
    return false;
  }

  // Root is greater than max.upper bound value, hence not a BST
  if (max !== null && root.val >= max) {
    return false;
  }

  // for left child, bounds will be [min...root.val]
  // for right child, bounds will be [root.val...max]
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
