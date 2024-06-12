let s = "ELELEEL";
let count = 0;

for(let i=0;i<s.length;i++){
    if(s[i]==='E'){
        count++
    }else if(s[i]==='L'){
        count--
    }
}

console.log(count)