'use strict'

/*
    Current queue is implemented by the linked list.
    Also, it could be implemented by the array in JS (through the methods push(), pop()).
    There is the base of queue's implementation that could be expended if it necessary 
    (for example, double-ended queue). 
*/

class LinkedList {  // linked list

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addHead(value) {  // add the head to the linked list 
        const new_Node = new Node(value, this.head);

        this.head = new_Node;
        if (!this.tail) {
            this.tail = new_Node;
        } 
        return this;
    }

    addTail(value) {  // add the tail to the linked list 
        const new_Node = new Node(value);

        if (!this.head || !this.tail) {
            this.head = this.tail = new_Node;
        } else {
            this.tail.next = this.tail = new_Node;
        }
        return this;
    }

    // It is the recursive function. It is better to use the loop 
    deleteValue(value) {  // delete the input value 

        if (!this.head) return null;

        const deleteFunc = (delete_value, list) => {
            const value = delete_value;
            let deleted_node;
            let current_node = list.head;

            return function deleteRecursion() {
                if (list.head.value === value) {
                    deleted_node = list.head;
                    current_node = list.head = list.head.next;
                }
                if (current_node.next !== null && current_node.next.value === value) {
                    deleted_node = current_node.next;
                    current_node.next = current_node.next.next;
                } 
                if (!current_node || !current_node.next) {
                    list.tail.value === value ? list.tail = current_node : 0;
                    return !deleted_node ? null : deleted_node;
                }
                if (current_node.next != null) current_node = current_node.next;
                return deleteRecursion(list);
            }
        }

        return deleteFunc(value, this)();
    }

    find(value) {  // find the input value 
        if (!this.head) return null;
        let current_node = this.head;

        while (current_node) {
            if (current_node.value !== undefined && current_node.value === value) {
                return current_node;
            }
            current_node = current_node.next;
        }
    }

    deleteHead(method) {  // delete the head of the linked list 
        if (!this.head) {
            return null;
        }
        
        const deleted_node = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = this.tail = null;
        }

        switch (method) {
            case 'head' || !method:
                return this.head;
            case 'deleted':
                return deleted_node;
        }
    }

    deleteTail() {  // delete the tail of the linked list
        if (!this.head) {
            return null;
        }

        const deleted_node = this.tail;
        let current_node = this.head;

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return deleted_node;
        }
        
        while (current_node.next) {
            if (!current_node.next.next) {
                current_node.next = null;
                this.tail = current_node;
            } else {
                current_node = current_node.next;
            }
        }

        return deleted_node;
    }

    addFromArr(values) {  // insert the elements of the input array 
        values.forEach(value => this.addTail(value));
        return this;
    }

    addToArr() {  // return the array consisted of the list elements
        const list_array = [];
        let current_node = this.head;

        while (current_node) {
            list_array.push(current_node);
            current_node = current_node.next;
        }

        return list_array;
    }

    count() {  // return the quantity of the elements of the linked list 
        if (!this.head) {
            return null;
        }

        let count = 0;
        let current_node = this.head;
        while (current_node) {
            ++count;
            current_node = current_node.next;
        }

        return count;
    }
}

class Node {  // the node of the linked list
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(func) {
        return func ? func(this.value) : `${this.value}`;
    }
}

class Queue {  // queue 
    constructor(...start_elements) {
        this.queue = new LinkedList();  // create queue (the linked list object)

        if (start_elements.length > 0) {
            this.queue.addFromArr(start_elements);
        }
    }

    enqueue(value) {  // insert the element to the entry of the queue 
        this.queue.addTail(value);
        return this.queue.tail === value ? true : false;
    }

    dequeue() {  // extract the element from the end of the queue 
        return this.queue.deleteTail();
    }

    peek() {  // show the tail's element 
        return this.queue.tail;
    }

    count() {  // return the queue size 
        return this.queue.count();
    }
}

let queue_1 = new Queue(1, 3, 5);
console.log(queue_1); // show the queue_1 object (our queue)