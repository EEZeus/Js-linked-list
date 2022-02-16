class Node{
    constructor(value){
    this.value = value;
    this.next = null;
    }
}
class linkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList(){
        const arr = [];
        let current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(`${arr}`);
    }
    treverse(index){
        let current = this.head;
        for(let i = 1;i<=index;i++){
            current = current.next;
        }
        return current;
    }
    insert(value,index){
        if(index == 0)
            this.prepend(value);
        else if(index >= this.lenth)
            this.append(value);
        else{
        const newNode = new Node(value);
        let leader = this.treverse(index-1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
        }
    }
    remove(index){
        let leader = this.treverse(index-1);
        let unwanted = leader.next;
        leader.next = unwanted.next;
        unwanted.next=null;
        this.length--;
        if(this.length === 1){
            this.tail = this.head;
        }
    }
    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head = first;
        this.tail.next = null;
    }
}

let l1 = new linkedList(10);
l1.append(15);
l1.prepend(6);
l1.insert(9,2);
l1.reverse();
l1.printList();