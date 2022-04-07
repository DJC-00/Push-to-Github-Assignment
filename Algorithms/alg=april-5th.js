
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

};

myArr = [1,2,3,4,5,6,7]
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