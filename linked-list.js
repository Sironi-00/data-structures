class Node {
    constructor(data) {
        this.data = data
        this.next = null
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
}

class LinkedList {
    constructor() {
        this.head = null
    }
    addToHead(data) {
        const currentHead = this.head;
        this.head = new Node(data);
        if (currentHead) {
            this.head.setNext(currentHead);
        }
    }
    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data)
            return;
        }
        if (!tail.getNext()) {
            this.head.setNext(new Node(data));
        } else {
            while (tail.getNext()) {
                tail = tail.getNext();
            }
            tail.setNext(new Node(data));
        }
    }
    removeNode (data) {
        let currentNode = this.head;
        let prevNode = null;
        if (!currentNode) return
        if (currentNode.data == data) {
            this.head = currentNode.getNext();
        }
        while (currentNode) {
            if (currentNode.data == data) {
                prevNode.setNext(currentNode.getNext())
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.getNext();
        }
    }
    removeHead() {
        const oldHead = this.head; 
        if (oldHead) {
            this.head = oldHead.getNext();
            return oldHead;
        }
    }
    removeTail() {
        let currentNode = this.head;
        if (!currentNode.getNext()) {
            this.head = null;
            return currentNode;
        } else {
            let before = currentNode;
            while (currentNode.getNext()) {
                currentNode = currentNode.getNext();
                if (currentNode.getNext()) {
                    before = currentNode;
                }
            }
            before.setNext(null);
            currentNode = null;
        }
    }
    printNodes() {
        let currentNode = this.head;
        let output = []
        while (currentNode) {
            output.push(currentNode.data);
            currentNode = currentNode.getNext();
        }
        console.log(output);
    }
    findNode(data) {
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.data == data) {
                return currentNode;
            }
            currentNode = currentNode.getNext(); 
        }
        return -1;
    }
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(2)
list.addToHead(3)
list.addToHead(5)
list.addToTail(0)
list.addToTail(4)

list.printNodes()

list.removeNode(1)
list.printNodes()

list.removeHead()
list.printNodes()

list.removeTail()
list.printNodes()

console.log(list.findNode(0))

const swapNodes = (list, data1, data2) => {
    let node1Prev = null;
    let node1 = list.head;
    
    while (node1) {
        if (node1.data == data1) {
            break;
        }
        node1Prev = node1;
        node1 = node1.getNext();
    }
    
    let node2Prev = null;
    let node2 = list.head;

    while (node2) {
        if (node2.data == data2) {
            break;
        }
        node2Prev = node2;
        node2 = node2.getNext();
    }
    if (!node1Prev) {
        list.head = node2;
    } else {
        node1Prev.setNext(node2);
    }
    if (!node2Prev) {
        list.head = node1;
    } else {
        node2Prev.setNext(node1);
    }
    let temp = node1.getNext();
    node1.setNext(node2.getNext());
    node2.setNext(temp)
}

swapNodes(list, 0, 2);
list.printNodes()

// Reverse
const reverseList = (list) => {
    let newList = new LinkedList();
    let currentNode = list.head;
    while (currentNode) {
        newList.addToHead(currentNode.data);
        currentNode = currentNode.getNext();
    }
    return newList;
}

reverseList(list).printNodes()