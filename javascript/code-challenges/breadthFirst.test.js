'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}
class Queue {
  constructor(){
    this.front = null;
    this.last = null;
  }
  enqueue(node){
    if(this.front === null){
      this.front = node;
      this.last = this.front;
    } else {
      this.last.next = node;
      this.last = this.last.next;
    }
  }
  dequeue(){
    if(this.front === null){return 'empty queue';} else {
      let temp = this.front;
      this.front = this.front.next;
      return temp.value;}
  }
  peek(){
    if(this.front === null){
      return 'empty queue';
    } else { return this.front.value;}
  }
}

class Tree {
  constructor(){
    this.root = null;
    this.maxVal = 0;
    this.bTraverseQueue = null;
  }
  bTraverse(){
    let bTraverseArray = [];
    this.bTraverseQueue = new Queue();
    this.bTraverseQueue.enqueue(this.root);
    this.recursiveTraverse(bTraverseArray);
    return bTraverseArray;
  }
  recursiveTraverse(array){
    while(this.bTraverseQueue.front !== null){
      this.bTraverseQueue.front.left !== null ? this.bTraverseQueue.enqueue(this.bTraverseQueue.front.left) : {};
      this.bTraverseQueue.front.right !== null ? this.bTraverseQueue.enqueue(this.bTraverseQueue.front.right) : {};
      let tempNode = this.bTraverseQueue.dequeue();
      array[array.length] = tempNode;

    }
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

describe('Testing the breadth first traverse method', () => {
  test('Breadth first traverse function should return an array', () => {
    let testTree = new Tree();
    testTree.root = new Node(5);
    testTree.root.right = new Node(8);
    testTree.root.left = new Node (2);
    testTree.root.left.right = new Node(20);
    testTree.root.left.left = new Node(1);
    expect(testTree.bTraverse()).toEqual([5, 2, 8, 1, 20]);
  });
});
