'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    if(this.head === null){
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
    } else {
      let newHead = new Node(value);
      newHead.next = this.head;
      newHead.next.previous = newHead;
      this.head = newHead;
      this.length++;
    }
  }

  fromTheEnd(value){
    if(this.length <= value){return 'List is not long enough'};
    if(value < 0){return 'no negative numbers'}
    let current = this.tail;
    for(let i = 0; i < value; i++){
      current = current.previous;
    }
    return current.value;
  }

}

let testLinkedList = new LinkedList();
testLinkedList.insert(1);
testLinkedList.insert(2);
testLinkedList.insert(3);
testLinkedList.insert(4);
testLinkedList.insert(5);

describe('Testing the from the end function', () => {
  test('testing where k is greater than the linked list', () => {
    expect(testLinkedList.fromTheEnd(6)).toEqual('List is not long enough');
  });
  test('where k and the list are the same length', () => {
    expect(testLinkedList.fromTheEnd(5)).toEqual('List is not long enough');
  });
  test('where k is not positive', () => {
    expect(testLinkedList.fromTheEnd(-5)).toEqual('no negative numbers');
  });
  test('linked list is size of 1', () => {
    let singlell = new LinkedList;
    singlell.insert(1);
    expect(singlell.fromTheEnd(0)).toEqual(1);
  });
  test('testing k in the middle of the list', () => {
    expect(testLinkedList.fromTheEnd(3)).toEqual(4);
  });
});
