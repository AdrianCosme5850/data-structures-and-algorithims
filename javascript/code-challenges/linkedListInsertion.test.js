'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}
class LinkedList {
  constructor(){
    this.head = null;
  }
  append(value){
    let temp = this.head;
    let newNode = new Node(value);
    while(temp.next !== null){
      temp = temp.next;
    }
    temp.next = newNode
  }
  insert(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }
  insertBefore(oldValue, newValue){
    let temp = this.head;
    let newNode = new Node(newValue);
    if(temp.value === oldValue){newNode.next = temp;
      this.head = newNode;
    } else{
      while(temp.next.value !== oldValue ){
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
    }}
  insertAfter(oldValue, newValue){
    let temp = this.head;
    let newNode = new Node(newValue);
    if(temp.value === oldValue){newNode.next = temp.next;
      temp.next = newNode;
    } else{
      while(temp.value !== oldValue ){
        temp = temp.next;
      }
      console.log(temp.value)
      newNode.next = temp.next;
      temp.next = newNode;
    }}
}
const linkedList = new LinkedList()
linkedList.insert(1);


describe('testing linked list functions', () => {
  test('Can add a node to the end of a linked list', () => {
    linkedList.append(2);
    expect(linkedList.head.next.value).toEqual(2);
  });
  test('Can add multipl to the end of a list', () => {
    linkedList.append(3);
    linkedList.append(4);
    expect(linkedList.head.next.next.next.value).toEqual(4);
  });
  test('Can insert a node before a node located at i in the list', () => {
    linkedList.insertBefore(2, 5);
    expect(linkedList.head.next.value).toEqual(5);
  });
  test('can insert a node before the first node of a linked list', () => {
    linkedList.insertBefore(1, 5);
    expect(linkedList.head.value).toEqual(5);
  });
  test('Can insert a node after a node in the middle', () => {
    linkedList.insertAfter(1, 6);

    expect(linkedList.head.next.next.value).toEqual(6);
  });
  test('Can insert a node after the last node', () => {
    linkedList.insertAfter(4, 7);
    expect(linkedList.head.next.next.next.next.next.next.next.value).toEqual(7);
  });
})
