class Node {

    constructor(value) {
        this.next = null
        this.value = value
    }
}


class Queue {

    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue( node ) {
        
        if (this.head === null) {

            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

    }

    dequeue() {
        var dequeueElement = this.head
        if (this.head !== null) {
            
            this.head = this.head.next

            if (this.head === null) {
                this.tail = null
            }
        }

        return dequeueElement
    }

    print() {

        var node = this.head;

        while (node !== null) {
            console.log(node.value + ", ")
            node = node.next
        }
    }
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)

var queue = new Queue()
queue.enqueue(node1)
queue.enqueue(node2)
queue.enqueue(node3)
queue.dequeue()
queue.dequeue()
queue.dequeue()
node1 = new Node(1)
node2 = new Node(2)
node3 = new Node(3)
queue.enqueue(node2)
queue.enqueue(node3)
queue.enqueue(node1)

queue.print()
