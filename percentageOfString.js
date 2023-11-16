let s = "foobar";
let letter = "o";
let store = [];
for(let i=0;i<s.length;i++){
    if(s[i]===letter){
        store.push(i)
    }
}

let percentage = parseInt(store.length/s.length*100);
console.log(percentage)
