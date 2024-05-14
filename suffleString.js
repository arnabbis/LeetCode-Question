let s = "abc";
let indices = [0,1,2];
let store = [];
let word = '';

for(let i=0;i<s.length;i++){
    store.push([s[i],indices[i]])
    store.sort((a,b)=>a[1]-b[1])
}

let newWoed = store.map((ele)=>ele[0]).join('')

console.log(newWoed)



