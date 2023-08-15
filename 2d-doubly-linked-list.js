class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
        this.above = null;
        this.below = null;
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

    getAbove() {
        return this.above;
    }
    setAbove(node) {
        if (node instanceof Node || node === null) {
            this.above = node;
        } else {
            throw new Error("not instance");
        }
    }

    getBelow() {
        return this.below;
    }
    setBelow(node) {
        if (node instanceof Node || node === null) {
            this.below = node;
        } else {
            throw new Error("not instance");
        }
    }
}

class Grid {
    constructor() {
        this.xHead = null;
        this.xTail = null;
        this.yHead = null;
        this.yTail = null;
    }
    addX(data) {
        const oldHead = this.xHead;
        const newNode = new Node(data);

        if (oldHead) {
            newNode.setNext(oldHead);
            oldHead.setPrev(newNode);
        }
        this.xHead = newNode;
        return newNode;
    }
    addY(data) {
        if (!this.xHead) {
            return this.addX(data);
        }
        const oldHeadBelow = this.xHead.getBelow();
        const newNode = new Node(data);

        if (oldHeadBelow) {
            newNode.setNext(oldHeadBelow);

            oldHeadBelow.setPrev(newNode);
            oldHeadBelow.setAbove(null);
        }
        this.xHead.setBelow(newNode);
        return newNode;
    }
    print() {
        let currentHead = this.xHead;
        let current = this.xHead;

        let output = ``;
        while (current) {
            output += current.data;

            if (!current.getNext() && currentHead.getBelow()) {
                currentHead = currentHead.getBelow();
                current = currentHead;
                output += "#\n#";
            } else {
                current = current.getNext();
            }
        }
        console.log(`#${output}#`);
    }
}

const screen = new Grid();
screen.addX("1");
screen.addX("2");
screen.addX("3");

screen.addY("4");
screen.addY("5");
screen.addY("6");
screen.addY("7");

screen.addY("8");
screen.addY("9");
screen.addY("0");


screen.print();
