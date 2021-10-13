class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(val) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return null;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      count++;
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let found = this.get(index);
    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let next = null;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = next;
    }
    return this;
  }
}
let list = new SinglyLinkedList();
list.push('Go');
list.push('Faster');
list.push('!!!!');
list.set(2, 'Chris');
list.get(2);
list.push('now');
list.remove(3);
