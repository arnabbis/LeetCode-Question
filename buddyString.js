let s = "aaaaaaabc";
let goal = "aaaaaaacb";
let store = []
for(let i=0;i<s.length;i++){
    if(s[i]!==goal[i]){
        store.push(i);
    }
}

if(store.length===2){
    let split = s.split('')
    let temp = split[store[0]];
    split[store[0]]=split[store[1]];
    split[store[1]] = temp
    console.log(split.join('')===goal)
}

