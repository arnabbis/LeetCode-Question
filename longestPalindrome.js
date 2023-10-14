let s = "babad";
let store = [];
let palindromicArray = [];
for(let i=0;i<s.length;i++){
    for(let j=i+1;j<=s.length;j++){
        store.push(s.slice(i,j))
    }
}

console.log("store substring",store);
for(let i=0;i<store.length;i++){
    if(store[i].length>1 && !palindromicArray.includes(store[i])){
        palindromicArray.push(store[i])
    }
}






