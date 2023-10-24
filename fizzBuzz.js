let n = 15;
let store = [];
for(let i=1;i<=n;i++){
    store.push(i.toString())
}

for(let i=0;i<store.length;i++){
    if(store[i]%5==0 && store[i]%3==0){
        store[i]="FuzzBuzz"
    }
    if(store[i]%3==0){
        store[i]="Fuzz"
    }
    if(store[i]%5==0){
        store[i]="Buzz"
    }
}

console.log(store)