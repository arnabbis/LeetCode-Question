let num = [5,4];
let store = [];
for(let i=0;i<=num.length;i++){
    for(let j=i+1;j<=num.length-1;j++){
        store.push((num[i]-1)*(num[j]-1))
    }
}

console.log(store)
let max = store[0];

for(let i=0;i<=store.length;i++){
    if(store[i]>max){
        max = store[i]
    }
}

console.log(max)