/*Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the 
root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
Problem 104: https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/

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
var maxDepth = function(root) {
    var maxDepth = function(root) {
        // create a depth variable
        let maxDepth = 0;
        // creating a closure function
        let BFS = (node, level) => {
            // recursion base case
            // First I need to check if there is a root node
            if(node === null) return;
            // incase level is greater than the depth value change the depth value to level
            if(level > maxDepth) maxDepth = level; 
                // recursively invoking the closure function with left and right nodes      
                BFS(node.left, level+1);
                BFS(node.right, level+1);
        };
        // initial function invocation
        BFS(root, 1);
        // return depth value
        return maxDepth;
    };
};

console.log(maxDepth(root));
