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
  if (root === null) {
    return [];
  }

  const arr = [root];
  const level = [];

  while (arr.length !== 0) {
    const arrLen = arr.length;
    const curLevel = [];

    for (let i = 0; i < arrLen.length; i++) {
      const current = arr.shift();

      if (current.left) {
        arr.push(current.left);
      }
      if (current.right) {
        arr.push(current.rigth);
      }
      curLevel.push(current.val);
    }
    level.push(curLevel);
  }
  return level;
};
