'use strict';

let treeOne = {
  root: {
    value: 10,
    left: {
      value: 20,
      left:null,
      right:null,
    },
    right: {
      value: 40,
      left:null,
      right:null
    },
  }
};


let treeTwo = {
  root: {
    value: 10,
    left: {
      value: 20,
      left:null,
      right:null,
    },
    right: {
      value: 30,
      left:null,
      right:null
    },
  }
};
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  treeIntersectionAdd(value){
    let index = (value * 599) % this.size;
    console.log(index);
    if(!this.table[index]){
      this.table[index] = 1;
      return false;
    } else{
      return true;
    }
  }
}


let binaryTreeMatch = (BTree1, BTree2) => {
  let counter = 0;
  let table = new HashTable(countFunction(BTree1));
  hashTableAdd(BTree1, table);

};

let hashTableAdd = (treeRoot, table) => {
  if(treeRoot.left){
    hashTableAdd(treeRoot.left);
  }
  if(treeRoot.right){
    hashTableAdd(treeRoot.right);
  }
  table.treeIntersectionAdd(treeRoot.value);
};

let countFunction = (BTreeRoot, counter) => {
  let left = 0;
  let right = 0;
  if(BTreeRoot.left){
    left = countFunction(BTreeRoot.left, counter);
  }
  if(BTreeRoot.right){
    right = countFunction(BTreeRoot.right, counter);
  }
  return counter + left + right + 1;
};
let newTable = new HashTable(3);
console.log(newTable.treeIntersectionAdd);
hashTableAdd(treeOne.root, newTable);

describe('Testing the various tree intersection functions', () => {
  test('Expect the tree intersection function to show the correct results', () => {
    // let treeIntersections = binaryTreeMatch(treeOne, treeTwo);
    // expect(treeIntersections).toEqual([10, 20]);
  });
  test('Expect our count function to return the correct number of nodes in the tree', () => {
    expect(countFunction(treeOne.root, 0)).toEqual(3);
  });
  test('Our hash table add function should add all values from a tree to the hash table.', () => {
    expect(newTable.table).toEqual(1);
  });
});
