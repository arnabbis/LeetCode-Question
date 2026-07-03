class Node {
    constructor(data)
    {
        this.data = data; // value
        this.next = null;
    }
}



let a = [10,2,3,4];

function convertArrToLinkedList(arr){
    let head = new Node(arr[0]);
    let curr = head;

    for(let i=1;i<arr.length;i++){
        let newNode = new Node(arr[i]);
        curr.next = newNode;
        curr = newNode
    }
    return head;
}


function printLinkedList(head){
    const temp = head;
    let res = '';
    while(!temp==null){
        res = res + temp.data  + '->';
        temp = temp.next;
    }
    console.log(res)
    return res;
}

// console.log(convertArrToLinkedList(a));
// console.log(printLinkedList(convertArrToLinkedList(a)));

const head = convertArrToLinkedList(a);
console.log(printLinkedList(head))