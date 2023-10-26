let sequence = "a";
let  word = "b";
let count = 0;
let store = [];
if(sequence.length==1 && sequence===word){
    count=1
}
for(let i=0;i<sequence.length;i++){
    for(let j=i+1;j<sequence.length;j++){
        store.push(sequence.slice(i,j))
    }
}
// console.log(store)
for(let i=0;i<store.length;i++){
    if(store[i]==word){
        count++;
    }
}
console.log(count)
