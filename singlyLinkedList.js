/* 
 function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
     }
    push(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++
        }
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;

        let currentNode = this.head;
        let prevNode = currentNode;

        while(currentNode.next){
            prevNode = currentNode;
            currentNode=currentNode.next;
        }

        prevNode.next = null;
        this.tail = prevNode;
        this.length--;
        return currentNode;
 }

 shift(){
    if (this.length === 0) return undefined;

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    return currentHead;
 }

 unshift(val){
    let newNode = new Node(val)

    if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    }else{
        newNode.next = this.head
        this.head = newNode;
    }
    this.length++;
    return this;
 }

 set(index, val){
    let node = this._get(index);
    if(node){
        node.val = val;
        return node;
    }     
    return undefined;        
 }

 _get(index){
    if (this.length === 0) return undefined;

    if (index >= this.length) return undefined;

    let counter = 0;
    let currentNode = this.head;
    while(counter < index){
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
 }

 _insert(index, val){      
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val)

    let newNode = new Node(val);
    let prevNode = this._get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode
    newNode.next = temp;
    this.length++
    return true;
 }

 remove(index){
    if (index < 0 || index > this.length) return undefined;
    if(index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let foundNode = this._get(index - 1);
    let toBeRemovedNode = foundNode.next;
    foundNode.next = toBeRemovedNode.next;
    toBeRemovedNode.next = null;
    this.length --
    return toBeRemovedNode;
 }

 reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}




