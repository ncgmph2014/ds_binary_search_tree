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
  //bst stands for binary search tree
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
          //new nodes that are less than the parent are like beyonce, because they go to the left, to the left.
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
      return searchTree(node);
    }
  }
  //these functions work now; before they wouldn't because i didn't include them in the class
  findMin() {
    //because the smaller numbers go to the left
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    //because larger numners go to the right
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
    }
    if (data < current.data) {
      current = current.left;
    } else {
      current.right;
    }
    return false;
  }
}
