let s = "abcd";
let t = "abcde";

let obj = {};

let obj1 = {};
let store = [];
for(let i=0;i<s.length;i++){
    if(obj[s[i]]===undefined){
        obj[s[i]] = 1;
    }else{
        obj[s[i]]++;
    }
};
for(let i=0;i<t.length;i++){
    if(obj1[t[i]]===undefined){
        obj1[t[i]] = 1;
    }else{
        obj1[t[i]]++;
    }
}

for(let ele in obj){
    if(obj.hasOwnProperty(ele)&& obj[ele]!==obj1[ele]){
        store.push(ele)
    }
}
for(let ele in obj1){
    console.log(ele)
    if(obj1.hasOwnProperty(ele) && !obj.hasOwnProperty(ele)){
        store.push(ele)
    }
}

console.log(store)