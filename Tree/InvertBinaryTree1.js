/*
    Invert a binary tree

        1
       2  3
    4   5 
   7
   
   1
  3  2
    5  4
          7

I : node is the root of the tree
    - node has value
    - node has left and right
O: reversed tree
    - node value is same
    - left and right are interchanged
C: no 
E: - node can be null // return null

- check if node is null
- Incase, if it is not null
    - check if it has left 
        // if left is null,
            // if not null check if it has left and right
            // use recursion 
    - check if it has right
        // if no right node
- Incase, if there is left and right
    - interchange both left and right by using temp
- return the tree
*/

const reverseTree = (node) => {
    if(node === null) {
        return null;
    };
    const BFS = (node) => {
        if(node.left || node.right) { // node.left = 2, node.right = 3
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
        } 
        reverseTree(node.left); 
        reverseTree(node.right); 
    };
    BFS(node);
    return node;
};

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const sampleTree = new Node();
sampleTree.value = 1;
sampleTree.left = new Node(2);
sampleTree.right = new Node(3);
sampleTree.left.left = new Node(4);   
sampleTree.left.right = new Node(5);   
sampleTree.left.left.left = new Node(7);   
reverseTree(sampleTree);
console.log(sampleTree);

