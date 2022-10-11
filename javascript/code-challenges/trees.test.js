'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(){
    this.root = null;
    this.preorderArray = [];
    this.inorderArray = [];
    this.postorderArray = [];
    this.contain = false;
  }
  preorder(node) {
    this.preorderArray[this.preorderArray.length] = node.value;
    if(node.left){
      this.preorder(node.left);
    }
    if(node.right){
      this.preorder(node.right);
    }
  }

  inorder(node) {
    if(node.left){
      this.inorder(node.left);
    }
    this.inorderArray[this.inorderArray.length] = node.value;
    if(node.right){
      this.inorder(node.right);
    }
  }

  postorder(node) {
    if(node.left){
      this.postorder(node.left);
    }
    if(node.right){
      this.postorder(node.right);
    }
    this.postorderArray[this.postorderArray.length] = node.value;
  }
}

class BinaryTree extends Tree {
  add(value){
    let newNode = new Node(value);
    let current = this.root;
    while(value){
      if(this.root === null){
        this.root = newNode;
        break;
      }
      if(current === null){
        current = newNode;
        break;
      } else if (current.value < newNode.value && current.right === null){
        current.right = newNode;
        break;
      } else if (current.value > newNode.value && current.left === null){
        current.left = newNode;
        break;
      }
    }
  }

  contains(value, node){
    if(node.value === value){
      this.contains = true;
    } else if (node.left !== null){
      this.contains(value, node.left);
    } else if (node.right !== null){
      this.contains(value, node.right);
    }
  }
}
let newTree = new BinaryTree;
describe('Testing tree methods', () => {
  test('Can instantiate an empty tree', () => {
    let emptyTree = new Tree;
    expect(emptyTree.root).toEqual(null);
  });
  test('Can instantiate a tree with a sngle root node', () => {
    let oneNodeTree = new BinaryTree;
    oneNodeTree.add(1);
    expect(oneNodeTree.root.value).toEqual(1);
  });
  test('Can add a left and a right node to the binary search tree', () => {
    newTree.add(5);
    newTree.add(2);
    newTree.add(7);
    expect(newTree.root.left.value).toEqual(2);
    expect(newTree.root.right.value).toEqual(7);
  });
  test('Can return a collection from a preorder traversal', () => {
    newTree.preorder(newTree.root);
    expect(newTree.preorderArray).toEqual([5, 2, 7]);
  });
  test('Can return a collection from an inorder traversal', () => {
    newTree.inorder(newTree.root);
    expect(newTree.inorderArray).toEqual([2, 5, 7]);
  });
  test('Can return a collection from a post order collection', () => {
    newTree.postorder(newTree.root);
    expect(newTree.postorderArray).toEqual([2, 7, 5]);
  });
  test('returns false for the contains method with a value', () => {
    newTree.contains(10, newTree.root);
    expect(newTree.contain).toEqual(false);
  });
});
