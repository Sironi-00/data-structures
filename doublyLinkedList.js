class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    getNext() {
        return this.next;
    }
    setNext(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error("not instance");
        }
    }
    getPrev() {
        return this.prev;
    }
    setPrev(node) {
        if (node instanceof Node || node === null) {
            this.prev = node;
        } else {
            throw new Error("not instance");
        }
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(data) {
        let oldHead = this.head;
        let newNode = new Node(data);
        this.head = newNode;
        if (!oldHead) {
            // when no head
            this.tail = newNode;
            return;
        }
        oldHead.setPrev(this.head);
        this.head.setNext(oldHead);

        if (!oldHead.getNext()) {
            // when old head was last
            this.tail = oldHead;
        }
    }
    addToTail(data) {
        let oldTail = this.head;
        while (oldTail.getNext()) {
            oldTail = oldTail.getNext();
        }
        let newNode = new Node(data);
        newNode.setPrev(oldTail);
        oldTail.setNext(newNode);
        this.tail = newNode;
    }
    addToTailPro(data) {
        let oldTail = this.tail;
        if (oldTail.getNext()) {
            throw new Error("Some how tail has next");
        }
        let newNode = new Node(data);
        newNode.setPrev(oldTail);
        oldTail.setNext(newNode);
        this.tail = newNode;
    }
    addAfter(dataFind, dataNew) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data == dataFind) {
                let newNode = new Node(dataNew);
                newNode.setPrev(currentNode);
                if (currentNode.getNext()) {
                    newNode.setNext(currentNode.getNext());
                    currentNode.getNext().setPrev(newNode);
                } else {
                    this.tail = newNode;
                }
                currentNode.setNext(newNode);
                break;
            }
            currentNode = currentNode.getNext();
        }
    }
    addAfterPro(dataFind, dataNew) {
        let currentHead = this.head;
        let currentTail = this.tail;
        let currentNode = null;
        
        while (currentHead && currentTail) {
            if (currentHead.data == dataFind || currentTail.data == dataFind) {
                currentNode = currentHead == dataFind ? currentHead : currentTail;

                const newNode = new Node(dataNew);
                newNode.setPrev(currentNode);
                if (currentNode.getNext()) {
                    newNode.setNext(currentNode.getNext());
                    currentNode.getNext().setPrev(newNode);
                } else {
                    this.tail = newNode;
                }
                currentNode.setNext(newNode);
                break;
            }
            currentHead = currentHead.getNext();
            currentTail = currentTail.getPrev();
        }
    }
    removeHead() {}
    removeTail() {}
    removeNode(data) {}
    printNodes() {
        let currentNode = this.head;
        let output = [];
        while (currentNode) {
            output.push(currentNode.data);
            currentNode = currentNode.getNext();
        }
        console.log(output);
    }
    printNodesPro() {
        let currentNode = this.head;
        let output = [];
        while (currentNode) {
            let be = currentNode.getPrev();
            let af = currentNode.getNext();
            output.push({ prev: be ? be.data : "", current: currentNode.data, next: af ? af.data : "" });
            currentNode = currentNode.getNext();
        }
        console.log(output);
    }
    getHead() {
        return this.head.data;
    }
    getTail() {
        return this.tail.data;
    }
}

const list = new doublyLinkedList();

list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.printNodes();

list.addToTail(10);
list.printNodes();

list.addAfter(2, 100);
list.printNodes();

console.log(list.getHead(), list.getTail());

console.log("Pro stuff");
const proList = new doublyLinkedList();
proList.addToHead(101);
proList.addToHead(102);
proList.addToHead(103);
proList.addToTail(104);
proList.printNodes()

proList.addAfterPro(101, 105);
proList.printNodes();

proList.addToTailPro(106);
proList.printNodes();

proList.printNodesPro();

