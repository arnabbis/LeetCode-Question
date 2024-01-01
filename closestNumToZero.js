let num =[-100000,-100000]
let store = [];
function findCount(num){
let count = 0;
if(num<=0){
for(let i=num;i<0;i++){
    count++
}
}else{
    for(let i=0;i<num;i++){
        count++
    }
}
console.log(count);
}
for(let i=0;i<num.length;i++){
        store.push(findCount(num[i]))
        store.sort((a,b)=>a-b)
    }

console.log(store[0]);
