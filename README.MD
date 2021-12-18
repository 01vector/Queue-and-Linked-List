# Queue and Linked List

Stack and queue are the simplest of complex data structures.

There are two basic methods for organizing the manipulation of a data structure:
1) FIFO (First In First Out),
2) LIFO (Last In Last Out).

**FIFO** - is a method of organizing the manipulation of a data structure (queue), where elements that we choose are inserted into the end (tail) of structure and extracted of the entry (head) of structure solely.

**LIFO** - is a method of organizing the manipulation of a data structure (stack), where elements that we choose are inserted and extracted into / from the end of structure solely.

==>

**Stack** - is a data structure that is orginised according to the principe of LIFO.
**Queue** - is a data structure that is orginised according to the principe of FIFO.

==>

**Methods and difficulties**

#### QUEUE:

1) **enQueue()**

**PURPOSE:** to add element into the end (tail) of the queue.
**DIFFICULTY:** O(1).

2) **deQueue()**

**PURPOSE:** to return element of the beginning (head) of the queue.
**DIFFICULTY:** O(1).

3) **peek()**

**PURPOSE:** to return element of the beginning (head) of the queue but doesn't delete this item.
**DIFFICULTY:** O(1).

4) **count()**

**PURPOSE:** to return a number of a quantity of elements of the queue (size).
**DIFFICULTY:** O(1).

P.S. We are going to use an array for easy reading but an usage a linked list is better because the linked list allows to improve our structure. For example, LL allows to create a **double-ended queue** because we can add elements into the head and the tail of the queue.