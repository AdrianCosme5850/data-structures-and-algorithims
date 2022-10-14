'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  fizzBuzz(node){

    node.value % 3 === 0 && node.value % 5 === 0 ? node.value = 'FizzBuzz' :
      node.value % 3 === 0 ? node.value = 'Fizz' :
        node.value % 5 === 0 ? node.value = 'Buzz' :
          node.value = '' + node.value;
    for(let i = 0; i < node.children.length; i++){
      this.fizzBuzz(node.children[i]);
    }
    return this.value
  }
}


describe('Testing fizzBuzz function', () => {
  test('There fizzBuzz should turn all numbers divisible by three, five, and three and five into fizz, buzz, and Fizzbuzz respectively', () => {
    let testTree = new Tree();
    testTree.root = new Node(5);
    testTree.root.children[0] = new Node (6);
    testTree.root.children[0].children[0] = new Node(30);
    testTree.root.children[0].children[1] = new Node(12);
    testTree.root.children[0].children[2] = new Node(15);
    testTree.root.children[1] = new Node (1);
    testTree.root.children[1].children[0] = new Node (15);
    testTree.root.children[2] = new Node (4);
    testTree.root.children[2].children[0] = new Node (9);
    testTree.root.children[2].children[1] = new Node (2);
    testTree.fizzBuzz(testTree.root);
    expect(testTree.root.children[1].children[0].value).toEqual('FizzBuzz');
    expect(testTree.root.children[0].children[1].value).toEqual('Fizz');
    expect(testTree.root.value).toEqual('Buzz');
  })
})
