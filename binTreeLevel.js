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
 var levelOrder = function(root) {

  if (!root || root.length === 0) 
      return [];

  let queue = [];
  let allLevelValues = [];

  queue.push(root);

  while (queue.length > 0) {
      console.log(queue)

      let len = queue.length;

      let levelValues = [];

      for (let i = 0; i < len; i++) {

          let node = queue.shift();

          levelValues.push(node.val);

          if (node.left) {

              queue.push(node.left);
          }

          if (node.right) {

              queue.push(node.right);
          }

      }

      allLevelValues.push(levelValues);

  }

  return allLevelValues;
  
};