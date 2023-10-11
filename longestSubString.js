let s = "pwwkew";
let store = [];
let unique = [];
let obj = {};
// let splitString ; 
let sliceString=0;
for(let i=0;i<s.length;i++){
    for(j=i+1;j<s.length;j++){
        s.slice(i,j)
        store.push(s.slice(i,j))
    }
}
// console.log(store)
for(let i=0;i<store.length;i++){
    for(j=0;j<store[i].length;j++){
        console.log([i][j])
    if(obj[store[i][j]]===undefined){
        obj[store[i][j]]=1
    }
}
}

console.log(obj)



