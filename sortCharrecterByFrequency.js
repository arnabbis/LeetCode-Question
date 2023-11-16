let s = "Aabb";
let obj = {};
for(let i=0;i<s.length;i++){
    obj[s[i]] = (obj[s[i]]||0)+1
}
console.log(obj)
let result = [];

let keys = Object.keys(obj).sort((a,b)=>obj[b]-obj[a]);
console.log(keys);

keys.forEach((val)=>{
    for(let i=0;i<obj[val];i++){
        result.push(val)
    }
})

console.log(result.join(''))