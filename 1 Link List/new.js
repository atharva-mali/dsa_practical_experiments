class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);

        var current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            console.log("Please enter a valid index.");
        } else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log("Please Enter a valid index");
        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            console.log("Removed element:", curr.element);
        }
    }

    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                console.log("Removed element:", current.element);
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        console.log("Element not found:", element);
        return -1;
    }

    indexOf(element) {
        var count = 0;
        var current = this.head;

        while (current != null) {
            if (current.element === element) {
                console.log("Index of", element + ":", count);
                return count;
            }
            count++;
            current = current.next;
        }

        console.log("Element not found:", element);
        return -1;
    }

    isEmpty() {
        console.log("Is List Empty:", this.size === 0);
        return this.size === 0;
    }

    size_of_list() {
        console.log("List Size:", this.size);
    }

    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log("List Contents:", str);
    }
}

var ll = new LinkedList();

ll.isEmpty();

ll.add(10);

ll.printList();

ll.size_of_list();

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("Is element removed? " + ll.removeElement(50));

ll.printList();

console.log("Index of 40: " + ll.indexOf(40));
ll.insertAt(60, 2);

ll.printList();

console.log("Is List Empty? " + ll.isEmpty());

console.log("Removed element:", ll.removeFrom(3));

ll.printList();
