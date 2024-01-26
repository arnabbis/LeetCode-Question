let words1 =["a","ab"];
let words2 =["a","a","a","ab"];
let store = [];
let obj = {};
let obj1 = {};

for(let i=0;i<words1.length;i++){
    obj[words1[i]]=(obj[words1[i]]||0)+1
}
console.log(obj)
for(let i=0;i<words2.length;i++){
    obj1[words2[i]] = (obj1[words2[i]]||0)+1
}


for(let ele in obj){
    if(obj.hasOwnProperty(ele)&&obj1.hasOwnProperty(ele)&& obj[ele]===1&&obj1[ele]===1){
        store.push(ele)
    }
}

console.log(store)