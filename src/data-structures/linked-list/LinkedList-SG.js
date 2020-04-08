import Node from './LinkedListNode-SG';

export default class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length += 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;

    this.head = currentHead.next;
    this.length -= 1;

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.count += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count !== index) {
      current = current.next;
      count += 1;
    }

    return current;
  }

  set(val, index) {
    const nodeToChange = this.get(index);

    if (nodeToChange) {
      nodeToChange.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = this.get(index);

    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length += 1;
    return true;
  }
}
