let words = ["aa","ab"];
let store = [];
let count = 0;
for(let i=0;i<words.length;i++){
    store.push(words[i].split('').sort().join(''));
}


for(let i=0;i<store.length;i++){
    for(let j=i+1;j<=store.length;j++){
        if(store[i]===store[j]){
            count = count+1
        }
    }
}

console.log(count)



