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
    this.maxVal = 0

  }
  preorder(node) {
    node.value > this.maxVal ? this.maxVal = node.value : {};
    if(node.left){
      this.preorder(node.left);
    }
    if(node.right){
      this.preorder(node.right);
    }
  }

  max() {
    this.preorder(this.root);
    return this.maxVal;
  }
}

describe('Testing the max tree function', () => {
  test('Should return the maximum number in a binary tree.', () => {
    let testTree = new Tree();
    testTree.root = new Node(5);
    testTree.root.left = new Node (2);
    testTree.root.left.right = new Node(20);
    testTree.root.left.left = new Node(1);
    expect(testTree.max()).toEqual(20);
  });
});
