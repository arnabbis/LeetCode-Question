let s = "aaaa";
let obj = {};
for(let i=0;i<s.length;i++){
    obj[s[i]] = (obj[s[i]]||0)+1
}

console.log(obj);

let storeObjVal = Object.values(obj);
console.log(storeObjVal)

for(let i=0;i<storeObjVal.length;i++){
    if(storeObjVal[i]!==storeObjVal[0]){
        console.log(false)
    }else{
        console.log(true)
    }
}