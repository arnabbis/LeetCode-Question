let s = "aabb"
let splitArray = s.split('');
console.log(splitArray)
let obj = {};
for(let i=0;i<s.length;i++){
    obj[s[i]] = (obj[s[i]]||0)+1
}

console.log(obj)
let valueArray = [];
for(let [keys,values] of Object.entries(obj)){
if(values==1)
   valueArray.push(keys)
}
console.log(valueArray)


let findIndex = -1;

for(let i=0;i<splitArray.length;i++){
    let store = splitArray[i];
    let checkIndex = valueArray.indexOf(store);
    if(checkIndex!==-1){
        findIndex=i;
        break;
    }
}

console.log(findIndex)