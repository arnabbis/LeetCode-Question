let num = 2016 ;
let store = [];
for(let i=0;i<num;i++){
    if(num%i===0){
        store.push(i)
    }
}
console.log(store)
let perfectNum = true;
let sum = 0
for(let i=0;i<store.length;i++){
    sum = sum+store[i];
    if(sum!==num){
        perfectNum=false;
    }
}

