class LinkedList {

    constructor(){
        this.first = null;
        this.last = null;
    }

    append(value){
        const node = new Node();
        node.value = value;
        if(this.last == null & this.first == null){
            this.first = node;
            this.last = node;
        }
        else{
            this.last.nextNode = node
            this.last = node;
        }
    }

    prepend(value){
        const node = new Node();
        node.value = value;
        if(this.last == null & this.first == null){
            this.first = node;
            this.last = node;
        }
        else{
            node.nextNode = this.first
            this.first = node;
        }
    }
   
    size(count = 0, node = this.first){
        if(node.nextNode == null){
            return count + 1;
        }
        else{
            return this.size(count + 1, node.nextNode)
        }
    }

    head(){
        return this.first;
    }

    tail(){
        return this.last;
    }

    //index starts at 0

    at(index, count = 0, node = this.first){
        if(index == count){
            return node;
        }
        else{
            return this.at(index, count + 1, node.nextNode)
        }
    }

    contains(value, node = this.first){
        if(node.nextNode == null && node.value != value){
            return false;
        }
        if(node.value == value){
            return true;
        }
        else{
            return this.contains(value, node.nextNode)
        }
    }

    find(value, index = 0, node = this.first){
        if(node.nextNode == null && node.value != value){
            return null;
        }
        if(node.value == value){
            return index;
        }
        else{
            return this.find(value, index + 1, node.nextNode)
        }
    }

    toString(string = "", node = this.first){
        string = string + "( " + node.value + " )"
        if(node.nextNode == null){
            return string + " -> " + null;
        }
        else{
            return this.toString(string + " -> ", node.nextNode)
        }
    }

}

class Node {
    constructor(value){
        this.value = null;
        this.nextNode = null;
    }
}

//Testing

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())
