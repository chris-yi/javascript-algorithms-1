import DoublyLinkedListNode from './DoublyLinkedListNode-practice';

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // prepend(value) {
  //   const newNode = new DoublyLinkedListNode(value, this.head);

  //   if (this.head) {
  //     this.head.prev = newNode;
  //   }
  //   this.head = newNode;

  //   if (!this.tail) {
  //     this.tail = newNode;
  //   }

  //   return this;
  // }

  // append(value) {
  //   const newNode = new DoublyLinkedListNode(value);

  //   if (!this.head) {
  //     this.head = newNode;
  //     this.tail = newNode;

  //     return this;
  //   }

  //   this.tail.next = newNode;
  //   newNode.previous = this.tail;
  //   this.tail = newNode;

  //   return this;
  // }

  push(val) {
    const newNode = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.count += 1;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.count += 1;
    return this;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    const removedTail = this.tail;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }

    this.count -= 1;
    return removedTail;
  }
}
