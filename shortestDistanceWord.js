let s = "aaab";
let c = "b";
let store = [];
let storeValue = [];
for(let i=0;i<s.length;i++){
    if(s[i]===c){
        store.push(i)
    }
}

console.log(store)

for(let i=0;i<s.length;i++){
    for(let j=0;j<store.length;j++){
        if(i!==store[j]){
            storeValue.push(Math.abs(i-store[j]))
        }
    }
}

console.log(storeValue)