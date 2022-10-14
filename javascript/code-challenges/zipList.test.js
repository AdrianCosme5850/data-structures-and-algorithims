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
}

function zipList (ll1, ll2) {
  let newList = new LinkedList();
  let current1 = ll1.head;
  let current2 = ll2.head;
  while(current1 !== null || current2 !== null){
    if (current1 !== null) {newList.insert(current1.value); current1 = current1.next;}
    if (current2 !== null) {newList.insert(current2.value); current2 = current2.next;}
  }
  return newList;
}

describe('Testing ziplist function', () => {
  test('should zip two list of equal length', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(1);
    list1.insert(1);
    let list2 = new LinkedList();
    list2.insert(2);
    list2.insert(2);
    list2.insert(2);
    let list3 = zipList(list1, list2);
    expect(list3.head.next.next.value).toEqual(2);
  });
  test('should zip two list of unequal length', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    let list2 = new LinkedList();
    list2.insert(2);
    list2.insert(2);
    list2.insert(2);
    let list3 = zipList(list1, list2);
    expect(list3.head.next.next.value).toEqual(2);
  });
})
