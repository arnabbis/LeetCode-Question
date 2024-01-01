let jewels = "aA";
let stones = "aAAbbbb";
let store = [];

for(let i=0;i<jewels.length;i++){
    for(let j=0;j<stones.length;j++){
        if(jewels[i]===stones[j]){
            store.push(j);
        }
    }
}

console.log(store)