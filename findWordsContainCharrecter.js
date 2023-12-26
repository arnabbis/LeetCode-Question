let words = ["abc","bcd","aaaa","cbc"];
let  x = "a";
let store = [];

for(let i=0;i<words.length;i++){
    if(words[i].includes(x)){
        store.push(i)
    }
}

console.log(store)
