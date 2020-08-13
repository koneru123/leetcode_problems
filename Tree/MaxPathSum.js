/*Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

   I:- 

Output: 42*/
//124 - https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let total;
    const BFS = (root) => {
      total += root.value;
      maxPathSum(root.left);
      maxPathSum(root.right);
    };
    BFS(root);
    return total;
};

class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

const newTree = new Node();
newTree.value = 1;
newTree.left = 2;
newTree.right = 3;
console.log(maxPathSum(newTree));

