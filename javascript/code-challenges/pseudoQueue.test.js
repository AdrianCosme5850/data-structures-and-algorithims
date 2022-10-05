'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    let temp = null;
    this.top !== null ? temp = this.top : {};
    let newValue = new Node(value);
    this.top = newValue;
    this.top.next = temp;
  }
  pop(){
    let temp = null;
    if(this.top !== null){
      temp = this.top;
      this.top = temp.next;
    }
    if(temp === null){
      return 'Empty Stack';
    } else {
      return temp.value;
    }
  }
}

class Queue {
  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    while(this.stack1.top !== null){
      this.stack2.push(this.stack1.pop());
    }
    let temp = this.stack2.pop();
    while(this.stack2.top !== null){
      this.stack1.push(this.stack2.pop());
    }
    return temp;
  }

}

let queue = new Queue;
describe('Tests for my pseudo queue', () => {
  test('Can dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
  });
});
