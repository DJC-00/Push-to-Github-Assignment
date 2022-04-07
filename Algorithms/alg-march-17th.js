class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    // constructor equivalent in python
    // def __init__(self==this, value):
    //     self.value = value
    //     self.next = null
}

class SLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        // #1 - create our new node
        // node = Node(value) < --- python version
        var newNode = new Node(value);

        // if the sll has nothing in it
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // # 2 - connecting new node to list
            newNode.next = this.head;

            // # 3 - verifying that our pointers are correct
            this.head = newNode;
        }
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // #1 - create new node
        var newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // #2 - connecting new node to the sll
            this.tail.next = newNode;

            // #3 - verify pointers are correct
            this.tail = newNode;
        }
    }

    // print the value in the singly linked list
    printValues() {
        // what if the list is empty?
        if (this.head == null) {
            console.log("This list is empty!")
        } else {
            var runner = this.head;
            while (runner != null) {
                console.log(`${runner.value} --> `);
                runner = runner.next;
            }
            console.log("null")
        }
    }

    // return true/false based on whether you find the value
    contains(value) {
        // what if our list is empty?
        if (this.head == null) {
            return false;
        } else {
            var runner = this.head;
            while (runner != null) {
                if (runner.value == value) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    // remove the first item in the sll
    removeFromFront() {
        if (this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
        }
        // if we simply move out head pointer over, that creates a new entry point to our list 
        // we cannot traverse backwards!
        this.head = this.head.next

        // ** See altRemoveFromFront() for a slightly different approach!
    }

    altRemoveFromFront() {
        if (this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
        }

        // an additional 'edge case like' scenario:
        // if we access the previous node in some other way, it would have access to the list
        // to rememedy this, we can point the original head away from the list in addition to moving the head pointer

        // store the original head in a temp variable
        var temp = this.head
        // move the heqad pointer to the next locations
        this.head = this.head.next
        // point the temp variable's .next out to null
        temp.next = null
        // the order in which these things happen is important! suggest drawing it out and following the steps to see :)
    }

    // remove the last item in the sll
    removeFromBack() {
        // this handles 2 edge cases: nothing in list, and only 1 item in list
        if (this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // ** alternate edge case handling, handles if there is only 1 items in the list or no items separately
        // if(this.head == null) {
        //     console.log("Nothing in the list! Cannot remove from back")
        //     return this
        // }
        // if(this.head.next == null) {
        //     this.head = null;
        //     this.tail = null;
        //     return this
        // }
        // set runner to start at the beginning of list
        var runner = this.head;

        // run all the way through this list until you hit the second to last item and stop
        while (runner.next.next != null) {
            runner = runner.next
        }
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;

        // move the tail pointer to be on the runner's location, keeping it in the list
        this.tail = runner;
        return this
    }

    // locate the node with the lowest value, remove it from it's current location, and move it to the front of the sll
    minToFront() {
        // your code here
        var lowNode = this.head;
        var lowPrev = 0;
        var runner = this.head;
        while (runner.next != null){
            if (runner.next.value < lowNode.value){
                lowNode = runner.next;
                lowPrev = runner;
            }
            runner = runner.next
        }
        if(lowNode == this.head){
            console.log("List is in correct order")
        }

        else{
            if(lowNode == this.tail){
                this.tail = lowPrev
            }
            lowPrev.next = lowNode.next;
            lowNode.next = this.head;
            this.head = lowNode;

        }
    }

    // locate the node with the highest value, remove it from it's current location, and move it to the back of the sll
    maxToBack() {
        // your code here
        var highNode = this.head;
        var highPrev = this.head;
        var runner = this.head;
        while (runner.next != null){
            
            if (runner.next.value > highNode.value){
                highNode = runner.next;
                highPrev = runner;
                
            }
            runner = runner.next
        }
        if(highNode == this.tail){
            console.log("List is in correct order")
        }
        else{
            if (highPrev == highNode){
                return this;
            }
            highPrev.next = highNode.next;
            highNode.next = null;
            this.tail.next = highNode;
            this.tail = highNode;

        }
    }
    
    // find the location in the list and add a node with the given value AFTER that location
    appendVal(value, location) {
        // your code here
        // create new node
        // create for loop using loc as end point
        // nodeaAtLoc| newnode | nodeAtLoc.next
        // newnode.next = nodeAtLoc.next
        // nodeAtLoc.next = newnode

        var newNode = new Node(value);
        var nodeAtLoc = this.head;
        if(location < 1){
            console.log("Invalid location given")
            return
        }
        for(var i = 1; i < location; i++){
            if (nodeAtLoc.next == null){
                console.log("Location given is outside of list")
                return
            }
            nodeAtLoc = nodeAtLoc.next
        }

        newNode.next = nodeAtLoc.next;
        nodeAtLoc.next = newNode;

        if (nodeAtLoc = this.tail){
            newNode = this.tail
        }

        
        // |Node|->|Node|->|Node|->|Node|->|Node|->null
        //                       /\
        //                    |nNode|

        //|Node|->|Node|->|Node|->|nNode|->|Node|->|Node|->null

        // arr = [1,2,3,4,5] pos=2 arr[pos] arr[2]
        // arr[pos + 1]

    }
    
    // find the location in the list and add a node with the given value BEFORE that location
    prependVal(value, location) {
        // your code here

        var newNode = new Node(value);
        var nodeAtLoc = this.head;
        if(location < 1){
            console.log("Invalid location given")
            return
        }

        if(location == 1){
            this.addToFront(value)
            return
        }

        for(var i = 1; i < (location - 1); i++){
            if (nodeAtLoc.next == this.tail){
                console.log("Location given is outside of list")
                return
            }
            nodeAtLoc = nodeAtLoc.next
        }
        newNode.next = nodeAtLoc.next;
        nodeAtLoc.next = newNode;

        if (nodeAtLoc = this.head){
            newNode = this.head
        }
    }
}


var sll = new SLList();
var newList = SLList
sll.printValues();
sll.addToFront(32);
sll.addToFront(32);
sll.addToFront(22);
sll.addToBack(6);
sll.addToBack(5);
sll.addToBack(4);
sll.printValues();
console.log("========================================")
console.log(sll.contains(9));
console.log(sll.contains(47));
console.log(sll.contains(25));
console.log("========================================")
//sll.printValues();
console.log("========================================")
sll.printValues();
console.log("========================================")
sll.minToFront();
sll.printValues();
console.log("========================================")
sll.maxToBack()
sll.printValues();
console.log("========================================")
sll.prependVal(99,1)
sll.printValues();
console.log(sll.head)