
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLList{
    constructor() {
        this.head = null
        this.tail = null
    }

   /* Determine whether the list is empty. */
   IsEmpty()
   {
       if (this.head == this.tail && this.head == null){
           return true
       }
   }

    addFront(value){
        var newNode = new Node(value)
        if (this.IsEmpty()){
            newNode.next = null
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
        }
        this.head = newNode
        return
    }

    printList(){
        if (this.IsEmpty()){
            return("Cannot print empty List")
        }
        var runner = this.head
        while (runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }

    /* Insert a node with the given value to the end of the list */
    pushBack(value)
    {
        var newNode = new Node(value)
        newNode.next = null
        if (this.IsEmpty()){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = this.tail.next
        }
        return this
    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        if(arr.length > 0){
            for(var i = 0; i < arr.length; i++){
                this.pushBack(arr[i])
            }
        }
        else{
            console.log("Array is empty.")
        }
        return this
    }

    popBack(){
        if (this.IsEmpty()){
            return console.log("Cannot pop values from empty list")
        }
        let runner = this.head
        while (runner.next.next != null){
            runner = runner.next
            
        }
        runner.next.value = null;
        runner.next = null;
        this.tail = runner;
    }

    /**
     * Removes the first node of this list.
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        let temp = new Node
        if(!this.IsEmpty()){
            
            temp.value = this.head.value;
            this.head= this.head.next 
            temp.next = null;
            return temp.value
        }
    }
    
    // EXTRA
    /**
     * Calculates the average of this list.
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        if (this.IsEmpty()){
            return false;
        }
        let sum = 0;
        let count = 0
        let runner = this.head
        while (runner.next != null){
            count++
            sum += runner.value
            runner = runner.next
        }
        let avg = sum/count
        return avg
    }
    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        if(this.IsEmpty()){
            return ("List is empty")
        }
        let runner = this.head
        while (runner.next.next != null){
            runner = runner.next
        }
        this.tail = runner;
        runner.next = null;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        if(this.IsEmpty()){
            return ("List is empty")
        }
        let runner = this.head
        while (runner.next.next != null){
            if (runner.value == val){
                console.log(val + " found")
                return true
            }
            else{
                runner = runner.next
            }
        }
        console.log(val + " not found")
        return false
    }
    
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if(this.IsEmpty()){
            return ("List is empty")
        }
        if(current == null){
            console.log(val + " not found")
            return false
        }
        else if (current.value == val){
            console.log(val + " found")
            return true
        }
        else{
            return this.containsRecursive(val, current.next)
        }
    }
    
    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    //  recursiveMax(current = this.head, maxNode = this.head) {
    //     if(this.IsEmpty()){
    //         return ("List is empty")
    //     }
    //     console.log(current.value, maxNode.value)
    //     if(current.next == null){
    //         console.log("Max value: " + maxNode.value)
    //         return maxNode.value
    //     }
    //     else if (current.value > maxNode.value){
    //         console.log("new Max found")
    //         maxNode = current
    //         current = current.next
    //         return this.recursiveMax(current, maxNode)
    //     }
    //     else{
    //         console.log("looping")
    //         current = current.next
    //         return this.recursiveMax(current, maxNode)
    //     }
    // }

    recursiveMax(current = this.head, maxNode = this.head) {
        console.log("<><><><><><><><><><><><><><>")
        if(this.IsEmpty()){
            return ("List is empty")
        }
        //console.log("Current: " + current.value + " Max: " +  maxNode.value)
        if(current == null){
            console.log("==================")
            console.log("Max value: " + maxNode.value)
            console.log("==================")
            return maxNode.value
        }
        console.log("Current: " + current.value + " Max: " +  maxNode.value)
        if (current.value > maxNode.value){
            console.log("New Max found")
            console.log("Set Max to Current Value")
            maxNode = current
            return this.recursiveMax(current.next, maxNode)
        }
        else{
            console.log("Max >= Current")
            console.log("looping")
            return this.recursiveMax(current.next, maxNode)
        }
    }

    recursiveMaxNoLog(current = this.head, maxNode = this.head) {
        if(this.IsEmpty()){
            return ("List is empty")
        }
        //console.log("Current: " + current.value + " Max: " +  maxNode.value)
        if(current == null){
            return maxNode.value
        }
        if (current.value > maxNode.value){
            maxNode = current
            return this.recursiveMax(current.next, maxNode)
        }
        else{
            return this.recursiveMax(current.next, maxNode)
        }
    }
};

myArr = [123,2,3,4,5,6,7]
myTestArr = [1,2,3,4,5,6,7]
myList = new SLList
myListTwo = new SLList
myListThree = new SLList
console.log("-=-=-=-=-=-=-= List 1 =-=-=-=-=-=-=-=")
myList.addFront(4)
myList.addFront(3)
myList.addFront(7)
myList.addFront(9)
myList.pushBack(11)
myList.pushBack(12)
myList.pushBack(13)
myList.PushBackN(myArr)
myList.printList()

console.log("\n-=-=-=-=-=-=-= List 2 =-=-=-=-=-=-=-=")
myListTwo.PushBackN(myArr)
myListTwo.printList()

console.log("\n-=-=-=-=-=-=-= List 3 =-=-=-=-=-=-=-=")
myListThree.pushBack(99)
myListThree.printList()

myList.printList(value=>console.log(value));

console.log("\n-=-=-=-=-=-=-= Pop =-=-=-=-=-=-=-=")
myList.popBack()
myList.printList()
console.log("\n-=-=-=-=-=-=-= Pop =-=-=-=-=-=-=-=")
myList.popBack()
myList.printList()
console.log("\n-=-=-=-=-=-=-= Pop =-=-=-=-=-=-=-=")
myList.popBack()
myList.printList()
console.log("\n-=-=-=-=-=-=-= Pop =-=-=-=-=-=-=-=")
myList.popBack()
myList.printList()
myList.removeHead()
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
myList.printList()
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log(myList.average())
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
myList.removeBack()
myList.printList()
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
myList.contains(22)
myList.printList()
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
myList.containsRecursive(2)
myList.removeBack()
myList.containsRecursive(2)
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
myList.printList()
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
myList.recursiveMax()