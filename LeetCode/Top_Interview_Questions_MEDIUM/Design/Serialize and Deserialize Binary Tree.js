/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = [];

  const go = (node) => {
    if (!node) {
      result.push(null);
      return;
    }
    result.push(node.val);
    go(node.left);
    go(node.right);
  };

  go(root);
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const go = () => {
    if (data.length === 0) return;

    const val = data.shift();
    if (val === null) return null;

    const node = new TreeNode(val);
    node.left = go();
    node.right = go();
    return node;
  };

  return go();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
