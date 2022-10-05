'use strict';

class Node {
  constructor(value){
    this.value = value,
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
  peek(){
    if (this.top !== null){
      return this.top.value;
    } else {
      return 'Empty Stack';
    }
  }
}
let stack = new Stack();

class Queue {
  constructor(){
    this.front = null;
    this.last = null;
  }
  enqueue(value){
    if(this.front === null){
      this.front = new Node(value);
      this.last = this.front;
    } else {
      this.last.next =new Node(value);
      this.last = this.last.next;
    }
  }
  dequeue(){
    if(this.front === null){return 'empty queue';} else {
      let temp = this.front;
      this.front = this.front.next;
      return temp.value};
  }
  peek(){
    if(this.front === null){
      return 'empty queue';
    } else { return this.front.value};
  }
}

let queue = new Queue();

describe('Testing the various functions for stack', () => {
  test('Can push on to a stack', () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  test('Can push multiple values on to stack', () => {
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });
  test('Can pop off stack', () => {
    expect(stack.pop()).toEqual(3);
    expect(stack.top.value).toEqual(2);
  });
  test('Can empty stack', () => {
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });
  test('Can peek the next item', () => {
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  test('Can instantiate empty stack', () => {
    let emptyStack = new Stack;
    expect(emptyStack.top).toEqual(null);
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    let emptyStack = new Stack;
    expect(emptyStack.pop()).toEqual('Empty Stack');
    expect(emptyStack.peek()).toEqual('Empty Stack');
  });
});



describe('Testing queue methods', () => {
  test('Can enqueue', () => {
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });
  test('can enqueue multiple values', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
  });
  test('Can dequeue', () => {
    expect(queue.dequeue()).toEqual(1);
  });
  test('Can peek in the queue', () => {
    expect(queue.peek()).toEqual(2);
  });
  test('Can empty the queue', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
  });
  test('Can instantiate an empty queue', () => {
    let emptyqueue = new Queue;
    expect(emptyqueue.front).toEqual(null);
  });
  test('Calling dequeue or peek on an empty queue raises exception', () => {
    let emptyqueue = new Queue;
    expect(emptyqueue.peek()).toEqual('empty queue');
    expect(emptyqueue.dequeue()).toEqual('empty queue');
  });
});
