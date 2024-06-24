let strs = ['a'];
let arr = [];
let res = {};
for(let i=0;i<strs.length;i++){
    arr.push([strs[i].split('').sort().join(''),strs[i]])
}

arr.forEach(ele=>{
    let key = ele[0];
    let value = ele[1];
    if(!res[key]){
        res[key] = [];
    }
    res[key].push(value)
});

let data = Object.values(res).sort((a,b)=>a.length-b.length);
console.log(data)