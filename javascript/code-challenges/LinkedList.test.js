'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the head/
  // create a newNode using value
  // set the newNodes's next property equal to the ll.head
  // set the head ll, equal to the new node.
  // inserting at head has 0(1) time complexity, space complexity 0(1)

  // insert at tail
  // create a newNode using value
  // traverse to the end. 0(n)
  // current should be the tail (or close to it),
  // set current.next equal to newNode
  // set ll.tail equal to newNode 0(1)
  insert(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  // Does a value exist within the linked list.
  // traverse to the end. 0(n)
  //  if we read a value that equals our input value, return true
  //  if we reach the end of our traversal, return false.
  includes(value) {
    let current = this.head;
    while(current !== null){
      if(current.value === value){
        return true;
      } else{
        current = current.next;
      }
    }
    return false;
  }

  // read each value stored and append to a string 0(n) space, 0(n) time
  // traverse to the end.
  // for each value, append value to string.
  // return string after traversal is done.
  toString() {
    let current = this.head;
    let string = '';
    while(current !== null){
      string = string + current.value;
      current = current.next;
    }
    return string;
  }
}

let linkedList = new LinkedList();
// linkedList.head = new Node(1);
// linkedList.head.next = new Node(2);
// linkedList.head.next.next = new Node(3);
// linkedList.head.next.next.next = new Node(4);

// traversal => read every value from the beginning to the end.
function traverse(ll) {  // (n) = 4
  let current = ll.head;
  while (current !== null) {
    console.log(current.value); // do something with the value
    current = current.next;
  }
}
// time complexity = 0(n)
// space complexity = 0(1)

// traverse(linkedList);


describe('testing the Linked List data structure', () => {
  test('Can successfully instantiate an empty linked list', () => {
    expect(linkedList.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    linkedList.head = new Node(2);
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });

  test('The head property will properly point to the first node in the linked list', () => {
    expect(linkedList.head.value).toEqual(1);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    linkedList.head.next = new Node(2);
    linkedList.head.next.next = new Node(3);
    linkedList.head.next.next.next = new Node(4);
    expect(linkedList.head.next.next.next.value).toEqual(4);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    expect(linkedList.includes(4)).toEqual(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(linkedList.includes(90)).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(linkedList.toString()).toEqual('1234');
  });
});
