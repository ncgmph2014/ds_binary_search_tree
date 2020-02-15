/*Binary Search Tree*/
//binary trees can only have two branches for every node
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          //basically this means this should be the left side
          if (node.left === null) {
            //if there is nothing to the left, put something to the left
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            //i.e. if there is a node on the left, show me what it is.
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
    }
    return searchTree(node);
  }
}
