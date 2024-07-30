let s = "abacbcc";
let obj = {};
let found = true;
for(char of s){
    obj[char] = (obj[char]||0)+1
}

let values = Object.values(obj);
for(let i=1;i<values.length;i++){
    if(values[i]!==values[i-1]){
        found = false;
        break;
    }
}

console.log(found)