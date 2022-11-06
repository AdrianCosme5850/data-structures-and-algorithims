'use strict';

const { treeOne, treeTwo } = require('./trees.js');

// Take in two binary trees, return an array containg all values that are in both trees;

// const HashTable = require('../hashTables/HashTable');



// let binaryTreeMatch = (BTree1, BTree2) => {
//   let table = new HashTable()
// };


let countFunction = (treeRoot, counter) => {
  console.log(counter);
  if(treeRoot.left){
    countFunction(treeRoot.left);
  }
  if(treeRoot.right){
    countFunction(treeRoot.right);
  }
  return counter++;
};


describe('Testing the various tree intersection functions', () => {
  test('Expect the count node function to return the correct number of nodes in a tree', () => {
    console.log(treeOne);
  });
});
