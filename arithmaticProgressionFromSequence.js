let arr = [1,2,4];
let store = [];
let sortArr = [...arr].sort((a,b)=>a-b);
let sequnce = true;
for(let i=1;i<sortArr.length;i++){
    store.push(sortArr[i]-sortArr[i-1])
}

for(let i=1;i<store.length;i++){
    if(store[i]!==store[i-1]){
        sequnce=false;
        break;
    }
}

console.log(sequnce)


