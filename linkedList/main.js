class Node{
    constructor(value){
     this.head = value
     this.next = null 
    }
}


class LinkedList{
    constructor(value){
        this.head = new Node(value)
        
        this.tail = this.head
        this.length = 1
        
        
    }

push(value){
const newNode = new Node(value)
if (!this.head) {
    
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
this.length++
}

pop(){
    let temp  = this.head
    let prev = this.head
    while(temp.next){
        prev = temp
        temp =prev.next
    }

    
    this.tail = prev
    this.tail.next = null
    this.length--
}

addToStart(value){
const newNode = new Node(value)
if (!this.head) {
    
    this.head = newNode;
    this.tail = newNode;
  } else {
 newNode.next = this.head
 this.head = newNode
  }
this.length++
}

removeFirstElement(){
    if(!this.head){
        return undefined
    }
let temp = this.head
    this.head = this.head.next
    temp.next = null
this.length--
}

getFirst(){
    return this.head
}
getLast(){
    return this.tail
}

getByIndex(index){
   
    if (index < 0 || index >= this.length) return null; 

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
  
    return current;
}

}

const myLinkedList = new LinkedList(2)
myLinkedList.push(30)
myLinkedList.push(40)


el = myLinkedList.getByIndex(2)
console.log(el)
